import { IEditorComponent, ReactEditorComponent } from '@opensumi/ide-editor/lib/browser';
import { LOWCODE_SCHAME, LOWCODE_COMPONENTID, LOWCODE_FILE } from '../../../common/lowcode.metadata';
import { LowCodeResourceProvider } from '../../lowcode.resourceprovider';
import EntityDesignView from './lowcode.edd.view';

// Entity编辑器设计器组件定义
export class EntityDesignEditorComponent implements IEditorComponent {
  uid: string = LOWCODE_COMPONENTID.Entity;
  component: ReactEditorComponent<any> = EntityDesignView;
  scheme?: string | undefined = LOWCODE_SCHAME.Entity;
}

// Entity文件资源提供程序
export class EntityResourceProvider extends LowCodeResourceProvider {
  scheme?: string | undefined = LOWCODE_SCHAME.Entity;
  extension: string = LOWCODE_FILE.Entity;
}

// Entity文件资源编辑器组件发现程序
export const EntityEditorComponentResolver = (resource, results) => {
  results.push({
    type: 'component',
    componentId: LOWCODE_COMPONENTID.Entity,
  });
};
