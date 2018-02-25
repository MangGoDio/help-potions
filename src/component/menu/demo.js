import React from 'react'
import { Demo, Api } from '../common/common'
import Menu from './index'

const MenuDemo = props => {
    return (
        <div>
            <Demo title='菜单'>
                <Menu.Menu menu={[
                    {id: '1', text: '代报名项目(4)'},
                    {id: '2', text: '已报名项目(4)'},
                    {id: '3', text: '进行中的项目(2)'}]}/>
            </Demo>
            <pre className='code'>
            <code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Menu.Menu menu={[
    {id: '1', text: '代报名项目(4)'},
    {id: '2', text: '已报名项目(4)'},
    {id: '3', text: '进行中的项目(2)'}]}'/>`
            , Prism.languages.javascript)}}>
            </code>
            </pre>
            <Api params={[
                {param: 'style', desc: '控件样式', type: 'object'},
                {param: 'className', desc: '新增css样式', type: 'string'},
                {param: 'menu', desc: '菜单列表[{id,text,isActive}]', type: 'array'},
                {param: 'isActiveMode', desc: '是否可选中的模式. 若false则没有选中状态', type: 'boolean'},
                {param: 'onClick', desc: '点击时的回调方法 (id,text,event)=>{}', type: 'function'},
            ]}/>

            <Demo title='竖向菜单'>
                <Menu.VMenu menu={[
                    {id: '1',icon:'building', text: '建筑设计'},
                    {id: '2',icon:'landscape', text: '景观设计'}]}/>
            </Demo>
            <pre className='code'>
            <code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Menu.VMenu menu={[
    {id: '1',icon:'building', text: '建筑设计'},
    {id: '2',icon:'landscape', text: '景观设计'}]}/>`
            , Prism.languages.javascript)}}>
            </code>
            </pre>
            <Api params={[
                {param: 'menu', desc: '菜单列表[{id,text,icon,isActive}]', type: 'array'},
                {param: 'isActiveMode', desc: '是否可选中的模式. 若false则没有选中状态', type: 'string'},
                {param: 'onClick', desc: '点击时的回调方法 (id,text,event)=>{}', type: 'function'},
            ]}/>

            <Demo title='双行竖向菜单'>
                <Menu.VMenu type='twin' menu={[
                    {id: '1',icon:'building', text: '第1阶段', desc: '尊敬的用户请您充值'},
                    {id: '2',icon:'landscape', text: '第2阶段', desc: '尊敬的用户请您补款'},
                    {id: '3',icon:'landscape', text: '第3阶段', desc: '尊敬的用户请您结账'}]}/>
            </Demo>
            <pre className='code'>
            <code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Menu.VMenu type='twin' menu={[
    {id: '1',icon:'building', text: '第1阶段', desc: '尊敬的用户请您充值'},
    {id: '2',icon:'landscape', text: '第2阶段', desc: '尊敬的用户请您补款'},
    {id: '3',icon:'landscape', text: '第3阶段', desc: '尊敬的用户请您结账'}]}/>`
            , Prism.languages.javascript)}}>
            </code>
            </pre>
            <Api params={[
                {param: 'menu', desc: '菜单列表[{id,text,icon,isActive}]', type: 'array'},
                {param: 'isActiveMode', desc: '是否可选中的模式. 若false则没有选中状态', type: 'string'},
                {param: 'onClick', desc: '点击时的回调方法 (id,text,event)=>{}', type: 'function'},
                {param: 'type', desc: '双行', type: 'string'},
            ]}/>

        </div>
    )
}

export default MenuDemo