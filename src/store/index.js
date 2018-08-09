import Vuex from 'vuex'
import Vue from 'vue'
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
    initState(state, payload){
      Object.assign(state, payload)
    },
    switchTab(state, payload) {
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, {path, value}){
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state, payload){
      Object.assign(state.user, payload)
    },
    removeUser(state){
      state.user.id = ''
    },
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
      localStorage.setItem('state', JSON.stringify(state))
    },
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
      localStorage.setItem('state', JSON.stringify(state))
    }
  }
})