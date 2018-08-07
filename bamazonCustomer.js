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
    buy();
});

function buy() {
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
            message: "What is the id of the item you would like to buy?"
          },
          {
            name: "bid",
            type: "input",
            message: "How much would you like to buy?"
          }
        ])
        .then(function(answer) {
          var chosenItem;
          for (var i = 0; i < results.length; i++) {
            if (results[i].product_name === answer.choice) {
              chosenItem = results[i];
            }
          }
          if (chosenItem.stock_quantity > parseInt(answer.bid)) {
            var test = (chosenItem.item_id);
            var left = parseInt(chosenItem.stock_quantity) - parseInt(answer.bid)
            var query = connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: left
                },
                {
                  item_id: test
                }
              ],
              function(error) {
                if (error) throw err;
                console.log("Purchase successful!");
                var qty = answer.bid;
                var price = chosenItem.price;
                var cost = qty * price
                console.log("Your total is $" + cost.toFixed(2));
              }
            );
            console.log(query.sql);
            setTimeout(nextMove, 1000);
          }
          else {
            console.log("Insufficient Quantities!");
          }
        });
    });
  }

function nextMove() {
  inquirer
  .prompt([
    {
      name: "next",
      type: "rawlist",
      choices: [
        "Buy Something Else",
        "Quit"
      ],
      message: "What would you like to do next?"
    }
  ])
  .then(function(answer) {
    if (answer.next === "Buy Something Else") {
      buy();
    } else {
      connection.end();
    }
  });
}