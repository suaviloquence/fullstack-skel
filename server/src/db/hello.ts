import { DataTypes, Model, ModelAttributes } from "sequelize";

export default class Hello extends Model {
  declare hellos: number;

  static data(): ModelAttributes<Hello> {
    return {
      hellos: DataTypes.INTEGER,
    };
  }
}
