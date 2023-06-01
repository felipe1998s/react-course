import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home, MyAccount, MyOrder, MyOrders, NotFound, SignIn } from '../Pages'
import { ShoppingCartProvider } from '../Context/Context'
import viteLogo from '/vite.svg'
import './App.css'
import { CheckOutSideMenu, NavBar } from '../Components'

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home/> },
    { path:'/all', element:<Home/> },
    { path:'/clothes', element:<Home/> },
    { path:'/electronics', element:<Home/> },
    { path: '/furnitures', element:<Home/> },
    { path:'/toys', element:<Home/> },
    { path:'/others', element: <Home/>},
    { path:'/my-order', element:<MyOrder/> },
    { path:'/my-orders', element:<MyOrders/> },
    { path:'/my-orders/last', element:<MyOrder/>},
    { path:'/my-orders/:id', element:<MyOrder/>},
    { path:'/my-account', element:<MyAccount/> },
    { path:'/sign-in', element:<SignIn/> },
    { path:'/*', element:<NotFound/> },
  
  ]);
  return routes;
}

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
        <CheckOutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
    
  )
}

export default App
