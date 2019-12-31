import React from 'react';
import {
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import {
  Breadcrumb,
  Layout,
  Menu,
  Icon,
} from 'antd';
import Plan from './Plan';

const {Content, Sider} = Layout;
const {SubMenu} = Menu;

type Props = {
  plans: Plan[],
};

const Overview: React.FC<Props> =
  (props: Props) => {
  return (<div/>);
};

export default Overview;
