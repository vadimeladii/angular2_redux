import {Component, OnInit} from '@angular/core';
import {NgRedux, DevToolsExtension, select} from "ng2-redux";
import {CounterActions} from "../redux/actions/counter-actions";
import {Observable} from "rxjs";
import {rootReducer} from "../redux/reducer/index";
import {UserListActions} from "../redux/actions/user-list-actions";
import userListReducer from "../redux/reducer/user-list-reducer";
import {IUser} from "../redux/reducer/user-list-reducer";
import {User} from "../redux/actions/entity/User";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {

  title = 'Redux';

  users: Array<User> = [];
  newUser: User = new User();


  counter$: Observable<number>;
  userList$: Observable<IUser>;

  constructor(private ngRedux: NgRedux<any>,
              public userListActions: UserListActions,
              private appService: AppService) {
    let middlewares = [];
    let enhancers = [];
    let initialState = {};

    ngRedux.configureStore(rootReducer, initialState, middlewares, enhancers);
  }

  ngOnInit(): void {
    this.counter$ = this.ngRedux.select('counter');
    this.userList$ = this.ngRedux.select('userListReducer');
    this.appService.getAll().subscribe(
      users => users.forEach(user => {
        this.userListActions.getUser(user.id, user.username);
      }),
      error => console.log(error)
    );
  }

  addUser() {
    console.log(this.newUser);

    this.appService.addUser({id: 3,username :"denisdenis"});

    this.appService.getAll().subscribe(
      users => users.forEach(user => {
        this.userListActions.getUser(user.id, user.username);
      }),
      error => console.log(error)
    );
    this.newUser= new User();
  }
}
