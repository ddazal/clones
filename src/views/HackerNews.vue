<template>
  <div id="hackernews" class="container mx-auto sm:my-2 sm:px-12">
    <HackerNewsNav />
  </div>
</template>

<script>
import HackerNewsNav from '@/components/HackerNewsNav'

export default {
  name: 'HackerNews',
  components: { HackerNewsNav }
}
</script>
