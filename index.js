import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'

import {Provider as ReduxProvider} from 'react-redux'
import {MD2LightTheme, Provider as PaperProvider} from 'react-native-paper'

import store from './src/setup/redux/Store'

const theme = {
  ...MD2LightTheme,
}

const MainApp = () => (
  <ReduxProvider store={store}>
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  </ReduxProvider>
)

AppRegistry.registerComponent(appName, () => MainApp)
