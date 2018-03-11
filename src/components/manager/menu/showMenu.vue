<template>
  <!-- 查看详情 -->
  <el-card class="box-card">
    <div>
      <el-button type="info" @click="goBack">返回</el-button>
    </div>
    <div>
      <div>
        <label>菜单名称</label>
        <span>{{managerMenuModel.menuName}}</span>
      </div>
      <div>
        <label>访问路径</label>
        <span>{{managerMenuModel.menuPath}}</span>
      </div>
      <div>
        <label>菜单类型</label>
        <span>{{managerMenuModel.menuType}}</span>
      </div>
      <div>
        <label>父菜单ID</label>
        <span>{{managerMenuModel.menuParent}}</span>
      </div>
      <div>
        <label>是否需要权限</label>
        <span>{{managerMenuModel.menuAuth}}</span>
      </div>
      <div>
        <label>菜单是否可用</label>
        <span>{{managerMenuModel.menuEnabled}}</span>
      </div>
    </div>
  </el-card>
</template>

<script>

  import { mapState,mapMutations,mapGetters, mapActions } from 'vuex'

    export default {
      name: "show-user",
      mounted (){
        this.consoleFuc()
      },
      computed: {
        ...mapState({
          managerMenuModel: state => state.managerMenuModel,
        })
      },
      methods:{
        goBack(){
          this.$router.back(-1)
        },
        consoleFuc(){
          console.log(this.managerMenuModel)
          console.log("===========")
        }
      }
    }
</script>

<style scoped>
  label{
    font-size: 14px;
    color: #606266;
  }
  .box-card {
    width: 100%;
    height: 100%;
    min-height: 32rem;
  }
</style>
