import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import "./ToDo.css"
import ImgToDoToDo from '../../../../resources/png/AppSchd/ToDoToDo.png'
import ImgToDoDone from '../../../../resources/png/AppSchd/ToDoDone.png'

export const ToDo = () => {
  const [ActiveButton, setActiveButton] = useState();
  const navigate = useNavigate()
  const [Search, setSearch] = useState([false, false, false])
  const ToDoFunctionList = [
    {
      "NAME": "ToDo",
      "NAME2": "ToDoToDo",
      "IMG": ImgToDoToDo,
      "LOAD": "ToDoFirstLoad",
    },
    {
      "NAME": "Done",
      "NAME2": "ToDoDone",
      "IMG": ImgToDoDone,
      "LOAD": "",
    },
  ]
  const [SelectedName, setSelectedName] = useState(
    () => {
      let output = ""
      const URLTEXT = window.location.href;
      ToDoFunctionList.map((item) => {
        if (URLTEXT.indexOf(item.NAME2, 0) > 0) {
          output = item.NAME
        }
      })
      return output;
    }
  )
  useEffect(() => {
    document.getElementById("ToDoFirstLoad").click();
  }, [])
  return (
    <div className='ToDo'>
      <nav>
        <label className='ToDoSelectedName'>{SelectedName}</label>
        <div className='ToDoNav'>
          {
            ToDoFunctionList.map((item, index) => (
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
