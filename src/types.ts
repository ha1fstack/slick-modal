export interface SlickModalState {
  key: React.Key;
}

export interface SlickModalCreateOptions {
  key?: React.Key;
  throwOnDuplicate?: boolean;
  preserveCallbacks?: boolean;
  closeOthers?: boolean;
}

export interface SlickModalCallbacks {
  [key: React.Key]: {
    resolve: (arg: any) => void;
    reject: (arg: unknown) => void;
    promise: Promise<unknown>;
  };
}

export interface SlickModalHandler<ResolveReturn extends unknown = unknown> {
  stackIndex: number;
  key: React.Key;
  hide: () => void;
  resolve: (arg: ResolveReturn) => void;
  reject: (arg: unknown) => void;
}
