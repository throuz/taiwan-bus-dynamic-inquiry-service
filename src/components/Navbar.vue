<template>
  <div class="navbar">
    <img class="logo-home" alt="logo" src="../assets/logo-home.png" />
    <input type="text" name="route" id="route" placeholder="選擇路線或手動輸入關鍵字" />
  </div>
</template>

<style scoped>
.navbar {
  position: absolute;
  width: 100%;
  padding: 17px;
  box-sizing: border-box;
  background: #131414;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 12px;
}
#route {
  width: 100%;
  font-size: 16px;
  padding: 9px 12px;
  color: #414242;
  background: #1c1d1d;
  border-radius: 6px;
  border: none;
}
</style>