<template>
  <div class="stories bg-gray-100 p-1">
    <HackerNewsItem
      v-for="(story, index) in stories"
      :index="index"
      :story="story"
      :key="story.id"
    />
    <span class="text-xs pl-10">More</span>
    <div class="border-t-2 border-hackernews my-2"></div>
  </div>
</template>

<script>
import HackerNewsItem from '@/components/HackerNewsItem'

export default {
  name: 'HackerNewsList',
  components: { HackerNewsItem },
  props: {
    stories: {
      type: Array,
      required: true
    }
  }
}
</script>
