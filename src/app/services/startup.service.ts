import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartupService {
  private content: any;

  constructor(private http: HttpClient) { }

  loadContent(): Promise<any> {
    return this.http.get('./assets/content/content.json')
    .toPromise()
    .then((data: any) => {
      this.content = data;
    })
  }

  getContent(): any {
    return this.content;
  }
}
