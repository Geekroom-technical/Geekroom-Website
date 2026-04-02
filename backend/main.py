from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="GeekRoom API", version="1.2.0")

# CORS setup - allowing frontend origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://10.31.182.181:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "GeekRoom API is running 🚀", "docs": "/docs"}

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

@app.get("/api/events")
async def get_events():
    return {
        "events": [
            {
                "id": 1,
                "title": "Hackathon 2025",
                "date": "2025-04-15",
                "description": "Annual GeekRoom Hackathon",
                "location": "SRM Ghaziabad",
                "image": "/events/hackathon.jpg",
                "status": "Upcoming"
            },
            {
                "id": 2,
                "title": "MERN Workshop",
                "date": "2025-03-20",
                "description": "Full-stack web development workshop",
                "location": "SRM Ghaziabad",
                "image": "/events/workshop.jpg",
                "status": "Completed"
            }
        ]
    }

@app.get("/api/team")
async def get_team():
    return {
        "teams": [
            {
                "name": "Web Development",
                "lead": {
                    "name": "John Doe",
                    "role": "Web Dev Lead",
                    "image": "/team/john.jpg",
                    "linkedin": "https://linkedin.com/in/johndoe"
                },
                "members": [
                    { "name": "Alice Sharma", "role": "Frontend Dev", "image": "/team/alice.jpg" },
                    { "name": "Bob Kumar", "role": "Backend Dev", "image": "/team/bob.jpg" }
                ]
            },
            {
                "name": "AI / ML",
                "lead": {
                    "name": "Jane Smith",
                    "role": "AI/ML Lead",
                    "image": "/team/jane.jpg"
                },
                "members": [
                    { "name": "Raj Patel", "role": "ML Engineer", "image": "/team/raj.jpg" }
                ]
            }
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
