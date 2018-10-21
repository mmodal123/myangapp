import { Injectable } from '@angular/core';

@Injectable()
export class MyservicenameService {
  title: string;
  dept: any[];

  constructor() {

    this.title = 'Stellar Solutions';

    this.dept = [
      {id: 1, name: 'Account'},
      {id: 2, name: 'Admin'},
      {id: 3, name: 'Staff'}
    ];

   }

  display() {

  }

}
