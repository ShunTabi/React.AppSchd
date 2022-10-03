import React, { useEffect, useState } from 'react'
import "./ScheduleList.css"
import { SearchForm } from '../SearchForm'
import { GetNow } from "../Com.js"

export const ScheduleList = () => {
  const [Visible1, setVisible1] = useState(true)
  const [Visible2, setVisible2] = useState(false)
  const [Visible3, setVisible3] = useState(false)
  const [inputBox, setInputBox] = useState(["", "", "", GetNow("yyyy-MM-dd", 0), GetNow("HH:mm", 0), GetNow("HH:mm", 0)])
  const [Selected, setSelected] = useState([])
  const [Data, setData] = useState([])
  const [BtnName, setBtnName] = useState("確定")
  const [GoalItems, setGoalItems] = useState([])
  const [PlanItems, setPlanItems] = useState([])
  const [StatusItems, setStatusItems] = useState([])
  const [Location, setLocation] = useState()
  const SearchItems = [
    {
      "NAME": "目標名/計画名",
      "REG": false,
    },
    {
      "NAME": "対象期間1",
      "REG": true,
    },
    {
      "NAME": "対象期間2",
      "REG": true,
    }
  ]
  const [Search, setSearch] = useState(["", GetNow("yyyy-MM-dd", 0), GetNow("yyyy-MM-dd", 1)])
  const regex1 = /^[0-9]{4}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/
  const regex2 = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/
  const Cleaning = () => {
    setSelected([])
    setInputBox(["", "", GetNow("yyyy-MM-dd", 0), GetNow("HH:mm", 0), GetNow("HH:mm", 0)])
    setBtnName("確定")
  }
  useEffect(() => {
    setData([
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "PLANID": "1",
        "PLAN": "NAME",
        "STATUSID": "1",
        "STATUS": "完了",
        "SCHEDULEDATE": "2022-10-02",
        "STARTTIME": "10:00",
        "ENDTIME": "12:00",
        "UPDATEDATE": "2022-10-02",
      },
    ])
    setGoalItems([
      {
        "ID": "",
        "NAME": "",
      },
      {
        "ID": "1",
        "NAME": "目標１",
      },
      {
        "ID": "2",
        "NAME": "目標２",
      },
    ])
    setPlanItems([
      {
        "ID": "",
        "NAME": "",
      },
      {
        "ID": "1",
        "NAME": "計画１",
      },
      {
        "ID": "2",
        "NAME": "計画２",
      },
    ])
  }, [])
  return (
    <div className='ScheduleList'>
      <div>
        <div className='ScheduleListInputForm'>
          <fieldset className={`${Visible1 ? "" : "MINIMIZE"}`}>
            <legend
              onClick={
                () => {
                  setVisible1(!Visible1)
                }
              }>予定登録フォーム</legend>
            <table className={`${Visible1 ? "" : "INVISIBLE"}`}>
              <tbody>
                <tr>
                  <td>
                    <label>目標名</label>
                  </td>
                  <td>
                    <select value={inputBox[0]}
                      onChange={
                        (e) => {
                          setInputBox([e.target.value, inputBox[1], inputBox[2], inputBox[3], inputBox[4]])
                        }
                      }>
                      {
                        GoalItems.map((item, index) => (
                          <option value={item.ID} key={index}>{item.NAME}</option>
                        ))
                      }
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>計画名</label>
                  </td>
                  <td>
                    <select value={inputBox[1]}
                      onChange={
                        (e) => {
                          setInputBox([inputBox[0], e.target.value, inputBox[2], inputBox[3], inputBox[4]])
                        }
                      }>
                      {
                        PlanItems.map((item, index) => (
                          <option value={item.ID} key={index}>{item.NAME}</option>
                        ))
                      }
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>日付</label>
                  </td>
                  <td>
                    <input type="text" value={inputBox[2]}
                      onChange={
                        (e) => {
                          setInputBox([inputBox[0], inputBox[1], e.target.value, inputBox[3], inputBox[4]])
                          console.log(inputBox)
                        }
                      } />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>開始時間</label>
                  </td>
                  <td>
                    <input type="text" value={inputBox[3]}
                      onChange={
                        (e) => {
                          setInputBox([inputBox[0], inputBox[1], inputBox[2], e.target.value, inputBox[4]])
                          console.log(inputBox)
                        }
                      } />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>終了時間</label>
                  </td>
                  <td>
                    <input type="text" value={inputBox[4]}
                      onChange={
                        (e) => {
                          setInputBox([inputBox[0], inputBox[1], inputBox[2], inputBox[3], e.target.value])
                          console.log(inputBox)
                        }
                      } />
                  </td>
                </tr>
                <tr>
                  <td>
                  </td>
                  <td>
                    <button onClick={
                      () => {
                        if (inputBox[0] === "" || inputBox[1] === "" || inputBox[2] === "" || inputBox[3] === "" || inputBox[4] === "") { return }
                        if (!(regex1.test(inputBox[2]) && regex2.test(inputBox[3]) && regex2.test(inputBox[4]))) { return }
                        if (!(inputBox[3] < inputBox[4])) { return }
                        if (BtnName === "確定") {
                          console.log("確定")
                          setInputBox(["", "", GetNow("yyyy-MM-dd", 0), GetNow("HH:mm", 0), GetNow("HH:mm", 0)])
                        }
                        else if (BtnName === "更新") {
                          console.log("更新")
                          setInputBox(["", "", GetNow("yyyy-MM-dd", 0), GetNow("HH:mm", 0), GetNow("HH:mm", 0)])
                        }
                      }
                    }>{BtnName}</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </div>
        <SearchForm
          SearchItems={SearchItems}
          Search={Search}
          setSearch={setSearch}
          Visible3={Visible3}
          setVisible3={setVisible3}
        />
      </div>
      <div className='ScheduleListDataTable'>
        <div style={Location}
          className={`ContextMenu ${Visible2 ? "" : "INVISIBLE"}`}
          onMouseLeave={
            () => {
              if (Visible2 === true) {
                setVisible2(false)
              }
            }
          }
          onClick={
            () => {
              if (Visible2 === true) {
                setVisible2(false)
              }
            }
          }>
          <ul>
            <li
              onClick={
                () => {
                  Cleaning()
                }
              }>新規</li>
            <li
              onClick={
                () => {
                  setBtnName("更新")
                  setInputBox([Selected.GOALID, Selected.PLANID, Selected.SCHEDULEDATE, Selected.STARTTIME, Selected.ENDTIME])
                }
              }>更新</li>
            <li
              onClick={
                () => {
                  setVisible3(!Visible3)
                  Cleaning()
                }
              }>検索</li>
            <li
              onClick={
                () => {
                  Cleaning()
                }
              }>収納箱へ</li>
            <li
              onClick={
                () => {
                  Cleaning()
                }
              }>ゴミ箱へ</li>
          </ul>
        </div>
        <table>
          <thead>
            <tr>
              <th hidden>ID</th>
              <th></th>
              <th hidden>GOALID</th>
              <th>目標名</th>
              <th hidden>PLANID</th>
              <th>計画名</th>
              <th hidden>STATUSID</th>
              <th>進捗</th>
              <th>日付</th>
              <th>開始時間</th>
              <th>終了時間</th>
              <th>更新日</th>
            </tr>
          </thead>
          <tbody>
            {
              Data.map((item, index) => (
                <tr key={index} onContextMenu={
                  (e) => {
                    setLocation(
                      {
                        top: e.target.getBoundingClientRect().y,
                        left: e.target.getBoundingClientRect().x,
                      }
                    )
                    setSelected(item)
                    setVisible2(true)
                  }
                }>
                  <td hidden>{item.ID}</td>
                  <td>{item.INFO}</td>
                  <td hidden>{item.GOALID}</td>
                  <td>{item.GOAL}</td>
                  <td hidden>{item.PLANID}</td>
                  <td>{item.PLAN}</td>
                  <td hidden>{item.STATUSID}</td>
                  <td>{item.STATUS}</td>
                  <td>{item.SCHEDULEDATE}</td>
                  <td>{item.STARTTIME}</td>
                  <td>{item.ENDTIME}</td>
                  <td>{item.UPDATEDATE}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div >
  )
}
