import React from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import {
  Breadcrumb,
  Layout,
  List,
} from 'antd';
import Plan from './Plan';

const {Content} = Layout;

type Props = {
  plans: Plan[],
};

const Plans: React.FC<Props> = (props: Props) => {
  const match = useRouteMatch();

  return (
    <div>
      <Breadcrumb style={{margin: '16px 0'}}>
      </Breadcrumb>
      <Layout style={{padding: '24px 0', background: '#fff'}}>
        <Content style={{padding: '0 24px', minHeight: 280}}>
          <h1>Plans</h1>
          <List
            dataSource={props.plans}
            renderItem={plan => (
              <List.Item>
                <Link to={`${match.url}/${plan.id}`}>{plan.name}</Link>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </div >
  );
};

export default Plans;
