<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label>用户名</label>
        <input type="text" required v-model="formData.username">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" required v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="登录" class="add">
        <span>{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

 <script>
 //引入数据库
  import AV from '../lib/leancloud'
  //获取错误的消息
  import getErrorMessage from '../lib/getErrorMessage'
  //获取当前用户
  import getAVUser from '../lib/getAVUser'
  export default {
    name: 'SignInForm',
    data(){
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMessage: ''
      }
    },
    methods: {
      signIn(){
        //声明用户名和密码是当前表单的数据
        let {username, password} = this.formData
        AV.User.logIn(username,password).then(()=> {
          //登录成功后关闭对话框、更新 store
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