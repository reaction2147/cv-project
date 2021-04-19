import React, {Component} from "react"

class Experience extends Component {
    constructor() {
        super()
        this.state = {
            companyName : "",
            position : "",
            tasks : "",
            startDate : "",
            endDate : ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleSumbit(e) {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div>
                <h2>Your Experience</h2> 
            <form onSubmit = {this.handleSumbit}>
                <input 
                type = "text"
                placeholder = "Company Name"
                value = {this.state.companyName}
                
                name = "companyName"
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
                <button>Sumbit</button>
            </form>
            <p>{this.state.companyName}</p>
            </div>
        )
    }
}

export default Experience