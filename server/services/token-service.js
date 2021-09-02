import jwt from "jsonwebtoken";

class TokenService {
  async createToken(data) {
    const accessToken = await jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15s",
    });

    const refreshToken = await jwt.sign(
      data,
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1y",
      }
    );

    return { accessToken, refreshToken };
  }
}

export default new TokenService();
