
import { configureStore } from '@reduxjs/toolkit';

import Authenticate from '../Features/Authenticate';


export const Store=configureStore({
    reducer:{
        auth:Authenticate
    }
})