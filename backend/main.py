from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import os 

load_dotenv()

app = FastAPI(title="GeekRoom API", version="1.2.0")

MONGO_URI = os.getenv("MONGO_URI")
mongo = AsyncIOMotorClient(MONGO_URI, serverSelectionTimeoutMS=2000)
db = mongo.get_default_database()    #takes db from uri because me using same db for geekroom calender because wy not

#basic cors shit
origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "GeekRoom API is running FAAH", "docs": "/docs"}

@app.get("/api/mongo/status")
async def check_stats():
    try:
        await mongo.admin.command('ping')
        db_status = "ONLINE"
    except Exception as e:
        db_status = "OFFLINE"

    return {"status": db_status}

@app.get("/api/mongo/events")
async def get_event():
    events = await db.geekroom.find_one({"name": "events"}, {"_id": 0})
    return events 

@app.get("/api/team")
async def get_team():
    team_data = await db.geekroom.find_one({"name": "teams"}, {"_id": 0})
    return team_data or {"teams": []}





@app.get("/api/about")
async def get_about():
    return {
        "missionPoints": [
            {
                "title": "Learn Together",
                "description": "We grow faster through peer sessions, code reviews, and shared curiosity.",
                "icon_svg": "M4 6.5C4 5.67 4.67 5 5.5 5H11v14H5.5A1.5 1.5 0 0 1 4 17.5v-11ZM20 6.5C20 5.67 19.33 5 18.5 5H13v14h5.5a1.5 1.5 0 0 0 1.5-1.5v-11Z"
            },
            {
                "title": "Build Real Things",
                "description": "From prototypes to production-ready apps, we ship projects that actually matter.",
                "icon_svg": "M4 10.5 12 6l8 4.5v8L12 23l-8-4.5v-8ZM12 6v17M4 10.5l8 4.5 8-4.5"
            },
            {
                "title": "Grow as One",
                "description": "We celebrate wins together and support every member through every challenge.",
                "icon_svg": "M3.5 19c0-2.5 2-4.5 4.5-4.5S12.5 16.5 12.5 19M11.5 19c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5"
            },
        ],
        "activityCards": [
            "Workshops",
            "Hackathons",
            "Open Source",
            "Networking",
        ],
        "stats": [
            { "label": "Members", "value": "200+" },
            { "label": "Events", "value": "30+" },
            { "label": "Projects", "value": "50+" },
            { "label": "Years", "value": "3+" },
        ],
        "description": "Geek Room is a college tech club where students explore, collaborate, and create real software through workshops, hackathons, and community projects."
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
