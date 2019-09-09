import { Directive, ViewContainerRef } from '@angular/core';

/**
 * 锚点指令,用于动态创建组件
 */
@Directive({
    selector: '[ranAppAnchor]'
})
export class RanAppAnchorDirective {

    constructor(
        public viewContainerRef: ViewContainerRef
    ) {
    }
}
