<template>
  <div class="form">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center">
            <h1>{{ title }}</h1>
            <h2>{{ msg }}</h2>
          </div>
          <div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label class="lg-label">{{ form.name.label }}</label>
                <input type="text" class="form-control" v-model="form.name.value">
              </div>
              <div class="form-group col-md-6">
                <label class="lg-label">{{ form.cpf.label }}</label>
                <input type="text" class="form-control" v-model="form.cpf.value">
              </div>
              <div class="form-group col-md-6">
                <label class="lg-label">{{ form.phone.label }}</label>
                <input type="text" class="form-control" v-model="form.phone.value">
              </div>
              <div class="form-group col-md-6">
                <label class="lg-label">{{ form.email.label }}</label>
                <input type="text" class="form-control" v-model="form.email.value">
              </div>
              <div class="form-group col-md-6">
                <label class="lg-label">{{ form.genero.label }}</label>
                <select class="form-control" v-model="form.genero.value" placeholder="Selecione...">
                  <option v-for="gen in values" v-bind:value="gen.value" v-bind:key="gen.id">{{ gen.value }}</option>
                </select>
              </div>
              <div class="form-group col-md-6 form-check">
                <input type="checkbox" class="form-check-input" v-model="form.status.value">
                <label class="lg-label form-check-label">
                  {{ form.status.label }}
                </label>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <div class="col-md-12">
                  <label class="lg-label">{{ form.date.label }}</label>
                  <input type="date" class="form-control" v-model="form.date.value">
                </div>
              </div>
            </div>
            <div class="text-center">
              <button class="btn btn-primary" @click="addAluno()">Enviar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-if="alunosList.length >= 1">
        <div class="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>{{ form.name.label }}</th>
                <th>{{ form.cpf.label }}</th>
                <th>{{ form.phone.label }}</th>
                <th>{{ form.email.label }}</th>
                <th>{{ form.genero.label }}</th>
                <th>{{ form.status.label }}</th>
                <th>{{ form.date.label }}</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in alunosList" v-bind:key="item.id">
                <td>{{ i }}</td>
                <td>{{ item.name.value }}</td>
                <td>{{ item.cpf.value }}</td>
                <td>{{ item.phone.value }}</td>
                <td>{{ item.email.value }}</td>
                <td>{{ item.genero.value }}</td>
                <td>{{ item.status.value }}</td>
                <td>{{ item.date.value }}</td>
                <td><span @click="removeAluno(i)" style="cursor: pointer;">deletar</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCustomForm',
  data () {
    return {
      title: 'Metodologia Gustavo Borges',
      msg: 'Formulário de Contato',
      form: {
        name: {
          label: 'Nome completo',
          value: ''
        },
        cpf: {
          label: 'CPF',
          value: ''
        },
        phone: {
          label: 'Telefone',
          value: ''
        },
        email: {
          label: 'E-mail',
          value: ''
        },
        genero: {
          label: 'Gênero',
          value: ''
        },
        status: {
          label: 'Ativo',
          value: false
        },
        date: {
          label: 'Data de nascimento',
          value: ''
        }
      },
      values: [
        {value: 'Masculino'},
        {value: 'Feminino'}
      ],
      labelList: [
        {name: 'Nome Completo'},
        {cpf: 'CPF'},
        {phone: 'Telefone'},
        {email: 'E-mail'},
        {gen: 'Gênero'},
        {status: 'Status'},
        {date: 'Data de Nascimento'}
      ],
      formSelected: false,
      alunosList: [],
      aluno: null
    }
  },
  mounted () {
    if (localStorage.getItem('alunosList')) {
      try {
        this.alunosList = JSON.parse(localStorage.getItem('alunosList'))
      } catch (error) {
        localStorage.removeItem('alunosList')
      }
    }
  },
  methods: Object.assign({
    addAluno () {
      this.aluno = this.form
      console.log(this.aluno)
      if (!this.aluno) return
      if (this.isValid(this.aluno)) {
        this.alunosList.push(this.aluno)
        this.saveAluno()
      }
      this.aluno = null
    },
    removeAluno (i) {
      this.alunosList.splice(i, 1)
      this.saveAluno()
    },
    isValid (obj) {
      let formValid = true
      console.log(obj)
      if (obj.name.value.length >= 4 && obj.cpf.value.length >= 11) {
        this.alunosList.forEach(a => {
          console.log(a)
          if (a.cpf.value === obj.cpf.value) {
            formValid = false
            alert('Aluno já cadastrado!')
          } else {
            formValid = true
          }
        })
      } else {
        alert('Os campos Nome Completo e CPF são obrigatórios.')
        formValid = false
      }
      if (formValid) {
        return true
      } else {
        return false
      }
    },
    saveAluno () {
      const parsed = JSON.stringify(this.alunosList)
      localStorage.setItem('alunosList', parsed)
      this.listAlunos()
    },
    listAlunos () {
      this.alunosList = JSON.parse(localStorage.getItem('alunosList'))
      this.formSelected = true
      console.log(this.alunosList)
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin: 20px;
}
h1 {
  color: #1F2041;
}
.lg-label {
  text-align: left;
  color: rgb(31, 32, 65, 100);
  font-weight: bold;
}
h2 {
  color: rgb(31, 32, 65, .75);
}
input.empty {
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
