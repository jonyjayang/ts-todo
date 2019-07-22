import React,{ Component } from 'react';
import Add from './Add'
import Todo from './Todo'
import Filter from './Filter'

interface IProps{
//定义从props里面获得对象的类型
}

interface IState{
    //定义state对象中类型
    todo:Array<Itood>,
    inputValue:string

}
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
        }],
        inputValue:"132"
    }

  render(){
      const {inputValue,todo}=this.state
      console.log(todo)
      console.log(inputValue)

    const AddProps={
        inputValue,
        handlechange:(e:React.ChangeEvent):void=>{
            this.setState({
                inputValue:(e.target as HTMLInputElement).value,
            })
        },
        AddTodo:():void=>{
            this.setState({
                todo:[
                    ...todo,
                    {text:inputValue,compoleted:false}
                ],
                inputValue:''
            })
        }
    }
   return (
       <div>
          <Add {...AddProps} />
          <Todo />
          <Filter />
       </div>
     );
   }
};


export default  Todolist;