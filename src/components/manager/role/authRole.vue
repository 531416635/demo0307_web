<template>
  <div>
    <div>
      <el-button type="info" @click="goBack">取消</el-button>
      <el-button type="primary" @click="addManagerAuthRole">确认</el-button>
    </div>

    <div class="custom-tree-container">
      <div class="block">
        <el-tree
          ref="tree"
          :data="managerMenuTreeData"
          node-key="id"
          show-checkbox
          :props="defaultProps"
          default-expand-all
          :expand-on-click-node="false"
          :default-checked-keys="managerRoleDefaultCheckedKeys">
        </el-tree>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState,mapGetters, mapActions } from 'vuex'
    export default {
      data(){
        return {
          defaultCheckedKeys:[],
          defaultProps: {
            children: 'children',
            label: 'menuName'
          }
        }
      },
      mounted () {
        this.getDefaultCheckedKeys(),
        this.getManagerMenuTreeDateAction()
      },
      computed: {
        ...mapState({
          managerMenuTreeData: state => state.managerMenuTreeData,
          managerRoleModel: state => state.managerRoleModel,
          managerRoleDefaultCheckedKeys: state => state.managerRoleDefaultCheckedKeys,
        })
      },
      methods: {
        goBack(){
          this.$router.back(-1)
        },
        ...mapActions([
          'getManagerMenuTreeDateAction',
        ]),
        getDefaultCheckedKeys(){
          this.$store.dispatch({
            type:'getDefaultCheckedKeysAction',
            roleModel: this.managerRoleModel
          })
        },
        addManagerAuthRole(){
          this.$store.dispatch({
            type:'addManagerAuthRoleAction',
            menus: this.$refs.tree.getCheckedKeys(),
            roleId: this.managerRoleModel.id
          })
          this.$router.push("/manager/role")
          // this.$router.go(0)
        }
      }
    }
</script>

<style scoped>

</style>
