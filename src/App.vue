<template>
  <v-app>
    <v-content>
      <router-view/>
      <new-task-button></new-task-button>
    </v-content>
  </v-app>
</template>

<script>

  import NewTaskButton from './components/NewTaskButton'

  export default {
    name: 'App',
    components: {
      NewTaskButton
    },
    created: function() {
      this.storeTasksTable()
    },
    methods: {
      storeTasksTable() {
        const db = this.$store.state.db
        db.version(1).stores({
          tasks: '++id, name, limit'
        })
      }
    }
  }

</script>
