import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FourOhFour from './404'
import styles from '../app.css'

const App = () => (
  <div className={styles.background}>
    <Switch>
      <Route component={FourOhFour} exact path="/" />

      {/* <PrivateRoute exact path="/" component={1} />
      <PrivateRoute exact path="/2" component={2} />
      */}
      <Route component={FourOhFour} />
    </Switch>
  </div>
)

export default App
