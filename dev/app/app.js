
import { HomePage } from './pages/home/home';
import { UserPage } from './pages/user/user';
import { StorageService } from './providers/storage/storage-service';

class MyApp {

  constructor(){
    this.appBody = document.getElementsByTagName("app")[0];
    this.storage = new StorageService();
    this.storage.loadData()
  }

  start(){
    if(this.storage.isAuth()){
      console.log('user is auth-> ',this.storage.db[0].user)
      new UserPage(this.appBody,this.storage)
    }
    else {
      console.log('user is not auth-> ',this.storage.db[0])
      // init HomePage
      let homePage = new HomePage(this.appBody, this.storage);
    }
  }

}

let myApp = new MyApp();
myApp.start();
