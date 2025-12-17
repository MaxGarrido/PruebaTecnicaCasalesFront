import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paginado } from 'src/app/models/paginado';
import { LocationService } from 'src/app/core/services/location-service';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  page = 1;
  response?: Paginado<Location>;
  

  constructor(private service: LocationService) {}

  ngOnInit(): void {
    this.loadLocations(this.page);
  }

  loadLocations(page: number): void {
    this.service.getLocationsPaged(this.page).subscribe(res => this.response = res);
  }

  nextPage(): void {
    this.page++;
    this.loadLocations(this.page);
  }

  prevPage(): void {
    this.page--;
    this.loadLocations(this.page);
  }
}
