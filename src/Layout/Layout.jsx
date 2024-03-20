

import React from 'react'
import { Outlet } from 'react-router'
import Home from '../Component/Home/Home'

 export const Layout = () => {
  return (
    <>
        <main>
            <section>
            <Home/>
            </section>
            <section>
                <Outlet/>
            </section>
            <section>
                
            </section>
        </main>
    </>
  )
}


