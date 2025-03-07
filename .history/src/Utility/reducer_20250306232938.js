
export const initialState = {
    basket: [],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_BASKET':
        //check the item exists
        const existingItem =state.basket.find((item)=>item.id===action.item.id)
if(!existingItem){}
  return(
...state,
basket:[...state.basket,{action.item,amount:1}]
    }
  } else{
    const updatedBasket = state.basket.map((item)=>{
item.id===action.item.id? {...item,amount:item.amount+1}:item
    })
  }
 )

      default:
        return state;
    }
  };
  