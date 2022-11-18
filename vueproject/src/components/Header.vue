<template>
  <header>
      <li><a href="src/App.vue" >Home</a></li>
      <li><a href="views/signupView.vue">Sign Up</a></li>
  </header>
</template>

<script>
export default {
  name:'Header'
}
</script>

<style>
header {
  padding: 0.5em;
  background-color: #4267B2;
  display: flex;
  flex-direction: row;
  color: #ffffff;
  overflow:hidden;
  text-align: left;
  font-size: 18px;
  text-transform: uppercase;
}
header a {
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
  color: #ffffff;
  font-size: .99em;
  text-decoration: none;
}
li {
  list-style-type: none;
}
</style>
