<template>
  <div>
  <div style="background:#eee;padding: 20px">
      <div >
          <p ><h2>{{blog.title}}</h2></p>
          <p>{{blog.content}}</p>
          <div>Author : {{blog.author.name}}</div>
          <div>
            <button>edit</button>
              <button>delete</button>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  props : ['blog'],
  data(){
    return {

    }
  },
  methods:{
  }
}
</script>

<style lang="css">
</style>
