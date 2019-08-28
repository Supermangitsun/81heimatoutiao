<template>
  <el-row class="header">
    <el-col class="item-1" :span="20">
      <i class="el-icon-s-unfold item-2"></i>
      <span>江苏传智播客教育股份有限公司</span>
    </el-col>
    <el-col :span="4" class="item-3">
      <img src="../../assets/img/avatar.jpg" alt="">
      <el-col>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-s-custom">个人信息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-loading">git地址</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
}
</script>
<style lang='less' scoped>
.header {
  display: flex;
  justify-content:space-between;
  padding: 20px 0;
  .item-1 {
    .item-2 {
        margin-right: 4px;
        font-size: 20px
    }
  }
  .item-3{
    display: flex;
    justify-items: center;
    cursor: pointer;
    align-items: center;
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
