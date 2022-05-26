import React, {Component} from "react";
export default class CustomerList extends Component{
state = {pageTitle: "Customers", customersCount:5,
customers:[
{id:1, name:"Scott", phone:"123-456", address: {city: "Concord"},photo:"https://picsum.photos/id/1010/50"},
{id:2, name:"Joe", phone:null, address: {city: "Walnut Creek"},photo:"https://picsum.photos/id/1018/50"},
{id:3, name:"Al", phone:"123-456",address: {city: "San Marin"},photo:"https://picsum.photos/id/1060/50"},
{id:4, name:"Jason", phone:null,address: {city: "Marin"},photo:"https://picsum.photos/id/1019/50"},
{id:5, name:"Jan", phone:"123-456",address: {city: "Sanarin"},photo:"https://picsum.photos/id/1040/50"},
],
};

render(){
return (
<div>
<h4 className="m-1 p-1">{this.state.pageTitle}
<span> {this.state.customersCount}</span>
<button className="btn btn-info"onClick={this.onRefreshClick}>Refresh</button>
</h4>;
<table className="table">
<thread>
<tr>
<th>#</th>
<th>Photo</th>
<th>Customer Name</th>
<th>Phone</th>
<th>City</th>
</tr>
</thread>
<tbody>
{this.getCustomerRow()}
</tbody>
</table>
</div>
);
}
onRefreshClick =()=> {
this.setState({customersCount:7});
};

getPhonetoRender=(phone)=>{
    if (phone)return phone;
    else{
    return <div className="bg-warning p-2 text-center">No Phone</div>;
}
}
getCustomerRow =()=>{
    return(this.state.customers.map((cust,index)=>{
    return(
<tr key={cust.id}>
<td>{cust.id}</td>
<td>
<img src={cust.photo} alt="Customer"/>
<div>
<button className="btn btn-sm btn-secondary" onClick={()=>{this.onChangePictureClick(cust,index);}}>Change Picture</button>
</div>
</td>
<td>{cust.name}</td>
<td>{this.getPhonetoRender(cust.phone)}</td>
<td>{cust.address.city}</td>
</tr>
);
}));
}
onChangePictureClick =(cust,index)=> {
};
}
