import {ModuleWithProviders} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {MyAccountComponent} from './components/my-account/my-account.component';
import {MyProfileComponent} from './components/my-profile/my-profile.component';
import {BookListComponent} from './components/book-list/book-list.component';

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
    },
    {
        path: 'myProfile',
        component: MyProfileComponent
    },
    {
        path: 'bookList',
        component: BookListComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
