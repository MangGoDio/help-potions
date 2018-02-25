import React from 'react'
import Input from './index'

export default class CheckGroupDemo extends React.Component {

    state = {
        checked: ['yes', 'no'],
    }

    changeInput = (value, name) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Input.CheckGroup name='checked' onCheck={this.changeInput} checked={this.state.checked} arr>
                <Input.Checkbox value={'yes'}>可以接受</Input.Checkbox>
                <Input.Checkbox value={'no'}>不接受</Input.Checkbox>
                <Input.Checkbox value={'soso'}>充钱就接受</Input.Checkbox>
            </Input.CheckGroup>
        )
    }
}
