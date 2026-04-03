import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv("../.env")

client = MongoClient(os.getenv("MONGO_URI"))
db = client.get_default_database()


print("menu")
print("1: add event")
print("2 : delete event")

a = int(input("Enter: "))

if a==1:
    events_payload = {
    "name": "events",
    "items": [
        {   
            "id": "event 01",
            "title": "AMD AI Workshop with Daniel Wang",
            "date": "April 4, 2026",
            "location": "Remote",
            "description": "Build Agents.",
            "registerlink": "https://us06web.zoom.us/webinar/register/WN_N3Fo5UKKSRKQlJ2l2egSWg#/registration"
        },
        {
            "id": "event 02",
            "title" : "Geekroom Inaugration",
            "date" : "January 28 2026",
            "location": "Mahadev Lal Schroff Hall, SRMIST NCR Campus.",
            "description": "The first event by Geekroom, inaugrated by one of the founders of Geekroom, Arpit Singh."
        },
        {
            "id":"event 03",
            "title":"AI Unplugged",
            "date": "March 27 2026",
            "location": "Easwari Auditorium, SRMIST NCR Campus.",
            "description":"A dual talk of AI, held by Purvesh Gupta and Alok Kumar"
        },
    ]
}
    db.geekroom.update_one(
        {"name": "events"}, 
        {"$set": events_payload}, 
        upsert=True
    )

elif a==2:
    name = int(input("Enter event id to delete: "))
    db.geekroom.update_one(
        {"name": "events"}, 
        {"$pull": {"items": {"id": name}}}
    )
    


print("Events have been pushed to MongoDB!")
