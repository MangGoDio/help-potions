import ButtonDemo from '../component/button/demo'
import InputDemo from '../component/input/demo'
import FormDemo from '../component/form/demo'
import MenuDemo from '../component/menu/demo'
import IconDemo from '../component/icon/demo'
import ProgressDemo from '../component/progress/demo'
import TextDemo from '../component/text/demo'

export const routes = [
    {name: '输入框', path: '/input', component: InputDemo, exact: true}, 
    {name: '按钮', path: '/button', component: ButtonDemo}, 
    {name: '菜单', path: '/menu', component: MenuDemo},
    {name: '图标', path: '/icon', component: IconDemo},
    {name: '文字', path: '/text', component: TextDemo},
    {name: '表单', path: '/form', component: FormDemo},
    {name: '进度条', path: '/progress', component: ProgressDemo},
]
