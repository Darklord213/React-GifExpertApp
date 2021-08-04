
export const getGif=async (category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=glDw44pyHQB7gz2Ub0CMs97L4JR6tWld`;
    const resp= await fetch(url);
    const {data}=await resp.json();
    
    const gifs=data.map(img =>
        {
            return {
                id:img.id,
                title:img.title,
                url: img.images?.downsized_medium.url
            }
    })

console.log(gifs);
return gifs;
}