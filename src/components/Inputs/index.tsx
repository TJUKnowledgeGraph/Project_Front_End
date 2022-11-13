import { Button, Form, Input } from 'antd';
import React from 'react'
import './index.scss'

interface Props {
    handlerSearch: (values: any) => void
    text: string
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

    render() {
        let inputs: any = []
        this.props.paras.forEach(para => {
            inputs.push(
                <Form.Item
                    key={para.label}
                    label={para.label}
                    name={para.name}
                    rules={[{ required: para.required, message: '请输入' + para.label }]}
                >
                    <Input placeholder={para.placeholder} />
                </Form.Item>
            )
        })

        return (
            <div>
                <p className='text'>{this.props.text}</p>
                <Form name="basic" layout='inline' onFinish={(value: any) => this.props.handlerSearch(value)}>
                    {inputs}
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            查找
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Inputs;