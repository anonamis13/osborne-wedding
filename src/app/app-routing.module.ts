import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,

    },
    {
        path: 'wedding-party',
        component: WeddingPartyComponent
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
