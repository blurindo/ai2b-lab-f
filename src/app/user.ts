export interface User {
    username: string;
    enabled: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    roles: string[];
}
