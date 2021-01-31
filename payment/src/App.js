import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"





class App extends Component {
    constructor(){
        super()
        this.state = {
            fullname:'',
            nationalid: '',
            age:'',
            gender:'',
            costituency:'',
            county:'',
            ward:''
            


        
        }
    }

    changeFullname = (event) =>{
        this.setState({
            fullname:event.target.value
        })
    }
    changeNationalid = (event) =>{
        this.setState({
            nationalid:event.target.value
        })
    }
    changeAge = (event) =>{
        this.setState({
            age:event.target.value
        })
    }
    changeGender = (event) =>{
        this.setState({
            gender:event.target.value
        })
    }
    changeConstituency = (event) =>{
        this.setState({
            constituency:event.target.value
        })
    }
    changeCounty = (event) =>{
        this.setState({
            county:event.target.value
        })
    }
    changeWard = (event) =>{
        this.setState({
            ward:event.target.value
        })
    }
   

    render() {
        return (
            <div>
                <div>
                    <img className="logo" src="https://res.cloudinary.com/dbw3atowz/image/upload/v1598467936/fyfy/Flag-Kenya_rmuovd.jpg"></img>
                    <h2 className="text-center text-muted mt-3">REPUBLIC OF KENYA</h2>
                    <h4 className="text-center text-muted mt-3">Independent Electoral and Boundaries Commision</h4>
                    <h5 className="text-center text-muted mt-3"> Voter's Form</h5>
                </div>
                <form>
                     <input type="text"
                     placeholder="fullname"
                     onChange={this.changeUsername}
                     className="form-group form-control"
                     value={this.state.fullname}
                     />
                     
                     <input type="text"
                     placeholder="nationalid"
                     onChange={this.changeNationalid}
                     className="form-group form-control"
                     value={this.state.nationalid}
                     />
                     <input type="text"
                       placeholder="age"
                       onChange={this.age}
                       className="form-group form-control"
                       value= {this.state.age}
                       />

                       
                       <input type="text"
                       placeholder="gender"
                       onChange={this.gender}
                       className="form-group form-control"
                       value= {this.state.gender}
                       />

                       <input type="text"
                       placeholder="constituency"
                       onChange={this.consistuency}
                       className="form-group form-control"
                       value= {this.state.constituency}
                       />

                   <form class="form-inline">
                      <label class="my-1 mr-2" for="inlineFormCustomSelectPref">County</label>
                     <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                     <option selected>select</option>
                     <option value="1">Nairobi</option>
                    <option value="2">Mombasa</option>
                   <option value="3">Meru</option>
                   <option value="3">Kisumu</option>
                   <option value="3">Eldoret</option>
                      </select>

                   
                      
                   
                         </form>

                       <input type="text"
                       placeholder="ward"
                       onChange={this.ward}
                       className="form-group form-control"
                       value={this.state.ward}
                       />

                </form>
                   <center>
                   <button className="btn">SUBMIT

                   </button>
                   </center>
                   
                   
                   
           
            </div>
        );
    }
}



export default App;

