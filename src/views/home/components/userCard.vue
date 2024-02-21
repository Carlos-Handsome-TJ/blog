<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { userInfo } from '@/service/home'

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
  <el-row>
    <el-col :span="8"></el-col>
    <el-col :span="16">
      <div class="user-card-container">
        <div flex pr content-center w-full>
          <el-avatar :size="50" :src="avatarUrl"></el-avatar>
          <div class="user-profile">
            <div font-600 class="user-card-name">用户名</div>
            <div w-full>
              <span class="user-card-tag">用户tag</span>
            </div>
          </div>
        </div>
        <div pt-6 flex justify-between>
          <div flex flex-col items-center>
            <span font-600>44</span>
            <span pt2 color="#9499a0" font-size="3.2">关注</span>
          </div>
          <div flex flex-col items-center>
            <span font-600>44</span>
            <span pt2 color="#9499a0" font-size="3.2">粉丝</span>
          </div>
          <div flex flex-col items-center>
            <span font-600>44</span>
            <span pt2 color="#9499a0" font-size="3.2">文章</span>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
.user-card-container {
  width: 100%;
  height: 144px;
  background: #fff;
  border-radius: 5px;
  padding: 20px 16px;
  color: var(--font-color-main);
  box-sizing: border-box;

  .user-profile {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .user-card-name {
      font-size: 15px;
      color: var(--font-color-user-name);
    }

    .user-card-tag {
      display: inline-block;
      font-size: 12px;
      padding: 4px;
      border-radius: 4px;
      background: var(--font-color-user-name);
      color: #fff;
    }
  }
}
</style>