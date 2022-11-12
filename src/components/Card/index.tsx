import React from 'react'
import Graph from 'components/Graph'
import Table from 'components/Table'
import { get } from 'api/query'
import { callbackify } from 'util'

interface Props {
    item: any
    value: any
    scroll: any
}

interface State {
    data: any
}

class Card extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
           data: null
        }
    }

    componentDidMount(): void {
        get(this.props.item.url, this.props.value)
            .then(data => this.props.item.processData(data))
            .then((data: any) => {
                console.log(data)
                this.setState({
                    data: data
                }, 
                this.props.scroll
                )
        })
    }

    render(): React.ReactNode {
        let content: any
        if (!this.state.data) {
            content = (<h1>loading</h1>)
        } else if (this.props.item.type == 'graph') {
            content = (<Graph data={this.state.data}></Graph>)
        } else if (this.props.item.type == 'table') {
            content = (<Table data={this.state.data}></Table>)
        }
        return(
            <div className='card'>
                {content}
            </div>
        )
    }
}

export default Card;