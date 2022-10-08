export abstract class DocumentDefinition {
  // 名称
  name: string;
  // 描述
  description?: string;
  // 版本号
  version: number;
  // 引用数据
  references: Map<string, string>;
  // 是否抽象
  isAbstract: boolean;
}

// 类型定义数据
export class TypeDefinition {
  type: string;
  isNullable: boolean;
  isCollection: boolean;
}

// 字段定义数据结构
export class FieldDefinition extends TypeDefinition {
  value: any;
}

// 实体模型定义数据结构
export class EntityDefinition extends DocumentDefinition {
  scheme?: string;
  table?: string;
  fields: Map<string, FieldDefinition>;
}

// 业务模型定义数据结构
export class ModelDefinition extends DocumentDefinition {
  fields: Map<string, FieldDefinition>;
}

// 枚举模型定义数据结构
export class EnumDefinition extends DocumentDefinition {
  isFlags: boolean;
}

// 字段类型定义数据结构
export class FieldTypeDefinition extends DocumentDefinition {
  group: string;
  properties: Map<string, any>;
}

// 正则表达式定义数据结构
export class RegexDefinition extends DocumentDefinition {
  pattern: string;
  message: string;
}

// 函数定义数据结构
export class FunctionDefinition extends DocumentDefinition {
  isAsync: boolean;
  group: string;
  arguments: Map<string, TypeDefinition>;
  returnType: TypeDefinition;
}

// API定义数据结构
export class ApiDefinition extends DocumentDefinition {
  isAsync: boolean;
  arguments: Map<string, TypeDefinition>;
  returnType: TypeDefinition;
}
