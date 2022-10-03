import React, { useEffect, useState } from 'react'
import "./RecordGenre.css"
import { SearchForm } from '../SearchForm'

export const RecordGenre = () => {
  const [Visible1, setVisible1] = useState(true)
  const [Visible2, setVisible2] = useState(false)
  const [Visible3, setVisible3] = useState(false)
  const [inputBox, setInputBox] = useState([""])
  const [Selected, setSelected] = useState([])
  const [Data, setData] = useState([])
  const [BtnName, setBtnName] = useState("確定")
  const [Location, setLocation] = useState()
  const SearchItems = [
    {
      "NAME": "種別名",
      "REG": false,
    },
  ]
  const [Search, setSearch] = useState([""])
  const Cleaning = () => {
    setSelected([])
    setInputBox([""])
    setBtnName("確定")
  }
  useEffect(() => {
    setData([
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME1",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME2",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME3",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME4",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME5",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME6",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME1",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME2",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME3",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME4",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME5",
        "UPDATEDATE": "2022-10-02",
      },
      {
        "ID": "1",
        "INFO": "",
        "NAME": "NAME6",
        "UPDATEDATE": "2022-10-02",
      },
    ])
  }, [])
  return (
    <div className='RecordGenre'>
      <div>
        <div className='GenreInputForm'>
          <fieldset className={`${Visible1 ? "" : "MINIMIZE"}`}>
            <legend
              onClick={
                () => {
                  setVisible1(!Visible1)
                }
              }>種別登録フォーム</legend>
            <table className={`${Visible1 ? "" : "INVISIBLE"}`}>
              <tbody>
                <tr>
                  <td>
                    <label>種別名</label>
                  </td>
                  <td>
                    <input type="text" value={inputBox[0]}
                      onChange={
                        (e) => {
                          setInputBox([e.target.value])
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
                        if (inputBox[0] === "") { return }
                        if (BtnName === "確定") {
                          console.log("確定")
                          console.log(inputBox)
                          setInputBox([""])
                          console.log(inputBox)
                        }
                        else if (BtnName === "更新") {
                          console.log("更新")
                          console.log(inputBox)
                          setInputBox([""])
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
      <div className='GenreDataTable'>
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
                  setInputBox([Selected.NAME])
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
              <th>種別名</th>
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
