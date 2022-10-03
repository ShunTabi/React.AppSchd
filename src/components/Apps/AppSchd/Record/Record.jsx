import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import "./Record.css"
import ImgGenre from '../../../../resources/png/AppSchd/Genre.png'
import ImgGoal from '../../../../resources/png/AppSchd/Goal.png'
import ImgPlan from '../../../../resources/png/AppSchd/Plan.png'

export const Record = () => {
  const [ActiveButton, setActiveButton] = useState();
  const navigate = useNavigate()
  const [SelectedName, setSelectedName] = useState()
  const [Search, setSearch] = useState([false, false, false])
  const RecordFunctionList = [
    {
      "NAME": "種別",
      "NAME2": "RecordGenre",
      "IMG": ImgGenre,
      "LOAD": "",
    },
    {
      "NAME": "目標",
      "NAME2": "RecordGoal",
      "IMG": ImgGoal,
      "LOAD": "",
    },
    {
      "NAME": "計画",
      "NAME2": "RecordPlan",
      "IMG": ImgPlan,
      "LOAD": "RecordFirstLoad",
    },
  ]
  useEffect(() => {
    document.getElementById("RecordFirstLoad").click();
  }, [])
  return (
    <div className='Record'>
      <nav>
        <label className='RecordSelectedName'>{SelectedName}</label>
        <div className='RecordNav'>
          {
            RecordFunctionList.map((item, index) => (
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
