const categories1 = [{
    "id": 1,
    "name": "Baby Soap",
    "isActive": true
},
{
    "id": 2,
    "name": "Toddlers Toys",
    "isActive": true
},
{
    "id": 3,
    "name": "Men Shirts",
    "isActive": true
},
{
    "id": 5,
    "name": "Energy Drinks",
    "isActive": true
},
{
    "id": 6,
    "name": "Test",
    "isActive": true
}];
const categories2 = [
    {
        "id": 7,
        "name": "Men's Care",
        "isActive": true
    },
    {
        "id": 8,
        "name": "Food",
        "isActive": true
    },
    {
        "id": 9,
        "name": "Breads",
        "isActive": true
    },
    {
        "id": 10,
        "name": "Milk & Dairy",
        "isActive": true
    },
    {
        "id": 11,
        "name": "Jams",
        "isActive": true
    }
];

function concatenateArrary() {
    let allCategories = categories1.concat(categories2); // original way of doing in plain Ja
    console.log(allCategories.length);

    let spreadWayOfDoing = [...categories1, ...categories2];
    console.log(spreadWayOfDoing.length);

    showMessage(`length of allCategories '${allCategories.length}' length of spreadWayOfDoing '${spreadWayOfDoing.length}'`);
}

concatenateArrary();
updateTitle("Concatenate more than one arrary");