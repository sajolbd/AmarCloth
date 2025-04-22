import { createContext } from "react";
import all_product from '../Utils/all_product'
import new_collection from '../Utils/new_collection'

export const ShopContext = createContext()

const ShopProvider = ({children}) =>{
    const value = {all_product,new_collection}


    return(
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    )
}

export default ShopProvider;