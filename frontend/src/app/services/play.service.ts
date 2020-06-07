import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayLambda } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  private url = 'https://ki4i76iuh8.execute-api.us-west-2.amazonaws.com/dev';

  constructor(private readonly http: HttpClient) {}

  public playLambda(): Observable<PlayLambda> {
    return this.http.get<PlayLambda>(`${this.url}/playLambda`);
  }

  public getGoogleFrameworks(): Observable<object> {
    return this.http.get<any>(`${this.url}/playGoogle`);
  }
}
