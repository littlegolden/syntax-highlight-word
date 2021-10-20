<template>
  <div id="app" class="animated fadeIn">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  background-color: #e9e9e9;
}

#main > :not(#form, #result.container) ::selection {
  background: #e3ecf0;
  color: #666;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  -moz-animation-name: fadeIn;
  -o-animation-name: fadeIn;
  animation-name: fadeIn;
}

.animated {
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  -o-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  animation-fill-mode: both;
}

#app {
  font-family: 'Lato', sans-serif;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 768px;
}
a {
  color: rgb(255, 126, 113);
  text-decoration: none;
}
a:hover,
a:active {
  text-decoration: none;
  color: #666666;
}
.container {
  min-width: 768px;
  max-width: 1172px;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 1200px) {
  .container {
    max-width: 940px;
  }
  main .about {
    max-width: 780px;
  }
}
@media (max-width: 979px) {
  #app {
    min-width: unset;
  }
  .container {
    min-width: unset;
    max-width: 724px;
  }
  main .about {
    max-width: 600px;
  }
}
@media (max-width: 768px) {
  .container {
    /* min-width: unset; */
    max-width: 600px;
  }
  main .container h1 {
    font-size: 40px;
    padding-bottom: 20px;
  }
  main .container .about {
    max-width: 320px;
    font-size: 12px;
    line-height: 20px;
  }
  #main #form{
    padding-top: 0;
  }
  #form .container > form > p,
  #main footer{
    padding-top: 2rem;
  }
}
</style>
