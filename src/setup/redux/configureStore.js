import {applyMiddleware, createStore, compose} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-async-storage/async-storage'

import reducers from './Reducers/index'
import rootSaga from './Sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'reduxState',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    persistedReducer,
    undefined,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(rootSaga)

  const persistor = persistStore(store)

  return {store, persistor}
}
