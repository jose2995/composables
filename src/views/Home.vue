<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import PostCard from "../components/PostCard.vue";
import usePostAndUser from "../composables/usePostAndUser.js"

  //Utilitzant un composable per a Post(Posts/User/Users)
  const  {posts, llegirPosts} = usePostAndUser()
  llegirPosts()
</script>
