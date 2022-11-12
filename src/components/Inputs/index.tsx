import { Button, Form, Input } from 'antd';
import React from 'react'

interface Props {
    handlerSearch: (url: string, values: any) => void
    url: string
    paras: {
        label: string
        name: string
        required: boolean
        placeholder: string
    }[]
}

interface State {
}

class Inputs extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
        }
    }

    render() {
        let inputs: any = []
        this.props.paras.forEach(para => {
            inputs.push(
                <Form.Item
                    key={para.label}
                    label={para.label}
                    name={para.name}
                    rules={[{ required: para.required, message: '请输入' + para.name}]}
                >
                    <Input placeholder={para.placeholder} />
                </Form.Item>
            )
        })
        
        return (
            <Form name="basic" layout='inline' onFinish={(value: any) => this.props.handlerSearch(this.props.url, value)}>
                {inputs}
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        查找
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Inputs;