<template>
  <section class="section column is-8 is-desktop">
    <b-field>
      <b-button
        label="Clear checked"
        type="is-danger"
        icon-left="close"
        class="field"
        @click="checkedRows = []" />
    </b-field>

    <b-table
      :data="data"
      :columns="columns"
      :checked-rows.sync="checkedRows"
      :is-row-checkable="(row) => row.id !== 3 && row.id !== 4"
      checkable
      striped
      :checkbox-position="checkboxPosition">

      <template #bottom-left>
        <b>Total checked</b>: {{ checkedRows.length }}
      </template>
    </b-table>
    <div class="is-flex">
      <b-button type="is-secondary" native-type="submit" class="my-6 ml-auto mr-auto" outlined>Adicionar à sacola</b-button>
    </div>
  </section>
</template>

<script>
export default {
  layout: "authenticated",

  data() {
    const data = [
      { 'name': 'Jesse', 'price': 'R$99,99', 'product': '<img src="https://lojamorenarosa.vtexassets.com/arquivos/security-reclame_aqui.png"/>', 'details': 'Ver produto' },
      { 'name': 'John', 'price': 'R$99,99', 'product': '<img src="https://lojamorenarosa.vtexassets.com/arquivos/security-reclame_aqui.png"/>', 'details': 'Ver produto' },
      { 'name': 'Tina', 'price': 'R$99,99', 'product': '<img src="https://lojamorenarosa.vtexassets.com/arquivos/security-reclame_aqui.png"/>', 'details': 'Ver produto' },
      { 'name': 'Clarence', 'price': 'R$99,99' , 'product': '<img src="https://lojamorenarosa.vtexassets.com/arquivos/security-reclame_aqui.png"/>', 'details': 'Ver produto' },
      { 'name': 'Anne', 'price': 'R$99,99', 'product': '<img src="https://lojamorenarosa.vtexassets.com/arquivos/security-reclame_aqui.png"/>', 'details': 'Ver produto' }
    ]

    return {
      data,
      checkboxPosition: 'left',
      checkedRows: [data[1], data[3]],
      columns: [
        {
          field: 'name',
        },
        {
          field: 'price',
        },
        {
          field: 'product',
        },
        {
          field: 'details',
        },
      ]
    }
  }
}
</script>
