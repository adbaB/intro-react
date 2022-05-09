import { createContext,useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


 const TodoContext = createContext()

 const TodoProvider = (props)=>{
    const {
        item: todos,
        saveItem: saveTodo,
        loading,
        error
      } = useLocalStorage("TODOS_V1", []);
    
      //state
      const [searchValue, setSearchValue] = useState("");
    
      //functions
      const completedTodos = todos.filter((todo) => todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter((todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
      const completeTodo = (text) => {
        const indexTodo = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
        saveTodo(newTodos);
      };
    
      const deleteTodo = (text) => {
        const indexTodo = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(indexTodo, 1);
    
        saveTodo(newTodos);
      };

      return(
          <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,

          }}>
              {props.children}
          </TodoContext.Provider>
      )
}

export {TodoContext,TodoProvider}