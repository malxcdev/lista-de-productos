import React from 'react'
import PropTypes from 'prop-types'
import addToCartIcon from '../assets/images/icon-add-to-cart.svg'

function Product({ url, category, name, price, onAddToCart }) {
    return (
        <section className='flex flex-col mb-8'>
            <figure className="relative mb-10">
                <img
                    className="rounded-xl"
                    src={url}
                    alt={`Product ${name}`}
                />
                <button
                    onClick={onAddToCart}
                    className="absolute bg-rose-50 rounded-full text-white -bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 flex items-center gap-1 font-semibold border-2 border-rose-900 hover:bg-rose-100 transition-colors"
                >
                    <img
                        className="w-5 h-5"
                        src={addToCartIcon}
                        alt="Add to cart icon"
                    />Add to Cart
                </button>
            </figure>
            <p className="text-rose-400">{category}</p>
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-xl font-semibold text-red">${price}</p>
        </section>
    )
}

Product.propTypes = {
    url: PropTypes.string,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onAddToCart: PropTypes.func
}

export default Product