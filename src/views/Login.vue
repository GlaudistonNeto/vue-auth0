<template>
  <v-container>
    <v-slide-y-transition mode="out-in">
      <v-layout rouw wrap align-center>
        <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4>
          <v-card style="margin-bottom:200px;">
            <div class="pa-3">
              LOGO GOES HERE
              
            </div>
            <hr>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-1">Welcome!</h3>
                  <div>Welcome to my Application.
                    Login to connect.
                    <br><br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida nisi efficitur gravida mollis
                  </div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn @click="auth0Login()">Login</v-btn>
              </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>  
  </v-container>
</template>

<script>
export default {
  name: 'login',
  methods: {
    auth0Login() {
      this.$store.dispatch('auth0Login');
      console.log('We are in auth0Login');
    }
  }
}
</script>