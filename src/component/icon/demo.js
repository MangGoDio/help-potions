import React from 'react'

import { Li } from '../common/common'

import Icon from './index'

const IconDemo = () => 
    <section style={{marginTop: '20px'}}>
        <Li desc='YesIcon 对勾图标' comp={[
            <Icon.YesIcon />,
            <Icon.YesIcon active={true} />,
            <Icon.YesIcon color='blue' large cursor onClick={(active) => {console.log(active)}} />,
            <Icon.YesIcon color='blue' active={true} large cursor onClick={(active) => {console.log(active)}} />,
        ]} set={[
            {param: 'style', example: '{{width: `50px`}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'dio', desc: '自定义CSS', nec: 'false'},
            {param: 'active', example: 'active', desc: '打上对勾', nec: 'false'},
            {param: 'color', example: 'blue', desc: '显示为蓝色', nec: 'false'},
            {param: 'large', example: '', desc: '默认大小14px，传入large为20px', nec: 'false'},
            {param: 'cursor', example: '', desc: '移入显示鼠标手势', nec: 'false'},
        ]} code={<code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Icon.YesIcon />,
<Icon.YesIcon active={true} />,
<Icon.YesIcon color='blue' large cursor onClick={(active) => {console.log(active)}} />,
<Icon.YesIcon color='blue' active={true} large cursor onClick={(active) => {console.log(active)}} />`
                    , Prism.languages.javascript)}}>
                    </code>} />
        <Li desc='CornerIcon 右上角角标' comp={[
            <div style={{width: '40px', height: '60px', position: 'relative'}}>
                <Icon.CornerIcon />
            </div>
        ]} set={[
            {param: 'style', example: '{{width: `50px`}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'dio', desc: '自定义CSS', nec: 'false'},
        ]} code={<code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Icon.CornerIcon />`
                    , Prism.languages.javascript)}}>
                    </code>} />
    </section>

export default IconDemo
