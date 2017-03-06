/**
 * Created by veladii on 3/3/17.
 */
export class User {

  id: number;
  username: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
