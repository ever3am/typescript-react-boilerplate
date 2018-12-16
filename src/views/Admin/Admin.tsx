import * as React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RouteComponentProps } from 'react-router'
import { State } from '../App/store/reducer'
import './Admin.scss';

interface StateProps {
  name: string
}

interface DispatchProps {
}

const mapStateToProps = (state: State) => ({
  name: state.app.name,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
})

class Admin extends React.Component<StateProps & RouteComponentProps<any> & DispatchProps> {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render () {
    const { Header, Sider, Content } = Layout;

    return (
      <Layout className="Admin">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="Admin__logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="Admin__content">
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="Admin__trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}>
            {this.props.name}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);