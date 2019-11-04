import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setZoom(zoom: any) {
    sessionStorage['zoom'] = zoom;
  }

  getZoom() {
    return sessionStorage['zoom'];
  }

}
