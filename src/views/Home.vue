<template>
  <div class="home">
    <img class="logo" alt="logo" src="../assets/logo.png" />
    <div class="dash dash1"></div>
    <div class="dash dash2"></div>
    <div class="dash dash3"></div>
    <div class="dash dash4"></div>
    <div class="circle-target"></div>
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
    <div class="circle circle4"></div>
    <div class="circle circle5"></div>
    <div class="text text1">
      <font-awesome-icon icon="location-dot" />&nbsp;附近公車站
    </div>
    <router-link class="text text2" to="/inquire-bus">
      <font-awesome-icon icon="magnifying-glass" />&nbsp;查詢公車
    </router-link>
    <div class="text text3">
      <font-awesome-icon icon="magnifying-glass" />&nbsp;查詢客運
    </div>
    <div class="copyright">Taiwan Bus © Code: Rui Sheng Xu / Design: KT</div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(
    86.64% 87.21% at 14.72% 0%,
    #414242 0%,
    #0a0a0b 100%
  );
}
.logo {
  position: absolute;
  width: 48%;
  height: 12%;
  top: 19%;
  left: 16%;
}
.dash {
  position: absolute;
  filter: drop-shadow(0px 0px 5px #1cc8ee);
}
.dash1 {
  width: 32%;
  height: 7%;
  top: 30%;
  left: 30%;
  border-left: 4px dotted #1cc8ee;
  border-bottom: 4px dotted #1cc8ee;
}
.dash2 {
  width: 0px;
  height: 14%;
  top: 40%;
  left: 66%;
  border-left: 4px dotted #1cc8ee;
}
.dash3 {
  width: 19%;
  height: 14%;
  top: 60%;
  left: 49%;
  border-right: 4px dotted #1cc8ee;
  border-bottom: 4px dotted #1cc8ee;
}
.dash4 {
  width: 0px;
  height: 7%;
  top: 64%;
  left: 39%;
  border-left: 4px dotted #1cc8ee;
}
.circle-target {
  position: absolute;
  width: 6%;
  height: 6vw;
  top: 60%;
  left: 36.5%;
  background: #131414;
  border: 2px solid #1cc8ee;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px #1cc8ee, 0px 0px 2px #1cc8ee;
  border-radius: 50%;
}
.circle {
  position: absolute;
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
  border-radius: 50%;
}
.circle1 {
  width: 15%;
  height: 15vw;
  left: 76%;
  top: 3%;
}
.circle2 {
  width: 13%;
  height: 13vw;
  left: -6.5%;
  top: 29%;
}
.circle3 {
  width: 20%;
  height: 20vw;
  left: 88%;
  top: 49%;
}
.circle4 {
  width: 9%;
  height: 9vw;
  left: 82%;
  top: 80%;
}
.circle5 {
  width: 33%;
  height: 33vw;
  left: -9%;
  top: 86%;
}
.text {
  position: absolute;
  font-weight: 500;
  font-size: 4.7vw;
}
.text1 {
  left: 65%;
  top: 36%;
}
.text2 {
  left: 59%;
  top: 55%;
}
.text3 {
  left: 22%;
  top: 72%;
}
a:link,
a:visited {
  color: #f5f5f5;
  text-decoration: none;
}
.copyright {
  position: absolute;
  right: 5%;
  bottom: 1%;
  font-family: "Roboto";
  font-size: 3vw;
}
</style>