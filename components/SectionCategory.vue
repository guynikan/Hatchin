<template>
  <section class="section my-6 container is-fullhd">
    <h1 class="is-size-2 mb-5">Jeans</h1>

    <b-carousel-list
      class="is-shadowless"
      :data="items"
      :items-to-show="4"
    >
      <template #item="list">
        <div class="card mx-2">
          <div class="card-image">
            <figure class="image is-3by5">
              <a :href="list.get_absolute_url"
                ><img :src="mainImage(list.type.images)"
              /></a>
            </figure>
            <b-tag type="is-danger" rounded style="position: absolute; top: 0"
              ><b>50%</b></b-tag
            >
          </div>
          <div class="card-content">
            <div class="content">
              <p class="title is-6">{{ list.name }}</p>
              <p class="subtitle is-7">@johnsmith</p>
              <b-field grouped>
                <p v-if="list.rating" class="control">
                  <b-rate :value="list.rating" show-score disabled />
                </p>
                <p class="control" style="margin-left: auto">
                  <b-button
                    size="is-small"
                    type="is-danger"
                    icon-left="heart"
                    outlined
                  />
                </p>
              </b-field>
            </div>
          </div>
        </div>
      </template>
    </b-carousel-list>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    ...mapGetters(['imageAbsoluteUrl']),
  },
  methods: {
    mainImage(images) {
      const imgDefault = images.find((img) => img.default).url

      return this.imageAbsoluteUrl(imgDefault)
    },
  },
}
</script>
