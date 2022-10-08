import { localize } from '@opensumi/ide-core-common';
import { EditorComponentRenderMode, IEditorComponent, ReactEditorComponent } from '@opensumi/ide-editor/lib/browser';
import { LOWCODE_SCHAME, LOWCODE_COMPONENTID, LOWCODE_FILE } from '../../../common/lowcode.metadata';
import { LowCodeResourceProvider } from '../../lowcode.resourceprovider';
import ModelDesignView from './lowcode.mdd.view';

// Model编辑器设计器组件定义
export class ModelDesignEditorComponent implements IEditorComponent {
  uid: string = LOWCODE_COMPONENTID.Model;
  component: ReactEditorComponent<any> = ModelDesignView;
  scheme?: string | undefined = LOWCODE_SCHAME.Model;
  renderMode?: EditorComponentRenderMode | undefined;
}

// Model文件资源提供程序
export class ModelResourceProvider extends LowCodeResourceProvider {
  scheme?: string | undefined = LOWCODE_SCHAME.Model;
  extension: string = LOWCODE_FILE.Model;
}

// Model文件资源编辑器组件发现程序
export const ModelEditorComponentResolver = (resource, results) => {
  if (resource.uri.path.ext === LOWCODE_FILE.Model) {
    results.push({
      type: 'component',
      title: localize('lowcode.mdd.title'),
      weight: 10,
      componentId: LOWCODE_COMPONENTID.Model,
    });
  }
};
