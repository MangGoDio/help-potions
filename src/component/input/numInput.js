import React from 'react'
import TextInput from './textInput'

const NumInput = props => {
    let newProps = Object.assign({}, props, {type: 'number', number: true})

    return (
        <TextInput {...newProps} />
    )
}

export default NumInput