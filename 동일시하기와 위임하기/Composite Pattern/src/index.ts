import { Category } from "./Category";
import { Product } from "./Product";
const womanCategory = new Category(1234, "Woman", 0);
const manCategory = new Category(5678, "Man", 0);

const clothesCategoryW = new Category(2345, "Clothes", 0);
const bagCategoryW = new Category(3456, "Bag", 0);
const shoesCategoryW = new Category(9876, "Shoes", 0);

womanCategory.addProduct(clothesCategoryW);
womanCategory.addProduct(bagCategoryW);
womanCategory.addProduct(shoesCategoryW);

const clothesCategoryM = new Category(23450, "Clothes", 0);
const bagCategoryM = new Category(34560, "Bag", 0);
const shoesCategoryM = new Category(98760, "Shoes", 0);

manCategory.addProduct(clothesCategoryM);
manCategory.addProduct(bagCategoryM);
manCategory.addProduct(shoesCategoryM);

const shoes1 = new Product(121, "Nike", 10000);
const shoes2 = new Product(122, "ADIDAS", 20000);
const shoes3 = new Product(123, "GUCCI", 30000);
const shoes4 = new Product(124, "BALENCIA", 40000);
const shoes5 = new Product(125, "PRADA", 50000);
const shoes6 = new Product(126, "BALLY", 60000);

shoesCategoryW.addProduct(shoes1);
shoesCategoryW.addProduct(shoes2);
shoesCategoryW.addProduct(shoes3);

shoesCategoryM.addProduct(shoes4);
shoesCategoryM.addProduct(shoes5);
shoesCategoryM.addProduct(shoes6);

console.log(womanCategory.getCount());
console.log(womanCategory.getPrice());
console.log(manCategory.getCount());
console.log(manCategory.getPrice());
