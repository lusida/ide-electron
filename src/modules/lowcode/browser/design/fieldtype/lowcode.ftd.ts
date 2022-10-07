import { EditorComponentRenderMode, IEditorComponent, ReactEditorComponent } from '@opensumi/ide-editor/lib/browser';
import { LOWCODE_SCHAME, LOWCODE_COMPONENTID, LOWCODE_FILE } from '../../../common/lowcode.metadata';
import { LowCodeResourceProvider } from '../../lowcode.resourceprovider';
import FieldTypeDesignView from './lowcode.ftd.view';

// FieldType编辑器设计器组件定义
export class FieldTypeDesignEditorComponent implements IEditorComponent {
  uid: string = LOWCODE_COMPONENTID.FieldType;
  component: ReactEditorComponent<any> = FieldTypeDesignView;
  scheme?: string | undefined = LOWCODE_SCHAME.FieldType;
  renderMode?: EditorComponentRenderMode | undefined;
}

// FieldType文件资源提供程序
export class FieldTypeResourceProvider extends LowCodeResourceProvider {
  scheme?: string | undefined = LOWCODE_SCHAME.FieldType;
  extension: string = LOWCODE_FILE.FieldType;
}

// FieldType文件资源编辑器组件发现程序
export const FieldTypeEditorComponentResolver = (resource, results) => {
  results.push({
    type: 'component',
    componentId: LOWCODE_COMPONENTID.FieldType,
  });
};
