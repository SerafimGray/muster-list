import Vue from 'vue'
import Vuex from 'vuex'
import Dexie from 'dexie';

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    db: new Dexie('musterDb')
  },

  mutations: {

    addTask(state, task) {
      return state.db.tasks.add({
        name: task.name,
        limit: task.limit,
      });
    }

  },

  actions: {

    async addTask({
      commit
    }, task) {
      const result = await commit('addTask', task)
      return result;
    }

  }

})