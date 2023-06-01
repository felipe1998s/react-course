import {XMarkIcon} from '@heroicons/react/24/solid'
export const OrderCard = (props) => {
    const { id, title, image, price, handleDelete} = props;
    
    return (
        <div className="flex justify-between items-center mb-2">
            <div className='flex items-center gap-2'>
                <figure className='w-20 hw-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            {handleDelete?<div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                <XMarkIcon className='w-6 h-6 text-black cursor-pointer' onClick={()=>handleDelete(id)}>
                </XMarkIcon>
            </div> : <></>}

        </div>
    )
}