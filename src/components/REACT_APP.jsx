import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NoFound } from './NoFound/NoFound';
import { MainLauncher } from './MainLauncher/MainLauncher';
import { Top } from './Top/Top';
import React, { useEffect, useState } from 'react';
import { AppSchd } from './Apps/AppSchd/AppSchd';
import { Record } from './Apps/AppSchd/Record/Record';
import { RecordGenre } from './Apps/AppSchd/Record/RecordGenre';
import { RecordGoal } from './Apps/AppSchd/Record/RecordGoal';
import { RecordPlan } from './Apps/AppSchd/Record/RecordPlan';
import { Schedule } from './Apps/AppSchd/Schedule/Schedule';
import { ScheduleOneDay } from './Apps/AppSchd/Schedule/ScheduleOneDay';
import { ScheduleList } from './Apps/AppSchd/Schedule/ScheduleList';
import { ToDo } from './Apps/AppSchd/ToDo/ToDo';
import { ToDoToDo } from './Apps/AppSchd/ToDo/ToDoToDo';
import { ToDoDone } from './Apps/AppSchd/ToDo/ToDoDone';
import { Bin } from './Apps/AppSchd/Bin/Bin';
import { BinStorage } from './Apps/AppSchd/Bin/BinStorage';

export const REACT_APP = () => {
  useEffect(() => {
    console.log("START REACT_APP")
  }, [])
  const DEFUSERINFO = {
    "NAME": "UNKNOWN",
    "ID": "UNKNOWN",
    "PASSWORD": "UNKNOWN",
    "IMG": "",
    "APP": [],
  }
  const UserInfoEx = React.createContext(DEFUSERINFO)
  const [UserInfo, setUserInfo] = useState({
    "NAME": "UNKNOWN",
    "ID": "UNKNOWN",
    "PASSWORD": "UNKNOWN",
    "IMG": "",
    "APP": [],
  }
  )
  return (
    <div className='REACT_APP'>
      <UserInfoEx.Provider value={DEFUSERINFO}>
        <BrowserRouter>
          <MainLauncher UserInfo={UserInfo} />
          <Routes>
            <Route path="/" element={<Top UserInfo={UserInfo} setUserInfo={setUserInfo} />} />
            <Route path="/AppSchd" element={<AppSchd />} >
              <Route path="Record" element={<Record />} >
                <Route path="RecordGenre" element={<RecordGenre />}></Route>
                <Route path="RecordGoal" element={<RecordGoal />}></Route>
                <Route path="RecordPlan" element={<RecordPlan />}></Route>
              </Route>
              <Route exact path="Schedule" element={<Schedule />} >
                <Route exact path="ScheduleOneDay" element={<ScheduleOneDay />}></Route>
                <Route exact path="ScheduleWeek" element={<div />}></Route>
                <Route exact path="ScheduleList" element={<ScheduleList />}></Route>
              </Route>
              <Route exact path="ToDo" element={<ToDo />} >
                <Route exact path="ToDoToDo" element={<ToDoToDo />}></Route>
                <Route exact path="ToDoDone" element={<ToDoDone />}></Route>
              </Route>
              <Route exact path="Analysis" element={<div />} >
                <Route exact path="Chart" element={<div />}></Route>
              </Route>
              <Route exact path="Bin" element={<Bin />} >
                <Route exact path="BinStorage" element={<BinStorage />}></Route>
              </Route>
            </Route >
            <Route path="*" element={<NoFound />} />
          </Routes >
        </BrowserRouter >
      </UserInfoEx.Provider>
    </div >
  )
}
