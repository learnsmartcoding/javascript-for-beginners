const categories = [
    {
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
    },
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


function copyObjectArrarys() {
   /*
   Note: Careful with object arrarys.
   The array is copied, but the underlying objects are still accessed by reference.
   */

   let diff = [...categories];
    diff[0].id = 9999;
    console.log(categories[0].id);
    console.log(diff[0].id);

    showMessage(`categories[0].id values is => ${categories[0].id}, diff[0].id value is => ${diff[0].id}`)
    
}

copyObjectArrarys();
updateTitle("Copy an arrary of objects");