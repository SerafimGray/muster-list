<template>
  <v-tooltip left>
    <v-btn
      fab
      fixed
      bottom
      right
      dark
      color="indigo"
      slot="activator"
      router-link to="/new"
    >
      <v-icon dark>add</v-icon>
    </v-btn>
    <span>Create new task</span>
  </v-tooltip>
</template>
