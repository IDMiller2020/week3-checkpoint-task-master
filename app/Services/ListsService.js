import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js"

class ListsService {
  addList(newList) {
    ProxyState.lists = [...ProxyState.lists, new List(newList.title, newList.color)]
    saveState()
  }
  deleteList(id) {
    if (window.confirm("Are you sure you want to delete this List?")){
      ProxyState.lists = ProxyState.lists.filter(l => l.id !== id)
      saveState()
    }
  }
}

export const listsService = new ListsService();
