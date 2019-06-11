<template>
  <header class="p-4 bg-github flex flex-row flex-no-wrap text-sm">
    <div class="mr-4 self-stretch">
      <router-link :to="{ name: 'github' }">
        <svg fill="#ffffff" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      </router-link>
    </div>
    <div class="mr-4 self-stretch flex flex-auto flex-row items-center flex-no-wrap">
      <div class="header-search mr-4 relative">
        <div class="relative">
          <form>
            <label class="flex p-0 items-center justify-between relative border-0 shadow-none text-white w-full max-w-full align-middle outline-none rounded header-search-wrapper input-sm">
              <input type="text" class="w-full py-0 px-2 border-0 shadow-none bg-transparent input-sm" placeholder="Search or jump to...">
              <img src="@/assets/images/search-key-slash.svg" class="mr-2">
            </label>
          </form>
        </div>
      </div>
      <nav class="flex flex-row text-white">
        <a href="#" class="mr-4 font-semibold">Pull requests</a>
        <a href="#" class="mr-4 font-semibold">Issues</a>
        <a href="#" class="mr-4 font-semibold">Marketplace</a>
        <a href="#" class="mr-4 font-semibold">Explore</a>
      </nav>
    </div>
    <div class="mr-4 self-stretch flex items-center">
      <a href="#" class="relative">
        <span class="w-3 h-3 rounded-full bg-blue-600 absolute border-2 border-github" style="top: -6px; right: -6px"></span>
        <svg fill="#ffffff" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
      </a>
    </div>
    <div class="mr-4 self-strech flex items-center">
      <a href="#" class="relative flex items-center">
        <svg fill="#ffffff" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
      </a>
    </div>
    <div class="mr-0 self-strech flex items-center">
      <img src="https://avatars1.githubusercontent.com/u/21014225?s=40&v=4" class="w-5 h-5 rounded leading-none overflow-hidden">
    </div>
  </header>
</template>

<script>
export default {
  name: 'GitHubNav'
}
</script>

<style scoped>
.header-search {
  min-width: 300px;
}

.header-search-wrapper {
  background-color: hsla(0,0%,100%,.125);
}

.input-sm {
  line-height: 20px;
  min-height: 28px;
}
</style>
