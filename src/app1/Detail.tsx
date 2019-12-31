import React from 'react';
import {
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import {
  Breadcrumb,
  Button,
  Descriptions,
  Layout,
  Progress,
  Steps,
  Tooltip,
} from 'antd';
import Plan from './Plan';
import moment from 'moment';
/* import 'moment/locale/ja'; */

const {Content} = Layout;

type Props = {
  plans: Plan[],
};

const Detail: React.FC<Props> = (props: Props) => {
  const match = useRouteMatch();
  const homeUri = match.url.replace(RegExp("/[^/]+$"), "");
  const {planId} = useParams();

  const plan = props.plans.find(p => p.id === planId)!;

  return (
    <div>
      <Breadcrumb style={{margin: '16px 0'}}>
        <Breadcrumb.Item><Link to={homeUri}>Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item>Plan &quot;{plan.name}&quot;</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{padding: '24px 0', background: '#fff'}}>
        <Content className="content">
          <h1 className="ant-typography">{plan.name}</h1>

          <h2 className="ant-typography">Configuration</h2>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="Last update">
              <Tooltip title="The configuration is changed after processing started.">
                <span className="warning">
                  {moment("2019-12-31T13:47").format("LLL")}
                </span>
              </Tooltip>
            </Descriptions.Item>
            <Descriptions.Item label="Strategy">
              Aggressive
            </Descriptions.Item>
            <Descriptions.Item label="# or records">
              42712 records
            </Descriptions.Item>
            <Descriptions.Item label="# or features">
              28
            </Descriptions.Item>
            <Descriptions.Item label="Data Size">
              42.71 MB
            </Descriptions.Item>
          </Descriptions>
          <div className="controls">
            <Link to={`${match.url}/configure`} tabIndex={-1}>
              <Button>Configure Plan</Button>
            </Link>
          </div>

          <h2 className="ant-typography">Processing</h2>
          <div className="controls">
            <Progress type="circle" percent={30} />
            <Steps direction="vertical">
              <Steps.Step title="1st" />
              <Steps.Step title="2st" />
            </Steps>
          </div>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="Started">
              {moment("2019-12-30T17:34").format("LLL")}
            </Descriptions.Item>
            <Descriptions.Item label="Finished">
              Not Yet
            </Descriptions.Item>
          </Descriptions>
          <div className="controls">
            <Button>Start</Button>
            <Button>Stop</Button>
          </div>

          <h2 className="ant-typography">Analysis</h2>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="Report Generated">
              {moment("2019-12-30T17:34").format("LLL")}
            </Descriptions.Item>
          </Descriptions>
          <div className="controls">
            <Link to={`${match.url}/report`} tabIndex={-1}>
              <Button>Show Report</Button>
            </Link>
          </div>

        </Content>
      </Layout>
    </div>
  );
};

export default Detail;

