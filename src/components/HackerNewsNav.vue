<template>
  <header class="bg-hackernews p-1 flex flex-row items-center">
    <router-link :to="{ name: 'hackernews' }" class="pr-1">
      <img class="border border-white" src="@/assets/images/yc.gif" alt="yc-logo">
    </router-link>
    <nav class="flex flex-col flex-1 sm:flex-row sm:items-center mx-1">
      <span class="font-bold text-sm leading-none mr-2">Hacker News</span>
      <ul class="flex flex-row text-xs flex-wrap">
        <li class="pr-1"><a href="#">new |</a></li>
        <li class="pr-1"><a href="#">past |</a></li>
        <li class="pr-1"><a href="#">comments |</a></li>
        <li class="pr-1"><a href="#">ask |</a></li>
        <li class="pr-1"><a href="#">shows |</a></li>
        <li class="pr-1"><a href="#">jobs |</a></li>
        <li><a href="#">submit</a></li>
      </ul>
    </nav>
    <a href="#" class="text-xs pr-1">login</a>
  </header>
</template>

<script>
export default {
  name: 'HackerNewsNav'
}
</script>
