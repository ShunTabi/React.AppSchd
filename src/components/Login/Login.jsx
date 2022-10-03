import React, { useState } from 'react'
import ImgAppSchd from '../../resources/png/AppSchd.png'
import ImgWait from '../../resources/png/Wait.png'
import './Login.css';

export const Login = (UserInfo) => {
  const [LoginInfo, setLoginInfo] = useState(["", ""])
  return (
    <div className='Login'>
      <fieldset className='LoginArea'>
        <legend>ログインフォーム</legend>
        <table className='LoginForm'>
          <tbody>
            <tr>
              <td>
                <label>ユーザ名</label>
              </td>
              <td>
                <input type="text" value={LoginInfo[0]}
                  onChange={(user) => {
                    setLoginInfo([user.target.value, LoginInfo[1]]);
                    console.log(LoginInfo);
                  }} />
              </td>
            </tr>
            <tr>
              <td>
                <label>パスワード</label>
              </td>
              <td>
                <input type="password" value={LoginInfo[1]}
                  onChange={(password) => {
                    setLoginInfo([LoginInfo[0], password.target.value]);
                    console.log(LoginInfo);
                  }} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button
                  onClick={() => {
                    if (LoginInfo[0] !== "" && LoginInfo[1] !== "") {
                      console.log(LoginInfo);
                      UserInfo.setUserInfo({
                        "NAME": "USER01",
                        "ID": "UNKNOWN",
                        "PASSWORD": "UNKNOWN",
                        "IMG": "",
                        "APP": [
                          {
                            "NAME": "AppSchd",
                            "LINK": "/AppSchd",
                            "IMG": ImgAppSchd,
                          },
                          {
                            "NAME": "AppSav",
                            "LINK": "",
                            "IMG": ImgWait,
                          },
                          {
                            "NAME": "準備中",
                            "LINK": "",
                            "IMG": ImgWait,
                          },
                          {
                            "NAME": "準備中",
                            "LINK": "",
                            "IMG": ImgWait,
                          },
                          {
                            "NAME": "準備中",
                            "LINK": "",
                            "IMG": ImgWait,
                          },
                        ],
                      });
                      console.log(UserInfo);
                      setLoginInfo(["", ""]);
                    } else {
                      window.alert("入力してください")
                    }
                  }}>ログイン</button>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div>
  )
}
