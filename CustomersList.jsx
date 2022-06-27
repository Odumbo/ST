import React, {Component} from "react";
export default class CustomerList extends Component{
    constructor(props)
    {
    super(props);
    this.state = {title:"", descrption:"", price:"", location:"", message:""};
    }   
render(){
return (
<div>
<h3 className="m-1 p-1">Add New Post
</h3>
<div className="form-group">
<label className="col-lg-2">Tile</label>
<input type="text" className="form-contorl"value={this.state.title} onChange= {(event)=>{this.setState({title:event.target.value});
}}></input>
</div>
<div></div>
<label className="col-lg-2">Description</label>
<input type="text" className="form-contorl"value={this.state.descrption} onChange= {(event)=>{this.setState({descrption:event.target.value});
}}></input>
<div></div>
<label className="col-lg-2">Price</label>
<input type="text" className="form-contorl"value={this.state.price} onChange= {(event)=>{this.setState({price:event.target.value});
}}></input>
<div></div>
<label className="col-lg-2">Location</label>
<input type="text" className="form-contorl"value={this.state.location} onChange= {(event)=>{this.setState({location:event.target.value});
}}></input>
<div className="text-right">
{this.state.message}
<button className="btn btn-primary m-1" onClick={this.onLoginClick}>Submit</button>
</div>
</div>
);
}
onLoginClick = () =>{
console.log(this.state);
if (this.state.title==="" && this.state.descrption==="")
{

this.setState ({message: <span className="text-success">"Thank you for posting"</span>,
});
}else {

this.setState ({message:(
<span className="text-success">"Thank you for posting"</span>
),
});
}
};
}

























