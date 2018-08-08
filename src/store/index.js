import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex) 
export default new Vuex.Store({
  state: {
    selected: 'profile',
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
        name: '高远远',
        city: '美丽的齐齐哈尔',
        title: '首席顾问'
      },
      'workHistory': [
        { company: '前程似锦公司', content: '这是公司介绍这是公司介绍这是公司介绍这是公司介绍这是公司介绍这是公司介绍这是公司介绍'}
      ],
      education: [
        { school: '超人学院', content: '五级超人' }
      ],
      projects: [
        { name: '项目', content: '这是项目介绍这是项目介绍这是项目介绍这是项目介绍这是项目介绍这是项目介绍这是项目介绍这是项目介绍这是项目介绍' }
      ],
      awards: [
        { name: '大红花', content: '大红花的来历' },
        { name: '三好学生', content: '三好学生的来历' },
        { name: '再来一包', content: '连续获得十次再来一包干脆面' }
      ],
      contacts: [
        { contact: 'phone', content: '18828883883886' }
      ],
    }
  },
  mutations: {
    switchTab(state, payload) {
      state.selected = payload
    }
}
})