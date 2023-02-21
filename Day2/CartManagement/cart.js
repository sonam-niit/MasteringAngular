"use strict";
exports.__esModule = true;
exports.Cart = void 0;
var Cart = /** @class */ (function () {
    function Cart(id, products, user) {
        this.id = id;
        this.products = products;
        this.user = user;
    }
    Cart.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Cart.prototype.removeProduct = function (id) {
        this.products = this.products.filter(function (x) { return x.id != id; });
    };
    Cart.prototype.checkDetails = function () {
        var total = 0;
        console.log("User Details: " + this.user.id + " " + this.user.name + " " + this.user.email);
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var p = _a[_i];
            console.log("Product " + p.id + " " + p.name + " " + p.price);
            total = total + p.price;
        }
        console.log("Total Amount: " + total);
    };
    return Cart;
}());
exports.Cart = Cart;
