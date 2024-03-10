'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const BrowseContext = createContext();

export const BrowseProvider = ({ children }) => {

    const [selPriceRange, setSelPriceRange] = useState([100, 10000]);

    const [masterList, setMasterList] = useState([]);
    const [productList, setProductList] = useState([]);

    const filterByPrice = (products, priceRange) => {
        return products.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    }

    const fetchWomenProducts = () => {
        if (window !== undefined) {
        //   setLoading(true);
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/getbygender/women`)
            .then((result) => result.json())
            .then(data => {
              console.log(data);
              setProductList(data);
              setMasterList(data);
            //   setLoading(false);
            })
            .catch((err) => {
              console.log(err);
            });
    
        }
      }

      useEffect(() => {
        if (masterList.length > 0) {
          setProductList(filterByPrice(masterList, selPriceRange));
        }
      }, [selPriceRange, masterList])
      

    return (
        <BrowseContext.Provider value={{ 
            selPriceRange, 
            setSelPriceRange, 
            filterByPrice, 
            fetchWomenProducts, 
            productList, 
            setProductList
         }}>
            {children}
        </BrowseContext.Provider>
    )

}

const useBrowseContext = () => useContext(BrowseContext);

export default useBrowseContext;