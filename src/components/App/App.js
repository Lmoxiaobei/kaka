import React from 'react'
import { HashRouter as Router ,Route, Switch } from 'react-router-dom'
import BootPage from '..//BootPage/BootPage'
import HomePage from '..//HomePage/HomePage'
import ClickEnter from '..//ClickEnter/ClickEnter'
import Index from '..//Index/Index'
import Find from '..//Find/Find'
import Forward from '..//Forward/Forward'
import Choice from '..//Choice/Choice'

class App extends React.Component {
  render () {
    return(
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={BootPage} />
          <Route path='/topic/create' exact component={HomePage} />
          <Route path='/topic/create/clickenter' component={ClickEnter} />
          <Route path='/topic/create/index' exact component={Index} />
          <Route path='/topic/create/index/choice' component={Choice} />
          <Route path='/topic/create/find' exact component={Find} />
          <Route path='/topic/create/find/forward' component={Forward} />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;
