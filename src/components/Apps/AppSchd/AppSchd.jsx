import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppSchdLauncher } from './AppSchdLauncher/AppSchdLauncher'

export const AppSchd = () => {
    return (
        <div>
            <AppSchdLauncher />
            <Outlet />
        </div>
    )
}
