<template>
  <div class="fullscreen text-white bground text-center q-pa-md flex flex-center">
    <div>
       <q-banner inline-actions class="text-white bg-red" style="margin-bottom:15px;" v-if="showError">
         The credentials you have provided are invalid.
      </q-banner>

          <img src="../assets/logo.png" style="width:20%;">
          <q-card class="my-card bg-primary text-white text-center">
            
        <q-input dark color="purple-12" v-model="user"  label="Username" label-color="white">
          <template v-slot:prepend>
            <q-icon name="fas fa-user" color="white"/>
          </template>
        </q-input>
        
        <q-input dark type="password" v-model="pass" color="purple-12"  label="Password" label-color="white">
          <template v-slot:prepend>
            <q-icon name="fas fa-key" color="white"/>
          </template>
        </q-input>
        

        <q-btn @click="login" color="white" text-color="black" label="Login" style="margin-top:15px;margin-bottom:15px;" />
          </q-card>
    </div>
  </div>
</template>

<style>
.bground {
  background-color: black;
}
</style>

<script lang="ts">

import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'Login',
  data () {
    return {
      user: '',
      pass: '',
    }
  },
  setup () {
    let showError = ref(false);
    return {showError};
  },
  methods: {
     login () {
       alert(this.user)
     }
  }
 
})
</script>
