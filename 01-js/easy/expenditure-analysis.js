/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const budget = [];
  for (let i = 0; i < transactions.length; i++) {
    let flag = false;
    for (let j = 0; j < budget.length; j++) {
      console.log("transaction I", transactions[i]["category"]);
      if (budget[j]["category"] == transactions[i]["category"]) {
        // console.log("transaction item name", transactions[i]["id"]);
        // console.log("initial total spent", budget[j]["totalSpent"]);
        budget[j]["totalSpent"] =
          budget[j]["totalSpent"] + transactions[i]["price"];
        // console.log("transaction price", transactions[i]["price"]);
        // console.log("transaction itemName", transactions[i]["itemName"]);
        // console.log("final total spent", budget[j]["totalSpent"]);

        flag = true;
      }
    }

    if (!flag) {
      budget.push({
        category: transactions[i]["category"],
        totalSpent: transactions[i]["price"],
      });
    }
    console.log("Initial budget  ", budget);
  }
  console.log("final budget", budget);
  return budget;
}
calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
]);
module.exports = calculateTotalSpentByCategory;
