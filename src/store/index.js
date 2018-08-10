//引入全局数据
import Vuex from 'vuex'
import Vue from 'vue'
//引入 object-path，方便查找 resume 的属性
import objectPath from "object-path"

Vue.use(Vuex) 
export default new Vuex.Store({
  state: {
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },
    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' },
      ],
      profile: {
        name: '',
        city: '',
        title: ''
      },
      'workHistory': [
        { company: '', content: ''}
      ],
      education: [
        { school: '', content: '' }
      ],
      projects: [
        { name: '', content: '' }
      ],
      awards: [
        { name: '', content: '' },
      ],
      contacts: [
        { contact: '', content: '' }
      ],
    }
  },
  mutations: {
    //数据保存到 localStorage
    initState(state, payload){
      Object.assign(state, payload)
    },
    //切换按钮
    switchTab(state, payload) {
      state.selected = payload
      //数据保存到 localStorage
      localStorage.setItem('state', JSON.stringify(state))
    },
    //上传数据
    updateResume(state, {path, value}){
      objectPath.set(state.resume, path, value)
      //数据保存到 localStorage
      localStorage.setItem('state', JSON.stringify(state))
    },
    //设置用户
    setUser(state, payload){
      Object.assign(state.user, payload)
    },
    //登出用户
    removeUser(state){
      state.user.id = ''
    },
    //移除对话框
    removeList(state,payload){
      let {subitem,i} = payload;
      switch(subitem){
        case 'workHistory':
          state.resume[subitem].splice(i,1)
          break;
        case 'education':
          state.resume[subitem].splice(i,1)
          break;
        case 'projects':
          state.resume[subitem].splice(i,1)
          break;
        case 'awards':
          state.resume[subitem].splice(i,1)
          break;
        case 'contacts':
          state.resume[subitem].splice(i,1)
          break;
      }
      //数据保存到 localStorage
      localStorage.setItem('state', JSON.stringify(state))
    },
    //添加对话框
    addList(state,payload){
      switch(payload){
        case 'workHistory':
          state.resume[payload].push({ company: '', contents: ``})
          break;
        case 'education':
          state.resume[payload].push({ school: '', content: '' })
          break;
        case 'projects':
          state.resume[payload].push({ name: '', contents: '' })
          break;
        case 'awards':
          state.resume[payload].push({ name: '', content: '' })
          break;
        case 'contacts':
          state.resume[payload].push({ contact: '', content: '' })
          break;
      }
      //数据保存到 localStorage
      localStorage.setItem('state', JSON.stringify(state))
    }
  }
})