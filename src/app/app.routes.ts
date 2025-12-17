import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { HomeComponent } from './components/home/home.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { LocationsComponent } from './components/locations/locations.component';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path: 'characters',
        component: CharactersComponent
    },
    {
        path: 'episodes',
        component: EpisodesComponent
    },
    {
        path: 'locations',
        component: LocationsComponent
    },
    {
        path: '**', redirectTo: ''
    }
];