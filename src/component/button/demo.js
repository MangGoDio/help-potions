import React from 'react'
import { Demo, Api } from '../common/common'
import Button from './index'

const ButtonDemo = props => {
    return (
        <div>
            <Demo title='基础按钮'>
                <Button.BaseBtn>默认按钮</Button.BaseBtn>
                <Button.BaseBtn disabled={true}>禁用按钮</Button.BaseBtn>
                <Button.BaseBtn sType='blue'>blue按钮</Button.BaseBtn>
                <Button.BaseBtn sType='noBorder'>noBorder按钮</Button.BaseBtn>
                <Button.BaseBtn sType='link'>link按钮</Button.BaseBtn>
                <Button.BaseBtn sType='blue' wide={true}>blue-wide 按钮</Button.BaseBtn>
                <Button.BaseBtn> 自定义class </Button.BaseBtn>
            </Demo>
            <pre className='code'>
            <code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Button.BaseBtn>默认按钮</Button.BaseBtn>
<Button.BaseBtn disabled={true}>禁用按钮</Button.BaseBtn>
<Button.BaseBtn sType='blue'>blue按钮</Button.BaseBtn>
<Button.BaseBtn sType='noBorder'>noBorder按钮</Button.BaseBtn>
<Button.BaseBtn sType='link'>link按钮</Button.BaseBtn>
<Button.BaseBtn sType='blue' wide={true}>blue-wide 按钮</Button.BaseBtn>
<Button.BaseBtn> 自定义class </Button.BaseBtn>`
            , Prism.languages.javascript)}}>
            </code>
            </pre>
            <Api params={[
                {param: 'style', desc: '控件样式', type: 'object'},
                {param: 'className', desc: '新增css样式', type: 'string'},
                {param: 'sType', desc: '预设的样式类型 blue蓝底白字/noBorder白底黑字无边/link白底蓝字无边', type: 'string'},
                {param: 'wide', desc: '是否宽按钮(350px)', type: 'boolean'},
                {param: 'disabled', desc: '是否禁用', type: 'boolean'},
                {param: 'children', desc: '按钮内的组件或静态文本', type: 'dom'},
                {param: 'onClick', desc: '回调 ()=>{}', type: 'function'},
            ]}/>

            <Demo title='图标按钮'>
                <Button.IconBtn icon='ok'>默认按钮</Button.IconBtn>
                <Button.IconBtn icon='question' sType='blue'>blue按钮</Button.IconBtn>
                <Button.IconBtn icon='goback' sType='noBorder'>noBorder按钮</Button.IconBtn>
                <Button.IconBtn icon='ok'> 自定义class </Button.IconBtn>
            </Demo>
            <pre className='code'>
            <code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Button.IconBtn icon='ok'>默认按钮</Button.IconBtn>
<Button.IconBtn icon='question' sType='blue'>blue按钮</Button.IconBtn>
<Button.IconBtn icon='goback' sType='noBorder'>noBorder按钮</Button.IconBtn>
<Button.IconBtn icon='ok'> 自定义class </Button.IconBtn>`
            , Prism.languages.javascript)}}>
            </code>
            </pre>
            <Api params={[
                {param: 'style', desc: '控件样式', type: 'object'},
                {param: 'className', desc: '新增css样式', type: 'string'},
                {param: 'sType', desc: '预设的样式类型 blue蓝底白字/noBorder白底黑字无边/link白底蓝字无边(默认noBorder)', type: 'string'},
                {param: 'wide', desc: '是否宽按钮(350px)', type: 'boolean'},
                {param: 'disabled', desc: '是否禁用', type: 'boolean'},
                {param: 'icon', desc: '图标', type: 'string'},
                {param: 'space', desc: '图标和文字间隔', type: 'string'},
                {param: 'children', desc: '按钮内的组件或静态文本', type: 'dom'},
                {param: 'onClick', desc: '回调 ()=>{}', type: 'function'},
            ]}/>
        </div>
    )
}

export default ButtonDemo