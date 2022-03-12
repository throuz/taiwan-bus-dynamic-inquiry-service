<template>
  <div class="navbar">
    <router-link to="/">
      <img class="logo-home" alt="logo" src="../assets/logo-home.png" />
    </router-link>
    <input type="text" name="route" id="route" placeholder="選擇路線或手動輸入關鍵字" />
  </div>
</template>

<style scoped>
.navbar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 17px;
  box-sizing: border-box;
  background: #131414;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  gap: 12px;
}
.logo-home {
  display: block;
}
#route {
  width: 100%;
  font-size: 16px;
  padding: 9px 12px;
  color: #1cc8ee;
  background: #1c1d1d;
  border-radius: 6px;
  border: none;
}
::placeholder {
  color: #414242;
}
</style>