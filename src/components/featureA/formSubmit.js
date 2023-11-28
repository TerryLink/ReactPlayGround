import React from "react";

function FormSubmit() {
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("submit Form");
    };
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">submit</button>
        </form>
    )
}

export default FormSubmit