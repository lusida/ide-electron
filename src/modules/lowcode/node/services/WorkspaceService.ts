import { Injectable } from '@opensumi/di';
import { RPCService } from '@opensumi/ide-connection';
import { URI } from '@opensumi/ide-core-common';
import { DocumentDefinition } from 'modules/lowcode/common/lowcode.definition';
import { ILowCodeWorkspaceService } from 'modules/lowcode/common/lowcode.services';

@Injectable()
export class LowCodeWorkspaceService extends RPCService implements ILowCodeWorkspaceService {
  LoadAsync(uri: URI): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  UnloadAync(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  AddProjectAsync(uri: URI): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  RemoveProjectAsync(uri: URI): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  ReloadProjectAsync(uri: URI): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  OpenDocumentAsync<TDefinition extends DocumentDefinition>(uri: URI): Promise<TDefinition> {
    throw new Error('Method not implemented.');
  }
  CloseDocumentAsync(uri: URI): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  UpdateDocumentAsync<TDefinition extends DocumentDefinition>(uri: URI, definition: TDefinition): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
