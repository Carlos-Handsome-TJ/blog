<script setup lang="ts">
import { reactive, ref } from 'vue'
import { login } from '@/service/login'

const formRef = ref()
const isShowPsd = ref(false)
const rules = reactive({
  username: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ]
})
const form = reactive({
  username: '',
  password: '',
  autoLogin: true
})
const submit = () => {
  formRef.value.validate((isValid: boolean) => {
    if (isValid) {
      login(form).then((res: any) => {
        if (res.code === 0) {
          return ElMessage.success('登录成功')
        }
        ElMessage.error('账号或密码错误！')
      })
    }
  })
}
const showPsd = () => {
  isShowPsd.value = !isShowPsd.value
}

</script>
<template>
  <div class="login-container">
    <div class="login-logo">logo</div>
    <el-form :model="form" :rules="rules" ref="formRef">
      <el-form-item prop="username">
        <el-input
          v-model=" form.username"
          placeholder="账号：username"
        >
          <template #prefix>
            <i-ep-user />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          placeholder="密码：password"
          :type="isShowPsd ? 'text' : 'password'"
          @keyup.enter="submit"
        >
          <template #prefix>
            <i-ep-lock />
          </template>
          <template #suffix>
            <el-icon @click="showPsd" class="login-showPsd">
              <i-ep-view v-if="!isShowPsd" />
              <i-ep-hide v-else />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <div class="form-item">
          <el-checkbox v-model="form.autoLogin">自动登录</el-checkbox>
          <el-button type="text">忘记密码</el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit" class="login-button">确定</el-button>
      </el-form-item>
      <el-form-item>
        <div class="form-item">
          <div>
            其他登录方式
          </div>
          <el-button type="text">注册账户</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  width: 350px;
  height: 100%;
  margin: 10% auto;

  .form-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .login-button {
    width: 100%;
  }

  .login-showPsd {
    cursor: pointer;
  }

  .login-logo {
    height: 50px;
  }
}
</style>