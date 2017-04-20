<template>
  <div class="">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content">
          <el-form label-width="120px">
            <el-form-item label="Title">
              <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="Content">
              <el-input type="textarea" v-model="content"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="post">Post</el-button>
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
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    post() {
      // console.log('---x');
      // console.log('--',window.localStorage.getItem('token'));
      let self = this
      axios.post(`http://localhost:3000/articles`, {
        title: self.title,
        content: self.content
      },{headers: {'token': window.localStorage.getItem('token')}})
        .then(response => {
          console.log(response.data)
          self.$emit('postBlog')
          self.$router.push('/')
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
