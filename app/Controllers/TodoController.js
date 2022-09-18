import { appState } from "../AppState.js"
import { todoService } from "../Services/TodoService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function drawTodos() {
  let template = ''
  appState.todos.forEach(t => template += t.TodoTemplate)
  setHTML('todos', template)

  setText('fart', appState.todos.length)
}


export class TodoController {
  constructor(data) {
    this.getTodos()
    appState.on('todos', drawTodos)
  }

  async getTodos() {
    try {
      await todoService.getTodos()
    } catch (error) {
      console.error('[Getting Todos Failed!]', error)
      Pop.error(error)
    }
  }
  async addTodo() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      await todoService.addTodo(formData)
      Pop.success('You Created a Todo')
    } catch (error) {
      console.error('[Adding todo Failed]', error)
      Pop.error(error)
    }
  }
  async toggleComplete(id) {
    try {
      await todoService.toggleComplete(id)
    } catch (error) {
      console.error('[Toggle Complete Failed]', error)
      Pop.error(error)
    }
  }
  async deleteTodo(id) {
    try {
      const yes = await Pop.confirm('Delete Todo?')
      if (!yes) { return }
      await todoService.deleteTodo(id)
    } catch (error) {
      console.error('[Delete Todo Failed!]', error)
      Pop.error(error)
    }
  }


  async todosRemaining() {
    appState.todos.filter(t => t.completed === false)
  }
}

