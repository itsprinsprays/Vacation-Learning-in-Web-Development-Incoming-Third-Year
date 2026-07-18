const API_URL = "http://localhost:8080/course";

export async function createCourse(courseData) {
    const response = await fetch(`${API_URL}/create`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(courseData)
    });

    if(!response.ok) {
        const error = response.json();
        throw new Error(erro.message);
    }

    return response.json();

}