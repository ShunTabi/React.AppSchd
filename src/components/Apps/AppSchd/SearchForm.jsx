import React, { useState } from 'react'

export const SearchForm = (props) => {
  const [Visible, setVisible] = useState(true)
  const [inputBox, setInputBox] = useState(props.Search)
  const regex = /^[0-9]{4}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/
  console.log()
  return (
    <div className='SearchForm'>
      <fieldset className={`${Visible ? "" : "MINIMIZE"} ${props.Visible3 ? "" : "INVISIBLE"}`}>
        <legend
          onClick={
            () => {
              setVisible(!Visible)
            }
          }>検索フォーム</legend>
        <table className={`${Visible ? "" : "INVISIBLE"}`}>
          <tbody>
            {
              props.SearchItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <label>{item.NAME}</label>
                  </td>
                  <td>
                    <input type="text" value={inputBox[index]}
                      onChange={
                        (e) => {
                          setInputBox(
                            inputBox.map((item2, index2) => (
                              index2 === index ? e.target.value : item2
                            ))
                          )
                        }
                      } />
                  </td>
                </tr>
              ))
            }
            <tr>
              <td>
              </td>
              <td>
                <button onClick={
                  () => {
                    let inputChk = true
                    /*
                    for (let i = 0; i < inputBox.length; i++) {
                      inputChk = inputChk && (inputBox[i] !== "")
                    }
                    if (!inputChk) { return }
                    */
                    props.SearchItems.map((item, index) => {
                      if (item.REG) {
                        inputChk = inputChk && regex.test(inputBox[index])
                      }
                    })
                    if (!inputChk) { return }
                    props.setSearch(inputBox)
                    props.setVisible3(false)
                    console.log(props.Search)
                  }}>検索</button>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div >
  )
}
