import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class UsersService {

url = 'https://api.jsonbin.io/b/5ef7365de2ce6e3b2c7a9930';

constructor(private http: HttpClient) { }

getUserData(){
  return this.http.get(this.url)
}

}
