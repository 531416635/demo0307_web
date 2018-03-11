<template>
<div>
  <router-link to="/manager/menu"><el-button type="primary" style="cursor:pointer"><i class="fa fa-table" aria-hidden="true"></i>表单</el-button></router-link>
  <router-link to="/manager/menuTree"><el-button type="primary" style="cursor:pointer"><i class="fa fa-tree" aria-hidden="true"></i>树形</el-button></router-link>

  <div class="custom-tree-container">
    <div class="block">
      <el-tree
        :data="managerMenuTreeData"
        accordion
        node-key="id"
        :props="defaultProps"
        default-expand-all
        :expand-on-click-node="false">
        <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => showMenu(data)">
            查看
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => addMenu(data)">
            新增
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => editMenu(data)">
            修改
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            删除
          </el-button>
        </span>
      </span>
      </el-tree>
    </div>
  </div>

</div>
</template>

<script>
  import { mapState,mapGetters,mapMutations, mapActions } from 'vuex'

    export default {
      data(){
        return{
          defaultProps: {
            children: 'children',
            label: 'menuName'
          }
        }
      },
      mounted () {
        this.getManagerMenuTreeDateAction()
      },
      computed: {
        ...mapState({
          managerMenuTreeData: state => state.managerMenuTreeData,
          menuModel: state => state.menuModel,
        })
      },
      methods: {
        ...mapActions([
           'getManagerMenuTreeDateAction',
         ]),
        showMenu(data){
          this.$store.commit({
            type:'setManagerMenuModel',
            managerMenuModel: data
          })
          this.$router.push("/manager/showMenu")
        },
        addMenu(data){
          this.$store.commit({
            type:'setManagerMenuModel',
            managerMenuModel: data
          })
          // console.log(this.managerMenuTreeData)
          this.$router.push("/manager/addMenu")
        },
        editMenu(data){
          this.$store.commit({
            type:'setManagerMenuModel',
            managerMenuModel: data
          })
          this.$router.push("/manager/editMenu")
        }
      }
    }
</script>

<style scoped>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
