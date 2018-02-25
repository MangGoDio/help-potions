import React from 'react'
var Prism = require('prismjs');
import RadioGroupDemo from './radioGroupDemo'
import CheckGroupDemo from './checkGroupDemo'
import Input from './index'
import { Li } from '../common/common'

const arr = [
    {text: '广东省', value: '广东省'},{text: '北京市', value: '北京市'},{text: '天津市', value: '天津市'},
    {text: '河北省', value: '河北省'},{text: '山西省', value: '山西省'},{text: '内蒙古自治区', value: '内蒙古自治区'},
    {text: '辽宁省', value: '辽宁省'},{text: '吉林省', value: '吉林省'},{text: '黑龙江省', value: '黑龙江省'},
    {text: '上海市', value: '上海市'},{text: '江苏省', value: '江苏省'},{text: '浙江省', value: '浙江省'},
]

const InputDemo = () => 
    <section style={{marginTop: '20px'}}>
        <Li desc='RadioGroup 单选框组' comp={[
            <RadioGroupDemo />,
        ]} set={[
            {param: 'style', example: '{{width: `50px`}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'dio', desc: '自定义CSS', nec: 'false'},
            {param: 'display', example: 'inline', desc: '添加该参数则横排', nec: 'false'},
        ]} code={<code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Input.RadioGroup name='checked' onChange={this.changeInput} checked={this.state.checked} display='inline'>
    <Input.Radio value={'yes'}>可以接受</Input.Radio>
    <Input.Radio value={'no'}>不接受</Input.Radio>
    <Input.Radio value={'soso'}>充钱就接受</Input.Radio>
</Input.RadioGroup>`
        , Prism.languages.javascript)}}>
        </code>} /> 
        <Li desc='CheckGroup 多选框组' comp={[ 
            <CheckGroupDemo />,
        ]} set={[
            {param: 'style', example: '{{width: `50px`}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'dio', desc: '自定义CSS', nec: 'false'},
            {param: 'display', example: 'inline', desc: '添加该参数则横排', nec: 'false'},
        ]} code={<code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Input.CheckGroup name='checked' onCheck={this.changeInput} checked={this.state.checked} arr>
    <Input.Checkbox value={'yes'}>可以接受</Input.Checkbox>
    <Input.Checkbox value={'no'}>不接受</Input.Checkbox>
    <Input.Checkbox value={'soso'}>充钱就接受</Input.Checkbox>
</Input.CheckGroup>`
        , Prism.languages.javascript)}}>
        </code>}/>
        
        <Li desc='DropDown 下拉列表' comp={[
            <Input.DropDown name='address' arr={arr} defaultValue='北京市' onChange={(value, name) => {console.log(value, name)}} />,
        ]} set={[
            {param: 'style', example: '{{width: `50px`}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'dio', desc: '自定义CSS', nec: 'false'},
            {param: 'arr', example: "[{text: '广东省', value: 'a'},{text: '北京市', value: 'b'}]", desc: '下拉列表数组', nec: 'true'},
            {param: 'defaultValue', example: '北京市', desc: '默认选中参数，不传则取数组第一个', nec: 'false'},
            {param: 'up', example: '', desc: '变为向上滑出', nec: 'false'},
            {param: 'onChoose()', example: '(v) => {console.log(`选择了${v}`)', desc: '选择触发方法', nec: 'false'},
        ]} code={<code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Input.DropDown name='address' arr={arr} defaultValue='北京市' onChange={(value, name) => {console.log(value, name)}} />`
        , Prism.languages.javascript)}}>
        </code>} />
        
        <Li desc='TextInput 文字输入框(默认宽度320px)' comp={[
            <Input.TextInput name='nickName' placeholder='请输入您的姓名' defaultValue='我想吃芒果'
                             onChange={(value, name) => {console.log(value, name)}} />,
            <Input.TextInput name='user' placeholder='请输入您的姓名' defaultValue='我好想吃芒果' 
                             disabled onChange={(value, name) => {console.log(value, name)}} />,
            <Input.TextInput name='name' placeholder='请输入您的姓名' defaultValue='我超想吃芒果'
                             error='想吃至少请先付钱' onChange={(value, name) => {console.log(value, name)}} />,
            <Input.TextInput name='phoneNum' placeholder='请输入您的手机号' style={{marginBottom: '.5rem'}}
                             square icon='avatarcccccc' length='13' 
                             onChange={(value, name) => {console.log(value, name)}} />,
            <Input.TextInput name='password' type='password' placeholder='请输入您的密码'
                             square icon='avatarcccccc' onChange={(value, name) => {console.log(value, name)}} />,
        ]} set={[
            {param: 'style', example: '{{width: `50px`}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'dio', desc: '自定义CSS', nec: 'false'},
            {param: 'name', example: 'dio', desc: '该输入框独有名称，会在onChange事件返回该参数，建议填写', nec: 'false'},
            {param: 'onChange()', example: '(value,name) => {console.log(value,name)', desc: '编辑输入框事件', nec: 'false'},
            {param: 'placeholder', example: '请输入您的智商', desc: '提示内容', nec: 'false'},
            {param: 'defaultValue', example: '我没有智商', desc: '默认的文本显示内容', nec: 'false'},
            {param: 'type', example: 'password', desc: '定义输入框的类型，不传默认text', nec: 'false'},
            {param: 'error', example: '智商错误', desc: '显示错误信息同时输入框标红', nec: 'false'},
            {param: 'text', example: 'm2', desc: '普通的跟在输入框后面的文字', nec: 'false'},
            {param: 'desc', example: '卧槽怎么还有', desc: '跟在输入框后面文字的文字', nec: 'false'},
            {param: 'disabled', example: '', desc: '输入框不可编辑', nec: 'false'},
            {param: 'size', example: 'full', desc: '定义输入框大小(full: 100%, large: 525px, medium: 100px small: 50px)', nec: 'false'},
            {param: 'square', example: '', desc: '样式变更为登录注册页用', nec: 'false'},
            {param: 'icon', example: 'user', desc: '定义输入框图标', nec: 'false'},
            {param: 'length', example: '11', desc: '定义输入框限制字数', nec: 'false'},            
        ]} code={<code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Input.TextInput name='nickName' placeholder='请输入您的姓名' 
                defaultValue='我想吃芒果' onChange={(value, name) => {console.log(value, name)}} />,

<Input.TextInput name='user' placeholder='请输入您的姓名' 
                defaultValue='我好想吃芒果' disabled 
                onChange={(value, name) => {console.log(value, name)}} />,

<Input.TextInput name='name' placeholder='请输入您的姓名' 
                defaultValue='我超想吃芒果' error='想吃至少请先付钱' 
                onChange={(value, name) => {console.log(value, name)}} />,

<Input.TextInput name='phoneNum' placeholder='请输入您的手机号' 
                style={{marginBottom: '.5rem'}} square icon='avatarcccccc' length='13' 
                onChange={(value, name) => {console.log(value, name)}} />,

<Input.TextInput name='password' type='password' 
                placeholder='请输入您的密码' square icon='avatarcccccc' 
                onChange={(value, name) => {console.log(value, name)}} />`
        , Prism.languages.javascript)}}>
        </code>} />
        
        <Li desc='NumInput 带上下箭头的数字输入框' comp={[
            <Input.NumInput name='count' defaultValue='3' size='small' text='m2' desc='只能填写整数' max={9}
                            onChange={(value, name) => {console.log(value, name)}} />
        ]} set={[
            {param: '', example: '', desc: '继承textInput一切参数', nec: 'false'},
            {param: 'max', example: '10', desc: '定义输入框的最大值', nec: 'false'},
            {param: 'min', example: '0', desc: '定义输入框的最小值，默认为0', nec: 'false'},
        ]} code={<code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Input.NumInput name='count' defaultValue='3' size='small' text='m2'
            desc='只能填写整数' max={9} onChange={(value, name) => {console.log(value, name)}} />`
        , Prism.languages.javascript)}}>
        </code>} />
        <Li desc='Textarea 文本输入框' comp={[
            <Input.Textarea name='textarea' value='3' placeholder='请您描述一下具体情况' length='200'
                            onChange={(value, name) => {console.log(value, name)}} />
        ]} set={[
            {param: 'style', example: '{{width: `50px`}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'dio', desc: '自定义CSS', nec: 'false'},
            {param: 'name', example: 'dio', desc: '该输入框独有名称，会在onChange事件返回该参数，建议填写', nec: 'false'},
            {param: 'onChange()', example: '(value,name) => {console.log(value,name)', desc: '编辑输入框事件', nec: 'false'},
            {param: 'placeholder', example: '请输入您的智商', desc: '提示内容', nec: 'false'},
            {param: 'value', example: '我没有智商', desc: '文本显示内容', nec: 'false'},
            {param: 'length', example: '11', desc: '定义输入框限制字数', nec: 'false'}, 
            {param: 'size', example: 'full', desc: '定义输入框大小', nec: 'false'},
        ]} code={<code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Input.Textarea name='textarea' value='3' placeholder='请您描述一下具体情况' 
            length='200' onChange={(value, name) => {console.log(value, name)}} />`
                    , Prism.languages.javascript)}}>
                    </code>} />
    </section>

export default InputDemo
