import { createStore } from 'vuex'

export default createStore({
  state: {
    taskid:0,
    submitid:0,
    TaskReviewData:0,
    submitter_token:'',
    islogin:true,
  },
  mutations: {
    changetaskid(state,id){
      state.taskid = id
    },
    changesubmitid(state,id){
      state.submitid = id
    },
    TaskReviewId(state,id,token){
      state.TaskReviewData = id;
    },
    Tasksubmitter_token(state,token){
      state.submitter_token = token;
    },
    changeislogin(state,islogin){
      state.islogin = islogin;
    },
  },
  actions: {
  },
  modules: {
  }
})
