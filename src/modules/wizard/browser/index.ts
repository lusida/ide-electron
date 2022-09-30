import { Injectable, Provider } from '@opensumi/di';
import { BrowserModule } from '@opensumi/ide-core-browser';
import { WizardContribution } from './wizard.contribution';

@Injectable()
export class WizardModule extends BrowserModule {
  providers?: Provider[] = [WizardContribution];
}
