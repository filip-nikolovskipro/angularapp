import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuItemComponent
  },
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
