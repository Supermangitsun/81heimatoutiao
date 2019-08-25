<template> <!-- vue实例外创建 -->
    <div class="login">
       <el-card class="login-card">
         <img src="../../assets/img/logo_index.png" alt="">
         <!-- 放置一个表单-->
         <el-form :model="formData" :rules="rules" ref="loginpage">
           <el-form-item prop="mobile">
              <el-input v-model="formData.mobile" placeholder="请输入手机号"></el-input>
           </el-form-item>
           <el-form-item prop="code">
              <el-input v-model="formData.code" placeholder="请输入验证码" style="width:60%"></el-input>
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
        mobile: '',
        code: '',
        deal: ''
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }
        ],
        code: [
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
      this.$refs.loginpage.validate((isOK, result) => {
        // console.log(isOK)// 表单是否通过校验
        // console.log(result)// 表单打印的结果
        // 通过校验
        if (isOK) {
          // console.log('校验成功')
          // 获取数据
          this.$axios({
            method: 'post',
            url: 'authorizations',
            // post参数是在data中写的
            data: this.formData
            // 因为这是axios请求，所以支持链式调用
          }).then(result => {
            // 1：将获取的token在前端缓存，以后调用接口的时候不用在请求token
            // console.log(result.data.data)
            // 2：因为设置的用户是个对象，所以需要转为字符串
            window.localStorage.setItem('user-info', JSON.stringify(result.data.data))
            // 编程式导航
            this.$router.push('/home')
            // 当用户账号或者密码输入错误时，给予提示
          }).catch(() => {
            // $message是element注入到vue中的实例
            this.$message({
              message: '当前账号或密码错误',
              type: 'warning',
              center: 'true',
              offset: '100'
            })
          })
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
