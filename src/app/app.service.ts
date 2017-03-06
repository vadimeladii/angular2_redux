import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response, Headers} from "@angular/http";
import {User} from "../redux/actions/entity/User";

@Injectable()
export class AppService {

  constructor(private http: Http) {
  }

  public getAll(): Observable<Array<User>> {
    return this.http.get("http://localhost:3000/users")
      .map(this.extractUsers);
  }

  private extractUsers(response: Response) {
    const array: Array<User> = [];
    response.json().forEach(user => {
      array.push(new User({id: user.id, username: user.username}));
    });
    return array;
  }

  public addUser(user) {
     this.http.post("http://localhost:3000/users" , user)
  }
}
