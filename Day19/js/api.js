const API_URL = "http://localhost:8080/course/create";

async function createCourse(courseData) {

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(courseData)
        });

        if(!response.ok) {
            throw new Error("Failed to create course.")
        }

        return await response.json();


    } catch(error) {
        console.error(error);
        return null;
    }
}