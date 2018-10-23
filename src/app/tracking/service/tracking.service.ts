import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Tracking } from '../model/tracking';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  baseUrl: string;

  constructor(private http: Http) { 
    this.baseUrl = "http://localhost:2020/tracking";
  }

  getBaseUrlByOid(oid: number): string {
    return this.baseUrl + "/" + oid;
  }

  getSearchUrl(field: string, value: string): string {
    return this.baseUrl + "/" + field + "/" + value;
  }

  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

  searchTrackings(field: string, value: string): Observable<Tracking[]> {
    return this.http.get(this.getSearchUrl(field,value)).pipe(
      map(data => data.json())
    );
  }

  getTrackingByOid(oid : number): Observable<Tracking> {
    return this.http.get(this.getBaseUrlByOid(oid)).pipe(
      map(data => data.json())
    );
  }
}
