  import { createStore,combineReducers } from "redux"
  import { persistReducer,persistStore } from "redux-persist"
  import storage from "redux-persist/lib/storage"

  import cartreducer,{
    addnote,removenote,
  } from "./CartReducer"
  
import editreducer,{
  noteedit
} from "./EditReducer"


 const persistconfig= {
  key:"pesist-storage",storage
 }
 
 const reducer = combineReducers ({
   Note: cartreducer,
   edit:editreducer
  })
  const persistReduce= persistReducer(persistconfig,reducer)
  
   export  const store = createStore(persistReduce)

   export const persist=  persistStore(store)
