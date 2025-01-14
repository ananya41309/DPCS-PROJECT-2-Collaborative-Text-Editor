import { AnyExtension } from '@remirror/core';
import { ReactFrameworkProps } from '../react-framework';
import type { ReactFrameworkOutput } from '../react-types';
/**
 * The hook responsible for providing the editor context when the `Remirror`
 * component is combined with `useRemirror`.
 *
 * @remarks
 *
 * This is an internal hook which returns the `ReactFramework` instance for
 * consumption by the public API's. It is used within `useRemirror` and the
 * `<Remirror />` component.
 *
 * @internal
 */
export declare function useReactFramework<Extension extends AnyExtension>(props: ReactFrameworkProps<Extension>): ReactFrameworkOutput<Extension>;
