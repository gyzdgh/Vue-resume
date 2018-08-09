<template>
  <div>
    <form @submit.prevent="signUp">
      <div class="row">
        <label>用户名</label> 
        <input type="text" v-model="formData.username" required>
      </div>
      <div class="row">
        <label >密码</label>
        <input type="password" v-model="formData.password" required>
      </div>
      <div class="actions">
        <input type="submit" value="注册" class="add">
         <span class="errorMessage">{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>
 <script>
 import AV from '../lib/leancloud'
 import getErrorMessage from '../lib/getErrorMessage'
 import getAVUser from '../lib/getAVUser'

 export default {
  name:'SignUpForm',
  data(){
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  created(){
  },
  methods:{
    signUp(){
      let {username, password} = this.formData
      var user = new AV.User();
      user.setUsername(username);
      user.setPassword(password);
      user.signUp().then(() =>{
        this.$emit('success', getAVUser())
      }, (error)=> {
        this.errorMessage = getErrorMessage(error)
      });
    }
  }
}
</script>

<style scoped>
  label{
    text-align: center;
    display:inline-block;
    width:3em;
  }
  input{
    margin: 10px 0;
    border: 1px solid #b8b8b8;
    height: 30px;
    padding: 0 8px;
    background-color:white;
  }
  input:focus{
    outline: none;
    border-color: #4b94fc;
  }
  .add{
    margin-top:10px;
    margin-left: 5px;
    border:none;
    cursor: pointer;
    background-color: #15222a;
    color: #fff;
    font-size: 12px;
  }
  .add:hover{
  background-color: #ccc;
  color: #000;
  }
</style>