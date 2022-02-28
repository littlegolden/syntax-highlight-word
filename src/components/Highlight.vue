<template>
  <!-- <pre :class="`brush: ${lang};`" v-text="code"></pre> -->
  <div ref="result" id="result" :class="'container'" v-show="data.content">
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
    <!-- 格式化 -->
    <pre
      name="code"
      :class="data.lang.alias + ':nocontrols'"
      style="display:none;"
      >{{ data.content }}</pre
    >
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
      showPlainText: false
    }
  },
  mounted () {
    window.onerror = (msg, url, line, col, error) => {
      this.msg = `${msg}`
    }
    // https://www.cnblogs.com/Use-left-hand-write-love/archive/2011/04/15/2017399.html
    window.content.onkeydown = function (event) {
      event.stopPropagation()
    }
    // window.addEventListener('keydown', event => {
    //   if (event.ctrlKey && window.event.keyCode === 65 && !this.showPlainText) {
    //     console.log('ddd')
    //     event.preventDefault()
    //     const result = document.querySelector('#result')
    //     window.getSelection().selectAllChildren(result)
    //   }
    // })
    window.onkeydown = event => {
      if (event.ctrlKey && window.event.keyCode === 65) {
        event.preventDefault()
        if (!this.showPlainText) {
          let target = document.querySelector('#result')
          window.getSelection().selectAllChildren(target)
        } else {
          document.querySelector('textarea.plain').focus({
            preventScroll: true
          })
          document.querySelector('textarea.plain').select()
        }
      }
    }
    if (this.data.content) {
      // ;(() => import(`../assets/js/shBrush${this.data.lang}`))()
      import(`../assets/js/shBrush${this.data.lang.id}`).then(() => {
        this.$dp.SyntaxHighlighter.HighlightAll('code')
        let dp = this.$refs.result.querySelector('.dp-highlighter')
        // console.log('dp', dp)
        dp.ondblclick = e => {
          this.showPlainText = true
          let source = document.createElement('textarea')
          source.value = dp.highlighter.source.innerText
          source.className = 'plain'
          source.readOnly = true

          dp.querySelector('ol').appendChild(source)

          this.$nextTick(() => {
            source.focus({
              preventScroll: true
            })
            source.select()
            source.onblur = () => {
              this.showPlainText = false
              dp.querySelector('ol').removeChild(source)
            }
          })
        }
      })
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
  .code {
    letter-spacing: initial;
    .line {
      border-left: 3px solid #6ce26c;
      line-height: 14px;
    }
  }
  ol {
    margin: 0;
    position: relative;
  }
  .dp-highlighter {
    background-color: #f8f8f8 !important;
  }
  .dp-highlighter ol li {
    padding-left: 0 !important;
  }
  textarea.plain {
    font-size: 1em !important;
    line-height: 1.1em !important;
    border: none;
    outline: none;
    width: calc(100% + 45px);
    height: 100%;
    overflow-y: hidden;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: -45px;
    font-family: Consolas, Bitstream Vera Sans Mono, Courier New, Courier,
      monospace !important;
    white-space: pre !important;
    min-height: auto !important;
  }
}
</style>
