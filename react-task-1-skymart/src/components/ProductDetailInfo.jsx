import { Star, Minus, Plus, Heart, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import FeatureCard from "./FeatureCard";


const ProductDetailInfo = ({ product }) => {

    return (
        <div className="flex flex-col">
    
            {/* Category */}
            <span className="mb-6 w-fit rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-1 text-sm text-lime-400">
                {product.category}
            </span>
      
            {/* Title */}
            <h1 className="text-5xl font-bold text-white">
                {product.title}
            </h1>
      
            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
                <div className="flex text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                    ))}
                    <Star size={18} />
                </div>
        
                <span className="font-semibold text-zinc-300">
                  { product.rating }
                </span>
        
                <span className="text-zinc-500">
                  { product.reviews?.length }
                </span>
            </div>
      
            <hr className="my-8 border-zinc-700" />
      
            {/* Price */}
            <h2 className="text-6xl font-bold text-lime-400">
                ${product.price}
            </h2>
      
            <hr className="my-8 border-zinc-700" />
      
            {/* Description */}
            <p className="leading-8 text-zinc-400">
                {product.description}
            </p>
      
            {/* Quantity */}
            <div className="mt-10 flex items-center justify-between rounded-2xl border border-zinc-700 px-5 py-4">
      
                <span className="text-zinc-400">
                    In cart:
                </span>
        
                <div className="flex items-center gap-5">
        
                    <button className="rounded-xl border border-zinc-700 p-3 hover:border-lime-400">
                        <Minus size={18} />
                    </button>
          
                    <span className="text-lg font-semibold">
                        { product.quantity || 1 }
                    </span>
          
                    <button className="rounded-xl border border-zinc-700 p-3 hover:border-lime-400">
                        <Plus size={18} />
                    </button>
        
                </div>
            </div>
      
            {/* Buttons */}
            <div className="mt-6 flex gap-4">
      
                <button className="flex-1 rounded-2xl bg-green-900 py-5 font-semibold text-green-300">
                    ✓ Added to Cart
                </button>
        
                <button className="rounded-2xl border border-zinc-700 p-5 hover:border-lime-400">
                    <Heart />
                </button>
      
            </div>
      
            <button className="mt-5 rounded-2xl border border-zinc-700 py-5 text-zinc-300 transition hover:border-lime-400 hover:text-white">
                View Cart →
            </button>
      
            {/* Features */}
            <div className="mt-10 grid grid-cols-3 gap-5">
      
                <FeatureCard
                  icon={Truck}
                  title="Free Delivery"
                  description="On orders over $50"
                />
                
                <FeatureCard
                  icon={ShieldCheck}
                  title="Secure Payment"
                  description="256-bit SSL"
                />
                
                <FeatureCard
                  icon={RotateCcw}
                  title="Easy Returns"
                  description="30-day return policy"
                />
      
            </div>
      
            {/* Navigation */}
            <div className="mt-12 flex gap-5">
      
                <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-zinc-800 py-5 font-medium">
                    <ChevronLeft size={18} />
                    Previous
                </button>
      
                <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-lime-400 py-5 font-semibold text-black">
                    Next
                    <ChevronRight size={18} />
                </button>
      
            </div>
    
        </div>
    );
};

// function FeatureCard({ icon, title, subtitle }) {
//   return (
//     <div className="rounded-2xl border border-zinc-700 p-6 text-center">

//       <div className="mb-4 flex justify-center text-lime-400">
//         {icon}
//       </div>

//       <h3 className="font-semibold text-white">
//         {title}
//       </h3>

//       <p className="mt-1 text-sm text-zinc-500">
//         {subtitle}
//       </p>

//     </div>
//   );
// }

export default ProductDetailInfo;