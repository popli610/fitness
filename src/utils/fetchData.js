export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '614a144cd6msh783d93810b0f16ap15f942jsna42aa15ea415',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '614a144cd6msh783d93810b0f16ap15f942jsna42aa15ea415',
  },
};
export const fetchData = async(url, options) =>{
    const response =  await fetch (url,options);
    const data = await response.json();
    return data;
}