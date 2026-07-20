
import { Minus, Plus, Trash2, X } from "lucide-react";

const CartProductCard = ({ item }) => {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-zinc-700 bg-[#111111] p-4 hover:border-lime-400 transition-all duration-300">
                                  
            {/* Product Image */}
            <div className="h-22 w-22 shrink-0 overflow-hidden rounded-xl bg-white p-2">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
            </div>


            {/* Product Info */}
            <div className="flex flex-1 flex-col justify-between">

                <div className="flex flex-col gap-1">
                    <h3 className="line-clamp-0 text-md font-light text-white">
                        {item.title}
                    </h3>
                    <p className=" text-xl font-clash font-medium text-lime-400">
                        ${item.price}
                    </p>
                    <p className="text-xs text-zinc-500">
                        ${item.price} each
                    </p>
                </div>

                {/* Quantity */}
                <div className="mt-2 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <button className="flex p-1.5 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition hover:border-lime-400 hover:text-white">
                            <Minus size={15} />
                        </button>

                        <span className="min-w-4 text-center text-lg font-medium text-white">
                            {item.quantity || 1}
                        </span>

                        <button className="flex p-1.5 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition hover:border-lime-400 hover:text-white">
                            <Plus size={15} />
                        </button>

                    </div>

                    <button className="text-red-500 transition hover:text-red-400">
                        <Trash2 size={20} />
                    </button>

                </div>

            </div>

        </div>
    )
}

export default CartProductCard