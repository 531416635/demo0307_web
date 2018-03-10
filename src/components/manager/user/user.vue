<template>
<div>

  <router-link to="/manager/addUser"><i class="el-icon-plus"  style="cursor:pointer"></i></router-link>

  <el-table
    :data="managerUserTableData"
    style="width: 100%">
    <el-table-column
      prop="userName"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="userPassword"
      label="密码">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="showClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
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
        <el-input v-model="userModel.userName" type="text" :readonly="true"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userModel.userPassword" type="password"  :readonly="true"></el-input>
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
        <el-input v-model="userModel.userName" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userModel.userPassword" type="password" ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="editDialog = false">取 消</el-button>
      <el-button type="primary" @click="editDialog = false">确 定</el-button>
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
          userModel: {
            id:0,
            userName: '',
            userPassword: ''
          },
        }
      },

      mounted () {
        this.getManagerUserTableDateAction()
      },
      computed: {
        ...mapState({
          managerUserTableData: state => state.managerUserTableData,
          managerUserTableCurrentPage: state => state.managerUserTableCurrentPage,
          managerUserTableTotalPage: state => state.managerUserTableTotalPage
        })
      },
      methods: {
        ...mapActions([
           'getManagerUserTableDateAction'
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
        }
      }
    }
</script>

<style scoped>

</style>
