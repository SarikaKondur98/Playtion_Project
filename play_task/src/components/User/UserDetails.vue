<template>
  <div>
    <h1>User Details</h1>
    <v-container class="my-5">
    <v-card class="pa-3 my-3">
    <v-layout row wrap>
    <v-flex xs7 md3 class="indigo--text font-weight-black">UserID</v-flex>
    <v-flex xs4 md2 class="red--text font-weight-black">ID</v-flex>
    <v-flex xs4 md3 class="green--text font-weight-black">Title</v-flex>
    <v-flex xs7 md4 class="orange--text font-weight-black">Completed</v-flex>
    </v-layout>
    </v-card>
    <v-card class="pa-3 my-3" v-for="user in Users" :key="user.id">
    <v-layout row wrap>
    <v-flex xs7 md3>{{user.userId}}</v-flex>
    <v-flex xs4 md2>{{user.id}}</v-flex>
    <v-flex xs4 md3>{{user.title}}</v-flex>
    <v-flex xs7 md4>{{user.completed}}</v-flex>
    </v-layout>
    </v-card>
    </v-container> 
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "app",
  data() {
    return {
      text: [],
    };
  },
  mounted() {
    this.$store.dispatch('fetchUserDetails')
  },
  computed: {
    ...mapState(['Users'])
  }
};
</script>