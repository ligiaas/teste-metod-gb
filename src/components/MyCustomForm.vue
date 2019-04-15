<template>
  <div class="form">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center">
            <h1>{{ title }}</h1>
            <h2>{{ msg }}</h2>
          </div>
          <div ref="meuForm">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label class="lg-bold">{{ form.name.label }}</label>
                <input type="text" class="form-control empty" v-model="form.name.value" placeholder="">
              </div>
              <div class="form-group col-md-6">
                <label class="lg-bold">{{ form.cpf.label }}</label>
                <input type="text" class="form-control" v-model="form.cpf.value">
              </div>
              <div class="form-group col-md-6">
                <label class="lg-bold">{{ form.phone.label }}</label>
                <input type="text" class="form-control" v-model="form.phone.value">
              </div>
              <div class="form-group col-md-6">
                <label class="lg-bold">{{ form.email.label }}</label>
                <input type="text" class="form-control" v-model="form.email.value">
              </div>
              <div class="form-group col-md-6">
                <label class="lg-bold">{{ form.gen.label }}</label>
                <select class="form-control" v-model="form.gen.items.value">
                  <option>Selecione...</option>
                  <option v-for="item in form.gen.items" v-bind:value="item.value">{{ item.label }}</option>
                </select>
              </div>
              <div class="form-group col-md-6 form-check">
                <input type="checkbox" class="form-check-input" v-model="form.status.value">
                <label class="lg-bold form-check-label lg-bold">
                  {{ form.status.label }}
                </label>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <div class="col-md-12">
                  <label class="lg-bold">{{ form.date.label }}</label>
                  <input type="date" class="form-control" v-model="form.date.value">
                </div>
              </div>
            </div>
            <div class="text-center">
              <button class="btn btn-primary" @click="addPessoa">Enviar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="table">
            <thead>
              <tr v-for="item in pessoas">
                <th>ID</th>
                <th>{{ item.nome.label }}</th>
                <th>{{ item.cpf.label }}</th>
                <th>{{ item.phone.label }}</th>
                <th>{{ item.email.label }}</th>
                <th>{{ item.gen.label }}</th>
                <th>{{ item.status.label }}</th>
                <th>{{ item.date.label }}</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in pessoas">
                <th>{{ i }}</th>
                <td>{{ item.nome.value }}</td>
                <td>{{ item.cpf.value }}</td>
                <td>{{ item.phone.value }}</td>
                <td>{{ item.email.value }}</td>
                <td>{{ item.gen.value }}</td>
                <td>{{ item.status.value }}</td>
                <td>{{ item.date.value }}</td>
                <td><span @click="removePessoa()" style="cursor: pointer;">deletar</span></td>
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
      title: 'Teste Lígia de Almeida Silva',
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
        gen: {
          label: 'Gênero',
          items: [{value: 'masculino', label: 'Masculino'}, {value: 'feminino', label: 'Feminino'}]
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
      pessoas: [],
      newPessoa: null
    }
  },
  mounted() {
    if(localStorage.getItem('pessoas')) {
      try {
        this.pessoas = JSON.parse(localStorage.getItem('pessoas'));
      } catch (error) {
        localStorage.removeItem('pessoas');
      }
    }
  },
  methods: Object.assign({
    addPessoa() {
      console.log(this.form);
      this.newPessoa = this.form;
      if(!this.newPessoa) return;
      this.pessoas.push(this.newPessoa);
      this.newPessoa = null;
      this.savePessoa();
    },
    removePessoa() {
      this.pessoas.splice(index, 1);
      this.savePessoa();
    },
    savePessoa() {
      const parsed = JSON.stringify(this.pessoas);
      localStorage.setItem('pessoas', parsed);
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #1F2041;
}
.lg-bold {
  color: rgb(31, 32, 65, 100);
  font-weight: bold;
}
h2 {
  color: rgb(31, 32, 65, .75);
}
label {
  text-align: left;
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
