import { UserInfo } from "../UserInfo";

export interface UserInfoDao {
  insertUserInfo(userInfo: UserInfo): void;
  updateUserInfo(userInfo: UserInfo): void;
  deleteUserInfo(userInfo: UserInfo): void;
}
