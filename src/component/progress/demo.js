import React from 'react'

import { Li } from '../common/common'

import Progress from './index'

const arr = [
    { text: '猛汉世界启动', id: 'first', },
    { text: '调查任务加入', id: 'second', },
    { text: '队友一猫', id: 'third', },
    { text: '队友二猫', id: 'fourth', },
    { text: '队友三猫', id: 'fifth', },
    { text: '猛汉世界关闭', id: 'sixth', },
]

const ProgressDemo = () =>
    <section style={{ marginTop: '20px' }}>
        <Li desc='ProgressPage 流程进度组件' comp={[
            <Progress.ProgressPage progress={3} max={4} arr={arr} onChoose={(id) => { console.log(id) }} />
        ]} set={[
            { param: 'style', example: '{{width: `50px`}}', desc: '自定义样式', nec: 'false' },
            { param: 'className', example: 'dio', desc: '自定义CSS', nec: 'false' },
            { param: 'progress', example: '3', desc: '流程进度，默认为0', nec: 'false' },
            { param: 'max', example: '4', desc: '当前能点击的最大值', nec: 'false' },
            { param: 'arr', example: "[{text: '猛汉世界启动', id: 'first',},{text: '调查任务加入', id: 'second'}]", desc: '流程进度数组', nec: 'true' },
        ]} code={<code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Progress.ProgressPage progress={3} max={4} arr={arr} onChoose={(id) => { console.log(id) }} />`
        , Prism.languages.javascript)}}>
        </code>} />
    </section>

export default ProgressDemo
