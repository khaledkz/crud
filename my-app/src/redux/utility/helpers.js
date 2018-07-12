const helpers = {
  removeProgrammeFunc: (progList, id) => {
    let index;
    let myList = [...progList];
    myList.map((program, i) => {
      return program.id === id ? (index = i) : null;
    });
    myList.splice(index, 1);
    return myList;
  },
  compareNames:(a, b)=>{

    const nameFirstObject = a.name.toUpperCase();
    const nameSecandObject = b.name.toUpperCase();
    let comparison = 0;
    if (nameFirstObject > nameSecandObject) {
      comparison = 1;
    } else if (nameFirstObject < nameSecandObject) {
      comparison = -1;
    }
    return comparison;
  }
};

export default helpers;
