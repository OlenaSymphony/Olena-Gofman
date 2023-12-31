/*1. Sandbox: https://www.w3schools.com/sql/trysql.asp?filename=trysql_asc*/

/*2. Create query to Get top 5 cities with highest number of Employees in it.*/

SELECT City, Count(CustomerName) as CustNumber FROM Customers;
GROUP BY City;
ORDER BY CustNumber DESC;
LIMIT 5;

/*3. Create query to Get top 5 Customers with highest number of Orders.*/

SELECT Customers.CustomerName, Orders.CustomerID, COUNT(Orders.OrderID) as NumOrders FROM Orders; 
INNER JOIN Customers;
ON Orders.CustomerID = Customers.CustomerID;
GROUP BY Orders.CustomerID;
ORDER BY NumOrders DESC;
LIMIT 5;

/*4. Create query to Get top 5 Customers with biggest total quantity of items from all orders.*/ 

SELECT Customers.CustomerName, Orders.CustomerID, sum(OrderDetails.Quantity) as TotalQuantity FROM [OrderDetails];
INNER JOIN Orders;
ON OrderDetails.OrderID = Orders.OrderID;
INNER JOIN Customers;
ON Orders.CustomerID = Customers.CustomerID;
GROUP BY Orders.CustomerID;
ORDER BY TotalQuantity DESC;
LIMIT 5;

/*5. Create query to Get all product and category information at the same query.*/

SELECT * FROM [Products];
FULL JOIN Categories;
ON Categories.CategoryID = Products.CategoryID;