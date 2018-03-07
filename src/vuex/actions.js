import axios from 'axios'

// 声明 actions事件
const actions = {

    increment:({ commit }) => commit('increment'),
    decrement:({ commit }) => commit('decrement'),
    incrementIfOdd ({ commit, state },stateOfChange) {
      console.log(stateOfChange)
      if ((state.count + 1) % 2 === 0) {
        commit('increment')
      }
    },
    incrementAsync ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    },
    //异步请求后台数据
    getManagerUserTableDateAction({ commit,state}){
      axios({
        method: 'post',
        url: 'http://localhost:8090/demo/user/getAllUser.do',
      }).then((response) => {
        // console.log(response)
        commit('setManagerUserTableDateAction',response.data.result)
      }).catch((err) =>{
//          console.log(err)
      })
    },
    handleSizeChange({commit,state},val) {
      console.log(`每页 ${val} 条`);
    },
    //当点击页数时，重新异步请求数据
    handleCurrentChange({commit,state},val) {
      axios({
        method: 'post',
        url: 'http://localhost:8090/demo/user/getAllUser.do',
        data:{
          "currentPage":val
        }
      }).then((response) => {
        // console.log(response)
        commit('setManagerUserTableDateAction',response.data.result)
      }).catch((err) =>{
//          console.log(err)
      })
    }
  }

export default actions
