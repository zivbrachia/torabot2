import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatManagerService {

  serverUrl = 'https://8aa313da.ngrok.io/' ;
  // serverUrl = 'http://localhost:5000/';

  constructor(private http: Http) { }

  sendText(dataObj): Observable<any> {
    const bodyMsg = {
      msg:dataObj.msg,
      user:dataObj.user,
      id:dataObj.id
    }
    return this.http.post(this.serverUrl + 'webhook', bodyMsg)
        .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
        .catch(this.handleError)

  }


  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
