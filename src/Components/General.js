import React, {useState, useEffect, Component} from "react"


function General() {
   
    const [personalInfo, setPersonalInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		number: "", 
    })
        const [submit, setsubmit] = useState(false)
        
        

    function handleSubmit(e) {
        e.preventDefault()
        setsubmit({
            submit: true
        })  
    }

   function handleChange(e) {
    const { name, value } = e.target
    setPersonalInfo({
        ...personalInfo,
        [name] : value
    })
   }
   
   
       return (
           <div>
               <h2>About you</h2>
           <form onSubmit={handleSubmit}>
               <input
               type = "text"
               name = "firstName"
               value = {personalInfo.firstName}
               onChange={handleChange}
               placeholder="First Name" 
               />
               <br />
               <input
               type= "text"
               name= "lastName"
               value = {personalInfo.lastName}
               onChange = {handleChange}
               placeholder = "Last Name" 
               />
               <br />
               <input 
               type= "number"
               name= "number"
               value = {personalInfo.number}
               onChange = {handleChange}
               placeholder = "Contact Number"
               />
               <br />
               <input
               type= "email"
               name= "email"
               value = {personalInfo.email}
               onChange = {handleChange}
               placeholder = "Email" 
               />
               <br />
            <button type="submit">Save</button>
           </form> 
          {
              submit ? <p>{personalInfo.firstName} {personalInfo.lastName}
              <br/>{personalInfo.number}
              <br/>{personalInfo.email}</p> : null
          }
           </div>
       )
   }
      


export default General