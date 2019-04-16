<template>
  <div>
    <header id="header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <img src="../assets/logo_mgb.png">
            <h1 class="text-center mgb-title">{{ title }}</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container" id="form">
      <div class="row">
        <div class="col-md-12">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label class="lg-label">{{ form.name.label }}</label>
              <input type="text" class="form-control" v-model="form.name.value" placeholder="Digite aqui...">
            </div>
            <div class="form-group col-md-6">
              <label class="lg-label">{{ form.cpf.label }}</label>
              <input type="text" class="form-control" v-model="form.cpf.value" placeholder="Digite aqui...">
            </div>
            <div class="form-group col-md-6">
              <label class="lg-label">{{ form.phone.label }}</label>
              <input type="text" class="form-control" v-model="form.phone.value" placeholder="Digite aqui...">
            </div>
            <div class="form-group col-md-6">
              <label class="lg-label">{{ form.email.label }}</label>
              <input type="email" class="form-control" v-model="form.email.value" placeholder="Digite aqui...">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label class="lg-label">{{ form.genero.label }}</label>
              <select class="form-control" v-model="form.genero.value" placeholder="Selecione...">
                <option v-for="gen in values" v-bind:value="gen.value" v-bind:key="gen.id">{{ gen.label }}</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label class="lg-label">{{ form.date.label }}</label>
              <input type="date" class="form-control" v-model="form.date.value">
            </div>
            <div class="form-group col-md-4">
              <div class="form-check form-check-inline lg-checkbox checkbox">
                <label class="lg-label form-check-label">
                  <input type="checkbox" class="form-check-input" v-model="form.status.value">
                  <span class="cr"><i class="cr-icon fas fa-check"></i></span>
                  {{ form.status.label }}
                </label>
              </div>
            </div>
          </div>
          <div class="mt-5 mb-5">
            <button class="btn btn-mgb-primary" @click="addAluno()" key="add">Enviar</button>
            <button class="btn btn-mgb-secondary" @click="cancelAdd()" key="edit">Cancelar</button>
          </div>
        </div>
      </div>
      <transition name="trans-y">
        <div class="row" v-if="alunosList.length >= 1">
          <div class="col-md-12">
            <h1>{{ titleTable }}</h1>
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
                  <td>
                    <li>
                      <span @click="editAluno(item)" class="fas fa-pencil-alt"></span>
                      <span @click="removeAluno(i)" class="fas fa-trash"></span>
                    </li>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </transition>
    </div>
    <footer id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-4">
            <h5 class="text-center mgb-footer">{{ msgFooter }}</h5>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MyCustomForm',
  data () {
    return {
      action: true,
      title: 'Formulário de Contato',
      titleTable: 'Alunos Cadastrados',
      msgFooter: 'Lígia de Almeida Silva',
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
        {label: 'Masculino', value: 'M'},
        {label: 'Feminino', value: 'F'}
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
      if (!this.form) return
      if (this.isValid(this.form)) {
        this.alunosList.push(this.form)
        this.saveAluno()
      }
      this.form = {
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
      }
    },
    editAluno (item, isnew) {
      this.form = item
      this.action = false
    },
    cancelAdd () {
      this.form = {
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
      }
    },
    removeAluno (i) {
      this.alunosList.splice(i, 1)
      this.saveAluno()
    },
    // Valida de os campos Nome e CPF foram preenchidos corretamente e se o CPF informado já consta na base de dados
    isValid (obj) {
      let formValid = true
      if (obj.name.value.length >= 4 && obj.cpf.value.length >= 11) {
        this.alunosList.forEach(a => {
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
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* text elements */
h2 {
  color: rgb(31, 32, 65, .75);
}
.lg-label {
  text-align: left;
  font-weight: bold;
}
.lg-checkbox {
  top: 50%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  list-style: none;
}
span {
  font-family: 'Font Awesome 5 Solid';
  content: '\f0da';
  font-weight: 900;
  cursor: pointer;
  color: #000;
}
.mgb-footer {
  color: #BC9CFF;
  font-weight: bold;
}
img {
  display: block;
  width: 40%;
  margin: auto;
}

/* Positions Style */
.row {
  margin: 20px;
}
.mgb-title {
  vertical-align: middle;
  display: inline-block;
}
.form-control {
  border: 1px solid rgba(31, 32, 65, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
}
.form-control:hover, .form-control:focus {
  border: 1px solid rgba(31, 32, 65, 0.5);
  box-shadow: none;
}

/* Button */
.btn {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: normal;
  text-transform: uppercase;
  color: #FFFFFF;
  border-radius: 22px;
}
.btn-mgb-primary {
  background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
}
.btn-mgb-secondary {
  background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
}

/* checkbox */
.checkbox label:after {
  content: '';
  display: table;
  clear: both;
}
.checkbox .cr {
  position: relative;
  display: inline-block;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: .25em;
  width: 1.5em;
  height: 1.5em;
  margin-right: .5em;
}
.checkbox .cr .cr-icon {
  position: absolute;
  font-size: .8em;
  line-height: 0;
  top: 45%;
  left: 9%;
}
.checkbox label input[type="checkbox"] {
  display: none;
}
.checkbox label input[type="checkbox"]+.cr>.cr-icon {
  opacity: 0;
}
.checkbox label input[type="checkbox"]:checked+.cr>.cr-icon {
  opacity: 1;
}

/* transition */
.trans-y-enter-active, .trans-y-leave-active {
  transition: all 0.3s ease;
}
.trans-y-enter, .trans-y-leave-to {
  transform: translateY(-5%);
  opacity: 0;
}
/* Responsiviness */
@media only screen and (min-width: 768px) {
  img {
    display: inline-block;
    width: 20%;
    margin: 20px 20px 20px 0;
  }
}
</style>
