import React from 'react'
import Input from './index'

export default class RadioGroupDemo extends React.Component {

    constructor(...props) {
        super(...props)
        this.state = {
            checked: 'yes',
        }
        this.changeInput = this.changeInput.bind(this)
    }  

    changeInput(value, name) {
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <Input.RadioGroup name='checked' onChange={this.changeInput} checked={this.state.checked} display='inline'>
                <Input.Radio value={'yes'}>可以接受</Input.Radio>
                <Input.Radio value={'no'}>不接受</Input.Radio>
                <Input.Radio value={'soso'}>充钱就接受</Input.Radio>
            </Input.RadioGroup>
        )
    }
}