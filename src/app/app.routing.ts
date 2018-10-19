import {ModuleWithProviders} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {MyAccountComponent} from './components/my-account/my-account.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'myAccount',
        component: MyAccountComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
