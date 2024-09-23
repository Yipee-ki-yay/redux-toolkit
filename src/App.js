import Counter from "./features/counter/Counter";
import Posts from "./features/posts/Posts";
import TodoList from "./features/todo/AddTodo";
import AddTodo from "./features/todo/TodoList";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <div className="todoWrapper">
        <AddTodo />
        <TodoList />
        <Posts />
      </div>
    </div>
  );
}

export default App;
