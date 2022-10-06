import { Autowired } from '@opensumi/di';
import { FsProviderContribution } from '@opensumi/ide-core-browser';
import { IMenuRegistry, MenuContribution, MenuId } from '@opensumi/ide-core-browser/lib/menu/next';
import {
  CommandContribution,
  CommandRegistry,
  Domain,
  FileSystemProvider,
  IDisposable,
  URI,
} from '@opensumi/ide-core-common';
import {
  BrowserEditorContribution,
  EditorComponentRegistry,
  IResource,
  ResourceService,
  WorkbenchEditorService,
} from '@opensumi/ide-editor/lib/browser';
import { ILowCodeMetadata } from '../common/lowcode.metadata';
import LowCodeEntityDesignerComponent from './lowcode.view.edd';

const LOWCODE_TESTID = {
  id: 'lowcode-test-command',
};
const Schame_Entity = 'sparrow-edd';

@Domain(MenuContribution, CommandContribution)
export class LowCodeMenuContribution implements MenuContribution, CommandContribution {
  @Autowired(WorkbenchEditorService)
  protected readonly editorService: WorkbenchEditorService;

  registerCommands(registry: CommandRegistry): void {
    registry.registerCommand(LOWCODE_TESTID, {
      execute: () => {
        this.editorService.open(new URI(`${Schame_Entity}://demo.edd`), { preview: false });
      },
    });
  }

  registerMenus(registry: IMenuRegistry): void {
    registry.registerMenuItem(MenuId.MenubarHelpMenu, {
      command: { id: LOWCODE_TESTID.id, label: '组件案例' },
      order: 1,
      group: '2_addon',
    });
  }
}

@Domain(FsProviderContribution)
export class LowCodeFileContribution implements FsProviderContribution {
  // registerProvider(registry: { registerProvider(scheme: string, provider: FileSystemProvider): IDisposable }): void | Promise<void> {
  //     registry.registerProvider(Schame_Entity, new LowCodeEntityFileProvider());
  // }
}

@Domain(BrowserEditorContribution)
export class LowCodeEditorContribution implements BrowserEditorContribution {
  getFileName = (uri: URI) => {
    alert(uri);
    const str = uri.toString();

    const arr = str.split('/');

    return arr[arr.length - 1];
  };

  registerResource(resourceService: ResourceService): void {
    resourceService.registerResourceProvider({
      scheme: Schame_Entity,
      provideResource: async (uri: URI): Promise<IResource<ILowCodeMetadata>> => ({
        uri,
        name: this.getFileName(uri),
        icon: 'class-edd',
      }),
    });
  }

  registerEditorComponent(editorComponentRegistry: EditorComponentRegistry): void {
    editorComponentRegistry.registerEditorComponent({
      component: LowCodeEntityDesignerComponent,
      uid: 'entity-designer-component',
      scheme: Schame_Entity,
    });

    editorComponentRegistry.registerEditorComponentResolver(Schame_Entity, (resource, results) => {
      results.push({
        type: 'component',
        componentId: 'entity-designer-component',
      });
    });
  }
}
