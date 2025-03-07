
export const initialState = {
    basket: [],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_BASKET':
        //check the item exists
        const existingItem=state.basket.find(item)=>item.id===action.item.id)


      default:
        return state;
    }
  };
  