<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <button class="primary1">注册</button>
        <button class="primary">登录</button>
        <button class="primary2">预览</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topbar"
};
</script>

<style scoped lang="scss">    //scoped 表示只作用当前组件的元素
#topbar {
  background: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  > .wrapper {
    min-width: 1024px;
    max-width: 1440px;
    margin: 0 auto;
    height: 64px;
  }
  > .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }
  .logo {
    font-size: 24px;
    color: #000000;
  }
}
button {  // 由于加了 scoped， 所以这个 button 选择器只在本组件内有效，不会影响其他组件
  width: 72px;
  height: 32px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  background: #ddd;
  color: #222;
  border-radius: 5px;
  outline-style: none;
  &:hover {
    box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.5);
  }
  &.primary1{
    outline-style: none;
  }
  &.primary {
    background: #02af5f;
    color: white;
    outline-style: none;
    margin-right: 50px;
  }
  &.primary2{
    background: #ddd;
    color: #222;
    outline-style: none;
  }
}
</style>