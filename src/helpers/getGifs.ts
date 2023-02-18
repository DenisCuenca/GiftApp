export const getGifts = async(category : any) => {

    const api = "8lwfzyf44VgiIezQB1uFpZKd1DqtzS2b"
      
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${category}&limit=10`;
    
      const resp = await fetch(url);
      
      const {data} = await resp.json();
    
      
      
      const gifts = data.map( (img : any)  => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      } ))
      
      
      
      return gifts;
    }