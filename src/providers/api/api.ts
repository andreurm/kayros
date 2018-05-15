import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  //url: string = 'http://localhost/projects/kayros/web/publish';
  url: string = 'http://www.andreurm.cat/kayrosws';
  access_token: string;
  constructor(public http: HttpClient) {
  }


  private setOAuthHeaders(res) {
    this.access_token = res.success.access_token;
  }

  loginOauth(accountInfo) {

    let seq = this.post('users/oAuthLogin.json', accountInfo).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.success) {
        this.setOAuthHeaders(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }
    reqOpts.params = reqOpts.params.set('access_token', this.access_token);
    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
   
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }
    reqOpts.params = reqOpts.params.set('access_token', this.access_token);
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}
