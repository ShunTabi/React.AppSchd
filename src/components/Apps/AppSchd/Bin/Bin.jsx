import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import "./Bin.css"
import ImgStorage from '../../../../resources/png/AppSchd/Storage.png'

export const Bin = () => {
  const [ActiveButton, setActiveButton] = useState();
  const navigate = useNavigate()
  const [Search, setSearch] = useState([false, false, false])
  const BinFunctionList = [
    {
      "NAME": "収納箱/ゴミ箱",
      "NAME2": "BinStorage",
      "IMG": ImgStorage,
      "LOAD": "BinFirstLoad",
    },
  ]
  useEffect(() => {
    document.getElementById("BinFirstLoad").click();
  }, [])
  const [SelectedName, setSelectedName] = useState(
    () => {
      let output = ""
      const URLTEXT = window.location.href;
      BinFunctionList.map((item) => {
        if (URLTEXT.indexOf(item.NAME2, 0) > 0) {
          output = item.NAME
        }
      })
      return output;
    }
  )
  return (
    <div className='Bin'>
      <nav>
        <label className='BinSelectedName'>{SelectedName}</label>
        <div className='BinNav'>
          {
            BinFunctionList.map((item, index) => (
              <button key={index} title={item.NAME}
                id={item.LOAD}
                className={`${index === ActiveButton ? "" : "btn"}`}
                disabled={index === ActiveButton}
                onClick={
                  () => {
                    if (index !== ActiveButton) {
                      setSelectedName(item.NAME)
                      setActiveButton(index)
                      navigate(item.NAME2)
                    }
                  }}
              >
                <img src={item.IMG} alt="" />
              </button>
            ))
          }
        </div>
      </nav>
      <Outlet Search={Search} />
    </div>
  )
}
