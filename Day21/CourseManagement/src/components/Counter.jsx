import { useState } from "react";

export default function Counter() {

    const studentNames = ["Prince", "Jedi", "Ben", "Snirp"];

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    return (
        <>

        <h1>{count}</h1>
        <h1>{name}</h1>    

        
        <button onClick={() => {
            if(count < studentNames.length) {
                setCount(count + 1);
                setName(studentNames[count]);
            } else alert("No Student Ahead!");
        }}> Increase</button>

        </>
    );

}