import MockData from "../../data/data";
import Helpers from "../utility/helpers";

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
        programmesList: [...state.programmesList, action.programme],
        searchForProgram: null
      };
    case "sortById":
      return {
        ...state,
        programmesList: [
          ...state.programmesList.sort((obj1, obj2) => obj1.id - obj2.id)
        ]
      };
    case "sortByName":
      return {
        ...state,
        programmesList: [...state.programmesList.sort(Helpers.compareNames)]
      };
    case "searchForProgram":
      return {
        ...state,
        searchForProgram: [
          ...state.programmesList.filter(
            programme => programme.name === action.programme
          )
        ]
      };
    case "resetSearchForProgramme":
      return { ...state, searchForProgram: null };
    default:
      return state;
  }
};

export default ProgrammesList;
