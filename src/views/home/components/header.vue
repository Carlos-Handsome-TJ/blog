<script lang="ts" setup>
import { userInfo } from '@/service/home'
import { onMounted } from 'vue'

const getUserInfo = () => {
  userInfo().then(res => {
    console.log(res)
  })
}
onMounted(() => {
  getUserInfo()
})
</script>
<template>
  <el-row class="header-container">
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">2131</el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">3123</el-col>
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">321321</el-col>
  </el-row>
</template>
<style lang="scss" scoped>
.header-container {
  height: 64px;
  width: 100%;
  box-shadow: 0 2px 4px #00000014;
  @media screen and (min-width: 1440px) {

  }
  @media screen and (min-width: 800px) and (max-width: 1440px){

  }
}
</style>