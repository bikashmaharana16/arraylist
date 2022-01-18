import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './components/Login'
import NewForm from './components/NewForm'
import OldForm from './components/OldForm'
import Screan from './components/Screan'
import Success from './components/success'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "Login" component = {Login} title = "Login" initial = {true} />
         <Scene key = "Screan" component = {Screan} title = "Screan" />
         <Scene key = "NewForm" component = {NewForm} title = "NewForm" />
         <Scene key = "OldForm" component = {OldForm} title = "OldForm" />
         <Scene key = "Success" component = {Success} title = "Sucecess" />
      </Scene>
   </Router>
)
export default Routes