<template>
  <!-- <pre :class="`brush: ${lang};`" v-text="code"></pre> -->
  <div
    id="result"
    :class="['container', { selectGunt: selectGunt }]"
    v-show="data.code"
  >
    <div class="options">
      <input
        type="checkbox"
        name="gunt"
        id="selectGunt"
        v-model="selectGunt"
      /><label for="selectGunt">Select Gunt</label>
      <span style="color:rgb(255, 126, 113)">
        <font-awesome-icon
          :icon="['fas', 'question-circle']"
          style="margin:0 .5rem"
        />Ctrl + A to copy formatted code
      </span>
    </div>
    <p><font-awesome-icon :icon="['fas', 'bug']" /> got problems? <a href="https://github.com/littlegolden/syntax-highlight-word/">report</a></p>
    <script
      type="text/syntaxhighlighter"
      :class="`brush: ${data.lang};`"
      auto-links="true"
    >
      <![CDATA[{{data.code}}]]>
    </script>
    <div
      class="msg"
      v-show="msg"
      style="max-width: 810px;font-size:2rem;color:#000;margin-left: auto;margin-right: auto;"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Highlight',
  data () {
    return {
      msg: '',
      selectGunt: false
    }
  },
  mounted () {
    window.onerror = (msg, url, line, col, error) => {
      this.msg = `${msg}`
    }
    // https://www.cnblogs.com/Use-left-hand-write-love/archive/2011/04/15/2017399.html
    window.code.onkeydown = function (event) {
      event.stopPropagation()
    }
    window.addEventListener('keydown', function (event) {
      if (event.ctrlKey && window.event.keyCode === 65) {
        event.preventDefault()
        const result = document.querySelector('#result')
        window.getSelection().selectAllChildren(result)
      }
    })
    // console.log('[ this.$shl ] >', this.$shl)
    if (this.data.code) {
      this.$shl()
    }
  },
  props: ['data']
}
</script>

<style lang="less">
@import '../assets/css/syntaxhighlighter.css';
#result {
  padding-top: 1rem;
  &.container {
    // font-size: 12px;
    &:not(.selectGunt) td.gutter,
    .toolbar {
      user-select: none;
    }
  }
  > p{
    user-select: none;
  }
  .options {
    max-width: 810px;
    margin-left: auto;
    margin-right: auto;
    user-select: none;
  }
  .syntaxhighlighter .code .line.alt1 {
    background-color: #f8f8f8 !important;
  }
  .code {
    letter-spacing: initial;
  }
}
</style>
