import React from "react";
import {Component} from "react";
import "../styles/education.css";

class Education extends Component
{   constructor()   
    {
    super();
    this.state = {
        open: false,
        submitted: false,
            school:"",
            City:"",
            From:"",
            To:"",
            Degree:"",
            Descriptions:""}
    }
    
    buttonActive =() =>
    {
        this.setState({open:!this.state.open});
    
    }
    handleChange = (e) =>
    {
        const {name, value} = e.target // creates a key pair where a event produces a key pair
        this.setState({[name]: value})                               // e.target: {name,value} 

    }
    submitChanges =(e) =>
    {
        e.preventDefault();
        this.setState({open:!this.state.open});
        this.setState({submitted:true});
        
        
    }
    deleteChanges =(e) =>
    {
        e.preventDefault();
        this.setState({open:!this.state.open});
        this.setState({school:""});
        this.setState({City:""});
        this.setState({From:""});
        this.setState({To:""});
        this.setState({Degree:""});
        this.setState({Description:""});
        this.setState({submitted:false});
    }
    render(){
            console.log(this.state.open)
        return(
                <div class = "TitleCard">
                <div>Education</div>
                {this.state.submitted === true?<section>
                <section id = "submittedEduInfo">
                <div class = "education_submitted">
                <div>{this.state.school}</div>
                <div>{this.state.City}</div>
                <div>{this.state.From}</div>
                <div>{this.state.To}</div>
                <div>{this.state.Degree}</div>
                <div>{this.state.Descriptions}</div>
                </div>
                </section>
                </section>: ""}
                    <button class ="button EducationButton" onClick = {this.buttonActive} >
                        + Education
                    </button>
        
                {this.state.open === true ? <div>
                    {
                    <div class = "content">
                    <div class ="levelbox">
                    <form class = "education-form">
                      
                        <label>Add Education Details</label>
                        <br></br>
                        <label>University or School Name</label>
                        <br></br>
                        <input 
                            type = "text" 
                            placeholder = "Name"
                            name = "school"
                            onChange = {this.handleChange}
                            value = {this.state.school}
                        />
                        <br></br>
                        <label>City</label>
                        <br></br>
                        <input 
                            type = "text" 
                            placeholder = "City"
                            name = "City"
                            onChange = {this.handleChange}
                            value = {this.state.City}
                        />
                        <br></br>                       
                        
                        <label>From</label>
                        <br></br>
                        <input 
                            type = "date" 
                            placeholder = "YYYY"
                            name = "From"
                            onChange = {this.handleChange}
                            value = {this.state.From}
                        />
                   
                        <br></br>
                
                        <label>To</label>
                        <br></br>
                        <input  
                            type = "date" 
                            placeholder = "YYYY"
                            name = "To"
                            onChange = {this.handleChange}
                            value = {this.state.To}></input>
                      
                        <br></br>
                        <label>Degree(s)</label>
                        <br></br>
                        
                        <input 
                            type = "text" 
                            placeholder = "Degree"
                            name = "Degree"
                            onChange ={this.handleChange}
                            value = {this.state.Degree}
                        />
                        <br></br>
                        <label>Further Descriptions</label>
                        <br></br>
                        <textarea 
                        name = "roleDescription" 
                        placeholder = "Keep it short and simple"
                        />
                        <br></br>
                        <button id = "submit" onClick = {this.submitChanges}>submit</button>
                        <button id = "delete" onClick = {this.deleteChanges}> delete</button>
                    </form>
                </div>
                </div>}
                </div> :''}
                
      
                    



            
                </div>
                
                );
    }
}
export default Education;
