import * as Types from './types'
export const addNewProgramme =(programme)=>({type:Types.ADD_PROGRAMME,programme})
export const removeProgramme =(ID)=>({type:Types.REMOVE_PROGRAMME,ID})
export const resetSearchForProgramme =()=>({type:Types.RESET_SEARCH_FOR_PROGRAMME})
export const sortById =()=>({type:Types.SEARCH_BY_ID})
export const sortByName =()=>({type:Types.SEARCH_BY_NAME})
export const searchForProgram =programme=>({type:Types.SEARCH_FOR_PROGRAMME,programme})

 