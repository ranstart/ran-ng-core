import { Component, Injector } from '@angular/core';
import { PagedListingComponentBase } from 'projects/core/src/public-api';
import { ɵl } from '@abp/ng.core';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
    selector: 'demo-theme-basic',
    templateUrl: './demo-theme-basic.component.html'
})
export class DemoThemeBasicComponent extends PagedListingComponentBase<any> {

    isOpen = false;
    pollutant: string;
    filter: string;
    headers: string[] = ['name', 'position', 'weight', 'symbol', 'actions'];
    dataSource = ELEMENT_DATA;

    constructor(injector: Injector) {
        super(injector);
    }

    protected getPagedResult(request: ɵl.PageQueryParams, successCallback: (result: ɵl.PagedResponse<any>) => void): void {
        console.log(this.dataSource);
        successCallback({
            items: this.dataSource,
            totalCount: 0
        });
    }
}
