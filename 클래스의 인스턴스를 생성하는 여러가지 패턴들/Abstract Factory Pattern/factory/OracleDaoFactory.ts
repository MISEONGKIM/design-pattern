import { ProductDao } from "../domain/product/dao/ProductDao";
import { ProductOracleDao } from "../domain/product/dao/oracle/ProductOracleDao";
import { UserInfoDao } from "../domain/userinfo/dao/UserInfoDao";
import { UserInfoOracleDao } from "../domain/userinfo/dao/oracle/UserInfoOracleDao";
import { DaoFactory } from "./DaoFactory";

//dao 세트생성
export class OracleDaoFactory implements DaoFactory {
  createUserInfoDao(): UserInfoDao {
    return new UserInfoOracleDao();
  }
  createProductDao(): ProductDao {
    return new ProductOracleDao();
  }
}
