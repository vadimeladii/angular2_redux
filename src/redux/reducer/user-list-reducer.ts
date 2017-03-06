import {USERS, ADD_USER} from "../actions/user-list-actions";

export interface IUser {
  id: number
  username: string;
}

export interface UserState extends Array<IUser> {
}

export default function userListReducer(state: UserState = [],
                                        action): UserState {
  switch (action.type) {
    case USERS:
      return [
        {
          id: action.id,
          username: action.username
        },
        ...state,
      ];
    case ADD_USER:
      return [
        {
          id: action.id,
          username: action.username
        },
        ...state,
      ];
    default:
      return state;
  }
};
