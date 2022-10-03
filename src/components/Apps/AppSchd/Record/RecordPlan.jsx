import React, { useEffect, useState } from 'react'
import "./RecordPlan.css"
import { SearchForm } from '../SearchForm'
import { GetNow } from "../Com.js"

export const RecordPlan = () => {
  const [Visible1, setVisible1] = useState(true)
  const [Visible2, setVisible2] = useState(false)
  const [Visible3, setVisible3] = useState(false)
  const [inputBox, setInputBox] = useState(["", "", "", GetNow("yyyy-MM-dd", 0), GetNow("yyyy-MM-dd", 1)])
  const [Selected, setSelected] = useState([])
  const [Data, setData] = useState([])
  const [BtnName, setBtnName] = useState("確定")
  const [GoalItems, setGoalItems] = useState([])
  const [PriorItems, setPriorItems] = useState([])
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
  const [Search, setSearch] = useState([
    "", GetNow("yyyy-MM-dd", 0), GetNow("yyyy-MM-dd", 1),
  ])
  const regex = /^[0-9]{4}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/
  const Cleaning = () => {
    setSelected([])
    setInputBox(["", "", "", GetNow("yyyy-MM-dd", 0), GetNow("yyyy-MM-dd", 1)])
    setBtnName("確定")
  }
  useEffect(() => {
    setData([
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GOALID": "2",
        "GOAL": "目標3",
        "NAME": "NAME",
        "PRIORID": "1",
        "PRIOR": "★",
        "STARTDATE": "2022-10-02",
        "ENDDATE": "2022-10-02",
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
    setPriorItems([
      {
        "ID": "",
        "NAME": "",
      },
      {
        "ID": "1",
        "NAME": "高い",
      },
      {
        "ID": "2",
        "NAME": "普通",
      },
      {
        "ID": "3",
        "NAME": "低い",
      },
    ])
  }, [])
  return (
    <div className='RecordPlan'>
      <div>
        <div className='PlanInputForm'>
          <fieldset className={`${Visible1 ? "" : "MINIMIZE"}`}>
            <legend
              onClick={
                () => {
                  setVisible1(!Visible1)
                }
              }>計画登録フォーム</legend>
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
                    <input type="text" value={inputBox[1]}
                      onChange={
                        (e) => {
                          setInputBox([inputBox[0], e.target.value, inputBox[2], inputBox[3], inputBox[4]])
                          console.log(inputBox)
                        }
                      } />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>優先度</label>
                  </td>
                  <td>
                    <select value={inputBox[2]}
                      onChange={
                        (e) => {
                          setInputBox([inputBox[0], inputBox[1], e.target.value, inputBox[3], inputBox[4]])
                        }
                      }>
                      {
                        PriorItems.map((item, index) => (
                          <option value={item.ID} key={index}>{item.NAME}</option>
                        ))
                      }
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>開始日</label>
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
                    <label>終了日</label>
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
                        if (!(regex.test(inputBox[3]) && regex.test(inputBox[4]))) { return }
                        if (!(inputBox[3] < inputBox[4])) { return }
                        if (BtnName === "確定") {
                          console.log("確定")
                          console.log(inputBox)
                          setInputBox(["", "", "", GetNow("yyyy-MM-dd", 0), GetNow("yyyy-MM-dd", 1)])
                          console.log(inputBox)
                        }
                        else if (BtnName === "更新") {
                          console.log("更新")
                          console.log(inputBox)
                          setInputBox(["", "", "", GetNow("yyyy-MM-dd", 0), GetNow("yyyy-MM-dd", 1)])
                          console.log(inputBox)
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
      <div className='PlanDataTable'>
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
                  setInputBox([Selected.GOALID, Selected.NAME, Selected.PRIORID, Selected.STARTDATE, Selected.ENDDATE])
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
              <th>計画名</th>
              <th hidden>PRIORID</th>
              <th>優先度</th>
              <th>開始日</th>
              <th>終了日</th>
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
                  <td>{item.NAME}</td>
                  <td hidden>{item.PRIORID}</td>
                  <td>{item.PRIOR}</td>
                  <td>{item.STARTDATE}</td>
                  <td>{item.ENDDATE}</td>
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
