import React from 'react'
import {Table as T} from 'antd'


interface Props {
    data: {
        // 表格数据
        dataSource: {
            // key
            key: string| number
            // 数据内容...
        }[],
        // 表头数据
        columns: {
            // 文本
            title: string,
            // 对应列，与dataSource中对应
            dataIndex: string,
            // key
            key: string,
        }[],
    }
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