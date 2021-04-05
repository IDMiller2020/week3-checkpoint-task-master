import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js"

class TasksService {
  addTask(newTask) {
    ProxyState.tasks.push(new Task(newTask.text, newTask.listId))
    ProxyState.lists.forEach(l => {
      if(l.id === newTask.listId) {
        l.listLength++
      }
    })
    saveState()
    ProxyState.tasks = ProxyState.tasks
  }
  deleteTask(id, listId) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      ProxyState.lists.forEach(l => {
        console.log(l.id)
        console.log(id)
        if(l.id === listId) {
          l.listLength--
        }
      })
      ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id)
      saveState()
    }
  }
  checked(listId, id) {
    console.log('Checkbox Clicked (TasksService)');
    console.log(`listId: ${listId} and id: ${id}`);
    ProxyState.tasks.forEach(t => {
      if (t.listId === listId && t.id === id) {
        if(!t.checked) {
          t.checked = true
        } else {
          t.checked = false
        }
      }
      console.log(`${t.text} checked = ${t.checked}`)
      saveState()
    })
  }
}

export const tasksService = new TasksService();