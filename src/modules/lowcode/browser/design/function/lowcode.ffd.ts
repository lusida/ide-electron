import { EditorComponentRenderMode, IEditorComponent, ReactEditorComponent } from '@opensumi/ide-editor/lib/browser';
import { LOWCODE_SCHAME, LOWCODE_COMPONENTID, LOWCODE_FILE } from '../../../common/lowcode.metadata';
import { LowCodeResourceProvider } from '../../lowcode.resourceprovider';
import FunctionDesignView from './lowcode.ffd.view';

// Function编辑器设计器组件定义
export class FunctionDesignEditorComponent implements IEditorComponent {
  uid: string = LOWCODE_COMPONENTID.Function;
  component: ReactEditorComponent<any> = FunctionDesignView;
  scheme?: string | undefined = LOWCODE_SCHAME.Function;
  renderMode?: EditorComponentRenderMode | undefined;
}

// Function文件资源提供程序
export class FunctionResourceProvider extends LowCodeResourceProvider {
  scheme?: string | undefined = LOWCODE_SCHAME.Function;
  extension: string = LOWCODE_FILE.Function;
}

// Function文件资源编辑器组件发现程序
export const FunctionEditorComponentResolver = (resource, results) => {
  results.push({
    type: 'component',
    componentId: LOWCODE_COMPONENTID.Function,
  });
};
