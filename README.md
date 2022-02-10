# README


$ rails new apartment_app -d postgresql -T
$ cd apartment_app
$ rails db:create
$ rails s

$ bundle add react-rails
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App

Generated a controller in rails:
$ rails g controller Home
Add a file in app/views/home called index.html.erb
By calling the React component in erb tags the component will be rendered in the browser through the Rails view:

add in app/views/home/index.html.erb:
<%= react_component 'App' %>

create pages/components, then import components to App.js:
import Header, from './components/Header.js'
import ApartmentIndex, from './pages/ApartmentIndex.js'
import Home, from './pages/Home.js'

$ yarn add react-router-dom@5.3.0
add in App.js:
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

then add basic routes for navigation:
<Router>
  <Header {...this.props} />
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/apartments" component={ApartmentIndex} />
  </Switch>
</Router>

in Header.js:
<NavItem>
  <a href={new_user_route}>Create An Account</a>
</NavItem>

<NavItem>
  {logged_in &&
    <div>
      <a href={sign_out_route}>Sign Out</a>
    </div>
  }
  {!logged_in &&
    <div>
      <a href={sign_in_route}>Sign In</a>
    </div>
  }
</NavItem>



 In the config/environments/development.rb:
 config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

add in config/routes.rb:
root 'home#index'

$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap

add in app/assets/stylesheets/application.scss:
@import 'bootstrap';
