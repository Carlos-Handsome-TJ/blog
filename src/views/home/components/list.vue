<script lang="ts" setup>
import { ref } from 'vue'

const emptyListArr = ref(5)
const isLoading = ref<boolean>(true)

</script>
<template>
  <div class="list-container-wrapper">
    <el-skeleton
      :rows="5"
      animated
      style="--el-skeleton-circle-size: 50px"
      class="list-skeleton"
      v-for="(_, index) in emptyListArr"
      :key="index"
      :loading="isLoading"
      mb2.5
    >
      <template #template>
        <el-row :gutter="20" flex items-center>
          <el-col :span="4">
            <el-skeleton-item variant="circle" />
          </el-col>
          <el-col :span="10">
            <el-skeleton-item />
          </el-col>
        </el-row>
        <div class="list-skeleton-item">
          <el-skeleton-item pt3 />
          <el-skeleton-item pt3 />
          <el-skeleton-item pt3 />
          <el-skeleton-item pt3 />
        </div>
      </template>
      <template #default>
        <el-row>
          <el-col :span="4">
            <el-avatar></el-avatar>
          </el-col>
          <el-col :span="20">
            <span>用户名称</span>
          </el-col>
        </el-row>
      </template>
    </el-skeleton>
  </div>
</template>
<style lang="scss" scoped>
.list-container-wrapper {
  width: 100%;

  .list-skeleton {
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    background: #fff;

    .list-skeleton-item {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>