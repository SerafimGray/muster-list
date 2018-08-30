<template>

  <v-container fluid>
    <v-layout align-center justify-center fill-height>

      <v-form ref="form" v-model="valid" lazy-validation>

        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Name"
          placeholder="read book"
          required
        ></v-text-field>

        <v-text-field
          v-model="limit"
          label="Limit"
          placeholder="50 pages"
        ></v-text-field>

        <v-layout justify-space-between row>

          <v-btn
            :disabled="!valid"
            @click="submit"
          >
            submit
          </v-btn>

          <v-btn @click="clear">
            clear
          </v-btn>

          <v-btn router-link to="/">
            cancel
          </v-btn>

        </v-layout>

      </v-form>

    </v-layout>
  </v-container>

</template>

<style scoped>
  .container{
    height: 100%;
  }
  .v-form {
    max-width: 600px;
    width: 100%;
  }
  .v-text-field{
    margin-bottom: 16px
  }
</style>

<script>

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required'
      ],
      limit: '',
    }),

    methods: {
      async submit () {
        if (this.$refs.form.validate()) {
          const task = {
            name: this.name,
            limit: this.limit
          }
          const result = await this.$store.dispatch('addTask', task);
          this.$router.push('/');
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
