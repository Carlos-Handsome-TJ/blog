<script setup lang="ts">
import { reactive, ref } from 'vue'
import qs from 'qs'
import { useRouter } from 'vue-router'
import axios from 'axios'

const formRef = ref()
const isShowPsd = ref(false)
const router = useRouter()
const form = reactive({
  username: '',
  password: '',
  confirmPsd: ''
})
const isEqual = (value, rule, callback) => {
  if (form.confirmPsd !== form.password) {
    return callback(new Error('两次密码不一致'))
  }
  return callback()
}
const rules = reactive({
  username: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  confirmPsd: [
    { required: true, message: '请输入密码', trigger: 'change' },
    { validator: isEqual, trigger: 'blur' }
  ]
})
const submit = () => {
  formRef.value.validate((isValid: boolean) => {
    if (isValid) {
      const data = {
        username: form.username,
        password: form.password
      }
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url: '/api/user/register'
      }
      axios(options).then((res: any) => {
        if (res.data.code === 0) {
          return ElMessage.success('注册成功')
        }
        return ElMessage.error(res.data.message)
      })
    }
  })
}
const showPsd = () => {
  isShowPsd.value = !isShowPsd.value
}
const login = () => {
  router.push('/login')
}

</script>
<template>
  <div class="login-container">
    <div class="login-logo">logo</div>
    <div class="login-logo">注册</div>
    <el-form :model="form" :rules="rules" ref="formRef">
      <el-form-item prop="username">
        <el-input
          v-model=" form.username"
          placeholder="账号：username"
        >
          <template #prefix>
            <i-uiw-user />
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
            <i-uiw-lock />
          </template>
          <template #suffix>
            <el-icon @click="showPsd" class="login-showPsd">
              <i-ep-view v-if="!isShowPsd" />
              <i-ep-hide v-else />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="confirmPsd">
        <el-input
          v-model="form.confirmPsd"
          placeholder="确认密码：password"
          :type="isShowPsd ? 'text' : 'password'"
          @keyup.enter="submit"
        >
          <template #prefix>
            <i-uiw-lock />
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
          <el-button type="primary" @click="submit" class="login-button">确定</el-button>
          <el-button type="text" @click="login">使用已有账号登录</el-button>
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