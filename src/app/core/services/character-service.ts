import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character';
import { Paginado } from 'src/app/models/paginado';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly apiUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {}

  getCharactersPaged(page: number): Observable<Paginado<Character>> {
    return this.http.get<Paginado<Character>>(
      `${this.apiUrl}/characters?page=${page}`
    );
  }

  getCharactedById(id: number): Observable<Character> {
    return this.http.get<Character>(
    `${this.apiUrl}/${id}`
    );
  }
}