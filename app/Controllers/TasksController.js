import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { loadState } from "../Utils/LocalStorage.js"


//Private


//Public
export default class TasksController {
  addTask(listId) {
    window.event.preventDefault()
    let form = window.event.target
    let rawTask = {
      text: form['text'].value,
      listId: listId
    }
    tasksService.addTask(rawTask)
    // @ts-ignore
    form.reset()
  }

  deleteTask(id, listId) {
    tasksService.deleteTask(id, listId)
  }
  checked(listId, id) {
    console.log('Checkbox Clicked (TasksController)')
    tasksService.checked(listId, id)
  }

}