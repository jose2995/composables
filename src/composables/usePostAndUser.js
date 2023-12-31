import {ref} from 'vue'
export default function usePostAndUser(){
    const posts = ref([])
    const post = ref(null)
    const users = ref([])
    const user = ref(null)

    const baseUrlPosts =  'https://jsonplaceholder.typicode.com/posts'
    const baseUrlUsers = 'https://jsonplaceholder.typicode.com/users'
    
    const llegirPosts = async () => {
        const response = await fetch(baseUrlPosts);
        posts.value = await response.json();
    }

    /*Una altra manera de fer-ho es posar les esperes tant de portar el post com
    l'usuari dins de la mateixa funció llegirpost()*/
    const llegirPost = async (id) => {
        const response = await fetch(`${baseUrlPosts}/${id}`);
        post.value = await response.json();

        const response2 = await fetch(`${baseUrlUsers}/${post.value.userId}`)
        user.value = await response2.json();
    }

    const llegirUsers = async () => {
        const response = await fetch(baseUrlUsers)
        user.value = await response.json()
    }

    // const llegirUser = async (id) => {
    //     const response = await fetch(`${baseUrlUsers}/${id}`)
    //     user.value = await response.json()
    // }

    return {
        posts,
        llegirPosts,
        post,
        llegirPost,
        users,
        llegirUsers,
        user,
        // llegirUser
    }
}