import dispatcher from '../dispatcher';

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(text) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    text,
  });
}

export function reloadTodos() {
 /* ajax("https://someurl.com/somedata").then((data) =>{
    console.log("got the data!", data);
  })*/
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECIEVE_TODOS", todos: [
      {
        id: 13124215,
        text: "Go Shopping again",
        complete: false
      },
      {
        id: 13124216,
        text: "check list",
        complete: true
      },
    ]});

  }, 1000);

}