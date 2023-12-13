<template>
  <div v-if="post && user"> 
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
  import { useRoute } from 'vue-router';
  // import usePost from '../composables/usePost.js'
  // import useUser from '../composables/useUser.js'
  import  usePostAndUser  from '../composables/usePostAndUser.js';

  const route = useRoute()
  const postId = route.params.id
  const userId = route.params.userId
  

  // const {post,llegirPost} = usePost()   --> Utilitzant un composable per Post/Posts
  // llegirPost(postId)

  // const {user,llegirUser} = useUser()   --> Utilitzant un composable per User/Users
  // llegirUser(userId)


  // Ara utilitzant un composable per Post/Posts i User/Users
  const {post,llegirPost,user,llegirUser} = usePostAndUser()
  llegirPost(postId)
  llegirUser(userId)

</script>
