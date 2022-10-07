import { Injectable, Provider } from '@opensumi/di';
import { BrowserModule } from '@opensumi/ide-core-browser';
import { registerLocalizationBundle } from '@opensumi/ide-core-common/lib/localize';
import { LowCodeMenuContribution, LowCodeEditorContribution, LowCodeFileContribution } from './lowcode.contribution';
import { localizationBundle as en } from '../lang/en-US';
import { localizationBundle as zh } from '../lang/zh-CN';

registerLocalizationBundle(en);
registerLocalizationBundle(zh);

@Injectable()
export class LowCodeModule extends BrowserModule {
  providers: Provider[] = [LowCodeEditorContribution, LowCodeMenuContribution, LowCodeFileContribution];
}
