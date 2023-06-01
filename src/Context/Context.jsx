import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider =  ( {children} ) =>{
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const toggleProductDetail=(state)=>{
        state===true?setIsProductDetailOpen(true):setIsProductDetailOpen(false);};
    const [productToShow, setProductToShow] = useState({title:'',description:'',price:'',images:[]});

    const [cartProducts, setCartProducts] = useState([]);

    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);

    //Shopping cart * Order
    const [order , setOrder] = useState([]);

    const toggleCheckOutSideMenu=(state)=>{
        console.log(state, " State checkout side open");
        console.log(isCheckOutSideMenuOpen," isCheck...")
        state===true?setIsCheckOutSideMenuOpen(true):setIsCheckOutSideMenuOpen(false);
    };

    //

    const [items, SetItems] = useState(null);

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => SetItems(data))
    }, [])

    //
    const [ searchByTitle, setSearchByTitle] = useState('');
    const [ searchByCategory, setSearchByCategory] = useState('');
    console.log(searchByTitle);
    //
    const [filteredItems, setFilteredItems] = useState([])
    
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toUpperCase().includes(searchByTitle.toUpperCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toUpperCase().includes(searchByCategory.toUpperCase()))
    }

    useEffect(()=>{
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items,searchByTitle));
        if(searchByCategory) setFilteredItems(filteredItemsByCategory(items,searchByCategory))
    }, [items,searchByTitle, searchByCategory]);

    return(
        <ShoppingCartContext.Provider value={
            {
                count, setCount, 
                isProductDetailOpen, toggleProductDetail, 
                productToShow, setProductToShow,
                cartProducts, setCartProducts,
                isCheckOutSideMenuOpen, toggleCheckOutSideMenu,
                order, setOrder,
                items, SetItems,
                searchByTitle, setSearchByTitle,
                filteredItems, setFilteredItems,
                searchByCategory, setSearchByCategory
            }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}