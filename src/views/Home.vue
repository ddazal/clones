<template>
  <div id="homepage">
    <p>Homepage</p>
    <router-link :to="{ name: 'hackernews' }" class="underline mr-4">Hacker News</router-link>
    <router-link :to="{ name: 'github' }" class="underline">GitHub</router-link>
  </div>
</template>
