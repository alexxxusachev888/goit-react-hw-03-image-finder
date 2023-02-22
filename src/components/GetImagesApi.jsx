

export function getImagesFromPixabay(query, page) {
   const API_KEY = '14167175-fc0e53a7a7b8f01fb7f615bad';

    return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(resp => {

        if(resp.ok) {
          return resp.json()
        }

          return Promise.reject(new Error(`Can't find images with the name ${query}`))
        }) 
}