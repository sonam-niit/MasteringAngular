import { Product } from "./product";
import { User } from "./user";
import { Cart } from "./cart";


let sonamcart= new Cart(1,[],new User(1,"sonam","sonam@gmail.com"));
sonamcart.addProduct(new Product(1,"PencilBox",45))
sonamcart.addProduct(new Product(2,"Milk",45))

let megancart= new Cart(2,[],new User(2,"Megan","megan@gmail.com"));
megancart.addProduct(new Product(1,"PencilBox",45))
megancart.addProduct(new Product(2,"Milk",45))

sonamcart.checkDetails();
megancart.checkDetails();

sonamcart.removeProduct(2);
console.log("Sona's Cart Details")
sonamcart.checkDetails();
