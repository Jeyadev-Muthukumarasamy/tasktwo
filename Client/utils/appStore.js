import {configureStore} from "@reduxjs/toolkit"
import orderReducer from "./orderSlice"


const appStore =  configureStore({
    reducer:{
        order:orderReducer
    }

})

export default appStore
