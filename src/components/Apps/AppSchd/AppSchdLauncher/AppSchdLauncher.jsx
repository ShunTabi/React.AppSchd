import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AppSchdLauncher.css';
import ImgRecord from '../../../../resources/png/AppSchd/Record.png'
import ImgSchedule from '../../../../resources/png/AppSchd/Schedule.png'
import ImgToDo from '../../../../resources/png/AppSchd/ToDo.png'
import ImgAnalysis from '../../../../resources/png/AppSchd/Analysis.png'
import ImgBin from '../../../../resources/png/AppSchd/Bin.png'

export const AppSchdLauncher = () => {
  const [ActiveButton, setActiveButton] = useState();
  const navigate = useNavigate()
  const [SelectedName, setSelectedName] = useState("");
  const FunctionList = [
    {
      "NAME": "Record",
      "IMG": ImgRecord,
      "LOAD": "",
    },
    {
      "NAME": "Schedule",
      "IMG": ImgSchedule,
      "LOAD": "AppSchdFirstLoad",
    },
    {
      "NAME": "ToDo",
      "IMG": ImgToDo,
      "LOAD": "",
    },
    {
      "NAME": "Analysis",
      "IMG": ImgAnalysis,
      "LOAD": "",
    },
    {
      "NAME": "Bin",
      "IMG": ImgBin,
      "LOAD": "",
    },
  ]
  useEffect(() => {
    document.getElementById("AppSchdFirstLoad").click();
  }, [])
  return (
    <div className='AppSchdLauncher'>
      <nav>
        <label className='AppSchdLauncherSelectedName'>{SelectedName}</label>
        <div className='AppSchdLauncherNav'>
          {
            FunctionList.map((item, index) => (
              <button key={index} title={item.NAME} id={item.LOAD}
                className={`${index === ActiveButton ? "" : "btn"}`}
                disabled={index === ActiveButton}
                onClick={
                  () => {
                    if (index !== ActiveButton) {
                      setSelectedName(item.NAME)
                      setActiveButton(index)
                      navigate(item.NAME)
                    }
                  }
                }>
                <img src={item.IMG} alt="" />
              </button>
            ))
          }
        </div>
      </nav >
    </div >
  )
}
