<template>
  <div class="form">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center">
            <h1>{{ title }}</h1>
            <h2>{{ msg }}</h2>
          </div>
          <form action="">
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
                  <!-- <option v-for="item in gen.items" v-bind:value="item.value">{{ item.label }}</option> -->
                </select>
              </div>
              <div class="form-group col-md-6 form-check">
                <input type="checkbox" class="form-check-input" v-model="form.status.value">
                <label class="lg-bold form-check-label lg-bold">
                  {{ form.status.label }}
                </label>
              </div>
              <div class="form-group">
                <div class="col-md-12">
                  <label class="lg-bold">{{ form.date.label }}</label>
                  <input type="date" class="form-control" v-model="form.date.value">
                </div>
              </div>
            </div>
            <div class="text-center">
              <button class="btn btn-primary" v-on:click="send">Enviar</button>
            </div>
          </form>
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
      }
    }
  }
}
methods: Object.assign({
  send() {

  }
})
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
