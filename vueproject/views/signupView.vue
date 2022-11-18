<template>
  <div class="flex-container" style="text-align: center">
    <div class="login-flex">
      <h4>welcome to PostIt</h4>
      <div>
        <a class="login-links" href="#">Create an account</a>
        <p class="login-text">OR</p>
        <p class="login-text">Please log in</p>
      </div>
        <div class="text-fields">
          <input  class="field" type="text" name="email" placeholder="Email"required>
        </div>
        <div class="text-fields">
          <input class="field" type="password" name="password" placeholder="Password"required>
        </div>
        <div>
          <button class="blue-button" id="login-button" type="submit">Log in</button>
        </div>
      <div id="forget-password">
        <a class="login-links"  href="#">Forget password</a>
      </div>
    </div>

  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'signupView',
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>

</style>