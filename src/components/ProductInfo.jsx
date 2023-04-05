import React from 'react'
import '@styles/ProductInfo.scss'
import bt_add_to_cart from '@icons/bt_add_to_cart.svg'

const ProductInfo = () => {
  return (
    <>
         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"/>
        <div class="product-info">
            <p>$35,00</p>
            <p>Bike</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Distinctio vero, explicabo, ut, tempora ipsum optio eum minima
                praesentium nostrum dicta atque. 
                Doloremque numquam totam eveniet sunt animi.
            </p>
            <button class="primary-button add-to-cart-button">
                <img src={bt_add_to_cart}/>
                Add to cart
            </button>
        </div>
      </>
  )
}

export default ProductInfo