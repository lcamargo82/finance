<template>
  <div id="authentication">
    <div>
      <router-view name="authentication"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Authentication',
};
</script>

<style lang='scss'>
  #authentication {
    height: 100vh;
    position: relative;

    > div {
      width: 100%;
      height: 100vh;
      background: url('../../assets/images/login.jpg') no-repeat center center;
      background-size: cover;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 0;

    &:last-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0 auto;
      position: relative;
      z-index: 1;
      }
    }
  }
</style>
