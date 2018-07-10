import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';
import "./Datamodel/global.js"
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('XtremeXercise', () => App);
