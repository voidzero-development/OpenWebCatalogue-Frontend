import { JwtHelperService } from '@auth0/angular-jwt';

export class JWTDecoder{
    decode (myRawToken: string){
        const helper = new JwtHelperService();
        return helper.decodeToken(myRawToken);
    }
}