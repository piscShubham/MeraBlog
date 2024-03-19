
import { configureStore } from '@reduxjs/toolkit';
import Authenticate from '../Features/Authenticate';
import Createblog from '../Features/Createblog'


export const Store=configureStore({
    reducer:{
        auth:Authenticate,
        blog:Createblog
    }
})