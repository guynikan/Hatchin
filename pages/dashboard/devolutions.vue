<template>
  <section class="section column is-8 is-desktop">
    <div class="mb-5">
      <div class="box is-flex is-align-items-center">
        <h1 class="is-size-2">1</h1>
        <p>Escolha o pedido e o(s) produto(s) que deseja a troca ou
          devolução. Prazo de 7 dias para solicitação de devolução e
          de 30 dias para solicitação de troca.</p>
      </div>

      <div class="box is-flex is-align-items-center">
        <h1 class="is-size-2">2</h1>
        <p>Em caso de devolução, 1a troca no site, defeito ou envio
          errado: enviaremos um código para postagem nos correios. Em
          qualquer outro caso: você deve realizar o envio por conta
          própria.</p>
      </div>

      <div class="box is-flex is-align-items-center">
        <h1 class="is-size-2">3</h1>
        <p>Ao recebermos o(s) produto(s), iremos fazer o estorno do
          valor pago (em caso de devolução) ou liberar um novo pedido
          ou um cupom para livre uso em nosso site, de acordo com as
          normas estabelecidas no regulamento de trocas.</p>
      </div>
    </div>
      <div class="is-flex is-justify-content-center">
        <b-button type="is-primary" class="my-6" outlined>Solicitar troca ou devolução</b-button>
      </div>
  </section>
</template>
<script>
export default {
  layout: "authenticated"
}
</script>

