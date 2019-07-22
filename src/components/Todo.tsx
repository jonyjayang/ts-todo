import React, { SFC } from 'react';
import {List} from 'antd'

interface IProps {

}

const Todo: SFC<IProps> = ({ }) => {
    return(
<div>
          <List
    
      bordered
      dataSource={[]}
      renderItem={item => (
        <List.Item actions={[<a>compelted</a>, <a>more</a>]}>
            
        </List.Item>
      )}
    />
    </div>
    )
    
      }

export default Todo;