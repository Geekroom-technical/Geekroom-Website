export async function GET(request) {
    try {
        const aboutData = {
            title: "About GeekRoom",
            description: "Geek Room is a college tech club where students explore, collaborate, and create real software through workshops, hackathons, and community projects.",
            mission: [
                {
                    title: "Learn Together",
                    description: "We grow faster through peer sessions, code reviews, and shared curiosity."
                },
                {
                    title: "Build Real Things",
                    description: "From prototypes to production-ready apps, we ship projects that actually matter."
                },
                {
                    title: "Grow as One",
                    description: "We celebrate wins together and support every member through every challenge."
                }
            ],
            activities: ["Workshops", "Hackathons", "Open Source", "Networking"],
            stats: [
                { label: "Members", value: "200+" },
                { label: "Events", value: "30+" },
                { label: "Projects", value: "50+" },
                { label: "Years", value: "3+" }
            ]
        };

        return Response.json(aboutData);
    } catch (error) {
        return Response.json(
            { error: "Failed to fetch about data" },
            { status: 500 }
        );
    }
}
