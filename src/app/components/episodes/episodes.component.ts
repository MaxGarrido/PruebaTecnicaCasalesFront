import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Episode } from 'src/app/models/episode';
import { EpisodeService } from 'src/app/core/services/episode-service';
import { Paginado } from 'src/app/models/paginado';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent {
  page = 1;
  response?: Paginado<Episode>;

  constructor(private service: EpisodeService) {}

  ngOnInit(): void {
    this.loadEpisodes(this.page);
  }

  loadEpisodes(page: number): void {
    this.service.getEpisodesPaged(this.page).subscribe(res => this.response = res);
  }

  nextPage(): void {
    this.page++;
    this.loadEpisodes(this.page);
  }

  prevPage(): void {
    this.page--;
    this.loadEpisodes(this.page);
  }
}
