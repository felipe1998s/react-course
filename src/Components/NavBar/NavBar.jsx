import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context/Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export const NavBar = () =>{ 

    const context = useContext(ShoppingCartContext);

    const itemsRight = [
        { route:'/all'  , name:'All', filter:''  },
        { route:'/clothes', name:'Clothes',filter:'Clothes'},
        { route:'/electronics'  , name:'Electronics', filter:'Electronics' },
        { route:'/furnitures', name:'Furnitures', filter:'Furnitures'},
        { route:'/toys'  , name:'Toys', filter:'Toys'  },
        { route:'/others', name:'Others', filter:'Others'},
    ]

    const itemsLeft = [
        { route:'/my-orders' , name:'My Orders' },
        { route:'/my-account' , name:'My Account' },
        { route:'/sign-in' , name:'Sign In' },
    ]

    const activeStyle = 'underline underline-offset-4';
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3" key={0}>
                <li className='font-semibold text-lg bg-red-100'>
                    <NavLink to={'/'}>
                        Shopi
                    </NavLink>
                </li>
                { itemsRight && itemsRight.map((item, index) => 
                    {
                        return(
                        <li key={index} className="bg-yellow-100 items-center">
                            <NavLink to={item.route}
                            className={({isActive})=> isActive ? activeStyle:undefined}
                            onClick={()=>context.setSearchByCategory(item.filter)}
                            > {item.name} </NavLink>
                        </li>)
                    }
                )
                }
            </ul>
            <ul className="flex items-center gap-3" key={1} >
                <li className='text-black/60' key={100}>
                    felipe.suarez@platzi.com
                </li>
                { itemsLeft && itemsLeft.map((item,index) => 
                    {
                        return(
                               <li key={index}>
                                    <NavLink 
                                    to={item.route }
                                    className={({isActive})=> isActive ? activeStyle:undefined}
                                    > {item.name} </NavLink>
                                </li>
                                )
                    }
                )
                } 
                <li className="flex">
                    <ShoppingBagIcon className="w-6 h-6 text-black"></ShoppingBagIcon> <div>{ context.count }</div> 
                </li>
                                
            </ul>
        </nav>
    )
}

export default NavBar;