<template>
  <div id="githug">
    <GitHubNav />
  </div>
</template>

<script>
import GitHubNav from '@/components/GitHubNav'
import { githubAPI } from '@/api'

export default {
  name: 'GitHub',
  components: { GitHubNav },
  data () {
    return {
      repo: undefined
    }
  },
  metaInfo: {
    title: 'GitHub | Clones'
  },
  async created () {
    const { data } = await githubAPI.get('/repos/vuejs/vue')
    this.repo = data
  }
}
</script>
