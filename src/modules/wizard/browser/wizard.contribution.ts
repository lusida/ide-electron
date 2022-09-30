import { useRef } from 'react';
import { ComponentContribution, ComponentRegistry } from '@opensumi/ide-core-browser';
import { IMenuRegistry, MenuContribution, MenuId } from '@opensumi/ide-core-browser/lib/menu/next';
import { CommandContribution, CommandRegistry, Domain } from '@opensumi/ide-core-common';
import { WizardDialogComponent } from './wizard.view';

const WIZARD_MENU_NEW = {
  id: 'wizard-menu-new',
};

@Domain(ComponentContribution, CommandContribution, MenuContribution)
export class WizardContribution implements CommandContribution, MenuContribution, ComponentContribution {
  registerComponent(registry: ComponentRegistry): void {
    registry.register('wizard-dialog', {
      id: 'wizard-dialog',
      component: WizardDialogComponent,
      initialProps: {},
    });
  }

  registerCommands(commands: CommandRegistry): void {
    commands.registerCommand(WIZARD_MENU_NEW, {
      execute: () => {
        // const wizardRef: any = useRef(null);

        // wizardRef.current.open();
      },
    });
  }

  registerMenus(menus: IMenuRegistry): void {
    menus.registerMenuItem(MenuId.MenubarFileMenu, {
      order: 1,
      group: '2_new',
      command: {
        id: WIZARD_MENU_NEW.id,
        label: '新建',
      },
    });
  }
}
