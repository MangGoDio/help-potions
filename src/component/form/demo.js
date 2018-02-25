import React from 'react'
import Form from './index'
import Input from '../input'
import Button from '../button'

/**
 * list列表
 * title: 左侧文字
 * align：左侧文字对齐方式（middle中对齐，不输入默认上对齐）
 */
export default class FormDemo extends React.Component {

    state = {
        reason: 1,
        error: {
            proName: '',
            proDesc: '',
            reasonText: '', 
        }
    }

    changeInput = (value, name) => {
        let { error } = this.state
        error[name] && (error[name] = '')
        this.setState({
            [name]: value,
            error: error
        })
    }

    submit = () => {
        let door = true
        const required = [ 'proName', 'proDesc']
        for(let i of required) {
            if(!this.state[i]) {
                this.setState({
                    [`${i}Error`]: '不可为空'
                })
                door = false
            }
        }
        if(door) {
            alert('提交成功')
        }
    }

    render() {

        const { error, reason, validate } = this.state

        return(
            <div style={{width: 'auto', margin: '0 auto'}}>
            <pre className='code'>
            <code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Form.List>
    <Form.Item title='项目名称'>
        <Input.TextInput name='proName' error={error.proName} onChange={this.changeInput} />
    </Form.Item>
    <Form.Item title='项目描述'>
        <Input.TextInput name='proDesc' error={error.proDesc} onChange={this.changeInput} />
    </Form.Item>
</Form.List>
<Form.List>
    <Form.Item title='请选择原因' align='top'>
        <Input.RadioGroup name='reason' onChange={this.changeInput} checked={reason}>
            <Input.Radio value={1}>乙方实名信息不实，误导决策</Input.Radio>
            <Input.Radio value={2}>交易协议相关条款未达成共识</Input.Radio>
            <Input.Radio value={3}>其它</Input.Radio>
        </Input.RadioGroup>
        <Input.TextInput name='reasonText' placeholder='请填写原因' style={{marginTop: '.75rem'}}
                        error={error.reasonText} onChange={this.changeInput} disabled={reason !== 3} />
    </Form.Item>
</Form.List>
<Form.List>
    <Form.Item title='描述具体情况'>
        <Input.Textarea name='textarea' placeholder='请您描述一下具体情况' length='200'
                        onChange={this.changeInput} />
    </Form.Item>
</Form.List>
<Form.List>
    <Button.BaseBtn sType='blue' onClick={this.submit}>提交</Button.BaseBtn>
</Form.List>`
            , Prism.languages.javascript)}}>
            </code>
            </pre>
                <Form.List>
                    <Form.Item title='项目名称'>
                        <Input.TextInput name='proName' error={error.proName} onChange={this.changeInput} />
                    </Form.Item>
                    <Form.Item title='项目描述'>
                        <Input.TextInput name='proDesc' error={error.proDesc} onChange={this.changeInput} />
                    </Form.Item>
                </Form.List>
                <Form.List>
                    <Form.Item title='请选择原因' align='top'>
                        <Input.RadioGroup name='reason' onChange={this.changeInput} checked={reason}>
                            <Input.Radio value={1}>乙方实名信息不实，误导决策</Input.Radio>
                            <Input.Radio value={2}>交易协议相关条款未达成共识</Input.Radio>
                            <Input.Radio value={3}>其它</Input.Radio>
                        </Input.RadioGroup>
                        <Input.TextInput name='reasonText' placeholder='请填写原因' style={{marginTop: '.75rem'}}
                                        error={error.reasonText} onChange={this.changeInput} disabled={reason !== 3} />
                    </Form.Item>
                </Form.List>
                <Form.List>
                    <Form.Item title='描述具体情况'>
                        <Input.Textarea name='textarea' placeholder='请您描述一下具体情况' length='200'
                                        onChange={this.changeInput} />
                    </Form.Item>
                </Form.List>
                <Form.List>
                    <Button.BaseBtn sType='blue' onClick={this.submit}>提交</Button.BaseBtn>
                </Form.List>
            </div>        
        )
    }
}
