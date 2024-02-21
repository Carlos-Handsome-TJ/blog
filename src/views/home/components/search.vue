<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const isShowSearchList = ref<boolean>(false)
const searchVal = ref<string>('')
const searchRecommend = ref<string>('推荐搜索词')
const searchHistoryList = ref<(string)[]>([])
const showCloseIcon = ref<boolean>(false)
const clearHistory = (e: Event) => {
  e.preventDefault()
  searchHistoryList.value = []
  localStorage.removeItem('searchHistoryList')
}
const search = (e: Event) => {
  e.preventDefault()
  if (searchVal.value) {
    // 保存搜索历史
    searchHistoryList.value.unshift(searchVal.value)
    localStorage.setItem('searchHistoryList', JSON.stringify(searchHistoryList.value))
  }
}
const showHistoryList = () => {
  searchHistoryList.value = JSON.parse(localStorage.getItem('searchHistoryList') || '[]')
}
const removeTags = (e: Event, val: string) => {
  e.preventDefault()
  searchHistoryList.value = searchHistoryList.value.filter(item => item !== val)
}
const showCloseTag = () => {
  showCloseIcon.value = true
}
const hideCloseTag = () => {
  showCloseIcon.value = false
}
onMounted(() => {
  showHistoryList()
})
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
        @keyup.enter="search"
        clearable
      >
      </el-input>
      <el-button type="text" @mousedown="search">
        <i-uiw-search />
      </el-button>
    </div>
    <div v-show="isShowSearchList" class="search-list" p-2 box-border>
      <div flex justify-between w-full items-center>
        <span>搜索历史</span>
        <el-button type="text" @mousedown="clearHistory">清空</el-button>
      </div>
      <div class="search-list-container">
        <el-tag
          v-for="(item, index) in searchHistoryList"
          :key="index"
          relative
          cursor-pointer
          @mouseenter="showCloseTag"
          @mouseleave="hideCloseTag"
        >
          <i-uiw-circle-close v-if="showCloseIcon" @mousedown="(e: Event) => removeTags(e, item)"
                              class="search-tag-close" />
          {{ item }}
        </el-tag>
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

    .search-list-container {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;

      .search-tag-close {
        cursor: pointer;
        position: absolute;
        right: -5px;
        top: -5px;
        color: #e3e5e7;
      }
    }
  }
}
</style>