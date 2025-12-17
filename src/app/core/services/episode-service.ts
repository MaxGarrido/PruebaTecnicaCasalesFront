import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/models/episode';
import { Paginado } from 'src/app/models/paginado';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private readonly apiUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {}

  getEpisodesPaged(page: number): Observable<Paginado<Episode>> {
    return this.http.get<Paginado<Episode>>(
      `${this.apiUrl}/episodes?page=${page}`
    );
  }
}