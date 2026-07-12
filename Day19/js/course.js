async function handleCreateCourse(event) {
    event.preventDefault();

    const course = {
        courseName: document.querySelector("#courseName").value,
        unit: document.querySelector("#unit").value
    };

    try { 

        const createdCourse = await createCourse(course);

        console.log(createdCourse);

        alert("Course Created Succesfully");

        event.target.reset();


    } catch(error) {
        alert(error.message);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("CreateCourse");

    form.addEventListener("submit", handleCreateCourse);
});