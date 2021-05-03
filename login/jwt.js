import jwt from "jsonwebtoken";

const tokenExpirationTime = 360;

const validateJwt = async (token) => {
  try {
    const payload = await jwt.verify(
      token,
      process.env.SECRET,
      (err, decoded) => {
        if (err) throw err;
        return decoded;
      }
    );
    return payload;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const createJwt = (user) =>
  jwt.sign(user, process.env.SECRET, {
    expiresIn: tokenExpirationTime,
  });

export { validateJwt, createJwt };
