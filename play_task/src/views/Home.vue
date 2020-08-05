<template>
  <div class="home">
  <h2 class="red--text font-weight-black">Please Click here to view UserDetails Page</h2><br/><br/>
  <v-btn class="black--text" @click.native="$router.push('/UserDetail')">Click Here</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
