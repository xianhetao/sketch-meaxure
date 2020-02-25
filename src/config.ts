import { context } from "./context";
import { prefix } from "./common";
import { extend } from "./helper";
import { logger } from "./logger";

export interface Config {
    scale?: number;
    unit?: string;
    colorFormat?: string;
    artboardOrder?: string;
}

export function getConfigs(): Config {
    var configsData = /*this.*/context.UIMetadata.objectForKey(/*this.*/prefix);
    return JSON.parse(configsData);
}
export function setConfigs(newConfigs) {
    var configsData;
    newConfigs.timestamp = new Date().getTime();
    configsData = /*this.*/extend(newConfigs, /*this.*/getConfigs() || {});
    /*this.*/context.UIMetadata.setObject_forKey(JSON.stringify(configsData), /*this.*/prefix);

    return configsData;
}
export function removeConfigs() {
    /*this.*/context.UIMetadata.setObject_forKey(null, /*this.*/prefix);
}