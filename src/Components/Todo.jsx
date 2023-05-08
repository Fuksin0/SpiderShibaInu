import React from 'react';
import Item from './Item'

export default class Todo extends React.Component {
    constructor(props) {
      super(props)
      const {items} = this.props
      this.state = {items}
      this.state = {
        items: [],
        term: '',
      }
    }
  
    handleChange = (e) => {
      e.preventDefault();
      this.setState({term: e.target.value})
    }
  
    onHandler = (e) => {
      e.preventDefault();
      this.setState({
        term:'',
        items: [...this.state.items, this.state.term]
        })
    }
  
    onDeleteHandler = index => {
      const deleteTask = [...this.state.items];
      deleteTask.splice(index,1);
      this.setState({
        items:deleteTask
      })
    }
  
    render() {
      return (
        <div>
          <div className="mb-3 mt-3 ml-10   w-1/2 border border-black rounded">
            <form className="flex">
              <div className="">
                <input type="text" onChange={this.handleChange} value={this.state.term} required="" className="form-control" placeholder="I am going..." />
              </div>
              <button onClick={this.onHandler} type="submit" className="btn btn-primary bg-red">Добавить задачу</button>
            </form>
              <div></div>
              <div></div>
          </div>
          <div className='flex'>
        <Item deleteTask={this.onDeleteHandler} items={this.state.items}>
        </Item>
        </div>
        </div>
      )
    }
  }

















