<template>
  <div>
    <section class="section container is-fullhd">
      <div class="tile is-ancestor">
        <div class="tile is-2 mr-2">
          <div class="gallery-side">
            <div v-for="image in images" :key="image.id" @click="setMainImage(image.url)">
              <b-image class="mb-2" :src="imageAbsoluteUrl(image.url)" :alt="image.name" ratio="2by2"></b-image>
            </div>
          </div>
        </div>
        <div class="tile is-5">
          <div class="gallery-main">
            <b-image :src="mainImage" ratio="4by5"></b-image>
          </div>
        </div>
        <div class="ml-2 tile">
          <div class="product-detail">
            <h1 class="is-size-2 mb-5">{{ product.name }}</h1>
            <div class="is-flex">
              <p>Preço:</p>
              <span>R$</span>
              <span>{{ product.price }}</span>
            </div>
            <hr />
            <div class="mb-5">
              <div class="is-flex">
                <p>Cor:</p>
                <span> {{ selectedColor }}</span>
              </div>
              <div class="is-flex">
                <span @click="selectColor(color)" v-for="color in product.colors" :key="color" class="product-colors"
                  :style="{ backgroundColor: color.hexadecimal }"></span>
              </div>
            </div>

            <div class="mb-5 is-flex is-justify-content-space-between is-align-items-center">
              <div>
                <p>Tamanhos:</p>
                <div class="is-flex">
                  <div v-for="size in product.sizes" :key="size" class="product-sizes">
                    <input :id="size" name="radio-group" type="radio" />
                    <label :for="size">{{ size }}</label>
                  </div>
                </div>
              </div>
              <a @click="isModalActive = true">Ver medidas</a>
              <b-modal v-model="isModalActive">
                <p class="image is-2by2">
                  <img src="https://buefy.org/static/img/placeholder-1280x960.png" />
                </p>
              </b-modal>
            </div>

            <div class="mb-5">
              <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
                <template #trigger="props">
                  <div class="card-header" role="button" aria-controls="contentIdForA11y3" :aria-expanded="props.open">
                    <p class="card-header-title">Detalhes do produto</p>
                    <a class="card-header-icon">
                      <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
                      </b-icon>
                    </a>
                  </div>
                </template>

                <div class="card-content">
                  <div class="content">
                    {{ description }}
                  </div>
                </div>
              </b-collapse>
            </div>

            <div>
              <b-button style="width: 100%" type="is-primary is-large" outlined>ADICIONAR À SACOLA</b-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SectionCategory :items="relatedProducts" :category="category" />
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'ProductDetail',
  auth: false,

  data() {
    return {
      selectedColor: "",
      isModalActive: false,
      productsByCategory: [],
    }
  },

  computed: {
    ...mapState(['product', 'relatedProducts']),
    ...mapGetters(['mainImage', 'imageAbsoluteUrl']),

    category() {
      return this.product?.type?.category[0].name
    },

    description() {
      return this.product?.type?.description
    },

    images() {
      return this.product?.type?.images
    },
  },

  created() {
    this.getProduct(this.$route.path)
    // this.getProductByCategory(this.product?.type?.category[0].id)
  },

  methods: {
    ...mapMutations(['SET_MAIN_IMAGE']),
    ...mapActions(['getProduct', 'getSectionProducts']),

    selectColor(color) {
      this.selectedColor = color.name
    },

    setMainImage(url) {
      this.SET_MAIN_IMAGE(url.substring(1))
    },

    getProductByCategory(category) {
      this.$http
        .$get(`/api/v1/product-category/${category}/`)
        .then((products) => (this.productsByCategory = products.data))
    },
  },
}
</script>
