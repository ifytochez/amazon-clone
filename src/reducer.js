import BasketItem from "./BasketItem";

export const initialState = {
    basket: [],
    user: null
};

// this reduce below was used when we tried getting the prices to reflect


// selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action)=> {
    console.log(action);
  
    switch (action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,  
                basket: [...state.basket, action.item],
            };

       case "REMOVE_FROM_BASKET":
           const index = state.basket.findIndex(
               (basketItem) => basketItem.id === action.id
           );

        //    basketItem is diff from BasketItem
           let newBasket = [...state.basket];

           if (index >= 0){
               newBasket.splice(index, 1);
           }else{
               console.warn(`cant remove product (id: ${action.id}) as its not in the basket`)
           }

           return{
               ...state,
               basket: newBasket
           }

           case "SET_USER":
               return{
                   ...state,
                   user: action.user
               }
    default: return state;
    }
}; 

export default reducer;



// it is always good to have the selector inside the reducer
  // the reducer listens for whatever action is being passed
   // ... state means return the initial state
   // the above means return the initial state of the basket + the action taken
  //reduce maps through the item to get its price 