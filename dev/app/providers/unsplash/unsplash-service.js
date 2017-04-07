import  { API_KEY_CONFIG } from '../../providers/unsplash/apiKey_config';

export class UnsplashService{

  constructor(){
    this.data = [];
    this.params = API_KEY_CONFIG
    this.queryUrl = 'https://api.unsplash.com/photos/random?count=1&client_id='
    console.log('hello UnsplashService!')
  }

  getRandomImg(){
      //Return a new promise.
      return new Promise((resolve, reject)=> {
        // Do the usual XHR stuff
        // Ici, la requête sera émise de façon synchrone.
          let req = new XMLHttpRequest();
          req.open('GET', this.queryUrl+this.params.client_id, true);

          req.onload = () =>{

            if(req.status==200){
              resolve(req.responseText)
            }
            else{
              reject(Error(req.statusText));
            }
          };

          req.onerror = () => {
            reject(Error("Network error"))
          };

          req.send();
      });
  }
}
