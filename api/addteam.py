import os
from pymongo import MongoClient
from dotenv import load_dotenv

# Load env from root
load_dotenv("../.env")

client = MongoClient(os.getenv("MONGO_URI"))
db = client.get_default_database()

def main():
    print("GeekRoom Team Manager")
    print("1: Update Team Data")
    print("2: Exit")
    
    choice = input("Enter choice: ")
    
    if choice == "1":
        payload = {
            "name": "teams",
            "top3": {
                "president": { "name": "Shrestha Chatterjee", "image": "https://res.cloudinary.com/dwqzgfghq/image/upload/v1774879438/WhatsApp_Image_2026-03-30_at_19.33.35_f037dh.jpg", "tagline":"AI/ML enthusiast and builder, crafting innovative tech solutions with a passion for learning and impact."},
                "vice-president": { "name": "Arush Anand Singh", "image": "https://res.cloudinary.com/dwqzgfghq/image/upload/v1775114031/arush_b46til.jpg", "tagline":"I can turn on a Cessna in flight sims"},
                "secretary": { "name": "Pradeepto Pal", "image": "https://res.cloudinary.com/dwqzgfghq/image/upload/v1774879336/WhatsApp_Image_2026-03-30_at_19.31.07_o9nnpf.jpg" ,"tagline":"I use Arch btw :)"}
            },
            "teams": [
                {
                    "name": "Technical",
                    "lead": {
                        "name": "Atharva",
                        "role": "Technical Lead",
                        "image": "https://res.cloudinary.com/dwqzgfghq/image/upload/v1774878148/atharva_ncctnf.jpg",
                        "github": "https://github.com/ARTLEST",
                        "tagline":"Viral by nature , digital by choice (≡・x・≡)"

                    },
                    "colead": {
                        "name": "Bhavay Joshi",
                        "role": "Technical Co-Lead",
                        "github": "https://github.com/BhavayJ-here",
                        "tagline" : "High functioning humanoid ",
                        "image": "https://res.cloudinary.com/dwqzgfghq/image/upload/v1773757343/quill/form-responses/d1a86046-8e35-4063-ae08-8ef50170d8c1/f6d16c9e-11e7-40be-997e-200f4a22e0e8/1773757339458.jpg"
                    },
                    "members": [
                        { "name": "Varun Chauhan", "role": "Member", "github": "https://github.com/ryderthuglife" },
                        { "name": "Jatin Kumar", "role": "Member", "github": "https://github.com/jatingow" },
                        { "name": "Deepanshu Tevathiya", "role": "Member", "github": "https://github.com/DeepanshuTevathiya" },
                        { "name": "Umar Mahtab", "role": "Member", "github": "https://github.com/umarmahtab" },
                        { "name": "Abhinav Rana", "role": "Member", "github": "https://github.com/Abhinav-Abster" },
                        { "name": "Yash Agarwal", "role": "Member", "github": "https://github.com/YashAgarwal2024" },
                        { "name": "Pranik Yadav", "role": "Member", "github": "https://github.com/Pranik16" },
                        { "name": "Harsh Singhal Yadav", "role": "Member", "github": "https://github.com/harsh-0112" }

                    ]
                },
                {
                    "name": "Design",
                    "lead": { "name": "Pranjal Garg", "role": "Design Lead", "image": "https://res.cloudinary.com/dwqzgfghq/image/upload/v1773772204/quill/form-responses/d1a86046-8e35-4063-ae08-8ef50170d8c1/f6d16c9e-11e7-40be-997e-200f4a22e0e8/1773772201198.jpg", "tagline":"A passionate creator blending nostalgia, creativity, and purpose—building things that feel as meaningful as they look." },
                    "colead": { "name": "Yuvraj", "role": "Design Co-Lead", "image":"https://res.cloudinary.com/dwqzgfghq/image/upload/v1773726351/quill/form-responses/d1a86046-8e35-4063-ae08-8ef50170d8c1/f6d16c9e-11e7-40be-997e-200f4a22e0e8/1773726347256.jpg", "tagline": "I turn ideas into reality by thinking differently and creating fearlessly." },

                    "members": [
                         { "name": "Naman Gupta", "role": "Member" },
                         { "name": "Samarth Gupta", "role": "Member" }
                    ]
                },

                {
                    "name": "Management",
                    "lead": { "name": "Aayush", "role": "Management Lead", "image": "https://res.cloudinary.com/dwqzgfghq/image/upload/v1773760154/quill/form-responses/d1a86046-8e35-4063-ae08-8ef50170d8c1/f6d16c9e-11e7-40be-997e-200f4a22e0e8/1773760152615.jpg" ,"tagline":"Plotting my villain arc in tech and the stock market."},
                    "colead": { "name": "Arpita Sharma", "role": "Management Co-Lead" ,"tagline":"Ambitious and disciplined individual with a passion for excellence", "image":"https://res.cloudinary.com/dwqzgfghq/image/upload/v1774016578/quill/form-responses/d1a86046-8e35-4063-ae08-8ef50170d8c1/f6d16c9e-11e7-40be-997e-200f4a22e0e8/1774016574111.jpg"},
                    "members": [
                         { "name": "Kriti Srivastava", "role": "Member" },
                         { "name": "Ujjwal chanana", "role": "Member" },
                         { "name": "Bhavya", "role": "Member" },
                         { "name": "Vinayak Tandon", "role": "Member" },
                         { "name": "Dhruv Khurana", "role": "Member" },
                         { "name": "Muskan", "role": "Member" },
                         { "name": "AKSHARA GOYAL", "role": "Member" },
                         { "name": "Nikita Singh", "role": "Member" },
                         { "name": "Deep chaudhary", "role": "Member" },
                         { "name": "Aditi Bisht", "role": "Member" },
                         { "name": "Kaureen khan", "role": "Member" },
                         { "name": "Avishi", "role": "Member" }
                    ]
                },

                {
                    "name": "Editorial",
                    "lead": { "name": "Nansee gupta", "role": "Editorial Lead", "image": "https://res.cloudinary.com/dwqzgfghq/image/upload/v1773758954/quill/form-responses/d1a86046-8e35-4063-ae08-8ef50170d8c1/f6d16c9e-11e7-40be-997e-200f4a22e0e8/1773758948282.jpg" ,"tagline":"A curious mind with a tech-savvy spark, always exploring, questioning, and building smarter ideas."},
                    
                    "members": [
                         { "name": "Anvesha Arya", "role": "Member" },
                         { "name": "Anushka Sharma", "role": "Member" },
                         { "name": "Ayush Srivastava", "role": "Member" }
                    ]
                },

                {
                    "name": "Photography",
                    "lead": { "name": "Saurabh Yadav", "role": "Photography Lead", "image": "https://res.cloudinary.com/dwqzgfghq/image/upload/v1773726493/quill/form-responses/d1a86046-8e35-4063-ae08-8ef50170d8c1/f6d16c9e-11e7-40be-997e-200f4a22e0e8/1773726489831.jpg" ,"tagline":"Capturing moments today that feel like memories tomorrow "},
                    "colead": { "name": "Prachi Sharma", "role": "Photography Co-Lead", "tagline":"Leading with vision, capturing stories that words can’t express ", "image":"https://res.cloudinary.com/dwqzgfghq/image/upload/v1773773220/quill/form-responses/d1a86046-8e35-4063-ae08-8ef50170d8c1/f6d16c9e-11e7-40be-997e-200f4a22e0e8/1773773206092.jpg"},
            
                    "members": [
                         { "name": "Mahi Kumari", "role": "Member" },
                         { "name": "Rajveer Chouhan", "role": "Member" }
                    ]
                },
                {
                    "name": "Outreach & Sponsorship",
                    "core_members": [
                        { "name": "Ayush Sahu", "role": "Outreach & Sponsorship Core Member", "image": "https://res.cloudinary.com/dwqzgfghq/image/upload/v1773757394/quill/form-responses/d1a86046-8e35-4063-ae08-8ef50170d8c1/f6d16c9e-11e7-40be-997e-200f4a22e0e8/1773757393986.jpg" ,"tagline":"Milna mushkil, kaam pakka."},
                        { "name": "Nirmanyu Sehgal", "role": "Outreach & Sponsorship Core Member", "image": "https://res.cloudinary.com/dwqzgfghq/image/upload/v1774278220/nirmanyu_t2zkwz.jpg" ,"tagline":"Turning logic into projects and conversations into collaborations."}
                    ]
                },
                {
                    "name": "Treasurer",
                    "core_members": [
                        { "name": "Abhinav Chauhan", "role": "Treasurer Core Member", "image": "https://res.cloudinary.com/dwqzgfghq/image/upload/v1773726385/quill/form-responses/d1a86046-8e35-4063-ae08-8ef50170d8c1/f6d16c9e-11e7-40be-997e-200f4a22e0e8/1773726381775.jpg" ,"tagline":"Your friendly treasurer ready to manage your money and be pirate of your treasure "}
                    ]
                }
            ]
        }

        db.geekroom.update_one(
            {"name": "teams"}, 
            {"$set": payload}, 
            upsert=True
        )
        print("✅ Team structure with Top 3 and Departments synced!")
    else:
        print("Exiting.")

if __name__ == "__main__":
    main()
