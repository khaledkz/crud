// import store from "../store/store";

//  const Action = {
//   removeProgramme: id => store.dispatch({ type: "removeProgramme", id }),
//   addNewProgramme: programme =>
//     store.dispatch({ type: "addNewProgramme", programme }),
//   sortById: () => store.dispatch({ type: "sortById" }),
//   sortByName: () => store.dispatch({ type: "sortByName" }),
//   resetSearchForProgramme: () =>
//     store.dispatch({ type: "resetSearchForProgramme" }),
//   searchForProgram: programme =>
//     store.dispatch({ type: "searchForProgram", programme })
// };

// export default Action;
import * as Types from './types'

 export const addNewProgramme =(programme)=>({type:Types.ADD_PROGRAMME,programme})

 