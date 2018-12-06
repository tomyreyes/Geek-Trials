import { createStackNavigator, createNavigationContainer } from 'react-navigation'
import MainMenuScreen from './Screens/MainMenuScreen'
import GameScreen from './Screens/GameScreen'

const ApplicationNavigator = createStackNavigator(
  {
    MainMenu: MainMenuScreen,
    Game: GameScreen,
  },
  {
    initialRouteName: 'MainMenu',
  },
)

const AppContainer = createNavigationContainer(ApplicationNavigator)

export default AppContainer
