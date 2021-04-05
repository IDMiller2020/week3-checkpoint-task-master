import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"
export default class Task {
  constructor(text, listId, checked = false, id = generateId()) {
    this.text = text
    this.listId = listId
    this.checked = checked
    this.id = id
  }

  get UncheckedTemplate() {
    return `
 
          <div class="d-flex align-items-center">
              <input type="checkbox" aria-label="Checkbox" onclick="app.tasksController.checked('${this.listId}', '${this.id}')">
              <p class="m-0 py-0 px-2">${this.text}</p>
              <i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}', '${this.listId}')"></i>
          </div>

    `
  }

  get CheckedTemplate() {
    return `

    <div class="d-flex align-items-center">
        <input type="checkbox" aria-label="Checkbox" onclick="app.tasksController.checked('${this.listId}', '${this.id}')" checked>
        <p class="m-0 py-0 px-2">${this.text}</p>
        <i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </div>

    `
  }
}
