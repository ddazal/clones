<template>
  <div id="hackernews" class="mx-auto sm:my-2 sm:w-5/6 w-full">
    <HackerNewsNav />
  </div>
</template>

<script>
import HackerNewsNav from '@/components/HackerNewsNav'

export default {
  name: 'HackerNews',
  components: { HackerNewsNav },
  metaInfo: {
    title: 'Hackernews | Clones'
  }
}
</script>
