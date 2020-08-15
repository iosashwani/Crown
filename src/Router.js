import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Songs from './Songs'
import SongsDetail from './SongsDetail'

const RouterComponent = function () {
  console.log("ashwani rajput")
  return (
    <Router>
      <Scene key="root">
        <Scene key="login"
          component={Songs}
          hideNavBar={false}
          title='SONGS'
          initial
        />
        <Scene key="detail"
          component={SongsDetail}
          hideNavBar={false}
          title='SONGS DETAIL'
          back
        />

      </Scene>


    </Router>
  )



}

export default RouterComponent