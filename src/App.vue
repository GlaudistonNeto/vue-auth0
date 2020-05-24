<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-spacer></v-spacer>

      <v-btn
        to="/about" class="mr-2"
      >
        <span >About</span>
      </v-btn>
      <v-btn
        to="/contact" class="mr-2"
      >
        <span >Contact</span>
      </v-btn>
      <v-btn
        to="/home" class="mr-2"
      >
        <span >Home</span>
      </v-btn>
      <v-btn
        to="/members" class="mr-2"
      >
        <span >Members</span>
      </v-btn>
      <v-btn @click="logout" v-if="this.$store.state.userIdAuthorized">Logout</v-btn>
    </v-app-bar>

    <v-content>
      {{ clientId }}
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    clientId: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID
  }),
  methods: {
    logout() {

    }
  },
  beforeCreate(){

  }
};
</script>
