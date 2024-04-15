import {useState,useEffect} from "react"

const MostSold = () => {
  var [mostSold,setMostSold] = useState([])
  var [isLoading,setIsloading] = useState (true)

  useEffect(() => {
    fetchProducts(3,(products,loading) => {setMostSold(products);setIsloading(loading)})
  },[])
  function fetchProducts(amount,callback) {
    let products = [{id:"0",name:"Kahvi",price:2.50},{id:"1",name:"Korvapuusti",price:2.00},{id:"2",name:"Laskiaispulla",price:2.00}]
    callback(products,false)
  }

  return <>
    {isLoading && <div style={{display:"flex",alignItems:"center"}}><p>Haetaan myydyimpiä tuotteitamme</p><div className="loader"></div></div>}
    {mostSold.length > 0 &&
      <>
      <p>{mostSold.length === 1 && "Myydyin tuoteemme"}{mostSold.length !== 1 && "Myydyimmät tuotteemme"}:</p>
      <ul>
        {mostSold.map(value => (
          <li key={value.id}><p>{value.name} {value.price} €</p></li>
        ))}
      </ul>
      </>
    }
  </>
};
  
export default MostSold