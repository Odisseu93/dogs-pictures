const baseUrl = "https://dog.ceo/api";

axios.defaults.baseURL = baseUrl /* Global axios defaults */


async function getPicturesSrc(url) {

  const Axiosinstance = axios;
  
  const retorno = await Axiosinstance({
    method: 'get',
    url: url,
    responseType: 'json'
  })
    .catch(function(e) {
      throw Error(e)
    });

return retorno
}
  

