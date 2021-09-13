import type Component from './MenuSurface.svelte';

export declare class MenuSurfaceComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    keyof Component['$$prop_def']
  > &
    Component['$$prop_def'];
}

import { Corner } from '@material/menu-surface';

export { Corner };

export interface SMUIMenuSurfaceAccessor {
  open: boolean;
  closeProgrammatic(skipRestoreFocus?: boolean): void;
}
