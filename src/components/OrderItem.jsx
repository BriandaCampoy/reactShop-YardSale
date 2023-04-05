import React, {useContext} from 'react'
import '@styles/OrderItem.scss'
import icon_close from '@icons/icon_close.png'
import AppContext from '@context/AppContext'

const OrderItem = ({item}) => {
  const {removeFromCart}= useContext(AppContext)
  const handleRemove = ()=>{
    removeFromCart(item)
  }
  return (
    <div className="OrderItem">
      <figure>
        <img src={item.images[0]} alt={item.title} />
      </figure>
      <p>{item.title}</p>
      <p>${item.price}</p>
      <img src={icon_close} alt="close" onClick={handleRemove}/>
    </div>
  )
}

export default OrderItem