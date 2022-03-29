import { DataTypes, Model, InitOptions } from "sequelize";

export default class Hello extends Model {
  declare hellos: number;

  static data(): InitOptions<Hello> {
    return {
      hellos: DataTypes.INTEGER,
    };
  }
}
