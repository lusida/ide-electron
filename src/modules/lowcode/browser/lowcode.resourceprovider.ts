import { URI, MaybePromise } from '@opensumi/ide-core-common';
import { AskSaveResult, IResource, IResourceProvider } from '@opensumi/ide-editor';

export class LowCodeResourceProvider implements IResourceProvider {
  scheme?: string | undefined;
  extension: string;
  getFileName(uri: URI) {
    const str = uri.toString();

    const arr = str.split('/');

    return arr[arr.length - 1];
  }
  handlesUri?(uri: URI): number {
    const v = uri.toString();

    const index = v.lastIndexOf('.');

    if (index > 0) {
      const ext = v.substring(index);

      if (ext.toLowerCase() === this.extension) {
        console.log('handlesUri:', ext);
        return Number.MAX_VALUE;
      }
    }

    return -1;
  }
  provideResource(uri: URI): MaybePromise<IResource<any>> {
    const a = new URI(`${this.scheme}://${uri.path}`);
    console.log('provideResource:', a);
    return {
      uri: a,
      name: this.getFileName(uri),
      icon: 'class-edd',
      supportsRevive: true,
    };
  }
  provideResourceSubname?(resource: IResource<any>, groupResources: IResource<any>[]): string | null {
    console.log('provideResourceSubname' + resource.uri + ' ' + groupResources.length);

    return null;
  }
  shouldCloseResource?(resource: IResource<any>, openedResources: IResource<any>[][]): MaybePromise<boolean> {
    console.log('shouldCloseResource' + resource.uri + ' ' + openedResources.length);

    return true;
  }
  shouldCloseResourceWithoutConfirm?(resource: IResource<any>): MaybePromise<boolean> {
    console.log('shouldCloseResourceWithoutConfirm' + resource.uri);

    return true;
  }
  close?(resource: IResource<any>, saveAction: AskSaveResult): MaybePromise<boolean> {
    console.log('close' + resource.uri + ' ' + saveAction);

    return true;
  }
  onDisposeResource?(resource: IResource<any>): void {
    console.log('onDisposeResource' + resource.uri);
  }
}
