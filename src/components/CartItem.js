import { BsChevronCompactUp,BsChevronCompactDown } from "react-icons/bs";
import {AppContext} from './../contexts/index';
import react,{useContext} from 'react';
function CartItem(props) {
	const contextData=useContext(AppContext);
	const {data}=props;
  return (
  	<>
  		<div className="Item">
  			<div className="img-info">
	  			<div className="image">
	  				<img src={data.img} alt="no image" />
	  			</div>
	  			<div className="info_item">
	  				<span>{data.title}</span>
	  				<span>${data.price}</span>
	  				<button onClick={()=>contextData.moveItem(data.id)}>remove</button>
	  				
	  			</div>
	  		</div>
  			<div className="count-button">
  				<button onClick={()=>{contextData.upCountCart(data.id);console.log('up');}}><BsChevronCompactUp /></button>
  				<span>{data.amount}</span>
  				<button onClick={()=>contextData.downCountCart(data.id)}><BsChevronCompactDown /></button>
  			</div>
  		</div>
  	</>
  );
}

export default CartItem;
