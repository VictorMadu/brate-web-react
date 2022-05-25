import * as yaml from "js-yaml";
import * as fs from "fs";
import * as path from "path";
import { InnerKeys, InnerValue } from "ts-util-types";
import { Config } from "./interfaces/config";
import { get } from "lodash";

const FILE_ENCODING = "utf-8";
const CONFIG_DEV = "config.dev.yaml";
const CONFIG_TEST = "config.test.yaml";
const CONFIG_PROD = "config.prod.yaml";
// TODO: For replacing ConfigService in erate server
class ConfigService {
  private config: Config;
  constructor() {
    this.config = this.getConfig();
  }

  get<T extends InnerKeys<Config>>(key: T) {
    return get(this.config, key) as InnerValue<Config, T>;
  }

  private getConfig() {
    const file = this.getFile();
    return yaml.load(this.readFile(file)) as Config;
  }

  private readFile(file: string) {
    return fs.readFileSync(file, { encoding: FILE_ENCODING });
  }

  private getFile() {
    switch (process.env.NODE_ENV) {
      case "development":
        return CONFIG_DEV;
      case "test":
        return CONFIG_TEST;
      case "production":
        return CONFIG_PROD;
      default:
        throw new Error("Unsupported NODE_ENV");
    }
  }
}

export const configService = new ConfigService();
