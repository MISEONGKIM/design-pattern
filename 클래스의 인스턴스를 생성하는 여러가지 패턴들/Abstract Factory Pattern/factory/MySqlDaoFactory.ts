import { ProductDao } from "../domain/product/dao/ProductDao";
import { ProductMySqlDao } from "../domain/product/dao/mysql/ProductMySqlDao";
import { UserInfoDao } from "../domain/userinfo/dao/UserInfoDao";
import { UserInfoMySqlDao } from "../domain/userinfo/dao/mysql/UserInfoMySqlDao";
import { DaoFactory } from "./DaoFactory";
//dao 세트생성
export class MySqlDaoFactory implements DaoFactory {
  createUserInfoDao(): UserInfoDao {
    return new UserInfoMySqlDao();
  }
  createProductDao(): ProductDao {
    return new ProductMySqlDao();
  }
}
