import React from 'react'
import { Login } from '../Login/Login'

export const Top = (props) => {
    if (props.UserInfo.NAME === "UNKNOWN") {
        return (
            <div className='Top'>
                <Login UserInfo={props.UserInfo} setUserInfo={props.setUserInfo} />
            </div>
        )
    } else {
        return (
            <div className='Top'>
                <p>ようこそ、{props.UserInfo.NAME}</p>
            </div>
        )
    }
}
