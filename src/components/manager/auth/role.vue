<template>
<div>
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
</div>
</template>

<script>
  import { mapState,mapGetters, mapActions } from 'vuex'

    export default {
      mounted () {
        this.getManagerRoleTableDateAction()
      },
      computed: {
        ...mapState({
          managerRoleTableData: state => state.managerRoleTableData,
          managerRoleTableCurrentPage: state => state.managerRoleTableCurrentPage,
          managerRoleTableTotalPage: state => state.managerRoleTableTotalPage
        })
      },
      methods: {
        ...mapActions([
           'getManagerRoleTableDateAction'
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
