import React, {Component} from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
constructor(props){
console.log ("constructor-ShoppingCart");
super(props);
    this.state = {
products:[
    {id:1,productName:"Printer", price:50,quantity:0},
    {id:2,productName:"Camera", price:150,quantity:0},
    {id:3,productName:"Desk", price:500,quantity:0},
    {id:4,productName:"Laptop", price:500,quantity:0},
    {id:5,productName:"Cell Phone", price:500,quantity:0},
    {id:6,productName:"Television", price:500,quantity:0},
    {id:7,productName:"Computer", price:500,quantity:0},
],
};
}
render(){
    console.log ("render- ShoppingCart");
return (
<div className="container-fluid">
<h4>Items for Sale</h4>
<div className="row">
     {this.state.products.map((prod)=>{
        return(
<Product 
    key={prod.id} 
    product={prod} 
    onIncrament = {this.handleIncrement} 
    onDecrement = {this.handleDecrement}
    onDelete =    {this.handleDelete}>   
<button className="btn btn-primary">Purchase</button>
</Product>
     );
     })}
    </div>
    </div>
    );}
componentDidMount(){
    console.log("componentDidMount - ShoppingCart");
}

componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate-ShoppingCart", 
    prevProps, 
    prevState, 
    this.props,
    this.state,
);
//if (prevProps.x !==this.props.x){}

}

componentWillUnmount()
    {
        fetch('', {
            method: "Post",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username: "superman",
                password: "0rbust"
              }
            })
          }).then(response => response.json())
            .then(result => {
              console.log(result);
            })
            .catch(console.error);
   // });
        
   // });
  // });
    //console.log("componentWillUnmount-ShoppingCart");
    }

componentDidCatch(error,info){
    //console.log("componentWillUnmount-ShoppingCart");
    console.log(error,info);
}


handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
if(allProducts[index].quantity< maxValue){
    allProducts[index].quantity++;

this.setState({products:allProducts});
}
};


handleDecrement = (product, minValue) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
    if (allProducts[index].quantity>= minValue){
        allProducts[index].quantity--;
    
    

this.setState({products:allProducts});

}
};

handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (window.confirm ("delete?")){ 
    
    
    allProducts.slice(index,1);
    this.setState({products:allProducts});
};
}
}
    
    





























