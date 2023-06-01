import { useContext } from "react";
import { Layout, OrdersCard } from "../../Components";
import { ShoppingCartContext } from "../../Context/Context";
import { Link } from "react-router-dom";


export const MyOrders =()=>{
    const context = useContext(ShoppingCartContext);
    return(
        <Layout>
            <h1 className="font-medium text-xl mb-2">My Orders</h1>
            {
                context.order.map((order, index)=>{
                    return (
                        <Link key={index} to={`/my-orders/${index}`}>
                            <OrdersCard
                                date = {order.date}
                                totalProducts={order.totalProducts}
                                totalPrice={order.totalPrice}
                            />
                        </Link>
                    )
                })
            }
            
        </Layout>
    );
}