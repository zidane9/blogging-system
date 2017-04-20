<template>
  <div id="app">
    <div class="">
      <center><h1>Blogging System</h1></center>
    </div>
    <div>

        <router-link  to="/list">List Blog</router-link>

      <div v-if="isLogin == false" >
      <router-link  to="/signin">Sign In</router-link> |
      <router-link  to="/signup">Sign Up</router-link>
    </div>
    <div v-else >
      <router-link  to="/post">Post Blog</router-link> |

      <el-button  type="primary" @click="signOut">Logout</el-button>

    </div>
    </div>

    <router-view
    @ifSignedIn="ifSignedIn"
    @postBlog="getList"
    :blogs='blogs'>
    </router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      isLogin : false,
      blogs: []
    }
  },
  methods: {
    ifSignedIn(){
      if (localStorage.getItem("token") === null) {
          this.isLogin = false
      }else {
          this.isLogin = true
      }
    },
    signOut(){
				window.localStorage.removeItem('token')
        this.ifSignedIn()

		},
    getList(){
    let self = this
    axios.get(`http://localhost:3000/articles`)
      .then(response => {
        if (response.data){
          console.log(response.data)
          self.blogs = response.data;
        }

      })
      .catch(error => {
        alert('error getList, see console')
        console.log(error)
      })
    }
  },
  mounted(){
    this.ifSignedIn(),
    this.getList()
  }
}
</script>

<style>

</style>
