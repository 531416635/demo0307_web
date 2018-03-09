<template>
<div>
  <el-table
    :data="managerMenuTableData"
    style="width: 100%">
    <el-table-column
      prop="menuName"
      label="菜单名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="menuPath"
      label="访问路径">
    </el-table-column>
    <el-table-column
      prop="menuType"
      label="菜单类型">
    </el-table-column>
    <el-table-column
      prop="menuAuth"
      :formatter = "getFormatter"
      label="是否需要权限">
    </el-table-column>
    <el-table-column
      prop="menuEnabled"
      :formatter = "getFormatter"
      label="菜单是否可用">
    </el-table-column>
  </el-table>

  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="getManagerMenuTableDateAction"
      :current-page="managerMenuTableCurrentPage"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="managerMenuTableTotalPage">
    </el-pagination>
  </div>
</div>
</template>

<script>
  import { mapState,mapGetters, mapActions } from 'vuex'

    export default {
      mounted () {
        this.getManagerMenuTableDateAction()
      },
      computed: {
        ...mapState({
          managerMenuTableData: state => state.managerMenuTableData,
          managerMenuTableCurrentPage: state => state.managerMenuTableCurrentPage,
          managerMenuTableTotalPage: state => state.managerMenuTableTotalPage
        })
      },
      methods: {
        ...mapActions([
           'getManagerMenuTableDateAction',
         ]),
        // todo -- 设置每页显示大小 (暂时没用)
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        getFormatter(row, column, cellValue){
          if(cellValue){
            return "是"
          }else{
            return "否"
          }
        }
      }
    }
</script>

<style scoped>

</style>
