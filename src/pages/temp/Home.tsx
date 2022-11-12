import React from 'react'
import './Home.scss'
import Block from 'components/Block'

interface Props {
}

interface Position {
    x: number
    y: number
}

interface State {
    // 每个块的位置
    position: Position[]
}


class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        // 每个块初始的位置
        let position: Position[] = []
        position.push({ x: 0, y: 0 })
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                position.push({ x: i, y: j })
            }
        }
        this.state = {
            position: position
        }
    }

    // 计算两个块的曼哈顿距离
    manhattan = (a: number, b: number) => {
        const p1 = this.state.position[a]
        const p2 = this.state.position[b]
        return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y)
    }

    // 点击一个块时，如果它和空位相邻，就交换他们的位置
    blockClick = (id: number) => {
        // 该块和空位的曼哈顿距离为1，说明他们相邻，交换他们的位置
        if (this.manhattan(id, 9) === 1) {
            const new_pos = this.state.position
            const temp = new_pos[id]
            new_pos[id] = new_pos[9]
            new_pos[9] = temp
            this.setState({ position: new_pos })
        }
    }

    render() {
        // 生成9个块
        const blocks: JSX.Element[] = []
        for (let i = 1; i <= 9; i++) {
            const pos = this.state.position[i]
            blocks.push(<Block id={i} width={50} height={50} top={60 * pos.x + 10} left={60 * pos.y + 10} blockClick={this.blockClick}></Block>)
        }

        return (
            <div className="home">
                <div>数字拼图</div>
                <div className="puzzle">
                    {blocks}
                </div>
            </div>
        )
    }
}



export default Home;  