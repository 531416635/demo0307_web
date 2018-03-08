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
    // todo -- 设置每页显示大小 (暂时没用)
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    // todo 后台管理--用户管理 --开始
    // 获取table数据
    getManagerUserTableDateAction({ commit,state},val){
      axios({
        method: 'post',
        url: 'http://localhost:8090/demo/user/getAllUser.do',
        data:{
          "currentPage":val
        }
      }).then((response) => {
        //重新渲染table数据和page分页数据
        commit('setManagerUserTableDate',response.data.result)
      }).catch((err) =>{
//          console.log(err)
      })
    },
    // todo 后台管理--用户管理 --结束
  }

export default actions
