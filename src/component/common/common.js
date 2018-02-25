import React from 'react'
const cn = require('classnames/bind').bind(require('./common.scss'))

const Api = (props) => {
    const trList = props.params.map((param, index) => {
        return <Tr key={index} {...param}/>
    })
    return (
        <table className='api-table' style={{width: props.width}}>
            <thead>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
            </tr>
            </thead>
            <tbody>{trList}</tbody>
        </table>
    )
}

const Tr = (props) => {
    return (
        <tr>
            <th>{props.param}</th>
            <td>{props.desc}</td>
            <td>{props.type}</td>
        </tr>
    )
}

const Demo = props => {
    return (
        <div className='demo-grp'>
            <h2>{props.title}</h2>
            <div className='demo-list'>
                {
                    React.Children.map(props.children, function (child) {
                        return <span className='demo-item'>{child}</span>
                    })
                }
            </div>
        </div>
    )
}

const ApiDIO = props => {
    const trList = props.params && props.params.map((param, index) => <TrDIO key={index} {...param}/>)
    return (
        <table className={cn('api-table')}>
            <thead>
            <tr>
                <th>参数名</th>
                <th>说明</th>
                <th>传值示例</th>
                <th>是否必加</th>
            </tr>
            </thead>
            <tbody>{trList}</tbody>
        </table>
    )
}

const TrDIO = props => 
    <tr>
        <th>{props.param}</th>
        <td>{props.desc}</td>
        <td>{props.example}</td>
        <td>{props.nec}</td>
    </tr>

const Li = props => {
    const itemList = props.comp.map((item, index) => 
        <span key={index}>{item}</span> 
    )
    return (
        <div className={cn('box')}>
            <p>{props.desc}</p>
            { itemList }
            <pre className='code'>{props.code}</pre>
            { props.set && <ApiDIO params={props.set} /> }
        </div>
    )
}

export { Api, Demo, Li }