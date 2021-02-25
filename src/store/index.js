import { createStore } from 'vuex'
import { projectCollection, screenshotCollection } from '@/firebase'

export default createStore({
  state: {
    projects: [],
    screenshots: []
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
        const primaryImage = tempDoc.screenshots[0]
    
        screenshotCollection.child(`${primaryImage}.png`).getDownloadURL()
          .then( imageURL => {
              tempDoc.previewImage = imageURL+'png'
              projects = [ ...projects, tempDoc ]
              
              commit('SET_PROJECT_PREVIEWS', projects)
          })
          .catch( err => console.log(err))
      })
    }
  },
  modules: {
  }
})
