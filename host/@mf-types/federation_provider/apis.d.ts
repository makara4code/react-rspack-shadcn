
    export type RemoteKeys = 'federation_provider/button' | 'federation_provider/components';
    type PackageType<T> = T extends 'federation_provider/components' ? typeof import('federation_provider/components') :T extends 'federation_provider/button' ? typeof import('federation_provider/button') :any;