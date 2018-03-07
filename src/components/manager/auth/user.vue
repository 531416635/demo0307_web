<template>
<div>
  <el-table
    :data="$store.state.managerUserTableData"
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
      @current-change="handleCurrentChange"
      :current-page.sync="$store.state.managerUserTableCurrentPage"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="$store.state.managerUserTableTotalPage">
    </el-pagination>
  </div>
</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

    export default {
      mounted () {
        this.getManagerUserTableDateAction()
      },
      // computed: mapGetters([
      //   'getManagerUserTableTotalPage'
      // ]),
      methods: {
        ...mapActions([
           'getManagerUserTableDateAction',
           'handleSizeChange',
           'handleCurrentChange',
         ])
      }
    }
</script>

<style scoped>

</style>
