import {ref} from 'vue'
export default function usePost(){
    const posts = ref([])
    const post = ref(null)
    const baseUrl =  'https://jsonplaceholder.typicode.com/posts'

    /*Exercici 2 part comuna: Per a obtenir els posts, necesitem fer una 
    funció asincrona que demanará la petició a la direcció https de l'api amb el llistat
    del posts, en auqest cas https://jsonplaceholder.typicode.com/posts*/

    /*Exercici 3 part comuna: Necesitem una variable del tipus llista per emmagatzemar tots els 
    posts recollits de l'API. Aquesta variable si té que ser referencial perquè necesitem que per
    a cada post de la llista de posts que selecciona el v-for, aquest imprimeixi dinamicament cada un dels posts
    a la web.
    L'ús de referenciar variables perque siguin reactives s'utilitza a composition api amb setup 
    dins de l'etiqueta script, si utilitzéssim option api no faria falta perque la funció data 
    on es creen les svariables ja les fa reactives*/

    /*Exercici 5 part comuna:  llegirPosts() sera una funció async. Les funcions async son funcions asíncrones, aquestes funcions 
    s'executen en segon pla així el programna pot seguir contestant altres events mentres s'executa la funció asíncrona en comptes 
    d'esperar a que hagi acabat. A continuació crea una constant response i la iguala a await fetch(baseUrl), això vol dir que la funció 
    quedarà en pausa fins que la promesa o fetch no retorni la resposta de la promesa anterior. Finalment utilitza un await de nou pero 
    per transformar la variable anterior response a .json() e inttroduirla a la variable reactiva posts.value*/

    const llegirPosts = async () => {
        const response = await fetch(baseUrl);
        posts.value = await response.json();
    }

    const llegirPost = async (id) => {
        const response = await fetch(`${baseUrl}/${id}`);
        post.value = await response.json();
    }

    return {
        posts,
        llegirPosts,
        post,
        llegirPost
    }
}

