import React, { SFC } from 'react';
import {Radio} from 'antd'

enum FilterType{
    All=1,
    Compoleted,
    NotCompoleted
}

interface IProps {
 readonly ChangeType:(fitertype:FilterType)=>void

}


const Filter: SFC<IProps> = ({...FilterProps }) => {
    const { ChangeType}=FilterProps
    return(
        <div>
        <Radio.Group defaultValue={FilterType.All} buttonStyle="solid">
       <Radio.Button onClick={()=>ChangeType(FilterType.All)} value={FilterType.All}>全部</Radio.Button>
       <Radio.Button onClick={()=>ChangeType(FilterType.Compoleted)} value={FilterType.Compoleted}>已完成</Radio.Button>
       <Radio.Button onClick={()=>ChangeType(FilterType.NotCompoleted)} value={FilterType.NotCompoleted}>未完成</Radio.Button>
     </Radio.Group>
   </div>
    )
    }

export default Filter;