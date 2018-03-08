<template>
<div>
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
           'getManagerUserTableDateAction',
           'handleSizeChangeManagerUserTableDateAction',
           'handleCurrentChangeManagerUserTableDateAction',
         ])
      }
    }
</script>

<style scoped>

</style>
