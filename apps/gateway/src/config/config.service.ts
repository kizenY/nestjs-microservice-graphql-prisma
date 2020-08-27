import { Injectable } from '@nestjs/common';
import { Config } from './config.entity';
import { existsSync } from 'fs';
import { join } from 'path';
@Injectable()
export class ConfigService {
    readonly config: Config;

    constructor() {
        this.config = ConfigService.getConfig();
    }

    static getConfig(): Config {
        const configFilePath = join(__dirname,'config',`config.${process.env.NODE_ENV}.ts`);
        if (existsSync(configFilePath)) {
            return require(configFilePath)
        }
        const config = require('./config.default');
        if(config === undefined) throw new Error(`cann't load config file`);
        return config;
    }
}
