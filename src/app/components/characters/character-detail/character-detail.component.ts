import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from 'src/app/models/character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/core/services/character-service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit{

  character!: Character;
  loading = true;

  constructor(private route: ActivatedRoute, private characterService:  CharacterService) {
  }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.characterService.getCharactedById(id).subscribe(response => {
      this.character = response;
      this.loading = false;
    });
  }
}
