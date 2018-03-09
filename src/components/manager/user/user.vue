<template>
<div>

  <router-link to="/manager/addUser"><i class="el-icon-plus"  style="cursor:pointer"></i></router-link>
  <i class="el-icon-edit" style="cursor:pointer"></i>
  <i class="el-icon-share" style="cursor:pointer"></i>
  <i class="el-icon-delete" style="cursor:pointer"></i>

  <el-button type="primary" icon="el-icon-search">搜索</el-button>

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
  </el-table>

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
</div>
</template>

<script>
  import { mapState,mapGetters, mapActions } from 'vuex'

    export default {
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
        }
      }
    }
</script>

<style scoped>

</style>
