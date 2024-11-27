const { configureStore } = require("@reduxjs/toolkit");
import dataReducer from '../store/slices/dataSlice'

const appStore = configureStore({
 reducer:{
    eninova:dataReducer
 }   
})

export default appStore;