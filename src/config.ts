export enum FuseVersion {
  V1 = '1',
  V2 = '2',
}

/**
 * Maps config keys to their index in the fuse wire
 */
export enum FuseV1Options {
  RunAsNode = 0,
}

export type FuseV1Config = {
  version: FuseVersion.V1;
} & Partial<Record<FuseV1Options, boolean>>;

export type FuseV2Config = {
  version: FuseVersion.V2;
};

export type FuseConfig = FuseV1Config | FuseV2Config;
