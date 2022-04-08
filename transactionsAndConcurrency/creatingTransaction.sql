USE sql_store;

START TRANSACTION;

INSERT INTO orders(customer_id, order_Date, status) 
VALUE (1, '2022-04-08', 1);

INSERT INTO order_items 
VALUES(LAST_INSERT_ID(), 1, 1, 1);

COMMIT;