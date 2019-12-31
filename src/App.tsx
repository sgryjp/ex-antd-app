import React from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import {
  Layout,
} from 'antd';
import App1 from './app1/App';
import App2 from './app2/App';

import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';

const {Header, Footer, Content} = Layout;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header className="header">
          <Link to="/">
            <div className="brand">
              <img src={logo} alt="logo" />
              <span className="brand">ex-antd-app</span>
            </div>
          </Link>
          <ul className="menu">
            <li role="menu"><NavLink to="/app1">app1</NavLink></li>
            <li role="menu"><NavLink to="/app2">app2</NavLink></li>
          </ul>
        </Header>
        <Content style={{padding: '0 50px'}}>
          <Switch>
            <Route path="/app1" component={App1} />
            <Route path="/app2" component={App2} />
          </Switch>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          &copy; 2019 Suguru Yamamoto
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
