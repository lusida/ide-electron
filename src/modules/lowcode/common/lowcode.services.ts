import { URI } from '@opensumi/ide-core-common';
import { DocumentDefinition } from './lowcode.definition';

export const LowCodeWorkspaceServicePath = 'sparrow.lowcode.workspace.uri';
export const ILowCodeWorkspaceService = Symbol('ILowCodeWorkspaceService');
// 工作区操作服务
export interface ILowCodeWorkspaceService {
  // 加载工作区
  LoadAsync(uri: URI): Promise<boolean>;
  // 卸载工作区
  UnloadAync(): Promise<boolean>;
  // 添加项目
  AddProjectAsync(uri: URI): Promise<boolean>;
  // 移除项目
  RemoveProjectAsync(uri: URI): Promise<boolean>;
  // 重新加载项目
  ReloadProjectAsync(uri: URI): Promise<boolean>;
  // 打开文档
  OpenDocumentAsync<TDefinition extends DocumentDefinition>(uri: URI): Promise<TDefinition>;
  // 关闭文档
  CloseDocumentAsync(uri: URI): Promise<boolean>;
  // 更新文档
  UpdateDocumentAsync<TDefinition extends DocumentDefinition>(uri: URI, definition: TDefinition): Promise<boolean>;
}
