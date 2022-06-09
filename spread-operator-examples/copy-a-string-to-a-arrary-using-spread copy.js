
function copyStringToArrary() {
    const barCode = "GH2837-DHDY75-3FJJJ";
    const values = [...barCode]
    showMessage(`string '${barCode}' converted to arrary '${values}'`);
    console.log(values);
}

copyStringToArrary();
updateTitle("Copy a string to a arrary using spread");