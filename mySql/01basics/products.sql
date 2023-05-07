-- USE ecommerce;

-- CREATE TABLE products (
--         ProductID INT NOT NULL AUTO_INCREMENT,
--         Name VARCHAR(255) NOT NULL,
--         Description TEXT,
--         Price INT,
--         VendorID INT,
--         CategoryID INT,
--         CreatedAt datetime NOT NULL,
--         UpdatedAt datetime NOT NULL,
--         PRIMARY KEY (ProductID)
-- );

-- DESC products;

INSERT INTO products (Name, Description, Price) VALUES ('Macbook Pro', "Dope", 1342424);

-- DESC products;

SELECT * FROM products;