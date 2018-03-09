<template>
  <el-card class="box-card">

    <div>
      <el-button type="info" @click="goBack">取消</el-button>
      <el-button type="primary" @click="addManagerUser">确认</el-button>
    </div>

    <div>
      <el-form :label-position="labelPosition" label-width="80px" :model="userModel">
        <el-form-item label="用户名">
          <el-input v-model="userModel.userName" type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userModel.userPassword" type="password"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
    export default {
        data(){
          return{
            labelPosition: 'top',
            userModel: {
              userName: '',
              userPassword: ''
            },
          }
        },
      methods:{
          goBack(){
            this.$router.back(-1)
          },
         addManagerUser(){
           this.$store.dispatch({
             type:'addManagerUserAction',
             userModel: this.userModel
           })
           this.$router.push("/manager/user")
         }

      }
    }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
    height: 100%;
    min-height: 32rem;
  }
  .el-input{
    width: 25%;
  }
</style>
