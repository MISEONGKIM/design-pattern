import * as env from "dotenv";
import { UserInfo } from "./domain/userinfo/UserInfo";
import { Product } from "./domain/product/Product";
import { DaoFactory } from "./factory/DaoFactory";
import { MySqlDaoFactory } from "./factory/MySqlDaoFactory";
import { OracleDaoFactory } from "./factory/OracleDaoFactory";
import { ProductDao } from "./domain/product/dao/ProductDao";
import { UserInfoDao } from "./domain/userinfo/dao/UserInfoDao";
env.config();
const init = () => {
  const userInfo = new UserInfo();
  userInfo.userId = "12345";
  userInfo.passwd = "!@#$%";
  userInfo.userName = "홍길동";

  const product = new Product();
  product.productId = "0011AA";
  product.productName = "TV";

  let daoFactory: DaoFactory;
  let userInfoDao: UserInfoDao;
  let productDao: ProductDao;

  if (process.env.DBTYPE === "ORACLE") {
    daoFactory = new OracleDaoFactory();
  } else if (process.env.DBTYPE === "MYSQL") {
    daoFactory = new MySqlDaoFactory();
  } else {
    console.log("db support error");
    return;
  }

  userInfoDao = daoFactory.createUserInfoDao();
  productDao = daoFactory.createProductDao();

  console.log("==USERINFO TRANSACTION==");
  userInfoDao.insertUserInfo(userInfo);
  userInfoDao.updateUserInfo(userInfo);
  userInfoDao.deleteUserInfo(userInfo);

  console.log("==PRODUCT TRANSACTION==");
  productDao.insertProduct(product);
  productDao.updateProduct(product);
  productDao.deleteProduct(product);
};

init();
