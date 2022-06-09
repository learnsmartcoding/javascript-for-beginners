const category =  {
  "id": 1,
  "name": "Baby Soap",
  "isActive": true
};


function objectLiterals() {
  //the below performs the shallow-copy
  let category1 = {...category}; // this is similar to Object.assign()

  //change newly created categroy
  category1.id = 9999;
    showMessage(`category1.id values is => ${category1.id}, category.id value is => ${category.id}`)
    
}

objectLiterals();
updateTitle("Shallow copy on object literal");