import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    blog: [],
    loading: false,
    error: null,
  }

export const newBlog = createAsyncThunk("blog", async (body) => {
  let response = await fetch("http://localhost:8082/create", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  });
  response = await response.json();
 
});



export const getBlog = createAsyncThunk('blog/getBlog', async ({ page, perPage }) => {

  try {
    const response = await fetch(`http://localhost:8082/create?page=${page}&perPage=${perPage}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error('Failed to fetch blog data');
  }
});


const blogSlice=createSlice({
    name:"blog",
    initialState,
    reducers:{
        ShowValue:(state,action)=>{
           state.email=localStorage.getItem("email")
        }
    },
   extraReducers:(builder)=>{
    builder
    .addCase(newBlog.pending,(state,action)=>{
      state.loading=true;
    })
    .addCase(newBlog.fulfilled,(state,action)=>{
        state.loading=false 

    })
    .addCase(newBlog.rejected,(state,action)=>{
        state.loading=false
    })

    //    for get  blog
    .addCase(getBlog.pending,(state,action)=>{
      state.loading=true;
    })
    .addCase(getBlog.fulfilled,(state,action)=>{
        state.loading=false;
        state.blog = action.payload;

    })
    .addCase(getBlog.rejected,(state,action)=>{
        state.loading=false
    })
   }



}

)

export const{ShowValue}=blogSlice.actions

export default  blogSlice.reducer




