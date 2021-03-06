import { ABP } from '@abp/ng.core';

export namespace Home {
    export type ITenantApplicationResponse = ABP.PagedItemsResponse<ITenantApplication>;

    export interface ITenantApplication {
        // 名字
        applicationName: string;

        // 有效期
        expireDate: string;

        // 图标
        icon: string;

        url: string;
    }
}
