<template> <!-- vue实例外创建 -->
        <!--大容器  -->
    <el-container>
        <!-- 左侧区域 -->
        <el-aside class="left">
            <lest-layout></lest-layout>
        </el-aside>
    <!-- 嵌套容器 -->
       <el-container>
           <!-- 上部区域 -->
            <el-header>
                <top-layout></top-layout>
            </el-header>
            <!-- 中间区域 -->
            <el-main>
                <middle-layout></middle-layout>
            </el-main>
       </el-container>
    </el-container>
</template>
<script>
// 引用左侧布局组件
// import lestlayout from '../../components/home/lest-layout'
// 引用头部布局组件
// import toplayout from '../../components/home/top-layout'
// 引用中部布局组件
// import middlelayout from '../../components/home/middle-layout'
export default {
  // 注册左面布局组件
//   components: {
//     'lest-layout': lestlayout,
//     'top-layout': toplayout,
//     'middle-layout': middlelayout
//   }
}

</script>
<style lang='less' scope>
.left{
    width: 200px;
    height: 100vh;
    background-color: #323745;
}
</style>
