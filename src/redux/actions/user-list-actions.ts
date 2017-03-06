import {Injectable, OnInit} from "@angular/core";
import {NgRedux} from "ng2-redux";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "./entity/User";

export const USERS = 'USERS';
export const ADD_USER = 'ADD_USER';

@Injectable()
export class UserListActions {

  users: Array<User> = [];

  constructor(private ngRedux: NgRedux<any>) {
  }

  public getUser(id, username) {
    this.ngRedux.dispatch({
      type: USERS,
      id: id,
      username: username
    })
  }

  public addUser(id, username) {
    this.ngRedux.dispatch({
      type: ADD_USER,
      id: id,
      username: username
    })
  }
}
