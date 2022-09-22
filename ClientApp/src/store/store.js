import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'


const configureStore = ()=>applyMiddleware(thunk(createStore)(rootReducer));

export default configureStore

