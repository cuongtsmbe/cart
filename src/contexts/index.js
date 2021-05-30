import React,{useReducer,useEffect}from 'react';
import data from "./../data";
import {reducerCart} from './../reducers/index';
const AppContext=React.createContext(null);
const AppProvider=(props)=>{
	const [cartItems,dispatch]=useReducer(reducerCart,data);
	 useEffect( () => {
	     console.log("Willupdate");
   }, [cartItems]);
	const upCountCart=(id)=>{
		dispatch({'id':id,'name':'upCount'});
	}
	const downCountCart=(id)=>{
		dispatch({'id':id,'name':'downCount'});
	}
	const clearAllCart=()=>{
		dispatch({'name':'clearAll'});
	}
	const moveItem =(id) =>{
		dispatch({'id':id,'name':'moveitem'});
	}
	return (
			<AppContext.Provider value={{
				cartItems,
				upCountCart,
				downCountCart,
				clearAllCart,
				moveItem
			}}>
				{props.children}
			</AppContext.Provider>
		);
}


export {AppContext,AppProvider};