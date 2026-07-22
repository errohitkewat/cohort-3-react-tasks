import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const StoreContextProvider = ({ children }) => { 

    // Getting Products From API 
    const [productsData, setProductsData] = useState([])

    const getProducts = async () => { 
        try {
            const res = await axios.get('https://dummyjson.com/products?limit=50')
            setProductsData(res.data.products)
        } catch (error) {
            console.log("Error =>", error)
        }
    }

    useEffect(() => { 
        getProducts()
    }, [])



    // States for the cartItems and if cart is open or not 
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])



    // Returning the Context Provider 
    return <MyStore.Provider value={{
        productsData,
        setProductsData,
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems
    }}
    >{children}</MyStore.Provider>
}


