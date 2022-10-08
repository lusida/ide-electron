import { localize } from '@opensumi/ide-core-common';
import { EditorComponentRenderMode, IEditorComponent, ReactEditorComponent } from '@opensumi/ide-editor/lib/browser';
import { LOWCODE_SCHAME, LOWCODE_COMPONENTID, LOWCODE_FILE } from '../../../common/lowcode.metadata';
import { LowCodeResourceProvider } from '../../lowcode.resourceprovider';
import ApiDesignView from './lowcode.aid.view';

// Api编辑器设计器组件定义
export class ApiDesignEditorComponent implements IEditorComponent {
  uid: string = LOWCODE_COMPONENTID.Api;
  component: ReactEditorComponent<any> = ApiDesignView;
  scheme?: string | undefined = LOWCODE_SCHAME.Api;
  renderMode?: EditorComponentRenderMode | undefined;
}

// Api文件资源提供程序
export class ApiResourceProvider extends LowCodeResourceProvider {
  scheme?: string | undefined = LOWCODE_SCHAME.Api;
  extension: string = LOWCODE_FILE.Api;
}

// Api文件资源编辑器组件发现程序
export const ApiEditorComponentResolver = (resource, results) => {
  if (resource.uri.path.ext === LOWCODE_FILE.Api) {
    results.push({
      type: 'component',
      title: localize('lowcode.aid.title'),
      weight: 10,
      componentId: LOWCODE_COMPONENTID.Api,
    });
  }
};
