import { combineReducers } from 'redux'
import { checkversionReducer } from './checkversion.reducer'

const rootReducer = combineReducers({
    checkversion: checkversionReducer
});

export default rootReducer