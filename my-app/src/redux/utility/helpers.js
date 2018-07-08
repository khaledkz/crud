const helpers = {
  removeProgrammeFunc: (progList, id) => {
    let index;
    let myList = [...progList];
    myList.map((program, i) => {
      return program.id === id ? (index = i) : null;
    });
    myList.splice(index, 1);
    return myList;
  }
};

export default helpers;
