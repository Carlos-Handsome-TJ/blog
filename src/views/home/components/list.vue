<script lang="ts" setup>
</script>
<template>
  <el-row class="list-container-wrapper">
    <el-skeleton :rows="5" animated style="--el-skeleton-circle-size: 50px" class="list-skeleton">
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
    </el-skeleton>
  </el-row>
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