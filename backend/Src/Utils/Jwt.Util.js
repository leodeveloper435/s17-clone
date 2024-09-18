import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const key = process.env.JWT_SECRET_KEY;

export function generateTokenJWT(payload, expiresIn = "1h") {
  return JWT.sign(payload, key, { expiresIn });
}

export function verifyTokenJWT(token) {
  try {
    return JWT.verify(token, key);
  } catch (error) {
    return null;
  }
}

export function decodeToken(token) {
  return JWT.decode(token);
}

export function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log(authHeader)
  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "No token provided. Access denied." });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decodedToken = verifyTokenJWT(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
}
