import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from 'src/app/models/location';
import { Paginado } from 'src/app/models/paginado';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly apiUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {}

  getLocationsPaged(page: number): Observable<Paginado<Location>> {
    return this.http.get<Paginado<Location>>(
      `${this.apiUrl}/locations?page=${page}`
    );
  }
}