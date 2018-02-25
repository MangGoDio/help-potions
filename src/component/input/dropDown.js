import React from 'react'
const cn = require('classnames/bind').bind(require('./pulldown.scss'))

class DropDown extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            value: this.props.value || this.props.defaultValue || '',
            text: '',
            show: false,
        }
        this.toggleList = this.toggleList.bind(this)
    }

    componentDidMount() {
        const defValue = this.props.defaultValue || ''
        this.choose(defValue, this.props.arr)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== undefined || nextProps.arr !== this.props.arr) {
            this.choose(nextProps.value, nextProps.arr)
        }
    }

    onChoose(value) {
        this.choose(value, this.props.arr)
        this.props.onChange(value, this.props.name)
    }

    choose(value, arr) {
        const index = arr.findIndex((n) => n.value === value)
        this.setState({
            value: value,
            text: arr[index] && arr[index].text || '请选择',
            show: false,
        })
    }

    toggleList() {
        this.setState({
            show: !this.state.show,
        })
    }

    render() {

        const {arr, className, style, defaultValue, up} = this.props,
              {value, text, show} = this.state

        const selectHint = <li key={'empty'} value={''} onClick={this.onChoose.bind(this, '')}>请选择</li>
        return (
            <div className={cn('drop-down', className, {'active': show}, {'up': up})} style={style}>
                <div className={cn('drop-box')} onClick={this.toggleList}>{text}</div>
                {show && <div className={cn('drop-bg')} onClick={this.toggleList}></div>}
                <ul className={cn({'show': show})}>{arr && [selectHint].concat(arr.map((item, index) =>
                    <li key={item.value} value={item.value} onClick={this.onChoose.bind(this, item.value)}>{item.text}</li>))}
                </ul>
            </div>
        )

    }
}

export default DropDown