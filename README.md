# Bamazon
This app uses inquirer to allow customers to buy sports drinks and equipment from a make believe supplier and allows an owner to update product inventory listed in a sql database.

In bamazonCustomer.js, the node app will list the available items for purchase in the store and ask the customer what they would like to buy?

<img width="463" alt="screen shot 2018-08-07 at 10 19 22 pm" src="https://user-images.githubusercontent.com/35550279/43812634-2590cd44-9a90-11e8-976e-e2fbf71cb04e.png">

Then once the customer has selected an item, app will ask how much they would like to buy

<img width="464" alt="screen shot 2018-08-07 at 10 21 54 pm" src="https://user-images.githubusercontent.com/35550279/43812692-6d5ccd44-9a90-11e8-89f2-86815b0928b9.png">

Once the customer has entered in how much they want the app will update the product database and give the customer their total cost for the transaction. Then it will ask the customer what they would like to do next. 

<img width="449" alt="screen shot 2018-08-07 at 10 22 11 pm" src="https://user-images.githubusercontent.com/35550279/43812724-998bcb40-9a90-11e8-842c-7dc24ca127bb.png">

The transaction will take away inventory from the product sql database

<img width="449" alt="screen shot 2018-08-07 at 10 22 11 pm" src="https://user-images.githubusercontent.com/35550279/43812724-998bcb40-9a90-11e8-842c-7dc24ca127bb.png">

<img width="445" alt="screen shot 2018-08-07 at 10 25 03 pm" src="https://user-images.githubusercontent.com/35550279/43812787-eab5afea-9a90-11e8-9e8c-d3a24eb470a1.png">

In bamazonManager.js, the node app will let the manager choose between several options to update his or her products table.

<img width="462" alt="screen shot 2018-08-07 at 10 27 45 pm" src="https://user-images.githubusercontent.com/35550279/43812885-68f1ff80-9a91-11e8-849d-db2462a88249.png">

If the manager chooses the "view products for sale" options, the terminal will show the available products, their prices and how much is left in stock

<img width="458" alt="screen shot 2018-08-07 at 10 27 59 pm" src="https://user-images.githubusercontent.com/35550279/43812931-9bd3f0a2-9a91-11e8-94d2-53565b64434b.png">

If the manager chooses the "View low inventory" option, the terminal will show all items that have less than 5 units left in stock

<img width="542" alt="screen shot 2018-08-07 at 10 28 15 pm" src="https://user-images.githubusercontent.com/35550279/43812969-bd8ed20c-9a91-11e8-80e4-5c256a0c4219.png">

If the manager chooses the "Add to Inventory" option, the terminal will ask which product would they like to add inventory to

<img width="456" alt="screen shot 2018-08-07 at 10 28 29 pm" src="https://user-images.githubusercontent.com/35550279/43813013-e96a0824-9a91-11e8-8610-e6b2dcaa33ca.png">

Once the user selects their item, the terminal will ask how much they would like to add 

<img width="552" alt="screen shot 2018-08-07 at 10 34 09 pm" src="https://user-images.githubusercontent.com/35550279/43813061-154eba98-9a92-11e8-8e82-13ccae0605f2.png">

Once the user inputs the quantity, their products table will update 
(Before) 
<img width="446" alt="screen shot 2018-08-07 at 10 35 22 pm" src="https://user-images.githubusercontent.com/35550279/43813116-44e15bf8-9a92-11e8-9f19-611c50df4f23.png">
(After) 
<img width="446" alt="screen shot 2018-08-07 at 10 35 31 pm" src="https://user-images.githubusercontent.com/35550279/43813127-51060802-9a92-11e8-97ab-4d13a6928d12.png">

If the manager chooses the "Add New Product" option, the terminal will ask the manager to enter in the id#, name, price, deparmtent and inventory quantity of the new product and update the products table automatically.

<img width="1059" alt="screen shot 2018-08-07 at 10 37 40 pm" src="https://user-images.githubusercontent.com/35550279/43813206-a517a4a0-9a92-11e8-9ef3-4c57031f525d.png">

<img width="443" alt="screen shot 2018-08-07 at 10 38 59 pm" src="https://user-images.githubusercontent.com/35550279/43813226-bd2cb030-9a92-11e8-824d-5a1b3059fbbf.png">
