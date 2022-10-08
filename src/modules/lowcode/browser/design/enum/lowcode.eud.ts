import { localize } from '@opensumi/ide-core-common';
import { EditorComponentRenderMode, IEditorComponent, ReactEditorComponent } from '@opensumi/ide-editor/lib/browser';
import { LOWCODE_SCHAME, LOWCODE_COMPONENTID, LOWCODE_FILE } from '../../../common/lowcode.metadata';
import { LowCodeResourceProvider } from '../../lowcode.resourceprovider';
import EnumDesignView from './lowcode.eud.view';

// Enum编辑器设计器组件定义
export class EnumDesignEditorComponent implements IEditorComponent {
  uid: string = LOWCODE_COMPONENTID.Enum;
  component: ReactEditorComponent<any> = EnumDesignView;
  scheme?: string | undefined = LOWCODE_SCHAME.Enum;
  renderMode?: EditorComponentRenderMode | undefined;
}

// Enum文件资源提供程序
export class EnumResourceProvider extends LowCodeResourceProvider {
  scheme?: string | undefined = LOWCODE_SCHAME.Enum;
  extension: string = LOWCODE_FILE.Enum;
}

// Enum文件资源编辑器组件发现程序
export const EnumEditorComponentResolver = (resource, results) => {
  if (resource.uri.path.ext === LOWCODE_FILE.Enum) {
    results.push({
      type: 'component',
      title: localize('lowcode.eud.title'),
      weight: 10,
      componentId: LOWCODE_COMPONENTID.Enum,
    });
  }
};
