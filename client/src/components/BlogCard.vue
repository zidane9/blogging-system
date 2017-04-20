<template>
  <div>
  <div style="background:#eee;padding: 20px">
      <div >
          <p ><h2>{{blog.title}}</h2></p>
          <p>{{blog.content}}</p>
          <div>Author : {{blog.author.name}}</div>
          <div>
            <button @click='update'>edit</button>
              <button @click='remove'>delete</button>
          </div>
      </div>
      <update-blog v-if="isEdit" :blog='blog'></update-blog>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import UpdateBlog from './UpdateBlog.vue'

export default {
  props : ['blog'],
  data(){
    return {
      isEdit:false
    }
  },
  components:{
    UpdateBlog
  },
  methods:{
    update(){
      this.isEdit=true;
    },
    remove(){
      let self = this
      axios.delete(`http://localhost:3000/articles/${self.blog._id}`
      ,{headers: {'token': window.localStorage.getItem('token')}})
        .then(response => {
          if (response.data){
            console.log(response.data)
            if(response.data.error){
              self.$message.error(response.data.error);
            }else {

            self.$message('Delete Sukses');
            self.$emit('postBlog')
            self.$router.push('/')
          }
        }

      })
        .catch(error => {
          alert('error remove, see console')
          console.log(error)
        })
    }
  }
}
</script>

<style lang="css">
</style>
