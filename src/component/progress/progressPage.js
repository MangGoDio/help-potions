import React from 'react'
const cn = require('classnames/bind').bind(require('./progress.scss'))

class ProgressPage extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            progress: this.props.progress || 0,
            desc: '待支付定金',
        }
    }

    chooseProgress(index, id) {
        this.setState({
            progress: index
        })
        this.props.onChoose(id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.progress != this.props.progress) {
            this.setState({
                progress: nextProps.progress
            })
        }
    }

    render() {

        const { arr, style, className, max } = this.props,
            { progress } = this.state

        const itemList = arr && arr.map((item, index) => {
            const css = cn({ 'progress-item': true, 'active': progress >= index + 1, 'disabled': index + 1 > max })
            return (
                <div key={`进度${index + 1}`} className={css}
                    onClick={this.chooseProgress.bind(this, index + 1, item.id)}>
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

export default ProgressPage