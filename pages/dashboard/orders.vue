<template>
  <section class="section column is-8 is-desktop">
    <b-table
      :data="data"
      :columns="columns"
      striped
    >

      <template #bottom-left>
        <b>Total checked</b>: {{ checkedRows.length }}
      </template>
    </b-table>
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
