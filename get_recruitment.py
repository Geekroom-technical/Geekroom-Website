import os
import json
from pymongo import MongoClient
from dotenv import load_dotenv

# Load environment variables (.env in current or api directory)
load_dotenv()
if not os.getenv("MONGO_URI"):
    load_dotenv(os.path.join(os.path.dirname(__file__), "api", ".env"))

MONGO_URI = os.getenv("MONGO_URI")

def get_db():
    if not MONGO_URI:
        print("[!] MONGO_URI not found in environment or .env file.")
        return None
    try:
        client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=3000)
        # Verify connection
        client.admin.command('ping')
        db = client.get_default_database()
        if db is None or db.name == 'test':
            db = client["websitedb"]
        return db
    except Exception as e:
        print(f"[!] MongoDB Connection Error: {e}")
        return None

def clean_applicant(applicant):
    if not isinstance(applicant, dict):
        return applicant
    app = dict(applicant)
    dept_answers = app.get("deptAnswers", {})
    if isinstance(dept_answers, dict):
        app["deptAnswers"] = {
            k: v for k, v in dept_answers.items()
            if v not in ("", [], None)
        }
    return app

def fetch_applicants():
    db = get_db()
    if db is None:
        return []

    raw = []
    # Check geekroom collection with name: 'recruitment'
    doc = db.geekroom.find_one({"name": "recruitment"})
    if doc and "recruitment" in doc:
        raw = doc["recruitment"]
    elif "recruitment_applicants" in db.list_collection_names():
        raw = list(db.recruitment_applicants.find({}, {"_id": 0}))

    return [clean_applicant(a) for a in raw]

def print_summary(applicants):
    total = len(applicants)
    print("\n" + "=" * 60)
    print(f"       GEEK ROOM RECRUITMENT SUMMARY (Total: {total})")
    print("=" * 60)

    if total == 0:
        print("No applications received yet.")
        return

    # Count by department
    dept_counts = {}
    branch_counts = {}
    for a in applicants:
        dept = a.get("department", "Unknown")
        branch = a.get("branch", "Unknown")
        dept_counts[dept] = dept_counts.get(dept, 0) + 1
        branch_counts[branch] = branch_counts.get(branch, 0) + 1

    print("\n[+] By Department:")
    for dept, count in sorted(dept_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"    - {dept.upper():<25} : {count}")

    print("\n[+] By Branch:")
    for branch, count in sorted(branch_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"    - {branch:<25} : {count}")
    print("-" * 60)

def print_table(applicants):
    if not applicants:
        print("\nNo applicants found.")
        return

    print("\n" + "=" * 105)
    print(f"{'#':<4} {'Name':<20} {'Reg No':<17} {'Phone':<12} {'Branch':<14} {'Sec':<4} {'Department':<14}")
    print("=" * 105)

    for i, a in enumerate(applicants, 1):
        name = (a.get("name") or "")[:18]
        reg = (a.get("registrationNo") or "")[:16]
        phone = (a.get("phone") or "-")[:11]
        branch = (a.get("branch") or "")[:12]
        sec = a.get("section") or "-"
        dept = (a.get("department") or "")[:13]
        print(f"{i:<4} {name:<20} {reg:<17} {phone:<12} {branch:<14} {sec:<4} {dept:<14}")
    print("-" * 105)

def print_applicant_details(applicant):
    print("\n" + "#" * 60)
    print(f" APPLICANT: {applicant.get('name')} ({applicant.get('registrationNo')})")
    print("#" * 60)
    print(f"Phone         : {applicant.get('phone', 'N/A')}")
    print(f"Department    : {applicant.get('department', '').upper()}")
    print(f"Branch / Sec  : {applicant.get('branch')} (Section: {applicant.get('section')})")
    print(f"Commitment    : {applicant.get('timeCommitment')}")
    print(f"Submitted At  : {applicant.get('submittedAt')}")
    print("\n[?] Why Join Geek Room?")
    print(f"    {applicant.get('whyJoin')}")
    print("\n[?] Past Experience:")
    print(f"    {applicant.get('pastExperience')}")

    dept_answers = applicant.get("deptAnswers", {})
    if dept_answers:
        print("\n[+] Department Answers:")
        for k, v in dept_answers.items():
            if isinstance(v, list):
                val_str = ", ".join(v) if v else "None selected"
            else:
                val_str = str(v)
            if val_str.strip():
                print(f"    - {k}: {val_str}")
    print("#" * 60)

def delete_applicant(reg_no):
    db = get_db()
    if db is None:
        return False
    res = db.geekroom.update_one(
        {"name": "recruitment"},
        {"$pull": {"recruitment": {"registrationNo": reg_no.strip().upper()}}}
    )
    return res.modified_count > 0

def delete_all_applicants():
    db = get_db()
    if db is None:
        return False
    res = db.geekroom.update_one(
        {"name": "recruitment"},
        {"$set": {"recruitment": []}}
    )
    return res.acknowledged

def main():
    applicants = fetch_applicants()
    print_summary(applicants)

    while True:
        print("\nMenu:")
        print("1. View all applicants list")
        print("2. Filter by department")
        print("3. View detailed response of an applicant")
        print("4. Export all to JSON file")
        print("5. Refresh data")
        print("6. Delete a specific response")
        print("7. Delete ALL responses")
        print("8. Exit")

        choice = input("\nEnter choice (1-8): ").strip()

        if choice == "1":
            print_table(applicants)

        elif choice == "2":
            dept_input = input("Enter department name (e.g. technical, management, design...): ").strip().lower()
            filtered = [a for a in applicants if a.get("department", "").lower() == dept_input]
            print(f"\nFound {len(filtered)} applicant(s) for '{dept_input}':")
            print_table(filtered)

        elif choice == "3":
            if not applicants:
                print("No applicants to view.")
                continue
            idx_or_reg = input("Enter applicant # number or Registration No: ").strip()
            found = None
            if idx_or_reg.isdigit():
                idx = int(idx_or_reg) - 1
                if 0 <= idx < len(applicants):
                    found = applicants[idx]
            if not found:
                for a in applicants:
                    if a.get("registrationNo", "").upper() == idx_or_reg.upper():
                        found = a
                        break
            if found:
                print_applicant_details(found)
            else:
                print("[!] Applicant not found.")

        elif choice == "4":
            filename = "recruitment_results.json"
            with open(filename, "w", encoding="utf-8") as f:
                json.dump(applicants, f, indent=2, ensure_ascii=False)
            print(f"[✓] Exported {len(applicants)} applicants to '{filename}' successfully!")

        elif choice == "5":
            applicants = fetch_applicants()
            print("[✓] Data refreshed!")
            print_summary(applicants)

        elif choice == "6":
            if not applicants:
                print("No applicants to delete.")
                continue
            idx_or_reg = input("Enter applicant # number or Registration No to delete: ").strip()
            target_reg = None
            target_name = None

            if idx_or_reg.isdigit():
                idx = int(idx_or_reg) - 1
                if 0 <= idx < len(applicants):
                    target_reg = applicants[idx].get("registrationNo")
                    target_name = applicants[idx].get("name")
            if not target_reg:
                for a in applicants:
                    if a.get("registrationNo", "").upper() == idx_or_reg.upper():
                        target_reg = a.get("registrationNo")
                        target_name = a.get("name")
                        break

            if not target_reg:
                print("[!] Applicant not found.")
                continue

            confirm = input(f"Are you sure you want to delete {target_name} ({target_reg})? (y/N): ").strip().lower()
            if confirm == "y":
                if delete_applicant(target_reg):
                    print(f"[✓] Successfully deleted {target_name} ({target_reg}) from MongoDB!")
                    applicants = fetch_applicants()
                else:
                    print("[!] Failed to delete applicant.")
            else:
                print("Cancelled.")

        elif choice == "7":
            if not applicants:
                print("No applicants to delete.")
                continue
            confirm = input("⚠️ WARNING: This will permanently delete ALL applicants! Type 'CONFIRM': ").strip()
            if confirm == "CONFIRM":
                if delete_all_applicants():
                    print("[✓] All responses have been deleted from MongoDB!")
                    applicants = fetch_applicants()
                else:
                    print("[!] Failed to delete all applicants.")
            else:
                print("Aborted.")

        elif choice == "8":
            print("Exiting.")
            break
        else:
            print("Invalid option. Please choose 1-8.")

if __name__ == "__main__":
    main()
