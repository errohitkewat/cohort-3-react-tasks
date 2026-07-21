import { useParams } from "react-router";
import ProductDetailImage from "../components/ProductDetailImage";
import ProductDetailInfo from "../components/ProductDetailInfo";
import axios from "axios";
import { useEffect, useState } from "react";


const ProductDetailsPage = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getAProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAProduct();
  }, []);

  
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductDetailImage product={product} />
        <ProductDetailInfo product={product} />
      </div>
    </section>
  );
};

export default ProductDetailsPage;