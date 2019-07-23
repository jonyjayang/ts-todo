import React, { SFC } from 'react';
import { Button, Input } from 'antd'


interface IProps {
    readonly inputValue: string;
    readonly handlechange: (e:React.ChangeEvent)=>void;
    readonly AddTodo:()=>void
}

//定义无状态组件SFC,传递Iprops状态，并设置其内属性为只读
const Add: SFC<IProps> = ({ ...AddProps }) => {
   
    const {inputValue,handlechange,AddTodo}=AddProps

    return (
        <div>
            <Input style={{ width: 400 }} value={inputValue} onChange={handlechange}  />
             <Button type="ghost" onClick={AddTodo}>添加</Button>
        </div>
    )
}



export default Add;