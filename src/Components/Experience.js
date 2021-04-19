import React, {Component} from "react"

class Experience extends Component {
    constructor() {
        super()
        this.state = {
            companyName : "",
            position : "",
            tasks : "",
            startDate : "",
            endDate : "",
            submit : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
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
        return (
            <div>
                <h2>Your Experience</h2> 
            <form onSubmit = {this.handleSubmit}>
                <input 
                type = "text"
                placeholder = "Company Name"
                value = {this.state.companyName}
                name = "companyName"
                onChange = {this.handleChange}
                />
                <input 
                type = "text"
                placeholder = "Position Title"
                value = {this.state.position}
                onChange = {this.handleChange}
                name = "position"
                />
                <label for = "start">Start Date</label>
                <input 
                type = "date"
                value = {this.state.startDate}
                onChange = {this.handleChange}
                name = "startDate"
                />
                <label for = "end">End Date</label>
                <input 
                type = "date"
                value = {this.state.endDate}
                onChange = {this.handleChange}
                name = "endDate"
                />
                <br />
                <textarea 
                type = "text-area"
                placeholder = "Job Tasks"
                value = {this.state.tasks}
                onChange = {this.handleChange}
                name = "tasks"
                />
                <br/>
                <button>Save</button>
            </form>
            {
                this.state.submit ? <p>{this.state.companyName}<br/>{this.state.position}
                <br/>{this.state.startDate} to {this.state.endDate}
                <br/>{this.state.tasks}</p> : null
            }
            </div>
        )
    }
}

export default Experience