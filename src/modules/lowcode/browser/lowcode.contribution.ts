import { Autowired } from '@opensumi/di';
import { IMenuRegistry, MenuContribution, MenuId } from '@opensumi/ide-core-browser/lib/menu/next';
import { CommandContribution, CommandRegistry, Domain, Schemes, URI } from '@opensumi/ide-core-common';
import {
  BrowserEditorContribution,
  EditorComponentRegistry,
  ResourceService,
  WorkbenchEditorService,
} from '@opensumi/ide-editor/lib/browser';
import { LOWCODE_SCHAME } from '../common/lowcode.metadata';
import { ApiDesignEditorComponent, ApiEditorComponentResolver, ApiResourceProvider } from './design/api/lowcode.aid';
import {
  EntityDesignEditorComponent,
  EntityEditorComponentResolver,
  EntityResourceProvider,
} from './design/entity/lowcode.edd';
import {
  EnumDesignEditorComponent,
  EnumEditorComponentResolver,
  EnumResourceProvider,
} from './design/enum/lowcode.eud';
import {
  FieldTypeDesignEditorComponent,
  FieldTypeEditorComponentResolver,
  FieldTypeResourceProvider,
} from './design/fieldtype/lowcode.ftd';
import {
  FunctionDesignEditorComponent,
  FunctionEditorComponentResolver,
  FunctionResourceProvider,
} from './design/function/lowcode.ffd';
import {
  ModelDesignEditorComponent,
  ModelEditorComponentResolver,
  ModelResourceProvider,
} from './design/model/lowcode.mdd';
import {
  RegexDesignEditorComponent,
  RegexEditorComponentResolver,
  RegexResourceProvider,
} from './design/regex/lowcode.rgd';

const LOWCODE_TESTID = {
  id: 'lowcode-test-command',
};

@Domain(MenuContribution, CommandContribution)
export class LowCodeMenuContribution implements MenuContribution, CommandContribution {
  @Autowired(WorkbenchEditorService)
  protected readonly editorService: WorkbenchEditorService;

  registerCommands(registry: CommandRegistry): void {
    registry.registerCommand(LOWCODE_TESTID, {
      execute: () => {
        this.editorService.open(new URI(`${LOWCODE_SCHAME.Entity}:///demo.edd`), { preview: false });
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

@Domain(BrowserEditorContribution)
export class LowCodeEditorContribution implements BrowserEditorContribution {
  registerResource(resourceService: ResourceService): void {
    resourceService.registerResourceProvider(new EntityResourceProvider());
    resourceService.registerResourceProvider(new ModelResourceProvider());
    resourceService.registerResourceProvider(new EnumResourceProvider());
    resourceService.registerResourceProvider(new FieldTypeResourceProvider());
    resourceService.registerResourceProvider(new RegexResourceProvider());
    resourceService.registerResourceProvider(new FunctionResourceProvider());
    resourceService.registerResourceProvider(new ApiResourceProvider());
  }

  registerEditorComponent(editorComponentRegistry: EditorComponentRegistry): void {
    // Entity
    editorComponentRegistry.registerEditorComponent(new EntityDesignEditorComponent());

    editorComponentRegistry.registerEditorComponentResolver(Schemes.file, EntityEditorComponentResolver);

    // Model
    editorComponentRegistry.registerEditorComponent(new ModelDesignEditorComponent());

    editorComponentRegistry.registerEditorComponentResolver(Schemes.file, ModelEditorComponentResolver);

    // Enum
    editorComponentRegistry.registerEditorComponent(new EnumDesignEditorComponent());

    editorComponentRegistry.registerEditorComponentResolver(Schemes.file, EnumEditorComponentResolver);

    // Regex
    editorComponentRegistry.registerEditorComponent(new RegexDesignEditorComponent());

    editorComponentRegistry.registerEditorComponentResolver(Schemes.file, RegexEditorComponentResolver);

    // FieldType
    editorComponentRegistry.registerEditorComponent(new FieldTypeDesignEditorComponent());

    editorComponentRegistry.registerEditorComponentResolver(Schemes.file, FieldTypeEditorComponentResolver);

    // Function
    editorComponentRegistry.registerEditorComponent(new FunctionDesignEditorComponent());

    editorComponentRegistry.registerEditorComponentResolver(Schemes.file, FunctionEditorComponentResolver);

    // Api
    editorComponentRegistry.registerEditorComponent(new ApiDesignEditorComponent());

    editorComponentRegistry.registerEditorComponentResolver(Schemes.file, ApiEditorComponentResolver);
  }
}
