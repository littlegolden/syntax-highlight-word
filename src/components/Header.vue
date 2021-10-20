<template>
  <div id="header">
    <header>
      <div class="container">
        <div class="logo animated fadeIn">planetB</div>
      </div>
    </header>
    <nav class="animated fadeIn">
      <div class="container">
        <a href="#" class="top"
          ><font-awesome-icon :icon="['fas', 'angle-up']"
        /></a>
        <a href="javascript:void(0)">Home</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="less">
#header {
  header {
    height: 50px;
    border-top: 5px solid #ff7e71;
    background: #373737 url(../../static/headerbackground.jpg) no-repeat center
      bottom;
    background-size: cover;
    color: #eee;
    font-weight: bold;
    font-size: 50px;
    position: relative;
    z-index: 999;
    .logo {
      height: calc(45px + 3px);
      line-height: calc(45px + 3px);
      &:after{
        content: url('../assets/new.gif')
      }
    }
  }
  nav {
    background-color: #fff;
    box-shadow: 1px 1px 2px #33333333;
    .container {
      display: flex;
    }
    .top {
      font-size: 1.2rem;
      background-color: #ff7e71;
    }
    a {
      height: 50px;
      line-height: 50px;
      display: inline-block;
    }
    a:first-child {
      width: 70px;
      text-align: center;
      color: #fff;
      margin-right: 2rem;
    }
    a:not(:first-child) {
      color: #999;
      font-size: 12px;
      letter-spacing: 1pt;
      text-align: center;
      text-decoration: none;
      padding: 0 5rem;
      text-transform: uppercase;
      &:hover {
        background-color: #ff7e71;
        color: #fff;
        text-shadow: 0px 1px 0px #9b100080;
      }
    }
  }
}
</style>
