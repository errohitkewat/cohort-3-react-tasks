

const ProductDetailImage = ({ product }) => {

  if (!product.images) {
    return <div className="flex  items-center h-160 rounded-3xl w-full border justify-center bg-zinc-300 p-10">
      <h1 className="text-2xl font-clash font-medium leading-0 text-black">Image Loading...</h1>
    </div>  
  }

  return (
    <div className="flex justify-center ">
      <div className=" h-160 w-full rounded-3xl bg-zinc-300 p-10">
        <img
          src={product.images[0]}
          alt={product.title}
          className=" w-full h-full object-cover"
        />
      </div>
    </div>  
  );
};


export default ProductDetailImage;



