import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { SandboxQuote, SandboxTodo } from "./AxiosService.js";

class TodoService {
  async addTodo(formData) {
    // @ts-ignore
    const res = await SandboxTodo.post('', formData)
    const newTodo = new Todo(res.data)
    appState.todos = [...appState.todos, newTodo]
  }

  async deleteTodo(id) {
    await SandboxTodo.delete(`${id}`)
    appState.todos = appState.todos.filter(t => t.id != id)
  }

  async getTodos() {
    const res = await SandboxTodo.get()
    appState.todos = res.data.map(t => new Todo(t))
  }

  async toggleComplete(id) {
    const complete = appState.todos.find(t => t.id == id)
    // @ts-ignore
    complete.completed = !complete.completed
    await SandboxTodo.put(`${id}`, complete)
    appState.emit('sandboxTodos')
  }
}

export const todoService = new TodoService()