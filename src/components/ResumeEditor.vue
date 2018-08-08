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
          <div class="subitem" v-for="subitem in resume[item.field]">
            <div class="resumeField" v-for="(value,key) in subitem">
              <label> {{key}} </label>
              <input type="text"  :value = "value" />
            </div>
            <hr>
            <button class="add"  @click="addResumeSubfield(item.field)" >添加</button>
            <button class="del">删除</button>
          </div>
        </div>
      <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label> {{key}} </label>
          <input type="text" v-model="resume[item.field][key]">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "ResumeEditor",
  computed: {
      selected:{
        get(){
          return this.$store.state.selected
        },
        set(value){
          return this.$store.commit('switchTab', value)
        }
      },
      resume (){
        return this.$store.state.resume
      }
    },
    methods: {
      addResumeSubfield(field){
      this.$store.commit('addResumeSubfield',{field})
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
}
.resumeField {
  > label {
    display: block;
  }
  input[type="text"] {
    margin: 16px 0;
    border: 1px solid #b8b8b8;
    width: 100%;
    height: 40px;
    padding: 0 8px;
  }
  input[type="text"]:focus{
    outline: none;
    border-color: #4b94fc;
  }
}
hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 5px 0;
}
.add,
.del{
  border:none;
  cursor: pointer;
  background-color: #15222a;
  color: #fff;
  font-size: 12px;
  padding: 5px;
  border-radius: 3px;
  outline: none;
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


