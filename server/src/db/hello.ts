import { DataTypes, InitOptions, Model } from "sequelize";

export class Hello extends Model {
  declare hellos: number;
}

export default function initHello(opts: InitOptions) {
  return Hello.init(
    {
      hellos: DataTypes.NUMBER,
    },
    opts
  );
}
