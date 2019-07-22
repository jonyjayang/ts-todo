import React, { SFC } from 'react';
import { Button, Input } from 'antd'


interface IProps {
    readonly inputValue: string;
    readonly handlechange: (e:React.ChangeEvent)=>void;
    readonly AddTodo:()=>void
}

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