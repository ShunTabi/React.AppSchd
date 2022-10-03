import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './MainLauncher.css';
import ImgUser from '../../resources/png/User.png'

export const MainLauncher = (UserInfo) => {
  const [ActiveButton, setActiveButton] = useState();
  const navigate = useNavigate();
  return (
    <div className='MainLauncher'>
      <div className='MainLauncherUserArea'>
        <span>
          <img src={ImgUser} />
          <label>{UserInfo.UserInfo.NAME}</label>
        </span>
      </div>
      <div className='MainLauncherMenuArea'>
        {
          UserInfo.UserInfo.APP.map((item, index) => (
            (() => {
              if (item.LINK === "") {
                return (
                  <button key={index} disabled className='DISABLE'>
                    <span>
                      <img src={item.IMG} alt="" />
                      <label>{item.NAME}</label>
                    </span>
                  </button>
                )
              } else {
                return (
                  <button key={index} title={item.NAME}
                    className={`${index === ActiveButton ? "" : "valid"}`}
                    disabled={index === ActiveButton}
                    onClick={
                      () => {
                        if (index === ActiveButton) { return }
                        navigate(item.LINK)
                        setActiveButton(index)
                      }
                    }
                  >
                    <span>
                      <img src={item.IMG} alt="" />
                      <label>{item.NAME}</label>
                    </span>
                  </button>
                )
              }
            })()
          ))
        }
      </div>
    </div >
  )
}
