function spreadInConstructor() {
    let newDate = new Date(2022,06,07); // 06 Jun 2022
    console.log(newDate);

    let datefields = [2022,06,07];
    newDate = new Date(...datefields);
    console.log(newDate);
    showMessage(newDate);
    
}

spreadInConstructor();
updateTitle("Pass parameters using spread");