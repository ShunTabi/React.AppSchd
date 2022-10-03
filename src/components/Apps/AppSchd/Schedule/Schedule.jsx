import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import "./Schedule.css"
import ImgScheduleOneDay from '../../../../resources/png/AppSchd/ScheduleOneDay.png'
import ImgScheduleWeek from '../../../../resources/png/AppSchd/ScheduleWeek.png'
import ImgScheduleList from '../../../../resources/png/AppSchd/ScheduleList.png'

export const Schedule = () => {
  const [ActiveButton, setActiveButton] = useState();
  const navigate = useNavigate()
  const [Search, setSearch] = useState([false, false, false])
  const ScheduleFunctionList = [
    {
      "NAME": "日別",
      "NAME2": "ScheduleOneDay",
      "IMG": ImgScheduleOneDay,
      "LOAD": "ScheduleFirstLoad",
    },
    {
      "NAME": "週間",
      "NAME2": "ScheduleWeek",
      "IMG": ImgScheduleWeek,
      "LOAD": "",
    },
    {
      "NAME": "リスト",
      "NAME2": "ScheduleList",
      "IMG": ImgScheduleList,
      "LOAD": "",
    },
  ]
  useEffect(() => {
    document.getElementById("ScheduleFirstLoad").click();
  }, [])
  const [SelectedName, setSelectedName] = useState(
    () => {
      let output = ""
      const URLTEXT = window.location.href;
      ScheduleFunctionList.map((item) => {
        if (URLTEXT.indexOf(item.NAME2, 0) > 0) {
          output = item.NAME
        }
      })
      return output;
    }
  )
  return (
    <div className='Schedule'>
      <nav>
        <label className='ScheduleSelectedName'>{SelectedName}</label>
        <div className='ScheduleNav'>
          {
            ScheduleFunctionList.map((item, index) => (
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
