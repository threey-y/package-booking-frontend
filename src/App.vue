<template>
  <div id="app">
    <div id="head">
      <img id="cainiaoimg" src="./assets/bg.gif"/>
    </div>
    
    <div id="nav">
      <router-link to="/">包裹入库</router-link> |
      <router-link to="/about">预约取件</router-link>|
      <router-link to="/about">详情查询</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  font-size: 30px;
  a {
    font-weight: bold;
    
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#head{
  vertical-align: middle;
  height: 150px;
  background-color: #2A65F6
}
#cainiaoimg{
  margin-top:30px;
}
</style>
