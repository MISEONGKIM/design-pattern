import { Product } from "../../Product";
import { ProductDao } from "../ProductDao";

export class ProductOracleDao implements ProductDao {
  insertProduct(product: Product): void {
    console.log("insert into Oracle DB productId =" + product.productId);
  }
  updateProduct(product: Product): void {
    console.log("update into Oracle DB productId =" + product.productId);
  }
  deleteProduct(product: Product): void {
    console.log("delete into Oracle DB productId =" + product.productId);
  }
}
