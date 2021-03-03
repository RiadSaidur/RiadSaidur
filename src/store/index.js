import { createStore } from 'vuex'
import { projectCollection } from '@/firebase'

export default createStore({
  state: {
    projects: [],
    screenshots: []
  },
  getters: {
    getProjectByName: state => name => {
      // will send false flag if no desired project is not found
      const project = {
        isFound: false
      }
      // try to find the project
      const foundProject = state.projects.find(project => project.name === name) 
      if(foundProject) {
        // set project details
        project.isFound = true
        project.foundProject = foundProject
      }

      return project
    }
  },
  mutations: {
    SET_PROJECT_PREVIEWS(state, projects) {
      state.projects = projects
    }
  },
  actions: {
    async getProjectPreviews({ commit }) {
      const docs = await projectCollection.get()
      
      let projects = []

      docs.forEach( doc => {
        const tempDoc = doc.data()
        const imgFolder = tempDoc.name
        
        tempDoc.screenshots.forEach((screenshot, idx) => {
          tempDoc.screenshots[idx] = `https://firebasestorage.googleapis.com/v0/b/saiduriad.appspot.com/o/${imgFolder}%2F${screenshot}?alt=media`
        })
        
        projects = [ ...projects, tempDoc ]
      })

      commit('SET_PROJECT_PREVIEWS', projects)
    }
  },
  modules: {
  }
})
