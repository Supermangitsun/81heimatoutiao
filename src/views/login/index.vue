<template> <!-- vue实例外创建 -->
    <div class="login">
       <el-card class="login-card">
         <img src="../../assets/img/logo_index.png" alt="">
         <!-- 放置一个表单-->
         <el-form :model="formData" :rules="rules" ref="loginpage">
           <el-form-item prop="cell">
              <el-input v-model="formData.cell" placeholder="请输入手机号"></el-input>
           </el-form-item>
           <el-form-item prop="verify">
              <el-input v-model="formData.verify" placeholder="请输入验证码" style="width:60%"></el-input>
              <el-button style="float:right">获取验证码</el-button>
           </el-form-item>
           <el-form-item prop="deal">
              <el-checkbox  v-model="formData.deal">我已阅读并同意<a style="color:red" href="#">用户协议</a> 和 <a style="color:red">隐私条款</a></el-checkbox>
            </el-form-item>

         <el-row>
           <el-button @click="login" class="last-button" type="primary">登录</el-button>
         </el-row>
   </el-form>
       </el-card>
    </div>
</template>

<script>
// 定义数据
export default {
  data () {
    // 在运行之前将定义function()用于自定义函数validator
    let func = function (rule, value, callback) {
      // rule 是当前的校验规则，没用，value是当前表单字段的值，callback执行下一段代码
      if (value) {
        // 满足校验
        callback()// 同意继续往下走
      } else {
        // 不满足
        callback(new Error('您必须同意呦'))// 错误抛出信息
      }
    }
    return {
      formData: {
        cell: '',
        verify: '',
        deal: ''
      },
      rules: {
        cell: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }
        ],
        verify: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码' }
        ],
        deal: [
          // 经过测试发现如果选择一次在选择第二次的话就会出现bug，所以现在需要使用自定义函数validator
          { validator: func }
        ]
      }
    }
  },
  methods: {
    login () {
      // validate手动校验表单数据
      this.$refs.loginpage.validate(isOK => {
        // 通过校验
        if (isOK) {
          console.log('校验成功')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login{
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/img/login_bg.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card{
         height: 350px;
         width: 400px;
         img{
           display: block;
           margin: 0 auto;
            width: 60%;
            margin-bottom: 30px;
         }
         .two-input{
           width: 50%;
         }
         .last-button{
           width:100%;
         }
    }
}

</style>
