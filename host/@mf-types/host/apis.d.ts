
    export type RemoteKeys = 'host/button';
    type PackageType<T> = T extends 'host/button' ? typeof import('host/button') :any;