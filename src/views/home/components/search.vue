<script lang="ts" setup>
import { ref } from 'vue'

const isShowSearchList = ref<boolean>(false)
const searchVal = ref<string>('')
const searchRecommend = ref<string>('推荐搜索词')
const clearHistory = (e) => {
  e.preventDefault()
  localStorage.removeItem('searchHistoryList')
}
</script>
<template>
  <div class="search-container">
    <div
      :class="{'search-input-area-focus' : isShowSearchList, 'search-input-area': !isShowSearchList}"
    >
      <el-input
        v-model="searchVal"
        @focus="isShowSearchList = true"
        @blur="isShowSearchList = false"
        :placeholder="searchRecommend"
        clearable
      >
      </el-input>
      <el-button type="text">
        <i-uiw-search></i-uiw-search>
      </el-button>
    </div>
    <div v-show="isShowSearchList" class="search-list">
      <div flex justify-between w-full items-center p-2 box-border>
        <span>搜索历史</span>
        <el-button type="text" @mousedown="clearHistory">清空</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-container {
  position: relative;
  box-sizing: border-box;
  height: 64px;
  display: flex;
  align-items: center;
  .search-input-area {
    width: 100%;
    display: flex;
    gap: 15px;
    padding: 5px;
    align-items: center;
    border-radius: 5px;
    box-sizing: border-box;
    background: #e3e5e7;
    :deep(.el-input__wrapper) {
      background: #e3e5e7;
      box-shadow: none;
    }
  }

  .search-input-area-focus {
    width: 100%;
    display: flex;
    gap: 15px;
    padding: 5px 5px 0 5px;
    background-color: #fff;
    border-radius: 5px 5px 0 0;
    border: 1px solid #eee;
    border-bottom: 0;
    box-sizing: border-box;
    transition: .005s;

    :deep(.el-input__wrapper) {
      width: 200px;
      background: #e3e5e7;
      box-shadow: none;
    }

    :deep(.is-focus) {
      background: #e3e5e7;
    }
  }

  .search-list {
    position: absolute;
    top: 50px;
    width: 100%;
    height: 500px;
    background: #fff;
    border: 1px solid #eee;
    z-index: 1000;
    box-sizing: border-box;
    border-top: none;
  }
}
</style>