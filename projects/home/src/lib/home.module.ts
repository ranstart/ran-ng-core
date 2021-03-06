import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule as RanCoreModule } from '@ran-ng/core';
// import { ThemeBasicModule } from '@ran-ng/theme-basic';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ThemeBasicModule } from 'projects/theme-basic/src/public-api';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CoreModule,
    RanCoreModule,
    ThemeSharedModule,
    CommonModule,
    ThemeBasicModule,
    HomeRoutingModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
