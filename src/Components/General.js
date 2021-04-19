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
               <h2>{this.state.firstName} {this.state.lastName}</h2>
               <h2>{this.state.email}</h2>
               <h2>{this.state.number}</h2>
           </form>
           
       )
   }
}      

export default General