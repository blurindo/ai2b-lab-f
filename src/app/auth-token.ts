export interface AuthToken {
    sub: string;
    roles: string[];
    iat: number;
    exp: number;
}
