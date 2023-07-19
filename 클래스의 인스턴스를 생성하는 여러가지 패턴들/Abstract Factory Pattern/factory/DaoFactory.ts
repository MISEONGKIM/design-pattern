import { ProductDao } from "../domain/product/dao/ProductDao";
import { UserInfoDao } from "../domain/userinfo/dao/UserInfoDao";

export abstract class DaoFactory {
  abstract createUserInfoDao(): UserInfoDao;
  abstract createProductDao(): ProductDao;
}
