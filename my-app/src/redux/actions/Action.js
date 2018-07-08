import store from "../store/store";

//redux Action
const Action = {
  // //Dispatch an action type updatePrices with producst with new prices
  // updatePrices:(products)=>(
  //     store.dispatch({type:'updatePrices',products})
  // ),

  removeProgramme: id => store.dispatch({ type: "removeProgramme", id }),
  addNewProgramme: programme => store.dispatch({tyoe:'addNewProgramme',programme}),
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
