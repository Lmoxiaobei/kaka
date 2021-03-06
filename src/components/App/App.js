import React from 'react'
import { HashRouter as Router ,Route, Switch } from 'react-router-dom'
import BootPage from '..//BootPage/BootPage'
import HomePage from '..//HomePage/HomePage'
import ClickEnter from '..//ClickEnter/ClickEnter'
import Find from '..//Find/Find'
import Home from '..//Home/Home'
import Forward from '..//Forward/Forward'
import Choice from '..//Choice/Choice'
import Cancel from '..//Cancel/Cancel'
import Task from '..//Task/Task'
import Details from '..//Details/Details'
import Publish from '..//Publish/Publish'
import Prompt from '..//Prompt/Prompt'
import Promptq from '..//Promptq/Promptq'
import Promptw from '..//Promptw/Promptw'
import Prompte from '..//Prompte/Prompte'
import Sign from '..//Sign/Sign'
import Completed from '..//Completed/Completed'
import Completedq from '..//Completedq/Completedq'
import Completedw from '..//Completedw/Completedw'
import SetUp from '..//SetUp/SetUp'
import Foot from '..//Foot/Foot'
import Recharge from '..//Recharge/Recharge'
import Feedback from '..//Feedback/Feedback'
import AboutUs from '..//AboutUs/AboutUs'
import PersonalData from '..//PersonalData/PersonalData'
import Account from '..//Account/Account'
import Accountq from '..//Accountq/Accountq'
import Reply from '..//Reply/Reply'

class App extends React.Component {
  render () {
    return(
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={BootPage} />
          <Route path='/topic/create' exact component={HomePage} />
          <Route path='/topic/create/clickenter' component={ClickEnter} />
          <Route path='/topic/create/home' exact component={Home} />
          <Route path='/topic/create/home/choice' component={Choice} />
          <Route path='/topic/create/home/details' component={Details} />
          <Route path='/topic/create/home/task' exact component={Task} />
          <Route path='/topic/create/home/task/reply' component={Reply} />
          <Route path='/topic/create/home/publish' component={Publish} />
          <Route path='/topic/create/home/cancel' component={Cancel} />
          <Route path='/topic/create/find' exact component={Find} />
          <Route path='/topic/create/find/forward' component={Forward} />
          <Route path='/topic/create/sign' exact component={Sign} />
          <Route path='/topic/create/sign/completed' component={Completed} />
          <Route path='/topic/create/sign/completedq' component={Completedq} />
          <Route path='/topic/create/sign/completedw' component={Completedw} />
          <Route path='/topic/create/sign/setup' exact component={SetUp} />
          <Route path='/topic/create/sign/setup/personaldata' component={PersonalData} />
          <Route path='/topic/create/sign/recharge' component={Recharge} />
          <Route path='/topic/create/sign/feedback' component={Feedback} />
          <Route path='/topic/create/sign/aboutus' component={AboutUs} />
          <Route path='/topic/create/prompt' exact component={Prompt} />
          <Route path='/topic/create/prompt/promptq' component={Promptq} />
          <Route path='/topic/create/prompt/promptw' component={Promptw} />
          <Route path='/topic/create/prompt/prompte' exact component={Prompte} />
          <Route path='/topic/create/prompt/prompte/account' component={Account} />
          <Route path='/topic/create/prompt/prompte/accountq' component={Accountq} />

          <Foot />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;
