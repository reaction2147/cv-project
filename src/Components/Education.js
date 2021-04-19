import React, {Component} from "react"

class Education extends Component {
    constructor() {
        super()
        this.state = {
            schoolName : "",
            courseTitle: "",
            startDate: "",
            endDate: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {name , value} = e.target
        this.setState({
            [name] : value
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
               <button>Sumbit</button>
            </form>
            </div>
        )
    }
}


export default Education