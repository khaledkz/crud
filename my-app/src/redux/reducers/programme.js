import MockData from "../../data/data";
import Helpers from "../utility/helpers";
import * as Types from "../Actions/types";

const ProgrammesList = (
  state = {
    programmesList: MockData.results,
    total: MockData.totalResults,
    success: true,
    searchForProgram: null
  },
  action
) => {
  switch (action.type) {
    case Types.REMOVE_PROGRAMME:
      return {
        ...state,
        ...{
          programmesList: Helpers.removeProgrammeFunc(
            state.programmesList,
            action.ID
          ),
          total: state.total - 1
        }
      };
    case Types.ADD_PROGRAMME:
      return {
        ...state,
        programmesList: [...state.programmesList, action.programme],
        searchForProgram: null
      };
    case Types.SEARCH_BY_ID:
      return {
        ...state,
        programmesList: [
          ...state.programmesList.sort((obj1, obj2) => obj1.id - obj2.id)
        ]
      };
    case Types.SEARCH_BY_NAME:
      return {
        ...state,
        programmesList: [...state.programmesList.sort(Helpers.compareNames)]
      };
    case Types.SEARCH_FOR_PROGRAMME:
      return {
        ...state,
        searchForProgram: [
          ...state.programmesList.filter(
            programme => programme.name === action.programme
          )
        ]
      };
    case Types.RESET_SEARCH_FOR_PROGRAMME:
      return { ...state, searchForProgram: null };
    default:
      return state;
  }
};

export default ProgrammesList;
