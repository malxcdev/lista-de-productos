import React, { useState } from 'react'
import PropTypes from 'prop-types'
import addToCartIcon from '../assets/images/icon-add-to-cart.svg'
import IconSum from '../assets/images/icon-increment-quantity.svg'
import IconRes from '../assets/images/icon-decrement-quantity.svg'

function Product({ id, url, category, name, price, onAddToCart }) {
    const [isSelected, setIsSelected] = useState(false)
    const [quantity, setQuantity] = useState(0)

    const handleAddToCart = () => {
        setIsSelected(true)
        setQuantity(1)
        onAddToCart?.({ id, name, price, quantity: 1 })
    }

    const handleQuantityChange = (amount) => {
        const newQuantity = quantity + amount
        if (newQuantity > 0) {
            setQuantity(newQuantity)
            onAddToCart?.({ id, name, price, quantity: newQuantity })
        } else {
            setIsSelected(false)
            setQuantity(0)
        }
    }

    return (
        <section className='flex flex-col mb-8'>
            <figure className={`relative mb-10 ${isSelected ? 'ring-2 ring-red rounded-xl' : ''}`}>
                <img
                    className="rounded-xl"
                    src={url}
                    alt={`Product ${name}`}
                />
                {!isSelected ? (
                    <button
                        onClick={handleAddToCart}
                        className="absolute bg-rose-50 rounded-full -bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 flex items-center gap-1 font-semibold border-2 hover:bg-rose-100 transition-colors"
                    >
                        <img
                            className="w-5 h-5"
                            src={addToCartIcon}
                            alt="Add to cart icon"
                        />
                        Add to Cart
                    </button>
                ) : (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-between rounded-full text-white bg-red px-5">
                        <button
                            onClick={() => handleQuantityChange(-1)}
                            className="px-4 py-3 transition-colors"
                        >
                            <img className='border-2 border-rose-300 rounded-full p-2 h-[28px] w-[28px]' src={IconRes} alt="" />
                        
                        </button>
                        <span className="px-4 py-3 font-semibold border-x-2 border-red text-lg">
                            {quantity}
                        </span>
                        <button
                            onClick={() => handleQuantityChange(1)}
                            className="px-4 py-3 transition-colors"
                        >
                            <img className='border-2 border-rose-300 rounded-full p-2 ' src={IconSum} alt="" />
                        </button>
                    </div>
                )}
            </figure>
            <p className="text-rose-400">{category}</p>
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-xl font-semibold text-red">${price}</p>
        </section>
    )
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onAddToCart: PropTypes.func
}

export default Product