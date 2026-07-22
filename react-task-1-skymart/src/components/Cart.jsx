
import { MyStore } from "../context/MyContext";
import { useContext } from "react";
import CartProductCard from "./CartProductCard";
import { X } from "lucide-react";


const Cart = () =>  {

  const { isCartOpen, setIsCartOpen, cartItems } = useContext(MyStore);

  // Calculating the total of All Cart Items Prices 
    const total = cartItems.reduce((sum, item) => {
        return sum + item.price * 1
    }, 0);


  return (
    <div>
        {/* Overlay */}
        <div className={`fixed inset-0 z-100 ${ isCartOpen ? "opacity-100 visible" : "opacity-0 invisible" }`} >
          
            {/* Click outside the Cart Drawer to cancel cart */}
            <div className="absolute inset-0 bg-zinc-900/10 backdrop-blur-lg"
                onClick={() => setIsCartOpen(false)}
            />
    
            {/* Drawer */}
            <div className={`absolute right-0 top-0 h-full w-120 border-l border-zinc-700 bg-[#121212] transition-transform duration-300
                ${ isCartOpen ? "translate-x-0" : "translate-x-full" }`}
            >
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-zinc-700 p-5">
                    <h2 className="text-xl font-clash font-semibold text-white">
                        Shopping Cart
                    </h2>
        
                    <button onClick={() => setIsCartOpen(false)}>
                        <X className="text-white" />
                    </button>
                </div>
      
      
                {/* Cart Items Container */}
                <div className="h-[calc(100%-170px)] scrollbar-none flex flex-col gap-4 overflow-y-auto p-5">
                    {cartItems.length === 0 ? (
                        <p className="text-zinc-400"> Your cart is empty. </p>
                    ) : (
                    cartItems.map((item) => (
                        <CartProductCard item={ item } key={item.id} />
                    ))
                  )}
                </div>
      
                {/* Footer */}
                <div className="absolute bottom-0 left-0 w-full border-t border-zinc-700 p-5 bg-[#111]">
                    <div className="flex font-clash justify-between text-white text-lg font-semibold">
                        <span>Total</span>
                        <span className="text-2xl">${total.toFixed(2)}</span>
                    </div>
        
                    <button className="mt-4 w-full font-clash rounded-lg bg-lime-400 py-3 font-semibold text-black">
                        Checkout
                    </button>
                </div>
              
            </div>
        </div>
    </div>
  );
}

export default Cart
