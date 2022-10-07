import { EditorComponentRenderMode, IEditorComponent, ReactEditorComponent } from '@opensumi/ide-editor/lib/browser';
import { LOWCODE_SCHAME, LOWCODE_COMPONENTID, LOWCODE_FILE } from '../../../common/lowcode.metadata';
import { LowCodeResourceProvider } from '../../lowcode.resourceprovider';
import RegexDesignView from './lowcode.rgd.view';

// Regex编辑器设计器组件定义
export class RegexDesignEditorComponent implements IEditorComponent {
  uid: string = LOWCODE_COMPONENTID.Regex;
  component: ReactEditorComponent<any> = RegexDesignView;
  scheme?: string | undefined = LOWCODE_SCHAME.Regex;
  renderMode?: EditorComponentRenderMode | undefined;
}

// Regex文件资源提供程序
export class RegexResourceProvider extends LowCodeResourceProvider {
  scheme?: string | undefined = LOWCODE_SCHAME.Regex;
  extension: string = LOWCODE_FILE.Regex;
}

// Regex文件资源编辑器组件发现程序
export const RegexEditorComponentResolver = (resource, results) => {
  results.push({
    type: 'component',
    componentId: LOWCODE_COMPONENTID.Regex,
  });
};
