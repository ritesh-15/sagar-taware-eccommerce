class UserDto {
  name;
  email;
  number;
  district;
  subDistrict;
  village;
  address;

  constructor(user) {
    this.address = user.address;
    this.email = user.email;
    this.number = user.number;
    this.village = user.village;
    this.name = user.name;
    this.district = user.district;
    this.subDistrict = user.subDistrict;
  }
}

export default UserDto;
