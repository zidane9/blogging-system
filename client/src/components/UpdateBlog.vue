<template>
  <div class="">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content">
          <el-form label-width="120px">
            <el-form-item label="Title">
              <el-input v-model="blog.title"></el-input>
            </el-form-item>
            <el-form-item label="Content">
              <el-input type="textarea" v-model="blog.content"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="update">Update</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  props : ['blog'],
  data() {
    return {
      // title: '',
      // content: ''
    }
  },
  methods: {
    update() {
      // console.log('---x');
      // console.log('--',window.localStorage.getItem('token'));
      let self = this
      axios.put(`http://localhost:3000/articles/${self.blog._id}`, {
        title: self.blog.title,
        content: self.blog.content
      },{headers: {'token': window.localStorage.getItem('token')}})
        .then(response => {
          if (response.data){
            console.log(response.data)
            if(response.data.error){
              self.$message.error(response.data.error);
            }else {

            self.$message('Update Sukses');
            self.$emit('postBlog')
            self.$router.push('/')
          }
        }
      })
        .catch(error => {
          console.log(error)
        })
    }
  }
  // created() {
  //   console.log(123)
  // }
}
</script>

<style>
</style>
