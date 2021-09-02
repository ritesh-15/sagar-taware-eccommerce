import userService from "../services/user-service.js";
import bcrypt from "bcrypt";
import tokenService from "../services/token-service.js";
import UserDto from "../dtos/user-dto.js";

class AuthController {
  async register(req, res) {
    const {
      name,
      email,
      number,
      password,
      district,
      subDistrict,
      village,
      address,
    } = req.body;

    if (
      !name ||
      !email ||
      !subDistrict ||
      !district ||
      !password ||
      !number ||
      !village ||
      !address
    ) {
      return res.status(400).json({ message: "Bad request!" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const data = {
      name,
      email,
      number,
      district,
      subDistrict,
      village,
      address,
      password: hashedPass,
    };

    let user;

    try {
      user = await userService.newUser(data);
    } catch (err) {
      return res.status(500).json({ message: "Database error" });
    }

    if (!user) {
      return res.status(400).json({ message: "Something went wrong!" });
    }

    const { accessToken, refreshToken } = await tokenService.createToken({
      _id: user._id,
    });

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });

    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });

    const createdUser = new UserDto(user);

    return res.json({ user: createdUser, auth: true });
  }
}

export default new AuthController();
