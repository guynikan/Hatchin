<template>
  <div class="catalog">
    <div v-for="item in items" :key="item.title" class="card mx-2">
      <div class="card-image">
        <figure class="image is-3by5">
          <a @click="info(item.index)"><img :src="item.image"></a>
        </figure>
        <b-tag type="is-danger" rounded style="position: absolute; top: 0;"><b>50%</b></b-tag>
      </div>
      <div class="card-content">
        <div class="content">
          <p class="title is-6">{{ item.title }}</p>
          <p class="subtitle is-7">@johnsmith</p>
          <b-field grouped >
            <p v-if="item.rating" class="control">
              <b-rate :value="item.rating" show-score disabled/>
            </p>
            <p class="control" style="margin-left: auto">
              <b-button size="is-small" type="is-danger" icon-left="heart" outlined />
            </p>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Catalog',

  data() {
    return {
      items: [
        {
          title: 'Slide 1',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 4.4
        },
        {
          title: 'Slide 2',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 3.5
        },
        {
          title: 'Slide 3',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 5
        },
        {
          title: 'Slide 4',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png'
        },
        {
          title: 'Slide 5',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 5
        },
        {
          title: 'Slide 6',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 4
        },
        {
          title: 'Slide 7',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 2.7
        },
        {
          title: 'Slide 8',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 1.5
        }
      ]
    }
  },

  auth: false,

}
</script>
