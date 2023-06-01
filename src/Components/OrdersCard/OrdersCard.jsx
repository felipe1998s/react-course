import { FaChevronRight } from "react-icons/fa"

export const OrdersCard = ({date, totalProducts, totalPrice}) => {
    return (
        <div className="flex justify-between item-center mb-3 border border-black rounded-lg  p-4 w-80 shadow-2xl">
            <div className="flex justify-between w-full">
                <div className="flex flex-col">
                    <span className="font-ligth">{ date }</span>
                    <span className="font-ligth">{ totalProducts } articles </span>
                </div>
                <span className="font-medium text-2xl">${ totalPrice }</span>
                <FaChevronRight className="w-6 h-6"/>
            </div>
        </div>
    )
}