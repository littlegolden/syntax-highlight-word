<template>
  <div id="form">
    <div class="container">
      <form>
        <p>Code:</p>
        <textarea name="code" id="code" rows="20" v-model="form.code"></textarea>
        <div class="actions">
          <div class="select">
            <p>Language:</p>
            <select name="class" id="class" v-model="form.lang">
              <option value="applescript">AppleScript</option>
              <option value="as3">AS3</option>
              <option value="bash">Bash</option>
              <option value="coldfusion">ColdFusion</option>
              <option value="cpp">C, C++</option>
              <option value="csharp">C#</option>
              <option value="css">CSS</option>
              <option value="delphi">Delphi, Pascal</option>
              <option value="diff">Diff</option>
              <option value="erlang">Erlang</option>
              <option value="groovy">Groovy</option>
              <option value="haxe">Haxe</option>
              <option value="html">HTML</option>
              <option value="java">Java</option>
              <option value="javafx">JavaFX</option>
              <option value="javascript">Javascript</option>
              <option value="perl">Perl</option>
              <option value="php">PHP</option>
              <option value="plain">Plain</option>
              <option value="powershell">PowerShell</option>
              <option value="python">Python</option>
              <option value="ruby">Ruby</option>
              <option value="sass">Sass</option>
              <option value="scala">Scala</option>
              <option value="sql">SQL</option>
              <option value="tab">Tap</option>
              <option value="typescript">TypeScript</option>
              <option value="vb">VB</option>
              <option value="xml">XML</option>
            </select>
          </div>
          <input type="button" value="Show Highlighted" @click="$emit('submit', form)" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      form: {
        code: '',
        lang: 'javascript'
      },
      show: {}
    }
  },
  methods: {
    // submit () {
    //   this.$router.push({
    //     name: 'Highlight',
    //     params: this.form
    //   })
    // }
  }
}
</script>

<style lang="less">
#form {
  padding-top: 1rem;
  form {
    max-width: 810px;
    margin-left: auto;
    margin-right: auto;
    textarea {
      width: 100%;
      resize: none;
      white-space: nowrap;
    }
    .actions {
      p {
        margin: 0;
      }
      .select {
        display: inline-block;
        margin-right: 4rem;
      }
    }
  }
}
</style>
