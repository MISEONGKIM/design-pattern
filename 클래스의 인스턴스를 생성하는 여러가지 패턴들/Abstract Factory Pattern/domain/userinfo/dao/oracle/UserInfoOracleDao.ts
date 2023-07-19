import { UserInfo } from "../../UserInfo";
import { UserInfoDao } from "../UserInfoDao";

export class UserInfoOracleDao implements UserInfoDao {
  insertUserInfo(userInfo: UserInfo): void {
    console.log("insert into Oracle DB userId =" + userInfo.userId);
  }
  updateUserInfo(userInfo: UserInfo): void {
    console.log("update into Oracle DB userId =" + userInfo.userId);
  }
  deleteUserInfo(userInfo: UserInfo): void {
    console.log("delete into Oracle DB userId =" + userInfo.userId);
  }
}
