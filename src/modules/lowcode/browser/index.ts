import { Injectable, Provider } from '@opensumi/di';
import { BrowserModule } from '@opensumi/ide-core-browser';
import { LowCodeMenuContribution, LowCodeEditorContribution, LowCodeFileContribution } from './lowcode.contribution';

@Injectable()
export class LowCodeModule extends BrowserModule {
  providers: Provider[] = [LowCodeEditorContribution, LowCodeMenuContribution, LowCodeFileContribution];
}
