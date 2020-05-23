export interface Country {
  readonly metadata: metadataCountry;
  readonly data: dataCountry[];
}

export interface metadataCountry {
  readonly timestamp: Date;
  readonly path: string;
  readonly method: string;
}

export interface dataCountry {
  readonly _id: string;
  readonly name: string;
  readonly code: string;
}