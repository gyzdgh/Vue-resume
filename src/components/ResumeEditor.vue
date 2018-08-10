<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <!-- 给 tab 添加 class和点击事件 -->
        <li v-for="(item,index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <!-- 切换展示区 -->
      <li v-for="item in resume.config" v-show="item.field === selected">
       <div v-if="resume[item.field] instanceof Array">
          <div class="subitem" v-for="(subitem, i) in resume[item.field]">
            <div class="resumeField" v-for="(value,key) in subitem">
              <label> {{key}} </label>
              <input v-show="key !='contents'" type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)" >
              <textarea v-show="key=='contents'" rows="1" cols="20" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)" ></textarea>
            </div>
            <hr> 
            <button class="del" @click.prevent="remList(item.field,i)" >删除</button>
          </div>
          <button class="add" @click.prevent="addList(item.field)" >添加</button>
        </div>
      <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label> {{key}} </label>
          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`, $event.target.value)" >
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "ResumeEditor",
  //读取数据
  computed: {
    //使数据可写
      selected:{
        //获取数据
        get(){
          return this.$store.state.selected
        },
        //设置数据
        set(value){
          return this.$store.commit('switchTab', value)
        }
      },
      resume (){
        return this.$store.state.resume
      }
    },
    methods: {
      //使所有字段都可写
      changeResumeField(path, value){
        this.$store.commit('updateResume',{
          path,
          value
        })
      },
      //添加一项对话框
      addList(subitem){
      this.$store.commit('addList',subitem)
      },
      //删除一项对话框
      remList(subitem,i){
      this.$store.commit('removeList',{
        subitem:subitem,
        i:i
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
#resumeEditor {
  background: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  overflow: auto;
  > nav {
    width: 80px;
    background: black;
    color: white;
    > ol {
      > li {
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 16px;
        margin-bottom: 16px;
        cursor: pointer;
        &.active {
          background: white;
          color: black;
        }
      }
    }
  }
  > .panels {
    flex-grow: 1;
    > li {
      padding: 24px;
    }
  }
  svg.icon {
    width: 24px;
    height: 24px;
  }
}
ol {
  list-style: none;
  overflow:auto;
}
.resumeField {
  > label {
    display: block;
  }
  input[type="text"] {
    margin: 10px 0;
    border: 1px solid #b8b8b8;
    width: 100%;
    height: 40px;
    padding: 0 8px;
  }
  input[type="text"]:focus{
    outline: none;
    border-color: #4b94fc;
  }
  textarea{
    margin: 10px 0 5px 0;
    border:1px solid #ddd;
    width:100%;
    height:40px;
    padding:5px 8px;
    transition:0.3s;
  }
  textarea:focus{
    outline-style: none;
    border-color: #4b94fc;
    height:10em;
    transition:0.5s
  }
}
hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 3px 0;
}
.add,
.del{
  border:none;
  cursor: pointer;
  background-color: #15222a;
  color: #fff;
  font-size: 12px;
  padding: 3px 10px;
  margin-top:10px;
  border-radius: 3px;
  outline: none;
  text-decoration: none;
}
.add:hover{
  background-color: #ccc;
  color: #000;
}
.del:hover{
  background-color: #ccc;
  color: #000;
}
</style>


