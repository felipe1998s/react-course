import { useContext } from 'react'
import { Card, CheckOutSideMenu, Layout, ProductDetail } from "../../Components";
import { ShoppingCartContext } from '../../Context/Context';

export const Home =()=>{

    const context = useContext(ShoppingCartContext);

    const renderView = () => {
        
        if(context.searchByTitle?.length>0){
            if(context.filteredItems.length>0){
                return(
                    context.filteredItems?.map((item,index)=>(
                        <Card key={index} data={item} category={item.category.name} image={item.images[0]} title={item.title} price={item.price}/>
                    ))
                )
            }else{
                return(
                    <div>We don't have anything 😓</div>
                )
            }
        }else if(context.searchByCategory?.length>0){
            if(context.filteredItems.length>0){
                return(
                    context.filteredItems?.map((item,index)=>(
                        <Card key={index} data={item} category={item.category.name} image={item.images[0]} title={item.title} price={item.price}/>
                    ))
                )
            }else{
                return(
                    <div>We don't have anything 😓</div>
                )
            }
        }
        else {
            return (
                context.items?.map((item,index)=>(
                    <Card key={index} data={item} category={item.category.name} image={item.images[0]} title={item.title} price={item.price}/>
                ))
            )
        }
    }

    const handelChange = (event) => {
        const value = event.target.value;
        context.setSearchByTitle(value);
    }
    return(
        <Layout>
            <h1 className='font-medium text-xl'>Home</h1>
            <input className='rounded-lg border-black w-80 p-2 mb-4' 
                    type="text" placeholder='search a product' onChange={(event)=>handelChange(event)} />
            <div className='grid gap-2 grid-cols-3 w-full max-w-screen-lg'>
            
                { 
                    renderView()
                }
            
            
            </div>
            <ProductDetail/>
            <CheckOutSideMenu/>
        </Layout>
    );
}