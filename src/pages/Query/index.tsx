import React from 'react'
import './index.scss'
import { Layout, Menu } from 'antd';
import Content from 'components/Content';

const { Header, Sider } = Layout;


interface Props {
    info: any
}

interface State {
    item: any
}

class Query extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            item: null
        }
    }

    changeItem = (item: any) => {
        this.setState({
            item: item
        })
    }

    render() {
        let menu: any = []
        let keys: string[] = []
        this.props.info.forEach((e: any) => {
            let sub: any = []
            e.items.forEach((e: any) => {
                sub.push(
                    <Menu.Item key={e.name} onClick={()=>this.changeItem(e)}>{e.label}</Menu.Item>
                )
            })
            menu.push(
                <Menu.SubMenu key={e.name} title={e.label}>
                    {sub}
                </Menu.SubMenu>
            )
            keys.push(e.name)
        });


        return (
            <Layout>
                <Sider className='sider'>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        // defaultSelectedKeys={['1']}
                        defaultOpenKeys={keys}
                    >
                        {menu}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="header">
                        <h1>新冠知识图谱查询系统</h1>
                    </Header>
                    <Content item={this.state.item}></Content>
                </Layout>
            </Layout>
        )
    }
}



export default Query;