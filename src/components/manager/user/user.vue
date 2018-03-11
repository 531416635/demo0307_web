<template>
<div>

  <router-link to="/manager/addUser"><i class="el-icon-plus"  style="cursor:pointer"></i></router-link>

  <el-table
    :data="managerUserTableData"
    style="width: 100%">
    <el-table-column
      prop="user_name"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="user_password"
      label="密码">
    </el-table-column>
    <el-table-column
      prop="role_name"
      label="角色">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="showClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
        <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
<!-- 分页插件 -->
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="getManagerUserTableDateAction"
      :current-page="managerUserTableCurrentPage"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="managerUserTableTotalPage">
    </el-pagination>
  </div>

  <!-- 查看详情 -->
  <el-dialog title="查看详情" :visible.sync="showDialog">
    <el-form :label-position="labelPosition" label-width="80px" :model="userModel">
      <el-form-item label="用户名">
        <el-input v-model="userModel.user_name" type="text" :readonly="true"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userModel.user_password" type="text"  :readonly="true"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-input v-model="userModel.role_name" type="text"  :readonly="true"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="showDialog = false">取 消</el-button>
      <el-button type="primary" @click="showDialog = false">确 定</el-button>
    </div>
  </el-dialog>

  <!-- 编辑详情 -->
  <el-dialog title="编辑用户" :visible.sync="editDialog">
    <el-form :label-position="labelPosition" label-width="80px" :model="userModel">
      <el-form-item label="用户名">
        <el-input v-model="userModel.user_name" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userModel.user_password" type="text" ></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="value8" filterable :placeholder="placeholderSelect" @change="changeSelect">
          <el-option
            v-for="item in managerAllRoleData"
            :key="item.id"
            :label="item.roleName"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="editDialog = false">取 消</el-button>
      <el-button type="primary" @click="editUser">确 定</el-button>
    </div>
  </el-dialog>


  <!-- 删除详情 -->
  <el-dialog title="删除用户" :visible.sync="deleteDialog">
    <el-form :label-position="labelPosition" label-width="80px" :model="userModel">
      <el-form-item label="用户名">
        <el-input v-model="userModel.user_name" type="text" :readonly="true"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userModel.user_password" type="text" :readonly="true" ></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-input v-model="userModel.role_name" type="text" :readonly="true" ></el-input>
      </el-form-item>

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="deleteDialog = false">取 消</el-button>
      <el-button type="primary" @click="deleteUser">确 定</el-button>
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
          showDialog:false,
          editDialog:false,
          deleteDialog:false,
          value8:"",
          placeholder:"请选择",
          userModel: {
            id:"",
            user_name:"",
            r_id:"",
            role_code:"",
            user_password:"",
            role_name:"",
            u_id:""
          },
        }
      },

      mounted () {
        this.getManagerUserTableDateAction(),
        this.getManagerAllRoleDateAction()
      },
      computed: {
        ...mapState({
          managerUserTableData: state => state.managerUserTableData,
          managerUserTableCurrentPage: state => state.managerUserTableCurrentPage,
          managerUserTableTotalPage: state => state.managerUserTableTotalPage,
          managerAllRoleData: state => state.managerAllRoleData
        }),
        placeholderSelect(){
          this.placeholder = this.userModel.role_name
          return this.placeholder
        }
      },
      methods: {
        ...mapActions([
           'getManagerUserTableDateAction',
           'getManagerAllRoleDateAction'
         ]),
        // todo -- 设置每页显示大小 (暂时没用)
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        showClick(val) {
          this.showDialog = true
          this.userModel = val
        },
        editClick(val) {
          this.editDialog = true
          this.userModel = val
        },
        deleteClick(val) {
          this.deleteDialog = true
          this.userModel = val
        },
        changeSelect(val){
          this.userModel.r_id = val
        },
        editUser(){
          this.$store.dispatch({
            type:'editManagerUserAction',
            userModel: this.userModel
          })
          this.editDialog = false
          this.$router.go(0)
          // this.$router.push("/manager/user")
        },
        deleteUser(){
          this.$store.dispatch({
            type:'deleteManagerUserAction',
            userModel: this.userModel
          })
          this.deleteDialog = false
          this.$router.go(0)
          // this.$router.push("/manager/user")
        }
      }
    }
</script>

<style scoped>

</style>
