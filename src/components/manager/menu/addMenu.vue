<template>
  <el-card class="box-card">

    <div>
      <el-button type="info" @click="goBack">取消</el-button>
      <el-button type="primary" @click="addManagerUser">确认</el-button>
    </div>

    <div>
      <el-form :label-position="labelPosition" label-width="80px" :model="managerMenuModel">
        <el-form-item label="菜单名称">
          <el-input v-model="managerMenuModel.menuName" type="text" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="访问路径">
          <el-input v-model="managerMenuModel.menuPath" type="text"  :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="菜单类型">
          <el-input v-model="managerMenuModel.menuType" type="text"  :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="父菜单">
          <el-cascader
            :options="managerMenuTreeData"
            :props="defaultProps"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="是否需要权限">
          <el-input v-model="managerMenuModel.menuAuth" type="text"  :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="菜单是否可用">
          <el-input v-model="managerMenuModel.menuEnabled" type="text"  :readonly="true"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
  import { mapState,mapMutations,mapGetters, mapActions } from 'vuex'
    export default {
        name: "add-user",
      data(){
          return{
            labelPosition: 'top',
            defaultProps:{
              label:'menuName',
              value:'id',
              children: 'children'
            }
          }
      },
      computed: {
        ...mapState({
          managerMenuModel: state => state.managerMenuModel,
          managerMenuTreeData: state => state.managerMenuTreeData,
        })
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

</style>
