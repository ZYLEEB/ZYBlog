import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  frontendListFlag:boolean = false;
  backendListFlag:boolean=false;

  public frontendListFlagBehavior = new BehaviorSubject(this.frontendListFlag);
  sharedFrontendListFlag = this.frontendListFlagBehavior.asObservable();
  public backendListFlagBehavior = new BehaviorSubject(this.backendListFlag);
  sharedBackendListFlag = this.backendListFlagBehavior.asObservable();

  constructor() {
    this.sharedFrontendListFlag.subscribe(flag=>this.frontendListFlag=flag);
    this.sharedBackendListFlag.subscribe(flag=>this.backendListFlag=flag);

   }
}
