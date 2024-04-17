/* 
    This component list products that are fetched from api.
    Props:
    - amount : its the amount of products that will be shown
    - fetchFunction : function that will be used to get a list [{name,price,imgurl},...] of the products. 
    - category : category identifier that will be used when calling the fetch funtion
*/


import img from "./cinnamon-buns-sq2-1-of-1.jpg";
import {useState,useEffect} from "react"
const Products = (props) => {
  var [products,setProducts] = useState([])
  var [isLoading,setIsloading] = useState (true)
  
  useEffect(() => {
    fetchProducts(props.amount,products => {setProducts(products);setIsloading(false)},props.category)
  },[])
  function fetchProducts(amount,callback,category) {
    if(category != undefined) {
        let products = []
        
        switch(category) {
            case 0: {
                products = [{id:"0",name:"Lettu",price:2.50,imgurl:img},{id:"1",name:"Korvapuusti",price:2.00,imgurl:img},{id:"2",name:"Laskiaispulla",price:2.00,imgurl:img}]
                break;
            }
            case 1: {
                products = [{id:"0",name:"Kahvi",price:2.50},{id:"1",name:"Mehu",price:2.00},{id:"2",name:"Kaakao",price:2.00}]
                break;
            }
            default: {
                products = [{id:"0",name:"Kahvi",price:2.50},{id:"1",name:"Mehu",price:2.00},{id:"2",name:"Kaakao",price:2.00}]
                break;
            }
        }

        if(amount > products.length || amount === 0) {
            callback(products)
        }
        else {
            callback(products.slice(0,amount-1))
        }
    }
    
  }
  return <div className="products">
    {products.map(element => (
        <div className="product">
            <div className="left">
                <h3>{element.name}</h3>
                <p>{element.price} €</p>
            </div>
            <div className="right"><img src={element.imgurl} alt="korvapuusti" /></div>
        </div>
    ))}
  </div>
};
  
export default Products;