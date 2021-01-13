import React, {Component} from "react";
import "../styles/job.css";
class Job extends Component{
    constructor(){
    super();
    this.state = {
        open:false,
        submitted:false,
        Company: "",
        City:"",
        From:"",
        To:"",
        Descriptions:""
    }
    }
    buttonActive =() =>
    {
        this.setState({open:!this.state.open})
    }
    handleChange =(e) =>
    {
        const {name,value} = e.target
        this.setState({[name]:value})
    }
    submitChanges =(e) =>
    {
        e.preventDefault();
        this.setState({open:!this.state.open});
        this.setState({submitted:true});
        /*
        console.log(this.state.Company)
        console.log(this.state.City)
        console.log(this.state.From)
        console.log(this.state.To)
        console.log(this.state.Descriptions)
        */
    }
    render(){
        console.log(this.state.open)
        return(
            <div class = "CareerSection">
                <div id ="Career" >Career</div>
                    <button class ="button jobButton" onClick = {this.buttonActive} >
                        +Career
                    </button>
            {this.state.open === true ? <div>
                <div class = "content"  >
                        <div class ="levelbox">
                            <label>Add Career Details</label>
                            <br></br>
                            <label>Company</label>
                            <br></br>
                            <input type = "text" 
                            placeholder = "Name"
                            name = "Company"
                            onChange = {this.handleChange}
                            value = {this.state.Company}
                            />
                            <br></br>
                            <label>City</label>
                            <br></br>
                            <input type = "text" 
                            placeholder = "City"
                            name = "City"
                            onChange = {this.handleChange}
                            value = {this.state.City}
                            />
                            <br></br>
                            <label>From</label>
                            <br></br>
                            <input type = "date" 
                            placeholder = "YYYY"
                            name = "From"
                            onChange = {this.handleChange}
                            value = {this.state.From}
                            />
                            <br></br>
                            <label>To</label>
                            <br></br>
                            <input type = "date" 
                            placeholder = "YYYY"
                            name = "To"
                            onChange = {this.handleChange}
                            value = {this.state.To}>
                            </input>
                            <br></br>
                            <label>Further Descriptions</label>
                            <br></br>
                            <textarea
                            input type = "text"
                            name = "roleDescription" 
                            placeholder = "Give a quick explanation of your role"
                            onChange = {this.handleChange}
                            value = {this.state.Descriptions} 
                            
                            />
                            <br></br>
                        <button id = "submit" onClick = {this.submitChanges}>submit</button>
                        <button id = "delete"> delete</button>
                    </div>
                </div>
                </div>: ""}
            {this.state.submitted === true ?<section id = "submittedCareerInfo">
                <div class = "Job_submitted">
                <div>{this.state.Company}</div>
                <div>{this.state.City}</div>
                <div>{this.state.From}</div>
                <div>{this.state.To}</div>
                <div>{this.state.Descriptions}</div>
                </div>
            </section>: ""}
            
               
            




            </div>
            
        );
            
        } 
    }

export default Job;