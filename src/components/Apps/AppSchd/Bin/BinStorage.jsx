import React, { useEffect, useState } from 'react'
import "./BinStorage.css"
import { SearchForm } from '../SearchForm'
import { GetNow } from "../Com.js"

export const BinStorage = () => {
  const [Visible1, setVisible1] = useState(true)
  const [Visible2, setVisible2] = useState(false)
  const [Visible3, setVisible3] = useState(false)
  const [Visible4, setVisible4] = useState(false)
  const [inputBox, setInputBox] = useState(["", "", "", GetNow("yyyy-MM-dd", 0), ""])
  const [Selected, setSelected] = useState([])
  const [Data1, setData1] = useState([])
  const [Data2, setData2] = useState([])
  const [BtnName, setBtnName] = useState("確定")
  const [GoalItems, setGoalItems] = useState([])
  const [PlanItems, setPlanItems] = useState([])
  const [StatusItems, setStatusItems] = useState([])
  const [Location, setLocation] = useState()
  const SearchItems = [
    {
      "NAME": "キー",
      "REG": false,
    },
  ]
  const [Search, setSearch] = useState([GetNow("yyyy-MM-dd", 0)])
  const regex = /^[0-9]{4}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/
  const Cleaning = () => {
    setSelected([])
    setInputBox(["", "", "", GetNow("yyyy-MM-dd", 0), ""])
    setBtnName("確定")
  }
  useEffect(() => {
    setData1([
      {
        "KEY": "1",
        "INFO": "",
        "ITEM": "アイテム",
        "CONTENT": "内容",
        "REMARK1": "備考１",
        "REMARK2": "備考２",
        "UPDATEDATE": "2022-10-02",
      },
    ])
    setData2([
      {
        "KEY": "1",
        "INFO": "",
        "ITEM": "アイテム",
        "CONTENT": "内容",
        "REMARK1": "備考１",
        "REMARK2": "備考２",
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
    setStatusItems([
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
    <div className='BinStorage'>
      <SearchForm
        SearchItems={SearchItems}
        Search={Search}
        setSearch={setSearch}
        Visible3={Visible3}
        setVisible3={setVisible3}
      />
      <div className='BinStorageDataTable'>
        <label>▼収納箱</label>
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
                  setVisible3(!Visible3)
                  Cleaning()
                }
              }>検索</li>
            <li
              onClick={
                () => {
                  Cleaning()
                }
              }>復元</li>
          </ul>
        </div>
        <table>
          <thead>
            <tr>
              <th hidden>KEY</th>
              <th></th>
              <th hidden></th>
              <th>項目名</th>
              <th>内容</th>
              <th>備考1</th>
              <th>備考2</th>
              <th>更新日</th>
            </tr>
          </thead>
          <tbody>
            {
              Data1.map((item, index) => (
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
                  <td hidden>{item.KEY}</td>
                  <td>{item.INFO}</td>
                  <td>{item.ITEM}</td>
                  <td>{item.CONTENT}</td>
                  <td>{item.REMARK1}</td>
                  <td>{item.REMARK2}</td>
                  <td>{item.UPDATEDATE}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className='BinStorageDataTable'>
        <label>▼ゴミ箱</label>
        <div style={Location}
          className={`ContextMenu ${Visible4 ? "" : "INVISIBLE"}`}
          onMouseLeave={
            () => {
              if (Visible4 === true) {
                setVisible4(false)
              }
            }
          }
          onClick={
            () => {
              if (Visible4 === true) {
                setVisible4(false)
              }
            }
          }>
          <ul>
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
              }>復元</li>
            <li
              onClick={
                () => {
                  Cleaning()
                }
              }>完全削除</li>
          </ul>
        </div>
        <table>
          <thead>
            <tr>
              <th hidden>KEY</th>
              <th></th>
              <th hidden></th>
              <th>項目名</th>
              <th>内容</th>
              <th>備考1</th>
              <th>備考2</th>
              <th>更新日</th>
            </tr>
          </thead>
          <tbody>
            {
              Data2.map((item, index) => (
                <tr key={index} onContextMenu={
                  (e) => {
                    setLocation(
                      {
                        top: e.target.getBoundingClientRect().y,
                        left: e.target.getBoundingClientRect().x,
                      }
                    )
                    setSelected(item)
                    setVisible4(true)
                  }
                }>
                  <td hidden>{item.KEY}</td>
                  <td>{item.INFO}</td>
                  <td>{item.ITEM}</td>
                  <td>{item.CONTENT}</td>
                  <td>{item.REMARK1}</td>
                  <td>{item.REMARK2}</td>
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
