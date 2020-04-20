import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

   private username:string;
  //  private client_id = "0ddd798ddad906269c18";
   private client_secret = " 91f04505724adfb30fb971d543cdb21688bf139c";

  constructor(private http:HttpClient) { 
    console.log("Service is now ready!");
    this.username = "AkinyiOwuor";
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username)
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_secret="+ this.client_secret)
  }
  updateProfile(username:string){
    this.username = username;
  }
}
