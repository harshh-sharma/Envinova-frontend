import axiosInstance from "@/helpers/axiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getContents = createAsyncThunk('/domain/domainId',async(domainId) => {
    try {
       const response = await axiosInstance.get(`/domain/${domainId}`);
       console.log("dataRespone",response);
       
       return await (response)?.data; 
    } catch (error) {
        console.log(error);
        
    }
})

const dataSlice = createSlice({
    name:'eninova',
    initialState:{
        contents:[]
    },
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getContents.fulfilled,(state,action) => {
            state.contents = action.payload?.contents;
        })
    }
})

export default dataSlice.reducer;