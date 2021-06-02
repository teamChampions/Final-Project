import {createStore} from "redux"
import { userReducer } from "../reducers/reducers"

const store=createStore( userReducer )

export {store}