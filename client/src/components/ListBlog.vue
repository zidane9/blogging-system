<template>
  <div>
  <blog-card @postBlog="updateList" v-for="blog in blogs" key="index" :blog="blog"></blog-card>
</div>
</template>

<script>
import BlogCard from './BlogCard.vue'

export default {
  components : {
    BlogCard
  },
  props: ['blogs'],
  // data(){
  //   return {
  //   }
  // },
  methods : {
    updateList(){
      this.$emit('postBlog');
    }
  }
  // mounted(){
  //   this.$emit('loaded')
  // }
}
</script>

<style lang="css">
</style>
