import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 private username:string ;
 private client_id = "d88dcbccad6e658367cc";
 private client_secret = "c36aa490978b30fadef75658bc2e61e837744550";

  constructor(private http:HttpClient) { 
    console.log("Service is now ready");
    this.username = "kilitasha435";
  }

getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret )
  .pipe(map(res =>res));
 }

 getprofileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret )
  .pipe(map(res =>res));
 }

 updateProfile(username:string){
   this.username= username ;
 }
}
