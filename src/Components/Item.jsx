import React from 'react'

export default class Item extends React.Component {
    constructor(props){
      super(props)
      const { items } = this.props;
      this.state = { items }
    }
    render() {
      const {items} = this.state
      return (
        <div>
          <ul>
            {this.props.items.map((item, index) => (
              <li className='ml-10' key={index} onClick={this.props.deleteTask.bind(this, index)}>
                {item}
                <button className='ml-5' onClick={this.onDeleteHandler}>Удалить задачу</button>
              </li>
            ))}
  
          </ul>
        </div>
      );
    }
  }