export class Todo {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.completed = data.completed
  }

  get TodoTemplate() {
    return /*html*/`
    <li class="list-group-item bg-grey">
    <input type="checkbox" class="me-2"  ${this.completed ? 'checked' : ''} onchange="app.todoController.toggleComplete('${this.id}'); app.todoController.todosRemaining();"><label>${this.description}</label><i class="mdi mdi-delete text-danger ms-1" onclick="app.todoController.deleteTodo('${this.id}')"></i></li>
    `
  }
}


