import React from 'react'
import './index.scss'
import { Layout } from 'antd';
import Graph from 'components/Graph'
import Inputs from 'components/Inputs'
import { get } from 'api/query'

interface Props {
    item: any
}

interface State {
    datas: any[]
}

class Content extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            datas: []
        }
    }

    // 讲数据处理为适合前端显示的格式
    processData = (data: any) => {

        let nodes = data.nodes = data.node
        let edges = data.edges = data.edge


        nodes.forEach((node: any) => {
            node.id = node.id.toString()
        });

        edges.forEach((edge: any) => {
            edge.source = edge.source.toString()
            edge.target = edge.target.toString()
        });

        let datas = this.state.datas
        datas.push(data)
        console.log(datas)
        this.setState({
            datas: datas
        })
        return data
    }

    handleSearch = (url: string, value: any) => {
        // get(url, value).then(data => this.processData(data))
        get(url, value).then(data => this.props.item.processData(data)
        ).then((data: any) => {
            let datas = this.state.datas
            datas.unshift(data)
            console.log(datas)
            this.setState({
                datas: datas
            })
        })
    }

    render() {
        console.log(this.props.item)
        let cards: any[] = []
        // console.log(this.state)
        // console.log(this.state.datas)
        this.state.datas.forEach((data) => {
            // cards.unshift(
            //     <div className='card'>
            //         <Graph data={data}></Graph>
            //     </div>
            // )
            cards.push(
                <div className='card'>
                    <Graph data={data}></Graph>
                </div>
            )
        })

        return (
            <Layout className='content'>
                {
                    this.props.item ?
                        <Inputs handlerSearch={this.handleSearch} url={this.props.item.url} paras={this.props.item.paras}></Inputs>
                        :
                        <h1>请选择一项</h1>
                }
                <div className='cards'>
                    {cards}
                </div>
            </Layout>
        )
    }
}

export default Content;