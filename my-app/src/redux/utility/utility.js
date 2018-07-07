const Utility={
     removeProgramFunc:(progList, id) => {
        let index;
        let myList = [...progList];
        myList.map((program, i) => {
          program.id === id ? (index = i) : null;
        });
        myList.splice(index, 1);
        return myList;
      },
}
  
export default Utility