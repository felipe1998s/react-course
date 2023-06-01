import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import { XMarkIcon } from '@heroicons/react/24/solid'

export const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <button onClick={()=>context.toggleProductDetail(false)}>
                    <XMarkIcon className='w-6 h-6 text-blue'></XMarkIcon>
                </button>
            </div>
            <figure className="px-6">
                <img className="w-full h-full rounded-lg " src={context.productToShow.images[0]} alt={context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
                <span className="font-medium text-md">{context.productToShow.title}</span>
                <span className="font-light text-sm">{context.productToShow.description}</span>
            </p>
        </aside>
    )
}