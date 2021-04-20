import React, {Component, useState, useEffect} from "react"

function Experience() {

    
    const [experience, setExperience] = useState ({
            companyName : "",
            position : "",
            tasks : "",
            startDate : "",
            endDate : "",
        })

        const [submit, setsubmit] = useState(false)
    

   function  handleChange(e) {
        const {name, value} = e.target
        setExperience({
            ...experience,
            [name] : value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setsubmit({
            submit: true
        })  
    }

    return (
            <div>
                <h2>Your Experience</h2> 
            <form onSubmit = {handleSubmit}>
                <input 
                type = "text"
                placeholder = "Company Name"
                value = {experience.companyName}
                name = "companyName"
                onChange = {handleChange}
                />
                <input 
                type = "text"
                placeholder = "Position Title"
                value = {experience.position}
                onChange = {handleChange}
                name = "position"
                />
                <label for = "start">Start Date</label>
                <input 
                type = "date"
                value = {experience.startDate}
                onChange = {handleChange}
                name = "startDate"
                />
                <label for = "end">End Date</label>
                <input 
                type = "date"
                value = {experience.endDate}
                onChange = {handleChange}
                name = "endDate"
                />
                <br />
                <textarea 
                type = "text-area"
                placeholder = "Job Tasks"
                value = {experience.tasks}
                onChange = {handleChange}
                name = "tasks"
                />
                <br/>
                <button>Save</button>
            </form>
            {
                submit ? <p>{experience.companyName}<br />
                {experience.position}<br/>
                {experience.startDate} to {experience.endDate}<br/>
                {experience.tasks}</p> : null
            }
            </div>
        )
    }


export default Experience