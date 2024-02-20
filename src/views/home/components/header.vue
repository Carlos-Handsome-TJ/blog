<script lang="ts" setup>
import { userInfo } from '@/service/home'
import { onMounted, ref } from 'vue'
import Search from '@/views/home/components/search.vue'

const avatarUrl = ref<string>('')
const getUserInfo = () => {
  userInfo().then(res => {
    const { userPic } = res.data
    avatarUrl.value = userPic
  })
}
onMounted(() => {
  getUserInfo()
})
</script>
<template>
  <el-row class="header-container">
    <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
      <div flex justify-between>
        <div w-full>logo</div>
        <div w-2xl pr-10>
          <Search />
        </div>
      </div>
    </el-col>
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="header-nav-list">
      <div cursor="pointer">
        <el-avatar :src="avatarUrl" />
      </div>
      <div>
        <el-badge :value="3" class="item">
          <div class="header-icon">
            <i-uiw-notification></i-uiw-notification>
            <span>消息</span>
          </div>
        </el-badge>
      </div>
      <div class="header-icon">
        <i-uiw-time-o></i-uiw-time-o>
        <span>历史</span>
      </div>
      <div class="header-icon">
        <i-uiw-folder></i-uiw-folder>
        <span>分类</span>
      </div>
      <div>
        <el-button type="primary">
          <i-ep-upload p-r="5" font-size="5" />
          投稿
        </el-button>
      </div>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
.header-container {
  height: 64px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 4px #00000014;
  display: flex;
  align-items: center;

  .header-nav-list {
    height: 50px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    gap: 20px;

    .header-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      & > span {
        padding-top: 5px;
        font-size: 14px;
        color: var(--header-color-text);
      }
    }
  }
}
</style>