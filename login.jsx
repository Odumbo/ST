import React,{Component} from "react";
export default class Login extends Component
{

constructor(props)
{
super(props);
this.state = {email:"", password:"", message:""};
}
render(){
return (
<div className="col-lg-9">
<h3 className="m-1 p-2 border-bottom">Login</h3>
<div className="form-group form-row">
<label className="col-lg-2">Email:</label>
<input type="text" className="form-contorl" value={this.state.email} onChange= {(event)=>{this.setState({email:event.target.value});
}}
/>
</div>
<div className="form-group form-row">
<label className="col-lg-2">Password:</label>
<input type="password" className="form-contorl"value={this.state.password} onChange= {(event)=>{this.setState({password:event.target.value});
}}/>
</div>
<div className="text-right">
{this.state.message}
<button className="btn btn-primary m-1" onClick={this.onLoginClick}>Submit</button>
</div>
</div>
);
}
onLoginClick = () =>{
console.log(this.state);
if (this.state.email==="" && this.state.password==="")
{

this.setState ({message: <span className="text-success">"Your in"</span>,
});
}else {

this.setState ({message:(
<span className="text-success">"Your in."</span>
),
});
}
};
}











