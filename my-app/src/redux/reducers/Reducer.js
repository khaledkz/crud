import MockData from "../../data/data";
import Helpers from "../utility/helpers";

const ProgrammesList = (
  state = {
    programmesList: MockData.results,
    total: MockData.totalResults,
    success: true
  },
  action
) => {
  switch (action.type) {
    case "removeProgramme":
      return {
        ...state,
        ...{
          programmesList: Helpers.removeProgrammeFunc(
            state.programmesList,
            action.id
          ),
          total: state.total - 1
        }
      };
    case "addNewProgramme":
      return {
        ...state,
        programmesList: [...state.programmesList, action.programme]
      };
      case "sortById":
      return ({
        ...state,
        programmesList: [...state.programmesList.sort((obj1,obj2)=>(obj1.id-obj2.id))]
      })
      case "sortByName":
      return({
        ...state,
        programmesList: [...state.programmesList.sort(Helpers.compareNames)]
      })
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
};

export default ProgrammesList;
