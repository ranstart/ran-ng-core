/**
 * setSidebarState
 */
export class SetSidebarState {
    static readonly type = '[Sidebar] Set';
    constructor(public payload?: boolean) { }
}

export class SetDrawbarState {
    static readonly type = '[Drawbar] Set';
    constructor() { }
}

export class SetSidebarContentScoll {
    static readonly type = '[SidebarContentScoll] Set';
    constructor(public payload: Event) { }
}

