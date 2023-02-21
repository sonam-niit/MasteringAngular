import { Product } from "./product";
import { User } from "./user";

export class Cart {
    id: number;
    products: Product[];
    user: User;

    constructor(id: number, products: Product[], user: User) {
        this.id = id;
        this.products = products;
        this.user = user;
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }
    removeProduct(id): void {
        this.products = this.products.filter(x => x.id != id)
    }
    checkDetails(): void {
        let total=0;
        console.log("User Details: " + this.user.id+" "+this.user.name+" "+this.user.email)
        for (let p of this.products) {
            console.log("Product " + p.id+" "+p.name+" "+p.price)
            total=total + p.price;
        }
        console.log("Total Amount: "+total)

    }
}