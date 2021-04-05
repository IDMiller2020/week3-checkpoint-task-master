import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"
export default class List {
  constructor(title, color, listLength = 0, itemsComplete = 0, id = generateId()) {
    this.title = title
    this.color = color
    this.listLength = listLength
    this.itemsComplete = itemsComplete
    this.id = id
  }

  get Template() {
    return `
    <div class="card mb-3">
      <div class="card-header text-white bg-${this.color} d-flex justify-content-between">
          <div class="d-flex align-items-center">
              <div class="d-flex flex-column align-items-center">
                <h5>${this.title}</h5>
                <p class="m-0 p-0">${this.itemsComplete}/${this.listLength}</p>
              </div>
          </div>
          <i class="fas fa-times ml-2" onclick="app.listsController.deleteList('${this.id}')"></i>
      </div>
      <div class="card-body bg-light text-dark">
        <div class="p-3">
          <ul>
            ${this.Tasks}
          </ul>
        </div>
        <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
          <input type="text" name="name" id="text" class="form-control" placeholder="Enter List Item"
            aria-describedby="helpId" required minlength="3" maxlength="50">
          <button type="submit" class="btn btn-success" title='add task'><i
              class="fas fa-plus"></i></button>
        </form>
      </div>
    </div>
    `
  }
  get Tasks() {
    let tasks = ProxyState.tasks.filter(t => t.listId === this.id)
    let template = ''
    tasks.forEach(t => {
      console.log(`t.checked: ${t.checked}, ${t.text}`)
      if(t.checked) {
        template += t.CheckedTemplate
      } else {
        template += t.UncheckedTemplate
      }
    })
    return template
  }
}
