import configureStore from './configureStore'

const {store, persistor} = configureStore()

export type AppDispatch = typeof store.dispatch

export default store
export {persistor}
