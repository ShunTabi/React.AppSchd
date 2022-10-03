import React, { useEffect, useState } from 'react'
import "./RecordGoal.css"
import { SearchForm } from '../SearchForm'

export const RecordGoal = () => {
  const [Visible1, setVisible1] = useState(true)
  const [Visible2, setVisible2] = useState(false)
  const [Visible3, setVisible3] = useState(false)
  const [inputBox, setInputBox] = useState(["", ""])
  const [Selected, setSelected] = useState([])
  const [Data, setData] = useState([])
  const [BtnName, setBtnName] = useState("確定")
  const [GenreItems, setGenreItems] = useState([])
  const [Location, setLocation] = useState()
  const SearchItems = [
    {
      "NAME": "目標名",
      "REG": false,
    },
  ]
  const [Search, setSearch] = useState([""])
  const Cleaning = () => {
    setSelected([])
    setInputBox(["", ""])
    setBtnName("確定")
  }
  useEffect(() => {
    setData([
      {
        "ID": "1",
        "INFO": "",
        "GENREID": "2",
        "GENRE": "種別２",
        "NAME": "NAME",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GENREID": "2",
        "GENRE": "種別２",
        "NAME": "NAME1",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "GENREID": "2",
        "GENRE": "種別３",
        "NAME": "NAME2",
        "UPDATEDATE": "2022-10-02",
      },
    ])
    setGenreItems([
      {
        "ID": "",
        "NAME": "",
      },
      {
        "ID": "1",
        "NAME": "種別１",
      },
      {
        "ID": "2",
        "NAME": "種別２",
      },
    ])
  }, [])
  return (
    <div className='RecordGoal'>
      <div>
        <div className='GoalInputForm'>
          <fieldset className={`${Visible1 ? "" : "MINIMIZE"}`}>
            <legend
              onClick={
                () => {
                  setVisible1(!Visible1)
                }
              }>目標登録フォーム</legend>
            <table className={`${Visible1 ? "" : "INVISIBLE"}`}>
              <tbody>
                <tr>
                  <td>
                    <label>種別名</label>
                  </td>
                  <td>
                    <select value={inputBox[0]}
                      onChange={
                        (e) => {
                          setInputBox([e.target.value, inputBox[1]])
                          console.log(inputBox)
                        }
                      }>
                      {
                        GenreItems.map((item, index) => (
                          <option value={item.ID} key={index}>{item.NAME}</option>
                        ))
                      }
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>目標名</label>
                  </td>
                  <td>
                    <input type="text" value={inputBox[1]}
                      onChange={
                        (e) => {
                          setInputBox([inputBox[0], e.target.value])
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
                        if (inputBox[0] === "" | inputBox[1] === "") { return }
                        if (BtnName === "確定") {
                          console.log("確定")
                          console.log(inputBox)
                          setInputBox(["", ""])
                          console.log(inputBox)
                        }
                        else if (BtnName === "更新") {
                          console.log("更新")
                          console.log(inputBox)
                          setInputBox(["", ""])
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
      <div className='GoalDataTable'>
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
                  setInputBox([Selected.GENREID, Selected.NAME])
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
              <th hidden>GENREID</th>
              <th>種別名</th>
              <th>目標名</th>
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
                  <td hidden>{item.GENREID}</td>
                  <td>{item.GENRE}</td>
                  <td>{item.NAME}</td>
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
