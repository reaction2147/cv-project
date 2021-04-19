import React, {Component} from "react"

class Education extends Component {
    constructor() {
        super()
        this.state = {
            schoolName : "",
            courseTitle: "",
            startDate: "",
            endDate: "",
            submit: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const {name , value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            submit: true
        })  
    }

    render() {
        return(
            <div>
                <h2>Education</h2>
            <form onSubmit = {this.handleSubmit}>
                <input
                type= "text"
                name= "schoolName"
                value = {this.state.schoolName}
                onChange = {this.handleChange}
                placeholder = "School Name" 
                />
                <input
                type= "text"
                name= "courseTitle"
                value = {this.state.courseTitle}
                onChange = {this.handleChange}
                placeholder = "Course Title" 
                />
                <label for="Start">Start Date</label>
                <input
                type= "date"
                name= "startDate"
                value = {this.state.startDate}
                onChange = {this.handleChange}
                />
                <label for="Start">End Date</label>
                <input
                type= "date"
                name= "endDate"
                value = {this.state.endDate}
                onChange = {this.handleChange}
                />
                <br/>
               <button type= "submit">Save</button>
            </form>
            {
                this.state.submit ? <p>{this.state.schoolName}<br/>{this.state.courseTitle}
                <br/>{this.state.startDate} to {this.state.endDate}</p> : null
            }
            </div>
        )
    }
}


export default Education