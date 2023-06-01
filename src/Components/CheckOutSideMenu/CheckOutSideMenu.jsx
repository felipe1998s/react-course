import { useContext } from "react";
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from "../../Context/Context";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { OrderCard } from "../OrderCard/OrderCard";
import { totalPrice } from "../../Utils/Utils";
import './CheckOutSideMenu.css';

export const CheckOutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter((product) => product.id !== id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.cartProducts.length - 1)
        console.log("HandleDelete: ", id);
    }
    const handleCheckOut = () => {
        const orderToAdd = {
            date : '01-01-2023',
            products : context.cartProducts,
            totalProducts : context.cartProducts.length,
            totalPrice : totalPrice(context.cartProducts), 
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setCount(0);
        context.setSearchByTitle('');
        context.setSearchByCategory('');
    }
    
    return (
        <aside className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] scrollable-cards`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Orders</h2>
                <button onClick={()=>context.toggleCheckOutSideMenu(false)}>
                    <XMarkIcon className='w-6 h-6 text-blue'></XMarkIcon>
                </button>
            </div>
            <div className="px-6 flex-1">
            {
                context.cartProducts.map((product)=>{
                    return(<OrderCard 
                        key={product.id} 
                        id={product.id}
                        title={product.title} 
                        price={product.price} 
                        image={product.images[0]}
                        handleDelete={handleDelete}/>)
                })
            }
            </div>
            <div className="px-6 rounded-lg">
                <p className="flex justify-between item-center mb-2">
                    <span className="font-light">Total: </span>
                    <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button 
                    className="bg-black py-3 text-white w-full rounded-lg"
                    onClick={()=>handleCheckOut()}>CheckOut</button>
                </Link>
            </div>
            
        </aside>
    )
}