import React, {Component} from "react";
import "../styles/styles.css"
class Info extends Component
{   constructor(props)
    {
        super(props);
        this.state ={
            name:'',
            date:'',
            phone:'',
            address:'',
            address2:'',
            email:'',
            phone:'',
            open:false,
            
        }   
    }
   buttonActive = () =>
   {
       this.setState({open:!this.state.open});
   }
   handleChange =(e)=>
   {
       const {name,value} = e.target
       this.setState({[name]: value})
   }
   submitChanges =(e) =>
   {
       e.preventDefault();
       this.setState({open:!this.state.open});
       this.setState({submitted:true});

   }
    
    render(){
    return(
        <div class = "InfoMain">
            <div id = "Contact">Contact Info</div>
            {this.state.submitted === true?<section id = "submittedContactInfo">
            <div class = "Info_submitted">
                <div>{this.state.name}</div>
                <div>{this.state.date}</div>
                <div>{this.state.phone}</div>
                <div>{this.state.address}</div>
                <div>{this.state.address2}</div>               
                <div>{this.state.email}</div>
            </div>
            </section>:""}
            <button class ="button contactButton" onClick = {this.buttonActive} >
                + Contact
            </button>
            {this.state.open === true ? <div>

            <label>Add Contact Information</label>
            <br></br>

            <div class = "content"  >
                <div class ="levelbox">   
                <label>Name</label>
                <br></br>
                <input id = "name" 
                placeholder = "name"
                name = "name"
                onChange = {this.handleChange}
                value = {this.state.name}
                />
                <br></br>
                <label>Date</label>
                <br></br>
                <input id = "date" 
                placeholder = "date"
                name = "date"
                type = "date"
                onChange = {this.handleChange}
                value = {this.state.date}
                />
                <br></br>    
                <label>Phone</label>
                <br></br>
                <input id = "phone" 
                placeholder = "phone"
                name = "phone"
                onChange = {this.handleChange}
                value = {this.state.phone}/>
                <br></br>
                <label>Address</label>
                <br></br>
                <input id = "address" 
                placeholder = "address"
                name = "address"
                onChange = {this.handleChange}
                value = {this.state.address}
                />
                <br></br>
                <label>Address2</label>
                <br></br>
                <input id = "address2" 
                placeholder = "address"
                name = "address"
                onChange = {this.handleChange}
                value = {this.state.address2}/>
                <br></br>
                <label>Email</label>
                <br></br>
                <input id = "email" 
                placeholder = "email"
                name = "email"
                onChange = {this.handleChange}
                value = {this.state.email}/>
                <br></br>
                <button id = "submit" onClick = {this.submitChanges}>submit</button>
                <button id = "delete"> delete</button>
            </div>
            </div>
            

        </div>: ""}

        </div>
        
    );
        
    }
    
}
export default Info;