import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const StoreContextProvider = ({ children }) => { 

    // Getting Products From API 
    const [productsData, setProductsData] = useState([])
    const [categorizedProducts, setCategorizedProducts] = useState([]);
    

    const getProducts = async () => { 
        try {
            const res = await axios.get('https://dummyjson.com/products?limit=200')

            let products = res.data.products;
            setProductsData(res.data.products)



            // ------------------------------------ //
            // Extracting the products category wise Category and storing into categories state
            const groupedCategories = products.reduce((acc, product) => {
              const existingCategory = acc.find(
                item => item.slug === product.category
              );
            
              if (existingCategory) {
                existingCategory.products.push(product);
              } else {
                acc.push({
                  slug: product.category,
                  products: [product],
                });
              }
            
              return acc;
            }, []);
            
            setCategorizedProducts(groupedCategories);
            // -------------------------------------- //

        }
        catch (error) {
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
        setCartItems,
        categorizedProducts
    }}
    >{children}</MyStore.Provider>
}


