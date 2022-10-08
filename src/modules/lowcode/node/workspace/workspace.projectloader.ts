import { URI } from '@opensumi/ide-core-common';
import { Project } from './workspace';

export class LowCodeProjectLoader {
  LoadAsync(uri: URI): Promise<Project> {}
}
