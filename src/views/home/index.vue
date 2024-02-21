<script lang='ts' setup>
import Header from '@/views/home/components/header.vue'
import UserCard from '@/views/home/components/userCard.vue'
import List from '@/views/home/components/list.vue'

</script>
<template>
  <div class="home-container-wrapper" h-full>
    <Header />
    <div class="home-wrapper" h-full>
      <el-row :gutter="10" pt-2>
        <el-col :xs="6" :sm="6" :md="8" :lg="8" :xl="8">
          <UserCard />
        </el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
          <List />
        </el-col>
        <el-col :xs="6" :sm="6" :md="8" :lg="8" :xl="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.home-container-wrapper {
  width: 100%;
  height: 100%;

  .home-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    background-image: url('https://s1.hdslb.com/bfs/static/stone-free/dyn-home/assets/bg.png@1c.avif');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }
}


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
  height: 1000px;
}

.grid-content {
  border-radius: 4px;
  min-height: 50px;
}
</style>