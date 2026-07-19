import { ShoppingBag } from 'lucide-react';
import React from 'react'

const TopRatedProductCard = () => {
  return (
    <div className="flex flex-row border border-zinc-700 rounded-xl items-center justify-between p-2 transition-all duration-300 hover:border-lime-400/50">

      <div className="flex flex-row gap-3 items-center">
        <img className="w-10 h-10 rounded-lg" src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400" alt="" />
        <div className="flex flex-col">
          <p className="text-xs -mb-1 text-zinc-300">Professional Camera Lenses</p>
          <h4 className="text-lg font-semibold text-lime-400 font-clash "> $ 00.00</h4>
        </div>
      </div>

      <div className="flex items-center justify-center p-2 bg-lime-300/10 text-lime-400 rounded-md hover:bg-lime-300/60 transition-all duration-300">
        <ShoppingBag size={14}  />
      </div>

    </div>
  )
}

export default TopRatedProductCard


