<template>
  <div>
    <h1>メモアプリ</h1>
    <ul>
      <memoList></memoList>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import memoList from '@/components/MemoList.vue'

export default {
  name: 'List',
  components: {
    memoList
  }
}
</script>
