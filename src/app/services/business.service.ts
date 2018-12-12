import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  currentArticle: any;
  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
