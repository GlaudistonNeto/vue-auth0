<template>
  <div id="app">
    <h1>Login with Facebook</h1>
    <facebook-login class="button"
      appId='239020300723709'
      @login="onLogin"
      @logout="onLogout"
      @sdk-loaded="sdkLoaded">
    </facebook-login>
  </div>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs'

export default {
  name: 'App',
  components: { facebookLogin },
  methods: {
    getUserData() {
      this.FB.api('/me', 'GET', { fields: 'id, name, email' }),
      userInformation => {
        console.warn("get data from fb", userInformation)
        this.personalId = userInformation.id;
        this.email = userInformation.email;
        this.name = userInformation.name;
      }
    }
  },
  sdkLoaded(payload) {
    this.isConnected = payload.isConnected
    this.FB = payload.FB
    if (this.isConnected) this.getUserData()
  },
  onLogout() {
    this.isConnected = false;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
