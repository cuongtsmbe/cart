import CartItem from './CartItem'
import {AppContext} from './../contexts/index';
import react,{useContext} from 'react';
function CartContainer() {
	const dataContext=useContext(AppContext);

	const renderItems=()=>{
		return dataContext.cartItems.map((e,index)=>{
			return 	<CartItem key={e.id} data={e} />
		})
	}
	const totalItems=()=>{
		let sum=0;
		 dataContext.cartItems.forEach((e,index)=>{
			sum=sum+e.price*e.amount;
		})
		 return  sum.toFixed(2);
	}
  return (
    <div className="CartContainer">
      			<div className="title">
      					<p>Your Bag</p>
      			</div>
      			{dataContext.cartItems.length!=0?
      			<>
	      			<div className="ListItem">
	      				{renderItems()}
	      			</div>
	      			<div className="total-money">
	      					<span>Total:</span>
	      					<span>${totalItems()}</span>
	      			</div>
	      			<div className="Clear" >
	      					<button onClick={()=>dataContext.clearAllCart()}>clear All</button>
	      			</div>
      			</>:<p className="emptycart">is current Cart empty</p>}
      			
    </div>
  );
}

export default CartContainer;
