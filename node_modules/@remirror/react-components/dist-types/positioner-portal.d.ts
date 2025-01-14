import { FC, ReactChild } from 'react';
export interface PositionerComponentProps {
    children: ReactChild;
}
/**
 * Render a component into the editors positioner widget using `createPortal`
 * from `react-dom`.
 */
export declare const PositionerPortal: FC<PositionerComponentProps>;
