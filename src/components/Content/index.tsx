import React from 'react'
import './index.scss'
import { Layout } from 'antd';
import Graph from 'components/Graph'
import Inputs from 'components/Inputs'
import { get } from 'api/query'
import Card from 'components/Card'

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

    ref: any = React.createRef()

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
        console.log(value)
        let datas = this.state.datas
        datas.push({
            item: this.props.item,
            value: value
        })
        this.setState({
            datas: datas
        })


    }

    // 平滑滚动至顶部
    scrollToTop = () => {
        let last: number = 0
        var timer: any = setInterval(() => {
            this.ref.current.scrollTop -= 100
            if (last === this.ref.current.scrollTop) {
                clearInterval(timer)
            }
            last = this.ref.current.scrollTop
        }, 50)
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        this.scrollToTop()
    }

    render() {
        console.log(this.props.item)
        let cards: any[] = []
        let key = 0
        this.state.datas.forEach((data) => {
            key += 1
            cards.push(
                <Card key={key} item={data.item} value={data.value} scroll={this.scrollToTop}></Card>
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
                <div className='cards' ref={this.ref}>
                    {cards}
                </div>
            </Layout>
        )
    }
}

export default Content;