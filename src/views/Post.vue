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
  
  /*Fico en una constant els valors retornats per la funció usePostAndUser
  les quals son el post, la funció asincrona que fa el get per agafar la informació del post, 
  el usuari i la funció asincrona que fa el get per agafar la informació del post*/
  const {post,llegirPost, user} = usePostAndUser()

  /*Com que la funció llegirUser necesita com a entrada de paràmetre una propietat
  de l'objecte post i la funció llegirPost es asincrona, triga una mica en agafar el 
  el post indicat, la funcíó llegirUser no es pot executar al mateix temps que llegirPost
  (ja que encara no li ha arribat cap valor de llegirPost), llavors s'ha de fe un .then(()=>{...})
  amb la funció que volem que executi just després de que llegirPost hagi agafat el post indicat.*/

  // llegirPost(postId).then(()=>{
  //   llegirUser(post.value.userId)   --> Aquest codi funciona també
  // })

    llegirPost(postId)

</script>
