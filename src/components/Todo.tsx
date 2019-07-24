import React, { SFC } from 'react';
import { List } from 'antd'
//定义枚举类型获取状态
enum FilterType{
    All=1,
    Compoleted,
    NotCompoleted
}


interface IProps {
    todo:Array<Itodo>,
    filtertype:FilterType,
    Compoleted:(item:Itodo)=>void
}

interface Itodo{
    text:string,
    compoleted:boolean,
    deleted?:boolean
}
const Todo: SFC<IProps> = ({...TodoProps}) => {
    // console.log(TodoProps)
    const {todo,filtertype,Compoleted}=TodoProps
    //根据枚举类型对数据进行筛选
    const data=todo.filter((item:Itodo)=>{
        if(filtertype===FilterType.All){
            return item
        }else if(filtertype===FilterType.Compoleted){
            return item.compoleted
        }else if(filtertype===FilterType.NotCompoleted){
            return !item.compoleted
        }
    })
  
    return (
        <div>
            <List
                style={{width:464,margin:" 0 auto"}}
                bordered
                dataSource={data}
                renderItem={(item:Itodo,index:number) => (
                    <List.Item style={{textDecoration:item.deleted?'line-through':'none'}} actions={[<a onClick={()=>Compoleted(item)} >更改状态</a>, <a>删除</a>]} key={index}>
                        {item.text}
                    </List.Item>
                )}
            />
        </div>
    )

}

export default Todo;