<template>
  <div id="hackernews" class="mx-auto sm:my-2 sm:w-5/6 w-full">
    <HackerNewsNav />
    <div class="stories bg-gray-100 p-1">
      <HackerNewsList :stories="stories" v-if="!loading"/>
    </div>
  </div>
</template>

<script>
import { hackernewsAPI } from '@/api'
import HackerNewsNav from '@/components/HackerNewsNav'
import HackerNewsList from '@/components/HackerNewsList'

export default {
  name: 'HackerNews',
  components: { HackerNewsNav, HackerNewsList },
  data () {
    return {
      stories: [],
      error: undefined,
      loading: true
    }
  },
  metaInfo: {
    title: 'Hackernews | Clones'
  },
  async created () {
    try {
      const response = await hackernewsAPI.get('/topstories.json')
      const topStoriesIds = response.data.slice(0, 30)
      topStoriesIds.map(async id => {
        const response = await hackernewsAPI.get(`/item/${id}.json`)
        this.stories.push(response.data)
      })
      this.loading = false
    } catch (error) {
      this.error = error
    }
  }
}
</script>
