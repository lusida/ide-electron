import { URI } from '@opensumi/ide-core-common';

export interface ILowCodeMetadata {
  uri: URI;
}

export const LOWCODE_FILE = {
  Entity: '.edd',
  Model: '.mdd',
  Enum: '.eud',
  FieldType: '.ftd',
  Function: '.ffd',
  Regex: '.rgd',
  Api: '.aid',
};

export const LOWCODE_SCHAME = {
  Entity: 'sparrow-edd',
  Model: 'sparrow-mdd',
  Enum: 'sparrow-enum',
  FieldType: 'sparrow-fieldtype',
  Function: 'sparrow-function',
  Regex: 'sparrow-regex',
  Api: 'sparrow-api',
};

export const LOWCODE_COMPONENTID = {
  Entity: 'sparrow-design-entity',
  Model: 'sparrow-design-model',
  Enum: 'sparrow-design-enum',
  FieldType: 'sparrow-design-fieldtype',
  Function: 'sparrow-design-function',
  Regex: 'sparrow-design-regex',
  Api: 'sparrow-design-api',
};
