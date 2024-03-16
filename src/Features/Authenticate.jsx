
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';

const initialState={
    auth:null,
    loading:false,
    error:null,
  
}


export const SingupUser = createAsyncThunk('auth/signup', async (body) => {
    const response = await fetch('http://localhost:8082/signup',{
      method:"post",
      body:JSON.stringify(body),
      headers:{
        'Content-type':'application/json',
  
      }
    });
    console.log(response)
    return  await response.json();
    
  });


const  authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
    addUser:(state,action)=>{
        state.auth=localStorage.getItem("auth")
    }
    },
    extraReducers: builder=>{
        builder

        .addCase(SingupUser.pending,(state,action)=>{
            state.loading=true
        })
       .addCase(SingupUser.fulfilled,(state,action)=>{
        state.loading=false

       })
       .addCase(SingupUser.rejected,(state,action)=>{
        state.loading=false
       })
    }
})


export const {addUser}=authSlice.actions;

export default authSlice.reducer;


