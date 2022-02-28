<template>
  <div id="form">
    <div class="container">
      <form>
        <p>Code:</p>
        <textarea
          name="content"
          id="content"
          rows="20"
          v-model="form.content"
        ></textarea>
        <div class="actions">
          <div class="select">
            <p>Language:</p>
            <select name="class" id="class" v-model="form.lang">
              <option :value="op.id" v-for="op in options" :key="op.id">
                {{ op.label }}
              </option>
            </select>
          </div>
          <input
            type="button"
            value="Show Highlighted"
            @click="$emit('submit', result)"
          />
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
        content: '',
        lang: 'Xml'
      },
      options: [
        {
          label: 'C, C++',
          alias: 'cpp',
          id: 'Cpp'
        },
        {
          label: 'C#',
          alias: 'csharp',
          id: 'CSharp'
        },
        {
          label: 'CSS',
          alias: 'css',
          id: 'Css'
        },
        {
          label: 'Delphi, Pascal',
          alias: 'delphi',
          id: 'Delphi'
        },
        {
          label: 'HTML, XML',
          alias: 'xml',
          id: 'Xml'
        },
        {
          label: 'Java',
          alias: 'java',
          id: 'Java'
        },
        {
          label: 'JavaScriot',
          alias: 'js',
          id: 'JScript'
        },
        {
          label: 'PHP',
          alias: 'php',
          id: 'Php'
        },
        {
          label: 'Python',
          alias: 'py',
          id: 'Python'
        },
        {
          label: 'Ruby',
          alias: 'rb',
          id: 'Ruby'
        },
        {
          label: 'SQL',
          alias: 'sql',
          id: 'Sql'
        },
        {
          label: 'VB',
          alias: 'vb',
          id: 'Vb'
        }
      ],
      show: {}
    }
  },
  computed: {
    result () {
      return {
        lang: this.options.find(item => item.id === this.form.lang),
        content: this.form.content
      }
    }
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
