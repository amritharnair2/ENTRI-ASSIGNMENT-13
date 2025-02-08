import Header from "./components/Header"
import ProductCard from "./components/ProductCard"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import axios from 'axios';
import Loading from "./components/Loading";

function App() {

  const [products,setProducts] = useState([])

  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    // .then(res=>res.json())
    // .then(json=> { 
    //       console.log(json)
    //       setProducts(json)
    //        })

    axios.get('https://fakestoreapi.com/products').then((res) => {
      console.log(res.data)
      setProducts(res.data)
    }).catch((err) => {
      console.log(err)
    })
 
  },[])

  return (
   <>

<Header/>
      {

        products.length?  <div className="d-flex flex-column min-vh-100">
       
        <div className="container flex-grow-1 mx-auto p-4">
           <div className="row g-4">
            {products.map((product) => (
               <div key={product.id} className="col-md-4 col-lg-3">
                 <ProductCard item={product}/>
               </div>
             )) 
            } 
           </div>
        </div>
      
       </div>   : <Loading/>
      }

<Footer/>
   
   </>
  )
}

export default App
