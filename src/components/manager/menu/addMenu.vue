<template>
  <el-card class="box-card">

    <div>
      <el-button type="info" @click="goBack">取消</el-button>
      <el-button type="primary" @click="addManagerMenu">确认</el-button>
    </div>

    <div>
      <el-form :label-position="labelPosition" label-width="80px" :model="menuModel">
        <el-form-item label="菜单名称">
          <el-input v-model="menuModel.menuName" type="text"></el-input>
        </el-form-item>
        <el-form-item label="访问路径">
          <el-input v-model="menuModel.menuPath" type="text" ></el-input>
        </el-form-item>
        <el-form-item label="菜单类型">
          <el-input v-model="menuModel.menuType" type="text" ></el-input>
        </el-form-item>
        <el-form-item label="父菜单">
          <el-cascader
            :options="managerMenuTreeData"
            :props="defaultProps"
            v-model="managerMenuModel.defaultSelect"
            @change="changeCascader"
            change-on-select
          ></el-cascader>
        </el-form-item>
        <el-form-item label="是否需要权限">
          <el-switch
            style="display: block"
            v-model="menuModel.menuAuth"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="是"
            inactive-text="否"
            @change="changeSwitch1">
          </el-switch>
          <!--<el-input v-model="managerMenuModel.menuAuth" type="text"  :readonly="true"></el-input>-->
        </el-form-item>
        <el-form-item label="菜单是否可用">
          <el-switch
            style="display: block"
            v-model="menuModel.menuEnabled"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="是"
            inactive-text="否"
            @change="changeSwitch2">
          </el-switch>
          <!--<el-input v-model="managerMenuModel.menuEnabled" type="text"  :readonly="true"></el-input>-->
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
            },
            menuModel:{
              id : "",
              menuPath : "",
              menuName : "",
              menuType : "",
              menuParent : "",
              menuAuth : "",
              menuEnabled : "",
              defaultSelect : [],
              children : []
            }
          }
      },
      computed: {
        ...mapState({
          // managerMenuModel: state => state.managerMenuModel,
          managerMenuModel: function (state) {
            state.managerMenuModel.defaultSelect.push(state.managerMenuModel.id)
            this.menuModel.defaultSelect = state.managerMenuModel.defaultSelect
            return state.managerMenuModel
          },
          managerMenuTreeData: state => state.managerMenuTreeData,
        })
      },
      methods:{
        goBack(){
          this.$router.back(-1)
        },
        addManagerMenu(){

          this.$store.dispatch({
            type:'addManagerMenuAction',
            menuModel: this.menuModel
          })
          this.$router.push("/manager/menu")
        },
        changeCascader(val){
          this.menuModel.defaultSelect = val
        },
        changeSwitch1(val){
          this.menuModel.menuAuth = val
        },
        changeSwitch2(val){
          this.menuModel.menuEnabled = val
        }
      }
    }
</script>

<style scoped>

</style>
