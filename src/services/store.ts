import { reactive } from 'vue'
import * as api from './api'

interface IStore {
  allShows: any[]
  getAllShows: () => Promise<any[]>
}

export const store: IStore = reactive({
  allShows: [],

  async getAllShows() {
    if (this.allShows?.length > 0) {
      return this.allShows
    }

    this.allShows = await api.getAllShows()

    return this.allShows
  }
})