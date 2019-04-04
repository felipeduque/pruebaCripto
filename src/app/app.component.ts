import { Component, OnInit, NgZone } from '@angular/core';
// import { AccountsService } from './ethereum/eth.service';
import { Observable } from 'rxjs';

// NGRX
// import { Store, select } from '@ngrx/store';
// import { EthState, GetAccounts, getAccounts } from './ethereum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public addresses$: Observable<string[]>;
  public addresses: string[];
 
  constructor() {}
    // private eth: AccountsService
    // , private store: Store<EthState>
    // , private zone: NgZone
 
  // ngOnInit() {
  //   //this.address$ = this.eth.currentAccount();
  //   // this.store.dispatch( new GetAccounts() );
  //   // this.addresses$ = this.store.pipe(select(((getAccounts))));
  // }
} 
