
import { addNewProgramme } from "../../redux/Actions/programme";

import * as Action from "../../redux/Actions/programme";

 const dispatchToProps = dispatch => {
    return {
      submitNewProgramme: programme => {
        dispatch(addNewProgramme(programme));
      },
      removeProgramme: ID => {
        dispatch(Action.removeProgramme(ID));
      },
      resetSearchForProgramme: () => dispatch(Action.resetSearchForProgramme()),
      sortByName: () => dispatch(Action.sortByName()),
      sortById: () => dispatch(Action.sortById()),
      searchProgram: programme => dispatch(Action.searchForProgram(programme))
    };
  };

  export default dispatchToProps;
