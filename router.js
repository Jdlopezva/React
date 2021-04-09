import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Login from './templates/custom/tufirma/login'
import Register from './templates/custom/tufirma/register'
import Recover from './templates/custom/tufirma/recover'
import Home from './templates/custom/tufirma/Home'
import Profile from './templates/custom/tufirma/profile'
import EditProfile from './templates/custom/tufirma/editprofile'
import MyPetitions from './templates/custom/tufirma/MyPetitions'
import Blog from './templates/custom/tufirma/blog'
import Internablog from './templates/custom/tufirma/internablog'
import Politica from './templates/custom/tufirma/politica'
import Terminos from './templates/custom/tufirma/terminos'
import Cookies from './templates/custom/tufirma/Cookies'
import NormasUso from './templates/custom/tufirma/NormasUso'
import NormasComunidad from './templates/custom/tufirma/NormasComunidad'
import Info from './templates/custom/tufirma/info'

import CampaignSteps from './templates/custom/tufirma/CampaignSteps'

import Landing from './templates/custom/tufirma'
import Search from './templates/custom/tufirma/search'
import Category from './templates/custom/tufirma/category'
import Interna from './templates/custom/tufirma/Interna'
import Thanks from './templates/custom/tufirma/thanks'
import Donation from './templates/custom/tufirma/Donation'
import Contact from './templates/custom/tufirma/Contact'

import Forgot from './templates/custom/tufirma/Forgot'

import NotFound from './templates/custom/tufirma/NotFound'

import ScrollToTop from './components/ScrollToTop'

export default function Routes() {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>

        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/:name">
          <Landing />
        </Route>
        <Route exact path="/:name/search">
          <Search />
        </Route>
        <Route exact path="/:name/category">
          <Category />
        </Route>
        <Route path="/:name/donation">
          <Donation />
        </Route>
        <Route path="/:name/contact">
          <Contact />
        </Route>
        <Route path="/:name/login">
          <Login />
        </Route>
        <Route path="/:name/forgot">
          <Forgot />
        </Route>
        <Route path="/:name/signup">
          <Register />
        </Route>
        <Route path="/:name/recover/:token">
          <Recover />
        </Route>
        <Route path="/:name/log">
          <Home />
        </Route>
        <Route path="/:name/profile">
          <Profile />
        </Route>
        <Route path="/:name/edit-profile">
          <EditProfile />
        </Route>
        <Route path="/:name/mypetitions">
          <MyPetitions />
        </Route>
        <Route path="/:name/publish">
          <CampaignSteps />
        </Route>
        <Route exact path="/:name/campaign-view/:id/:campaignname">
          <Interna />
        </Route>
        <Route exact path="/:name/campaign/:signature_id/thanks">
          <Thanks />
        </Route>
        <Route path="/:name/politica">
          <Politica />
        </Route>
        <Route path="/:name/terminos">
          <Terminos />
        </Route>
        <Route path="/:name/cookies">
          <Cookies />
        </Route>
        <Route path="/:name/normas-uso">
          <NormasUso />
        </Route>
        <Route path="/:name/info">
          <Info />
        </Route>
        <Route path="/:name/normas-comunidad">
          <NormasComunidad />
        </Route>
        <Route exact path="/:name/blog">
          <Blog />
        </Route>
        <Route exact path="/:name/blog/:id">
          <Internablog />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}
