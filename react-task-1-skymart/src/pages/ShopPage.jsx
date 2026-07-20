import { useContext } from "react";
import { Search } from "lucide-react";
import FilterBar from "../components/FilterBar";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";


const ShopPage = () => {

  const { productsData, cartItems } = useContext(MyStore)

  return (
    <div className="lg:px-32 flex flex-col gap-5 px-5 py-10">
      
      <div>
        <h1 className="text-4xl font-clash font-semibold">All Products</h1>
        <p className="text-sm mt-2 text-zinc-400"><span>{productsData.length}</span> Products found</p>
      </div>

      <FilterBar />

      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        { 
          productsData.map((product) => {

            let isInCart = cartItems.find((elem) => elem.id === product.id) 

            return <ProductCard
              isInCart={isInCart}
              key={product.id}
              product={product}
            />
          })
        }
      </div>

    </div>
  )
}

export default ShopPage




