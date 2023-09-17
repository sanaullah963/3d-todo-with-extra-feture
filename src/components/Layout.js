'use client'

import { persistor, store } from "@/redux/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

function Layout({children}) {
  return (
    <Provider store={store}><PersistGate persistor={persistor}>{children}</PersistGate></Provider>
  )
}

export default Layout