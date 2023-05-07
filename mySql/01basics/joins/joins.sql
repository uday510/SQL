\! cls;

-- CREATE DATABASE joins;

-- USE DATABASE joins;

-- CREATE TABLE Company(
--     C_ID INT AUTO_INCREMENT,
--     C_NAME VARCHAR(255),
--     PRIMARY KEY (C_ID)
--     );

-- CREATE TABLE Shop(
--     S_ID INT AUTO_INCREMENT,
--     S_NAME VARCHAR(255),
--     PRIMARY KEY (S_ID)
-- );

-- CREATE TABLE Product(
--     P_ID INT AUTO_INCREMENT,
--     P_NAME VARCHAR(255),
--     PRIMARY KEY (P_ID)
-- );


-- CREATE TABLE Shop_Product_Join(
--     S_ID INT,
--     C_ID INT,
--     P_ID INT 
-- );

-- INSERT INTO Company(C_NAME) VALUES 
--     ('Parle'), 
--    ('Harvest'), 
--     ('Cadbury'),
--     ('Hersheys'),
--     ('Dairy Milk');

-- INSERT INTO Product(P_NAME) VALUES 
--     ('Bread'),
--     ('Biscuits'),
--     ('Chocolates'),
--     ('Milk Powder')
-- ;

-- INSERT INTO Shop (S_NAME) VALUES 
--     ('Mega Store'),
--     ('Realiance Fresh'),
--     ('D Mart')
-- ;

-- INSERT INTO Shop_Product_Join (S_ID, C_ID, P_ID) VALUES
--     (2, 1, 1),
--     (1, 2, 1),
--     (1, 2, 2),
--     (3, 4, 3),
--     (3, 5, 3),
--     (3, 5, 2),
--     (5, 4, 2)
-- ;

-- SELECT *fROM Company;
-- SELECT *fROM Product;
-- SELECT *fROM Shop;

-- ALTER TABLE Shop_Product_Join
-- RENAME TO Orders;

-- SELECT *fROM Orders;
-- SELECT *fROM Orders LIMIT 3;
-- SELECT *fROM Product LIMIT 3 OFFSET 2;
-- SELECT *fROM Product order by p_name;
SELECT *fROM Product order by p_name DESC;
 
-- SELECT * FROM Orders INNER JOIN Product
-- ON Orders.P_ID = Product.P_ID;

-- SELECT * FROM Orders INNER JOIN Product
-- ON Orders.P_ID = Product.P_ID INNER JOIN Company ON Company.C_ID = Orders.C_ID;

-- UPDATE Company SET C_NAME = 'Britannia' WHERE C_NAME = 'Parle';

-- SELECT * FROM Orders INNER JOIN Product
-- ON Orders.P_ID = Product.P_ID INNER JOIN Company ON Company.C_ID = Orders.C_ID  INNER JOIN Shop ON Shop.S_ID = Orders.S_ID;

-- SELECT Orders.S_ID, Product.P_ID, Orders.C_ID, Product.P_NAME, Company.C_NAME FROM Orders INNER JOIN Product
-- ON Orders.P_ID = Product.P_ID INNER JOIN Company ON Company.C_ID = Orders.C_ID  INNER JOIN Shop ON Shop.S_ID = Orders.S_ID;

-- SELECT Orders.S_ID, Product.P_ID, Orders.C_ID, Product.P_NAME, Company.C_NAME FROM Orders INNER JOIN Product
-- ON Orders.P_ID = Product.P_ID INNER JOIN Company ON Company.C_ID = Orders.C_ID  INNER JOIN Shop ON Shop.S_ID = Orders.S_ID order by Product.P_NAME;

-- SELECT * FROM Orders LEFT JOIN Product
-- ON Orders.P_ID = Product.P_ID;

-- SELECT * FROM Orders RIGHT JOIN Product
-- ON Orders.P_ID = Product.P_ID;

SELECT * FROM Orders CROSS JOIN Product;


-- CREATE TABLE Employee (
--     ID INT AUTO_INCREMENT,
--     Name VARCHAR(255),
--     mID INT,
--     PRIMARY KEY (ID)
-- );

-- INSERT INTO Employee(Name, mID) VALUES 
--         ('Linus', 3),
--         ('Ken Thompson', 3);

-- INSERT INTO Employee(Name) VALUES 
--         ('Alan Turing'),
--         ('John Backus');

-- INSERT INTO Employee(Name, mID) VALUES 
--         ('Dennis Retchie', 4),
--         ('Charles Babbage', 4);


-- SELECT *FROM Employee;


-- SELECT e.ID, e.Name AS EmployeeName, m.Name AS ManagerName FROM Employee e LEFT JOIN Employee m ON e.mID = m.ID;

 
  