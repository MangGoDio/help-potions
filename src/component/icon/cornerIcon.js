import React from 'react'
const cn = require('classnames/bind').bind(require('./cornerIcon.scss'))

const CornerIcon = props => <span className={cn('corner-icon')} style={props.style}></span>

export default CornerIcon