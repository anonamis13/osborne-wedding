import { ExploreCincinnatiComponent } from './explore-cincinnati/explore-cincinnati.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { RegistryComponent } from './registry/registry.component';
import { WeddingDetailsComponent } from './wedding-details/wedding-details.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent

    },
    {
        path: 'wedding-party',
        component: WeddingPartyComponent
    },
    {
        path: 'registry',
        component: RegistryComponent
    },
    {
        path: 'explore-cincinnati',
        component: ExploreCincinnatiComponent
    },
    {
        path: 'wedding-details',
        component: WeddingDetailsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {

                // enableTracing: false



            }

        )

    ],

    exports: [

        RouterModule

    ],

    providers: [

    ]

})

export class AppRoutingModule {

}
