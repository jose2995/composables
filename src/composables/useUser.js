import {ref} from 'vue';
export default function useUser(){
    const user = ref(null)
    const baseUrl = 'https://jsonplaceholder.typicode.com/users'
    const llegirUser = async (id) => {
        const response = await fetch(`${baseUrl}/${id}`)
        user.value = await response.json()
    }

    return{
        user,
        llegirUser
    }
}