<template>
  <div>
    <!-- 添加选项 -->
    <el-container style="border: 1px solid #eee">
      <el-aside  style="width:auto; background-color: rgb(238, 241, 246)">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-menu-item index="1">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span slot="title"><router-link to="/manager">首页</router-link></span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1"><router-link to="/manager/auth/user">用户管理</router-link></el-menu-item>
              <el-menu-item index="2-2">菜单管理</el-menu-item>
              <el-menu-item index="2-3">角色管理</el-menu-item>
              <el-menu-item index="2-4">权限管理</el-menu-item>
            </el-menu-item-group>

          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="4" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="font-size: 12px">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <div style="float: right">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
          </div>
        </el-header>

        <el-main>
          <!--<el-table :data="tableData">-->
            <!--<el-table-column prop="date" label="日期" width="140">-->
            <!--</el-table-column>-->
            <!--<el-table-column prop="name" label="姓名" width="120">-->
            <!--</el-table-column>-->
            <!--<el-table-column prop="address" label="地址">-->
            <!--</el-table-column>-->
          <!--</el-table>-->
          <el-card class="box-card">
            <h1>欢迎来到管理后台！</h1>
          </el-card>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>

      </el-container>
    </el-container>

  </div>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  /*控制左侧菜单是否显示*/
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    min-height: 38rem;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      }
    },
    methods: {
      //左侧菜单--展开
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      //左侧菜单--关闭
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>
