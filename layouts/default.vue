<template>
<header>
  <div class="">
    <ul class="level container is-mobile has-background-light">
      <li class="level-item"><i></i><span>Frete gratís</span></li>
      <li class="level-item"><i></i><span>Troca gratís</span></li>
      <li class="level-item"><i></i><span>Até 10x sem juros</span></li>
      <li class="level-item"><i></i><span>Entrega rápida</span></li>
        <font-awesome-icon :icon="['fas', 'adjust']" />
  <button class="button is-primary is-large is-loading"><i class="fas fa-times"></i>Button</button>
    </ul>
  </div>
  <div>Header</div>
</header>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
