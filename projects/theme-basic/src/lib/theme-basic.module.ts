import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { NgxsModule } from '@ngxs/store';
import { AppContainerComponent } from './components/app-container/container.component';
import { AccountLayoutComponent } from './components/account-layout.component';
import { AppDrawerComponent } from './components/app-drawer/drawer.component';
import { AppHeaderComponent } from './components/app-header/header.component';
import { PageContentComponent } from './components/app-page/page-content.component';
import { PageHeaderComponent } from './components/app-page/page-header.component';
import { PageTableComponent } from './components/app-page/page-table.component';
import { AppSidebarComponent } from './components/app-sidebar/sidebar.component';
import { ApplicationLayoutComponent } from './components/application-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout.component';
import { RanLayoutState } from './states/layout.state';

export const RAN_LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];

@NgModule({
    declarations: [
        ...RAN_LAYOUTS,
        AppContainerComponent,
        AppHeaderComponent,
        AppSidebarComponent,
        AppDrawerComponent,
        PageHeaderComponent,
        PageContentComponent,
        PageTableComponent
    ],
    imports: [
        CoreModule,
        ThemeSharedModule,
        CommonModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatBadgeModule,
        MatMenuModule,
        NgxsModule.forFeature([RanLayoutState]),
    ],
    exports: [
        ...RAN_LAYOUTS,
        PageHeaderComponent,
        PageContentComponent,
        PageTableComponent
    ],
    entryComponents: [...RAN_LAYOUTS]
})
export class ThemeBasicModule { }