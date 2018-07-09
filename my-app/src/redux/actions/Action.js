import store from "../store/store";

//redux Action
const Action = {
  //Dispatch an action type removeProgramme with programme ID to remove a programme from programme list

  removeProgramme: id => store.dispatch({ type: "removeProgramme", id }),
  addNewProgramme: programme =>
    store.dispatch({ type: "addNewProgramme", programme }),
  sortById: () => store.dispatch({ type: "sortById" }),
  sortByName: () => store.dispatch({ type: "sortByName" })
  // //Dispatch an action type updateCurency with Currency selected and exchange ratio to convert all prices
  // updateCurency:(newCurrency)=>(
  //     store.dispatch({type:'updateCurency',newCurrency:newCurrency})
  // ),

  // //Dispatch an action type shoppingCart with new cart contain all selected items
  // updateCart:(shoppingCart)=>(
  //     store.dispatch({type:'updateCart',shoppingCart})
  // ),

  // //Dispatch an action type resetStore to reset the shopping cart
  // resetStore:()=>(
  //     store.dispatch({type:'resetStore'})
  // )
};

export default Action;
