import React, {Component} from "react"

class General extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            number: "",
            email: ""
    
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const{name, value} = e.target
        this.setState({
            [name]: value
        })
    }

   render() {
       return (
           <div>
               <h2>About you</h2>
           <form>
               <input
               type = "text"
               name = "firstName"
               value = {this.state.firstName}
               onChange={this.handleChange}
               placeholder="First Name" 
               />
               <br />
               <input
               type= "text"
               name= "lastName"
               value = {this.state.lastName}
               onChange = {this.handleChange}
               placeholder = "Last Name" 
               />
               <br />
               <input 
               type= "number"
               name= "number"
               value = {this.state.number}
               onChange = {this.handleChange}
               placeholder = "Contact Number"
               />
               <br />
               <input
               type= "email"
               name= "email"
               value = {this.state.email}
               onChange = {this.handleChange}
               placeholder = "Email" 
               />
               <br />
            <button>Submit</button>
           </form>
           </div>
       )
   }
}      

export default General