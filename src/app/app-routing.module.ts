import { ABP, eLayoutType } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { THEME_BASIC_ROUTES } from 'projects/theme-basic/src/public-api';

const routes: Routes = [
  { path: '', redirectTo: '/theme/light/theme-one', pathMatch: 'full' },
  {
    path: 'ckeditor',
    loadChildren: () => import('./demo-ckeditor/demo-ckeditor.module').then(m => m.DemoCkeditorModule),
    data: {
      routes: {
        name: '::Menu:Ckeditor',
        layout: eLayoutType.application,
        children: [{
          name: '::Menu:Ckeditor:cc',
          path: 'ckeditor',
          iconClass: 'assets/images/lake.png'
        }]
      } as ABP.FullRoute,
    },
  },
  {
    path: 'core',
    loadChildren: () => import('./demo-core/demo-core.module').then(m => m.DemoCoreModule),
    data: {
      routes: {
        name: '::Menu:Core',
        layout: eLayoutType.application,
      } as ABP.FullRoute,
    },
  },
  {
    path: 'theme',
    loadChildren: () => import('./demo-theme-basic/demo-theme-basic.module').then(m => m.DemoThemeBasicModule),
    data: {
      routes: THEME_BASIC_ROUTES,
    },
  },
  {
    path: 'account',
    loadChildren: () => import('./lazy-libs/account-wrapper.module').then(m => m.AccountWrapperModule),
  },
  {
    path: 'identity',
    loadChildren: () => import('./lazy-libs/identity-wrapper.module').then(m => m.IdentityWrapperModule),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('./lazy-libs/tenant-management-wrapper.module').then(m => m.TenantManagementWrapperModule),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('./lazy-libs/setting-management-wrapper.module').then(m => m.SettingManagementWrapperModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
