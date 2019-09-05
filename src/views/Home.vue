<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <InputPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import InputPage from '@/components/InputPage.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    InputPage
  }
}
</script>
