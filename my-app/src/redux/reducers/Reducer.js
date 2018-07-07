import MockData from '../../data/data';

const ProgrammeList=(state=MockData.results,action)=>{
  
    switch(action.type){

        // case 'updatePrices':
        //  return {...state,...{products:action.products,currency:state.currency,extchangeRate:state.extchangeRate,shoppingCart:state.shoppingCart}};
        
        //  case 'updateCurency':    
        //  let updateSinglePrice=(x)=>{
        //        let newPrice=(x.price/state.extchangeRate)*action.newCurrency.value;
        //        newPrice=newPrice.toFixed(2);
        //        return {product:x.product,price:newPrice}
        //  }
         
        //  return {...state,...{products:state.products.map((x)=>{
        //    return updateSinglePrice(x);
        //  }),currency:action.newCurrency.currency,extchangeRate:action.newCurrency.value,shoppingCart:state.shoppingCart}};

        //  case 'updateCart':
        //  return {...state,...{products:state.products,currency:state.currency,extchangeRate:state.extchangeRate,shoppingCart:action.shoppingCart}};

        //  case 'resetStore':
        //  return {...state,...{shoppingCart:[],currency:state.currency,extchangeRate:state.extchangeRate,products:state.products}}
         
        default:
        return state;

    }  
     
}

export default ProgrammeList;
    