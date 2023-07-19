import { Product } from "../../Product";
import { ProductDao } from "../ProductDao";

export class ProductMySqlDao implements ProductDao {
  insertProduct(product: Product): void {
    console.log("insert into MYSQL DB productId =" + product.productId);
  }
  updateProduct(product: Product): void {
    console.log("update into MYSQL DB productId =" + product.productId);
  }
  deleteProduct(product: Product): void {
    console.log("delete into MYSQL DB productId =" + product.productId);
  }
}
