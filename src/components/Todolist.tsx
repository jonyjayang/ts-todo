import React,{ Component } from 'react';
import Add from './Add'
import Todo from './Todo'
import Filter from './Filter'
//定义枚举类型
enum FilterType{
    All=1,
    Compoleted,
    NotCompoleted
}

interface IProps{
//定义从props里面获得对象的类型
}

interface IState{
    //定义state对象中类型
    todo:Array<Itood>,
    inputValue:string,
    filtertype:FilterType

}
//数组类型需要定义其中每个字段的类型
interface Itood{
    text:string,
    compoleted:boolean,
    deleted?:boolean
}

class  Todolist extends Component<IProps, IState> {
    state={
        todo:[{
            text:'吃饭',
            compoleted:false,
            deleted:false            
        },{
            text:'睡觉',
            compoleted:true,
            deleted:false            
        }],
        inputValue:"",
        //使用枚举中的数据，其值为1
        filtertype:FilterType.All
    }

  render(){
      const {inputValue,todo,filtertype}=this.state
   
    //统一对组件需要使用的状态进行管理
    const AddProps={
        inputValue,
        //handlechange事件调用的是onchange事件所以event类型为ChangeEvent返回值设置成void
        handlechange:(e:React.ChangeEvent):void=>{
            this.setState({
                inputValue:(e.target as HTMLInputElement).value,
            })
        },
        AddTodo:():void=>{
            this.setState({
                //setState可以使用回掉函数，或者使用props和prev来进行对之前数据的合并
                todo:[
                    ...todo,
                    {text:inputValue,compoleted:false}
                ],
                inputValue:''
            })
        }
    }

    const TodoProps={
        todo,
        filtertype
    }
   return (
       <div>
          <Add {...AddProps} />
          <Todo {...TodoProps} />
          <Filter />
       </div>
     );
   }
};


export default  Todolist;