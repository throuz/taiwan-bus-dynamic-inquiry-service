<template>
  <div class="stop-list">
    <div class="seconds-ago">*於3秒前更新</div>
    <div class="stop-wrap">
      <div class="stop-state">進站中</div>
      <div class="stop-name">士林區農會</div>
      <div class="car-info">
        <font-awesome-icon icon="wheelchair" class="wheelchair" />
        <span class="font-roboto">619-U3</span>
        <div class="stop-state-circle"></div>
      </div>
    </div>
    <div class="stop-line"></div>
  </div>
</template>

<style scoped>
.stop-list {
  position: relative;
}
.seconds-ago {
  font-size: 12px;
  color: #1cc8ee;
  text-align: right;
  margin-bottom: 9px;
}
.stop-wrap {
  display: flex;
  font-size: 14px;
  align-items: center;
  margin-bottom: 14px;
}
.stop-state {
  width: 79px;
  line-height: 40px;
  background: #1cc8ee;
  border: 1px solid #1cc8ee;
  box-sizing: border-box;
  border-radius: 12px;
  text-align: center;
  color: #131414;
}
.stop-name {
  flex: 1;
  padding-left: 11px;
  color: #1cc8ee;
}
.car-info {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #1cc8ee;
}
.wheelchair {
  font-size: 19px;
}
.stop-state-circle {
  width: 15px;
  height: 15px;
  background: #1cc8ee;
  /* background: #1c1d1d; */
  z-index: 1;
  border: 1.4px solid #1cc8ee;
  box-shadow: 0px 0px 6px #1cc8ee, 0px 0px 2px #1cc8ee;
  border-radius: 50%;
  margin: 0 4px;
}
.stop-line {
  position: absolute;
  top: 38px;
  right: 12.9px;
  width: 1.2px;
  height: calc(100% - 59px);
  background: #1cc8ee;
  box-shadow: 0px 0px 5px #1cc8ee;
}
</style>