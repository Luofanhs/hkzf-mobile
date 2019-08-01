import React from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import Home from './pages/Home'
import City from './pages/City'
import Map from './pages/Map'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">app</div>
        <ul>
          <li>
            <NavLink to="/home">首页</NavLink>
          </li>
          <li>
            <NavLink to="/city">城市选择</NavLink>
          </li>
          <li>
            <NavLink to="/map">地图找房</NavLink>
          </li>
        </ul>
        <Route path="/home" component={Home} />
        <Route path="/city" component={City} />
        <Route path="/map" component={Map} />
      </Router>
    )
  }
}

export default App
