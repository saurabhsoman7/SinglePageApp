import { EventEmitter } from 'events';

import dispatcher from './dispatcher';
class TodoStore extends EventEmitter {
	constructor() {
		super()
		this.todos = [
			{
				id: 13124215,
				text: "Go Shopping",
				complete: false
			},
			{
				id: 13124216,
				text: "pay Bills",
				complete: false
			},
		];
	}


  createTodo(text){
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    })

  	this.emit("change");
  }

	getAll() {
		return this.todos;
	}

	handleAcitons(action){
		switch(action.type){
			case "CREATE_TODO": {
				this.createTodo(action.text);
			}
			case "RECIEVE_TODOS": {
				this.todos = action.todos;
				this.emit("change");
			}
		}
	}
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAcitons.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;
