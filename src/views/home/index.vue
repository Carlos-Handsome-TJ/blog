<script lang='ts' setup>
import Header from '@/views/home/components/header.vue'
</script>
<template>
  <Header></Header>
  <el-row :gutter="0">
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
</template>
<style lang='scss' scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
  height: 800px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 50px;
}
</style>