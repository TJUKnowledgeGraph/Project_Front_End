import React from 'react'
import './index.scss'
import { Layout } from 'antd';
import Inputs from 'components/Inputs'
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

    handleSearch = (value: any) => {
        console.log(value)
        let datas = this.state.datas
        datas.push({
            item: this.props.item,
            value: value
        })
        this.setState({
            datas: datas
        }, this.scrollToTop)
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

    render() {
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
                        <Inputs handlerSearch={this.handleSearch} text={this.props.item.text} paras={this.props.item.paras}></Inputs>
                        :
                        <p className='text'>欢迎使用新冠知识图谱查询系统，请点击右侧菜单选择查询。</p>
                }
                <div className='cards' ref={this.ref}>
                    {cards}
                </div>
            </Layout>
        )
    }
}

export default Content;