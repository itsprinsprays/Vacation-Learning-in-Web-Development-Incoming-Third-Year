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
            const previousCount = count - 1;
            if(previousCount >= 1) {
                setCount(count - 1);
                setName(studentNames[previousCount - 1]);
                }
        }}> Decrease</button>
        
        <button onClick={() => {
            const nextCount = count + 1;
            if(nextCount <= studentNames.length) {
                setCount(nextCount);
                setName(studentNames[nextCount - 1]);
            } else alert("No Student Ahead!");
        }}> Increase</button>

        </>
    );

}