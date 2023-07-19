import { UserInfo } from "../../UserInfo";
import { UserInfoDao } from "../UserInfoDao";

export class UserInfoMySqlDao implements UserInfoDao {
  insertUserInfo(userInfo: UserInfo): void {
    console.log("insert into MYSQL DB userId =" + userInfo.userId);
  }
  updateUserInfo(userInfo: UserInfo): void {
    console.log("update into MYSQL DB userId =" + userInfo.userId);
  }
  deleteUserInfo(userInfo: UserInfo): void {
    console.log("delete into MYSQL DB userId =" + userInfo.userId);
  }
}
