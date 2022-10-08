import { Injectable, Provider } from '@opensumi/di';
import { NodeModule } from '@opensumi/ide-core-node';
import { registerLocalizationBundle } from '@opensumi/ide-core-common/lib/localize';
import { localizationBundle as en } from '../lang/en-US';
import { localizationBundle as zh } from '../lang/zh-CN';
import { ILowCodeWorkspaceService, LowCodeWorkspaceServicePath } from '../common/lowcode.services';
import { LowCodeWorkspaceService } from './services/WorkspaceService';

registerLocalizationBundle(en);
registerLocalizationBundle(zh);

@Injectable()
export class LowCodeNodeModule extends NodeModule {
  providers: Provider[] = [
    {
      token: ILowCodeWorkspaceService,
      useClass: LowCodeWorkspaceService,
    },
  ];

  backServices = [
    {
      servicePath: LowCodeWorkspaceServicePath,
      token: ILowCodeWorkspaceService,
    },
  ];
}
