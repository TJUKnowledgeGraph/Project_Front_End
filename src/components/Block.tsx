import React from 'react'
import './Block.scss'

interface Props {
    id: number
    width: number
    height: number
    left: number
    top: number
    blockClick: Function
}

interface State {
    left: number,
    top: number
}

class Block extends React.Component<Props> {
    // 点击的块的id
    handleClick = ()=> this.props.blockClick(this.props.id)

    render() {
        // 如果不是空位
        if (this.props.id !== 9) {
            const style: React.CSSProperties = {
                width: this.props.width,
                height: this.props.height,
                left: this.props.left,
                top: this.props.top,
                backgroundColor: "green",
                zIndex: 1
            }
            return(
                <div className="block" style={style} onClick={this.handleClick}>{this.props.id}</div>
            )
        }
        // 如果是空位，背景色为黄色，且z-index更小
        else {
            const style: React.CSSProperties = {
                width: this.props.width,
                height: this.props.height,
                left: this.props.left,
                top: this.props.top,
                backgroundColor: "yellow",
                zIndex: 0
            }
            return(
                <div className="block" style={style} ></div>
            )
        }
        
    }
}

export default Block;