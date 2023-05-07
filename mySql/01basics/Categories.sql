-- USE ecommerceDev;

-- CREATE TABLE Categories (
--     Categories INT AUTO_INCREMENT,
--     Name VARCHAR(255) NOT NULL,
--     PRIMARY KEY (Categories)
-- );


-- INSERT INTO Categories (Name) VALUES ('Electronics'), ('Clothing'), ('Grocery'), ('Grommming');

-- INSERT INTO Categories (Name) VALUES ('Condoms');
-- SELECT * FROM Categories;

-- CREATE TABLE Users

-- ALTER TABLE users RENAME TO Users;

-- ALTER TABLE Users ADD email VARCHAR(255) NOT NULL;

-- UPDATE Users SET email = "admin@email.com" WHERE ID = 1;

\! cls;

 SELECT Shop_Product_Join.P_ID, Shop_Product_Join.S_ID, Shop_Product_Join.C_ID, Product.product_name, Shop.Shop_Name, Company.Company_Name from Shop_Product_Join INNER JOIN Product ON Shop_Product_Join.P_ID = Product.P_ID INNER JOIN Company ON Shop_Product_Join.C_ID = Company.C_ID INNER JOIN Shop ON Shop_Product_Join.S_ID = Shop.S_ID;