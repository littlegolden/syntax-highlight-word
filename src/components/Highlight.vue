<template>
  <!-- <pre :class="`brush: ${lang};`" v-text="code"></pre> -->
  <div
    id="result"
    :class="'container'"
    v-show="data.code"
  >
    <div class="options">
      <span>
        <font-awesome-icon
          :icon="['fas', 'question-circle']"
          style="margin-right:5px"
        />press <a href="javascript:void(0)">ctrl + A</a> to select formatted
        code, <a href="javascript:void(0)">double click</a> for plain text.
      </span>
      <p>
        <font-awesome-icon :icon="['fas', 'bug']" /> got problems?
        <a href="https://github.com/littlegolden/syntax-highlight-word/"
          >report</a
        >
      </p>
    </div>
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
      msg: ''
    }
  },
  mounted () {
    window.onerror = (msg, url, line, col, error) => {
      this.msg = `${msg}`
    }
    // https://www.cnblogs.com/Use-left-hand-write-love/archive/2011/04/15/2017399.html
    document.getElementsByName('code')[0].onkeydown = function (event) {
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
  letter-spacing: normal;
  padding-top: 1rem;
  &.container {
    // font-size: 12px;
    &:not(.selectGunt) td.gutter,
    .toolbar {
      user-select: none;
    }
  }
  > p {
    user-select: none;
  }
  .options {
    max-width: 810px;
    margin-left: auto;
    margin-right: auto;
    user-select: none;
    color: #666;
  }
  .syntaxhighlighter .code .line.alt1 {
    background-color: #f8f8f8;
  }
  .syntaxhighlighter .gutter .line {
    border-right: none;
  }
  .code {
    letter-spacing: initial;
    .line {
      border-left: 3px solid #6ce26c;
      line-height: 14px;
    }
  }
  ol {
    margin: 0;
  }
}
</style>
