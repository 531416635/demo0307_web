<template>
  <div>
    <!-- 添加选项 -->
    <el-container style="border: 1px solid #eee">
      <el-aside  style="width:auto; background-color: rgb(238, 241, 246)">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <router-link to="/manager/welcome">
            <el-menu-item index="1">
              <i class="fa fa-home home_icon" aria-hidden="true"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">权限管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/manager/user"><el-menu-item index="2-1">用户管理</el-menu-item></router-link>
              <router-link to="/manager/menu"><el-menu-item index="2-2">菜单管理</el-menu-item></router-link>
              <router-link to="/manager/role"><el-menu-item index="2-3">角色管理</el-menu-item></router-link>
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
          <div @click="changeIsCollapse" style="display: inline-block;">
            <i v-if="isCollapse" class="fa fa-windows fa-2x" aria-hidden="true" style="color: #409EFF"></i>
            <i v-else class="fa fa-windows fa-2x" aria-hidden="true" style="color: #606266"></i>
          </div>
          <div style="float: right">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>金荍</span>
          </div>
        </el-header>

        <el-main>
          <router-view></router-view>
          <!--<keep-alive>-->
            <!--<router-view  v-if="$route.meta.keepAlive"></router-view>-->
          <!--</keep-alive>-->
          <!--<router-view  v-if="!$route.meta.keepAlive"></router-view>-->

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
  .el-menu--collapse {
    height: 100%;
  }
  .home_icon{
    font-size: 1.2rem;
    padding: 0 0.3rem;
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
      },
      //控制左侧导航栏的展开与关闭
      changeIsCollapse(){
        this.isCollapse = !this.isCollapse
      }
    }
  };
</script>
