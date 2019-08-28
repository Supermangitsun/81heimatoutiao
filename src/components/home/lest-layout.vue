<template>
    <div>
        <div class="nav">
            <img src="../../assets/img/logo_admin.png" alt="">
        </div>
         <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#adafb5"
      active-text-color="#ffd04b">
      <!-- el-submenu导航折叠 -->
      <el-menu-item>
        <i class="el-icon-s-home"></i>
        <span>首页</span>
        </el-menu-item>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-collection"></i>
        <!-- 具名插槽 -->
        <span>内容管理</span>
        </template>
        <!-- 匿名插槽 -->
        <el-menu-item>发表文章</el-menu-item>
        <el-menu-item>内容列表</el-menu-item>
        <el-menu-item>素材管理</el-menu-item>
        <el-menu-item>评论列表</el-menu-item>
      </el-submenu>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-user"></i>
            <!-- 具名插槽 -->
        <span>粉丝管理</span>
        </template>
        <!-- 匿名插槽 -->
        <el-menu-item>图文数据</el-menu-item>
        <el-menu-item>粉丝概况</el-menu-item>
        <el-menu-item>粉丝画像</el-menu-item>
        <el-menu-item>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item>
        <i class="el-icon-s-custom"></i>
        <span>账户信息</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>

<script>
export default {

}
</script>
<style lang='less' scoped>
    .nav{
        height: 80px;
        width: 100%;
        background-color: #2e2f32;
        text-align: center;
        padding: 15px 0;
        img{
            width: 50%;
        }
    }
</style>
