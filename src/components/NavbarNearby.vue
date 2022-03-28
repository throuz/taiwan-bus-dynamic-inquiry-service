<template>
  <div class="navbar-nearby">
    <router-link to="/">
      <img class="logo-home" alt="logo" src="../assets/logo-home.png" />
    </router-link>
    <span>我的附近</span>
  </div>
</template>

<style scoped>
.navbar-nearby {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 17px;
  box-sizing: border-box;
  background: #131414;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-home {
  display: block;
}
</style>