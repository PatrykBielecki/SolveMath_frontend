import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
path: '',
redirectTo: 'users',
pathMatch: 'full',
},
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersPageModule),
    },
    {
      path: 'users/:id',
      loadChildren: () =>
        import('./pages/users-details/users-details.module').then(
          (m) => m.UsersDetailsPageModule
        ),
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
