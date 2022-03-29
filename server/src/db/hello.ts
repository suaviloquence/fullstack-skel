import { DataTypes, Model } from "sequelize";

export default class Hello extends Model {
  declare hellos: number;
  static data() {
    return {
      hellos: DataTypes.INTEGER,
    };
  }
}
