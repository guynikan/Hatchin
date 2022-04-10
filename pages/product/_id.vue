<template>
  <div>
    <section class="section container is-fullhd">
      <div class="tile is-ancestor">
        <div class="tile is-2 mr-2">
          <div class="gallery-side">
            <b-image
              class="mb-2"
              src="https://picsum.photos/600/400"
              alt="A random image"
              ratio="2by2"
            ></b-image>
            <b-image
              class="mb-2"
              src="https://picsum.photos/600/400"
              alt="A random image"
              ratio="2by2"
            ></b-image>
            <b-image
              class="pb-2"
              src="https://picsum.photos/600/400"
              alt="A random image"
              ratio="2by2"
            ></b-image>
          </div>
        </div>
        <div class="tile is-5">
          <div class="gallery-main">
            <b-image
              src="https://picsum.photos/600/400"
              alt="A random image"
              ratio="4by5"
            ></b-image>
          </div>
        </div>
        <div class="ml-2 tile">
          <div class="product-detail">
            <h1 class="is-size-2 mb-5">product title</h1>
            <div class="is-flex">
              <p>Preço:</p>
              <span>R$</span>
              <span>99,99</span>
            </div>
            <hr/>
            <div class="mb-5">
              <div class="is-flex">
                <p>Cor:</p>
                <span>Akinawa</span>
              </div>
              <div class="is-flex">
                <span class="product-colors" v-for="color in colors" :key="color" :style="{backgroundColor: color }"></span>
              </div>
            </div>

            <div class="mb-5 is-flex is-justify-content-space-between is-align-items-center">
              <div>
                <p>Tamanhos:</p>
                <div class="is-flex">
                  <div class="product-sizes" v-for="size in sizes" :key="size">
                    <input name="radio-group" :id="size" type="radio">
                    <label :for="size">{{ size }}</label>
                  </div>
                </div>
              </div>
              <a  @click="isModalActive = true">Ver medidas</a>
              <b-modal v-model="isModalActive">
                <p class="image is-2by2">
                  <img src="https://buefy.org/static/img/placeholder-1280x960.png">
                </p>
              </b-modal>
            </div>

            <div class="mb-5">
              <b-collapse 
                class="card" 
                animation="slide" 
                aria-id="contentIdForA11y3">
                <template #trigger="props">
                  <div
                    class="card-header"
                    role="button"
                    aria-controls="contentIdForA11y3"
                    :aria-expanded="props.open">
                    <p class="card-header-title">
                      Detalhes do produto
                    </p>
                    <a class="card-header-icon">
                      <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                      </b-icon>
                    </a>
                  </div>
                </template>

                <div class="card-content">
                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    <a>#buefy</a>.
                  </div>
                </div>
              </b-collapse>
            </div>

            <div>
              <b-button style="width: 100%;" type="is-primary is-large" outlined>ADICIONAR À SACOLA</b-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SectionCategory />
  </div>
</template>
  <script>
  export default {
    name: 'ProductDetail',
    auth: false,

    data() {
      return {
        isModalActive: false,
        colors: [ '#f1f', '#1f1', '#21f'],
        sizes: [ 'P', 'M', 'G', 'GG']
      }
    },
  }
  </script>
