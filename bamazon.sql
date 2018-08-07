DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "gatorade", "beverages", 2.50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "powerade", "beverages", 2.50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "muscle milk", "beverages", 3.50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "dasani", "beverages", 1.50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "golf balls (dozen)", "golf equipment", 42.50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "golf club set", "golf equipment", 235.50, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "basketball", "basketball equipment", 32.00, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "basketball hoop", "basketball equipment", 150.00, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "baseball bat", "baseball equipment", 220.00, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "baseballs (dozen)", "baseball equipment", 7.99, 100);