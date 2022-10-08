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
  Entity: 'sparrow_design_entity',
  Model: 'sparrow_design_model',
  Enum: 'sparrow_design_enum',
  FieldType: 'sparrow_design_fieldtype',
  Function: 'sparrow_design_function',
  Regex: 'sparrow_design_regex',
  Api: 'sparrow_design_api',
};
