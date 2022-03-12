<template>
  <div class="key-button">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>
.key-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1cc8ee;
  border-radius: 9px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 0px 6px #1cc8ee, 0px 0px 2px #1cc8ee;
  font-size: 14px;
}
</style>