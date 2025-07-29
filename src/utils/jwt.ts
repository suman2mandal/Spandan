import jwt, { SignOptions, JwtPayload, Secret } from 'jsonwebtoken';

const getJWTSecret = (): Secret => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }
  return secret;
};

// Default expiration values typed correctly
type Expiry = `${number}${'s' | 'm' | 'h' | 'd'}`; // like '15m', '7d', etc.

// Sign a JWT
export function signJWT(payload: object, expiresIn: Expiry = '7d'): string {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, getJWTSecret(), options);
}

// Verify a JWT
export function verifyJWT(token: string): string | JwtPayload | null {
  try {
    return jwt.verify(token, getJWTSecret());
  } catch {
    return null;
  }
}

// Generate a short-lived email token
export function generateEmailToken(payload: object, expiresIn: Expiry = '15m'): string {
  return jwt.sign(payload, getJWTSecret(), { expiresIn });
}

// Verify short-lived email token
export function verifyEmailToken(token: string): string | JwtPayload | null {
  try {
    return jwt.verify(token, getJWTSecret());
  } catch {
    return null;
  }
}


