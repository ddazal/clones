<template>
  <div class="story mb-2 font-light">
    <div class="flex flex-row">
      <span class="story-rank text-sm text-gray-700">{{ index + 1 }}.</span>
      <div class="upvote w-0 h-0 border-gray-500 mx-1 pt-1"></div>
      <div class="story-info">
        <div class="story-title leading-none">
          <a :href="story.url" rel="noopener noreferrer" target="_blank">{{ story.title }} </a>
          <span class="text-xs text-gray-700"><a :href="story.url" rel="noopener noreferrer" target="_blank" class="hover:underline">({{ story.url | host }})</a></span>
        </div>
        <span class="text-gray-700 text-xs">{{ story.score }} points by {{ story.by }} {{ story.time | fromNow }} | hide | {{ story.descendants }} comments</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'HackerNewsItem',
  props: {
    story: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    }
  },
  filters: {
    host (url) {
      const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
      const parts = host.split('.').slice(-3)
      if (parts[0] === 'www') parts.shift()
      return parts.join('.')
    },
    fromNow (time) {
      return moment(time * 1000).fromNow()
    }
  }
}
</script>

<style>
.upvote {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom-width: 7px;
}
</style>
