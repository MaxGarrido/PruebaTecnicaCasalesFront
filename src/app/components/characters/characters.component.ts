import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paginado } from 'src/app/models/paginado';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/core/services/character-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{

  page = 1;
  response?: Paginado<Character>;

  constructor(private service: CharacterService, private router: Router) {}

  ngOnInit(): void {
    this.loadCharacters(this.page);
  }

  loadCharacters(page: number): void {
    this.service.getCharactersPaged(this.page).subscribe(res => this.response = res);
  }

  nextPage(): void {
    this.page++;
    this.loadCharacters(this.page);
  }

  prevPage(): void {
    this.page--;
    this.loadCharacters(this.page);
  }

  goToDetail(id: number):void {
    this.router.navigate(['/characters', id]);
  }
}
