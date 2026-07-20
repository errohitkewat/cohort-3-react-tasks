
import { useParams } from "react-router";
import ProductDetailImage from "../components/ProductDetailImage";
import ProductDetailInfo from "../components/ProductDetailInfo";
import axios from "axios";
import { useEffect, useState } from "react";


const ProductDetailsPage = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});

  console.log(product)

  const getAProduct = async () => { 
    try {
      let res = await axios.get(`https://dummyjson.com/products/${id}`)
      setProduct(res.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAProduct();
  }, [])

    
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-14 lg:grid-cols-2">
        <ProductDetailImage product={ product } />
        <ProductDetailInfo product={ product } />
      </div>
    </section>
  );
};

export default ProductDetailsPage;


