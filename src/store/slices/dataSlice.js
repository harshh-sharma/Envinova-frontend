import axiosInstance from "@/helpers/axiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getContents = createAsyncThunk('/domain/domainId',async(domainId) => {
    try {
       const response = await axiosInstance.get(`/domain/${domainId}`);
       return (response)?.data; 
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
            console.log("actionPayload",action.payload);
            
            state.contents = action.payload?.contents;
        })
    }
})

export default dataSlice.reducer;