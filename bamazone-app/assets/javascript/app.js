var string = "Bamazon is an app that functions like an Amazon storefront, using MySQL for storing, retrieving and updating stock inventories. The app will take in orders from customers and deplete stock from the store's inventory. Also the app can track product sales across store's departments and then provide a summary of the highest-grossing departments in the store.";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();