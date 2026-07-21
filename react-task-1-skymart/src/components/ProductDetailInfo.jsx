import {
  Star,
  Minus,
  Plus,
  Heart,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const ProductDetailInfo = ({ product }) => {


  return (
    <div className="flex flex-col">
      {/* Category */}
      <span className="w-fit rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-0.5 text-xs text-lime-400">
        {product.category}
      </span>

      {/* Title */}
      <h1 className="text-md mt-4 font-clash font-bold leading-tight text-white sm:text-xl lg:text-2xl">
        {product.title}
      </h1>

      {/* Rating */}
      <div className="flex mt-3 flex-wrap items-center gap-3">
        <div className="flex text-yellow-400">
          {
            [...Array(4)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))
          }
          <Star size={14} />
        </div>

        <span className="font-semibold text-sm text-zinc-300">
          {product.rating}
        </span>

        <span className="text-zinc-500 text-sm">
          ({product.reviews?.length || 0} Reviews)
        </span>
      </div>

      <hr className=" my-5 border-zinc-700" />

      {/* Price */}
      <h2 className="text-2xl font-bold text-lime-400 sm:text-2xl lg:text-3xl">
        ${product.price}
      </h2>

      <hr className="my-5 border-zinc-700" />

      {/* Description */}
      <p className="text-sm text-zinc-400 lg:leading-6  ">
        {product.description}
      </p>

      {/* Quantity */}
      <div className="my-4 flex flex-col items-center justify-between gap-5 rounded-xl border border-zinc-700 px-5 py-4 sm:flex-row sm:gap-0">
        <span className="text-zinc-400">In cart:</span>

        <div className="flex items-center gap-4">
          <button className="rounded-lg border border-zinc-700 p-2 transition hover:border-lime-400">
            <Minus size={14} />
          </button>

          <span className="text-xl font-semibold">
            {product.quantity || 1}
          </span>

          <button className="rounded-lg border border-zinc-700 p-2 transition hover:border-lime-400">
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className=" flex flex-col gap-4 sm:flex-row">
        <button className="flex-1 rounded-2xl bg-green-900/30 border border-green-700 py-3 font-semibold text-green-300 transition hover:bg-green-800/40">
          ✓ Added to Cart
        </button>

        <button className="rounded-2xl border border-zinc-700 p-3 transition hover:border-lime-400">
          <Heart />
        </button>
      </div>

      <button className="mt-5 rounded-2xl border border-zinc-700 py-3 text-zinc-300 transition hover:border-lime-400 hover:text-white">
        View Cart →
      </button>

      {/* Features */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
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
      <div className="mt-12 flex flex-col gap-5 sm:flex-row">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-zinc-800 py-3 font-medium transition hover:bg-zinc-700">
          <ChevronLeft size={18} />
          Previous
        </button>

        <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-lime-400 py-3 font-semibold text-black transition hover:bg-lime-300">
          Next
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductDetailInfo;