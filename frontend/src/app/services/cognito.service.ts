import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  constructor(private http: HttpClient) {}

  public postmanCallbackUrl() {
    const body = {};
    return this.http.post('https://oauth.pstmn.io/v1/callback', body);
  }
}
