import { JwtPayload, Secret, sign, SignOptions, verify } from 'jsonwebtoken';

class JWT {
  private static secret: Secret = process.env.JWT_SECRET || 'topSecret123';
  private static jwtConfig: SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  static sign(payload: JwtPayload): string {
    return sign({ ...payload }, this.secret, this.jwtConfig);
  }

  static verify(token: string): JwtPayload | string {
    try {
      return verify(token, this.secret) as JwtPayload;
    } catch (error) {
      console.error(error);
      return 'Token must be a valid token!';
    }
  }
}

export default JWT;
