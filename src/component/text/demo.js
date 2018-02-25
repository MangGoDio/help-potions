import React from 'react'
import Text from './index'
import { Demo, Api } from '../common/common'
const cn = require('classnames/bind').bind(require('./demo.scss')) //css

const TextDemo = (props) => {
    return (
        <div className={cn('demo')}>
            <Demo title='带图标文本'>
                <Text.IconText icon='avatar' height={24}>个人用户</Text.IconText>
                <Text.IconText icon='avatar' height={18}>账号注册</Text.IconText>
                <Text.IconText icon='goback' height={14} space='15'>返回</Text.IconText>
                <Text.IconText icon='download' height={14} space='6'>下载全部文件</Text.IconText>
                <Text.IconText icon='download' height={14} space='6' className={cn('custom-text')}>添加了className</Text.IconText>
            </Demo>
            <pre className='code'>
            <code dangerouslySetInnerHTML={{ __html: Prism.highlight(
`<Text.IconText icon='avatar' height={24}>个人用户</Text.IconText>
<Text.IconText icon='avatar' height={18}>账号注册</Text.IconText>
<Text.IconText icon='goback' height={14} space='15'>返回</Text.IconText>
<Text.IconText icon='download' height={14} space='6'>下载全部文件</Text.IconText>
<Text.IconText icon='download' height={14} space='6' className={cn('custom-text')}>添加了className</Text.IconText>`
            , Prism.languages.javascript)}}>
            </code>
            </pre>
            <Api params={[
                {param: 'style', desc: '文本的样式', type: 'object'},
                {param: 'className', desc: '文本的class', type: 'string'},
                {param: 'iconStyle', desc: '图标的style', type: 'object'},
                {param: 'icon', desc: '图标', type: 'string'},
                {param: 'children', desc: '文本或子组件', type: 'dom'},
                {param: 'height', desc: '图标和文字的高度(若style或iconStyle已定义其高度, 则该项失效)默认14px', type: 'number'},
                {param: 'space', desc: '图标和文字之间的间距', type: 'number'},
            ]}/>
        </div>
    )
}

export default TextDemo