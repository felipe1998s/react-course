import { Layout, OrderCard } from "../../Components";
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/Context';
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const MyOrder =()=>{
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1);
    if(index === 'last') index = context.order?.length -1 
    return(
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <Link to='/my-orders' className="absolute left-0">
                    <FaChevronLeft className="w-6 h-6 cursor-pointer "/>
                </Link>
                <h1 className="font-medium text-xl">My Order</h1>
            </div>
            <div className="flex flex-col w-80">
            {
                context.order?.[index]?.products.map((product)=>{
                    return(<OrderCard 
                        key={product.id} 
                        id={product.id}
                        title={product.title} 
                        price={product.price} 
                        image={product.images[0]}
                        />)
                })
            }
            </div>
        </Layout>
    );
}