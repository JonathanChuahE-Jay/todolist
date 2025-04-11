export interface JWTType {
    user_id: number;
    exp: number;
    iat: number;
    jti: string;
    token_type: string;
}