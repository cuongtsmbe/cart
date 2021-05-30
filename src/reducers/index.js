export const reducerCart=(state,action)=>{
				console.log(action);
		switch(action.name){
			case "upCount":
				const a=state.filter((e,index)=>{
						if(e.id==action.id){
							action.name='';
							e.amount++;
						}
						return e;
				});
					console.log(a);
					return [...a];
			case "downCount":
				return (state.filter((e,index)=>{
						if(e.id==action.id && e.amount>1){
								action.name='';
							e.amount--;
							return e;
						}else if(e.id==action.id){

						}else{
							return e;
						}
				}));
			case "moveitem":
				return (state.filter((e,index)=>{
						if(e.id!=action.id ){
							return e;
						}
				}));
			case "clearAll":
					return [];
			default:return state;

		}
	}