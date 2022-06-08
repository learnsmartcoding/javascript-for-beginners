function copyArrary() {
    const arr1 = [1,2,3,4,5];
    const arr2 = [...arr1];

    //Make changes to duplicate arrary. We normally use let arr2 = arr.slice(0); to do this in plain JS
    arr2.push(6);
    arr2[0]=100;

    console.log(arr1);
    console.log(arr2);

    showMessage(`arr1 value=> ${arr1} arr2 value=> ${arr2}`);
    
}

copyArrary();
updateTitle("Copy an arrary of primitive types");