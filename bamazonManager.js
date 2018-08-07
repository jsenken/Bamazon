var inquirer = require("inquirer")
var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    menu();
});

function menu() {
    inquirer
        .prompt([
          {
            name: "task",
            type: "list",
            choices: [
                "View Products For Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Prodcut"
            ],
            message: "What would you like to do?"
          }
        ])
        .then(function(answer) {
            switch (answer.task) {
                case "View Products For Sale":
                return view();
                case "View Low Inventory":
                return viewLow();
                case "Add to Inventory":
                return addInv();
                case "Add New Prodcut":
                return addProduct();
            }
        });
}

function view() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price.toFixed(2) + " | " + res[i].stock_quantity);
          }
        connection.end();
      });
}

function viewLow() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("The following items for sale have an inventory of less than 5 units in stock")
        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity < 5){
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].stock_quantity + " left in stock");
          }
        }
        connection.end();
      });
}

function addInv() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        inquirer
          .prompt([
            {
              name: "choice",
              type: "rawlist",
              choices: function() {
                var choiceArray = [];
                for (var i = 0; i < results.length; i++) {
                  choiceArray.push(results[i].product_name);
                }
                return choiceArray;
              },
              message: "What is the id of the item you would like to add inventory to?"
            },
            {
              name: "inv",
              type: "input",
              message: "How much would you to add?"
            }
          ])
          .then(function(answer) {
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
              if (results[i].product_name === answer.choice) {
                chosenItem = results[i];
              }
            }
              var test = (chosenItem.item_id);
              var now = parseInt(chosenItem.stock_quantity) + parseInt(answer.inv)
              var query = connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    stock_quantity: now
                  },
                  {
                    item_id: test
                  }
                ],
                function(error) {
                  if (error) throw err;
                }
              );
              console.log(query.sql);
              connection.end();
          });
      });
}

function addProduct() {
    inquirer
        .prompt([
          {
            name: "id",
            type: "input",
            message: "What is the id# of the product you want to add?"
          },
          {
            name: "name",
            type: "input",
            message: "What is the name of the product you want to add?"
          },
          {
            name: "price",
            type: "input",
            message: "How much do you want to charge?"
          },
          {
            name: "dep",
            type: "input",
            message: "What department is this item in?"
          },
          {
            name: "stock",
            type: "input",
            message: "How much inventory do you have?"
          }
        ])
        .then(function(answer) {
            var query = connection.query(
                "INSERT INTO products SET ?",
                {
                  item_id: answer.id,
                  product_name: answer.name,
                  department_name: answer.dep,
                  price: answer.price,
                  stock_quantity: answer.stock
                },
                function(err, res) {
                    console.log(res.affectedRows + " product inserted!\n");
                }
              );
              console.log(query.sql);
              connection.end();
        });
}