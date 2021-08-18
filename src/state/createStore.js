import { createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage';
import reducer from "./reducer"

const persistConfig = {
  key: "ad-summum-data",
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)

export default (preloadedState = {}) => {
  const store = createStore(
    persistedReducer,
    preloadedState // initial state
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
