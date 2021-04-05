import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js"


export function saveState() {
  localStorage.setItem('taskmaster', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.tasks
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskmaster'))
  if (data) {
    ProxyState.lists = data.lists.map(l => new List(l.title, l.color, l.listLength, l.itemsComplete, l.id));
    ProxyState.tasks = data.tasks.map(t => new Task(t.text, t.listId, t.checked, t.id))
  }
}