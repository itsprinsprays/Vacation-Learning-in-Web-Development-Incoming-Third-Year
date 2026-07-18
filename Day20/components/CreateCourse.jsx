import {useState} from "react";
import { createCourse } from "../api/courseApi"; 

function CreateCourse() {
    const [courseName, setCourseName] = useState("");
    const [unit, setUnit] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        const course = {
            courseName,
            unit
        };

        try {
            const createdCourse = await createCourse(course);

            console.log(createdCourse);

            alert("Course Created Succesfully");

            setCourseName("");
            setUnit("");

        } catch(error) {
            alert(error.message);
    }

    } 

    return (
        <div>

            <h2>Create Course</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Course Name</label>
                    <br />

                    <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)}/>

                </div>

                <br />

                <div>
                    <label>Unit</label>
                    <br />

                    <input type="number" value={unit} onChange={(e) => setUnit(e.target.value)}/>

                </div>

                <br />

                <button type="submit">Create Course</button>

            </form>

        </div>
    );

}

export default CreateCourse;