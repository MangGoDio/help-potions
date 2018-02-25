import React from 'react'
const cn = require('classnames/bind').bind(require('./progress.scss'))

export default class ProgressMobile extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            progress: this.props.progress || 0
        }
    }

    render() {

        const { arr, style, className, max } = this.props,
            { progress } = this.state

        const itemList = arr && arr.map((item, index) => {
            const css = cn({ 'progress-mobile': true, 'active': progress >= index + 1, 'disabled': index + 1 > max })
            return (
                <div key={`进度${index + 1}`} className={css} >
                    {item.text}<span></span>
                </div>
            )
        })

        return (
            <div className={cn('progress-box', className)} style={style}>
                {itemList}
            </div>
        )
    }
}
