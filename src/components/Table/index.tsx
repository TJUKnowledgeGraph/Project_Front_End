import React from 'react'
import {Table as T} from 'antd'


interface Props {
    data: any
}

interface State {
}

class Table extends React.Component<Props, State> {

    render(): React.ReactNode {
        return (
            <T dataSource={this.props.data.dataSource} columns={this.props.data.columns} />
        )
    }
}

export default Table;