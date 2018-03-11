<template>
<div>
  <i class="el-icon-plus" @click="addClick()" style="cursor:pointer"></i>

  <el-table
    :data="managerRoleTableData"
    style="width: 100%">
    <el-table-column
      prop="roleName"
      label="角色名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="roleCode"
      label="角色代码">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="authClick(scope.row)" type="text" size="small">权限</el-button>
        <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
        <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="getManagerRoleTableDateAction"
      :current-page="managerRoleTableCurrentPage"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="managerRoleTableTotalPage">
    </el-pagination>
  </div>

  <!-- 添加角色 -->
  <el-dialog title="添加角色" :visible.sync="addDialog">
    <el-form :label-position="labelPosition" label-width="80px" :model="roleModel">
      <el-form-item label="角色名">
        <el-input v-model="roleModel.roleName" type="text" ></el-input>
      </el-form-item>
      <el-form-item label="角色代码">
        <el-input v-model="roleModel.roleCode" type="text" ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addDialog = false">取 消</el-button>
      <el-button type="primary" @click="addRole">确 定</el-button>
    </div>
  </el-dialog>

  <!-- 编辑角色 -->
  <el-dialog title="编辑角色" :visible.sync="editDialog">
    <el-form :label-position="labelPosition" label-width="80px" :model="roleModel">
      <el-form-item label="角色名">
        <el-input v-model="roleModel.roleName" type="text"></el-input>
      </el-form-item>
      <el-form-item label="角色代码">
        <el-input v-model="roleModel.roleCode" type="text" ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="editDialog = false">取 消</el-button>
      <el-button type="primary" @click="editRole">确 定</el-button>
    </div>
  </el-dialog>


  <!-- 删除详情 -->
  <el-dialog title="删除用户" :visible.sync="deleteDialog">
    <el-form :label-position="labelPosition" label-width="80px" :model="roleModel">
      <el-form-item label="角色名">
        <el-input v-model="roleModel.roleName" type="text" :readonly="true"></el-input>
      </el-form-item>
      <el-form-item label="角色代码">
        <el-input v-model="roleModel.roleCode" type="text" :readonly="true" ></el-input>
      </el-form-item>

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="deleteDialog = false">取 消</el-button>
      <el-button type="primary" @click="deleteRole">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
  import { mapState,mapGetters, mapActions } from 'vuex'

    export default {
      data (){
        return {
          labelPosition: 'top',
          addDialog:false,
          editDialog:false,
          deleteDialog:false,
          roleModel: {
            id:"",
            roleName:"",
            roleCode:""
          },
        }
      },
      mounted () {
        this.getManagerRoleTableDateAction()
      },
      computed: {
        ...mapState({
          managerRoleTableData: state => state.managerRoleTableData,
          managerRoleTableCurrentPage: state => state.managerRoleTableCurrentPage,
          managerRoleTableTotalPage: state => state.managerRoleTableTotalPage,
        })
      },
      methods: {
        ...mapActions([
           'getManagerRoleTableDateAction',
         ]),
        // todo -- 设置每页显示大小 (暂时没用)
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        authClick(val){
          this.$store.commit('setManagerRoleModel',val)
          this.$router.push("/manager/authRole")
        },
        addClick(val) {
          this.addDialog = true
          // this.roleModel = val
        },
        editClick(val) {
          this.editDialog = true
          this.roleModel = val
        },
        deleteClick(val) {
          this.deleteDialog = true
          this.roleModel = val
        },
        addRole(){
          this.$store.dispatch({
            type:'addManagerRoleAction',
            roleModel: this.roleModel
          })
          this.addDialog = false
          this.$router.go(0)
        },
        editRole(){
          console.log(this.roleModel)
          this.$store.dispatch({
            type:'editManagerRoleAction',
            roleModel: this.roleModel
          })
          this.editDialog = false
          this.$router.go(0)
        },
        deleteRole(){
          console.log(this.roleModel)
          this.$store.dispatch({
            type:'deleteManagerRoleAction',
            roleModel: this.roleModel
          })
          this.deleteDialog = false
          this.$router.go(0)
        }
      }
    }
</script>

<style scoped>

</style>
