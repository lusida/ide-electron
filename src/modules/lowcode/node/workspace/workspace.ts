import { Injectable } from '@opensumi/di';
import { URI } from '@opensumi/ide-core-common';
import { DocumentDefinition } from 'modules/lowcode/common/lowcode.definition';
import { DocumentReferenceMetadata, ProjectReferenceMetadata } from './workspace.metadata';
import { LowCodeProjectLoader } from './workspace.projectloader';

// 工作区文档
export class Document {
  private _definition: DocumentDefinition;

  constructor(project: Project, id: string, uri: URI) {
    this.id = id;
    this.uri = uri;
    this.project = project;
  }

  // 文档唯一标识
  id: string;
  // 文档地址
  uri: URI;
  // 所属项目
  project: Project;
  // 是否元数据
  isMetadata: boolean;
  // 文档引用
  references: DocumentReferenceMetadata[];
  // 获取定义数据
  GetDefinition<TDefinition extends DocumentDefinition>(): TDefinition {
    return this._definition as TDefinition;
  }
}

// 工作区项目
export class Project {
  constructor(workspace: Workspace, id: string) {
    this.id = id;
    this.workspace = workspace;
  }

  // 项目唯一标识
  id: string;
  // 工作区
  workspace: Workspace;
  // 是否元数据
  isMetadata: boolean;
  // 项目引用
  references: ProjectReferenceMetadata[];
}

// 工作区
@Injectable()
export class Workspace {
  private _projects: Map<URI, Project>;
  private readonly _projectLoader: LowCodeProjectLoader;

  constructor() {
    this._projects = new Map<URI, Project>();
    this._projectLoader = new LowCodeProjectLoader();
  }

  // 工作区根目录路径
  rootDirectory: URI;

  // 加载工作区
  LoadAsync(rootDirectory: URI): Promise<boolean> {
    this.rootDirectory = rootDirectory;

    return Promise.resolve(true);
  }

  // 获取所有项目
  GetProjects(): IterableIterator<Project> {
    return this._projects.values();
  }

  // 获取指定项目
  GetProject(uri: URI): Project | undefined {
    return this._projects.get(uri);
  }

  // 添加项目
  async AddProjectAsync(uri: URI): Promise<boolean> {
    const project = await this._projectLoader.LoadAsync(uri);

    return true;
  }
}
