import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  //token verification logic

  //1.get token from req   (install & use cookie-parser module)
  let signedToken = req.cookies.token;
  if (!signedToken) {
    return res.status(401).json({ message: "please login first" });
  }

  //2.verify token(decode)
  let decodedToken = jwt.verify(signedToken, "abcdef");
  console.log(decodedToken);
  next();
}
 