let data = [
    {
        id: crypto.randomUUID(),
        title: "Integration API",
        description: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
        tags : ['Web', 'Python', 'API', "TS"],
        priority: "high",
        isFavourite: false
    },
    {
        id: crypto.randomUUID(),
        title: "Challan Form",
        description: "Handle data exchange efficiently.",
        tags : ['Invoice', 'JavaScript', 'API', "React"],
        priority: "medium",
        isFavourite: true
    },
    {
        id: crypto.randomUUID(),
        title: "Admission System",
        description: "Connect an existing API to a third-party database.",
        tags : ['Invoice', "React", "TS"],
        priority: "low",
        isFavourite: false
    },
    {
        id: crypto.randomUUID(),
        title: "Login Form",
        description: "Build login form and connect to the database. Make sure to authenticate first.",
        tags : ['AI', "React", "TS", "PHP"],
        priority: "high",
        isFavourite: true
    }
];

export default data;