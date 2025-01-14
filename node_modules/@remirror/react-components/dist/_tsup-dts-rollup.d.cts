import { Alignment } from '@floating-ui/react';
import { ComponentType } from 'react';
import _composeRefs from '@seznam/compose-react-refs';
import { Context } from 'react';
import { CSSProperties } from '@remirror/theme';
import { CSSProperties as CSSProperties_2 } from 'react';
import { ElementType } from 'react';
import { FC } from 'react';
import { FloatingPortal } from '@floating-ui/react';
import * as Icons from '@remirror/icons';
import { IconTree } from '@remirror/icons';
import { MentionAtomNodeAttributes } from '@remirror/react-hooks';
import { MentionAtomState } from '@remirror/react-hooks';
import { Middleware } from '@floating-ui/react';
import { Placement } from '@floating-ui/react';
import type { PositionerParam } from '@remirror/extension-positioner';
import { PropsWithChildren } from 'react';
import { Provider } from 'react';
import { ReactChild } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RemirrorThemeType } from '@remirror/theme';
import { Strategy } from '@floating-ui/react';
import { SVGAttributes } from 'react';
import { UseEditorFocusProps } from '@remirror/react-hooks';
import { useEffect } from 'react';
import { UseMentionAtomProps } from '@remirror/react-hooks';
import { UseMentionAtomReturn } from '@remirror/react-hooks';

/**
 * The react component for the `ab.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ab Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/a-b.svg)
 */
declare const ABIcon: IconType;
export { ABIcon }
export { ABIcon as ABIcon_alias_1 }
export { ABIcon as ABIcon_alias_2 }

/**
 * The react component for the `account-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Account Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/account-box-fill.svg)
 */
declare const AccountBoxFillIcon: IconType;
export { AccountBoxFillIcon }
export { AccountBoxFillIcon as AccountBoxFillIcon_alias_1 }

/**
 * The react component for the `account-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Account Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/account-box-line.svg)
 */
declare const AccountBoxLineIcon: IconType;
export { AccountBoxLineIcon }
export { AccountBoxLineIcon as AccountBoxLineIcon_alias_1 }

/**
 * The react component for the `account-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Account Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/account-circle-fill.svg)
 */
declare const AccountCircleFillIcon: IconType;
export { AccountCircleFillIcon }
export { AccountCircleFillIcon as AccountCircleFillIcon_alias_1 }

/**
 * The react component for the `account-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Account Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/account-circle-line.svg)
 */
declare const AccountCircleLineIcon: IconType;
export { AccountCircleLineIcon }
export { AccountCircleLineIcon as AccountCircleLineIcon_alias_1 }

/**
 * The react component for the `account-pin-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Account Pin Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/account-pin-box-fill.svg)
 */
declare const AccountPinBoxFillIcon: IconType;
export { AccountPinBoxFillIcon }
export { AccountPinBoxFillIcon as AccountPinBoxFillIcon_alias_1 }

/**
 * The react component for the `account-pin-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Account Pin Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/account-pin-box-line.svg)
 */
declare const AccountPinBoxLineIcon: IconType;
export { AccountPinBoxLineIcon }
export { AccountPinBoxLineIcon as AccountPinBoxLineIcon_alias_1 }

/**
 * The react component for the `account-pin-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Account Pin Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/account-pin-circle-fill.svg)
 */
declare const AccountPinCircleFillIcon: IconType;
export { AccountPinCircleFillIcon }
export { AccountPinCircleFillIcon as AccountPinCircleFillIcon_alias_1 }

/**
 * The react component for the `account-pin-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Account Pin Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/account-pin-circle-line.svg)
 */
declare const AccountPinCircleLineIcon: IconType;
export { AccountPinCircleLineIcon }
export { AccountPinCircleLineIcon as AccountPinCircleLineIcon_alias_1 }

/**
 * The react component for the `add-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Add Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/add-box-fill.svg)
 */
declare const AddBoxFillIcon: IconType;
export { AddBoxFillIcon }
export { AddBoxFillIcon as AddBoxFillIcon_alias_1 }

/**
 * The react component for the `add-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Add Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/add-box-line.svg)
 */
declare const AddBoxLineIcon: IconType;
export { AddBoxLineIcon }
export { AddBoxLineIcon as AddBoxLineIcon_alias_1 }

/**
 * The react component for the `add-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Add Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/add-circle-fill.svg)
 */
declare const AddCircleFillIcon: IconType;
export { AddCircleFillIcon }
export { AddCircleFillIcon as AddCircleFillIcon_alias_1 }

/**
 * The react component for the `add-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Add Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/add-circle-line.svg)
 */
declare const AddCircleLineIcon: IconType;
export { AddCircleLineIcon }
export { AddCircleLineIcon as AddCircleLineIcon_alias_1 }

/**
 * The react component for the `add-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Add Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/add-fill.svg)
 */
declare const AddFillIcon: IconType;
export { AddFillIcon }
export { AddFillIcon as AddFillIcon_alias_1 }
export { AddFillIcon as AddFillIcon_alias_2 }

/**
 * The react component for the `add-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Add Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/add-line.svg)
 */
declare const AddLineIcon: IconType;
export { AddLineIcon }
export { AddLineIcon as AddLineIcon_alias_1 }
export { AddLineIcon as AddLineIcon_alias_2 }

/**
 * The react component for the `admin-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Admin Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/admin-fill.svg)
 */
declare const AdminFillIcon: IconType;
export { AdminFillIcon }
export { AdminFillIcon as AdminFillIcon_alias_1 }

/**
 * The react component for the `admin-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Admin Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/admin-line.svg)
 */
declare const AdminLineIcon: IconType;
export { AdminLineIcon }
export { AdminLineIcon as AdminLineIcon_alias_1 }

/**
 * The react component for the `advertisement-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Advertisement Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/advertisement-fill.svg)
 */
declare const AdvertisementFillIcon: IconType;
export { AdvertisementFillIcon }
export { AdvertisementFillIcon as AdvertisementFillIcon_alias_1 }

/**
 * The react component for the `advertisement-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Advertisement Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/advertisement-line.svg)
 */
declare const AdvertisementLineIcon: IconType;
export { AdvertisementLineIcon }
export { AdvertisementLineIcon as AdvertisementLineIcon_alias_1 }

/**
 * The react component for the `airplay-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Airplay Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/airplay-fill.svg)
 */
declare const AirplayFillIcon: IconType;
export { AirplayFillIcon }
export { AirplayFillIcon as AirplayFillIcon_alias_1 }

/**
 * The react component for the `airplay-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Airplay Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/airplay-line.svg)
 */
declare const AirplayLineIcon: IconType;
export { AirplayLineIcon }
export { AirplayLineIcon as AirplayLineIcon_alias_1 }

/**
 * The react component for the `alarm-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Alarm Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/alarm-fill.svg)
 */
declare const AlarmFillIcon: IconType;
export { AlarmFillIcon }
export { AlarmFillIcon as AlarmFillIcon_alias_1 }

/**
 * The react component for the `alarm-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Alarm Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/alarm-line.svg)
 */
declare const AlarmLineIcon: IconType;
export { AlarmLineIcon }
export { AlarmLineIcon as AlarmLineIcon_alias_1 }

/**
 * The react component for the `alarm-warning-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Alarm Warning Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/alarm-warning-fill.svg)
 */
declare const AlarmWarningFillIcon: IconType;
export { AlarmWarningFillIcon }
export { AlarmWarningFillIcon as AlarmWarningFillIcon_alias_1 }

/**
 * The react component for the `alarm-warning-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Alarm Warning Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/alarm-warning-line.svg)
 */
declare const AlarmWarningLineIcon: IconType;
export { AlarmWarningLineIcon }
export { AlarmWarningLineIcon as AlarmWarningLineIcon_alias_1 }

/**
 * The react component for the `album-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Album Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/album-fill.svg)
 */
declare const AlbumFillIcon: IconType;
export { AlbumFillIcon }
export { AlbumFillIcon as AlbumFillIcon_alias_1 }

/**
 * The react component for the `album-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Album Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/album-line.svg)
 */
declare const AlbumLineIcon: IconType;
export { AlbumLineIcon }
export { AlbumLineIcon as AlbumLineIcon_alias_1 }

/**
 * The react component for the `alert-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Alert Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/alert-fill.svg)
 */
declare const AlertFillIcon: IconType;
export { AlertFillIcon }
export { AlertFillIcon as AlertFillIcon_alias_1 }

/**
 * The react component for the `alert-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Alert Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/alert-line.svg)
 */
declare const AlertLineIcon: IconType;
export { AlertLineIcon }
export { AlertLineIcon as AlertLineIcon_alias_1 }
export { AlertLineIcon as AlertLineIcon_alias_2 }

/**
 * The react component for the `aliens-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Aliens Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/aliens-fill.svg)
 */
declare const AliensFillIcon: IconType;
export { AliensFillIcon }
export { AliensFillIcon as AliensFillIcon_alias_1 }

/**
 * The react component for the `aliens-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Aliens Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/aliens-line.svg)
 */
declare const AliensLineIcon: IconType;
export { AliensLineIcon }
export { AliensLineIcon as AliensLineIcon_alias_1 }

/**
 * The react component for the `align-bottom.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Align Bottom Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/align-bottom.svg)
 */
declare const AlignBottomIcon: IconType;
export { AlignBottomIcon }
export { AlignBottomIcon as AlignBottomIcon_alias_1 }
export { AlignBottomIcon as AlignBottomIcon_alias_2 }

/**
 * The react component for the `align-center.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Align Center Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/align-center.svg)
 */
declare const AlignCenterIcon: IconType;
export { AlignCenterIcon }
export { AlignCenterIcon as AlignCenterIcon_alias_1 }
export { AlignCenterIcon as AlignCenterIcon_alias_2 }

/**
 * The react component for the `align-justify.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Align Justify Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/align-justify.svg)
 */
declare const AlignJustifyIcon: IconType;
export { AlignJustifyIcon }
export { AlignJustifyIcon as AlignJustifyIcon_alias_1 }
export { AlignJustifyIcon as AlignJustifyIcon_alias_2 }

/**
 * The react component for the `align-left.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Align Left Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/align-left.svg)
 */
declare const AlignLeftIcon: IconType;
export { AlignLeftIcon }
export { AlignLeftIcon as AlignLeftIcon_alias_1 }
export { AlignLeftIcon as AlignLeftIcon_alias_2 }

/**
 * The react component for the `align-right.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Align Right Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/align-right.svg)
 */
declare const AlignRightIcon: IconType;
export { AlignRightIcon }
export { AlignRightIcon as AlignRightIcon_alias_1 }
export { AlignRightIcon as AlignRightIcon_alias_2 }

/**
 * The react component for the `align-top.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Align Top Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/align-top.svg)
 */
declare const AlignTopIcon: IconType;
export { AlignTopIcon }
export { AlignTopIcon as AlignTopIcon_alias_1 }
export { AlignTopIcon as AlignTopIcon_alias_2 }

/**
 * The react component for the `align-vertically.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Align Vertically Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/align-vertically.svg)
 */
declare const AlignVerticallyIcon: IconType;
export { AlignVerticallyIcon }
export { AlignVerticallyIcon as AlignVerticallyIcon_alias_1 }
export { AlignVerticallyIcon as AlignVerticallyIcon_alias_2 }

/**
 * The react component for the `alipay-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Alipay Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/alipay-fill.svg)
 */
declare const AlipayFillIcon: IconType;
export { AlipayFillIcon }
export { AlipayFillIcon as AlipayFillIcon_alias_1 }

/**
 * The react component for the `alipay-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Alipay Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/alipay-line.svg)
 */
declare const AlipayLineIcon: IconType;
export { AlipayLineIcon }
export { AlipayLineIcon as AlipayLineIcon_alias_1 }

/**
 * The react component for the `amazon-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Amazon Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/amazon-fill.svg)
 */
declare const AmazonFillIcon: IconType;
export { AmazonFillIcon }
export { AmazonFillIcon as AmazonFillIcon_alias_1 }

/**
 * The react component for the `amazon-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Amazon Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/amazon-line.svg)
 */
declare const AmazonLineIcon: IconType;
export { AmazonLineIcon }
export { AmazonLineIcon as AmazonLineIcon_alias_1 }

/**
 * The react component for the `anchor-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Anchor Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/anchor-fill.svg)
 */
declare const AnchorFillIcon: IconType;
export { AnchorFillIcon }
export { AnchorFillIcon as AnchorFillIcon_alias_1 }

/**
 * The react component for the `anchor-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Anchor Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/anchor-line.svg)
 */
declare const AnchorLineIcon: IconType;
export { AnchorLineIcon }
export { AnchorLineIcon as AnchorLineIcon_alias_1 }

/**
 * The react component for the `ancient-gate-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ancient Gate Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/ancient-gate-fill.svg)
 */
declare const AncientGateFillIcon: IconType;
export { AncientGateFillIcon }
export { AncientGateFillIcon as AncientGateFillIcon_alias_1 }

/**
 * The react component for the `ancient-gate-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ancient Gate Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/ancient-gate-line.svg)
 */
declare const AncientGateLineIcon: IconType;
export { AncientGateLineIcon }
export { AncientGateLineIcon as AncientGateLineIcon_alias_1 }

/**
 * The react component for the `ancient-pavilion-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ancient Pavilion Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/ancient-pavilion-fill.svg)
 */
declare const AncientPavilionFillIcon: IconType;
export { AncientPavilionFillIcon }
export { AncientPavilionFillIcon as AncientPavilionFillIcon_alias_1 }

/**
 * The react component for the `ancient-pavilion-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ancient Pavilion Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/ancient-pavilion-line.svg)
 */
declare const AncientPavilionLineIcon: IconType;
export { AncientPavilionLineIcon }
export { AncientPavilionLineIcon as AncientPavilionLineIcon_alias_1 }

/**
 * The react component for the `android-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Android Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/android-fill.svg)
 */
declare const AndroidFillIcon: IconType;
export { AndroidFillIcon }
export { AndroidFillIcon as AndroidFillIcon_alias_1 }

/**
 * The react component for the `android-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Android Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/android-line.svg)
 */
declare const AndroidLineIcon: IconType;
export { AndroidLineIcon }
export { AndroidLineIcon as AndroidLineIcon_alias_1 }

/**
 * The react component for the `angularjs-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Angularjs Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/angularjs-fill.svg)
 */
declare const AngularjsFillIcon: IconType;
export { AngularjsFillIcon }
export { AngularjsFillIcon as AngularjsFillIcon_alias_1 }

/**
 * The react component for the `angularjs-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Angularjs Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/angularjs-line.svg)
 */
declare const AngularjsLineIcon: IconType;
export { AngularjsLineIcon }
export { AngularjsLineIcon as AngularjsLineIcon_alias_1 }

/**
 * The react component for the `anticlockwise-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Anticlockwise 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/anticlockwise-2-fill.svg)
 */
declare const Anticlockwise2FillIcon: IconType;
export { Anticlockwise2FillIcon }
export { Anticlockwise2FillIcon as Anticlockwise2FillIcon_alias_1 }

/**
 * The react component for the `anticlockwise-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Anticlockwise 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/anticlockwise-2-line.svg)
 */
declare const Anticlockwise2LineIcon: IconType;
export { Anticlockwise2LineIcon }
export { Anticlockwise2LineIcon as Anticlockwise2LineIcon_alias_1 }

/**
 * The react component for the `anticlockwise-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Anticlockwise Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/anticlockwise-fill.svg)
 */
declare const AnticlockwiseFillIcon: IconType;
export { AnticlockwiseFillIcon }
export { AnticlockwiseFillIcon as AnticlockwiseFillIcon_alias_1 }

/**
 * The react component for the `anticlockwise-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Anticlockwise Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/anticlockwise-line.svg)
 */
declare const AnticlockwiseLineIcon: IconType;
export { AnticlockwiseLineIcon }
export { AnticlockwiseLineIcon as AnticlockwiseLineIcon_alias_1 }

/**
 * The react component for the `apple-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Apple Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/apple-fill.svg)
 */
declare const AppleFillIcon: IconType;
export { AppleFillIcon }
export { AppleFillIcon as AppleFillIcon_alias_1 }

/**
 * The react component for the `apple-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Apple Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/apple-line.svg)
 */
declare const AppleLineIcon: IconType;
export { AppleLineIcon }
export { AppleLineIcon as AppleLineIcon_alias_1 }

/**
 * The react component for the `apps-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Apps 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/apps-2-fill.svg)
 */
declare const Apps2FillIcon: IconType;
export { Apps2FillIcon }
export { Apps2FillIcon as Apps2FillIcon_alias_1 }

/**
 * The react component for the `apps-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Apps 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/apps-2-line.svg)
 */
declare const Apps2LineIcon: IconType;
export { Apps2LineIcon }
export { Apps2LineIcon as Apps2LineIcon_alias_1 }

/**
 * The react component for the `apps-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Apps Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/apps-fill.svg)
 */
declare const AppsFillIcon: IconType;
export { AppsFillIcon }
export { AppsFillIcon as AppsFillIcon_alias_1 }

/**
 * The react component for the `apps-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Apps Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/apps-line.svg)
 */
declare const AppsLineIcon: IconType;
export { AppsLineIcon }
export { AppsLineIcon as AppsLineIcon_alias_1 }
export { AppsLineIcon as AppsLineIcon_alias_2 }

/**
 * The react component for the `app-store-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![App Store Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/app-store-fill.svg)
 */
declare const AppStoreFillIcon: IconType;
export { AppStoreFillIcon }
export { AppStoreFillIcon as AppStoreFillIcon_alias_1 }

/**
 * The react component for the `app-store-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![App Store Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/app-store-line.svg)
 */
declare const AppStoreLineIcon: IconType;
export { AppStoreLineIcon }
export { AppStoreLineIcon as AppStoreLineIcon_alias_1 }

/**
 * The react component for the `archive-drawer-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Archive Drawer Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/archive-drawer-fill.svg)
 */
declare const ArchiveDrawerFillIcon: IconType;
export { ArchiveDrawerFillIcon }
export { ArchiveDrawerFillIcon as ArchiveDrawerFillIcon_alias_1 }

/**
 * The react component for the `archive-drawer-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Archive Drawer Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/archive-drawer-line.svg)
 */
declare const ArchiveDrawerLineIcon: IconType;
export { ArchiveDrawerLineIcon }
export { ArchiveDrawerLineIcon as ArchiveDrawerLineIcon_alias_1 }

/**
 * The react component for the `archive-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Archive Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/archive-fill.svg)
 */
declare const ArchiveFillIcon: IconType;
export { ArchiveFillIcon }
export { ArchiveFillIcon as ArchiveFillIcon_alias_1 }

/**
 * The react component for the `archive-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Archive Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/archive-line.svg)
 */
declare const ArchiveLineIcon: IconType;
export { ArchiveLineIcon }
export { ArchiveLineIcon as ArchiveLineIcon_alias_1 }

/**
 * The react component for the `arrow-down-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Down Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-down-circle-fill.svg)
 */
declare const ArrowDownCircleFillIcon: IconType;
export { ArrowDownCircleFillIcon }
export { ArrowDownCircleFillIcon as ArrowDownCircleFillIcon_alias_1 }

/**
 * The react component for the `arrow-down-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Down Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-down-circle-line.svg)
 */
declare const ArrowDownCircleLineIcon: IconType;
export { ArrowDownCircleLineIcon }
export { ArrowDownCircleLineIcon as ArrowDownCircleLineIcon_alias_1 }

/**
 * The react component for the `arrow-down-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Down Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-down-fill.svg)
 */
declare const ArrowDownFillIcon: IconType;
export { ArrowDownFillIcon }
export { ArrowDownFillIcon as ArrowDownFillIcon_alias_1 }

/**
 * The react component for the `arrow-down-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Down Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-down-line.svg)
 */
declare const ArrowDownLineIcon: IconType;
export { ArrowDownLineIcon }
export { ArrowDownLineIcon as ArrowDownLineIcon_alias_1 }

/**
 * The react component for the `arrow-down-s-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Down S Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-down-s-fill.svg)
 */
declare const ArrowDownSFillIcon: IconType;
export { ArrowDownSFillIcon }
export { ArrowDownSFillIcon as ArrowDownSFillIcon_alias_1 }
export { ArrowDownSFillIcon as ArrowDownSFillIcon_alias_2 }

/**
 * The react component for the `arrow-down-s-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Down S Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-down-s-line.svg)
 */
declare const ArrowDownSLineIcon: IconType;
export { ArrowDownSLineIcon }
export { ArrowDownSLineIcon as ArrowDownSLineIcon_alias_1 }

/**
 * The react component for the `arrow-drop-down-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Drop Down Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-drop-down-fill.svg)
 */
declare const ArrowDropDownFillIcon: IconType;
export { ArrowDropDownFillIcon }
export { ArrowDropDownFillIcon as ArrowDropDownFillIcon_alias_1 }

/**
 * The react component for the `arrow-drop-down-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Drop Down Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-drop-down-line.svg)
 */
declare const ArrowDropDownLineIcon: IconType;
export { ArrowDropDownLineIcon }
export { ArrowDropDownLineIcon as ArrowDropDownLineIcon_alias_1 }

/**
 * The react component for the `arrow-drop-left-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Drop Left Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-drop-left-fill.svg)
 */
declare const ArrowDropLeftFillIcon: IconType;
export { ArrowDropLeftFillIcon }
export { ArrowDropLeftFillIcon as ArrowDropLeftFillIcon_alias_1 }

/**
 * The react component for the `arrow-drop-left-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Drop Left Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-drop-left-line.svg)
 */
declare const ArrowDropLeftLineIcon: IconType;
export { ArrowDropLeftLineIcon }
export { ArrowDropLeftLineIcon as ArrowDropLeftLineIcon_alias_1 }

/**
 * The react component for the `arrow-drop-right-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Drop Right Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-drop-right-fill.svg)
 */
declare const ArrowDropRightFillIcon: IconType;
export { ArrowDropRightFillIcon }
export { ArrowDropRightFillIcon as ArrowDropRightFillIcon_alias_1 }

/**
 * The react component for the `arrow-drop-right-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Drop Right Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-drop-right-line.svg)
 */
declare const ArrowDropRightLineIcon: IconType;
export { ArrowDropRightLineIcon }
export { ArrowDropRightLineIcon as ArrowDropRightLineIcon_alias_1 }

/**
 * The react component for the `arrow-drop-up-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Drop Up Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-drop-up-fill.svg)
 */
declare const ArrowDropUpFillIcon: IconType;
export { ArrowDropUpFillIcon }
export { ArrowDropUpFillIcon as ArrowDropUpFillIcon_alias_1 }

/**
 * The react component for the `arrow-drop-up-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Drop Up Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-drop-up-line.svg)
 */
declare const ArrowDropUpLineIcon: IconType;
export { ArrowDropUpLineIcon }
export { ArrowDropUpLineIcon as ArrowDropUpLineIcon_alias_1 }

/**
 * The react component for the `arrow-go-back-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Go Back Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-go-back-fill.svg)
 */
declare const ArrowGoBackFillIcon: IconType;
export { ArrowGoBackFillIcon }
export { ArrowGoBackFillIcon as ArrowGoBackFillIcon_alias_1 }
export { ArrowGoBackFillIcon as ArrowGoBackFillIcon_alias_2 }

/**
 * The react component for the `arrow-go-back-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Go Back Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-go-back-line.svg)
 */
declare const ArrowGoBackLineIcon: IconType;
export { ArrowGoBackLineIcon }
export { ArrowGoBackLineIcon as ArrowGoBackLineIcon_alias_1 }

/**
 * The react component for the `arrow-go-forward-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Go Forward Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-go-forward-fill.svg)
 */
declare const ArrowGoForwardFillIcon: IconType;
export { ArrowGoForwardFillIcon }
export { ArrowGoForwardFillIcon as ArrowGoForwardFillIcon_alias_1 }
export { ArrowGoForwardFillIcon as ArrowGoForwardFillIcon_alias_2 }

/**
 * The react component for the `arrow-go-forward-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Go Forward Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-go-forward-line.svg)
 */
declare const ArrowGoForwardLineIcon: IconType;
export { ArrowGoForwardLineIcon }
export { ArrowGoForwardLineIcon as ArrowGoForwardLineIcon_alias_1 }

/**
 * The react component for the `arrow-left-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Left Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-left-circle-fill.svg)
 */
declare const ArrowLeftCircleFillIcon: IconType;
export { ArrowLeftCircleFillIcon }
export { ArrowLeftCircleFillIcon as ArrowLeftCircleFillIcon_alias_1 }

/**
 * The react component for the `arrow-left-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Left Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-left-circle-line.svg)
 */
declare const ArrowLeftCircleLineIcon: IconType;
export { ArrowLeftCircleLineIcon }
export { ArrowLeftCircleLineIcon as ArrowLeftCircleLineIcon_alias_1 }

/**
 * The react component for the `arrow-left-down-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Left Down Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-left-down-fill.svg)
 */
declare const ArrowLeftDownFillIcon: IconType;
export { ArrowLeftDownFillIcon }
export { ArrowLeftDownFillIcon as ArrowLeftDownFillIcon_alias_1 }

/**
 * The react component for the `arrow-left-down-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Left Down Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-left-down-line.svg)
 */
declare const ArrowLeftDownLineIcon: IconType;
export { ArrowLeftDownLineIcon }
export { ArrowLeftDownLineIcon as ArrowLeftDownLineIcon_alias_1 }

/**
 * The react component for the `arrow-left-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Left Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-left-fill.svg)
 */
declare const ArrowLeftFillIcon: IconType;
export { ArrowLeftFillIcon }
export { ArrowLeftFillIcon as ArrowLeftFillIcon_alias_1 }

/**
 * The react component for the `arrow-left-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Left Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-left-line.svg)
 */
declare const ArrowLeftLineIcon: IconType;
export { ArrowLeftLineIcon }
export { ArrowLeftLineIcon as ArrowLeftLineIcon_alias_1 }

/**
 * The react component for the `arrow-left-right-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Left Right Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-left-right-fill.svg)
 */
declare const ArrowLeftRightFillIcon: IconType;
export { ArrowLeftRightFillIcon }
export { ArrowLeftRightFillIcon as ArrowLeftRightFillIcon_alias_1 }

/**
 * The react component for the `arrow-left-right-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Left Right Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-left-right-line.svg)
 */
declare const ArrowLeftRightLineIcon: IconType;
export { ArrowLeftRightLineIcon }
export { ArrowLeftRightLineIcon as ArrowLeftRightLineIcon_alias_1 }

/**
 * The react component for the `arrow-left-s-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Left S Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-left-s-fill.svg)
 */
declare const ArrowLeftSFillIcon: IconType;
export { ArrowLeftSFillIcon }
export { ArrowLeftSFillIcon as ArrowLeftSFillIcon_alias_1 }
export { ArrowLeftSFillIcon as ArrowLeftSFillIcon_alias_2 }

/**
 * The react component for the `arrow-left-s-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Left S Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-left-s-line.svg)
 */
declare const ArrowLeftSLineIcon: IconType;
export { ArrowLeftSLineIcon }
export { ArrowLeftSLineIcon as ArrowLeftSLineIcon_alias_1 }

/**
 * The react component for the `arrow-left-up-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Left Up Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-left-up-fill.svg)
 */
declare const ArrowLeftUpFillIcon: IconType;
export { ArrowLeftUpFillIcon }
export { ArrowLeftUpFillIcon as ArrowLeftUpFillIcon_alias_1 }

/**
 * The react component for the `arrow-left-up-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Left Up Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-left-up-line.svg)
 */
declare const ArrowLeftUpLineIcon: IconType;
export { ArrowLeftUpLineIcon }
export { ArrowLeftUpLineIcon as ArrowLeftUpLineIcon_alias_1 }

/**
 * The react component for the `arrow-right-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Right Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-right-circle-fill.svg)
 */
declare const ArrowRightCircleFillIcon: IconType;
export { ArrowRightCircleFillIcon }
export { ArrowRightCircleFillIcon as ArrowRightCircleFillIcon_alias_1 }

/**
 * The react component for the `arrow-right-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Right Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-right-circle-line.svg)
 */
declare const ArrowRightCircleLineIcon: IconType;
export { ArrowRightCircleLineIcon }
export { ArrowRightCircleLineIcon as ArrowRightCircleLineIcon_alias_1 }

/**
 * The react component for the `arrow-right-down-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Right Down Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-right-down-fill.svg)
 */
declare const ArrowRightDownFillIcon: IconType;
export { ArrowRightDownFillIcon }
export { ArrowRightDownFillIcon as ArrowRightDownFillIcon_alias_1 }

/**
 * The react component for the `arrow-right-down-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Right Down Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-right-down-line.svg)
 */
declare const ArrowRightDownLineIcon: IconType;
export { ArrowRightDownLineIcon }
export { ArrowRightDownLineIcon as ArrowRightDownLineIcon_alias_1 }

/**
 * The react component for the `arrow-right-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Right Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-right-fill.svg)
 */
declare const ArrowRightFillIcon: IconType;
export { ArrowRightFillIcon }
export { ArrowRightFillIcon as ArrowRightFillIcon_alias_1 }

/**
 * The react component for the `arrow-right-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Right Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-right-line.svg)
 */
declare const ArrowRightLineIcon: IconType;
export { ArrowRightLineIcon }
export { ArrowRightLineIcon as ArrowRightLineIcon_alias_1 }

/**
 * The react component for the `arrow-right-s-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Right S Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-right-s-fill.svg)
 */
declare const ArrowRightSFillIcon: IconType;
export { ArrowRightSFillIcon }
export { ArrowRightSFillIcon as ArrowRightSFillIcon_alias_1 }
export { ArrowRightSFillIcon as ArrowRightSFillIcon_alias_2 }

/**
 * The react component for the `arrow-right-s-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Right S Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-right-s-line.svg)
 */
declare const ArrowRightSLineIcon: IconType;
export { ArrowRightSLineIcon }
export { ArrowRightSLineIcon as ArrowRightSLineIcon_alias_1 }

/**
 * The react component for the `arrow-right-up-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Right Up Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-right-up-fill.svg)
 */
declare const ArrowRightUpFillIcon: IconType;
export { ArrowRightUpFillIcon }
export { ArrowRightUpFillIcon as ArrowRightUpFillIcon_alias_1 }

/**
 * The react component for the `arrow-right-up-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Right Up Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-right-up-line.svg)
 */
declare const ArrowRightUpLineIcon: IconType;
export { ArrowRightUpLineIcon }
export { ArrowRightUpLineIcon as ArrowRightUpLineIcon_alias_1 }

/**
 * The react component for the `arrow-up-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Up Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-up-circle-fill.svg)
 */
declare const ArrowUpCircleFillIcon: IconType;
export { ArrowUpCircleFillIcon }
export { ArrowUpCircleFillIcon as ArrowUpCircleFillIcon_alias_1 }

/**
 * The react component for the `arrow-up-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Up Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-up-circle-line.svg)
 */
declare const ArrowUpCircleLineIcon: IconType;
export { ArrowUpCircleLineIcon }
export { ArrowUpCircleLineIcon as ArrowUpCircleLineIcon_alias_1 }

/**
 * The react component for the `arrow-up-down-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Up Down Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-up-down-fill.svg)
 */
declare const ArrowUpDownFillIcon: IconType;
export { ArrowUpDownFillIcon }
export { ArrowUpDownFillIcon as ArrowUpDownFillIcon_alias_1 }

/**
 * The react component for the `arrow-up-down-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Up Down Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-up-down-line.svg)
 */
declare const ArrowUpDownLineIcon: IconType;
export { ArrowUpDownLineIcon }
export { ArrowUpDownLineIcon as ArrowUpDownLineIcon_alias_1 }

/**
 * The react component for the `arrow-up-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Up Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-up-fill.svg)
 */
declare const ArrowUpFillIcon: IconType;
export { ArrowUpFillIcon }
export { ArrowUpFillIcon as ArrowUpFillIcon_alias_1 }

/**
 * The react component for the `arrow-up-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Up Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-up-line.svg)
 */
declare const ArrowUpLineIcon: IconType;
export { ArrowUpLineIcon }
export { ArrowUpLineIcon as ArrowUpLineIcon_alias_1 }

/**
 * The react component for the `arrow-up-s-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Up S Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-up-s-fill.svg)
 */
declare const ArrowUpSFillIcon: IconType;
export { ArrowUpSFillIcon }
export { ArrowUpSFillIcon as ArrowUpSFillIcon_alias_1 }
export { ArrowUpSFillIcon as ArrowUpSFillIcon_alias_2 }

/**
 * The react component for the `arrow-up-s-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Arrow Up S Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/arrow-up-s-line.svg)
 */
declare const ArrowUpSLineIcon: IconType;
export { ArrowUpSLineIcon }
export { ArrowUpSLineIcon as ArrowUpSLineIcon_alias_1 }

/**
 * The react component for the `artboard-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Artboard 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/artboard-2-fill.svg)
 */
declare const Artboard2FillIcon: IconType;
export { Artboard2FillIcon }
export { Artboard2FillIcon as Artboard2FillIcon_alias_1 }

/**
 * The react component for the `artboard-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Artboard 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/artboard-2-line.svg)
 */
declare const Artboard2LineIcon: IconType;
export { Artboard2LineIcon }
export { Artboard2LineIcon as Artboard2LineIcon_alias_1 }

/**
 * The react component for the `artboard-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Artboard Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/artboard-fill.svg)
 */
declare const ArtboardFillIcon: IconType;
export { ArtboardFillIcon }
export { ArtboardFillIcon as ArtboardFillIcon_alias_1 }

/**
 * The react component for the `artboard-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Artboard Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/artboard-line.svg)
 */
declare const ArtboardLineIcon: IconType;
export { ArtboardLineIcon }
export { ArtboardLineIcon as ArtboardLineIcon_alias_1 }

/**
 * The react component for the `article-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Article Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/article-fill.svg)
 */
declare const ArticleFillIcon: IconType;
export { ArticleFillIcon }
export { ArticleFillIcon as ArticleFillIcon_alias_1 }

/**
 * The react component for the `article-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Article Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/article-line.svg)
 */
declare const ArticleLineIcon: IconType;
export { ArticleLineIcon }
export { ArticleLineIcon as ArticleLineIcon_alias_1 }

/**
 * The react component for the `aspect-ratio-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Aspect Ratio Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/aspect-ratio-fill.svg)
 */
declare const AspectRatioFillIcon: IconType;
export { AspectRatioFillIcon }
export { AspectRatioFillIcon as AspectRatioFillIcon_alias_1 }

/**
 * The react component for the `aspect-ratio-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Aspect Ratio Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/aspect-ratio-line.svg)
 */
declare const AspectRatioLineIcon: IconType;
export { AspectRatioLineIcon }
export { AspectRatioLineIcon as AspectRatioLineIcon_alias_1 }

/**
 * The react component for the `asterisk.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Asterisk Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/asterisk.svg)
 */
declare const AsteriskIcon: IconType;
export { AsteriskIcon }
export { AsteriskIcon as AsteriskIcon_alias_1 }
export { AsteriskIcon as AsteriskIcon_alias_2 }

/**
 * The react component for the `at-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![At Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/at-fill.svg)
 */
declare const AtFillIcon: IconType;
export { AtFillIcon }
export { AtFillIcon as AtFillIcon_alias_1 }

/**
 * The react component for the `at-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![At Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/at-line.svg)
 */
declare const AtLineIcon: IconType;
export { AtLineIcon }
export { AtLineIcon as AtLineIcon_alias_1 }

/**
 * The react component for the `attachment-2.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Attachment 2 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/attachment-2.svg)
 */
declare const Attachment2Icon: IconType;
export { Attachment2Icon }
export { Attachment2Icon as Attachment2Icon_alias_1 }
export { Attachment2Icon as Attachment2Icon_alias_2 }

/**
 * The react component for the `attachment-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Attachment Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/attachment-fill.svg)
 */
declare const AttachmentFillIcon: IconType;
export { AttachmentFillIcon }
export { AttachmentFillIcon as AttachmentFillIcon_alias_1 }

/**
 * The react component for the `attachment-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Attachment Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/attachment-line.svg)
 */
declare const AttachmentLineIcon: IconType;
export { AttachmentLineIcon }
export { AttachmentLineIcon as AttachmentLineIcon_alias_1 }

/**
 * The react component for the `auction-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Auction Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/auction-fill.svg)
 */
declare const AuctionFillIcon: IconType;
export { AuctionFillIcon }
export { AuctionFillIcon as AuctionFillIcon_alias_1 }

/**
 * The react component for the `auction-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Auction Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/auction-line.svg)
 */
declare const AuctionLineIcon: IconType;
export { AuctionLineIcon }
export { AuctionLineIcon as AuctionLineIcon_alias_1 }

/**
 * The react component for the `award-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Award Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/award-fill.svg)
 */
declare const AwardFillIcon: IconType;
export { AwardFillIcon }
export { AwardFillIcon as AwardFillIcon_alias_1 }

/**
 * The react component for the `award-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Award Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/award-line.svg)
 */
declare const AwardLineIcon: IconType;
export { AwardLineIcon }
export { AwardLineIcon as AwardLineIcon_alias_1 }

/**
 * The react component for the `baidu-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Baidu Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/baidu-fill.svg)
 */
declare const BaiduFillIcon: IconType;
export { BaiduFillIcon }
export { BaiduFillIcon as BaiduFillIcon_alias_1 }

/**
 * The react component for the `baidu-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Baidu Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/baidu-line.svg)
 */
declare const BaiduLineIcon: IconType;
export { BaiduLineIcon }
export { BaiduLineIcon as BaiduLineIcon_alias_1 }

/**
 * The react component for the `ball-pen-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ball Pen Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/ball-pen-fill.svg)
 */
declare const BallPenFillIcon: IconType;
export { BallPenFillIcon }
export { BallPenFillIcon as BallPenFillIcon_alias_1 }

/**
 * The react component for the `ball-pen-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ball Pen Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/ball-pen-line.svg)
 */
declare const BallPenLineIcon: IconType;
export { BallPenLineIcon }
export { BallPenLineIcon as BallPenLineIcon_alias_1 }

/**
 * The react component for the `bank-card-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bank Card 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/bank-card-2-fill.svg)
 */
declare const BankCard2FillIcon: IconType;
export { BankCard2FillIcon }
export { BankCard2FillIcon as BankCard2FillIcon_alias_1 }

/**
 * The react component for the `bank-card-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bank Card 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/bank-card-2-line.svg)
 */
declare const BankCard2LineIcon: IconType;
export { BankCard2LineIcon }
export { BankCard2LineIcon as BankCard2LineIcon_alias_1 }

/**
 * The react component for the `bank-card-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bank Card Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/bank-card-fill.svg)
 */
declare const BankCardFillIcon: IconType;
export { BankCardFillIcon }
export { BankCardFillIcon as BankCardFillIcon_alias_1 }

/**
 * The react component for the `bank-card-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bank Card Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/bank-card-line.svg)
 */
declare const BankCardLineIcon: IconType;
export { BankCardLineIcon }
export { BankCardLineIcon as BankCardLineIcon_alias_1 }

/**
 * The react component for the `bank-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bank Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/bank-fill.svg)
 */
declare const BankFillIcon: IconType;
export { BankFillIcon }
export { BankFillIcon as BankFillIcon_alias_1 }

/**
 * The react component for the `bank-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bank Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/bank-line.svg)
 */
declare const BankLineIcon: IconType;
export { BankLineIcon }
export { BankLineIcon as BankLineIcon_alias_1 }

/**
 * The react component for the `bar-chart-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bar Chart 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bar-chart-2-fill.svg)
 */
declare const BarChart2FillIcon: IconType;
export { BarChart2FillIcon }
export { BarChart2FillIcon as BarChart2FillIcon_alias_1 }

/**
 * The react component for the `bar-chart-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bar Chart 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bar-chart-2-line.svg)
 */
declare const BarChart2LineIcon: IconType;
export { BarChart2LineIcon }
export { BarChart2LineIcon as BarChart2LineIcon_alias_1 }

/**
 * The react component for the `bar-chart-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bar Chart Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bar-chart-box-fill.svg)
 */
declare const BarChartBoxFillIcon: IconType;
export { BarChartBoxFillIcon }
export { BarChartBoxFillIcon as BarChartBoxFillIcon_alias_1 }

/**
 * The react component for the `bar-chart-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bar Chart Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bar-chart-box-line.svg)
 */
declare const BarChartBoxLineIcon: IconType;
export { BarChartBoxLineIcon }
export { BarChartBoxLineIcon as BarChartBoxLineIcon_alias_1 }

/**
 * The react component for the `bar-chart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bar Chart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bar-chart-fill.svg)
 */
declare const BarChartFillIcon: IconType;
export { BarChartFillIcon }
export { BarChartFillIcon as BarChartFillIcon_alias_1 }

/**
 * The react component for the `bar-chart-grouped-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bar Chart Grouped Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bar-chart-grouped-fill.svg)
 */
declare const BarChartGroupedFillIcon: IconType;
export { BarChartGroupedFillIcon }
export { BarChartGroupedFillIcon as BarChartGroupedFillIcon_alias_1 }

/**
 * The react component for the `bar-chart-grouped-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bar Chart Grouped Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bar-chart-grouped-line.svg)
 */
declare const BarChartGroupedLineIcon: IconType;
export { BarChartGroupedLineIcon }
export { BarChartGroupedLineIcon as BarChartGroupedLineIcon_alias_1 }

/**
 * The react component for the `bar-chart-horizontal-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bar Chart Horizontal Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bar-chart-horizontal-fill.svg)
 */
declare const BarChartHorizontalFillIcon: IconType;
export { BarChartHorizontalFillIcon }
export { BarChartHorizontalFillIcon as BarChartHorizontalFillIcon_alias_1 }

/**
 * The react component for the `bar-chart-horizontal-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bar Chart Horizontal Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bar-chart-horizontal-line.svg)
 */
declare const BarChartHorizontalLineIcon: IconType;
export { BarChartHorizontalLineIcon }
export { BarChartHorizontalLineIcon as BarChartHorizontalLineIcon_alias_1 }

/**
 * The react component for the `bar-chart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bar Chart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bar-chart-line.svg)
 */
declare const BarChartLineIcon: IconType;
export { BarChartLineIcon }
export { BarChartLineIcon as BarChartLineIcon_alias_1 }

/**
 * The react component for the `barcode-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Barcode Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/barcode-box-fill.svg)
 */
declare const BarcodeBoxFillIcon: IconType;
export { BarcodeBoxFillIcon }
export { BarcodeBoxFillIcon as BarcodeBoxFillIcon_alias_1 }

/**
 * The react component for the `barcode-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Barcode Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/barcode-box-line.svg)
 */
declare const BarcodeBoxLineIcon: IconType;
export { BarcodeBoxLineIcon }
export { BarcodeBoxLineIcon as BarcodeBoxLineIcon_alias_1 }

/**
 * The react component for the `barcode-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Barcode Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/barcode-fill.svg)
 */
declare const BarcodeFillIcon: IconType;
export { BarcodeFillIcon }
export { BarcodeFillIcon as BarcodeFillIcon_alias_1 }

/**
 * The react component for the `barcode-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Barcode Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/barcode-line.svg)
 */
declare const BarcodeLineIcon: IconType;
export { BarcodeLineIcon }
export { BarcodeLineIcon as BarcodeLineIcon_alias_1 }

/**
 * The react component for the `barricade-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Barricade Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/barricade-fill.svg)
 */
declare const BarricadeFillIcon: IconType;
export { BarricadeFillIcon }
export { BarricadeFillIcon as BarricadeFillIcon_alias_1 }

/**
 * The react component for the `barricade-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Barricade Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/barricade-line.svg)
 */
declare const BarricadeLineIcon: IconType;
export { BarricadeLineIcon }
export { BarricadeLineIcon as BarricadeLineIcon_alias_1 }

declare interface BaseFloatingPositioner extends UseEditorFocusProps {
    /**
     * The positioner used to determine the position of the relevant part of the
     * editor state.
     */
    positioner: PositionerParam;
    /**
     * When `true` will hide the popover element whenever the positioner is no
     * longer visible in the DOM.
     */
    hideWhenInvisible?: boolean;
    /**
     * Set animated as detailed [here](https://reakit.io/docs/popover/#animating).
     *
     * Currently this is turned off due to problems with an infinite loop.
     */
    animated?: boolean | number;
    /**
     * Set to false to make the positioner inactive.
     */
    enabled?: boolean;
    /**
     * Where to place the popover relative to the positioner.
     * @remarks
     * The floating-ui library has removed the auto- prefixed placement attribute types.
     * The type declaration you see here is for compatibility with Popper.js.
     *
     * https://floating-ui.com/docs/autoPlacement#conflict-with-flip
     */
    placement?: Placement | 'auto' | `auto-${Alignment}`;
    /**
     * When `true` the child component is rendered outside the `ProseMirror`
     * editor. Set this to `false` when you need to render special components
     * (like inputs) which capture events and conflict with the default
     * prosemirror editor.
     *
     * For toolbars which rely on clicks you can leave this as the default.
     *
     * Setting to true will also make scrolling less smooth since it will be using
     * JavaScript to keep track of the position of the element.
     *
     * @defaultValue false
     */
    renderOutsideEditor?: boolean;
    /**
     * Array of middleware objects to modify the positioning or provide data for
     * rendering.
     */
    middleware?: Array<Middleware | null | undefined | false>;
    /**
     * The strategy to use when positioning the floating element.
     */
    strategy?: Strategy;
    /**
     * Portals the floating element into a given container element — by default,
     * outside of the app root and into the body.
     * @see https://floating-ui.com/docs/FloatingPortal
     * @defaultValue false
     * @remarks This is conflict to renderOutsideEditor, and renderOutsideEditor has high priority.
     * And this property will cause the loss of the css variable if you use remirror's internal style
     */
    useFloatingPortal?: boolean | Parameters<typeof FloatingPortal>[0];
}

/**
 * The react component for the `base-station-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Base Station Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/base-station-fill.svg)
 */
declare const BaseStationFillIcon: IconType;
export { BaseStationFillIcon }
export { BaseStationFillIcon as BaseStationFillIcon_alias_1 }

/**
 * The react component for the `base-station-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Base Station Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/base-station-line.svg)
 */
declare const BaseStationLineIcon: IconType;
export { BaseStationLineIcon }
export { BaseStationLineIcon as BaseStationLineIcon_alias_1 }

/**
 * The react component for the `basketball-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Basketball Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/basketball-fill.svg)
 */
declare const BasketballFillIcon: IconType;
export { BasketballFillIcon }
export { BasketballFillIcon as BasketballFillIcon_alias_1 }

/**
 * The react component for the `basketball-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Basketball Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/basketball-line.svg)
 */
declare const BasketballLineIcon: IconType;
export { BasketballLineIcon }
export { BasketballLineIcon as BasketballLineIcon_alias_1 }

/**
 * The react component for the `battery-2-charge-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery 2 Charge Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-2-charge-fill.svg)
 */
declare const Battery2ChargeFillIcon: IconType;
export { Battery2ChargeFillIcon }
export { Battery2ChargeFillIcon as Battery2ChargeFillIcon_alias_1 }

/**
 * The react component for the `battery-2-charge-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery 2 Charge Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-2-charge-line.svg)
 */
declare const Battery2ChargeLineIcon: IconType;
export { Battery2ChargeLineIcon }
export { Battery2ChargeLineIcon as Battery2ChargeLineIcon_alias_1 }

/**
 * The react component for the `battery-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-2-fill.svg)
 */
declare const Battery2FillIcon: IconType;
export { Battery2FillIcon }
export { Battery2FillIcon as Battery2FillIcon_alias_1 }

/**
 * The react component for the `battery-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-2-line.svg)
 */
declare const Battery2LineIcon: IconType;
export { Battery2LineIcon }
export { Battery2LineIcon as Battery2LineIcon_alias_1 }

/**
 * The react component for the `battery-charge-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery Charge Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-charge-fill.svg)
 */
declare const BatteryChargeFillIcon: IconType;
export { BatteryChargeFillIcon }
export { BatteryChargeFillIcon as BatteryChargeFillIcon_alias_1 }

/**
 * The react component for the `battery-charge-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery Charge Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-charge-line.svg)
 */
declare const BatteryChargeLineIcon: IconType;
export { BatteryChargeLineIcon }
export { BatteryChargeLineIcon as BatteryChargeLineIcon_alias_1 }

/**
 * The react component for the `battery-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-fill.svg)
 */
declare const BatteryFillIcon: IconType;
export { BatteryFillIcon }
export { BatteryFillIcon as BatteryFillIcon_alias_1 }

/**
 * The react component for the `battery-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-line.svg)
 */
declare const BatteryLineIcon: IconType;
export { BatteryLineIcon }
export { BatteryLineIcon as BatteryLineIcon_alias_1 }

/**
 * The react component for the `battery-low-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery Low Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-low-fill.svg)
 */
declare const BatteryLowFillIcon: IconType;
export { BatteryLowFillIcon }
export { BatteryLowFillIcon as BatteryLowFillIcon_alias_1 }

/**
 * The react component for the `battery-low-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery Low Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-low-line.svg)
 */
declare const BatteryLowLineIcon: IconType;
export { BatteryLowLineIcon }
export { BatteryLowLineIcon as BatteryLowLineIcon_alias_1 }

/**
 * The react component for the `battery-saver-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery Saver Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-saver-fill.svg)
 */
declare const BatterySaverFillIcon: IconType;
export { BatterySaverFillIcon }
export { BatterySaverFillIcon as BatterySaverFillIcon_alias_1 }

/**
 * The react component for the `battery-saver-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery Saver Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-saver-line.svg)
 */
declare const BatterySaverLineIcon: IconType;
export { BatterySaverLineIcon }
export { BatterySaverLineIcon as BatterySaverLineIcon_alias_1 }

/**
 * The react component for the `battery-share-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery Share Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-share-fill.svg)
 */
declare const BatteryShareFillIcon: IconType;
export { BatteryShareFillIcon }
export { BatteryShareFillIcon as BatteryShareFillIcon_alias_1 }

/**
 * The react component for the `battery-share-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Battery Share Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/battery-share-line.svg)
 */
declare const BatteryShareLineIcon: IconType;
export { BatteryShareLineIcon }
export { BatteryShareLineIcon as BatteryShareLineIcon_alias_1 }

/**
 * The react component for the `bear-smile-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bear Smile Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/bear-smile-fill.svg)
 */
declare const BearSmileFillIcon: IconType;
export { BearSmileFillIcon }
export { BearSmileFillIcon as BearSmileFillIcon_alias_1 }

/**
 * The react component for the `bear-smile-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bear Smile Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/bear-smile-line.svg)
 */
declare const BearSmileLineIcon: IconType;
export { BearSmileLineIcon }
export { BearSmileLineIcon as BearSmileLineIcon_alias_1 }

/**
 * The react component for the `behance-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Behance Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/behance-fill.svg)
 */
declare const BehanceFillIcon: IconType;
export { BehanceFillIcon }
export { BehanceFillIcon as BehanceFillIcon_alias_1 }

/**
 * The react component for the `behance-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Behance Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/behance-line.svg)
 */
declare const BehanceLineIcon: IconType;
export { BehanceLineIcon }
export { BehanceLineIcon as BehanceLineIcon_alias_1 }

/**
 * The react component for the `bell-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bell Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/bell-fill.svg)
 */
declare const BellFillIcon: IconType;
export { BellFillIcon }
export { BellFillIcon as BellFillIcon_alias_1 }

/**
 * The react component for the `bell-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bell Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/bell-line.svg)
 */
declare const BellLineIcon: IconType;
export { BellLineIcon }
export { BellLineIcon as BellLineIcon_alias_1 }

/**
 * The react component for the `bike-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bike Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/bike-fill.svg)
 */
declare const BikeFillIcon: IconType;
export { BikeFillIcon }
export { BikeFillIcon as BikeFillIcon_alias_1 }

/**
 * The react component for the `bike-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bike Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/bike-line.svg)
 */
declare const BikeLineIcon: IconType;
export { BikeLineIcon }
export { BikeLineIcon as BikeLineIcon_alias_1 }

/**
 * The react component for the `bilibili-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bilibili Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/bilibili-fill.svg)
 */
declare const BilibiliFillIcon: IconType;
export { BilibiliFillIcon }
export { BilibiliFillIcon as BilibiliFillIcon_alias_1 }

/**
 * The react component for the `bilibili-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bilibili Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/bilibili-line.svg)
 */
declare const BilibiliLineIcon: IconType;
export { BilibiliLineIcon }
export { BilibiliLineIcon as BilibiliLineIcon_alias_1 }

/**
 * The react component for the `bill-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bill Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/bill-fill.svg)
 */
declare const BillFillIcon: IconType;
export { BillFillIcon }
export { BillFillIcon as BillFillIcon_alias_1 }

/**
 * The react component for the `billiards-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Billiards Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/billiards-fill.svg)
 */
declare const BilliardsFillIcon: IconType;
export { BilliardsFillIcon }
export { BilliardsFillIcon as BilliardsFillIcon_alias_1 }

/**
 * The react component for the `billiards-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Billiards Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/billiards-line.svg)
 */
declare const BilliardsLineIcon: IconType;
export { BilliardsLineIcon }
export { BilliardsLineIcon as BilliardsLineIcon_alias_1 }

/**
 * The react component for the `bill-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bill Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/bill-line.svg)
 */
declare const BillLineIcon: IconType;
export { BillLineIcon }
export { BillLineIcon as BillLineIcon_alias_1 }

/**
 * The react component for the `bit-coin-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bit Coin Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/bit-coin-fill.svg)
 */
declare const BitCoinFillIcon: IconType;
export { BitCoinFillIcon }
export { BitCoinFillIcon as BitCoinFillIcon_alias_1 }

/**
 * The react component for the `bit-coin-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bit Coin Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/bit-coin-line.svg)
 */
declare const BitCoinLineIcon: IconType;
export { BitCoinLineIcon }
export { BitCoinLineIcon as BitCoinLineIcon_alias_1 }

/**
 * The react component for the `blaze-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Blaze Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/blaze-fill.svg)
 */
declare const BlazeFillIcon: IconType;
export { BlazeFillIcon }
export { BlazeFillIcon as BlazeFillIcon_alias_1 }

/**
 * The react component for the `blaze-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Blaze Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/blaze-line.svg)
 */
declare const BlazeLineIcon: IconType;
export { BlazeLineIcon }
export { BlazeLineIcon as BlazeLineIcon_alias_1 }

/**
 * The react component for the `bluetooth-connect-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bluetooth Connect Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/bluetooth-connect-fill.svg)
 */
declare const BluetoothConnectFillIcon: IconType;
export { BluetoothConnectFillIcon }
export { BluetoothConnectFillIcon as BluetoothConnectFillIcon_alias_1 }

/**
 * The react component for the `bluetooth-connect-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bluetooth Connect Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/bluetooth-connect-line.svg)
 */
declare const BluetoothConnectLineIcon: IconType;
export { BluetoothConnectLineIcon }
export { BluetoothConnectLineIcon as BluetoothConnectLineIcon_alias_1 }

/**
 * The react component for the `bluetooth-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bluetooth Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/bluetooth-fill.svg)
 */
declare const BluetoothFillIcon: IconType;
export { BluetoothFillIcon }
export { BluetoothFillIcon as BluetoothFillIcon_alias_1 }

/**
 * The react component for the `bluetooth-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bluetooth Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/bluetooth-line.svg)
 */
declare const BluetoothLineIcon: IconType;
export { BluetoothLineIcon }
export { BluetoothLineIcon as BluetoothLineIcon_alias_1 }

/**
 * The react component for the `blur-off-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Blur Off Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/blur-off-fill.svg)
 */
declare const BlurOffFillIcon: IconType;
export { BlurOffFillIcon }
export { BlurOffFillIcon as BlurOffFillIcon_alias_1 }

/**
 * The react component for the `blur-off-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Blur Off Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/blur-off-line.svg)
 */
declare const BlurOffLineIcon: IconType;
export { BlurOffLineIcon }
export { BlurOffLineIcon as BlurOffLineIcon_alias_1 }

/**
 * The react component for the `body-scan-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Body Scan Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/body-scan-fill.svg)
 */
declare const BodyScanFillIcon: IconType;
export { BodyScanFillIcon }
export { BodyScanFillIcon as BodyScanFillIcon_alias_1 }

/**
 * The react component for the `body-scan-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Body Scan Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/body-scan-line.svg)
 */
declare const BodyScanLineIcon: IconType;
export { BodyScanLineIcon }
export { BodyScanLineIcon as BodyScanLineIcon_alias_1 }

/**
 * The react component for the `bold.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bold Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/bold.svg)
 */
declare const BoldIcon: IconType;
export { BoldIcon }
export { BoldIcon as BoldIcon_alias_1 }
export { BoldIcon as BoldIcon_alias_2 }

/**
 * The react component for the `book-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Book 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/book-2-fill.svg)
 */
declare const Book2FillIcon: IconType;
export { Book2FillIcon }
export { Book2FillIcon as Book2FillIcon_alias_1 }

/**
 * The react component for the `book-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Book 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/book-2-line.svg)
 */
declare const Book2LineIcon: IconType;
export { Book2LineIcon }
export { Book2LineIcon as Book2LineIcon_alias_1 }

/**
 * The react component for the `book-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Book 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/book-3-fill.svg)
 */
declare const Book3FillIcon: IconType;
export { Book3FillIcon }
export { Book3FillIcon as Book3FillIcon_alias_1 }

/**
 * The react component for the `book-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Book 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/book-3-line.svg)
 */
declare const Book3LineIcon: IconType;
export { Book3LineIcon }
export { Book3LineIcon as Book3LineIcon_alias_1 }

/**
 * The react component for the `book-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Book Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/book-fill.svg)
 */
declare const BookFillIcon: IconType;
export { BookFillIcon }
export { BookFillIcon as BookFillIcon_alias_1 }

/**
 * The react component for the `booklet-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Booklet Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/booklet-fill.svg)
 */
declare const BookletFillIcon: IconType;
export { BookletFillIcon }
export { BookletFillIcon as BookletFillIcon_alias_1 }

/**
 * The react component for the `booklet-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Booklet Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/booklet-line.svg)
 */
declare const BookletLineIcon: IconType;
export { BookletLineIcon }
export { BookletLineIcon as BookletLineIcon_alias_1 }

/**
 * The react component for the `book-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Book Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/book-line.svg)
 */
declare const BookLineIcon: IconType;
export { BookLineIcon }
export { BookLineIcon as BookLineIcon_alias_1 }

/**
 * The react component for the `bookmark-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bookmark 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bookmark-2-fill.svg)
 */
declare const Bookmark2FillIcon: IconType;
export { Bookmark2FillIcon }
export { Bookmark2FillIcon as Bookmark2FillIcon_alias_1 }

/**
 * The react component for the `bookmark-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bookmark 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bookmark-2-line.svg)
 */
declare const Bookmark2LineIcon: IconType;
export { Bookmark2LineIcon }
export { Bookmark2LineIcon as Bookmark2LineIcon_alias_1 }

/**
 * The react component for the `bookmark-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bookmark 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bookmark-3-fill.svg)
 */
declare const Bookmark3FillIcon: IconType;
export { Bookmark3FillIcon }
export { Bookmark3FillIcon as Bookmark3FillIcon_alias_1 }

/**
 * The react component for the `bookmark-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bookmark 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bookmark-3-line.svg)
 */
declare const Bookmark3LineIcon: IconType;
export { Bookmark3LineIcon }
export { Bookmark3LineIcon as Bookmark3LineIcon_alias_1 }

/**
 * The react component for the `book-mark-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Book Mark Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/book-mark-fill.svg)
 */
declare const BookMarkFillIcon: IconType;
export { BookMarkFillIcon }
export { BookMarkFillIcon as BookMarkFillIcon_alias_1 }

/**
 * The react component for the `bookmark-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bookmark Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bookmark-fill.svg)
 */
declare const BookmarkFillIcon: IconType;
export { BookmarkFillIcon }
export { BookmarkFillIcon as BookmarkFillIcon_alias_1 }

/**
 * The react component for the `book-mark-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Book Mark Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/book-mark-line.svg)
 */
declare const BookMarkLineIcon: IconType;
export { BookMarkLineIcon }
export { BookMarkLineIcon as BookMarkLineIcon_alias_1 }

/**
 * The react component for the `bookmark-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bookmark Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bookmark-line.svg)
 */
declare const BookmarkLineIcon: IconType;
export { BookmarkLineIcon }
export { BookmarkLineIcon as BookmarkLineIcon_alias_1 }

/**
 * The react component for the `book-open-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Book Open Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/book-open-fill.svg)
 */
declare const BookOpenFillIcon: IconType;
export { BookOpenFillIcon }
export { BookOpenFillIcon as BookOpenFillIcon_alias_1 }

/**
 * The react component for the `book-open-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Book Open Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/book-open-line.svg)
 */
declare const BookOpenLineIcon: IconType;
export { BookOpenLineIcon }
export { BookOpenLineIcon as BookOpenLineIcon_alias_1 }

/**
 * The react component for the `book-read-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Book Read Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/book-read-fill.svg)
 */
declare const BookReadFillIcon: IconType;
export { BookReadFillIcon }
export { BookReadFillIcon as BookReadFillIcon_alias_1 }

/**
 * The react component for the `book-read-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Book Read Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/book-read-line.svg)
 */
declare const BookReadLineIcon: IconType;
export { BookReadLineIcon }
export { BookReadLineIcon as BookReadLineIcon_alias_1 }

/**
 * The react component for the `boxing-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Boxing Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/boxing-fill.svg)
 */
declare const BoxingFillIcon: IconType;
export { BoxingFillIcon }
export { BoxingFillIcon as BoxingFillIcon_alias_1 }

/**
 * The react component for the `boxing-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Boxing Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/boxing-line.svg)
 */
declare const BoxingLineIcon: IconType;
export { BoxingLineIcon }
export { BoxingLineIcon as BoxingLineIcon_alias_1 }

/**
 * The react component for the `braces-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Braces Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/braces-fill.svg)
 */
declare const BracesFillIcon: IconType;
export { BracesFillIcon }
export { BracesFillIcon as BracesFillIcon_alias_1 }

/**
 * The react component for the `braces-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Braces Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/braces-line.svg)
 */
declare const BracesLineIcon: IconType;
export { BracesLineIcon }
export { BracesLineIcon as BracesLineIcon_alias_1 }
export { BracesLineIcon as BracesLineIcon_alias_2 }

/**
 * The react component for the `brackets-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Brackets Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/brackets-fill.svg)
 */
declare const BracketsFillIcon: IconType;
export { BracketsFillIcon }
export { BracketsFillIcon as BracketsFillIcon_alias_1 }

/**
 * The react component for the `brackets-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Brackets Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/brackets-line.svg)
 */
declare const BracketsLineIcon: IconType;
export { BracketsLineIcon }
export { BracketsLineIcon as BracketsLineIcon_alias_1 }

/**
 * The react component for the `briefcase-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Briefcase 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/briefcase-2-fill.svg)
 */
declare const Briefcase2FillIcon: IconType;
export { Briefcase2FillIcon }
export { Briefcase2FillIcon as Briefcase2FillIcon_alias_1 }

/**
 * The react component for the `briefcase-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Briefcase 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/briefcase-2-line.svg)
 */
declare const Briefcase2LineIcon: IconType;
export { Briefcase2LineIcon }
export { Briefcase2LineIcon as Briefcase2LineIcon_alias_1 }

/**
 * The react component for the `briefcase-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Briefcase 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/briefcase-3-fill.svg)
 */
declare const Briefcase3FillIcon: IconType;
export { Briefcase3FillIcon }
export { Briefcase3FillIcon as Briefcase3FillIcon_alias_1 }

/**
 * The react component for the `briefcase-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Briefcase 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/briefcase-3-line.svg)
 */
declare const Briefcase3LineIcon: IconType;
export { Briefcase3LineIcon }
export { Briefcase3LineIcon as Briefcase3LineIcon_alias_1 }

/**
 * The react component for the `briefcase-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Briefcase 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/briefcase-4-fill.svg)
 */
declare const Briefcase4FillIcon: IconType;
export { Briefcase4FillIcon }
export { Briefcase4FillIcon as Briefcase4FillIcon_alias_1 }

/**
 * The react component for the `briefcase-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Briefcase 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/briefcase-4-line.svg)
 */
declare const Briefcase4LineIcon: IconType;
export { Briefcase4LineIcon }
export { Briefcase4LineIcon as Briefcase4LineIcon_alias_1 }

/**
 * The react component for the `briefcase-5-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Briefcase 5 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/briefcase-5-fill.svg)
 */
declare const Briefcase5FillIcon: IconType;
export { Briefcase5FillIcon }
export { Briefcase5FillIcon as Briefcase5FillIcon_alias_1 }

/**
 * The react component for the `briefcase-5-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Briefcase 5 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/briefcase-5-line.svg)
 */
declare const Briefcase5LineIcon: IconType;
export { Briefcase5LineIcon }
export { Briefcase5LineIcon as Briefcase5LineIcon_alias_1 }

/**
 * The react component for the `briefcase-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Briefcase Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/briefcase-fill.svg)
 */
declare const BriefcaseFillIcon: IconType;
export { BriefcaseFillIcon }
export { BriefcaseFillIcon as BriefcaseFillIcon_alias_1 }

/**
 * The react component for the `briefcase-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Briefcase Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/briefcase-line.svg)
 */
declare const BriefcaseLineIcon: IconType;
export { BriefcaseLineIcon }
export { BriefcaseLineIcon as BriefcaseLineIcon_alias_1 }

/**
 * The react component for the `bring-forward.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bring Forward Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/bring-forward.svg)
 */
declare const BringForwardIcon: IconType;
export { BringForwardIcon }
export { BringForwardIcon as BringForwardIcon_alias_1 }
export { BringForwardIcon as BringForwardIcon_alias_2 }

/**
 * The react component for the `bring-to-front.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bring To Front Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/bring-to-front.svg)
 */
declare const BringToFrontIcon: IconType;
export { BringToFrontIcon }
export { BringToFrontIcon as BringToFrontIcon_alias_1 }
export { BringToFrontIcon as BringToFrontIcon_alias_2 }

/**
 * The react component for the `broadcast-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Broadcast Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/broadcast-fill.svg)
 */
declare const BroadcastFillIcon: IconType;
export { BroadcastFillIcon }
export { BroadcastFillIcon as BroadcastFillIcon_alias_1 }

/**
 * The react component for the `broadcast-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Broadcast Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/broadcast-line.svg)
 */
declare const BroadcastLineIcon: IconType;
export { BroadcastLineIcon }
export { BroadcastLineIcon as BroadcastLineIcon_alias_1 }

/**
 * The react component for the `brush-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Brush 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/brush-2-fill.svg)
 */
declare const Brush2FillIcon: IconType;
export { Brush2FillIcon }
export { Brush2FillIcon as Brush2FillIcon_alias_1 }

/**
 * The react component for the `brush-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Brush 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/brush-2-line.svg)
 */
declare const Brush2LineIcon: IconType;
export { Brush2LineIcon }
export { Brush2LineIcon as Brush2LineIcon_alias_1 }

/**
 * The react component for the `brush-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Brush 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/brush-3-fill.svg)
 */
declare const Brush3FillIcon: IconType;
export { Brush3FillIcon }
export { Brush3FillIcon as Brush3FillIcon_alias_1 }

/**
 * The react component for the `brush-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Brush 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/brush-3-line.svg)
 */
declare const Brush3LineIcon: IconType;
export { Brush3LineIcon }
export { Brush3LineIcon as Brush3LineIcon_alias_1 }

/**
 * The react component for the `brush-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Brush 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/brush-4-fill.svg)
 */
declare const Brush4FillIcon: IconType;
export { Brush4FillIcon }
export { Brush4FillIcon as Brush4FillIcon_alias_1 }

/**
 * The react component for the `brush-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Brush 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/brush-4-line.svg)
 */
declare const Brush4LineIcon: IconType;
export { Brush4LineIcon }
export { Brush4LineIcon as Brush4LineIcon_alias_1 }

/**
 * The react component for the `brush-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Brush Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/brush-fill.svg)
 */
declare const BrushFillIcon: IconType;
export { BrushFillIcon }
export { BrushFillIcon as BrushFillIcon_alias_1 }

/**
 * The react component for the `brush-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Brush Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/brush-line.svg)
 */
declare const BrushLineIcon: IconType;
export { BrushLineIcon }
export { BrushLineIcon as BrushLineIcon_alias_1 }

/**
 * The react component for the `bubble-chart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bubble Chart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bubble-chart-fill.svg)
 */
declare const BubbleChartFillIcon: IconType;
export { BubbleChartFillIcon }
export { BubbleChartFillIcon as BubbleChartFillIcon_alias_1 }

/**
 * The react component for the `bubble-chart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bubble Chart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/bubble-chart-line.svg)
 */
declare const BubbleChartLineIcon: IconType;
export { BubbleChartLineIcon }
export { BubbleChartLineIcon as BubbleChartLineIcon_alias_1 }

/**
 * The react component for the `bug-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bug 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/bug-2-fill.svg)
 */
declare const Bug2FillIcon: IconType;
export { Bug2FillIcon }
export { Bug2FillIcon as Bug2FillIcon_alias_1 }

/**
 * The react component for the `bug-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bug 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/bug-2-line.svg)
 */
declare const Bug2LineIcon: IconType;
export { Bug2LineIcon }
export { Bug2LineIcon as Bug2LineIcon_alias_1 }

/**
 * The react component for the `bug-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bug Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/bug-fill.svg)
 */
declare const BugFillIcon: IconType;
export { BugFillIcon }
export { BugFillIcon as BugFillIcon_alias_1 }

/**
 * The react component for the `bug-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bug Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/bug-line.svg)
 */
declare const BugLineIcon: IconType;
export { BugLineIcon }
export { BugLineIcon as BugLineIcon_alias_1 }

/**
 * The react component for the `building-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Building 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/building-2-fill.svg)
 */
declare const Building2FillIcon: IconType;
export { Building2FillIcon }
export { Building2FillIcon as Building2FillIcon_alias_1 }

/**
 * The react component for the `building-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Building 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/building-2-line.svg)
 */
declare const Building2LineIcon: IconType;
export { Building2LineIcon }
export { Building2LineIcon as Building2LineIcon_alias_1 }

/**
 * The react component for the `building-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Building 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/building-3-fill.svg)
 */
declare const Building3FillIcon: IconType;
export { Building3FillIcon }
export { Building3FillIcon as Building3FillIcon_alias_1 }

/**
 * The react component for the `building-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Building 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/building-3-line.svg)
 */
declare const Building3LineIcon: IconType;
export { Building3LineIcon }
export { Building3LineIcon as Building3LineIcon_alias_1 }

/**
 * The react component for the `building-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Building 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/building-4-fill.svg)
 */
declare const Building4FillIcon: IconType;
export { Building4FillIcon }
export { Building4FillIcon as Building4FillIcon_alias_1 }

/**
 * The react component for the `building-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Building 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/building-4-line.svg)
 */
declare const Building4LineIcon: IconType;
export { Building4LineIcon }
export { Building4LineIcon as Building4LineIcon_alias_1 }

/**
 * The react component for the `building-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Building Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/building-fill.svg)
 */
declare const BuildingFillIcon: IconType;
export { BuildingFillIcon }
export { BuildingFillIcon as BuildingFillIcon_alias_1 }

/**
 * The react component for the `building-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Building Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/building-line.svg)
 */
declare const BuildingLineIcon: IconType;
export { BuildingLineIcon }
export { BuildingLineIcon as BuildingLineIcon_alias_1 }

/**
 * The react component for the `bus-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bus 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/bus-2-fill.svg)
 */
declare const Bus2FillIcon: IconType;
export { Bus2FillIcon }
export { Bus2FillIcon as Bus2FillIcon_alias_1 }

/**
 * The react component for the `bus-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bus 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/bus-2-line.svg)
 */
declare const Bus2LineIcon: IconType;
export { Bus2LineIcon }
export { Bus2LineIcon as Bus2LineIcon_alias_1 }

/**
 * The react component for the `bus-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bus Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/bus-fill.svg)
 */
declare const BusFillIcon: IconType;
export { BusFillIcon }
export { BusFillIcon as BusFillIcon_alias_1 }

/**
 * The react component for the `bus-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bus Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/bus-line.svg)
 */
declare const BusLineIcon: IconType;
export { BusLineIcon }
export { BusLineIcon as BusLineIcon_alias_1 }

/**
 * The react component for the `bus-wifi-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bus Wifi Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/bus-wifi-fill.svg)
 */
declare const BusWifiFillIcon: IconType;
export { BusWifiFillIcon }
export { BusWifiFillIcon as BusWifiFillIcon_alias_1 }

/**
 * The react component for the `bus-wifi-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Bus Wifi Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/bus-wifi-line.svg)
 */
declare const BusWifiLineIcon: IconType;
export { BusWifiLineIcon }
export { BusWifiLineIcon as BusWifiLineIcon_alias_1 }

/**
 * The react component for the `cactus-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cactus Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/cactus-fill.svg)
 */
declare const CactusFillIcon: IconType;
export { CactusFillIcon }
export { CactusFillIcon as CactusFillIcon_alias_1 }

/**
 * The react component for the `cactus-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cactus Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/cactus-line.svg)
 */
declare const CactusLineIcon: IconType;
export { CactusLineIcon }
export { CactusLineIcon as CactusLineIcon_alias_1 }

/**
 * The react component for the `cake-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cake 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/cake-2-fill.svg)
 */
declare const Cake2FillIcon: IconType;
export { Cake2FillIcon }
export { Cake2FillIcon as Cake2FillIcon_alias_1 }

/**
 * The react component for the `cake-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cake 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/cake-2-line.svg)
 */
declare const Cake2LineIcon: IconType;
export { Cake2LineIcon }
export { Cake2LineIcon as Cake2LineIcon_alias_1 }

/**
 * The react component for the `cake-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cake 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/cake-3-fill.svg)
 */
declare const Cake3FillIcon: IconType;
export { Cake3FillIcon }
export { Cake3FillIcon as Cake3FillIcon_alias_1 }

/**
 * The react component for the `cake-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cake 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/cake-3-line.svg)
 */
declare const Cake3LineIcon: IconType;
export { Cake3LineIcon }
export { Cake3LineIcon as Cake3LineIcon_alias_1 }

/**
 * The react component for the `cake-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cake Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/cake-fill.svg)
 */
declare const CakeFillIcon: IconType;
export { CakeFillIcon }
export { CakeFillIcon as CakeFillIcon_alias_1 }

/**
 * The react component for the `cake-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cake Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/cake-line.svg)
 */
declare const CakeLineIcon: IconType;
export { CakeLineIcon }
export { CakeLineIcon as CakeLineIcon_alias_1 }

/**
 * The react component for the `calculator-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Calculator Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/calculator-fill.svg)
 */
declare const CalculatorFillIcon: IconType;
export { CalculatorFillIcon }
export { CalculatorFillIcon as CalculatorFillIcon_alias_1 }

/**
 * The react component for the `calculator-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Calculator Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/calculator-line.svg)
 */
declare const CalculatorLineIcon: IconType;
export { CalculatorLineIcon }
export { CalculatorLineIcon as CalculatorLineIcon_alias_1 }

/**
 * The react component for the `calendar-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Calendar 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/calendar-2-fill.svg)
 */
declare const Calendar2FillIcon: IconType;
export { Calendar2FillIcon }
export { Calendar2FillIcon as Calendar2FillIcon_alias_1 }

/**
 * The react component for the `calendar-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Calendar 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/calendar-2-line.svg)
 */
declare const Calendar2LineIcon: IconType;
export { Calendar2LineIcon }
export { Calendar2LineIcon as Calendar2LineIcon_alias_1 }

/**
 * The react component for the `calendar-check-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Calendar Check Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/calendar-check-fill.svg)
 */
declare const CalendarCheckFillIcon: IconType;
export { CalendarCheckFillIcon }
export { CalendarCheckFillIcon as CalendarCheckFillIcon_alias_1 }

/**
 * The react component for the `calendar-check-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Calendar Check Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/calendar-check-line.svg)
 */
declare const CalendarCheckLineIcon: IconType;
export { CalendarCheckLineIcon }
export { CalendarCheckLineIcon as CalendarCheckLineIcon_alias_1 }

/**
 * The react component for the `calendar-event-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Calendar Event Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/calendar-event-fill.svg)
 */
declare const CalendarEventFillIcon: IconType;
export { CalendarEventFillIcon }
export { CalendarEventFillIcon as CalendarEventFillIcon_alias_1 }

/**
 * The react component for the `calendar-event-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Calendar Event Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/calendar-event-line.svg)
 */
declare const CalendarEventLineIcon: IconType;
export { CalendarEventLineIcon }
export { CalendarEventLineIcon as CalendarEventLineIcon_alias_1 }

/**
 * The react component for the `calendar-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Calendar Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/calendar-fill.svg)
 */
declare const CalendarFillIcon: IconType;
export { CalendarFillIcon }
export { CalendarFillIcon as CalendarFillIcon_alias_1 }

/**
 * The react component for the `calendar-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Calendar Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/calendar-line.svg)
 */
declare const CalendarLineIcon: IconType;
export { CalendarLineIcon }
export { CalendarLineIcon as CalendarLineIcon_alias_1 }

/**
 * The react component for the `calendar-todo-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Calendar Todo Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/calendar-todo-fill.svg)
 */
declare const CalendarTodoFillIcon: IconType;
export { CalendarTodoFillIcon }
export { CalendarTodoFillIcon as CalendarTodoFillIcon_alias_1 }

/**
 * The react component for the `calendar-todo-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Calendar Todo Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/calendar-todo-line.svg)
 */
declare const CalendarTodoLineIcon: IconType;
export { CalendarTodoLineIcon }
export { CalendarTodoLineIcon as CalendarTodoLineIcon_alias_1 }

/**
 * The react component for the `camera-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Camera 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/camera-2-fill.svg)
 */
declare const Camera2FillIcon: IconType;
export { Camera2FillIcon }
export { Camera2FillIcon as Camera2FillIcon_alias_1 }

/**
 * The react component for the `camera-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Camera 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/camera-2-line.svg)
 */
declare const Camera2LineIcon: IconType;
export { Camera2LineIcon }
export { Camera2LineIcon as Camera2LineIcon_alias_1 }

/**
 * The react component for the `camera-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Camera 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/camera-3-fill.svg)
 */
declare const Camera3FillIcon: IconType;
export { Camera3FillIcon }
export { Camera3FillIcon as Camera3FillIcon_alias_1 }

/**
 * The react component for the `camera-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Camera 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/camera-3-line.svg)
 */
declare const Camera3LineIcon: IconType;
export { Camera3LineIcon }
export { Camera3LineIcon as Camera3LineIcon_alias_1 }

/**
 * The react component for the `camera-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Camera Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/camera-fill.svg)
 */
declare const CameraFillIcon: IconType;
export { CameraFillIcon }
export { CameraFillIcon as CameraFillIcon_alias_1 }

/**
 * The react component for the `camera-lens-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Camera Lens Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/camera-lens-fill.svg)
 */
declare const CameraLensFillIcon: IconType;
export { CameraLensFillIcon }
export { CameraLensFillIcon as CameraLensFillIcon_alias_1 }

/**
 * The react component for the `camera-lens-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Camera Lens Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/camera-lens-line.svg)
 */
declare const CameraLensLineIcon: IconType;
export { CameraLensLineIcon }
export { CameraLensLineIcon as CameraLensLineIcon_alias_1 }

/**
 * The react component for the `camera-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Camera Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/camera-line.svg)
 */
declare const CameraLineIcon: IconType;
export { CameraLineIcon }
export { CameraLineIcon as CameraLineIcon_alias_1 }

/**
 * The react component for the `camera-off-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Camera Off Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/camera-off-fill.svg)
 */
declare const CameraOffFillIcon: IconType;
export { CameraOffFillIcon }
export { CameraOffFillIcon as CameraOffFillIcon_alias_1 }

/**
 * The react component for the `camera-off-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Camera Off Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/camera-off-line.svg)
 */
declare const CameraOffLineIcon: IconType;
export { CameraOffLineIcon }
export { CameraOffLineIcon as CameraOffLineIcon_alias_1 }

/**
 * The react component for the `camera-switch-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Camera Switch Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/camera-switch-fill.svg)
 */
declare const CameraSwitchFillIcon: IconType;
export { CameraSwitchFillIcon }
export { CameraSwitchFillIcon as CameraSwitchFillIcon_alias_1 }

/**
 * The react component for the `camera-switch-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Camera Switch Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/camera-switch-line.svg)
 */
declare const CameraSwitchLineIcon: IconType;
export { CameraSwitchLineIcon }
export { CameraSwitchLineIcon as CameraSwitchLineIcon_alias_1 }

/**
 * The react component for the `capsule-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Capsule Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/capsule-fill.svg)
 */
declare const CapsuleFillIcon: IconType;
export { CapsuleFillIcon }
export { CapsuleFillIcon as CapsuleFillIcon_alias_1 }

/**
 * The react component for the `capsule-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Capsule Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/capsule-line.svg)
 */
declare const CapsuleLineIcon: IconType;
export { CapsuleLineIcon }
export { CapsuleLineIcon as CapsuleLineIcon_alias_1 }

/**
 * The react component for the `caravan-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Caravan Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/caravan-fill.svg)
 */
declare const CaravanFillIcon: IconType;
export { CaravanFillIcon }
export { CaravanFillIcon as CaravanFillIcon_alias_1 }

/**
 * The react component for the `caravan-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Caravan Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/caravan-line.svg)
 */
declare const CaravanLineIcon: IconType;
export { CaravanLineIcon }
export { CaravanLineIcon as CaravanLineIcon_alias_1 }

/**
 * The react component for the `car-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Car Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/car-fill.svg)
 */
declare const CarFillIcon: IconType;
export { CarFillIcon }
export { CarFillIcon as CarFillIcon_alias_1 }

/**
 * The react component for the `car-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Car Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/car-line.svg)
 */
declare const CarLineIcon: IconType;
export { CarLineIcon }
export { CarLineIcon as CarLineIcon_alias_1 }

/**
 * The react component for the `car-washing-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Car Washing Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/car-washing-fill.svg)
 */
declare const CarWashingFillIcon: IconType;
export { CarWashingFillIcon }
export { CarWashingFillIcon as CarWashingFillIcon_alias_1 }

/**
 * The react component for the `car-washing-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Car Washing Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/car-washing-line.svg)
 */
declare const CarWashingLineIcon: IconType;
export { CarWashingLineIcon }
export { CarWashingLineIcon as CarWashingLineIcon_alias_1 }

/**
 * The react component for the `cast-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cast Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/cast-fill.svg)
 */
declare const CastFillIcon: IconType;
export { CastFillIcon }
export { CastFillIcon as CastFillIcon_alias_1 }

/**
 * The react component for the `cast-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cast Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/cast-line.svg)
 */
declare const CastLineIcon: IconType;
export { CastLineIcon }
export { CastLineIcon as CastLineIcon_alias_1 }

/**
 * The react component for the `cellphone-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cellphone Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/cellphone-fill.svg)
 */
declare const CellphoneFillIcon: IconType;
export { CellphoneFillIcon }
export { CellphoneFillIcon as CellphoneFillIcon_alias_1 }

/**
 * The react component for the `cellphone-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cellphone Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/cellphone-line.svg)
 */
declare const CellphoneLineIcon: IconType;
export { CellphoneLineIcon }
export { CellphoneLineIcon as CellphoneLineIcon_alias_1 }

/**
 * The react component for the `celsius-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Celsius Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/celsius-fill.svg)
 */
declare const CelsiusFillIcon: IconType;
export { CelsiusFillIcon }
export { CelsiusFillIcon as CelsiusFillIcon_alias_1 }

/**
 * The react component for the `celsius-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Celsius Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/celsius-line.svg)
 */
declare const CelsiusLineIcon: IconType;
export { CelsiusLineIcon }
export { CelsiusLineIcon as CelsiusLineIcon_alias_1 }

/**
 * The react component for the `centos-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Centos Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/centos-fill.svg)
 */
declare const CentosFillIcon: IconType;
export { CentosFillIcon }
export { CentosFillIcon as CentosFillIcon_alias_1 }

/**
 * The react component for the `centos-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Centos Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/centos-line.svg)
 */
declare const CentosLineIcon: IconType;
export { CentosLineIcon }
export { CentosLineIcon as CentosLineIcon_alias_1 }

/**
 * The react component for the `character-recognition-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Character Recognition Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/character-recognition-fill.svg)
 */
declare const CharacterRecognitionFillIcon: IconType;
export { CharacterRecognitionFillIcon }
export { CharacterRecognitionFillIcon as CharacterRecognitionFillIcon_alias_1 }

/**
 * The react component for the `character-recognition-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Character Recognition Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/character-recognition-line.svg)
 */
declare const CharacterRecognitionLineIcon: IconType;
export { CharacterRecognitionLineIcon }
export { CharacterRecognitionLineIcon as CharacterRecognitionLineIcon_alias_1 }

/**
 * The react component for the `charging-pile-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Charging Pile 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/charging-pile-2-fill.svg)
 */
declare const ChargingPile2FillIcon: IconType;
export { ChargingPile2FillIcon }
export { ChargingPile2FillIcon as ChargingPile2FillIcon_alias_1 }

/**
 * The react component for the `charging-pile-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Charging Pile 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/charging-pile-2-line.svg)
 */
declare const ChargingPile2LineIcon: IconType;
export { ChargingPile2LineIcon }
export { ChargingPile2LineIcon as ChargingPile2LineIcon_alias_1 }

/**
 * The react component for the `charging-pile-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Charging Pile Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/charging-pile-fill.svg)
 */
declare const ChargingPileFillIcon: IconType;
export { ChargingPileFillIcon }
export { ChargingPileFillIcon as ChargingPileFillIcon_alias_1 }

/**
 * The react component for the `charging-pile-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Charging Pile Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/charging-pile-line.svg)
 */
declare const ChargingPileLineIcon: IconType;
export { ChargingPileLineIcon }
export { ChargingPileLineIcon as ChargingPileLineIcon_alias_1 }

/**
 * The react component for the `chat-1-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat 1 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-1-fill.svg)
 */
declare const Chat1FillIcon: IconType;
export { Chat1FillIcon }
export { Chat1FillIcon as Chat1FillIcon_alias_1 }

/**
 * The react component for the `chat-1-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat 1 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-1-line.svg)
 */
declare const Chat1LineIcon: IconType;
export { Chat1LineIcon }
export { Chat1LineIcon as Chat1LineIcon_alias_1 }

/**
 * The react component for the `chat-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-2-fill.svg)
 */
declare const Chat2FillIcon: IconType;
export { Chat2FillIcon }
export { Chat2FillIcon as Chat2FillIcon_alias_1 }

/**
 * The react component for the `chat-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-2-line.svg)
 */
declare const Chat2LineIcon: IconType;
export { Chat2LineIcon }
export { Chat2LineIcon as Chat2LineIcon_alias_1 }

/**
 * The react component for the `chat-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-3-fill.svg)
 */
declare const Chat3FillIcon: IconType;
export { Chat3FillIcon }
export { Chat3FillIcon as Chat3FillIcon_alias_1 }

/**
 * The react component for the `chat-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-3-line.svg)
 */
declare const Chat3LineIcon: IconType;
export { Chat3LineIcon }
export { Chat3LineIcon as Chat3LineIcon_alias_1 }

/**
 * The react component for the `chat-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-4-fill.svg)
 */
declare const Chat4FillIcon: IconType;
export { Chat4FillIcon }
export { Chat4FillIcon as Chat4FillIcon_alias_1 }

/**
 * The react component for the `chat-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-4-line.svg)
 */
declare const Chat4LineIcon: IconType;
export { Chat4LineIcon }
export { Chat4LineIcon as Chat4LineIcon_alias_1 }

/**
 * The react component for the `chat-check-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Check Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-check-fill.svg)
 */
declare const ChatCheckFillIcon: IconType;
export { ChatCheckFillIcon }
export { ChatCheckFillIcon as ChatCheckFillIcon_alias_1 }

/**
 * The react component for the `chat-check-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Check Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-check-line.svg)
 */
declare const ChatCheckLineIcon: IconType;
export { ChatCheckLineIcon }
export { ChatCheckLineIcon as ChatCheckLineIcon_alias_1 }

/**
 * The react component for the `chat-delete-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Delete Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-delete-fill.svg)
 */
declare const ChatDeleteFillIcon: IconType;
export { ChatDeleteFillIcon }
export { ChatDeleteFillIcon as ChatDeleteFillIcon_alias_1 }

/**
 * The react component for the `chat-delete-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Delete Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-delete-line.svg)
 */
declare const ChatDeleteLineIcon: IconType;
export { ChatDeleteLineIcon }
export { ChatDeleteLineIcon as ChatDeleteLineIcon_alias_1 }

/**
 * The react component for the `chat-download-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Download Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-download-fill.svg)
 */
declare const ChatDownloadFillIcon: IconType;
export { ChatDownloadFillIcon }
export { ChatDownloadFillIcon as ChatDownloadFillIcon_alias_1 }

/**
 * The react component for the `chat-download-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Download Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-download-line.svg)
 */
declare const ChatDownloadLineIcon: IconType;
export { ChatDownloadLineIcon }
export { ChatDownloadLineIcon as ChatDownloadLineIcon_alias_1 }

/**
 * The react component for the `chat-follow-up-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Follow Up Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-follow-up-fill.svg)
 */
declare const ChatFollowUpFillIcon: IconType;
export { ChatFollowUpFillIcon }
export { ChatFollowUpFillIcon as ChatFollowUpFillIcon_alias_1 }

/**
 * The react component for the `chat-follow-up-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Follow Up Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-follow-up-line.svg)
 */
declare const ChatFollowUpLineIcon: IconType;
export { ChatFollowUpLineIcon }
export { ChatFollowUpLineIcon as ChatFollowUpLineIcon_alias_1 }

/**
 * The react component for the `chat-forward-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Forward Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-forward-fill.svg)
 */
declare const ChatForwardFillIcon: IconType;
export { ChatForwardFillIcon }
export { ChatForwardFillIcon as ChatForwardFillIcon_alias_1 }

/**
 * The react component for the `chat-forward-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Forward Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-forward-line.svg)
 */
declare const ChatForwardLineIcon: IconType;
export { ChatForwardLineIcon }
export { ChatForwardLineIcon as ChatForwardLineIcon_alias_1 }

/**
 * The react component for the `chat-heart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Heart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-heart-fill.svg)
 */
declare const ChatHeartFillIcon: IconType;
export { ChatHeartFillIcon }
export { ChatHeartFillIcon as ChatHeartFillIcon_alias_1 }

/**
 * The react component for the `chat-heart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Heart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-heart-line.svg)
 */
declare const ChatHeartLineIcon: IconType;
export { ChatHeartLineIcon }
export { ChatHeartLineIcon as ChatHeartLineIcon_alias_1 }

/**
 * The react component for the `chat-history-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat History Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-history-fill.svg)
 */
declare const ChatHistoryFillIcon: IconType;
export { ChatHistoryFillIcon }
export { ChatHistoryFillIcon as ChatHistoryFillIcon_alias_1 }

/**
 * The react component for the `chat-history-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat History Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-history-line.svg)
 */
declare const ChatHistoryLineIcon: IconType;
export { ChatHistoryLineIcon }
export { ChatHistoryLineIcon as ChatHistoryLineIcon_alias_1 }

/**
 * The react component for the `chat-new-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat New Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-new-fill.svg)
 */
declare const ChatNewFillIcon: IconType;
export { ChatNewFillIcon }
export { ChatNewFillIcon as ChatNewFillIcon_alias_1 }

/**
 * The react component for the `chat-new-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat New Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-new-line.svg)
 */
declare const ChatNewLineIcon: IconType;
export { ChatNewLineIcon }
export { ChatNewLineIcon as ChatNewLineIcon_alias_1 }
export { ChatNewLineIcon as ChatNewLineIcon_alias_2 }

/**
 * The react component for the `chat-off-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Off Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-off-fill.svg)
 */
declare const ChatOffFillIcon: IconType;
export { ChatOffFillIcon }
export { ChatOffFillIcon as ChatOffFillIcon_alias_1 }

/**
 * The react component for the `chat-off-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Off Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-off-line.svg)
 */
declare const ChatOffLineIcon: IconType;
export { ChatOffLineIcon }
export { ChatOffLineIcon as ChatOffLineIcon_alias_1 }

/**
 * The react component for the `chat-poll-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Poll Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-poll-fill.svg)
 */
declare const ChatPollFillIcon: IconType;
export { ChatPollFillIcon }
export { ChatPollFillIcon as ChatPollFillIcon_alias_1 }

/**
 * The react component for the `chat-poll-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Poll Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-poll-line.svg)
 */
declare const ChatPollLineIcon: IconType;
export { ChatPollLineIcon }
export { ChatPollLineIcon as ChatPollLineIcon_alias_1 }

/**
 * The react component for the `chat-private-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Private Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-private-fill.svg)
 */
declare const ChatPrivateFillIcon: IconType;
export { ChatPrivateFillIcon }
export { ChatPrivateFillIcon as ChatPrivateFillIcon_alias_1 }

/**
 * The react component for the `chat-private-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Private Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-private-line.svg)
 */
declare const ChatPrivateLineIcon: IconType;
export { ChatPrivateLineIcon }
export { ChatPrivateLineIcon as ChatPrivateLineIcon_alias_1 }

/**
 * The react component for the `chat-quote-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Quote Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-quote-fill.svg)
 */
declare const ChatQuoteFillIcon: IconType;
export { ChatQuoteFillIcon }
export { ChatQuoteFillIcon as ChatQuoteFillIcon_alias_1 }

/**
 * The react component for the `chat-quote-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Quote Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-quote-line.svg)
 */
declare const ChatQuoteLineIcon: IconType;
export { ChatQuoteLineIcon }
export { ChatQuoteLineIcon as ChatQuoteLineIcon_alias_1 }

/**
 * The react component for the `chat-settings-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Settings Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-settings-fill.svg)
 */
declare const ChatSettingsFillIcon: IconType;
export { ChatSettingsFillIcon }
export { ChatSettingsFillIcon as ChatSettingsFillIcon_alias_1 }

/**
 * The react component for the `chat-settings-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Settings Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-settings-line.svg)
 */
declare const ChatSettingsLineIcon: IconType;
export { ChatSettingsLineIcon }
export { ChatSettingsLineIcon as ChatSettingsLineIcon_alias_1 }

/**
 * The react component for the `chat-smile-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Smile 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-smile-2-fill.svg)
 */
declare const ChatSmile2FillIcon: IconType;
export { ChatSmile2FillIcon }
export { ChatSmile2FillIcon as ChatSmile2FillIcon_alias_1 }

/**
 * The react component for the `chat-smile-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Smile 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-smile-2-line.svg)
 */
declare const ChatSmile2LineIcon: IconType;
export { ChatSmile2LineIcon }
export { ChatSmile2LineIcon as ChatSmile2LineIcon_alias_1 }

/**
 * The react component for the `chat-smile-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Smile 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-smile-3-fill.svg)
 */
declare const ChatSmile3FillIcon: IconType;
export { ChatSmile3FillIcon }
export { ChatSmile3FillIcon as ChatSmile3FillIcon_alias_1 }

/**
 * The react component for the `chat-smile-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Smile 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-smile-3-line.svg)
 */
declare const ChatSmile3LineIcon: IconType;
export { ChatSmile3LineIcon }
export { ChatSmile3LineIcon as ChatSmile3LineIcon_alias_1 }

/**
 * The react component for the `chat-smile-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Smile Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-smile-fill.svg)
 */
declare const ChatSmileFillIcon: IconType;
export { ChatSmileFillIcon }
export { ChatSmileFillIcon as ChatSmileFillIcon_alias_1 }

/**
 * The react component for the `chat-smile-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Smile Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-smile-line.svg)
 */
declare const ChatSmileLineIcon: IconType;
export { ChatSmileLineIcon }
export { ChatSmileLineIcon as ChatSmileLineIcon_alias_1 }

/**
 * The react component for the `chat-upload-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Upload Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-upload-fill.svg)
 */
declare const ChatUploadFillIcon: IconType;
export { ChatUploadFillIcon }
export { ChatUploadFillIcon as ChatUploadFillIcon_alias_1 }

/**
 * The react component for the `chat-upload-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Upload Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-upload-line.svg)
 */
declare const ChatUploadLineIcon: IconType;
export { ChatUploadLineIcon }
export { ChatUploadLineIcon as ChatUploadLineIcon_alias_1 }

/**
 * The react component for the `chat-voice-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Voice Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-voice-fill.svg)
 */
declare const ChatVoiceFillIcon: IconType;
export { ChatVoiceFillIcon }
export { ChatVoiceFillIcon as ChatVoiceFillIcon_alias_1 }

/**
 * The react component for the `chat-voice-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chat Voice Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/chat-voice-line.svg)
 */
declare const ChatVoiceLineIcon: IconType;
export { ChatVoiceLineIcon }
export { ChatVoiceLineIcon as ChatVoiceLineIcon_alias_1 }

/**
 * The react component for the `checkbox-blank-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Blank Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-blank-circle-fill.svg)
 */
declare const CheckboxBlankCircleFillIcon: IconType;
export { CheckboxBlankCircleFillIcon }
export { CheckboxBlankCircleFillIcon as CheckboxBlankCircleFillIcon_alias_1 }

/**
 * The react component for the `checkbox-blank-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Blank Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-blank-circle-line.svg)
 */
declare const CheckboxBlankCircleLineIcon: IconType;
export { CheckboxBlankCircleLineIcon }
export { CheckboxBlankCircleLineIcon as CheckboxBlankCircleLineIcon_alias_1 }

/**
 * The react component for the `checkbox-blank-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Blank Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-blank-fill.svg)
 */
declare const CheckboxBlankFillIcon: IconType;
export { CheckboxBlankFillIcon }
export { CheckboxBlankFillIcon as CheckboxBlankFillIcon_alias_1 }

/**
 * The react component for the `checkbox-blank-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Blank Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-blank-line.svg)
 */
declare const CheckboxBlankLineIcon: IconType;
export { CheckboxBlankLineIcon }
export { CheckboxBlankLineIcon as CheckboxBlankLineIcon_alias_1 }

/**
 * The react component for the `checkbox-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-circle-fill.svg)
 */
declare const CheckboxCircleFillIcon: IconType;
export { CheckboxCircleFillIcon }
export { CheckboxCircleFillIcon as CheckboxCircleFillIcon_alias_1 }

/**
 * The react component for the `checkbox-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-circle-line.svg)
 */
declare const CheckboxCircleLineIcon: IconType;
export { CheckboxCircleLineIcon }
export { CheckboxCircleLineIcon as CheckboxCircleLineIcon_alias_1 }
export { CheckboxCircleLineIcon as CheckboxCircleLineIcon_alias_2 }

/**
 * The react component for the `checkbox-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-fill.svg)
 */
declare const CheckboxFillIcon: IconType;
export { CheckboxFillIcon }
export { CheckboxFillIcon as CheckboxFillIcon_alias_1 }

/**
 * The react component for the `checkbox-indeterminate-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Indeterminate Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-indeterminate-fill.svg)
 */
declare const CheckboxIndeterminateFillIcon: IconType;
export { CheckboxIndeterminateFillIcon }
export { CheckboxIndeterminateFillIcon as CheckboxIndeterminateFillIcon_alias_1 }

/**
 * The react component for the `checkbox-indeterminate-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Indeterminate Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-indeterminate-line.svg)
 */
declare const CheckboxIndeterminateLineIcon: IconType;
export { CheckboxIndeterminateLineIcon }
export { CheckboxIndeterminateLineIcon as CheckboxIndeterminateLineIcon_alias_1 }

/**
 * The react component for the `checkbox-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-line.svg)
 */
declare const CheckboxLineIcon: IconType;
export { CheckboxLineIcon }
export { CheckboxLineIcon as CheckboxLineIcon_alias_1 }

/**
 * The react component for the `checkbox-multiple-blank-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Multiple Blank Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-multiple-blank-fill.svg)
 */
declare const CheckboxMultipleBlankFillIcon: IconType;
export { CheckboxMultipleBlankFillIcon }
export { CheckboxMultipleBlankFillIcon as CheckboxMultipleBlankFillIcon_alias_1 }

/**
 * The react component for the `checkbox-multiple-blank-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Multiple Blank Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-multiple-blank-line.svg)
 */
declare const CheckboxMultipleBlankLineIcon: IconType;
export { CheckboxMultipleBlankLineIcon }
export { CheckboxMultipleBlankLineIcon as CheckboxMultipleBlankLineIcon_alias_1 }

/**
 * The react component for the `checkbox-multiple-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Multiple Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-multiple-fill.svg)
 */
declare const CheckboxMultipleFillIcon: IconType;
export { CheckboxMultipleFillIcon }
export { CheckboxMultipleFillIcon as CheckboxMultipleFillIcon_alias_1 }

/**
 * The react component for the `checkbox-multiple-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Checkbox Multiple Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/checkbox-multiple-line.svg)
 */
declare const CheckboxMultipleLineIcon: IconType;
export { CheckboxMultipleLineIcon }
export { CheckboxMultipleLineIcon as CheckboxMultipleLineIcon_alias_1 }
export { CheckboxMultipleLineIcon as CheckboxMultipleLineIcon_alias_2 }

/**
 * The react component for the `check-double-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Check Double Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/check-double-fill.svg)
 */
declare const CheckDoubleFillIcon: IconType;
export { CheckDoubleFillIcon }
export { CheckDoubleFillIcon as CheckDoubleFillIcon_alias_1 }

/**
 * The react component for the `check-double-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Check Double Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/check-double-line.svg)
 */
declare const CheckDoubleLineIcon: IconType;
export { CheckDoubleLineIcon }
export { CheckDoubleLineIcon as CheckDoubleLineIcon_alias_1 }

/**
 * The react component for the `check-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Check Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/check-fill.svg)
 */
declare const CheckFillIcon: IconType;
export { CheckFillIcon }
export { CheckFillIcon as CheckFillIcon_alias_1 }

/**
 * The react component for the `check-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Check Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/check-line.svg)
 */
declare const CheckLineIcon: IconType;
export { CheckLineIcon }
export { CheckLineIcon as CheckLineIcon_alias_1 }

/**
 * The react component for the `china-railway-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![China Railway Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/china-railway-fill.svg)
 */
declare const ChinaRailwayFillIcon: IconType;
export { ChinaRailwayFillIcon }
export { ChinaRailwayFillIcon as ChinaRailwayFillIcon_alias_1 }

/**
 * The react component for the `china-railway-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![China Railway Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/china-railway-line.svg)
 */
declare const ChinaRailwayLineIcon: IconType;
export { ChinaRailwayLineIcon }
export { ChinaRailwayLineIcon as ChinaRailwayLineIcon_alias_1 }

/**
 * The react component for the `chrome-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chrome Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/chrome-fill.svg)
 */
declare const ChromeFillIcon: IconType;
export { ChromeFillIcon }
export { ChromeFillIcon as ChromeFillIcon_alias_1 }

/**
 * The react component for the `chrome-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Chrome Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/chrome-line.svg)
 */
declare const ChromeLineIcon: IconType;
export { ChromeLineIcon }
export { ChromeLineIcon as ChromeLineIcon_alias_1 }

/**
 * The react component for the `clapperboard-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Clapperboard Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/clapperboard-fill.svg)
 */
declare const ClapperboardFillIcon: IconType;
export { ClapperboardFillIcon }
export { ClapperboardFillIcon as ClapperboardFillIcon_alias_1 }

/**
 * The react component for the `clapperboard-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Clapperboard Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/clapperboard-line.svg)
 */
declare const ClapperboardLineIcon: IconType;
export { ClapperboardLineIcon }
export { ClapperboardLineIcon as ClapperboardLineIcon_alias_1 }

/**
 * The react component for the `clipboard-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Clipboard Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/clipboard-fill.svg)
 */
declare const ClipboardFillIcon: IconType;
export { ClipboardFillIcon }
export { ClipboardFillIcon as ClipboardFillIcon_alias_1 }
export { ClipboardFillIcon as ClipboardFillIcon_alias_2 }

/**
 * The react component for the `clipboard-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Clipboard Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/clipboard-line.svg)
 */
declare const ClipboardLineIcon: IconType;
export { ClipboardLineIcon }
export { ClipboardLineIcon as ClipboardLineIcon_alias_1 }
export { ClipboardLineIcon as ClipboardLineIcon_alias_2 }

/**
 * The react component for the `clockwise-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Clockwise 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/clockwise-2-fill.svg)
 */
declare const Clockwise2FillIcon: IconType;
export { Clockwise2FillIcon }
export { Clockwise2FillIcon as Clockwise2FillIcon_alias_1 }

/**
 * The react component for the `clockwise-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Clockwise 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/clockwise-2-line.svg)
 */
declare const Clockwise2LineIcon: IconType;
export { Clockwise2LineIcon }
export { Clockwise2LineIcon as Clockwise2LineIcon_alias_1 }

/**
 * The react component for the `clockwise-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Clockwise Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/clockwise-fill.svg)
 */
declare const ClockwiseFillIcon: IconType;
export { ClockwiseFillIcon }
export { ClockwiseFillIcon as ClockwiseFillIcon_alias_1 }

/**
 * The react component for the `clockwise-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Clockwise Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/clockwise-line.svg)
 */
declare const ClockwiseLineIcon: IconType;
export { ClockwiseLineIcon }
export { ClockwiseLineIcon as ClockwiseLineIcon_alias_1 }

/**
 * The react component for the `close-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Close Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/close-circle-fill.svg)
 */
declare const CloseCircleFillIcon: IconType;
export { CloseCircleFillIcon }
export { CloseCircleFillIcon as CloseCircleFillIcon_alias_1 }

/**
 * The react component for the `close-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Close Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/close-circle-line.svg)
 */
declare const CloseCircleLineIcon: IconType;
export { CloseCircleLineIcon }
export { CloseCircleLineIcon as CloseCircleLineIcon_alias_1 }
export { CloseCircleLineIcon as CloseCircleLineIcon_alias_2 }

/**
 * The react component for the `closed-captioning-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Closed Captioning Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/closed-captioning-fill.svg)
 */
declare const ClosedCaptioningFillIcon: IconType;
export { ClosedCaptioningFillIcon }
export { ClosedCaptioningFillIcon as ClosedCaptioningFillIcon_alias_1 }

/**
 * The react component for the `closed-captioning-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Closed Captioning Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/closed-captioning-line.svg)
 */
declare const ClosedCaptioningLineIcon: IconType;
export { ClosedCaptioningLineIcon }
export { ClosedCaptioningLineIcon as ClosedCaptioningLineIcon_alias_1 }

/**
 * The react component for the `close-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Close Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/close-fill.svg)
 */
declare const CloseFillIcon: IconType;
export { CloseFillIcon }
export { CloseFillIcon as CloseFillIcon_alias_1 }
export { CloseFillIcon as CloseFillIcon_alias_2 }

/**
 * The react component for the `close-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Close Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/close-line.svg)
 */
declare const CloseLineIcon: IconType;
export { CloseLineIcon }
export { CloseLineIcon as CloseLineIcon_alias_1 }
export { CloseLineIcon as CloseLineIcon_alias_2 }

/**
 * The react component for the `cloud-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cloud Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/cloud-fill.svg)
 */
declare const CloudFillIcon: IconType;
export { CloudFillIcon }
export { CloudFillIcon as CloudFillIcon_alias_1 }

/**
 * The react component for the `cloud-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cloud Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/cloud-line.svg)
 */
declare const CloudLineIcon: IconType;
export { CloudLineIcon }
export { CloudLineIcon as CloudLineIcon_alias_1 }

/**
 * The react component for the `cloud-off-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cloud Off Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/cloud-off-fill.svg)
 */
declare const CloudOffFillIcon: IconType;
export { CloudOffFillIcon }
export { CloudOffFillIcon as CloudOffFillIcon_alias_1 }

/**
 * The react component for the `cloud-off-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cloud Off Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/cloud-off-line.svg)
 */
declare const CloudOffLineIcon: IconType;
export { CloudOffLineIcon }
export { CloudOffLineIcon as CloudOffLineIcon_alias_1 }

/**
 * The react component for the `cloud-windy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cloud Windy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/cloud-windy-fill.svg)
 */
declare const CloudWindyFillIcon: IconType;
export { CloudWindyFillIcon }
export { CloudWindyFillIcon as CloudWindyFillIcon_alias_1 }

/**
 * The react component for the `cloud-windy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cloud Windy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/cloud-windy-line.svg)
 */
declare const CloudWindyLineIcon: IconType;
export { CloudWindyLineIcon }
export { CloudWindyLineIcon as CloudWindyLineIcon_alias_1 }

/**
 * The react component for the `cloudy-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cloudy 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/cloudy-2-fill.svg)
 */
declare const Cloudy2FillIcon: IconType;
export { Cloudy2FillIcon }
export { Cloudy2FillIcon as Cloudy2FillIcon_alias_1 }

/**
 * The react component for the `cloudy-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cloudy 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/cloudy-2-line.svg)
 */
declare const Cloudy2LineIcon: IconType;
export { Cloudy2LineIcon }
export { Cloudy2LineIcon as Cloudy2LineIcon_alias_1 }

/**
 * The react component for the `cloudy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cloudy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/cloudy-fill.svg)
 */
declare const CloudyFillIcon: IconType;
export { CloudyFillIcon }
export { CloudyFillIcon as CloudyFillIcon_alias_1 }

/**
 * The react component for the `cloudy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cloudy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/cloudy-line.svg)
 */
declare const CloudyLineIcon: IconType;
export { CloudyLineIcon }
export { CloudyLineIcon as CloudyLineIcon_alias_1 }

/**
 * The react component for the `code-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Code Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/code-box-fill.svg)
 */
declare const CodeBoxFillIcon: IconType;
export { CodeBoxFillIcon }
export { CodeBoxFillIcon as CodeBoxFillIcon_alias_1 }

/**
 * The react component for the `code-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Code Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/code-box-line.svg)
 */
declare const CodeBoxLineIcon: IconType;
export { CodeBoxLineIcon }
export { CodeBoxLineIcon as CodeBoxLineIcon_alias_1 }

/**
 * The react component for the `code-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Code Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/code-fill.svg)
 */
declare const CodeFillIcon: IconType;
export { CodeFillIcon }
export { CodeFillIcon as CodeFillIcon_alias_1 }

/**
 * The react component for the `code-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Code Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/code-line.svg)
 */
declare const CodeLineIcon: IconType;
export { CodeLineIcon }
export { CodeLineIcon as CodeLineIcon_alias_1 }
export { CodeLineIcon as CodeLineIcon_alias_2 }

/**
 * The react component for the `codepen-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Codepen Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/codepen-fill.svg)
 */
declare const CodepenFillIcon: IconType;
export { CodepenFillIcon }
export { CodepenFillIcon as CodepenFillIcon_alias_1 }

/**
 * The react component for the `codepen-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Codepen Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/codepen-line.svg)
 */
declare const CodepenLineIcon: IconType;
export { CodepenLineIcon }
export { CodepenLineIcon as CodepenLineIcon_alias_1 }

/**
 * The react component for the `code-s-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Code S Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/code-s-fill.svg)
 */
declare const CodeSFillIcon: IconType;
export { CodeSFillIcon }
export { CodeSFillIcon as CodeSFillIcon_alias_1 }

/**
 * The react component for the `code-s-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Code S Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/code-s-line.svg)
 */
declare const CodeSLineIcon: IconType;
export { CodeSLineIcon }
export { CodeSLineIcon as CodeSLineIcon_alias_1 }

/**
 * The react component for the `code-s-slash-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Code S Slash Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/code-s-slash-fill.svg)
 */
declare const CodeSSlashFillIcon: IconType;
export { CodeSSlashFillIcon }
export { CodeSSlashFillIcon as CodeSSlashFillIcon_alias_1 }

/**
 * The react component for the `code-s-slash-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Code S Slash Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/code-s-slash-line.svg)
 */
declare const CodeSSlashLineIcon: IconType;
export { CodeSSlashLineIcon }
export { CodeSSlashLineIcon as CodeSSlashLineIcon_alias_1 }

/**
 * The react component for the `code-view.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Code View Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/code-view.svg)
 */
declare const CodeViewIcon: IconType;
export { CodeViewIcon }
export { CodeViewIcon as CodeViewIcon_alias_1 }
export { CodeViewIcon as CodeViewIcon_alias_2 }

/**
 * The react component for the `coin-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coin Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coin-fill.svg)
 */
declare const CoinFillIcon: IconType;
export { CoinFillIcon }
export { CoinFillIcon as CoinFillIcon_alias_1 }

/**
 * The react component for the `coin-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coin Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coin-line.svg)
 */
declare const CoinLineIcon: IconType;
export { CoinLineIcon }
export { CoinLineIcon as CoinLineIcon_alias_1 }

/**
 * The react component for the `coins-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coins Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coins-fill.svg)
 */
declare const CoinsFillIcon: IconType;
export { CoinsFillIcon }
export { CoinsFillIcon as CoinsFillIcon_alias_1 }

/**
 * The react component for the `coins-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coins Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coins-line.svg)
 */
declare const CoinsLineIcon: IconType;
export { CoinsLineIcon }
export { CoinsLineIcon as CoinsLineIcon_alias_1 }

/**
 * The react component for the `collage-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Collage Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/collage-fill.svg)
 */
declare const CollageFillIcon: IconType;
export { CollageFillIcon }
export { CollageFillIcon as CollageFillIcon_alias_1 }

/**
 * The react component for the `collage-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Collage Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/collage-line.svg)
 */
declare const CollageLineIcon: IconType;
export { CollageLineIcon }
export { CollageLineIcon as CollageLineIcon_alias_1 }

/**
 * The react component for the `command-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Command Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/command-fill.svg)
 */
declare const CommandFillIcon: IconType;
export { CommandFillIcon }
export { CommandFillIcon as CommandFillIcon_alias_1 }

/**
 * The react component for the `command-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Command Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/command-line.svg)
 */
declare const CommandLineIcon: IconType;
export { CommandLineIcon }
export { CommandLineIcon as CommandLineIcon_alias_1 }

/**
 * The react component for the `community-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Community Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/community-fill.svg)
 */
declare const CommunityFillIcon: IconType;
export { CommunityFillIcon }
export { CommunityFillIcon as CommunityFillIcon_alias_1 }

/**
 * The react component for the `community-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Community Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/community-line.svg)
 */
declare const CommunityLineIcon: IconType;
export { CommunityLineIcon }
export { CommunityLineIcon as CommunityLineIcon_alias_1 }

/**
 * The react component for the `compass-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compass 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/compass-2-fill.svg)
 */
declare const Compass2FillIcon: IconType;
export { Compass2FillIcon }
export { Compass2FillIcon as Compass2FillIcon_alias_1 }

/**
 * The react component for the `compass-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compass 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/compass-2-line.svg)
 */
declare const Compass2LineIcon: IconType;
export { Compass2LineIcon }
export { Compass2LineIcon as Compass2LineIcon_alias_1 }

/**
 * The react component for the `compass-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compass 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/compass-3-fill.svg)
 */
declare const Compass3FillIcon: IconType;
export { Compass3FillIcon }
export { Compass3FillIcon as Compass3FillIcon_alias_1 }

/**
 * The react component for the `compass-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compass 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/compass-3-line.svg)
 */
declare const Compass3LineIcon: IconType;
export { Compass3LineIcon }
export { Compass3LineIcon as Compass3LineIcon_alias_1 }

/**
 * The react component for the `compass-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compass 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/compass-4-fill.svg)
 */
declare const Compass4FillIcon: IconType;
export { Compass4FillIcon }
export { Compass4FillIcon as Compass4FillIcon_alias_1 }

/**
 * The react component for the `compass-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compass 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/compass-4-line.svg)
 */
declare const Compass4LineIcon: IconType;
export { Compass4LineIcon }
export { Compass4LineIcon as Compass4LineIcon_alias_1 }

/**
 * The react component for the `compass-discover-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compass Discover Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/compass-discover-fill.svg)
 */
declare const CompassDiscoverFillIcon: IconType;
export { CompassDiscoverFillIcon }
export { CompassDiscoverFillIcon as CompassDiscoverFillIcon_alias_1 }

/**
 * The react component for the `compass-discover-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compass Discover Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/compass-discover-line.svg)
 */
declare const CompassDiscoverLineIcon: IconType;
export { CompassDiscoverLineIcon }
export { CompassDiscoverLineIcon as CompassDiscoverLineIcon_alias_1 }

/**
 * The react component for the `compasses-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compasses 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/compasses-2-fill.svg)
 */
declare const Compasses2FillIcon: IconType;
export { Compasses2FillIcon }
export { Compasses2FillIcon as Compasses2FillIcon_alias_1 }

/**
 * The react component for the `compasses-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compasses 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/compasses-2-line.svg)
 */
declare const Compasses2LineIcon: IconType;
export { Compasses2LineIcon }
export { Compasses2LineIcon as Compasses2LineIcon_alias_1 }

/**
 * The react component for the `compasses-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compasses Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/compasses-fill.svg)
 */
declare const CompassesFillIcon: IconType;
export { CompassesFillIcon }
export { CompassesFillIcon as CompassesFillIcon_alias_1 }

/**
 * The react component for the `compasses-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compasses Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/compasses-line.svg)
 */
declare const CompassesLineIcon: IconType;
export { CompassesLineIcon }
export { CompassesLineIcon as CompassesLineIcon_alias_1 }

/**
 * The react component for the `compass-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compass Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/compass-fill.svg)
 */
declare const CompassFillIcon: IconType;
export { CompassFillIcon }
export { CompassFillIcon as CompassFillIcon_alias_1 }

/**
 * The react component for the `compass-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Compass Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/compass-line.svg)
 */
declare const CompassLineIcon: IconType;
export { CompassLineIcon }
export { CompassLineIcon as CompassLineIcon_alias_1 }

declare type ComposeRefs = typeof _composeRefs;

export declare const composeRefs: ComposeRefs;

/**
 * The react component for the `computer-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Computer Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/computer-fill.svg)
 */
declare const ComputerFillIcon: IconType;
export { ComputerFillIcon }
export { ComputerFillIcon as ComputerFillIcon_alias_1 }

/**
 * The react component for the `computer-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Computer Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/computer-line.svg)
 */
declare const ComputerLineIcon: IconType;
export { ComputerLineIcon }
export { ComputerLineIcon as ComputerLineIcon_alias_1 }

/**
 * The react component for the `contacts-book-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contacts Book 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/contacts-book-2-fill.svg)
 */
declare const ContactsBook2FillIcon: IconType;
export { ContactsBook2FillIcon }
export { ContactsBook2FillIcon as ContactsBook2FillIcon_alias_1 }

/**
 * The react component for the `contacts-book-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contacts Book 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/contacts-book-2-line.svg)
 */
declare const ContactsBook2LineIcon: IconType;
export { ContactsBook2LineIcon }
export { ContactsBook2LineIcon as ContactsBook2LineIcon_alias_1 }

/**
 * The react component for the `contacts-book-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contacts Book Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/contacts-book-fill.svg)
 */
declare const ContactsBookFillIcon: IconType;
export { ContactsBookFillIcon }
export { ContactsBookFillIcon as ContactsBookFillIcon_alias_1 }

/**
 * The react component for the `contacts-book-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contacts Book Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/contacts-book-line.svg)
 */
declare const ContactsBookLineIcon: IconType;
export { ContactsBookLineIcon }
export { ContactsBookLineIcon as ContactsBookLineIcon_alias_1 }

/**
 * The react component for the `contacts-book-upload-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contacts Book Upload Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/contacts-book-upload-fill.svg)
 */
declare const ContactsBookUploadFillIcon: IconType;
export { ContactsBookUploadFillIcon }
export { ContactsBookUploadFillIcon as ContactsBookUploadFillIcon_alias_1 }

/**
 * The react component for the `contacts-book-upload-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contacts Book Upload Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/contacts-book-upload-line.svg)
 */
declare const ContactsBookUploadLineIcon: IconType;
export { ContactsBookUploadLineIcon }
export { ContactsBookUploadLineIcon as ContactsBookUploadLineIcon_alias_1 }

/**
 * The react component for the `contacts-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contacts Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/contacts-fill.svg)
 */
declare const ContactsFillIcon: IconType;
export { ContactsFillIcon }
export { ContactsFillIcon as ContactsFillIcon_alias_1 }

/**
 * The react component for the `contacts-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contacts Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/contacts-line.svg)
 */
declare const ContactsLineIcon: IconType;
export { ContactsLineIcon }
export { ContactsLineIcon as ContactsLineIcon_alias_1 }

/**
 * The react component for the `contrast-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contrast 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/contrast-2-fill.svg)
 */
declare const Contrast2FillIcon: IconType;
export { Contrast2FillIcon }
export { Contrast2FillIcon as Contrast2FillIcon_alias_1 }

/**
 * The react component for the `contrast-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contrast 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/contrast-2-line.svg)
 */
declare const Contrast2LineIcon: IconType;
export { Contrast2LineIcon }
export { Contrast2LineIcon as Contrast2LineIcon_alias_1 }

/**
 * The react component for the `contrast-drop-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contrast Drop 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/contrast-drop-2-fill.svg)
 */
declare const ContrastDrop2FillIcon: IconType;
export { ContrastDrop2FillIcon }
export { ContrastDrop2FillIcon as ContrastDrop2FillIcon_alias_1 }

/**
 * The react component for the `contrast-drop-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contrast Drop 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/contrast-drop-2-line.svg)
 */
declare const ContrastDrop2LineIcon: IconType;
export { ContrastDrop2LineIcon }
export { ContrastDrop2LineIcon as ContrastDrop2LineIcon_alias_1 }

/**
 * The react component for the `contrast-drop-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contrast Drop Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/contrast-drop-fill.svg)
 */
declare const ContrastDropFillIcon: IconType;
export { ContrastDropFillIcon }
export { ContrastDropFillIcon as ContrastDropFillIcon_alias_1 }

/**
 * The react component for the `contrast-drop-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contrast Drop Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/contrast-drop-line.svg)
 */
declare const ContrastDropLineIcon: IconType;
export { ContrastDropLineIcon }
export { ContrastDropLineIcon as ContrastDropLineIcon_alias_1 }

/**
 * The react component for the `contrast-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contrast Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/contrast-fill.svg)
 */
declare const ContrastFillIcon: IconType;
export { ContrastFillIcon }
export { ContrastFillIcon as ContrastFillIcon_alias_1 }

/**
 * The react component for the `contrast-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Contrast Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/contrast-line.svg)
 */
declare const ContrastLineIcon: IconType;
export { ContrastLineIcon }
export { ContrastLineIcon as ContrastLineIcon_alias_1 }

/**
 * The react component for the `copper-coin-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Copper Coin Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/copper-coin-fill.svg)
 */
declare const CopperCoinFillIcon: IconType;
export { CopperCoinFillIcon }
export { CopperCoinFillIcon as CopperCoinFillIcon_alias_1 }

/**
 * The react component for the `copper-coin-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Copper Coin Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/copper-coin-line.svg)
 */
declare const CopperCoinLineIcon: IconType;
export { CopperCoinLineIcon }
export { CopperCoinLineIcon as CopperCoinLineIcon_alias_1 }

/**
 * The react component for the `copper-diamond-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Copper Diamond Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/copper-diamond-fill.svg)
 */
declare const CopperDiamondFillIcon: IconType;
export { CopperDiamondFillIcon }
export { CopperDiamondFillIcon as CopperDiamondFillIcon_alias_1 }

/**
 * The react component for the `copper-diamond-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Copper Diamond Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/copper-diamond-line.svg)
 */
declare const CopperDiamondLineIcon: IconType;
export { CopperDiamondLineIcon }
export { CopperDiamondLineIcon as CopperDiamondLineIcon_alias_1 }

/**
 * The react component for the `copyleft-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Copyleft Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/copyleft-fill.svg)
 */
declare const CopyleftFillIcon: IconType;
export { CopyleftFillIcon }
export { CopyleftFillIcon as CopyleftFillIcon_alias_1 }

/**
 * The react component for the `copyleft-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Copyleft Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/copyleft-line.svg)
 */
declare const CopyleftLineIcon: IconType;
export { CopyleftLineIcon }
export { CopyleftLineIcon as CopyleftLineIcon_alias_1 }

/**
 * The react component for the `copyright-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Copyright Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/copyright-fill.svg)
 */
declare const CopyrightFillIcon: IconType;
export { CopyrightFillIcon }
export { CopyrightFillIcon as CopyrightFillIcon_alias_1 }

/**
 * The react component for the `copyright-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Copyright Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/copyright-line.svg)
 */
declare const CopyrightLineIcon: IconType;
export { CopyrightLineIcon }
export { CopyrightLineIcon as CopyrightLineIcon_alias_1 }

/**
 * The react component for the `coreos-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coreos Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/coreos-fill.svg)
 */
declare const CoreosFillIcon: IconType;
export { CoreosFillIcon }
export { CoreosFillIcon as CoreosFillIcon_alias_1 }

/**
 * The react component for the `coreos-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coreos Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/coreos-line.svg)
 */
declare const CoreosLineIcon: IconType;
export { CoreosLineIcon }
export { CoreosLineIcon as CoreosLineIcon_alias_1 }

/**
 * The react component for the `coupon-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coupon 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coupon-2-fill.svg)
 */
declare const Coupon2FillIcon: IconType;
export { Coupon2FillIcon }
export { Coupon2FillIcon as Coupon2FillIcon_alias_1 }

/**
 * The react component for the `coupon-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coupon 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coupon-2-line.svg)
 */
declare const Coupon2LineIcon: IconType;
export { Coupon2LineIcon }
export { Coupon2LineIcon as Coupon2LineIcon_alias_1 }

/**
 * The react component for the `coupon-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coupon 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coupon-3-fill.svg)
 */
declare const Coupon3FillIcon: IconType;
export { Coupon3FillIcon }
export { Coupon3FillIcon as Coupon3FillIcon_alias_1 }

/**
 * The react component for the `coupon-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coupon 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coupon-3-line.svg)
 */
declare const Coupon3LineIcon: IconType;
export { Coupon3LineIcon }
export { Coupon3LineIcon as Coupon3LineIcon_alias_1 }

/**
 * The react component for the `coupon-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coupon 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coupon-4-fill.svg)
 */
declare const Coupon4FillIcon: IconType;
export { Coupon4FillIcon }
export { Coupon4FillIcon as Coupon4FillIcon_alias_1 }

/**
 * The react component for the `coupon-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coupon 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coupon-4-line.svg)
 */
declare const Coupon4LineIcon: IconType;
export { Coupon4LineIcon }
export { Coupon4LineIcon as Coupon4LineIcon_alias_1 }

/**
 * The react component for the `coupon-5-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coupon 5 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coupon-5-fill.svg)
 */
declare const Coupon5FillIcon: IconType;
export { Coupon5FillIcon }
export { Coupon5FillIcon as Coupon5FillIcon_alias_1 }

/**
 * The react component for the `coupon-5-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coupon 5 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coupon-5-line.svg)
 */
declare const Coupon5LineIcon: IconType;
export { Coupon5LineIcon }
export { Coupon5LineIcon as Coupon5LineIcon_alias_1 }

/**
 * The react component for the `coupon-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coupon Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coupon-fill.svg)
 */
declare const CouponFillIcon: IconType;
export { CouponFillIcon }
export { CouponFillIcon as CouponFillIcon_alias_1 }

/**
 * The react component for the `coupon-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Coupon Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/coupon-line.svg)
 */
declare const CouponLineIcon: IconType;
export { CouponLineIcon }
export { CouponLineIcon as CouponLineIcon_alias_1 }

/**
 * The react component for the `cpu-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cpu Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/cpu-fill.svg)
 */
declare const CpuFillIcon: IconType;
export { CpuFillIcon }
export { CpuFillIcon as CpuFillIcon_alias_1 }

/**
 * The react component for the `cpu-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cpu Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/cpu-line.svg)
 */
declare const CpuLineIcon: IconType;
export { CpuLineIcon }
export { CpuLineIcon as CpuLineIcon_alias_1 }

/**
 * The react component for the `creative-commons-by-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Creative Commons By Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/creative-commons-by-fill.svg)
 */
declare const CreativeCommonsByFillIcon: IconType;
export { CreativeCommonsByFillIcon }
export { CreativeCommonsByFillIcon as CreativeCommonsByFillIcon_alias_1 }

/**
 * The react component for the `creative-commons-by-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Creative Commons By Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/creative-commons-by-line.svg)
 */
declare const CreativeCommonsByLineIcon: IconType;
export { CreativeCommonsByLineIcon }
export { CreativeCommonsByLineIcon as CreativeCommonsByLineIcon_alias_1 }

/**
 * The react component for the `creative-commons-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Creative Commons Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/creative-commons-fill.svg)
 */
declare const CreativeCommonsFillIcon: IconType;
export { CreativeCommonsFillIcon }
export { CreativeCommonsFillIcon as CreativeCommonsFillIcon_alias_1 }

/**
 * The react component for the `creative-commons-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Creative Commons Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/creative-commons-line.svg)
 */
declare const CreativeCommonsLineIcon: IconType;
export { CreativeCommonsLineIcon }
export { CreativeCommonsLineIcon as CreativeCommonsLineIcon_alias_1 }

/**
 * The react component for the `creative-commons-nc-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Creative Commons Nc Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/creative-commons-nc-fill.svg)
 */
declare const CreativeCommonsNcFillIcon: IconType;
export { CreativeCommonsNcFillIcon }
export { CreativeCommonsNcFillIcon as CreativeCommonsNcFillIcon_alias_1 }

/**
 * The react component for the `creative-commons-nc-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Creative Commons Nc Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/creative-commons-nc-line.svg)
 */
declare const CreativeCommonsNcLineIcon: IconType;
export { CreativeCommonsNcLineIcon }
export { CreativeCommonsNcLineIcon as CreativeCommonsNcLineIcon_alias_1 }

/**
 * The react component for the `creative-commons-nd-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Creative Commons Nd Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/creative-commons-nd-fill.svg)
 */
declare const CreativeCommonsNdFillIcon: IconType;
export { CreativeCommonsNdFillIcon }
export { CreativeCommonsNdFillIcon as CreativeCommonsNdFillIcon_alias_1 }

/**
 * The react component for the `creative-commons-nd-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Creative Commons Nd Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/creative-commons-nd-line.svg)
 */
declare const CreativeCommonsNdLineIcon: IconType;
export { CreativeCommonsNdLineIcon }
export { CreativeCommonsNdLineIcon as CreativeCommonsNdLineIcon_alias_1 }

/**
 * The react component for the `creative-commons-sa-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Creative Commons Sa Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/creative-commons-sa-fill.svg)
 */
declare const CreativeCommonsSaFillIcon: IconType;
export { CreativeCommonsSaFillIcon }
export { CreativeCommonsSaFillIcon as CreativeCommonsSaFillIcon_alias_1 }

/**
 * The react component for the `creative-commons-sa-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Creative Commons Sa Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/creative-commons-sa-line.svg)
 */
declare const CreativeCommonsSaLineIcon: IconType;
export { CreativeCommonsSaLineIcon }
export { CreativeCommonsSaLineIcon as CreativeCommonsSaLineIcon_alias_1 }

/**
 * The react component for the `creative-commons-zero-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Creative Commons Zero Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/creative-commons-zero-fill.svg)
 */
declare const CreativeCommonsZeroFillIcon: IconType;
export { CreativeCommonsZeroFillIcon }
export { CreativeCommonsZeroFillIcon as CreativeCommonsZeroFillIcon_alias_1 }

/**
 * The react component for the `creative-commons-zero-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Creative Commons Zero Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/creative-commons-zero-line.svg)
 */
declare const CreativeCommonsZeroLineIcon: IconType;
export { CreativeCommonsZeroLineIcon }
export { CreativeCommonsZeroLineIcon as CreativeCommonsZeroLineIcon_alias_1 }

/**
 * The react component for the `criminal-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Criminal Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/criminal-fill.svg)
 */
declare const CriminalFillIcon: IconType;
export { CriminalFillIcon }
export { CriminalFillIcon as CriminalFillIcon_alias_1 }

/**
 * The react component for the `criminal-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Criminal Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/criminal-line.svg)
 */
declare const CriminalLineIcon: IconType;
export { CriminalLineIcon }
export { CriminalLineIcon as CriminalLineIcon_alias_1 }

/**
 * The react component for the `crop-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Crop 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/crop-2-fill.svg)
 */
declare const Crop2FillIcon: IconType;
export { Crop2FillIcon }
export { Crop2FillIcon as Crop2FillIcon_alias_1 }

/**
 * The react component for the `crop-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Crop 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/crop-2-line.svg)
 */
declare const Crop2LineIcon: IconType;
export { Crop2LineIcon }
export { Crop2LineIcon as Crop2LineIcon_alias_1 }

/**
 * The react component for the `crop-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Crop Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/crop-fill.svg)
 */
declare const CropFillIcon: IconType;
export { CropFillIcon }
export { CropFillIcon as CropFillIcon_alias_1 }

/**
 * The react component for the `crop-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Crop Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/crop-line.svg)
 */
declare const CropLineIcon: IconType;
export { CropLineIcon }
export { CropLineIcon as CropLineIcon_alias_1 }

/**
 * The react component for the `css-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Css 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/css3-fill.svg)
 */
declare const Css3FillIcon: IconType;
export { Css3FillIcon }
export { Css3FillIcon as Css3FillIcon_alias_1 }

/**
 * The react component for the `css-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Css 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/css3-line.svg)
 */
declare const Css3LineIcon: IconType;
export { Css3LineIcon }
export { Css3LineIcon as Css3LineIcon_alias_1 }

/**
 * The react component for the `cup-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cup Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/cup-fill.svg)
 */
declare const CupFillIcon: IconType;
export { CupFillIcon }
export { CupFillIcon as CupFillIcon_alias_1 }

/**
 * The react component for the `cup-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cup Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/cup-line.svg)
 */
declare const CupLineIcon: IconType;
export { CupLineIcon }
export { CupLineIcon as CupLineIcon_alias_1 }

/**
 * The react component for the `currency-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Currency Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/currency-fill.svg)
 */
declare const CurrencyFillIcon: IconType;
export { CurrencyFillIcon }
export { CurrencyFillIcon as CurrencyFillIcon_alias_1 }

/**
 * The react component for the `currency-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Currency Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/currency-line.svg)
 */
declare const CurrencyLineIcon: IconType;
export { CurrencyLineIcon }
export { CurrencyLineIcon as CurrencyLineIcon_alias_1 }

/**
 * The react component for the `cursor-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cursor Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/cursor-fill.svg)
 */
declare const CursorFillIcon: IconType;
export { CursorFillIcon }
export { CursorFillIcon as CursorFillIcon_alias_1 }

/**
 * The react component for the `cursor-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Cursor Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/cursor-line.svg)
 */
declare const CursorLineIcon: IconType;
export { CursorLineIcon }
export { CursorLineIcon as CursorLineIcon_alias_1 }

/**
 * The react component for the `customer-service-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Customer Service 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/customer-service-2-fill.svg)
 */
declare const CustomerService2FillIcon: IconType;
export { CustomerService2FillIcon }
export { CustomerService2FillIcon as CustomerService2FillIcon_alias_1 }

/**
 * The react component for the `customer-service-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Customer Service 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/customer-service-2-line.svg)
 */
declare const CustomerService2LineIcon: IconType;
export { CustomerService2LineIcon }
export { CustomerService2LineIcon as CustomerService2LineIcon_alias_1 }

/**
 * The react component for the `customer-service-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Customer Service Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/customer-service-fill.svg)
 */
declare const CustomerServiceFillIcon: IconType;
export { CustomerServiceFillIcon }
export { CustomerServiceFillIcon as CustomerServiceFillIcon_alias_1 }

/**
 * The react component for the `customer-service-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Customer Service Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/customer-service-line.svg)
 */
declare const CustomerServiceLineIcon: IconType;
export { CustomerServiceLineIcon }
export { CustomerServiceLineIcon as CustomerServiceLineIcon_alias_1 }

/**
 * The react component for the `dashboard-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dashboard 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/dashboard-2-fill.svg)
 */
declare const Dashboard2FillIcon: IconType;
export { Dashboard2FillIcon }
export { Dashboard2FillIcon as Dashboard2FillIcon_alias_1 }

/**
 * The react component for the `dashboard-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dashboard 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/dashboard-2-line.svg)
 */
declare const Dashboard2LineIcon: IconType;
export { Dashboard2LineIcon }
export { Dashboard2LineIcon as Dashboard2LineIcon_alias_1 }

/**
 * The react component for the `dashboard-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dashboard 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/dashboard-3-fill.svg)
 */
declare const Dashboard3FillIcon: IconType;
export { Dashboard3FillIcon }
export { Dashboard3FillIcon as Dashboard3FillIcon_alias_1 }

/**
 * The react component for the `dashboard-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dashboard 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/dashboard-3-line.svg)
 */
declare const Dashboard3LineIcon: IconType;
export { Dashboard3LineIcon }
export { Dashboard3LineIcon as Dashboard3LineIcon_alias_1 }

/**
 * The react component for the `dashboard-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dashboard Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/dashboard-fill.svg)
 */
declare const DashboardFillIcon: IconType;
export { DashboardFillIcon }
export { DashboardFillIcon as DashboardFillIcon_alias_1 }

/**
 * The react component for the `dashboard-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dashboard Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/dashboard-line.svg)
 */
declare const DashboardLineIcon: IconType;
export { DashboardLineIcon }
export { DashboardLineIcon as DashboardLineIcon_alias_1 }

/**
 * The react component for the `database-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Database 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/database-2-fill.svg)
 */
declare const Database2FillIcon: IconType;
export { Database2FillIcon }
export { Database2FillIcon as Database2FillIcon_alias_1 }

/**
 * The react component for the `database-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Database 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/database-2-line.svg)
 */
declare const Database2LineIcon: IconType;
export { Database2LineIcon }
export { Database2LineIcon as Database2LineIcon_alias_1 }

/**
 * The react component for the `database-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Database Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/database-fill.svg)
 */
declare const DatabaseFillIcon: IconType;
export { DatabaseFillIcon }
export { DatabaseFillIcon as DatabaseFillIcon_alias_1 }

/**
 * The react component for the `database-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Database Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/database-line.svg)
 */
declare const DatabaseLineIcon: IconType;
export { DatabaseLineIcon }
export { DatabaseLineIcon as DatabaseLineIcon_alias_1 }

declare const DefaultContext: IconContext;
export { DefaultContext }
export { DefaultContext as DefaultContext_alias_1 }

/**
 * The react component for the `delete-back-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Back 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-back-2-fill.svg)
 */
declare const DeleteBack2FillIcon: IconType;
export { DeleteBack2FillIcon }
export { DeleteBack2FillIcon as DeleteBack2FillIcon_alias_1 }

/**
 * The react component for the `delete-back-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Back 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-back-2-line.svg)
 */
declare const DeleteBack2LineIcon: IconType;
export { DeleteBack2LineIcon }
export { DeleteBack2LineIcon as DeleteBack2LineIcon_alias_1 }

/**
 * The react component for the `delete-back-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Back Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-back-fill.svg)
 */
declare const DeleteBackFillIcon: IconType;
export { DeleteBackFillIcon }
export { DeleteBackFillIcon as DeleteBackFillIcon_alias_1 }

/**
 * The react component for the `delete-back-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Back Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-back-line.svg)
 */
declare const DeleteBackLineIcon: IconType;
export { DeleteBackLineIcon }
export { DeleteBackLineIcon as DeleteBackLineIcon_alias_1 }

/**
 * The react component for the `delete-bin-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-2-fill.svg)
 */
declare const DeleteBin2FillIcon: IconType;
export { DeleteBin2FillIcon }
export { DeleteBin2FillIcon as DeleteBin2FillIcon_alias_1 }

/**
 * The react component for the `delete-bin-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-2-line.svg)
 */
declare const DeleteBin2LineIcon: IconType;
export { DeleteBin2LineIcon }
export { DeleteBin2LineIcon as DeleteBin2LineIcon_alias_1 }

/**
 * The react component for the `delete-bin-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-3-fill.svg)
 */
declare const DeleteBin3FillIcon: IconType;
export { DeleteBin3FillIcon }
export { DeleteBin3FillIcon as DeleteBin3FillIcon_alias_1 }

/**
 * The react component for the `delete-bin-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-3-line.svg)
 */
declare const DeleteBin3LineIcon: IconType;
export { DeleteBin3LineIcon }
export { DeleteBin3LineIcon as DeleteBin3LineIcon_alias_1 }

/**
 * The react component for the `delete-bin-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-4-fill.svg)
 */
declare const DeleteBin4FillIcon: IconType;
export { DeleteBin4FillIcon }
export { DeleteBin4FillIcon as DeleteBin4FillIcon_alias_1 }

/**
 * The react component for the `delete-bin-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-4-line.svg)
 */
declare const DeleteBin4LineIcon: IconType;
export { DeleteBin4LineIcon }
export { DeleteBin4LineIcon as DeleteBin4LineIcon_alias_1 }

/**
 * The react component for the `delete-bin-5-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin 5 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-5-fill.svg)
 */
declare const DeleteBin5FillIcon: IconType;
export { DeleteBin5FillIcon }
export { DeleteBin5FillIcon as DeleteBin5FillIcon_alias_1 }

/**
 * The react component for the `delete-bin-5-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin 5 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-5-line.svg)
 */
declare const DeleteBin5LineIcon: IconType;
export { DeleteBin5LineIcon }
export { DeleteBin5LineIcon as DeleteBin5LineIcon_alias_1 }

/**
 * The react component for the `delete-bin-6-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin 6 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-6-fill.svg)
 */
declare const DeleteBin6FillIcon: IconType;
export { DeleteBin6FillIcon }
export { DeleteBin6FillIcon as DeleteBin6FillIcon_alias_1 }

/**
 * The react component for the `delete-bin-6-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin 6 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-6-line.svg)
 */
declare const DeleteBin6LineIcon: IconType;
export { DeleteBin6LineIcon }
export { DeleteBin6LineIcon as DeleteBin6LineIcon_alias_1 }

/**
 * The react component for the `delete-bin-7-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin 7 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-7-fill.svg)
 */
declare const DeleteBin7FillIcon: IconType;
export { DeleteBin7FillIcon }
export { DeleteBin7FillIcon as DeleteBin7FillIcon_alias_1 }

/**
 * The react component for the `delete-bin-7-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin 7 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-7-line.svg)
 */
declare const DeleteBin7LineIcon: IconType;
export { DeleteBin7LineIcon }
export { DeleteBin7LineIcon as DeleteBin7LineIcon_alias_1 }

/**
 * The react component for the `delete-bin-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-fill.svg)
 */
declare const DeleteBinFillIcon: IconType;
export { DeleteBinFillIcon }
export { DeleteBinFillIcon as DeleteBinFillIcon_alias_1 }
export { DeleteBinFillIcon as DeleteBinFillIcon_alias_2 }

/**
 * The react component for the `delete-bin-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Bin Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/delete-bin-line.svg)
 */
declare const DeleteBinLineIcon: IconType;
export { DeleteBinLineIcon }
export { DeleteBinLineIcon as DeleteBinLineIcon_alias_1 }
export { DeleteBinLineIcon as DeleteBinLineIcon_alias_2 }

/**
 * The react component for the `delete-column.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Column Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/delete-column.svg)
 */
declare const DeleteColumnIcon: IconType;
export { DeleteColumnIcon }
export { DeleteColumnIcon as DeleteColumnIcon_alias_1 }
export { DeleteColumnIcon as DeleteColumnIcon_alias_2 }

/**
 * The react component for the `delete-row.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Delete Row Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/delete-row.svg)
 */
declare const DeleteRowIcon: IconType;
export { DeleteRowIcon }
export { DeleteRowIcon as DeleteRowIcon_alias_1 }
export { DeleteRowIcon as DeleteRowIcon_alias_2 }

/**
 * The react component for the `device-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Device Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/device-fill.svg)
 */
declare const DeviceFillIcon: IconType;
export { DeviceFillIcon }
export { DeviceFillIcon as DeviceFillIcon_alias_1 }

/**
 * The react component for the `device-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Device Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/device-line.svg)
 */
declare const DeviceLineIcon: IconType;
export { DeviceLineIcon }
export { DeviceLineIcon as DeviceLineIcon_alias_1 }

/**
 * The react component for the `device-recover-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Device Recover Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/device-recover-fill.svg)
 */
declare const DeviceRecoverFillIcon: IconType;
export { DeviceRecoverFillIcon }
export { DeviceRecoverFillIcon as DeviceRecoverFillIcon_alias_1 }

/**
 * The react component for the `device-recover-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Device Recover Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/device-recover-line.svg)
 */
declare const DeviceRecoverLineIcon: IconType;
export { DeviceRecoverLineIcon }
export { DeviceRecoverLineIcon as DeviceRecoverLineIcon_alias_1 }

/**
 * The react component for the `dingding-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dingding Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/dingding-fill.svg)
 */
declare const DingdingFillIcon: IconType;
export { DingdingFillIcon }
export { DingdingFillIcon as DingdingFillIcon_alias_1 }

/**
 * The react component for the `dingding-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dingding Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/dingding-line.svg)
 */
declare const DingdingLineIcon: IconType;
export { DingdingLineIcon }
export { DingdingLineIcon as DingdingLineIcon_alias_1 }

/**
 * The react component for the `direction-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Direction Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/direction-fill.svg)
 */
declare const DirectionFillIcon: IconType;
export { DirectionFillIcon }
export { DirectionFillIcon as DirectionFillIcon_alias_1 }

/**
 * The react component for the `direction-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Direction Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/direction-line.svg)
 */
declare const DirectionLineIcon: IconType;
export { DirectionLineIcon }
export { DirectionLineIcon as DirectionLineIcon_alias_1 }

/**
 * The react component for the `disc-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Disc Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/disc-fill.svg)
 */
declare const DiscFillIcon: IconType;
export { DiscFillIcon }
export { DiscFillIcon as DiscFillIcon_alias_1 }

/**
 * The react component for the `disc-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Disc Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/disc-line.svg)
 */
declare const DiscLineIcon: IconType;
export { DiscLineIcon }
export { DiscLineIcon as DiscLineIcon_alias_1 }

/**
 * The react component for the `discord-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Discord Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/discord-fill.svg)
 */
declare const DiscordFillIcon: IconType;
export { DiscordFillIcon }
export { DiscordFillIcon as DiscordFillIcon_alias_1 }

/**
 * The react component for the `discord-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Discord Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/discord-line.svg)
 */
declare const DiscordLineIcon: IconType;
export { DiscordLineIcon }
export { DiscordLineIcon as DiscordLineIcon_alias_1 }

/**
 * The react component for the `discuss-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Discuss Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/discuss-fill.svg)
 */
declare const DiscussFillIcon: IconType;
export { DiscussFillIcon }
export { DiscussFillIcon as DiscussFillIcon_alias_1 }

/**
 * The react component for the `discuss-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Discuss Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/discuss-line.svg)
 */
declare const DiscussLineIcon: IconType;
export { DiscussLineIcon }
export { DiscussLineIcon as DiscussLineIcon_alias_1 }

/**
 * The react component for the `dislike-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dislike Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/dislike-fill.svg)
 */
declare const DislikeFillIcon: IconType;
export { DislikeFillIcon }
export { DislikeFillIcon as DislikeFillIcon_alias_1 }

/**
 * The react component for the `dislike-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dislike Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/dislike-line.svg)
 */
declare const DislikeLineIcon: IconType;
export { DislikeLineIcon }
export { DislikeLineIcon as DislikeLineIcon_alias_1 }

/**
 * The react component for the `disqus-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Disqus Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/disqus-fill.svg)
 */
declare const DisqusFillIcon: IconType;
export { DisqusFillIcon }
export { DisqusFillIcon as DisqusFillIcon_alias_1 }

/**
 * The react component for the `disqus-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Disqus Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/disqus-line.svg)
 */
declare const DisqusLineIcon: IconType;
export { DisqusLineIcon }
export { DisqusLineIcon as DisqusLineIcon_alias_1 }

/**
 * The react component for the `divide-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Divide Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/divide-fill.svg)
 */
declare const DivideFillIcon: IconType;
export { DivideFillIcon }
export { DivideFillIcon as DivideFillIcon_alias_1 }

/**
 * The react component for the `divide-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Divide Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/divide-line.svg)
 */
declare const DivideLineIcon: IconType;
export { DivideLineIcon }
export { DivideLineIcon as DivideLineIcon_alias_1 }

/**
 * The react component for the `donut-chart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Donut Chart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/donut-chart-fill.svg)
 */
declare const DonutChartFillIcon: IconType;
export { DonutChartFillIcon }
export { DonutChartFillIcon as DonutChartFillIcon_alias_1 }

/**
 * The react component for the `donut-chart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Donut Chart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/donut-chart-line.svg)
 */
declare const DonutChartLineIcon: IconType;
export { DonutChartLineIcon }
export { DonutChartLineIcon as DonutChartLineIcon_alias_1 }

/**
 * The react component for the `door-closed-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Door Closed Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/door-closed-fill.svg)
 */
declare const DoorClosedFillIcon: IconType;
export { DoorClosedFillIcon }
export { DoorClosedFillIcon as DoorClosedFillIcon_alias_1 }

/**
 * The react component for the `door-closed-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Door Closed Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/door-closed-line.svg)
 */
declare const DoorClosedLineIcon: IconType;
export { DoorClosedLineIcon }
export { DoorClosedLineIcon as DoorClosedLineIcon_alias_1 }

/**
 * The react component for the `door-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Door Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/door-fill.svg)
 */
declare const DoorFillIcon: IconType;
export { DoorFillIcon }
export { DoorFillIcon as DoorFillIcon_alias_1 }

/**
 * The react component for the `door-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Door Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/door-line.svg)
 */
declare const DoorLineIcon: IconType;
export { DoorLineIcon }
export { DoorLineIcon as DoorLineIcon_alias_1 }

/**
 * The react component for the `door-lock-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Door Lock Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/door-lock-box-fill.svg)
 */
declare const DoorLockBoxFillIcon: IconType;
export { DoorLockBoxFillIcon }
export { DoorLockBoxFillIcon as DoorLockBoxFillIcon_alias_1 }

/**
 * The react component for the `door-lock-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Door Lock Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/door-lock-box-line.svg)
 */
declare const DoorLockBoxLineIcon: IconType;
export { DoorLockBoxLineIcon }
export { DoorLockBoxLineIcon as DoorLockBoxLineIcon_alias_1 }

/**
 * The react component for the `door-lock-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Door Lock Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/door-lock-fill.svg)
 */
declare const DoorLockFillIcon: IconType;
export { DoorLockFillIcon }
export { DoorLockFillIcon as DoorLockFillIcon_alias_1 }

/**
 * The react component for the `door-lock-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Door Lock Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/door-lock-line.svg)
 */
declare const DoorLockLineIcon: IconType;
export { DoorLockLineIcon }
export { DoorLockLineIcon as DoorLockLineIcon_alias_1 }

/**
 * The react component for the `door-open-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Door Open Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/door-open-fill.svg)
 */
declare const DoorOpenFillIcon: IconType;
export { DoorOpenFillIcon }
export { DoorOpenFillIcon as DoorOpenFillIcon_alias_1 }

/**
 * The react component for the `door-open-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Door Open Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/door-open-line.svg)
 */
declare const DoorOpenLineIcon: IconType;
export { DoorOpenLineIcon }
export { DoorOpenLineIcon as DoorOpenLineIcon_alias_1 }

/**
 * The react component for the `dossier-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dossier Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/dossier-fill.svg)
 */
declare const DossierFillIcon: IconType;
export { DossierFillIcon }
export { DossierFillIcon as DossierFillIcon_alias_1 }

/**
 * The react component for the `dossier-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dossier Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/dossier-line.svg)
 */
declare const DossierLineIcon: IconType;
export { DossierLineIcon }
export { DossierLineIcon as DossierLineIcon_alias_1 }

/**
 * The react component for the `douban-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Douban Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/douban-fill.svg)
 */
declare const DoubanFillIcon: IconType;
export { DoubanFillIcon }
export { DoubanFillIcon as DoubanFillIcon_alias_1 }

/**
 * The react component for the `douban-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Douban Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/douban-line.svg)
 */
declare const DoubanLineIcon: IconType;
export { DoubanLineIcon }
export { DoubanLineIcon as DoubanLineIcon_alias_1 }

/**
 * The react component for the `double-quotes-l.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Double Quotes L Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/double-quotes-l.svg)
 */
declare const DoubleQuotesLIcon: IconType;
export { DoubleQuotesLIcon }
export { DoubleQuotesLIcon as DoubleQuotesLIcon_alias_1 }
export { DoubleQuotesLIcon as DoubleQuotesLIcon_alias_2 }

/**
 * The react component for the `double-quotes-r.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Double Quotes R Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/double-quotes-r.svg)
 */
declare const DoubleQuotesRIcon: IconType;
export { DoubleQuotesRIcon }
export { DoubleQuotesRIcon as DoubleQuotesRIcon_alias_1 }
export { DoubleQuotesRIcon as DoubleQuotesRIcon_alias_2 }

/**
 * The react component for the `download-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Download 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/download-2-fill.svg)
 */
declare const Download2FillIcon: IconType;
export { Download2FillIcon }
export { Download2FillIcon as Download2FillIcon_alias_1 }
export { Download2FillIcon as Download2FillIcon_alias_2 }

/**
 * The react component for the `download-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Download 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/download-2-line.svg)
 */
declare const Download2LineIcon: IconType;
export { Download2LineIcon }
export { Download2LineIcon as Download2LineIcon_alias_1 }

/**
 * The react component for the `download-cloud-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Download Cloud 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/download-cloud-2-fill.svg)
 */
declare const DownloadCloud2FillIcon: IconType;
export { DownloadCloud2FillIcon }
export { DownloadCloud2FillIcon as DownloadCloud2FillIcon_alias_1 }

/**
 * The react component for the `download-cloud-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Download Cloud 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/download-cloud-2-line.svg)
 */
declare const DownloadCloud2LineIcon: IconType;
export { DownloadCloud2LineIcon }
export { DownloadCloud2LineIcon as DownloadCloud2LineIcon_alias_1 }

/**
 * The react component for the `download-cloud-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Download Cloud Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/download-cloud-fill.svg)
 */
declare const DownloadCloudFillIcon: IconType;
export { DownloadCloudFillIcon }
export { DownloadCloudFillIcon as DownloadCloudFillIcon_alias_1 }

/**
 * The react component for the `download-cloud-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Download Cloud Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/download-cloud-line.svg)
 */
declare const DownloadCloudLineIcon: IconType;
export { DownloadCloudLineIcon }
export { DownloadCloudLineIcon as DownloadCloudLineIcon_alias_1 }

/**
 * The react component for the `download-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Download Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/download-fill.svg)
 */
declare const DownloadFillIcon: IconType;
export { DownloadFillIcon }
export { DownloadFillIcon as DownloadFillIcon_alias_1 }

/**
 * The react component for the `download-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Download Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/download-line.svg)
 */
declare const DownloadLineIcon: IconType;
export { DownloadLineIcon }
export { DownloadLineIcon as DownloadLineIcon_alias_1 }

/**
 * The react component for the `draft-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Draft Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/draft-fill.svg)
 */
declare const DraftFillIcon: IconType;
export { DraftFillIcon }
export { DraftFillIcon as DraftFillIcon_alias_1 }

/**
 * The react component for the `draft-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Draft Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/draft-line.svg)
 */
declare const DraftLineIcon: IconType;
export { DraftLineIcon }
export { DraftLineIcon as DraftLineIcon_alias_1 }

/**
 * The react component for the `drag-drop-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Drag Drop Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/drag-drop-fill.svg)
 */
declare const DragDropFillIcon: IconType;
export { DragDropFillIcon }
export { DragDropFillIcon as DragDropFillIcon_alias_1 }

/**
 * The react component for the `drag-drop-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Drag Drop Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/drag-drop-line.svg)
 */
declare const DragDropLineIcon: IconType;
export { DragDropLineIcon }
export { DragDropLineIcon as DragDropLineIcon_alias_1 }
export { DragDropLineIcon as DragDropLineIcon_alias_2 }

/**
 * The react component for the `drag-move-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Drag Move 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/drag-move-2-fill.svg)
 */
declare const DragMove2FillIcon: IconType;
export { DragMove2FillIcon }
export { DragMove2FillIcon as DragMove2FillIcon_alias_1 }

/**
 * The react component for the `drag-move-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Drag Move 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/drag-move-2-line.svg)
 */
declare const DragMove2LineIcon: IconType;
export { DragMove2LineIcon }
export { DragMove2LineIcon as DragMove2LineIcon_alias_1 }

/**
 * The react component for the `drag-move-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Drag Move Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/drag-move-fill.svg)
 */
declare const DragMoveFillIcon: IconType;
export { DragMoveFillIcon }
export { DragMoveFillIcon as DragMoveFillIcon_alias_1 }

/**
 * The react component for the `drag-move-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Drag Move Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/drag-move-line.svg)
 */
declare const DragMoveLineIcon: IconType;
export { DragMoveLineIcon }
export { DragMoveLineIcon as DragMoveLineIcon_alias_1 }

/**
 * The react component for the `dribbble-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dribbble Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/dribbble-fill.svg)
 */
declare const DribbbleFillIcon: IconType;
export { DribbbleFillIcon }
export { DribbbleFillIcon as DribbbleFillIcon_alias_1 }

/**
 * The react component for the `dribbble-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dribbble Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/dribbble-line.svg)
 */
declare const DribbbleLineIcon: IconType;
export { DribbbleLineIcon }
export { DribbbleLineIcon as DribbbleLineIcon_alias_1 }

/**
 * The react component for the `drive-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Drive Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/drive-fill.svg)
 */
declare const DriveFillIcon: IconType;
export { DriveFillIcon }
export { DriveFillIcon as DriveFillIcon_alias_1 }

/**
 * The react component for the `drive-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Drive Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/drive-line.svg)
 */
declare const DriveLineIcon: IconType;
export { DriveLineIcon }
export { DriveLineIcon as DriveLineIcon_alias_1 }

/**
 * The react component for the `drizzle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Drizzle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/drizzle-fill.svg)
 */
declare const DrizzleFillIcon: IconType;
export { DrizzleFillIcon }
export { DrizzleFillIcon as DrizzleFillIcon_alias_1 }

/**
 * The react component for the `drizzle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Drizzle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/drizzle-line.svg)
 */
declare const DrizzleLineIcon: IconType;
export { DrizzleLineIcon }
export { DrizzleLineIcon as DrizzleLineIcon_alias_1 }

/**
 * The react component for the `dropbox-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dropbox Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/dropbox-fill.svg)
 */
declare const DropboxFillIcon: IconType;
export { DropboxFillIcon }
export { DropboxFillIcon as DropboxFillIcon_alias_1 }

/**
 * The react component for the `dropbox-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dropbox Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/dropbox-line.svg)
 */
declare const DropboxLineIcon: IconType;
export { DropboxLineIcon }
export { DropboxLineIcon as DropboxLineIcon_alias_1 }

/**
 * The react component for the `drop-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Drop Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/drop-fill.svg)
 */
declare const DropFillIcon: IconType;
export { DropFillIcon }
export { DropFillIcon as DropFillIcon_alias_1 }

/**
 * The react component for the `drop-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Drop Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/drop-line.svg)
 */
declare const DropLineIcon: IconType;
export { DropLineIcon }
export { DropLineIcon as DropLineIcon_alias_1 }

/**
 * The react component for the `dual-sim-1-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dual Sim 1 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/dual-sim-1-fill.svg)
 */
declare const DualSim1FillIcon: IconType;
export { DualSim1FillIcon }
export { DualSim1FillIcon as DualSim1FillIcon_alias_1 }

/**
 * The react component for the `dual-sim-1-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dual Sim 1 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/dual-sim-1-line.svg)
 */
declare const DualSim1LineIcon: IconType;
export { DualSim1LineIcon }
export { DualSim1LineIcon as DualSim1LineIcon_alias_1 }

/**
 * The react component for the `dual-sim-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dual Sim 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/dual-sim-2-fill.svg)
 */
declare const DualSim2FillIcon: IconType;
export { DualSim2FillIcon }
export { DualSim2FillIcon as DualSim2FillIcon_alias_1 }

/**
 * The react component for the `dual-sim-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dual Sim 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/dual-sim-2-line.svg)
 */
declare const DualSim2LineIcon: IconType;
export { DualSim2LineIcon }
export { DualSim2LineIcon as DualSim2LineIcon_alias_1 }

/**
 * The react component for the `dvd-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dvd Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/dvd-fill.svg)
 */
declare const DvdFillIcon: IconType;
export { DvdFillIcon }
export { DvdFillIcon as DvdFillIcon_alias_1 }

/**
 * The react component for the `dvd-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dvd Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/dvd-line.svg)
 */
declare const DvdLineIcon: IconType;
export { DvdLineIcon }
export { DvdLineIcon as DvdLineIcon_alias_1 }

/**
 * The react component for the `dv-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dv Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/dv-fill.svg)
 */
declare const DvFillIcon: IconType;
export { DvFillIcon }
export { DvFillIcon as DvFillIcon_alias_1 }

/**
 * The react component for the `dv-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Dv Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/dv-line.svg)
 */
declare const DvLineIcon: IconType;
export { DvLineIcon }
export { DvLineIcon as DvLineIcon_alias_1 }

/**
 * The react component for the `earth-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Earth Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/earth-fill.svg)
 */
declare const EarthFillIcon: IconType;
export { EarthFillIcon }
export { EarthFillIcon as EarthFillIcon_alias_1 }

/**
 * The react component for the `earth-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Earth Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/earth-line.svg)
 */
declare const EarthLineIcon: IconType;
export { EarthLineIcon }
export { EarthLineIcon as EarthLineIcon_alias_1 }

/**
 * The react component for the `earthquake-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Earthquake Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/earthquake-fill.svg)
 */
declare const EarthquakeFillIcon: IconType;
export { EarthquakeFillIcon }
export { EarthquakeFillIcon as EarthquakeFillIcon_alias_1 }

/**
 * The react component for the `earthquake-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Earthquake Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/earthquake-line.svg)
 */
declare const EarthquakeLineIcon: IconType;
export { EarthquakeLineIcon }
export { EarthquakeLineIcon as EarthquakeLineIcon_alias_1 }

/**
 * The react component for the `e-bike-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![E Bike 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/e-bike-2-fill.svg)
 */
declare const EBike2FillIcon: IconType;
export { EBike2FillIcon }
export { EBike2FillIcon as EBike2FillIcon_alias_1 }

/**
 * The react component for the `e-bike-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![E Bike 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/e-bike-2-line.svg)
 */
declare const EBike2LineIcon: IconType;
export { EBike2LineIcon }
export { EBike2LineIcon as EBike2LineIcon_alias_1 }

/**
 * The react component for the `e-bike-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![E Bike Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/e-bike-fill.svg)
 */
declare const EBikeFillIcon: IconType;
export { EBikeFillIcon }
export { EBikeFillIcon as EBikeFillIcon_alias_1 }

/**
 * The react component for the `e-bike-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![E Bike Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/e-bike-line.svg)
 */
declare const EBikeLineIcon: IconType;
export { EBikeLineIcon }
export { EBikeLineIcon as EBikeLineIcon_alias_1 }

/**
 * The react component for the `edge-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Edge Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/edge-fill.svg)
 */
declare const EdgeFillIcon: IconType;
export { EdgeFillIcon }
export { EdgeFillIcon as EdgeFillIcon_alias_1 }

/**
 * The react component for the `edge-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Edge Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/edge-line.svg)
 */
declare const EdgeLineIcon: IconType;
export { EdgeLineIcon }
export { EdgeLineIcon as EdgeLineIcon_alias_1 }

/**
 * The react component for the `edit-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Edit 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/edit-2-fill.svg)
 */
declare const Edit2FillIcon: IconType;
export { Edit2FillIcon }
export { Edit2FillIcon as Edit2FillIcon_alias_1 }

/**
 * The react component for the `edit-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Edit 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/edit-2-line.svg)
 */
declare const Edit2LineIcon: IconType;
export { Edit2LineIcon }
export { Edit2LineIcon as Edit2LineIcon_alias_1 }

/**
 * The react component for the `edit-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Edit Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/edit-box-fill.svg)
 */
declare const EditBoxFillIcon: IconType;
export { EditBoxFillIcon }
export { EditBoxFillIcon as EditBoxFillIcon_alias_1 }

/**
 * The react component for the `edit-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Edit Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/edit-box-line.svg)
 */
declare const EditBoxLineIcon: IconType;
export { EditBoxLineIcon }
export { EditBoxLineIcon as EditBoxLineIcon_alias_1 }

/**
 * The react component for the `edit-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Edit Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/edit-circle-fill.svg)
 */
declare const EditCircleFillIcon: IconType;
export { EditCircleFillIcon }
export { EditCircleFillIcon as EditCircleFillIcon_alias_1 }

/**
 * The react component for the `edit-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Edit Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/edit-circle-line.svg)
 */
declare const EditCircleLineIcon: IconType;
export { EditCircleLineIcon }
export { EditCircleLineIcon as EditCircleLineIcon_alias_1 }

/**
 * The react component for the `edit-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Edit Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/edit-fill.svg)
 */
declare const EditFillIcon: IconType;
export { EditFillIcon }
export { EditFillIcon as EditFillIcon_alias_1 }

/**
 * The react component for the `edit-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Edit Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/edit-line.svg)
 */
declare const EditLineIcon: IconType;
export { EditLineIcon }
export { EditLineIcon as EditLineIcon_alias_1 }

/**
 * The react component for the `eject-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Eject Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/eject-fill.svg)
 */
declare const EjectFillIcon: IconType;
export { EjectFillIcon }
export { EjectFillIcon as EjectFillIcon_alias_1 }

/**
 * The react component for the `eject-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Eject Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/eject-line.svg)
 */
declare const EjectLineIcon: IconType;
export { EjectLineIcon }
export { EjectLineIcon as EjectLineIcon_alias_1 }

/**
 * This component renders the emoji suggestion dropdown for the user.
 */
declare const EmojiPopupComponent: FC;
export { EmojiPopupComponent }
export { EmojiPopupComponent as EmojiPopupComponent_alias_1 }
export { EmojiPopupComponent as EmojiPopupComponent_alias_2 }

/**
 * The react component for the `emotion-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-2-fill.svg)
 */
declare const Emotion2FillIcon: IconType;
export { Emotion2FillIcon }
export { Emotion2FillIcon as Emotion2FillIcon_alias_1 }

/**
 * The react component for the `emotion-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-2-line.svg)
 */
declare const Emotion2LineIcon: IconType;
export { Emotion2LineIcon }
export { Emotion2LineIcon as Emotion2LineIcon_alias_1 }

/**
 * The react component for the `emotion-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-fill.svg)
 */
declare const EmotionFillIcon: IconType;
export { EmotionFillIcon }
export { EmotionFillIcon as EmotionFillIcon_alias_1 }

/**
 * The react component for the `emotion-happy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion Happy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-happy-fill.svg)
 */
declare const EmotionHappyFillIcon: IconType;
export { EmotionHappyFillIcon }
export { EmotionHappyFillIcon as EmotionHappyFillIcon_alias_1 }

/**
 * The react component for the `emotion-happy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion Happy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-happy-line.svg)
 */
declare const EmotionHappyLineIcon: IconType;
export { EmotionHappyLineIcon }
export { EmotionHappyLineIcon as EmotionHappyLineIcon_alias_1 }

/**
 * The react component for the `emotion-laugh-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion Laugh Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-laugh-fill.svg)
 */
declare const EmotionLaughFillIcon: IconType;
export { EmotionLaughFillIcon }
export { EmotionLaughFillIcon as EmotionLaughFillIcon_alias_1 }

/**
 * The react component for the `emotion-laugh-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion Laugh Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-laugh-line.svg)
 */
declare const EmotionLaughLineIcon: IconType;
export { EmotionLaughLineIcon }
export { EmotionLaughLineIcon as EmotionLaughLineIcon_alias_1 }

/**
 * The react component for the `emotion-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-line.svg)
 */
declare const EmotionLineIcon: IconType;
export { EmotionLineIcon }
export { EmotionLineIcon as EmotionLineIcon_alias_1 }

/**
 * The react component for the `emotion-normal-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion Normal Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-normal-fill.svg)
 */
declare const EmotionNormalFillIcon: IconType;
export { EmotionNormalFillIcon }
export { EmotionNormalFillIcon as EmotionNormalFillIcon_alias_1 }

/**
 * The react component for the `emotion-normal-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion Normal Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-normal-line.svg)
 */
declare const EmotionNormalLineIcon: IconType;
export { EmotionNormalLineIcon }
export { EmotionNormalLineIcon as EmotionNormalLineIcon_alias_1 }

/**
 * The react component for the `emotion-sad-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion Sad Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-sad-fill.svg)
 */
declare const EmotionSadFillIcon: IconType;
export { EmotionSadFillIcon }
export { EmotionSadFillIcon as EmotionSadFillIcon_alias_1 }

/**
 * The react component for the `emotion-sad-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion Sad Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-sad-line.svg)
 */
declare const EmotionSadLineIcon: IconType;
export { EmotionSadLineIcon }
export { EmotionSadLineIcon as EmotionSadLineIcon_alias_1 }

/**
 * The react component for the `emotion-unhappy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion Unhappy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-unhappy-fill.svg)
 */
declare const EmotionUnhappyFillIcon: IconType;
export { EmotionUnhappyFillIcon }
export { EmotionUnhappyFillIcon as EmotionUnhappyFillIcon_alias_1 }

/**
 * The react component for the `emotion-unhappy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emotion Unhappy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/emotion-unhappy-line.svg)
 */
declare const EmotionUnhappyLineIcon: IconType;
export { EmotionUnhappyLineIcon }
export { EmotionUnhappyLineIcon as EmotionUnhappyLineIcon_alias_1 }

/**
 * The react component for the `empathize-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Empathize Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/empathize-fill.svg)
 */
declare const EmpathizeFillIcon: IconType;
export { EmpathizeFillIcon }
export { EmpathizeFillIcon as EmpathizeFillIcon_alias_1 }

/**
 * The react component for the `empathize-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Empathize Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/empathize-line.svg)
 */
declare const EmpathizeLineIcon: IconType;
export { EmpathizeLineIcon }
export { EmpathizeLineIcon as EmpathizeLineIcon_alias_1 }

/**
 * The react component for the `emphasis-cn.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emphasis Cn Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/emphasis-cn.svg)
 */
declare const EmphasisCnIcon: IconType;
export { EmphasisCnIcon }
export { EmphasisCnIcon as EmphasisCnIcon_alias_1 }
export { EmphasisCnIcon as EmphasisCnIcon_alias_2 }

/**
 * The react component for the `emphasis.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Emphasis Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/emphasis.svg)
 */
declare const EmphasisIcon: IconType;
export { EmphasisIcon }
export { EmphasisIcon as EmphasisIcon_alias_1 }
export { EmphasisIcon as EmphasisIcon_alias_2 }

/**
 * The react component for the `english-input.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![English Input Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/english-input.svg)
 */
declare const EnglishInputIcon: IconType;
export { EnglishInputIcon }
export { EnglishInputIcon as EnglishInputIcon_alias_1 }
export { EnglishInputIcon as EnglishInputIcon_alias_2 }

/**
 * The react component for the `equalizer-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Equalizer Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/equalizer-fill.svg)
 */
declare const EqualizerFillIcon: IconType;
export { EqualizerFillIcon }
export { EqualizerFillIcon as EqualizerFillIcon_alias_1 }

/**
 * The react component for the `equalizer-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Equalizer Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/equalizer-line.svg)
 */
declare const EqualizerLineIcon: IconType;
export { EqualizerLineIcon }
export { EqualizerLineIcon as EqualizerLineIcon_alias_1 }

/**
 * The react component for the `eraser-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Eraser Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/eraser-fill.svg)
 */
declare const EraserFillIcon: IconType;
export { EraserFillIcon }
export { EraserFillIcon as EraserFillIcon_alias_1 }

/**
 * The react component for the `eraser-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Eraser Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/eraser-line.svg)
 */
declare const EraserLineIcon: IconType;
export { EraserLineIcon }
export { EraserLineIcon as EraserLineIcon_alias_1 }

/**
 * The react component for the `error-warning-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Error Warning Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/error-warning-fill.svg)
 */
declare const ErrorWarningFillIcon: IconType;
export { ErrorWarningFillIcon }
export { ErrorWarningFillIcon as ErrorWarningFillIcon_alias_1 }

/**
 * The react component for the `error-warning-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Error Warning Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/error-warning-line.svg)
 */
declare const ErrorWarningLineIcon: IconType;
export { ErrorWarningLineIcon }
export { ErrorWarningLineIcon as ErrorWarningLineIcon_alias_1 }
export { ErrorWarningLineIcon as ErrorWarningLineIcon_alias_2 }

/**
 * The react component for the `evernote-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Evernote Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/evernote-fill.svg)
 */
declare const EvernoteFillIcon: IconType;
export { EvernoteFillIcon }
export { EvernoteFillIcon as EvernoteFillIcon_alias_1 }

/**
 * The react component for the `evernote-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Evernote Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/evernote-line.svg)
 */
declare const EvernoteLineIcon: IconType;
export { EvernoteLineIcon }
export { EvernoteLineIcon as EvernoteLineIcon_alias_1 }

/**
 * The react component for the `exchange-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Exchange Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/exchange-box-fill.svg)
 */
declare const ExchangeBoxFillIcon: IconType;
export { ExchangeBoxFillIcon }
export { ExchangeBoxFillIcon as ExchangeBoxFillIcon_alias_1 }

/**
 * The react component for the `exchange-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Exchange Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/exchange-box-line.svg)
 */
declare const ExchangeBoxLineIcon: IconType;
export { ExchangeBoxLineIcon }
export { ExchangeBoxLineIcon as ExchangeBoxLineIcon_alias_1 }

/**
 * The react component for the `exchange-cny-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Exchange Cny Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/exchange-cny-fill.svg)
 */
declare const ExchangeCnyFillIcon: IconType;
export { ExchangeCnyFillIcon }
export { ExchangeCnyFillIcon as ExchangeCnyFillIcon_alias_1 }

/**
 * The react component for the `exchange-cny-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Exchange Cny Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/exchange-cny-line.svg)
 */
declare const ExchangeCnyLineIcon: IconType;
export { ExchangeCnyLineIcon }
export { ExchangeCnyLineIcon as ExchangeCnyLineIcon_alias_1 }

/**
 * The react component for the `exchange-dollar-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Exchange Dollar Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/exchange-dollar-fill.svg)
 */
declare const ExchangeDollarFillIcon: IconType;
export { ExchangeDollarFillIcon }
export { ExchangeDollarFillIcon as ExchangeDollarFillIcon_alias_1 }

/**
 * The react component for the `exchange-dollar-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Exchange Dollar Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/exchange-dollar-line.svg)
 */
declare const ExchangeDollarLineIcon: IconType;
export { ExchangeDollarLineIcon }
export { ExchangeDollarLineIcon as ExchangeDollarLineIcon_alias_1 }

/**
 * The react component for the `exchange-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Exchange Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/exchange-fill.svg)
 */
declare const ExchangeFillIcon: IconType;
export { ExchangeFillIcon }
export { ExchangeFillIcon as ExchangeFillIcon_alias_1 }

/**
 * The react component for the `exchange-funds-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Exchange Funds Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/exchange-funds-fill.svg)
 */
declare const ExchangeFundsFillIcon: IconType;
export { ExchangeFundsFillIcon }
export { ExchangeFundsFillIcon as ExchangeFundsFillIcon_alias_1 }

/**
 * The react component for the `exchange-funds-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Exchange Funds Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/exchange-funds-line.svg)
 */
declare const ExchangeFundsLineIcon: IconType;
export { ExchangeFundsLineIcon }
export { ExchangeFundsLineIcon as ExchangeFundsLineIcon_alias_1 }

/**
 * The react component for the `exchange-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Exchange Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/exchange-line.svg)
 */
declare const ExchangeLineIcon: IconType;
export { ExchangeLineIcon }
export { ExchangeLineIcon as ExchangeLineIcon_alias_1 }

/**
 * The react component for the `external-link-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![External Link Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/external-link-fill.svg)
 */
declare const ExternalLinkFillIcon: IconType;
export { ExternalLinkFillIcon }
export { ExternalLinkFillIcon as ExternalLinkFillIcon_alias_1 }
export { ExternalLinkFillIcon as ExternalLinkFillIcon_alias_2 }

/**
 * The react component for the `external-link-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![External Link Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/external-link-line.svg)
 */
declare const ExternalLinkLineIcon: IconType;
export { ExternalLinkLineIcon }
export { ExternalLinkLineIcon as ExternalLinkLineIcon_alias_1 }

/**
 * The react component for the `eye-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Eye 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/eye-2-fill.svg)
 */
declare const Eye2FillIcon: IconType;
export { Eye2FillIcon }
export { Eye2FillIcon as Eye2FillIcon_alias_1 }

/**
 * The react component for the `eye-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Eye 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/eye-2-line.svg)
 */
declare const Eye2LineIcon: IconType;
export { Eye2LineIcon }
export { Eye2LineIcon as Eye2LineIcon_alias_1 }

/**
 * The react component for the `eye-close-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Eye Close Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/eye-close-fill.svg)
 */
declare const EyeCloseFillIcon: IconType;
export { EyeCloseFillIcon }
export { EyeCloseFillIcon as EyeCloseFillIcon_alias_1 }

/**
 * The react component for the `eye-close-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Eye Close Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/eye-close-line.svg)
 */
declare const EyeCloseLineIcon: IconType;
export { EyeCloseLineIcon }
export { EyeCloseLineIcon as EyeCloseLineIcon_alias_1 }

/**
 * The react component for the `eye-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Eye Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/eye-fill.svg)
 */
declare const EyeFillIcon: IconType;
export { EyeFillIcon }
export { EyeFillIcon as EyeFillIcon_alias_1 }

/**
 * The react component for the `eye-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Eye Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/eye-line.svg)
 */
declare const EyeLineIcon: IconType;
export { EyeLineIcon }
export { EyeLineIcon as EyeLineIcon_alias_1 }

/**
 * The react component for the `eye-off-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Eye Off Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/eye-off-fill.svg)
 */
declare const EyeOffFillIcon: IconType;
export { EyeOffFillIcon }
export { EyeOffFillIcon as EyeOffFillIcon_alias_1 }

/**
 * The react component for the `eye-off-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Eye Off Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/eye-off-line.svg)
 */
declare const EyeOffLineIcon: IconType;
export { EyeOffLineIcon }
export { EyeOffLineIcon as EyeOffLineIcon_alias_1 }

/**
 * The react component for the `facebook-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Facebook Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/facebook-box-fill.svg)
 */
declare const FacebookBoxFillIcon: IconType;
export { FacebookBoxFillIcon }
export { FacebookBoxFillIcon as FacebookBoxFillIcon_alias_1 }

/**
 * The react component for the `facebook-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Facebook Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/facebook-box-line.svg)
 */
declare const FacebookBoxLineIcon: IconType;
export { FacebookBoxLineIcon }
export { FacebookBoxLineIcon as FacebookBoxLineIcon_alias_1 }

/**
 * The react component for the `facebook-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Facebook Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/facebook-circle-fill.svg)
 */
declare const FacebookCircleFillIcon: IconType;
export { FacebookCircleFillIcon }
export { FacebookCircleFillIcon as FacebookCircleFillIcon_alias_1 }

/**
 * The react component for the `facebook-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Facebook Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/facebook-circle-line.svg)
 */
declare const FacebookCircleLineIcon: IconType;
export { FacebookCircleLineIcon }
export { FacebookCircleLineIcon as FacebookCircleLineIcon_alias_1 }

/**
 * The react component for the `facebook-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Facebook Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/facebook-fill.svg)
 */
declare const FacebookFillIcon: IconType;
export { FacebookFillIcon }
export { FacebookFillIcon as FacebookFillIcon_alias_1 }

/**
 * The react component for the `facebook-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Facebook Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/facebook-line.svg)
 */
declare const FacebookLineIcon: IconType;
export { FacebookLineIcon }
export { FacebookLineIcon as FacebookLineIcon_alias_1 }

/**
 * The react component for the `fahrenheit-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fahrenheit Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/fahrenheit-fill.svg)
 */
declare const FahrenheitFillIcon: IconType;
export { FahrenheitFillIcon }
export { FahrenheitFillIcon as FahrenheitFillIcon_alias_1 }

/**
 * The react component for the `fahrenheit-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fahrenheit Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/fahrenheit-line.svg)
 */
declare const FahrenheitLineIcon: IconType;
export { FahrenheitLineIcon }
export { FahrenheitLineIcon as FahrenheitLineIcon_alias_1 }

/**
 * The react component for the `feedback-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Feedback Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/feedback-fill.svg)
 */
declare const FeedbackFillIcon: IconType;
export { FeedbackFillIcon }
export { FeedbackFillIcon as FeedbackFillIcon_alias_1 }

/**
 * The react component for the `feedback-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Feedback Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/feedback-line.svg)
 */
declare const FeedbackLineIcon: IconType;
export { FeedbackLineIcon }
export { FeedbackLineIcon as FeedbackLineIcon_alias_1 }

/**
 * The react component for the `file-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-2-fill.svg)
 */
declare const File2FillIcon: IconType;
export { File2FillIcon }
export { File2FillIcon as File2FillIcon_alias_1 }

/**
 * The react component for the `file-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-2-line.svg)
 */
declare const File2LineIcon: IconType;
export { File2LineIcon }
export { File2LineIcon as File2LineIcon_alias_1 }

/**
 * The react component for the `file-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-3-fill.svg)
 */
declare const File3FillIcon: IconType;
export { File3FillIcon }
export { File3FillIcon as File3FillIcon_alias_1 }

/**
 * The react component for the `file-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-3-line.svg)
 */
declare const File3LineIcon: IconType;
export { File3LineIcon }
export { File3LineIcon as File3LineIcon_alias_1 }

/**
 * The react component for the `file-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-4-fill.svg)
 */
declare const File4FillIcon: IconType;
export { File4FillIcon }
export { File4FillIcon as File4FillIcon_alias_1 }

/**
 * The react component for the `file-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-4-line.svg)
 */
declare const File4LineIcon: IconType;
export { File4LineIcon }
export { File4LineIcon as File4LineIcon_alias_1 }

/**
 * The react component for the `file-add-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Add Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-add-fill.svg)
 */
declare const FileAddFillIcon: IconType;
export { FileAddFillIcon }
export { FileAddFillIcon as FileAddFillIcon_alias_1 }

/**
 * The react component for the `file-add-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Add Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-add-line.svg)
 */
declare const FileAddLineIcon: IconType;
export { FileAddLineIcon }
export { FileAddLineIcon as FileAddLineIcon_alias_1 }

/**
 * The react component for the `file-chart-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Chart 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-chart-2-fill.svg)
 */
declare const FileChart2FillIcon: IconType;
export { FileChart2FillIcon }
export { FileChart2FillIcon as FileChart2FillIcon_alias_1 }

/**
 * The react component for the `file-chart-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Chart 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-chart-2-line.svg)
 */
declare const FileChart2LineIcon: IconType;
export { FileChart2LineIcon }
export { FileChart2LineIcon as FileChart2LineIcon_alias_1 }

/**
 * The react component for the `file-chart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Chart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-chart-fill.svg)
 */
declare const FileChartFillIcon: IconType;
export { FileChartFillIcon }
export { FileChartFillIcon as FileChartFillIcon_alias_1 }

/**
 * The react component for the `file-chart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Chart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-chart-line.svg)
 */
declare const FileChartLineIcon: IconType;
export { FileChartLineIcon }
export { FileChartLineIcon as FileChartLineIcon_alias_1 }

/**
 * The react component for the `file-cloud-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Cloud Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-cloud-fill.svg)
 */
declare const FileCloudFillIcon: IconType;
export { FileCloudFillIcon }
export { FileCloudFillIcon as FileCloudFillIcon_alias_1 }

/**
 * The react component for the `file-cloud-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Cloud Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-cloud-line.svg)
 */
declare const FileCloudLineIcon: IconType;
export { FileCloudLineIcon }
export { FileCloudLineIcon as FileCloudLineIcon_alias_1 }

/**
 * The react component for the `file-code-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Code Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-code-fill.svg)
 */
declare const FileCodeFillIcon: IconType;
export { FileCodeFillIcon }
export { FileCodeFillIcon as FileCodeFillIcon_alias_1 }

/**
 * The react component for the `file-code-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Code Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-code-line.svg)
 */
declare const FileCodeLineIcon: IconType;
export { FileCodeLineIcon }
export { FileCodeLineIcon as FileCodeLineIcon_alias_1 }

/**
 * The react component for the `file-copy-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Copy 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-copy-2-fill.svg)
 */
declare const FileCopy2FillIcon: IconType;
export { FileCopy2FillIcon }
export { FileCopy2FillIcon as FileCopy2FillIcon_alias_1 }

/**
 * The react component for the `file-copy-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Copy 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-copy-2-line.svg)
 */
declare const FileCopy2LineIcon: IconType;
export { FileCopy2LineIcon }
export { FileCopy2LineIcon as FileCopy2LineIcon_alias_1 }

/**
 * The react component for the `file-copy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Copy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-copy-fill.svg)
 */
declare const FileCopyFillIcon: IconType;
export { FileCopyFillIcon }
export { FileCopyFillIcon as FileCopyFillIcon_alias_1 }

/**
 * The react component for the `file-copy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Copy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-copy-line.svg)
 */
declare const FileCopyLineIcon: IconType;
export { FileCopyLineIcon }
export { FileCopyLineIcon as FileCopyLineIcon_alias_1 }
export { FileCopyLineIcon as FileCopyLineIcon_alias_2 }

/**
 * The react component for the `file-damage-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Damage Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-damage-fill.svg)
 */
declare const FileDamageFillIcon: IconType;
export { FileDamageFillIcon }
export { FileDamageFillIcon as FileDamageFillIcon_alias_1 }

/**
 * The react component for the `file-damage-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Damage Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-damage-line.svg)
 */
declare const FileDamageLineIcon: IconType;
export { FileDamageLineIcon }
export { FileDamageLineIcon as FileDamageLineIcon_alias_1 }

/**
 * The react component for the `file-download-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Download Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-download-fill.svg)
 */
declare const FileDownloadFillIcon: IconType;
export { FileDownloadFillIcon }
export { FileDownloadFillIcon as FileDownloadFillIcon_alias_1 }

/**
 * The react component for the `file-download-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Download Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-download-line.svg)
 */
declare const FileDownloadLineIcon: IconType;
export { FileDownloadLineIcon }
export { FileDownloadLineIcon as FileDownloadLineIcon_alias_1 }

/**
 * The react component for the `file-edit-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Edit Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-edit-fill.svg)
 */
declare const FileEditFillIcon: IconType;
export { FileEditFillIcon }
export { FileEditFillIcon as FileEditFillIcon_alias_1 }

/**
 * The react component for the `file-edit-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Edit Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-edit-line.svg)
 */
declare const FileEditLineIcon: IconType;
export { FileEditLineIcon }
export { FileEditLineIcon as FileEditLineIcon_alias_1 }

/**
 * The react component for the `file-excel-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Excel 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-excel-2-fill.svg)
 */
declare const FileExcel2FillIcon: IconType;
export { FileExcel2FillIcon }
export { FileExcel2FillIcon as FileExcel2FillIcon_alias_1 }

/**
 * The react component for the `file-excel-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Excel 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-excel-2-line.svg)
 */
declare const FileExcel2LineIcon: IconType;
export { FileExcel2LineIcon }
export { FileExcel2LineIcon as FileExcel2LineIcon_alias_1 }

/**
 * The react component for the `file-excel-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Excel Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-excel-fill.svg)
 */
declare const FileExcelFillIcon: IconType;
export { FileExcelFillIcon }
export { FileExcelFillIcon as FileExcelFillIcon_alias_1 }

/**
 * The react component for the `file-excel-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Excel Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-excel-line.svg)
 */
declare const FileExcelLineIcon: IconType;
export { FileExcelLineIcon }
export { FileExcelLineIcon as FileExcelLineIcon_alias_1 }

/**
 * The react component for the `file-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-fill.svg)
 */
declare const FileFillIcon: IconType;
export { FileFillIcon }
export { FileFillIcon as FileFillIcon_alias_1 }

/**
 * The react component for the `file-forbid-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Forbid Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-forbid-fill.svg)
 */
declare const FileForbidFillIcon: IconType;
export { FileForbidFillIcon }
export { FileForbidFillIcon as FileForbidFillIcon_alias_1 }

/**
 * The react component for the `file-forbid-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Forbid Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-forbid-line.svg)
 */
declare const FileForbidLineIcon: IconType;
export { FileForbidLineIcon }
export { FileForbidLineIcon as FileForbidLineIcon_alias_1 }

/**
 * The react component for the `file-gif-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Gif Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-gif-fill.svg)
 */
declare const FileGifFillIcon: IconType;
export { FileGifFillIcon }
export { FileGifFillIcon as FileGifFillIcon_alias_1 }

/**
 * The react component for the `file-gif-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Gif Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-gif-line.svg)
 */
declare const FileGifLineIcon: IconType;
export { FileGifLineIcon }
export { FileGifLineIcon as FileGifLineIcon_alias_1 }

/**
 * The react component for the `file-history-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File History Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-history-fill.svg)
 */
declare const FileHistoryFillIcon: IconType;
export { FileHistoryFillIcon }
export { FileHistoryFillIcon as FileHistoryFillIcon_alias_1 }

/**
 * The react component for the `file-history-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File History Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-history-line.svg)
 */
declare const FileHistoryLineIcon: IconType;
export { FileHistoryLineIcon }
export { FileHistoryLineIcon as FileHistoryLineIcon_alias_1 }

/**
 * The react component for the `file-hwp-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Hwp Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-hwp-fill.svg)
 */
declare const FileHwpFillIcon: IconType;
export { FileHwpFillIcon }
export { FileHwpFillIcon as FileHwpFillIcon_alias_1 }

/**
 * The react component for the `file-hwp-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Hwp Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-hwp-line.svg)
 */
declare const FileHwpLineIcon: IconType;
export { FileHwpLineIcon }
export { FileHwpLineIcon as FileHwpLineIcon_alias_1 }

/**
 * The react component for the `file-info-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Info Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-info-fill.svg)
 */
declare const FileInfoFillIcon: IconType;
export { FileInfoFillIcon }
export { FileInfoFillIcon as FileInfoFillIcon_alias_1 }

/**
 * The react component for the `file-info-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Info Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-info-line.svg)
 */
declare const FileInfoLineIcon: IconType;
export { FileInfoLineIcon }
export { FileInfoLineIcon as FileInfoLineIcon_alias_1 }

/**
 * The react component for the `file-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-line.svg)
 */
declare const FileLineIcon: IconType;
export { FileLineIcon }
export { FileLineIcon as FileLineIcon_alias_1 }

/**
 * The react component for the `file-list-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File List 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-list-2-fill.svg)
 */
declare const FileList2FillIcon: IconType;
export { FileList2FillIcon }
export { FileList2FillIcon as FileList2FillIcon_alias_1 }

/**
 * The react component for the `file-list-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File List 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-list-2-line.svg)
 */
declare const FileList2LineIcon: IconType;
export { FileList2LineIcon }
export { FileList2LineIcon as FileList2LineIcon_alias_1 }

/**
 * The react component for the `file-list-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File List 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-list-3-fill.svg)
 */
declare const FileList3FillIcon: IconType;
export { FileList3FillIcon }
export { FileList3FillIcon as FileList3FillIcon_alias_1 }

/**
 * The react component for the `file-list-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File List 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-list-3-line.svg)
 */
declare const FileList3LineIcon: IconType;
export { FileList3LineIcon }
export { FileList3LineIcon as FileList3LineIcon_alias_1 }

/**
 * The react component for the `file-list-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File List Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-list-fill.svg)
 */
declare const FileListFillIcon: IconType;
export { FileListFillIcon }
export { FileListFillIcon as FileListFillIcon_alias_1 }

/**
 * The react component for the `file-list-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File List Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-list-line.svg)
 */
declare const FileListLineIcon: IconType;
export { FileListLineIcon }
export { FileListLineIcon as FileListLineIcon_alias_1 }

/**
 * The react component for the `file-lock-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Lock Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-lock-fill.svg)
 */
declare const FileLockFillIcon: IconType;
export { FileLockFillIcon }
export { FileLockFillIcon as FileLockFillIcon_alias_1 }

/**
 * The react component for the `file-lock-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Lock Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-lock-line.svg)
 */
declare const FileLockLineIcon: IconType;
export { FileLockLineIcon }
export { FileLockLineIcon as FileLockLineIcon_alias_1 }

/**
 * The react component for the `file-mark-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Mark Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-mark-fill.svg)
 */
declare const FileMarkFillIcon: IconType;
export { FileMarkFillIcon }
export { FileMarkFillIcon as FileMarkFillIcon_alias_1 }

/**
 * The react component for the `file-mark-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Mark Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-mark-line.svg)
 */
declare const FileMarkLineIcon: IconType;
export { FileMarkLineIcon }
export { FileMarkLineIcon as FileMarkLineIcon_alias_1 }

/**
 * The react component for the `file-music-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Music Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-music-fill.svg)
 */
declare const FileMusicFillIcon: IconType;
export { FileMusicFillIcon }
export { FileMusicFillIcon as FileMusicFillIcon_alias_1 }

/**
 * The react component for the `file-music-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Music Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-music-line.svg)
 */
declare const FileMusicLineIcon: IconType;
export { FileMusicLineIcon }
export { FileMusicLineIcon as FileMusicLineIcon_alias_1 }

/**
 * The react component for the `file-paper-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Paper 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-paper-2-fill.svg)
 */
declare const FilePaper2FillIcon: IconType;
export { FilePaper2FillIcon }
export { FilePaper2FillIcon as FilePaper2FillIcon_alias_1 }

/**
 * The react component for the `file-paper-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Paper 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-paper-2-line.svg)
 */
declare const FilePaper2LineIcon: IconType;
export { FilePaper2LineIcon }
export { FilePaper2LineIcon as FilePaper2LineIcon_alias_1 }

/**
 * The react component for the `file-paper-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Paper Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-paper-fill.svg)
 */
declare const FilePaperFillIcon: IconType;
export { FilePaperFillIcon }
export { FilePaperFillIcon as FilePaperFillIcon_alias_1 }

/**
 * The react component for the `file-paper-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Paper Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-paper-line.svg)
 */
declare const FilePaperLineIcon: IconType;
export { FilePaperLineIcon }
export { FilePaperLineIcon as FilePaperLineIcon_alias_1 }

/**
 * The react component for the `file-pdf-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Pdf Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-pdf-fill.svg)
 */
declare const FilePdfFillIcon: IconType;
export { FilePdfFillIcon }
export { FilePdfFillIcon as FilePdfFillIcon_alias_1 }

/**
 * The react component for the `file-pdf-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Pdf Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-pdf-line.svg)
 */
declare const FilePdfLineIcon: IconType;
export { FilePdfLineIcon }
export { FilePdfLineIcon as FilePdfLineIcon_alias_1 }

/**
 * The react component for the `file-ppt-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Ppt 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-ppt-2-fill.svg)
 */
declare const FilePpt2FillIcon: IconType;
export { FilePpt2FillIcon }
export { FilePpt2FillIcon as FilePpt2FillIcon_alias_1 }

/**
 * The react component for the `file-ppt-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Ppt 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-ppt-2-line.svg)
 */
declare const FilePpt2LineIcon: IconType;
export { FilePpt2LineIcon }
export { FilePpt2LineIcon as FilePpt2LineIcon_alias_1 }

/**
 * The react component for the `file-ppt-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Ppt Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-ppt-fill.svg)
 */
declare const FilePptFillIcon: IconType;
export { FilePptFillIcon }
export { FilePptFillIcon as FilePptFillIcon_alias_1 }

/**
 * The react component for the `file-ppt-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Ppt Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-ppt-line.svg)
 */
declare const FilePptLineIcon: IconType;
export { FilePptLineIcon }
export { FilePptLineIcon as FilePptLineIcon_alias_1 }

/**
 * The react component for the `file-reduce-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Reduce Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-reduce-fill.svg)
 */
declare const FileReduceFillIcon: IconType;
export { FileReduceFillIcon }
export { FileReduceFillIcon as FileReduceFillIcon_alias_1 }

/**
 * The react component for the `file-reduce-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Reduce Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-reduce-line.svg)
 */
declare const FileReduceLineIcon: IconType;
export { FileReduceLineIcon }
export { FileReduceLineIcon as FileReduceLineIcon_alias_1 }

/**
 * The react component for the `file-search-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Search Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-search-fill.svg)
 */
declare const FileSearchFillIcon: IconType;
export { FileSearchFillIcon }
export { FileSearchFillIcon as FileSearchFillIcon_alias_1 }

/**
 * The react component for the `file-search-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Search Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-search-line.svg)
 */
declare const FileSearchLineIcon: IconType;
export { FileSearchLineIcon }
export { FileSearchLineIcon as FileSearchLineIcon_alias_1 }

/**
 * The react component for the `file-settings-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Settings Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-settings-fill.svg)
 */
declare const FileSettingsFillIcon: IconType;
export { FileSettingsFillIcon }
export { FileSettingsFillIcon as FileSettingsFillIcon_alias_1 }

/**
 * The react component for the `file-settings-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Settings Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-settings-line.svg)
 */
declare const FileSettingsLineIcon: IconType;
export { FileSettingsLineIcon }
export { FileSettingsLineIcon as FileSettingsLineIcon_alias_1 }

/**
 * The react component for the `file-shield-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Shield 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-shield-2-fill.svg)
 */
declare const FileShield2FillIcon: IconType;
export { FileShield2FillIcon }
export { FileShield2FillIcon as FileShield2FillIcon_alias_1 }

/**
 * The react component for the `file-shield-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Shield 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-shield-2-line.svg)
 */
declare const FileShield2LineIcon: IconType;
export { FileShield2LineIcon }
export { FileShield2LineIcon as FileShield2LineIcon_alias_1 }

/**
 * The react component for the `file-shield-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Shield Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-shield-fill.svg)
 */
declare const FileShieldFillIcon: IconType;
export { FileShieldFillIcon }
export { FileShieldFillIcon as FileShieldFillIcon_alias_1 }

/**
 * The react component for the `file-shield-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Shield Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-shield-line.svg)
 */
declare const FileShieldLineIcon: IconType;
export { FileShieldLineIcon }
export { FileShieldLineIcon as FileShieldLineIcon_alias_1 }

/**
 * The react component for the `file-shred-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Shred Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-shred-fill.svg)
 */
declare const FileShredFillIcon: IconType;
export { FileShredFillIcon }
export { FileShredFillIcon as FileShredFillIcon_alias_1 }

/**
 * The react component for the `file-shred-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Shred Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-shred-line.svg)
 */
declare const FileShredLineIcon: IconType;
export { FileShredLineIcon }
export { FileShredLineIcon as FileShredLineIcon_alias_1 }

/**
 * The react component for the `file-text-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Text Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-text-fill.svg)
 */
declare const FileTextFillIcon: IconType;
export { FileTextFillIcon }
export { FileTextFillIcon as FileTextFillIcon_alias_1 }

/**
 * The react component for the `file-text-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Text Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-text-line.svg)
 */
declare const FileTextLineIcon: IconType;
export { FileTextLineIcon }
export { FileTextLineIcon as FileTextLineIcon_alias_1 }

/**
 * The react component for the `file-transfer-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Transfer Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-transfer-fill.svg)
 */
declare const FileTransferFillIcon: IconType;
export { FileTransferFillIcon }
export { FileTransferFillIcon as FileTransferFillIcon_alias_1 }

/**
 * The react component for the `file-transfer-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Transfer Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-transfer-line.svg)
 */
declare const FileTransferLineIcon: IconType;
export { FileTransferLineIcon }
export { FileTransferLineIcon as FileTransferLineIcon_alias_1 }

/**
 * The react component for the `file-unknow-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Unknow Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-unknow-fill.svg)
 */
declare const FileUnknowFillIcon: IconType;
export { FileUnknowFillIcon }
export { FileUnknowFillIcon as FileUnknowFillIcon_alias_1 }

/**
 * The react component for the `file-unknow-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Unknow Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-unknow-line.svg)
 */
declare const FileUnknowLineIcon: IconType;
export { FileUnknowLineIcon }
export { FileUnknowLineIcon as FileUnknowLineIcon_alias_1 }

/**
 * The react component for the `file-upload-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Upload Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-upload-fill.svg)
 */
declare const FileUploadFillIcon: IconType;
export { FileUploadFillIcon }
export { FileUploadFillIcon as FileUploadFillIcon_alias_1 }

/**
 * The react component for the `file-upload-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Upload Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-upload-line.svg)
 */
declare const FileUploadLineIcon: IconType;
export { FileUploadLineIcon }
export { FileUploadLineIcon as FileUploadLineIcon_alias_1 }

/**
 * The react component for the `file-user-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File User Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-user-fill.svg)
 */
declare const FileUserFillIcon: IconType;
export { FileUserFillIcon }
export { FileUserFillIcon as FileUserFillIcon_alias_1 }

/**
 * The react component for the `file-user-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File User Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-user-line.svg)
 */
declare const FileUserLineIcon: IconType;
export { FileUserLineIcon }
export { FileUserLineIcon as FileUserLineIcon_alias_1 }

/**
 * The react component for the `file-warning-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Warning Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-warning-fill.svg)
 */
declare const FileWarningFillIcon: IconType;
export { FileWarningFillIcon }
export { FileWarningFillIcon as FileWarningFillIcon_alias_1 }

/**
 * The react component for the `file-warning-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Warning Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-warning-line.svg)
 */
declare const FileWarningLineIcon: IconType;
export { FileWarningLineIcon }
export { FileWarningLineIcon as FileWarningLineIcon_alias_1 }

/**
 * The react component for the `file-word-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Word 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-word-2-fill.svg)
 */
declare const FileWord2FillIcon: IconType;
export { FileWord2FillIcon }
export { FileWord2FillIcon as FileWord2FillIcon_alias_1 }

/**
 * The react component for the `file-word-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Word 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-word-2-line.svg)
 */
declare const FileWord2LineIcon: IconType;
export { FileWord2LineIcon }
export { FileWord2LineIcon as FileWord2LineIcon_alias_1 }

/**
 * The react component for the `file-word-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Word Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-word-fill.svg)
 */
declare const FileWordFillIcon: IconType;
export { FileWordFillIcon }
export { FileWordFillIcon as FileWordFillIcon_alias_1 }

/**
 * The react component for the `file-word-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Word Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-word-line.svg)
 */
declare const FileWordLineIcon: IconType;
export { FileWordLineIcon }
export { FileWordLineIcon as FileWordLineIcon_alias_1 }

/**
 * The react component for the `file-zip-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Zip Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-zip-fill.svg)
 */
declare const FileZipFillIcon: IconType;
export { FileZipFillIcon }
export { FileZipFillIcon as FileZipFillIcon_alias_1 }

/**
 * The react component for the `file-zip-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![File Zip Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/file-zip-line.svg)
 */
declare const FileZipLineIcon: IconType;
export { FileZipLineIcon }
export { FileZipLineIcon as FileZipLineIcon_alias_1 }

/**
 * The react component for the `film-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Film Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/film-fill.svg)
 */
declare const FilmFillIcon: IconType;
export { FilmFillIcon }
export { FilmFillIcon as FilmFillIcon_alias_1 }

/**
 * The react component for the `film-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Film Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/film-line.svg)
 */
declare const FilmLineIcon: IconType;
export { FilmLineIcon }
export { FilmLineIcon as FilmLineIcon_alias_1 }

/**
 * The react component for the `filter-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Filter 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/filter-2-fill.svg)
 */
declare const Filter2FillIcon: IconType;
export { Filter2FillIcon }
export { Filter2FillIcon as Filter2FillIcon_alias_1 }

/**
 * The react component for the `filter-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Filter 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/filter-2-line.svg)
 */
declare const Filter2LineIcon: IconType;
export { Filter2LineIcon }
export { Filter2LineIcon as Filter2LineIcon_alias_1 }

/**
 * The react component for the `filter-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Filter 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/filter-3-fill.svg)
 */
declare const Filter3FillIcon: IconType;
export { Filter3FillIcon }
export { Filter3FillIcon as Filter3FillIcon_alias_1 }

/**
 * The react component for the `filter-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Filter 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/filter-3-line.svg)
 */
declare const Filter3LineIcon: IconType;
export { Filter3LineIcon }
export { Filter3LineIcon as Filter3LineIcon_alias_1 }

/**
 * The react component for the `filter-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Filter Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/filter-fill.svg)
 */
declare const FilterFillIcon: IconType;
export { FilterFillIcon }
export { FilterFillIcon as FilterFillIcon_alias_1 }

/**
 * The react component for the `filter-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Filter Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/filter-line.svg)
 */
declare const FilterLineIcon: IconType;
export { FilterLineIcon }
export { FilterLineIcon as FilterLineIcon_alias_1 }

/**
 * The react component for the `filter-off-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Filter Off Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/filter-off-fill.svg)
 */
declare const FilterOffFillIcon: IconType;
export { FilterOffFillIcon }
export { FilterOffFillIcon as FilterOffFillIcon_alias_1 }

/**
 * The react component for the `filter-off-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Filter Off Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/filter-off-line.svg)
 */
declare const FilterOffLineIcon: IconType;
export { FilterOffLineIcon }
export { FilterOffLineIcon as FilterOffLineIcon_alias_1 }

/**
 * The react component for the `finder-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Finder Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/finder-fill.svg)
 */
declare const FinderFillIcon: IconType;
export { FinderFillIcon }
export { FinderFillIcon as FinderFillIcon_alias_1 }

/**
 * The react component for the `finder-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Finder Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/finder-line.svg)
 */
declare const FinderLineIcon: IconType;
export { FinderLineIcon }
export { FinderLineIcon as FinderLineIcon_alias_1 }

/**
 * The react component for the `find-replace-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Find Replace Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/find-replace-fill.svg)
 */
declare const FindReplaceFillIcon: IconType;
export { FindReplaceFillIcon }
export { FindReplaceFillIcon as FindReplaceFillIcon_alias_1 }

/**
 * The react component for the `find-replace-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Find Replace Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/find-replace-line.svg)
 */
declare const FindReplaceLineIcon: IconType;
export { FindReplaceLineIcon }
export { FindReplaceLineIcon as FindReplaceLineIcon_alias_1 }

/**
 * The react component for the `fingerprint-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fingerprint 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/fingerprint-2-fill.svg)
 */
declare const Fingerprint2FillIcon: IconType;
export { Fingerprint2FillIcon }
export { Fingerprint2FillIcon as Fingerprint2FillIcon_alias_1 }

/**
 * The react component for the `fingerprint-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fingerprint 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/fingerprint-2-line.svg)
 */
declare const Fingerprint2LineIcon: IconType;
export { Fingerprint2LineIcon }
export { Fingerprint2LineIcon as Fingerprint2LineIcon_alias_1 }

/**
 * The react component for the `fingerprint-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fingerprint Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/fingerprint-fill.svg)
 */
declare const FingerprintFillIcon: IconType;
export { FingerprintFillIcon }
export { FingerprintFillIcon as FingerprintFillIcon_alias_1 }

/**
 * The react component for the `fingerprint-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fingerprint Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/fingerprint-line.svg)
 */
declare const FingerprintLineIcon: IconType;
export { FingerprintLineIcon }
export { FingerprintLineIcon as FingerprintLineIcon_alias_1 }

/**
 * The react component for the `fire-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fire Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/fire-fill.svg)
 */
declare const FireFillIcon: IconType;
export { FireFillIcon }
export { FireFillIcon as FireFillIcon_alias_1 }

/**
 * The react component for the `firefox-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Firefox Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/firefox-fill.svg)
 */
declare const FirefoxFillIcon: IconType;
export { FirefoxFillIcon }
export { FirefoxFillIcon as FirefoxFillIcon_alias_1 }

/**
 * The react component for the `firefox-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Firefox Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/firefox-line.svg)
 */
declare const FirefoxLineIcon: IconType;
export { FirefoxLineIcon }
export { FirefoxLineIcon as FirefoxLineIcon_alias_1 }

/**
 * The react component for the `fire-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fire Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/fire-line.svg)
 */
declare const FireLineIcon: IconType;
export { FireLineIcon }
export { FireLineIcon as FireLineIcon_alias_1 }

/**
 * The react component for the `first-aid-kit-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![First Aid Kit Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/first-aid-kit-fill.svg)
 */
declare const FirstAidKitFillIcon: IconType;
export { FirstAidKitFillIcon }
export { FirstAidKitFillIcon as FirstAidKitFillIcon_alias_1 }

/**
 * The react component for the `first-aid-kit-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![First Aid Kit Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/first-aid-kit-line.svg)
 */
declare const FirstAidKitLineIcon: IconType;
export { FirstAidKitLineIcon }
export { FirstAidKitLineIcon as FirstAidKitLineIcon_alias_1 }

/**
 * The react component for the `flag-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flag 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/flag-2-fill.svg)
 */
declare const Flag2FillIcon: IconType;
export { Flag2FillIcon }
export { Flag2FillIcon as Flag2FillIcon_alias_1 }

/**
 * The react component for the `flag-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flag 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/flag-2-line.svg)
 */
declare const Flag2LineIcon: IconType;
export { Flag2LineIcon }
export { Flag2LineIcon as Flag2LineIcon_alias_1 }

/**
 * The react component for the `flag-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flag Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/flag-fill.svg)
 */
declare const FlagFillIcon: IconType;
export { FlagFillIcon }
export { FlagFillIcon as FlagFillIcon_alias_1 }

/**
 * The react component for the `flag-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flag Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/flag-line.svg)
 */
declare const FlagLineIcon: IconType;
export { FlagLineIcon }
export { FlagLineIcon as FlagLineIcon_alias_1 }

/**
 * The react component for the `flashlight-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flashlight Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/flashlight-fill.svg)
 */
declare const FlashlightFillIcon: IconType;
export { FlashlightFillIcon }
export { FlashlightFillIcon as FlashlightFillIcon_alias_1 }

/**
 * The react component for the `flashlight-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flashlight Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/flashlight-line.svg)
 */
declare const FlashlightLineIcon: IconType;
export { FlashlightLineIcon }
export { FlashlightLineIcon as FlashlightLineIcon_alias_1 }

/**
 * The react component for the `flask-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flask Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/flask-fill.svg)
 */
declare const FlaskFillIcon: IconType;
export { FlaskFillIcon }
export { FlaskFillIcon as FlaskFillIcon_alias_1 }

/**
 * The react component for the `flask-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flask Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/flask-line.svg)
 */
declare const FlaskLineIcon: IconType;
export { FlaskLineIcon }
export { FlaskLineIcon as FlaskLineIcon_alias_1 }

/**
 * The react component for the `flight-land-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flight Land Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/flight-land-fill.svg)
 */
declare const FlightLandFillIcon: IconType;
export { FlightLandFillIcon }
export { FlightLandFillIcon as FlightLandFillIcon_alias_1 }

/**
 * The react component for the `flight-land-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flight Land Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/flight-land-line.svg)
 */
declare const FlightLandLineIcon: IconType;
export { FlightLandLineIcon }
export { FlightLandLineIcon as FlightLandLineIcon_alias_1 }

/**
 * The react component for the `flight-takeoff-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flight Takeoff Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/flight-takeoff-fill.svg)
 */
declare const FlightTakeoffFillIcon: IconType;
export { FlightTakeoffFillIcon }
export { FlightTakeoffFillIcon as FlightTakeoffFillIcon_alias_1 }

/**
 * The react component for the `flight-takeoff-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flight Takeoff Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/flight-takeoff-line.svg)
 */
declare const FlightTakeoffLineIcon: IconType;
export { FlightTakeoffLineIcon }
export { FlightTakeoffLineIcon as FlightTakeoffLineIcon_alias_1 }

declare const FloatingWrapper: FC<PropsWithChildren<FloatingWrapperProps>>;
export { FloatingWrapper }
export { FloatingWrapper as FloatingWrapper_alias_1 }

declare interface FloatingWrapperProps extends BaseFloatingPositioner {
    /**
     * When true the arrow will be displayed.
     *
     * @defaultValue false
     */
    displayArrow?: boolean;
    animatedClass?: string;
    containerClass?: string;
    floatingLabel?: string;
}

/**
 * The react component for the `flood-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flood Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/flood-fill.svg)
 */
declare const FloodFillIcon: IconType;
export { FloodFillIcon }
export { FloodFillIcon as FloodFillIcon_alias_1 }

/**
 * The react component for the `flood-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flood Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/flood-line.svg)
 */
declare const FloodLineIcon: IconType;
export { FloodLineIcon }
export { FloodLineIcon as FloodLineIcon_alias_1 }

/**
 * The react component for the `flow-chart.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flow Chart Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/flow-chart.svg)
 */
declare const FlowChartIcon: IconType;
export { FlowChartIcon }
export { FlowChartIcon as FlowChartIcon_alias_1 }
export { FlowChartIcon as FlowChartIcon_alias_2 }

/**
 * The react component for the `flutter-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flutter Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/flutter-fill.svg)
 */
declare const FlutterFillIcon: IconType;
export { FlutterFillIcon }
export { FlutterFillIcon as FlutterFillIcon_alias_1 }

/**
 * The react component for the `flutter-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Flutter Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/flutter-line.svg)
 */
declare const FlutterLineIcon: IconType;
export { FlutterLineIcon }
export { FlutterLineIcon as FlutterLineIcon_alias_1 }

/**
 * The react component for the `focus-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Focus 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/focus-2-fill.svg)
 */
declare const Focus2FillIcon: IconType;
export { Focus2FillIcon }
export { Focus2FillIcon as Focus2FillIcon_alias_1 }

/**
 * The react component for the `focus-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Focus 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/focus-2-line.svg)
 */
declare const Focus2LineIcon: IconType;
export { Focus2LineIcon }
export { Focus2LineIcon as Focus2LineIcon_alias_1 }

/**
 * The react component for the `focus-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Focus 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/focus-3-fill.svg)
 */
declare const Focus3FillIcon: IconType;
export { Focus3FillIcon }
export { Focus3FillIcon as Focus3FillIcon_alias_1 }

/**
 * The react component for the `focus-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Focus 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/focus-3-line.svg)
 */
declare const Focus3LineIcon: IconType;
export { Focus3LineIcon }
export { Focus3LineIcon as Focus3LineIcon_alias_1 }

/**
 * The react component for the `focus-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Focus Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/focus-fill.svg)
 */
declare const FocusFillIcon: IconType;
export { FocusFillIcon }
export { FocusFillIcon as FocusFillIcon_alias_1 }

/**
 * The react component for the `focus-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Focus Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/focus-line.svg)
 */
declare const FocusLineIcon: IconType;
export { FocusLineIcon }
export { FocusLineIcon as FocusLineIcon_alias_1 }

/**
 * The react component for the `foggy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Foggy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/foggy-fill.svg)
 */
declare const FoggyFillIcon: IconType;
export { FoggyFillIcon }
export { FoggyFillIcon as FoggyFillIcon_alias_1 }

/**
 * The react component for the `foggy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Foggy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/foggy-line.svg)
 */
declare const FoggyLineIcon: IconType;
export { FoggyLineIcon }
export { FoggyLineIcon as FoggyLineIcon_alias_1 }

/**
 * The react component for the `folder-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-2-fill.svg)
 */
declare const Folder2FillIcon: IconType;
export { Folder2FillIcon }
export { Folder2FillIcon as Folder2FillIcon_alias_1 }

/**
 * The react component for the `folder-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-2-line.svg)
 */
declare const Folder2LineIcon: IconType;
export { Folder2LineIcon }
export { Folder2LineIcon as Folder2LineIcon_alias_1 }

/**
 * The react component for the `folder-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-3-fill.svg)
 */
declare const Folder3FillIcon: IconType;
export { Folder3FillIcon }
export { Folder3FillIcon as Folder3FillIcon_alias_1 }

/**
 * The react component for the `folder-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-3-line.svg)
 */
declare const Folder3LineIcon: IconType;
export { Folder3LineIcon }
export { Folder3LineIcon as Folder3LineIcon_alias_1 }

/**
 * The react component for the `folder-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-4-fill.svg)
 */
declare const Folder4FillIcon: IconType;
export { Folder4FillIcon }
export { Folder4FillIcon as Folder4FillIcon_alias_1 }

/**
 * The react component for the `folder-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-4-line.svg)
 */
declare const Folder4LineIcon: IconType;
export { Folder4LineIcon }
export { Folder4LineIcon as Folder4LineIcon_alias_1 }

/**
 * The react component for the `folder-5-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder 5 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-5-fill.svg)
 */
declare const Folder5FillIcon: IconType;
export { Folder5FillIcon }
export { Folder5FillIcon as Folder5FillIcon_alias_1 }

/**
 * The react component for the `folder-5-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder 5 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-5-line.svg)
 */
declare const Folder5LineIcon: IconType;
export { Folder5LineIcon }
export { Folder5LineIcon as Folder5LineIcon_alias_1 }

/**
 * The react component for the `folder-add-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Add Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-add-fill.svg)
 */
declare const FolderAddFillIcon: IconType;
export { FolderAddFillIcon }
export { FolderAddFillIcon as FolderAddFillIcon_alias_1 }

/**
 * The react component for the `folder-add-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Add Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-add-line.svg)
 */
declare const FolderAddLineIcon: IconType;
export { FolderAddLineIcon }
export { FolderAddLineIcon as FolderAddLineIcon_alias_1 }

/**
 * The react component for the `folder-chart-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Chart 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-chart-2-fill.svg)
 */
declare const FolderChart2FillIcon: IconType;
export { FolderChart2FillIcon }
export { FolderChart2FillIcon as FolderChart2FillIcon_alias_1 }

/**
 * The react component for the `folder-chart-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Chart 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-chart-2-line.svg)
 */
declare const FolderChart2LineIcon: IconType;
export { FolderChart2LineIcon }
export { FolderChart2LineIcon as FolderChart2LineIcon_alias_1 }

/**
 * The react component for the `folder-chart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Chart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-chart-fill.svg)
 */
declare const FolderChartFillIcon: IconType;
export { FolderChartFillIcon }
export { FolderChartFillIcon as FolderChartFillIcon_alias_1 }

/**
 * The react component for the `folder-chart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Chart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-chart-line.svg)
 */
declare const FolderChartLineIcon: IconType;
export { FolderChartLineIcon }
export { FolderChartLineIcon as FolderChartLineIcon_alias_1 }

/**
 * The react component for the `folder-download-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Download Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-download-fill.svg)
 */
declare const FolderDownloadFillIcon: IconType;
export { FolderDownloadFillIcon }
export { FolderDownloadFillIcon as FolderDownloadFillIcon_alias_1 }

/**
 * The react component for the `folder-download-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Download Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-download-line.svg)
 */
declare const FolderDownloadLineIcon: IconType;
export { FolderDownloadLineIcon }
export { FolderDownloadLineIcon as FolderDownloadLineIcon_alias_1 }

/**
 * The react component for the `folder-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-fill.svg)
 */
declare const FolderFillIcon: IconType;
export { FolderFillIcon }
export { FolderFillIcon as FolderFillIcon_alias_1 }

/**
 * The react component for the `folder-forbid-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Forbid Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-forbid-fill.svg)
 */
declare const FolderForbidFillIcon: IconType;
export { FolderForbidFillIcon }
export { FolderForbidFillIcon as FolderForbidFillIcon_alias_1 }

/**
 * The react component for the `folder-forbid-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Forbid Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-forbid-line.svg)
 */
declare const FolderForbidLineIcon: IconType;
export { FolderForbidLineIcon }
export { FolderForbidLineIcon as FolderForbidLineIcon_alias_1 }

/**
 * The react component for the `folder-history-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder History Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-history-fill.svg)
 */
declare const FolderHistoryFillIcon: IconType;
export { FolderHistoryFillIcon }
export { FolderHistoryFillIcon as FolderHistoryFillIcon_alias_1 }

/**
 * The react component for the `folder-history-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder History Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-history-line.svg)
 */
declare const FolderHistoryLineIcon: IconType;
export { FolderHistoryLineIcon }
export { FolderHistoryLineIcon as FolderHistoryLineIcon_alias_1 }

/**
 * The react component for the `folder-info-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Info Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-info-fill.svg)
 */
declare const FolderInfoFillIcon: IconType;
export { FolderInfoFillIcon }
export { FolderInfoFillIcon as FolderInfoFillIcon_alias_1 }

/**
 * The react component for the `folder-info-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Info Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-info-line.svg)
 */
declare const FolderInfoLineIcon: IconType;
export { FolderInfoLineIcon }
export { FolderInfoLineIcon as FolderInfoLineIcon_alias_1 }

/**
 * The react component for the `folder-keyhole-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Keyhole Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-keyhole-fill.svg)
 */
declare const FolderKeyholeFillIcon: IconType;
export { FolderKeyholeFillIcon }
export { FolderKeyholeFillIcon as FolderKeyholeFillIcon_alias_1 }

/**
 * The react component for the `folder-keyhole-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Keyhole Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-keyhole-line.svg)
 */
declare const FolderKeyholeLineIcon: IconType;
export { FolderKeyholeLineIcon }
export { FolderKeyholeLineIcon as FolderKeyholeLineIcon_alias_1 }

/**
 * The react component for the `folder-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-line.svg)
 */
declare const FolderLineIcon: IconType;
export { FolderLineIcon }
export { FolderLineIcon as FolderLineIcon_alias_1 }

/**
 * The react component for the `folder-lock-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Lock Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-lock-fill.svg)
 */
declare const FolderLockFillIcon: IconType;
export { FolderLockFillIcon }
export { FolderLockFillIcon as FolderLockFillIcon_alias_1 }

/**
 * The react component for the `folder-lock-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Lock Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-lock-line.svg)
 */
declare const FolderLockLineIcon: IconType;
export { FolderLockLineIcon }
export { FolderLockLineIcon as FolderLockLineIcon_alias_1 }

/**
 * The react component for the `folder-music-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Music Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-music-fill.svg)
 */
declare const FolderMusicFillIcon: IconType;
export { FolderMusicFillIcon }
export { FolderMusicFillIcon as FolderMusicFillIcon_alias_1 }

/**
 * The react component for the `folder-music-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Music Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-music-line.svg)
 */
declare const FolderMusicLineIcon: IconType;
export { FolderMusicLineIcon }
export { FolderMusicLineIcon as FolderMusicLineIcon_alias_1 }

/**
 * The react component for the `folder-open-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Open Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-open-fill.svg)
 */
declare const FolderOpenFillIcon: IconType;
export { FolderOpenFillIcon }
export { FolderOpenFillIcon as FolderOpenFillIcon_alias_1 }

/**
 * The react component for the `folder-open-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Open Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-open-line.svg)
 */
declare const FolderOpenLineIcon: IconType;
export { FolderOpenLineIcon }
export { FolderOpenLineIcon as FolderOpenLineIcon_alias_1 }

/**
 * The react component for the `folder-received-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Received Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-received-fill.svg)
 */
declare const FolderReceivedFillIcon: IconType;
export { FolderReceivedFillIcon }
export { FolderReceivedFillIcon as FolderReceivedFillIcon_alias_1 }

/**
 * The react component for the `folder-received-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Received Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-received-line.svg)
 */
declare const FolderReceivedLineIcon: IconType;
export { FolderReceivedLineIcon }
export { FolderReceivedLineIcon as FolderReceivedLineIcon_alias_1 }

/**
 * The react component for the `folder-reduce-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Reduce Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-reduce-fill.svg)
 */
declare const FolderReduceFillIcon: IconType;
export { FolderReduceFillIcon }
export { FolderReduceFillIcon as FolderReduceFillIcon_alias_1 }

/**
 * The react component for the `folder-reduce-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Reduce Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-reduce-line.svg)
 */
declare const FolderReduceLineIcon: IconType;
export { FolderReduceLineIcon }
export { FolderReduceLineIcon as FolderReduceLineIcon_alias_1 }

/**
 * The react component for the `folder-settings-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Settings Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-settings-fill.svg)
 */
declare const FolderSettingsFillIcon: IconType;
export { FolderSettingsFillIcon }
export { FolderSettingsFillIcon as FolderSettingsFillIcon_alias_1 }

/**
 * The react component for the `folder-settings-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Settings Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-settings-line.svg)
 */
declare const FolderSettingsLineIcon: IconType;
export { FolderSettingsLineIcon }
export { FolderSettingsLineIcon as FolderSettingsLineIcon_alias_1 }

/**
 * The react component for the `folders-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folders Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folders-fill.svg)
 */
declare const FoldersFillIcon: IconType;
export { FoldersFillIcon }
export { FoldersFillIcon as FoldersFillIcon_alias_1 }

/**
 * The react component for the `folder-shared-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Shared Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-shared-fill.svg)
 */
declare const FolderSharedFillIcon: IconType;
export { FolderSharedFillIcon }
export { FolderSharedFillIcon as FolderSharedFillIcon_alias_1 }

/**
 * The react component for the `folder-shared-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Shared Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-shared-line.svg)
 */
declare const FolderSharedLineIcon: IconType;
export { FolderSharedLineIcon }
export { FolderSharedLineIcon as FolderSharedLineIcon_alias_1 }

/**
 * The react component for the `folder-shield-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Shield 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-shield-2-fill.svg)
 */
declare const FolderShield2FillIcon: IconType;
export { FolderShield2FillIcon }
export { FolderShield2FillIcon as FolderShield2FillIcon_alias_1 }

/**
 * The react component for the `folder-shield-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Shield 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-shield-2-line.svg)
 */
declare const FolderShield2LineIcon: IconType;
export { FolderShield2LineIcon }
export { FolderShield2LineIcon as FolderShield2LineIcon_alias_1 }

/**
 * The react component for the `folder-shield-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Shield Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-shield-fill.svg)
 */
declare const FolderShieldFillIcon: IconType;
export { FolderShieldFillIcon }
export { FolderShieldFillIcon as FolderShieldFillIcon_alias_1 }

/**
 * The react component for the `folder-shield-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Shield Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-shield-line.svg)
 */
declare const FolderShieldLineIcon: IconType;
export { FolderShieldLineIcon }
export { FolderShieldLineIcon as FolderShieldLineIcon_alias_1 }

/**
 * The react component for the `folders-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folders Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folders-line.svg)
 */
declare const FoldersLineIcon: IconType;
export { FoldersLineIcon }
export { FoldersLineIcon as FoldersLineIcon_alias_1 }

/**
 * The react component for the `folder-transfer-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Transfer Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-transfer-fill.svg)
 */
declare const FolderTransferFillIcon: IconType;
export { FolderTransferFillIcon }
export { FolderTransferFillIcon as FolderTransferFillIcon_alias_1 }

/**
 * The react component for the `folder-transfer-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Transfer Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-transfer-line.svg)
 */
declare const FolderTransferLineIcon: IconType;
export { FolderTransferLineIcon }
export { FolderTransferLineIcon as FolderTransferLineIcon_alias_1 }

/**
 * The react component for the `folder-unknow-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Unknow Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-unknow-fill.svg)
 */
declare const FolderUnknowFillIcon: IconType;
export { FolderUnknowFillIcon }
export { FolderUnknowFillIcon as FolderUnknowFillIcon_alias_1 }

/**
 * The react component for the `folder-unknow-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Unknow Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-unknow-line.svg)
 */
declare const FolderUnknowLineIcon: IconType;
export { FolderUnknowLineIcon }
export { FolderUnknowLineIcon as FolderUnknowLineIcon_alias_1 }

/**
 * The react component for the `folder-upload-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Upload Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-upload-fill.svg)
 */
declare const FolderUploadFillIcon: IconType;
export { FolderUploadFillIcon }
export { FolderUploadFillIcon as FolderUploadFillIcon_alias_1 }

/**
 * The react component for the `folder-upload-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Upload Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-upload-line.svg)
 */
declare const FolderUploadLineIcon: IconType;
export { FolderUploadLineIcon }
export { FolderUploadLineIcon as FolderUploadLineIcon_alias_1 }

/**
 * The react component for the `folder-user-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder User Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-user-fill.svg)
 */
declare const FolderUserFillIcon: IconType;
export { FolderUserFillIcon }
export { FolderUserFillIcon as FolderUserFillIcon_alias_1 }

/**
 * The react component for the `folder-user-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder User Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-user-line.svg)
 */
declare const FolderUserLineIcon: IconType;
export { FolderUserLineIcon }
export { FolderUserLineIcon as FolderUserLineIcon_alias_1 }

/**
 * The react component for the `folder-warning-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Warning Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-warning-fill.svg)
 */
declare const FolderWarningFillIcon: IconType;
export { FolderWarningFillIcon }
export { FolderWarningFillIcon as FolderWarningFillIcon_alias_1 }

/**
 * The react component for the `folder-warning-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Warning Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-warning-line.svg)
 */
declare const FolderWarningLineIcon: IconType;
export { FolderWarningLineIcon }
export { FolderWarningLineIcon as FolderWarningLineIcon_alias_1 }

/**
 * The react component for the `folder-zip-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Zip Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-zip-fill.svg)
 */
declare const FolderZipFillIcon: IconType;
export { FolderZipFillIcon }
export { FolderZipFillIcon as FolderZipFillIcon_alias_1 }

/**
 * The react component for the `folder-zip-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Folder Zip Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/folder-zip-line.svg)
 */
declare const FolderZipLineIcon: IconType;
export { FolderZipLineIcon }
export { FolderZipLineIcon as FolderZipLineIcon_alias_1 }

/**
 * The react component for the `font-color.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Font Color Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/font-color.svg)
 */
declare const FontColorIcon: IconType;
export { FontColorIcon }
export { FontColorIcon as FontColorIcon_alias_1 }
export { FontColorIcon as FontColorIcon_alias_2 }

/**
 * The react component for the `font-size-2.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Font Size 2 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/font-size-2.svg)
 */
declare const FontSize2Icon: IconType;
export { FontSize2Icon }
export { FontSize2Icon as FontSize2Icon_alias_1 }
export { FontSize2Icon as FontSize2Icon_alias_2 }

/**
 * The react component for the `font-size.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Font Size Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/font-size.svg)
 */
declare const FontSizeIcon: IconType;
export { FontSizeIcon }
export { FontSizeIcon as FontSizeIcon_alias_1 }
export { FontSizeIcon as FontSizeIcon_alias_2 }

/**
 * The react component for the `football-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Football Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/football-fill.svg)
 */
declare const FootballFillIcon: IconType;
export { FootballFillIcon }
export { FootballFillIcon as FootballFillIcon_alias_1 }

/**
 * The react component for the `football-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Football Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/football-line.svg)
 */
declare const FootballLineIcon: IconType;
export { FootballLineIcon }
export { FootballLineIcon as FootballLineIcon_alias_1 }

/**
 * The react component for the `footprint-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Footprint Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/footprint-fill.svg)
 */
declare const FootprintFillIcon: IconType;
export { FootprintFillIcon }
export { FootprintFillIcon as FootprintFillIcon_alias_1 }

/**
 * The react component for the `footprint-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Footprint Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/footprint-line.svg)
 */
declare const FootprintLineIcon: IconType;
export { FootprintLineIcon }
export { FootprintLineIcon as FootprintLineIcon_alias_1 }

/**
 * The react component for the `forbid-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Forbid 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/forbid-2-fill.svg)
 */
declare const Forbid2FillIcon: IconType;
export { Forbid2FillIcon }
export { Forbid2FillIcon as Forbid2FillIcon_alias_1 }

/**
 * The react component for the `forbid-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Forbid 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/forbid-2-line.svg)
 */
declare const Forbid2LineIcon: IconType;
export { Forbid2LineIcon }
export { Forbid2LineIcon as Forbid2LineIcon_alias_1 }

/**
 * The react component for the `forbid-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Forbid Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/forbid-fill.svg)
 */
declare const ForbidFillIcon: IconType;
export { ForbidFillIcon }
export { ForbidFillIcon as ForbidFillIcon_alias_1 }

/**
 * The react component for the `forbid-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Forbid Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/forbid-line.svg)
 */
declare const ForbidLineIcon: IconType;
export { ForbidLineIcon }
export { ForbidLineIcon as ForbidLineIcon_alias_1 }

/**
 * The react component for the `format-clear.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Format Clear Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/format-clear.svg)
 */
declare const FormatClearIcon: IconType;
export { FormatClearIcon }
export { FormatClearIcon as FormatClearIcon_alias_1 }
export { FormatClearIcon as FormatClearIcon_alias_2 }

/**
 * The react component for the `four-k-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Four K Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/4k-fill.svg)
 */
declare const FourKFillIcon: IconType;
export { FourKFillIcon }
export { FourKFillIcon as FourKFillIcon_alias_1 }

/**
 * The react component for the `four-k-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Four K Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/4k-line.svg)
 */
declare const FourKLineIcon: IconType;
export { FourKLineIcon }
export { FourKLineIcon as FourKLineIcon_alias_1 }

/**
 * The react component for the `fridge-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fridge Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/fridge-fill.svg)
 */
declare const FridgeFillIcon: IconType;
export { FridgeFillIcon }
export { FridgeFillIcon as FridgeFillIcon_alias_1 }

/**
 * The react component for the `fridge-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fridge Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/fridge-line.svg)
 */
declare const FridgeLineIcon: IconType;
export { FridgeLineIcon }
export { FridgeLineIcon as FridgeLineIcon_alias_1 }

/**
 * The react component for the `fullscreen-exit-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fullscreen Exit Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/fullscreen-exit-fill.svg)
 */
declare const FullscreenExitFillIcon: IconType;
export { FullscreenExitFillIcon }
export { FullscreenExitFillIcon as FullscreenExitFillIcon_alias_1 }

/**
 * The react component for the `fullscreen-exit-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fullscreen Exit Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/fullscreen-exit-line.svg)
 */
declare const FullscreenExitLineIcon: IconType;
export { FullscreenExitLineIcon }
export { FullscreenExitLineIcon as FullscreenExitLineIcon_alias_1 }
export { FullscreenExitLineIcon as FullscreenExitLineIcon_alias_2 }

/**
 * The react component for the `fullscreen-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fullscreen Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/fullscreen-fill.svg)
 */
declare const FullscreenFillIcon: IconType;
export { FullscreenFillIcon }
export { FullscreenFillIcon as FullscreenFillIcon_alias_1 }

/**
 * The react component for the `fullscreen-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Fullscreen Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/fullscreen-line.svg)
 */
declare const FullscreenLineIcon: IconType;
export { FullscreenLineIcon }
export { FullscreenLineIcon as FullscreenLineIcon_alias_1 }
export { FullscreenLineIcon as FullscreenLineIcon_alias_2 }

/**
 * The react component for the `function-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Function Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/function-fill.svg)
 */
declare const FunctionFillIcon: IconType;
export { FunctionFillIcon }
export { FunctionFillIcon as FunctionFillIcon_alias_1 }

/**
 * The react component for the `function-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Function Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/function-line.svg)
 */
declare const FunctionLineIcon: IconType;
export { FunctionLineIcon }
export { FunctionLineIcon as FunctionLineIcon_alias_1 }

/**
 * The react component for the `functions.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Functions Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/functions.svg)
 */
declare const FunctionsIcon: IconType;
export { FunctionsIcon }
export { FunctionsIcon as FunctionsIcon_alias_1 }
export { FunctionsIcon as FunctionsIcon_alias_2 }

/**
 * The react component for the `funds-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Funds Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/funds-box-fill.svg)
 */
declare const FundsBoxFillIcon: IconType;
export { FundsBoxFillIcon }
export { FundsBoxFillIcon as FundsBoxFillIcon_alias_1 }

/**
 * The react component for the `funds-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Funds Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/funds-box-line.svg)
 */
declare const FundsBoxLineIcon: IconType;
export { FundsBoxLineIcon }
export { FundsBoxLineIcon as FundsBoxLineIcon_alias_1 }

/**
 * The react component for the `funds-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Funds Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/funds-fill.svg)
 */
declare const FundsFillIcon: IconType;
export { FundsFillIcon }
export { FundsFillIcon as FundsFillIcon_alias_1 }

/**
 * The react component for the `funds-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Funds Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/funds-line.svg)
 */
declare const FundsLineIcon: IconType;
export { FundsLineIcon }
export { FundsLineIcon as FundsLineIcon_alias_1 }

/**
 * The react component for the `gallery-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gallery Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/gallery-fill.svg)
 */
declare const GalleryFillIcon: IconType;
export { GalleryFillIcon }
export { GalleryFillIcon as GalleryFillIcon_alias_1 }

/**
 * The react component for the `gallery-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gallery Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/gallery-line.svg)
 */
declare const GalleryLineIcon: IconType;
export { GalleryLineIcon }
export { GalleryLineIcon as GalleryLineIcon_alias_1 }

/**
 * The react component for the `gallery-upload-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gallery Upload Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/gallery-upload-fill.svg)
 */
declare const GalleryUploadFillIcon: IconType;
export { GalleryUploadFillIcon }
export { GalleryUploadFillIcon as GalleryUploadFillIcon_alias_1 }

/**
 * The react component for the `gallery-upload-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gallery Upload Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/gallery-upload-line.svg)
 */
declare const GalleryUploadLineIcon: IconType;
export { GalleryUploadLineIcon }
export { GalleryUploadLineIcon as GalleryUploadLineIcon_alias_1 }
export { GalleryUploadLineIcon as GalleryUploadLineIcon_alias_2 }

/**
 * The react component for the `game-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Game Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/game-fill.svg)
 */
declare const GameFillIcon: IconType;
export { GameFillIcon }
export { GameFillIcon as GameFillIcon_alias_1 }

/**
 * The react component for the `game-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Game Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/game-line.svg)
 */
declare const GameLineIcon: IconType;
export { GameLineIcon }
export { GameLineIcon as GameLineIcon_alias_1 }

/**
 * The react component for the `gamepad-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gamepad Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/gamepad-fill.svg)
 */
declare const GamepadFillIcon: IconType;
export { GamepadFillIcon }
export { GamepadFillIcon as GamepadFillIcon_alias_1 }

/**
 * The react component for the `gamepad-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gamepad Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/gamepad-line.svg)
 */
declare const GamepadLineIcon: IconType;
export { GamepadLineIcon }
export { GamepadLineIcon as GamepadLineIcon_alias_1 }

/**
 * The react component for the `gas-station-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gas Station Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/gas-station-fill.svg)
 */
declare const GasStationFillIcon: IconType;
export { GasStationFillIcon }
export { GasStationFillIcon as GasStationFillIcon_alias_1 }

/**
 * The react component for the `gas-station-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gas Station Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/gas-station-line.svg)
 */
declare const GasStationLineIcon: IconType;
export { GasStationLineIcon }
export { GasStationLineIcon as GasStationLineIcon_alias_1 }

/**
 * The react component for the `gatsby-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gatsby Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/gatsby-fill.svg)
 */
declare const GatsbyFillIcon: IconType;
export { GatsbyFillIcon }
export { GatsbyFillIcon as GatsbyFillIcon_alias_1 }

/**
 * The react component for the `gatsby-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gatsby Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/gatsby-line.svg)
 */
declare const GatsbyLineIcon: IconType;
export { GatsbyLineIcon }
export { GatsbyLineIcon as GatsbyLineIcon_alias_1 }

/**
 * The react component for the `genderless-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Genderless Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/genderless-fill.svg)
 */
declare const GenderlessFillIcon: IconType;
export { GenderlessFillIcon }
export { GenderlessFillIcon as GenderlessFillIcon_alias_1 }

/**
 * The react component for the `genderless-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Genderless Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/genderless-line.svg)
 */
declare const GenderlessLineIcon: IconType;
export { GenderlessLineIcon }
export { GenderlessLineIcon as GenderlessLineIcon_alias_1 }

/**
 * A higher order component which creates the Icon component.
 */
declare function GenIcon(tree: IconTree[], viewBox?: string): IconType;
export { GenIcon }
export { GenIcon as GenIcon_alias_1 }
export { GenIcon as GenIcon_alias_2 }

/**
 * The react component for the `ghost-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ghost 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/ghost-2-fill.svg)
 */
declare const Ghost2FillIcon: IconType;
export { Ghost2FillIcon }
export { Ghost2FillIcon as Ghost2FillIcon_alias_1 }

/**
 * The react component for the `ghost-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ghost 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/ghost-2-line.svg)
 */
declare const Ghost2LineIcon: IconType;
export { Ghost2LineIcon }
export { Ghost2LineIcon as Ghost2LineIcon_alias_1 }

/**
 * The react component for the `ghost-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ghost Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/ghost-fill.svg)
 */
declare const GhostFillIcon: IconType;
export { GhostFillIcon }
export { GhostFillIcon as GhostFillIcon_alias_1 }

/**
 * The react component for the `ghost-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ghost Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/ghost-line.svg)
 */
declare const GhostLineIcon: IconType;
export { GhostLineIcon }
export { GhostLineIcon as GhostLineIcon_alias_1 }

/**
 * The react component for the `ghost-smile-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ghost Smile Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/ghost-smile-fill.svg)
 */
declare const GhostSmileFillIcon: IconType;
export { GhostSmileFillIcon }
export { GhostSmileFillIcon as GhostSmileFillIcon_alias_1 }

/**
 * The react component for the `ghost-smile-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ghost Smile Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/ghost-smile-line.svg)
 */
declare const GhostSmileLineIcon: IconType;
export { GhostSmileLineIcon }
export { GhostSmileLineIcon as GhostSmileLineIcon_alias_1 }

/**
 * The react component for the `gift-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gift 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/gift-2-fill.svg)
 */
declare const Gift2FillIcon: IconType;
export { Gift2FillIcon }
export { Gift2FillIcon as Gift2FillIcon_alias_1 }

/**
 * The react component for the `gift-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gift 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/gift-2-line.svg)
 */
declare const Gift2LineIcon: IconType;
export { Gift2LineIcon }
export { Gift2LineIcon as Gift2LineIcon_alias_1 }

/**
 * The react component for the `gift-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gift Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/gift-fill.svg)
 */
declare const GiftFillIcon: IconType;
export { GiftFillIcon }
export { GiftFillIcon as GiftFillIcon_alias_1 }

/**
 * The react component for the `gift-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gift Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/gift-line.svg)
 */
declare const GiftLineIcon: IconType;
export { GiftLineIcon }
export { GiftLineIcon as GiftLineIcon_alias_1 }

/**
 * The react component for the `git-branch-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Branch Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-branch-fill.svg)
 */
declare const GitBranchFillIcon: IconType;
export { GitBranchFillIcon }
export { GitBranchFillIcon as GitBranchFillIcon_alias_1 }

/**
 * The react component for the `git-branch-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Branch Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-branch-line.svg)
 */
declare const GitBranchLineIcon: IconType;
export { GitBranchLineIcon }
export { GitBranchLineIcon as GitBranchLineIcon_alias_1 }

/**
 * The react component for the `git-commit-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Commit Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-commit-fill.svg)
 */
declare const GitCommitFillIcon: IconType;
export { GitCommitFillIcon }
export { GitCommitFillIcon as GitCommitFillIcon_alias_1 }

/**
 * The react component for the `git-commit-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Commit Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-commit-line.svg)
 */
declare const GitCommitLineIcon: IconType;
export { GitCommitLineIcon }
export { GitCommitLineIcon as GitCommitLineIcon_alias_1 }

/**
 * The react component for the `github-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Github Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/github-fill.svg)
 */
declare const GithubFillIcon: IconType;
export { GithubFillIcon }
export { GithubFillIcon as GithubFillIcon_alias_1 }

/**
 * The react component for the `github-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Github Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/github-line.svg)
 */
declare const GithubLineIcon: IconType;
export { GithubLineIcon }
export { GithubLineIcon as GithubLineIcon_alias_1 }

/**
 * The react component for the `gitlab-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gitlab Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/gitlab-fill.svg)
 */
declare const GitlabFillIcon: IconType;
export { GitlabFillIcon }
export { GitlabFillIcon as GitlabFillIcon_alias_1 }

/**
 * The react component for the `gitlab-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gitlab Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/gitlab-line.svg)
 */
declare const GitlabLineIcon: IconType;
export { GitlabLineIcon }
export { GitlabLineIcon as GitlabLineIcon_alias_1 }

/**
 * The react component for the `git-merge-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Merge Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-merge-fill.svg)
 */
declare const GitMergeFillIcon: IconType;
export { GitMergeFillIcon }
export { GitMergeFillIcon as GitMergeFillIcon_alias_1 }

/**
 * The react component for the `git-merge-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Merge Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-merge-line.svg)
 */
declare const GitMergeLineIcon: IconType;
export { GitMergeLineIcon }
export { GitMergeLineIcon as GitMergeLineIcon_alias_1 }

/**
 * The react component for the `git-pull-request-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Pull Request Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-pull-request-fill.svg)
 */
declare const GitPullRequestFillIcon: IconType;
export { GitPullRequestFillIcon }
export { GitPullRequestFillIcon as GitPullRequestFillIcon_alias_1 }

/**
 * The react component for the `git-pull-request-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Pull Request Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-pull-request-line.svg)
 */
declare const GitPullRequestLineIcon: IconType;
export { GitPullRequestLineIcon }
export { GitPullRequestLineIcon as GitPullRequestLineIcon_alias_1 }

/**
 * The react component for the `git-repository-commits-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Repository Commits Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-repository-commits-fill.svg)
 */
declare const GitRepositoryCommitsFillIcon: IconType;
export { GitRepositoryCommitsFillIcon }
export { GitRepositoryCommitsFillIcon as GitRepositoryCommitsFillIcon_alias_1 }

/**
 * The react component for the `git-repository-commits-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Repository Commits Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-repository-commits-line.svg)
 */
declare const GitRepositoryCommitsLineIcon: IconType;
export { GitRepositoryCommitsLineIcon }
export { GitRepositoryCommitsLineIcon as GitRepositoryCommitsLineIcon_alias_1 }

/**
 * The react component for the `git-repository-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Repository Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-repository-fill.svg)
 */
declare const GitRepositoryFillIcon: IconType;
export { GitRepositoryFillIcon }
export { GitRepositoryFillIcon as GitRepositoryFillIcon_alias_1 }

/**
 * The react component for the `git-repository-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Repository Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-repository-line.svg)
 */
declare const GitRepositoryLineIcon: IconType;
export { GitRepositoryLineIcon }
export { GitRepositoryLineIcon as GitRepositoryLineIcon_alias_1 }

/**
 * The react component for the `git-repository-private-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Repository Private Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-repository-private-fill.svg)
 */
declare const GitRepositoryPrivateFillIcon: IconType;
export { GitRepositoryPrivateFillIcon }
export { GitRepositoryPrivateFillIcon as GitRepositoryPrivateFillIcon_alias_1 }

/**
 * The react component for the `git-repository-private-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Git Repository Private Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/git-repository-private-line.svg)
 */
declare const GitRepositoryPrivateLineIcon: IconType;
export { GitRepositoryPrivateLineIcon }
export { GitRepositoryPrivateLineIcon as GitRepositoryPrivateLineIcon_alias_1 }

/**
 * The react component for the `global-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Global Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/global-fill.svg)
 */
declare const GlobalFillIcon: IconType;
export { GlobalFillIcon }
export { GlobalFillIcon as GlobalFillIcon_alias_1 }

/**
 * The react component for the `global-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Global Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/global-line.svg)
 */
declare const GlobalLineIcon: IconType;
export { GlobalLineIcon }
export { GlobalLineIcon as GlobalLineIcon_alias_1 }

/**
 * The react component for the `globe-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Globe Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/globe-fill.svg)
 */
declare const GlobeFillIcon: IconType;
export { GlobeFillIcon }
export { GlobeFillIcon as GlobeFillIcon_alias_1 }

/**
 * The react component for the `globe-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Globe Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/globe-line.svg)
 */
declare const GlobeLineIcon: IconType;
export { GlobeLineIcon }
export { GlobeLineIcon as GlobeLineIcon_alias_1 }

/**
 * The react component for the `goblet-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Goblet Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/goblet-fill.svg)
 */
declare const GobletFillIcon: IconType;
export { GobletFillIcon }
export { GobletFillIcon as GobletFillIcon_alias_1 }

/**
 * The react component for the `goblet-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Goblet Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/goblet-line.svg)
 */
declare const GobletLineIcon: IconType;
export { GobletLineIcon }
export { GobletLineIcon as GobletLineIcon_alias_1 }

/**
 * The react component for the `google-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Google Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/google-fill.svg)
 */
declare const GoogleFillIcon: IconType;
export { GoogleFillIcon }
export { GoogleFillIcon as GoogleFillIcon_alias_1 }

/**
 * The react component for the `google-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Google Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/google-line.svg)
 */
declare const GoogleLineIcon: IconType;
export { GoogleLineIcon }
export { GoogleLineIcon as GoogleLineIcon_alias_1 }

/**
 * The react component for the `google-play-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Google Play Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/google-play-fill.svg)
 */
declare const GooglePlayFillIcon: IconType;
export { GooglePlayFillIcon }
export { GooglePlayFillIcon as GooglePlayFillIcon_alias_1 }

/**
 * The react component for the `google-play-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Google Play Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/google-play-line.svg)
 */
declare const GooglePlayLineIcon: IconType;
export { GooglePlayLineIcon }
export { GooglePlayLineIcon as GooglePlayLineIcon_alias_1 }

/**
 * The react component for the `government-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Government Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/government-fill.svg)
 */
declare const GovernmentFillIcon: IconType;
export { GovernmentFillIcon }
export { GovernmentFillIcon as GovernmentFillIcon_alias_1 }

/**
 * The react component for the `government-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Government Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/government-line.svg)
 */
declare const GovernmentLineIcon: IconType;
export { GovernmentLineIcon }
export { GovernmentLineIcon as GovernmentLineIcon_alias_1 }

/**
 * The react component for the `gps-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gps Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/gps-fill.svg)
 */
declare const GpsFillIcon: IconType;
export { GpsFillIcon }
export { GpsFillIcon as GpsFillIcon_alias_1 }

/**
 * The react component for the `gps-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gps Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/gps-line.svg)
 */
declare const GpsLineIcon: IconType;
export { GpsLineIcon }
export { GpsLineIcon as GpsLineIcon_alias_1 }

/**
 * The react component for the `gradienter-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gradienter Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/gradienter-fill.svg)
 */
declare const GradienterFillIcon: IconType;
export { GradienterFillIcon }
export { GradienterFillIcon as GradienterFillIcon_alias_1 }

/**
 * The react component for the `gradienter-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Gradienter Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/gradienter-line.svg)
 */
declare const GradienterLineIcon: IconType;
export { GradienterLineIcon }
export { GradienterLineIcon as GradienterLineIcon_alias_1 }

/**
 * The react component for the `grid-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Grid Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/grid-fill.svg)
 */
declare const GridFillIcon: IconType;
export { GridFillIcon }
export { GridFillIcon as GridFillIcon_alias_1 }

/**
 * The react component for the `grid-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Grid Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/grid-line.svg)
 */
declare const GridLineIcon: IconType;
export { GridLineIcon }
export { GridLineIcon as GridLineIcon_alias_1 }

/**
 * The react component for the `group-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Group 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/group-2-fill.svg)
 */
declare const Group2FillIcon: IconType;
export { Group2FillIcon }
export { Group2FillIcon as Group2FillIcon_alias_1 }

/**
 * The react component for the `group-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Group 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/group-2-line.svg)
 */
declare const Group2LineIcon: IconType;
export { Group2LineIcon }
export { Group2LineIcon as Group2LineIcon_alias_1 }

/**
 * The react component for the `group-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Group Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/group-fill.svg)
 */
declare const GroupFillIcon: IconType;
export { GroupFillIcon }
export { GroupFillIcon as GroupFillIcon_alias_1 }

/**
 * The react component for the `group-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Group Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/group-line.svg)
 */
declare const GroupLineIcon: IconType;
export { GroupLineIcon }
export { GroupLineIcon as GroupLineIcon_alias_1 }

/**
 * The react component for the `guide-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Guide Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/guide-fill.svg)
 */
declare const GuideFillIcon: IconType;
export { GuideFillIcon }
export { GuideFillIcon as GuideFillIcon_alias_1 }

/**
 * The react component for the `guide-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Guide Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/guide-line.svg)
 */
declare const GuideLineIcon: IconType;
export { GuideLineIcon }
export { GuideLineIcon as GuideLineIcon_alias_1 }

/**
 * The react component for the `h-1.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![H 1 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/h-1.svg)
 */
declare const H1Icon: IconType;
export { H1Icon }
export { H1Icon as H1Icon_alias_1 }
export { H1Icon as H1Icon_alias_2 }

/**
 * The react component for the `h-2.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![H 2 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/h-2.svg)
 */
declare const H2Icon: IconType;
export { H2Icon }
export { H2Icon as H2Icon_alias_1 }
export { H2Icon as H2Icon_alias_2 }

/**
 * The react component for the `h-3.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![H 3 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/h-3.svg)
 */
declare const H3Icon: IconType;
export { H3Icon }
export { H3Icon as H3Icon_alias_1 }
export { H3Icon as H3Icon_alias_2 }

/**
 * The react component for the `h-4.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![H 4 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/h-4.svg)
 */
declare const H4Icon: IconType;
export { H4Icon }
export { H4Icon as H4Icon_alias_1 }
export { H4Icon as H4Icon_alias_2 }

/**
 * The react component for the `h-5.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![H 5 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/h-5.svg)
 */
declare const H5Icon: IconType;
export { H5Icon }
export { H5Icon as H5Icon_alias_1 }
export { H5Icon as H5Icon_alias_2 }

/**
 * The react component for the `h-6.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![H 6 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/h-6.svg)
 */
declare const H6Icon: IconType;
export { H6Icon }
export { H6Icon as H6Icon_alias_1 }
export { H6Icon as H6Icon_alias_2 }

/**
 * The react component for the `hail-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hail Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/hail-fill.svg)
 */
declare const HailFillIcon: IconType;
export { HailFillIcon }
export { HailFillIcon as HailFillIcon_alias_1 }

/**
 * The react component for the `hail-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hail Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/hail-line.svg)
 */
declare const HailLineIcon: IconType;
export { HailLineIcon }
export { HailLineIcon as HailLineIcon_alias_1 }

/**
 * The react component for the `hammer-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hammer Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/hammer-fill.svg)
 */
declare const HammerFillIcon: IconType;
export { HammerFillIcon }
export { HammerFillIcon as HammerFillIcon_alias_1 }

/**
 * The react component for the `hammer-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hammer Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/hammer-line.svg)
 */
declare const HammerLineIcon: IconType;
export { HammerLineIcon }
export { HammerLineIcon as HammerLineIcon_alias_1 }

/**
 * The react component for the `handbag-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Handbag Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/handbag-fill.svg)
 */
declare const HandbagFillIcon: IconType;
export { HandbagFillIcon }
export { HandbagFillIcon as HandbagFillIcon_alias_1 }

/**
 * The react component for the `handbag-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Handbag Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/handbag-line.svg)
 */
declare const HandbagLineIcon: IconType;
export { HandbagLineIcon }
export { HandbagLineIcon as HandbagLineIcon_alias_1 }

/**
 * The react component for the `hand-coin-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hand Coin Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/hand-coin-fill.svg)
 */
declare const HandCoinFillIcon: IconType;
export { HandCoinFillIcon }
export { HandCoinFillIcon as HandCoinFillIcon_alias_1 }

/**
 * The react component for the `hand-coin-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hand Coin Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/hand-coin-line.svg)
 */
declare const HandCoinLineIcon: IconType;
export { HandCoinLineIcon }
export { HandCoinLineIcon as HandCoinLineIcon_alias_1 }

/**
 * The react component for the `hand-heart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hand Heart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/hand-heart-fill.svg)
 */
declare const HandHeartFillIcon: IconType;
export { HandHeartFillIcon }
export { HandHeartFillIcon as HandHeartFillIcon_alias_1 }

/**
 * The react component for the `hand-heart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hand Heart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/hand-heart-line.svg)
 */
declare const HandHeartLineIcon: IconType;
export { HandHeartLineIcon }
export { HandHeartLineIcon as HandHeartLineIcon_alias_1 }

/**
 * The react component for the `hand-sanitizer-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hand Sanitizer Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/hand-sanitizer-fill.svg)
 */
declare const HandSanitizerFillIcon: IconType;
export { HandSanitizerFillIcon }
export { HandSanitizerFillIcon as HandSanitizerFillIcon_alias_1 }

/**
 * The react component for the `hand-sanitizer-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hand Sanitizer Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/hand-sanitizer-line.svg)
 */
declare const HandSanitizerLineIcon: IconType;
export { HandSanitizerLineIcon }
export { HandSanitizerLineIcon as HandSanitizerLineIcon_alias_1 }

/**
 * The react component for the `hard-drive-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hard Drive 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/hard-drive-2-fill.svg)
 */
declare const HardDrive2FillIcon: IconType;
export { HardDrive2FillIcon }
export { HardDrive2FillIcon as HardDrive2FillIcon_alias_1 }

/**
 * The react component for the `hard-drive-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hard Drive 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/hard-drive-2-line.svg)
 */
declare const HardDrive2LineIcon: IconType;
export { HardDrive2LineIcon }
export { HardDrive2LineIcon as HardDrive2LineIcon_alias_1 }

/**
 * The react component for the `hard-drive-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hard Drive Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/hard-drive-fill.svg)
 */
declare const HardDriveFillIcon: IconType;
export { HardDriveFillIcon }
export { HardDriveFillIcon as HardDriveFillIcon_alias_1 }

/**
 * The react component for the `hard-drive-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hard Drive Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/hard-drive-line.svg)
 */
declare const HardDriveLineIcon: IconType;
export { HardDriveLineIcon }
export { HardDriveLineIcon as HardDriveLineIcon_alias_1 }

/**
 * The react component for the `hashtag.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hashtag Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/hashtag.svg)
 */
declare const HashtagIcon: IconType;
export { HashtagIcon }
export { HashtagIcon as HashtagIcon_alias_1 }
export { HashtagIcon as HashtagIcon_alias_2 }

/**
 * The react component for the `haze-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Haze 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/haze-2-fill.svg)
 */
declare const Haze2FillIcon: IconType;
export { Haze2FillIcon }
export { Haze2FillIcon as Haze2FillIcon_alias_1 }

/**
 * The react component for the `haze-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Haze 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/haze-2-line.svg)
 */
declare const Haze2LineIcon: IconType;
export { Haze2LineIcon }
export { Haze2LineIcon as Haze2LineIcon_alias_1 }

/**
 * The react component for the `haze-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Haze Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/haze-fill.svg)
 */
declare const HazeFillIcon: IconType;
export { HazeFillIcon }
export { HazeFillIcon as HazeFillIcon_alias_1 }

/**
 * The react component for the `haze-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Haze Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/haze-line.svg)
 */
declare const HazeLineIcon: IconType;
export { HazeLineIcon }
export { HazeLineIcon as HazeLineIcon_alias_1 }

/**
 * The react component for the `hd-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hd Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/hd-fill.svg)
 */
declare const HdFillIcon: IconType;
export { HdFillIcon }
export { HdFillIcon as HdFillIcon_alias_1 }

/**
 * The react component for the `hd-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hd Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/hd-line.svg)
 */
declare const HdLineIcon: IconType;
export { HdLineIcon }
export { HdLineIcon as HdLineIcon_alias_1 }

/**
 * The react component for the `heading.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Heading Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/heading.svg)
 */
declare const HeadingIcon: IconType;
export { HeadingIcon }
export { HeadingIcon as HeadingIcon_alias_1 }
export { HeadingIcon as HeadingIcon_alias_2 }

/**
 * The react component for the `headphone-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Headphone Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/headphone-fill.svg)
 */
declare const HeadphoneFillIcon: IconType;
export { HeadphoneFillIcon }
export { HeadphoneFillIcon as HeadphoneFillIcon_alias_1 }

/**
 * The react component for the `headphone-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Headphone Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/headphone-line.svg)
 */
declare const HeadphoneLineIcon: IconType;
export { HeadphoneLineIcon }
export { HeadphoneLineIcon as HeadphoneLineIcon_alias_1 }

/**
 * The react component for the `health-book-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Health Book Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/health-book-fill.svg)
 */
declare const HealthBookFillIcon: IconType;
export { HealthBookFillIcon }
export { HealthBookFillIcon as HealthBookFillIcon_alias_1 }

/**
 * The react component for the `health-book-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Health Book Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/health-book-line.svg)
 */
declare const HealthBookLineIcon: IconType;
export { HealthBookLineIcon }
export { HealthBookLineIcon as HealthBookLineIcon_alias_1 }

/**
 * The react component for the `heart-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Heart 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/heart-2-fill.svg)
 */
declare const Heart2FillIcon: IconType;
export { Heart2FillIcon }
export { Heart2FillIcon as Heart2FillIcon_alias_1 }

/**
 * The react component for the `heart-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Heart 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/heart-2-line.svg)
 */
declare const Heart2LineIcon: IconType;
export { Heart2LineIcon }
export { Heart2LineIcon as Heart2LineIcon_alias_1 }

/**
 * The react component for the `heart-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Heart 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/heart-3-fill.svg)
 */
declare const Heart3FillIcon: IconType;
export { Heart3FillIcon }
export { Heart3FillIcon as Heart3FillIcon_alias_1 }

/**
 * The react component for the `heart-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Heart 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/heart-3-line.svg)
 */
declare const Heart3LineIcon: IconType;
export { Heart3LineIcon }
export { Heart3LineIcon as Heart3LineIcon_alias_1 }

/**
 * The react component for the `heart-add-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Heart Add Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/heart-add-fill.svg)
 */
declare const HeartAddFillIcon: IconType;
export { HeartAddFillIcon }
export { HeartAddFillIcon as HeartAddFillIcon_alias_1 }

/**
 * The react component for the `heart-add-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Heart Add Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/heart-add-line.svg)
 */
declare const HeartAddLineIcon: IconType;
export { HeartAddLineIcon }
export { HeartAddLineIcon as HeartAddLineIcon_alias_1 }

/**
 * The react component for the `heart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Heart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/heart-fill.svg)
 */
declare const HeartFillIcon: IconType;
export { HeartFillIcon }
export { HeartFillIcon as HeartFillIcon_alias_1 }

/**
 * The react component for the `heart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Heart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/heart-line.svg)
 */
declare const HeartLineIcon: IconType;
export { HeartLineIcon }
export { HeartLineIcon as HeartLineIcon_alias_1 }

/**
 * The react component for the `heart-pulse-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Heart Pulse Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/heart-pulse-fill.svg)
 */
declare const HeartPulseFillIcon: IconType;
export { HeartPulseFillIcon }
export { HeartPulseFillIcon as HeartPulseFillIcon_alias_1 }

/**
 * The react component for the `heart-pulse-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Heart Pulse Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/heart-pulse-line.svg)
 */
declare const HeartPulseLineIcon: IconType;
export { HeartPulseLineIcon }
export { HeartPulseLineIcon as HeartPulseLineIcon_alias_1 }

/**
 * The react component for the `hearts-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hearts Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/hearts-fill.svg)
 */
declare const HeartsFillIcon: IconType;
export { HeartsFillIcon }
export { HeartsFillIcon as HeartsFillIcon_alias_1 }

/**
 * The react component for the `hearts-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hearts Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/hearts-line.svg)
 */
declare const HeartsLineIcon: IconType;
export { HeartsLineIcon }
export { HeartsLineIcon as HeartsLineIcon_alias_1 }

/**
 * The react component for the `heavy-showers-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Heavy Showers Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/heavy-showers-fill.svg)
 */
declare const HeavyShowersFillIcon: IconType;
export { HeavyShowersFillIcon }
export { HeavyShowersFillIcon as HeavyShowersFillIcon_alias_1 }

/**
 * The react component for the `heavy-showers-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Heavy Showers Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/heavy-showers-line.svg)
 */
declare const HeavyShowersLineIcon: IconType;
export { HeavyShowersLineIcon }
export { HeavyShowersLineIcon as HeavyShowersLineIcon_alias_1 }

/**
 * The react component for the `history-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![History Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/history-fill.svg)
 */
declare const HistoryFillIcon: IconType;
export { HistoryFillIcon }
export { HistoryFillIcon as HistoryFillIcon_alias_1 }

/**
 * The react component for the `history-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![History Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/history-line.svg)
 */
declare const HistoryLineIcon: IconType;
export { HistoryLineIcon }
export { HistoryLineIcon as HistoryLineIcon_alias_1 }

/**
 * The react component for the `home-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-2-fill.svg)
 */
declare const Home2FillIcon: IconType;
export { Home2FillIcon }
export { Home2FillIcon as Home2FillIcon_alias_1 }

/**
 * The react component for the `home-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-2-line.svg)
 */
declare const Home2LineIcon: IconType;
export { Home2LineIcon }
export { Home2LineIcon as Home2LineIcon_alias_1 }

/**
 * The react component for the `home-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-3-fill.svg)
 */
declare const Home3FillIcon: IconType;
export { Home3FillIcon }
export { Home3FillIcon as Home3FillIcon_alias_1 }

/**
 * The react component for the `home-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-3-line.svg)
 */
declare const Home3LineIcon: IconType;
export { Home3LineIcon }
export { Home3LineIcon as Home3LineIcon_alias_1 }

/**
 * The react component for the `home-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-4-fill.svg)
 */
declare const Home4FillIcon: IconType;
export { Home4FillIcon }
export { Home4FillIcon as Home4FillIcon_alias_1 }

/**
 * The react component for the `home-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-4-line.svg)
 */
declare const Home4LineIcon: IconType;
export { Home4LineIcon }
export { Home4LineIcon as Home4LineIcon_alias_1 }

/**
 * The react component for the `home-5-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 5 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-5-fill.svg)
 */
declare const Home5FillIcon: IconType;
export { Home5FillIcon }
export { Home5FillIcon as Home5FillIcon_alias_1 }

/**
 * The react component for the `home-5-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 5 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-5-line.svg)
 */
declare const Home5LineIcon: IconType;
export { Home5LineIcon }
export { Home5LineIcon as Home5LineIcon_alias_1 }

/**
 * The react component for the `home-6-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 6 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-6-fill.svg)
 */
declare const Home6FillIcon: IconType;
export { Home6FillIcon }
export { Home6FillIcon as Home6FillIcon_alias_1 }

/**
 * The react component for the `home-6-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 6 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-6-line.svg)
 */
declare const Home6LineIcon: IconType;
export { Home6LineIcon }
export { Home6LineIcon as Home6LineIcon_alias_1 }

/**
 * The react component for the `home-7-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 7 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-7-fill.svg)
 */
declare const Home7FillIcon: IconType;
export { Home7FillIcon }
export { Home7FillIcon as Home7FillIcon_alias_1 }

/**
 * The react component for the `home-7-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 7 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-7-line.svg)
 */
declare const Home7LineIcon: IconType;
export { Home7LineIcon }
export { Home7LineIcon as Home7LineIcon_alias_1 }

/**
 * The react component for the `home-8-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 8 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-8-fill.svg)
 */
declare const Home8FillIcon: IconType;
export { Home8FillIcon }
export { Home8FillIcon as Home8FillIcon_alias_1 }

/**
 * The react component for the `home-8-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home 8 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-8-line.svg)
 */
declare const Home8LineIcon: IconType;
export { Home8LineIcon }
export { Home8LineIcon as Home8LineIcon_alias_1 }

/**
 * The react component for the `home-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-fill.svg)
 */
declare const HomeFillIcon: IconType;
export { HomeFillIcon }
export { HomeFillIcon as HomeFillIcon_alias_1 }

/**
 * The react component for the `home-gear-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home Gear Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-gear-fill.svg)
 */
declare const HomeGearFillIcon: IconType;
export { HomeGearFillIcon }
export { HomeGearFillIcon as HomeGearFillIcon_alias_1 }

/**
 * The react component for the `home-gear-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home Gear Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-gear-line.svg)
 */
declare const HomeGearLineIcon: IconType;
export { HomeGearLineIcon }
export { HomeGearLineIcon as HomeGearLineIcon_alias_1 }

/**
 * The react component for the `home-heart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home Heart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-heart-fill.svg)
 */
declare const HomeHeartFillIcon: IconType;
export { HomeHeartFillIcon }
export { HomeHeartFillIcon as HomeHeartFillIcon_alias_1 }

/**
 * The react component for the `home-heart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home Heart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-heart-line.svg)
 */
declare const HomeHeartLineIcon: IconType;
export { HomeHeartLineIcon }
export { HomeHeartLineIcon as HomeHeartLineIcon_alias_1 }

/**
 * The react component for the `home-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-line.svg)
 */
declare const HomeLineIcon: IconType;
export { HomeLineIcon }
export { HomeLineIcon as HomeLineIcon_alias_1 }

/**
 * The react component for the `home-smile-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home Smile 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-smile-2-fill.svg)
 */
declare const HomeSmile2FillIcon: IconType;
export { HomeSmile2FillIcon }
export { HomeSmile2FillIcon as HomeSmile2FillIcon_alias_1 }

/**
 * The react component for the `home-smile-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home Smile 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-smile-2-line.svg)
 */
declare const HomeSmile2LineIcon: IconType;
export { HomeSmile2LineIcon }
export { HomeSmile2LineIcon as HomeSmile2LineIcon_alias_1 }

/**
 * The react component for the `home-smile-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home Smile Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-smile-fill.svg)
 */
declare const HomeSmileFillIcon: IconType;
export { HomeSmileFillIcon }
export { HomeSmileFillIcon as HomeSmileFillIcon_alias_1 }

/**
 * The react component for the `home-smile-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home Smile Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-smile-line.svg)
 */
declare const HomeSmileLineIcon: IconType;
export { HomeSmileLineIcon }
export { HomeSmileLineIcon as HomeSmileLineIcon_alias_1 }

/**
 * The react component for the `home-wifi-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home Wifi Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-wifi-fill.svg)
 */
declare const HomeWifiFillIcon: IconType;
export { HomeWifiFillIcon }
export { HomeWifiFillIcon as HomeWifiFillIcon_alias_1 }

/**
 * The react component for the `home-wifi-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Home Wifi Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/home-wifi-line.svg)
 */
declare const HomeWifiLineIcon: IconType;
export { HomeWifiLineIcon }
export { HomeWifiLineIcon as HomeWifiLineIcon_alias_1 }

/**
 * The react component for the `honor-of-kings-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Honor Of Kings Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/honor-of-kings-fill.svg)
 */
declare const HonorOfKingsFillIcon: IconType;
export { HonorOfKingsFillIcon }
export { HonorOfKingsFillIcon as HonorOfKingsFillIcon_alias_1 }

/**
 * The react component for the `honor-of-kings-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Honor Of Kings Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/honor-of-kings-line.svg)
 */
declare const HonorOfKingsLineIcon: IconType;
export { HonorOfKingsLineIcon }
export { HonorOfKingsLineIcon as HonorOfKingsLineIcon_alias_1 }

/**
 * The react component for the `honour-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Honour Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/honour-fill.svg)
 */
declare const HonourFillIcon: IconType;
export { HonourFillIcon }
export { HonourFillIcon as HonourFillIcon_alias_1 }

/**
 * The react component for the `honour-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Honour Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/honour-line.svg)
 */
declare const HonourLineIcon: IconType;
export { HonourLineIcon }
export { HonourLineIcon as HonourLineIcon_alias_1 }

/**
 * The react component for the `hospital-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hospital Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/hospital-fill.svg)
 */
declare const HospitalFillIcon: IconType;
export { HospitalFillIcon }
export { HospitalFillIcon as HospitalFillIcon_alias_1 }

/**
 * The react component for the `hospital-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hospital Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/hospital-line.svg)
 */
declare const HospitalLineIcon: IconType;
export { HospitalLineIcon }
export { HospitalLineIcon as HospitalLineIcon_alias_1 }

/**
 * The react component for the `hotel-bed-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hotel Bed Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/hotel-bed-fill.svg)
 */
declare const HotelBedFillIcon: IconType;
export { HotelBedFillIcon }
export { HotelBedFillIcon as HotelBedFillIcon_alias_1 }

/**
 * The react component for the `hotel-bed-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hotel Bed Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/hotel-bed-line.svg)
 */
declare const HotelBedLineIcon: IconType;
export { HotelBedLineIcon }
export { HotelBedLineIcon as HotelBedLineIcon_alias_1 }

/**
 * The react component for the `hotel-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hotel Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/hotel-fill.svg)
 */
declare const HotelFillIcon: IconType;
export { HotelFillIcon }
export { HotelFillIcon as HotelFillIcon_alias_1 }

/**
 * The react component for the `hotel-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hotel Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/hotel-line.svg)
 */
declare const HotelLineIcon: IconType;
export { HotelLineIcon }
export { HotelLineIcon as HotelLineIcon_alias_1 }

/**
 * The react component for the `hotspot-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hotspot Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/hotspot-fill.svg)
 */
declare const HotspotFillIcon: IconType;
export { HotspotFillIcon }
export { HotspotFillIcon as HotspotFillIcon_alias_1 }

/**
 * The react component for the `hotspot-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hotspot Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/hotspot-line.svg)
 */
declare const HotspotLineIcon: IconType;
export { HotspotLineIcon }
export { HotspotLineIcon as HotspotLineIcon_alias_1 }

/**
 * The react component for the `hq-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hq Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/hq-fill.svg)
 */
declare const HqFillIcon: IconType;
export { HqFillIcon }
export { HqFillIcon as HqFillIcon_alias_1 }

/**
 * The react component for the `hq-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Hq Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/hq-line.svg)
 */
declare const HqLineIcon: IconType;
export { HqLineIcon }
export { HqLineIcon as HqLineIcon_alias_1 }

/**
 * The react component for the `html-5-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Html 5 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/html5-fill.svg)
 */
declare const Html5FillIcon: IconType;
export { Html5FillIcon }
export { Html5FillIcon as Html5FillIcon_alias_1 }

/**
 * The react component for the `html-5-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Html 5 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/html5-line.svg)
 */
declare const Html5LineIcon: IconType;
export { Html5LineIcon }
export { Html5LineIcon as Html5LineIcon_alias_1 }

/**
 * Dynamic icons for the remirror codebase..
 */
declare const Icon: (props: IconProps) => JSX.Element;
export { Icon }
export { Icon as Icon_alias_1 }
export { Icon as Icon_alias_2 }

/**
 * The base icon as an svg with the icon context available
 */
declare const IconBase: (props: IconBaseProps) => JSX.Element;
export { IconBase }
export { IconBase as IconBase_alias_1 }
export { IconBase as IconBase_alias_2 }

declare interface IconBaseProps extends SVGAttributes<SVGElement> {
    children?: ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}
export { IconBaseProps }
export { IconBaseProps as IconBaseProps_alias_1 }
export { IconBaseProps as IconBaseProps_alias_2 }

declare interface IconContext {
    color?: string;
    size?: string;
    className?: string;
    style?: CSSProperties_2;
    attr?: SVGAttributes<SVGElement>;
}

declare const IconContext: Context<IconContext>;
export { IconContext }
export { IconContext as IconContext_alias_1 }

declare interface IconProps extends IconBaseProps {
    /**
     * The name of the core icon to use.
     */
    name: Icons.CoreIcon;
}
export { IconProps }
export { IconProps as IconProps_alias_1 }
export { IconProps as IconProps_alias_2 }

declare const IconProvider: Provider<IconContext>;
export { IconProvider }
export { IconProvider as IconProvider_alias_1 }

declare type IconType = (props: IconBaseProps) => JSX.Element;
export { IconType }
export { IconType as IconType_alias_1 }
export { IconType as IconType_alias_2 }

/**
 * The react component for the `ie-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ie Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/ie-fill.svg)
 */
declare const IeFillIcon: IconType;
export { IeFillIcon }
export { IeFillIcon as IeFillIcon_alias_1 }

/**
 * The react component for the `ie-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ie Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/ie-line.svg)
 */
declare const IeLineIcon: IconType;
export { IeLineIcon }
export { IeLineIcon as IeLineIcon_alias_1 }

/**
 * The react component for the `image-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Image 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/image-2-fill.svg)
 */
declare const Image2FillIcon: IconType;
export { Image2FillIcon }
export { Image2FillIcon as Image2FillIcon_alias_1 }

/**
 * The react component for the `image-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Image 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/image-2-line.svg)
 */
declare const Image2LineIcon: IconType;
export { Image2LineIcon }
export { Image2LineIcon as Image2LineIcon_alias_1 }

/**
 * The react component for the `image-add-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Image Add Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/image-add-fill.svg)
 */
declare const ImageAddFillIcon: IconType;
export { ImageAddFillIcon }
export { ImageAddFillIcon as ImageAddFillIcon_alias_1 }

/**
 * The react component for the `image-add-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Image Add Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/image-add-line.svg)
 */
declare const ImageAddLineIcon: IconType;
export { ImageAddLineIcon }
export { ImageAddLineIcon as ImageAddLineIcon_alias_1 }
export { ImageAddLineIcon as ImageAddLineIcon_alias_2 }

/**
 * The react component for the `image-edit-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Image Edit Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/image-edit-fill.svg)
 */
declare const ImageEditFillIcon: IconType;
export { ImageEditFillIcon }
export { ImageEditFillIcon as ImageEditFillIcon_alias_1 }

/**
 * The react component for the `image-edit-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Image Edit Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/image-edit-line.svg)
 */
declare const ImageEditLineIcon: IconType;
export { ImageEditLineIcon }
export { ImageEditLineIcon as ImageEditLineIcon_alias_1 }
export { ImageEditLineIcon as ImageEditLineIcon_alias_2 }

/**
 * The react component for the `image-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Image Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/image-fill.svg)
 */
declare const ImageFillIcon: IconType;
export { ImageFillIcon }
export { ImageFillIcon as ImageFillIcon_alias_1 }

/**
 * The react component for the `image-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Image Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/image-line.svg)
 */
declare const ImageLineIcon: IconType;
export { ImageLineIcon }
export { ImageLineIcon as ImageLineIcon_alias_1 }
export { ImageLineIcon as ImageLineIcon_alias_2 }

/**
 * The react component for the `inbox-archive-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Inbox Archive Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/inbox-archive-fill.svg)
 */
declare const InboxArchiveFillIcon: IconType;
export { InboxArchiveFillIcon }
export { InboxArchiveFillIcon as InboxArchiveFillIcon_alias_1 }

/**
 * The react component for the `inbox-archive-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Inbox Archive Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/inbox-archive-line.svg)
 */
declare const InboxArchiveLineIcon: IconType;
export { InboxArchiveLineIcon }
export { InboxArchiveLineIcon as InboxArchiveLineIcon_alias_1 }

/**
 * The react component for the `inbox-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Inbox Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/inbox-fill.svg)
 */
declare const InboxFillIcon: IconType;
export { InboxFillIcon }
export { InboxFillIcon as InboxFillIcon_alias_1 }

/**
 * The react component for the `inbox-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Inbox Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/inbox-line.svg)
 */
declare const InboxLineIcon: IconType;
export { InboxLineIcon }
export { InboxLineIcon as InboxLineIcon_alias_1 }

/**
 * The react component for the `inbox-unarchive-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Inbox Unarchive Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/inbox-unarchive-fill.svg)
 */
declare const InboxUnarchiveFillIcon: IconType;
export { InboxUnarchiveFillIcon }
export { InboxUnarchiveFillIcon as InboxUnarchiveFillIcon_alias_1 }

/**
 * The react component for the `inbox-unarchive-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Inbox Unarchive Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/inbox-unarchive-line.svg)
 */
declare const InboxUnarchiveLineIcon: IconType;
export { InboxUnarchiveLineIcon }
export { InboxUnarchiveLineIcon as InboxUnarchiveLineIcon_alias_1 }

/**
 * The react component for the `increase-decrease-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Increase Decrease Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/increase-decrease-fill.svg)
 */
declare const IncreaseDecreaseFillIcon: IconType;
export { IncreaseDecreaseFillIcon }
export { IncreaseDecreaseFillIcon as IncreaseDecreaseFillIcon_alias_1 }

/**
 * The react component for the `increase-decrease-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Increase Decrease Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/increase-decrease-line.svg)
 */
declare const IncreaseDecreaseLineIcon: IconType;
export { IncreaseDecreaseLineIcon }
export { IncreaseDecreaseLineIcon as IncreaseDecreaseLineIcon_alias_1 }

/**
 * The react component for the `indent-decrease.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Indent Decrease Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/indent-decrease.svg)
 */
declare const IndentDecreaseIcon: IconType;
export { IndentDecreaseIcon }
export { IndentDecreaseIcon as IndentDecreaseIcon_alias_1 }
export { IndentDecreaseIcon as IndentDecreaseIcon_alias_2 }

/**
 * The react component for the `indent-increase.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Indent Increase Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/indent-increase.svg)
 */
declare const IndentIncreaseIcon: IconType;
export { IndentIncreaseIcon }
export { IndentIncreaseIcon as IndentIncreaseIcon_alias_1 }
export { IndentIncreaseIcon as IndentIncreaseIcon_alias_2 }

/**
 * The react component for the `indeterminate-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Indeterminate Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/indeterminate-circle-fill.svg)
 */
declare const IndeterminateCircleFillIcon: IconType;
export { IndeterminateCircleFillIcon }
export { IndeterminateCircleFillIcon as IndeterminateCircleFillIcon_alias_1 }

/**
 * The react component for the `indeterminate-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Indeterminate Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/indeterminate-circle-line.svg)
 */
declare const IndeterminateCircleLineIcon: IconType;
export { IndeterminateCircleLineIcon }
export { IndeterminateCircleLineIcon as IndeterminateCircleLineIcon_alias_1 }

/**
 * The react component for the `information-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Information Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/information-fill.svg)
 */
declare const InformationFillIcon: IconType;
export { InformationFillIcon }
export { InformationFillIcon as InformationFillIcon_alias_1 }

/**
 * The react component for the `information-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Information Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/information-line.svg)
 */
declare const InformationLineIcon: IconType;
export { InformationLineIcon }
export { InformationLineIcon as InformationLineIcon_alias_1 }
export { InformationLineIcon as InformationLineIcon_alias_2 }

/**
 * The react component for the `infrared-thermometer-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Infrared Thermometer Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/infrared-thermometer-fill.svg)
 */
declare const InfraredThermometerFillIcon: IconType;
export { InfraredThermometerFillIcon }
export { InfraredThermometerFillIcon as InfraredThermometerFillIcon_alias_1 }

/**
 * The react component for the `infrared-thermometer-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Infrared Thermometer Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/infrared-thermometer-line.svg)
 */
declare const InfraredThermometerLineIcon: IconType;
export { InfraredThermometerLineIcon }
export { InfraredThermometerLineIcon as InfraredThermometerLineIcon_alias_1 }

/**
 * The react component for the `ink-bottle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ink Bottle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/ink-bottle-fill.svg)
 */
declare const InkBottleFillIcon: IconType;
export { InkBottleFillIcon }
export { InkBottleFillIcon as InkBottleFillIcon_alias_1 }

/**
 * The react component for the `ink-bottle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ink Bottle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/ink-bottle-line.svg)
 */
declare const InkBottleLineIcon: IconType;
export { InkBottleLineIcon }
export { InkBottleLineIcon as InkBottleLineIcon_alias_1 }

/**
 * The react component for the `input-cursor-move.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Input Cursor Move Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/input-cursor-move.svg)
 */
declare const InputCursorMoveIcon: IconType;
export { InputCursorMoveIcon }
export { InputCursorMoveIcon as InputCursorMoveIcon_alias_1 }
export { InputCursorMoveIcon as InputCursorMoveIcon_alias_2 }

/**
 * The react component for the `input-method-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Input Method Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/input-method-fill.svg)
 */
declare const InputMethodFillIcon: IconType;
export { InputMethodFillIcon }
export { InputMethodFillIcon as InputMethodFillIcon_alias_1 }

/**
 * The react component for the `input-method-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Input Method Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/input-method-line.svg)
 */
declare const InputMethodLineIcon: IconType;
export { InputMethodLineIcon }
export { InputMethodLineIcon as InputMethodLineIcon_alias_1 }

/**
 * The react component for the `insert-column-left.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Insert Column Left Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/insert-column-left.svg)
 */
declare const InsertColumnLeftIcon: IconType;
export { InsertColumnLeftIcon }
export { InsertColumnLeftIcon as InsertColumnLeftIcon_alias_1 }
export { InsertColumnLeftIcon as InsertColumnLeftIcon_alias_2 }

/**
 * The react component for the `insert-column-right.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Insert Column Right Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/insert-column-right.svg)
 */
declare const InsertColumnRightIcon: IconType;
export { InsertColumnRightIcon }
export { InsertColumnRightIcon as InsertColumnRightIcon_alias_1 }
export { InsertColumnRightIcon as InsertColumnRightIcon_alias_2 }

/**
 * The react component for the `insert-row-bottom.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Insert Row Bottom Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/insert-row-bottom.svg)
 */
declare const InsertRowBottomIcon: IconType;
export { InsertRowBottomIcon }
export { InsertRowBottomIcon as InsertRowBottomIcon_alias_1 }
export { InsertRowBottomIcon as InsertRowBottomIcon_alias_2 }

/**
 * The react component for the `insert-row-top.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Insert Row Top Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/insert-row-top.svg)
 */
declare const InsertRowTopIcon: IconType;
export { InsertRowTopIcon }
export { InsertRowTopIcon as InsertRowTopIcon_alias_1 }
export { InsertRowTopIcon as InsertRowTopIcon_alias_2 }

/**
 * The react component for the `instagram-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Instagram Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/instagram-fill.svg)
 */
declare const InstagramFillIcon: IconType;
export { InstagramFillIcon }
export { InstagramFillIcon as InstagramFillIcon_alias_1 }

/**
 * The react component for the `instagram-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Instagram Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/instagram-line.svg)
 */
declare const InstagramLineIcon: IconType;
export { InstagramLineIcon }
export { InstagramLineIcon as InstagramLineIcon_alias_1 }

/**
 * The react component for the `install-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Install Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/install-fill.svg)
 */
declare const InstallFillIcon: IconType;
export { InstallFillIcon }
export { InstallFillIcon as InstallFillIcon_alias_1 }

/**
 * The react component for the `install-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Install Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/install-line.svg)
 */
declare const InstallLineIcon: IconType;
export { InstallLineIcon }
export { InstallLineIcon as InstallLineIcon_alias_1 }

/**
 * The react component for the `invision-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Invision Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/invision-fill.svg)
 */
declare const InvisionFillIcon: IconType;
export { InvisionFillIcon }
export { InvisionFillIcon as InvisionFillIcon_alias_1 }

/**
 * The react component for the `invision-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Invision Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/invision-line.svg)
 */
declare const InvisionLineIcon: IconType;
export { InvisionLineIcon }
export { InvisionLineIcon as InvisionLineIcon_alias_1 }

/**
 * The react component for the `italic.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Italic Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/italic.svg)
 */
declare const ItalicIcon: IconType;
export { ItalicIcon }
export { ItalicIcon as ItalicIcon_alias_1 }
export { ItalicIcon as ItalicIcon_alias_2 }

/**
 * The react component for the `kakao-talk-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Kakao Talk Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/kakao-talk-fill.svg)
 */
declare const KakaoTalkFillIcon: IconType;
export { KakaoTalkFillIcon }
export { KakaoTalkFillIcon as KakaoTalkFillIcon_alias_1 }

/**
 * The react component for the `kakao-talk-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Kakao Talk Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/kakao-talk-line.svg)
 */
declare const KakaoTalkLineIcon: IconType;
export { KakaoTalkLineIcon }
export { KakaoTalkLineIcon as KakaoTalkLineIcon_alias_1 }

/**
 * The react component for the `key-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Key 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/key-2-fill.svg)
 */
declare const Key2FillIcon: IconType;
export { Key2FillIcon }
export { Key2FillIcon as Key2FillIcon_alias_1 }

/**
 * The react component for the `key-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Key 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/key-2-line.svg)
 */
declare const Key2LineIcon: IconType;
export { Key2LineIcon }
export { Key2LineIcon as Key2LineIcon_alias_1 }

/**
 * The react component for the `keyboard-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Keyboard Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/keyboard-box-fill.svg)
 */
declare const KeyboardBoxFillIcon: IconType;
export { KeyboardBoxFillIcon }
export { KeyboardBoxFillIcon as KeyboardBoxFillIcon_alias_1 }

/**
 * The react component for the `keyboard-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Keyboard Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/keyboard-box-line.svg)
 */
declare const KeyboardBoxLineIcon: IconType;
export { KeyboardBoxLineIcon }
export { KeyboardBoxLineIcon as KeyboardBoxLineIcon_alias_1 }

/**
 * The react component for the `keyboard-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Keyboard Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/keyboard-fill.svg)
 */
declare const KeyboardFillIcon: IconType;
export { KeyboardFillIcon }
export { KeyboardFillIcon as KeyboardFillIcon_alias_1 }

/**
 * The react component for the `keyboard-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Keyboard Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/keyboard-line.svg)
 */
declare const KeyboardLineIcon: IconType;
export { KeyboardLineIcon }
export { KeyboardLineIcon as KeyboardLineIcon_alias_1 }

/**
 * The react component for the `key-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Key Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/key-fill.svg)
 */
declare const KeyFillIcon: IconType;
export { KeyFillIcon }
export { KeyFillIcon as KeyFillIcon_alias_1 }

/**
 * The react component for the `key-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Key Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/key-line.svg)
 */
declare const KeyLineIcon: IconType;
export { KeyLineIcon }
export { KeyLineIcon as KeyLineIcon_alias_1 }

/**
 * The react component for the `keynote-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Keynote Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/keynote-fill.svg)
 */
declare const KeynoteFillIcon: IconType;
export { KeynoteFillIcon }
export { KeynoteFillIcon as KeynoteFillIcon_alias_1 }

/**
 * The react component for the `keynote-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Keynote Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/keynote-line.svg)
 */
declare const KeynoteLineIcon: IconType;
export { KeynoteLineIcon }
export { KeynoteLineIcon as KeynoteLineIcon_alias_1 }

/**
 * The react component for the `knife-blood-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Knife Blood Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/knife-blood-fill.svg)
 */
declare const KnifeBloodFillIcon: IconType;
export { KnifeBloodFillIcon }
export { KnifeBloodFillIcon as KnifeBloodFillIcon_alias_1 }

/**
 * The react component for the `knife-blood-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Knife Blood Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/knife-blood-line.svg)
 */
declare const KnifeBloodLineIcon: IconType;
export { KnifeBloodLineIcon }
export { KnifeBloodLineIcon as KnifeBloodLineIcon_alias_1 }

/**
 * The react component for the `knife-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Knife Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/knife-fill.svg)
 */
declare const KnifeFillIcon: IconType;
export { KnifeFillIcon }
export { KnifeFillIcon as KnifeFillIcon_alias_1 }

/**
 * The react component for the `knife-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Knife Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/knife-line.svg)
 */
declare const KnifeLineIcon: IconType;
export { KnifeLineIcon }
export { KnifeLineIcon as KnifeLineIcon_alias_1 }

/**
 * The react component for the `landscape-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Landscape Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/landscape-fill.svg)
 */
declare const LandscapeFillIcon: IconType;
export { LandscapeFillIcon }
export { LandscapeFillIcon as LandscapeFillIcon_alias_1 }

/**
 * The react component for the `landscape-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Landscape Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/landscape-line.svg)
 */
declare const LandscapeLineIcon: IconType;
export { LandscapeLineIcon }
export { LandscapeLineIcon as LandscapeLineIcon_alias_1 }

/**
 * The react component for the `layout-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-2-fill.svg)
 */
declare const Layout2FillIcon: IconType;
export { Layout2FillIcon }
export { Layout2FillIcon as Layout2FillIcon_alias_1 }

/**
 * The react component for the `layout-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-2-line.svg)
 */
declare const Layout2LineIcon: IconType;
export { Layout2LineIcon }
export { Layout2LineIcon as Layout2LineIcon_alias_1 }

/**
 * The react component for the `layout-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-3-fill.svg)
 */
declare const Layout3FillIcon: IconType;
export { Layout3FillIcon }
export { Layout3FillIcon as Layout3FillIcon_alias_1 }

/**
 * The react component for the `layout-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-3-line.svg)
 */
declare const Layout3LineIcon: IconType;
export { Layout3LineIcon }
export { Layout3LineIcon as Layout3LineIcon_alias_1 }

/**
 * The react component for the `layout-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-4-fill.svg)
 */
declare const Layout4FillIcon: IconType;
export { Layout4FillIcon }
export { Layout4FillIcon as Layout4FillIcon_alias_1 }

/**
 * The react component for the `layout-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-4-line.svg)
 */
declare const Layout4LineIcon: IconType;
export { Layout4LineIcon }
export { Layout4LineIcon as Layout4LineIcon_alias_1 }

/**
 * The react component for the `layout-5-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout 5 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-5-fill.svg)
 */
declare const Layout5FillIcon: IconType;
export { Layout5FillIcon }
export { Layout5FillIcon as Layout5FillIcon_alias_1 }

/**
 * The react component for the `layout-5-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout 5 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-5-line.svg)
 */
declare const Layout5LineIcon: IconType;
export { Layout5LineIcon }
export { Layout5LineIcon as Layout5LineIcon_alias_1 }

/**
 * The react component for the `layout-6-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout 6 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-6-fill.svg)
 */
declare const Layout6FillIcon: IconType;
export { Layout6FillIcon }
export { Layout6FillIcon as Layout6FillIcon_alias_1 }

/**
 * The react component for the `layout-6-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout 6 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-6-line.svg)
 */
declare const Layout6LineIcon: IconType;
export { Layout6LineIcon }
export { Layout6LineIcon as Layout6LineIcon_alias_1 }

/**
 * The react component for the `layout-bottom-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Bottom 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-bottom-2-fill.svg)
 */
declare const LayoutBottom2FillIcon: IconType;
export { LayoutBottom2FillIcon }
export { LayoutBottom2FillIcon as LayoutBottom2FillIcon_alias_1 }

/**
 * The react component for the `layout-bottom-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Bottom 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-bottom-2-line.svg)
 */
declare const LayoutBottom2LineIcon: IconType;
export { LayoutBottom2LineIcon }
export { LayoutBottom2LineIcon as LayoutBottom2LineIcon_alias_1 }

/**
 * The react component for the `layout-bottom-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Bottom Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-bottom-fill.svg)
 */
declare const LayoutBottomFillIcon: IconType;
export { LayoutBottomFillIcon }
export { LayoutBottomFillIcon as LayoutBottomFillIcon_alias_1 }

/**
 * The react component for the `layout-bottom-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Bottom Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-bottom-line.svg)
 */
declare const LayoutBottomLineIcon: IconType;
export { LayoutBottomLineIcon }
export { LayoutBottomLineIcon as LayoutBottomLineIcon_alias_1 }

/**
 * The react component for the `layout-column-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Column Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-column-fill.svg)
 */
declare const LayoutColumnFillIcon: IconType;
export { LayoutColumnFillIcon }
export { LayoutColumnFillIcon as LayoutColumnFillIcon_alias_1 }

/**
 * The react component for the `layout-column-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Column Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-column-line.svg)
 */
declare const LayoutColumnLineIcon: IconType;
export { LayoutColumnLineIcon }
export { LayoutColumnLineIcon as LayoutColumnLineIcon_alias_1 }
export { LayoutColumnLineIcon as LayoutColumnLineIcon_alias_2 }

/**
 * The react component for the `layout-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-fill.svg)
 */
declare const LayoutFillIcon: IconType;
export { LayoutFillIcon }
export { LayoutFillIcon as LayoutFillIcon_alias_1 }

/**
 * The react component for the `layout-grid-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Grid Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-grid-fill.svg)
 */
declare const LayoutGridFillIcon: IconType;
export { LayoutGridFillIcon }
export { LayoutGridFillIcon as LayoutGridFillIcon_alias_1 }

/**
 * The react component for the `layout-grid-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Grid Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-grid-line.svg)
 */
declare const LayoutGridLineIcon: IconType;
export { LayoutGridLineIcon }
export { LayoutGridLineIcon as LayoutGridLineIcon_alias_1 }

/**
 * The react component for the `layout-left-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Left 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-left-2-fill.svg)
 */
declare const LayoutLeft2FillIcon: IconType;
export { LayoutLeft2FillIcon }
export { LayoutLeft2FillIcon as LayoutLeft2FillIcon_alias_1 }

/**
 * The react component for the `layout-left-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Left 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-left-2-line.svg)
 */
declare const LayoutLeft2LineIcon: IconType;
export { LayoutLeft2LineIcon }
export { LayoutLeft2LineIcon as LayoutLeft2LineIcon_alias_1 }

/**
 * The react component for the `layout-left-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Left Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-left-fill.svg)
 */
declare const LayoutLeftFillIcon: IconType;
export { LayoutLeftFillIcon }
export { LayoutLeftFillIcon as LayoutLeftFillIcon_alias_1 }

/**
 * The react component for the `layout-left-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Left Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-left-line.svg)
 */
declare const LayoutLeftLineIcon: IconType;
export { LayoutLeftLineIcon }
export { LayoutLeftLineIcon as LayoutLeftLineIcon_alias_1 }

/**
 * The react component for the `layout-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-line.svg)
 */
declare const LayoutLineIcon: IconType;
export { LayoutLineIcon }
export { LayoutLineIcon as LayoutLineIcon_alias_1 }

/**
 * The react component for the `layout-masonry-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Masonry Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-masonry-fill.svg)
 */
declare const LayoutMasonryFillIcon: IconType;
export { LayoutMasonryFillIcon }
export { LayoutMasonryFillIcon as LayoutMasonryFillIcon_alias_1 }

/**
 * The react component for the `layout-masonry-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Masonry Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-masonry-line.svg)
 */
declare const LayoutMasonryLineIcon: IconType;
export { LayoutMasonryLineIcon }
export { LayoutMasonryLineIcon as LayoutMasonryLineIcon_alias_1 }

/**
 * The react component for the `layout-right-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Right 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-right-2-fill.svg)
 */
declare const LayoutRight2FillIcon: IconType;
export { LayoutRight2FillIcon }
export { LayoutRight2FillIcon as LayoutRight2FillIcon_alias_1 }

/**
 * The react component for the `layout-right-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Right 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-right-2-line.svg)
 */
declare const LayoutRight2LineIcon: IconType;
export { LayoutRight2LineIcon }
export { LayoutRight2LineIcon as LayoutRight2LineIcon_alias_1 }

/**
 * The react component for the `layout-right-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Right Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-right-fill.svg)
 */
declare const LayoutRightFillIcon: IconType;
export { LayoutRightFillIcon }
export { LayoutRightFillIcon as LayoutRightFillIcon_alias_1 }

/**
 * The react component for the `layout-right-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Right Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-right-line.svg)
 */
declare const LayoutRightLineIcon: IconType;
export { LayoutRightLineIcon }
export { LayoutRightLineIcon as LayoutRightLineIcon_alias_1 }

/**
 * The react component for the `layout-row-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Row Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-row-fill.svg)
 */
declare const LayoutRowFillIcon: IconType;
export { LayoutRowFillIcon }
export { LayoutRowFillIcon as LayoutRowFillIcon_alias_1 }

/**
 * The react component for the `layout-row-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Row Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-row-line.svg)
 */
declare const LayoutRowLineIcon: IconType;
export { LayoutRowLineIcon }
export { LayoutRowLineIcon as LayoutRowLineIcon_alias_1 }

/**
 * The react component for the `layout-top-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Top 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-top-2-fill.svg)
 */
declare const LayoutTop2FillIcon: IconType;
export { LayoutTop2FillIcon }
export { LayoutTop2FillIcon as LayoutTop2FillIcon_alias_1 }

/**
 * The react component for the `layout-top-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Top 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-top-2-line.svg)
 */
declare const LayoutTop2LineIcon: IconType;
export { LayoutTop2LineIcon }
export { LayoutTop2LineIcon as LayoutTop2LineIcon_alias_1 }

/**
 * The react component for the `layout-top-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Top Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-top-fill.svg)
 */
declare const LayoutTopFillIcon: IconType;
export { LayoutTopFillIcon }
export { LayoutTopFillIcon as LayoutTopFillIcon_alias_1 }

/**
 * The react component for the `layout-top-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Layout Top Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/layout-top-line.svg)
 */
declare const LayoutTopLineIcon: IconType;
export { LayoutTopLineIcon }
export { LayoutTopLineIcon as LayoutTopLineIcon_alias_1 }

/**
 * The react component for the `leaf-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Leaf Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/leaf-fill.svg)
 */
declare const LeafFillIcon: IconType;
export { LeafFillIcon }
export { LeafFillIcon as LeafFillIcon_alias_1 }

/**
 * The react component for the `leaf-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Leaf Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/leaf-line.svg)
 */
declare const LeafLineIcon: IconType;
export { LeafLineIcon }
export { LeafLineIcon as LeafLineIcon_alias_1 }

/**
 * The react component for the `lifebuoy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lifebuoy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/lifebuoy-fill.svg)
 */
declare const LifebuoyFillIcon: IconType;
export { LifebuoyFillIcon }
export { LifebuoyFillIcon as LifebuoyFillIcon_alias_1 }

/**
 * The react component for the `lifebuoy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lifebuoy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/lifebuoy-line.svg)
 */
declare const LifebuoyLineIcon: IconType;
export { LifebuoyLineIcon }
export { LifebuoyLineIcon as LifebuoyLineIcon_alias_1 }

/**
 * The react component for the `lightbulb-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lightbulb Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/lightbulb-fill.svg)
 */
declare const LightbulbFillIcon: IconType;
export { LightbulbFillIcon }
export { LightbulbFillIcon as LightbulbFillIcon_alias_1 }

/**
 * The react component for the `lightbulb-flash-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lightbulb Flash Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/lightbulb-flash-fill.svg)
 */
declare const LightbulbFlashFillIcon: IconType;
export { LightbulbFlashFillIcon }
export { LightbulbFlashFillIcon as LightbulbFlashFillIcon_alias_1 }

/**
 * The react component for the `lightbulb-flash-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lightbulb Flash Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/lightbulb-flash-line.svg)
 */
declare const LightbulbFlashLineIcon: IconType;
export { LightbulbFlashLineIcon }
export { LightbulbFlashLineIcon as LightbulbFlashLineIcon_alias_1 }

/**
 * The react component for the `lightbulb-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lightbulb Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/lightbulb-line.svg)
 */
declare const LightbulbLineIcon: IconType;
export { LightbulbLineIcon }
export { LightbulbLineIcon as LightbulbLineIcon_alias_1 }

/**
 * The react component for the `line-chart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Line Chart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/line-chart-fill.svg)
 */
declare const LineChartFillIcon: IconType;
export { LineChartFillIcon }
export { LineChartFillIcon as LineChartFillIcon_alias_1 }

/**
 * The react component for the `line-chart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Line Chart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/line-chart-line.svg)
 */
declare const LineChartLineIcon: IconType;
export { LineChartLineIcon }
export { LineChartLineIcon as LineChartLineIcon_alias_1 }

/**
 * The react component for the `line-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Line Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/line-fill.svg)
 */
declare const LineFillIcon: IconType;
export { LineFillIcon }
export { LineFillIcon as LineFillIcon_alias_1 }

/**
 * The react component for the `line-height.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Line Height Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/line-height.svg)
 */
declare const LineHeightIcon: IconType;
export { LineHeightIcon }
export { LineHeightIcon as LineHeightIcon_alias_1 }
export { LineHeightIcon as LineHeightIcon_alias_2 }

/**
 * The react component for the `line-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Line Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/line-line.svg)
 */
declare const LineLineIcon: IconType;
export { LineLineIcon }
export { LineLineIcon as LineLineIcon_alias_1 }

/**
 * The react component for the `linkedin-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Linkedin Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/linkedin-box-fill.svg)
 */
declare const LinkedinBoxFillIcon: IconType;
export { LinkedinBoxFillIcon }
export { LinkedinBoxFillIcon as LinkedinBoxFillIcon_alias_1 }

/**
 * The react component for the `linkedin-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Linkedin Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/linkedin-box-line.svg)
 */
declare const LinkedinBoxLineIcon: IconType;
export { LinkedinBoxLineIcon }
export { LinkedinBoxLineIcon as LinkedinBoxLineIcon_alias_1 }

/**
 * The react component for the `linkedin-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Linkedin Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/linkedin-fill.svg)
 */
declare const LinkedinFillIcon: IconType;
export { LinkedinFillIcon }
export { LinkedinFillIcon as LinkedinFillIcon_alias_1 }

/**
 * The react component for the `linkedin-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Linkedin Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/linkedin-line.svg)
 */
declare const LinkedinLineIcon: IconType;
export { LinkedinLineIcon }
export { LinkedinLineIcon as LinkedinLineIcon_alias_1 }

/**
 * The react component for the `link.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Link Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/link.svg)
 */
declare const LinkIcon: IconType;
export { LinkIcon }
export { LinkIcon as LinkIcon_alias_1 }
export { LinkIcon as LinkIcon_alias_2 }

/**
 * The react component for the `link-m.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Link M Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/link-m.svg)
 */
declare const LinkMIcon: IconType;
export { LinkMIcon }
export { LinkMIcon as LinkMIcon_alias_1 }
export { LinkMIcon as LinkMIcon_alias_2 }

/**
 * The react component for the `links-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Links Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/links-fill.svg)
 */
declare const LinksFillIcon: IconType;
export { LinksFillIcon }
export { LinksFillIcon as LinksFillIcon_alias_1 }

/**
 * The react component for the `links-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Links Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/links-line.svg)
 */
declare const LinksLineIcon: IconType;
export { LinksLineIcon }
export { LinksLineIcon as LinksLineIcon_alias_1 }

/**
 * The react component for the `link-unlink.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Link Unlink Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/link-unlink.svg)
 */
declare const LinkUnlinkIcon: IconType;
export { LinkUnlinkIcon }
export { LinkUnlinkIcon as LinkUnlinkIcon_alias_1 }
export { LinkUnlinkIcon as LinkUnlinkIcon_alias_2 }

/**
 * The react component for the `link-unlink-m.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Link Unlink M Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/link-unlink-m.svg)
 */
declare const LinkUnlinkMIcon: IconType;
export { LinkUnlinkMIcon }
export { LinkUnlinkMIcon as LinkUnlinkMIcon_alias_1 }
export { LinkUnlinkMIcon as LinkUnlinkMIcon_alias_2 }

/**
 * The react component for the `list-check-2.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![List Check 2 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/list-check-2.svg)
 */
declare const ListCheck2Icon: IconType;
export { ListCheck2Icon }
export { ListCheck2Icon as ListCheck2Icon_alias_1 }
export { ListCheck2Icon as ListCheck2Icon_alias_2 }

/**
 * The react component for the `list-check.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![List Check Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/list-check.svg)
 */
declare const ListCheckIcon: IconType;
export { ListCheckIcon }
export { ListCheckIcon as ListCheckIcon_alias_1 }
export { ListCheckIcon as ListCheckIcon_alias_2 }

/**
 * The react component for the `list-ordered.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![List Ordered Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/list-ordered.svg)
 */
declare const ListOrderedIcon: IconType;
export { ListOrderedIcon }
export { ListOrderedIcon as ListOrderedIcon_alias_1 }
export { ListOrderedIcon as ListOrderedIcon_alias_2 }

/**
 * The react component for the `list-settings-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![List Settings Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/list-settings-fill.svg)
 */
declare const ListSettingsFillIcon: IconType;
export { ListSettingsFillIcon }
export { ListSettingsFillIcon as ListSettingsFillIcon_alias_1 }

/**
 * The react component for the `list-settings-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![List Settings Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/list-settings-line.svg)
 */
declare const ListSettingsLineIcon: IconType;
export { ListSettingsLineIcon }
export { ListSettingsLineIcon as ListSettingsLineIcon_alias_1 }

/**
 * The react component for the `list-unordered.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![List Unordered Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/list-unordered.svg)
 */
declare const ListUnorderedIcon: IconType;
export { ListUnorderedIcon }
export { ListUnorderedIcon as ListUnorderedIcon_alias_1 }
export { ListUnorderedIcon as ListUnorderedIcon_alias_2 }

/**
 * The react component for the `live-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Live Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/live-fill.svg)
 */
declare const LiveFillIcon: IconType;
export { LiveFillIcon }
export { LiveFillIcon as LiveFillIcon_alias_1 }

/**
 * The react component for the `live-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Live Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/live-line.svg)
 */
declare const LiveLineIcon: IconType;
export { LiveLineIcon }
export { LiveLineIcon as LiveLineIcon_alias_1 }

/**
 * The react component for the `loader-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Loader 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/loader-2-fill.svg)
 */
declare const Loader2FillIcon: IconType;
export { Loader2FillIcon }
export { Loader2FillIcon as Loader2FillIcon_alias_1 }

/**
 * The react component for the `loader-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Loader 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/loader-2-line.svg)
 */
declare const Loader2LineIcon: IconType;
export { Loader2LineIcon }
export { Loader2LineIcon as Loader2LineIcon_alias_1 }

/**
 * The react component for the `loader-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Loader 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/loader-3-fill.svg)
 */
declare const Loader3FillIcon: IconType;
export { Loader3FillIcon }
export { Loader3FillIcon as Loader3FillIcon_alias_1 }

/**
 * The react component for the `loader-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Loader 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/loader-3-line.svg)
 */
declare const Loader3LineIcon: IconType;
export { Loader3LineIcon }
export { Loader3LineIcon as Loader3LineIcon_alias_1 }

/**
 * The react component for the `loader-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Loader 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/loader-4-fill.svg)
 */
declare const Loader4FillIcon: IconType;
export { Loader4FillIcon }
export { Loader4FillIcon as Loader4FillIcon_alias_1 }

/**
 * The react component for the `loader-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Loader 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/loader-4-line.svg)
 */
declare const Loader4LineIcon: IconType;
export { Loader4LineIcon }
export { Loader4LineIcon as Loader4LineIcon_alias_1 }

/**
 * The react component for the `loader-5-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Loader 5 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/loader-5-fill.svg)
 */
declare const Loader5FillIcon: IconType;
export { Loader5FillIcon }
export { Loader5FillIcon as Loader5FillIcon_alias_1 }

/**
 * The react component for the `loader-5-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Loader 5 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/loader-5-line.svg)
 */
declare const Loader5LineIcon: IconType;
export { Loader5LineIcon }
export { Loader5LineIcon as Loader5LineIcon_alias_1 }

/**
 * The react component for the `loader-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Loader Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/loader-fill.svg)
 */
declare const LoaderFillIcon: IconType;
export { LoaderFillIcon }
export { LoaderFillIcon as LoaderFillIcon_alias_1 }

/**
 * The react component for the `loader-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Loader Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/loader-line.svg)
 */
declare const LoaderLineIcon: IconType;
export { LoaderLineIcon }
export { LoaderLineIcon as LoaderLineIcon_alias_1 }

/**
 * The react component for the `lock-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lock 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/lock-2-fill.svg)
 */
declare const Lock2FillIcon: IconType;
export { Lock2FillIcon }
export { Lock2FillIcon as Lock2FillIcon_alias_1 }

/**
 * The react component for the `lock-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lock 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/lock-2-line.svg)
 */
declare const Lock2LineIcon: IconType;
export { Lock2LineIcon }
export { Lock2LineIcon as Lock2LineIcon_alias_1 }

/**
 * The react component for the `lock-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lock Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/lock-fill.svg)
 */
declare const LockFillIcon: IconType;
export { LockFillIcon }
export { LockFillIcon as LockFillIcon_alias_1 }

/**
 * The react component for the `lock-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lock Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/lock-line.svg)
 */
declare const LockLineIcon: IconType;
export { LockLineIcon }
export { LockLineIcon as LockLineIcon_alias_1 }

/**
 * The react component for the `lock-password-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lock Password Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/lock-password-fill.svg)
 */
declare const LockPasswordFillIcon: IconType;
export { LockPasswordFillIcon }
export { LockPasswordFillIcon as LockPasswordFillIcon_alias_1 }

/**
 * The react component for the `lock-password-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lock Password Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/lock-password-line.svg)
 */
declare const LockPasswordLineIcon: IconType;
export { LockPasswordLineIcon }
export { LockPasswordLineIcon as LockPasswordLineIcon_alias_1 }

/**
 * The react component for the `lock-unlock-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lock Unlock Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/lock-unlock-fill.svg)
 */
declare const LockUnlockFillIcon: IconType;
export { LockUnlockFillIcon }
export { LockUnlockFillIcon as LockUnlockFillIcon_alias_1 }

/**
 * The react component for the `lock-unlock-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lock Unlock Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/lock-unlock-line.svg)
 */
declare const LockUnlockLineIcon: IconType;
export { LockUnlockLineIcon }
export { LockUnlockLineIcon as LockUnlockLineIcon_alias_1 }

/**
 * The react component for the `login-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Login Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/login-box-fill.svg)
 */
declare const LoginBoxFillIcon: IconType;
export { LoginBoxFillIcon }
export { LoginBoxFillIcon as LoginBoxFillIcon_alias_1 }

/**
 * The react component for the `login-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Login Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/login-box-line.svg)
 */
declare const LoginBoxLineIcon: IconType;
export { LoginBoxLineIcon }
export { LoginBoxLineIcon as LoginBoxLineIcon_alias_1 }

/**
 * The react component for the `login-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Login Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/login-circle-fill.svg)
 */
declare const LoginCircleFillIcon: IconType;
export { LoginCircleFillIcon }
export { LoginCircleFillIcon as LoginCircleFillIcon_alias_1 }

/**
 * The react component for the `login-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Login Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/login-circle-line.svg)
 */
declare const LoginCircleLineIcon: IconType;
export { LoginCircleLineIcon }
export { LoginCircleLineIcon as LoginCircleLineIcon_alias_1 }

/**
 * The react component for the `logout-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Logout Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/logout-box-fill.svg)
 */
declare const LogoutBoxFillIcon: IconType;
export { LogoutBoxFillIcon }
export { LogoutBoxFillIcon as LogoutBoxFillIcon_alias_1 }

/**
 * The react component for the `logout-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Logout Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/logout-box-line.svg)
 */
declare const LogoutBoxLineIcon: IconType;
export { LogoutBoxLineIcon }
export { LogoutBoxLineIcon as LogoutBoxLineIcon_alias_1 }

/**
 * The react component for the `logout-box-r-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Logout Box R Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/logout-box-r-fill.svg)
 */
declare const LogoutBoxRFillIcon: IconType;
export { LogoutBoxRFillIcon }
export { LogoutBoxRFillIcon as LogoutBoxRFillIcon_alias_1 }

/**
 * The react component for the `logout-box-r-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Logout Box R Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/logout-box-r-line.svg)
 */
declare const LogoutBoxRLineIcon: IconType;
export { LogoutBoxRLineIcon }
export { LogoutBoxRLineIcon as LogoutBoxRLineIcon_alias_1 }

/**
 * The react component for the `logout-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Logout Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/logout-circle-fill.svg)
 */
declare const LogoutCircleFillIcon: IconType;
export { LogoutCircleFillIcon }
export { LogoutCircleFillIcon as LogoutCircleFillIcon_alias_1 }

/**
 * The react component for the `logout-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Logout Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/logout-circle-line.svg)
 */
declare const LogoutCircleLineIcon: IconType;
export { LogoutCircleLineIcon }
export { LogoutCircleLineIcon as LogoutCircleLineIcon_alias_1 }

/**
 * The react component for the `logout-circle-r-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Logout Circle R Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/logout-circle-r-fill.svg)
 */
declare const LogoutCircleRFillIcon: IconType;
export { LogoutCircleRFillIcon }
export { LogoutCircleRFillIcon as LogoutCircleRFillIcon_alias_1 }

/**
 * The react component for the `logout-circle-r-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Logout Circle R Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/logout-circle-r-line.svg)
 */
declare const LogoutCircleRLineIcon: IconType;
export { LogoutCircleRLineIcon }
export { LogoutCircleRLineIcon as LogoutCircleRLineIcon_alias_1 }

/**
 * The react component for the `luggage-cart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Luggage Cart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/luggage-cart-fill.svg)
 */
declare const LuggageCartFillIcon: IconType;
export { LuggageCartFillIcon }
export { LuggageCartFillIcon as LuggageCartFillIcon_alias_1 }

/**
 * The react component for the `luggage-cart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Luggage Cart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/luggage-cart-line.svg)
 */
declare const LuggageCartLineIcon: IconType;
export { LuggageCartLineIcon }
export { LuggageCartLineIcon as LuggageCartLineIcon_alias_1 }

/**
 * The react component for the `luggage-deposit-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Luggage Deposit Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/luggage-deposit-fill.svg)
 */
declare const LuggageDepositFillIcon: IconType;
export { LuggageDepositFillIcon }
export { LuggageDepositFillIcon as LuggageDepositFillIcon_alias_1 }

/**
 * The react component for the `luggage-deposit-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Luggage Deposit Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/luggage-deposit-line.svg)
 */
declare const LuggageDepositLineIcon: IconType;
export { LuggageDepositLineIcon }
export { LuggageDepositLineIcon as LuggageDepositLineIcon_alias_1 }

/**
 * The react component for the `lungs-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lungs Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/lungs-fill.svg)
 */
declare const LungsFillIcon: IconType;
export { LungsFillIcon }
export { LungsFillIcon as LungsFillIcon_alias_1 }

/**
 * The react component for the `lungs-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Lungs Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/lungs-line.svg)
 */
declare const LungsLineIcon: IconType;
export { LungsLineIcon }
export { LungsLineIcon as LungsLineIcon_alias_1 }

/**
 * The react component for the `macbook-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Macbook Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/macbook-fill.svg)
 */
declare const MacbookFillIcon: IconType;
export { MacbookFillIcon }
export { MacbookFillIcon as MacbookFillIcon_alias_1 }

/**
 * The react component for the `macbook-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Macbook Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/macbook-line.svg)
 */
declare const MacbookLineIcon: IconType;
export { MacbookLineIcon }
export { MacbookLineIcon as MacbookLineIcon_alias_1 }

/**
 * The react component for the `mac-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mac Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/mac-fill.svg)
 */
declare const MacFillIcon: IconType;
export { MacFillIcon }
export { MacFillIcon as MacFillIcon_alias_1 }

/**
 * The react component for the `mac-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mac Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/mac-line.svg)
 */
declare const MacLineIcon: IconType;
export { MacLineIcon }
export { MacLineIcon as MacLineIcon_alias_1 }

/**
 * The react component for the `magic-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Magic Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/magic-fill.svg)
 */
declare const MagicFillIcon: IconType;
export { MagicFillIcon }
export { MagicFillIcon as MagicFillIcon_alias_1 }

/**
 * The react component for the `magic-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Magic Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/magic-line.svg)
 */
declare const MagicLineIcon: IconType;
export { MagicLineIcon }
export { MagicLineIcon as MagicLineIcon_alias_1 }

/**
 * The react component for the `mail-add-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Add Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-add-fill.svg)
 */
declare const MailAddFillIcon: IconType;
export { MailAddFillIcon }
export { MailAddFillIcon as MailAddFillIcon_alias_1 }

/**
 * The react component for the `mail-add-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Add Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-add-line.svg)
 */
declare const MailAddLineIcon: IconType;
export { MailAddLineIcon }
export { MailAddLineIcon as MailAddLineIcon_alias_1 }

/**
 * The react component for the `mail-check-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Check Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-check-fill.svg)
 */
declare const MailCheckFillIcon: IconType;
export { MailCheckFillIcon }
export { MailCheckFillIcon as MailCheckFillIcon_alias_1 }

/**
 * The react component for the `mail-check-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Check Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-check-line.svg)
 */
declare const MailCheckLineIcon: IconType;
export { MailCheckLineIcon }
export { MailCheckLineIcon as MailCheckLineIcon_alias_1 }

/**
 * The react component for the `mail-close-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Close Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-close-fill.svg)
 */
declare const MailCloseFillIcon: IconType;
export { MailCloseFillIcon }
export { MailCloseFillIcon as MailCloseFillIcon_alias_1 }

/**
 * The react component for the `mail-close-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Close Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-close-line.svg)
 */
declare const MailCloseLineIcon: IconType;
export { MailCloseLineIcon }
export { MailCloseLineIcon as MailCloseLineIcon_alias_1 }

/**
 * The react component for the `mail-download-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Download Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-download-fill.svg)
 */
declare const MailDownloadFillIcon: IconType;
export { MailDownloadFillIcon }
export { MailDownloadFillIcon as MailDownloadFillIcon_alias_1 }

/**
 * The react component for the `mail-download-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Download Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-download-line.svg)
 */
declare const MailDownloadLineIcon: IconType;
export { MailDownloadLineIcon }
export { MailDownloadLineIcon as MailDownloadLineIcon_alias_1 }

/**
 * The react component for the `mail-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-fill.svg)
 */
declare const MailFillIcon: IconType;
export { MailFillIcon }
export { MailFillIcon as MailFillIcon_alias_1 }

/**
 * The react component for the `mail-forbid-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Forbid Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-forbid-fill.svg)
 */
declare const MailForbidFillIcon: IconType;
export { MailForbidFillIcon }
export { MailForbidFillIcon as MailForbidFillIcon_alias_1 }

/**
 * The react component for the `mail-forbid-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Forbid Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-forbid-line.svg)
 */
declare const MailForbidLineIcon: IconType;
export { MailForbidLineIcon }
export { MailForbidLineIcon as MailForbidLineIcon_alias_1 }

/**
 * The react component for the `mail-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-line.svg)
 */
declare const MailLineIcon: IconType;
export { MailLineIcon }
export { MailLineIcon as MailLineIcon_alias_1 }

/**
 * The react component for the `mail-lock-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Lock Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-lock-fill.svg)
 */
declare const MailLockFillIcon: IconType;
export { MailLockFillIcon }
export { MailLockFillIcon as MailLockFillIcon_alias_1 }

/**
 * The react component for the `mail-lock-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Lock Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-lock-line.svg)
 */
declare const MailLockLineIcon: IconType;
export { MailLockLineIcon }
export { MailLockLineIcon as MailLockLineIcon_alias_1 }

/**
 * The react component for the `mail-open-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Open Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-open-fill.svg)
 */
declare const MailOpenFillIcon: IconType;
export { MailOpenFillIcon }
export { MailOpenFillIcon as MailOpenFillIcon_alias_1 }

/**
 * The react component for the `mail-open-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Open Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-open-line.svg)
 */
declare const MailOpenLineIcon: IconType;
export { MailOpenLineIcon }
export { MailOpenLineIcon as MailOpenLineIcon_alias_1 }

/**
 * The react component for the `mail-send-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Send Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-send-fill.svg)
 */
declare const MailSendFillIcon: IconType;
export { MailSendFillIcon }
export { MailSendFillIcon as MailSendFillIcon_alias_1 }

/**
 * The react component for the `mail-send-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Send Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-send-line.svg)
 */
declare const MailSendLineIcon: IconType;
export { MailSendLineIcon }
export { MailSendLineIcon as MailSendLineIcon_alias_1 }

/**
 * The react component for the `mail-settings-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Settings Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-settings-fill.svg)
 */
declare const MailSettingsFillIcon: IconType;
export { MailSettingsFillIcon }
export { MailSettingsFillIcon as MailSettingsFillIcon_alias_1 }

/**
 * The react component for the `mail-settings-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Settings Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-settings-line.svg)
 */
declare const MailSettingsLineIcon: IconType;
export { MailSettingsLineIcon }
export { MailSettingsLineIcon as MailSettingsLineIcon_alias_1 }

/**
 * The react component for the `mail-star-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Star Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-star-fill.svg)
 */
declare const MailStarFillIcon: IconType;
export { MailStarFillIcon }
export { MailStarFillIcon as MailStarFillIcon_alias_1 }

/**
 * The react component for the `mail-star-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Star Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-star-line.svg)
 */
declare const MailStarLineIcon: IconType;
export { MailStarLineIcon }
export { MailStarLineIcon as MailStarLineIcon_alias_1 }

/**
 * The react component for the `mail-unread-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Unread Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-unread-fill.svg)
 */
declare const MailUnreadFillIcon: IconType;
export { MailUnreadFillIcon }
export { MailUnreadFillIcon as MailUnreadFillIcon_alias_1 }

/**
 * The react component for the `mail-unread-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Unread Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-unread-line.svg)
 */
declare const MailUnreadLineIcon: IconType;
export { MailUnreadLineIcon }
export { MailUnreadLineIcon as MailUnreadLineIcon_alias_1 }

/**
 * The react component for the `mail-volume-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Volume Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-volume-fill.svg)
 */
declare const MailVolumeFillIcon: IconType;
export { MailVolumeFillIcon }
export { MailVolumeFillIcon as MailVolumeFillIcon_alias_1 }

/**
 * The react component for the `mail-volume-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mail Volume Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/mail-volume-line.svg)
 */
declare const MailVolumeLineIcon: IconType;
export { MailVolumeLineIcon }
export { MailVolumeLineIcon as MailVolumeLineIcon_alias_1 }

/**
 * The react component for the `map-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-2-fill.svg)
 */
declare const Map2FillIcon: IconType;
export { Map2FillIcon }
export { Map2FillIcon as Map2FillIcon_alias_1 }

/**
 * The react component for the `map-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-2-line.svg)
 */
declare const Map2LineIcon: IconType;
export { Map2LineIcon }
export { Map2LineIcon as Map2LineIcon_alias_1 }

/**
 * The react component for the `map-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-fill.svg)
 */
declare const MapFillIcon: IconType;
export { MapFillIcon }
export { MapFillIcon as MapFillIcon_alias_1 }

/**
 * The react component for the `map-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-line.svg)
 */
declare const MapLineIcon: IconType;
export { MapLineIcon }
export { MapLineIcon as MapLineIcon_alias_1 }

/**
 * The react component for the `map-pin-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-2-fill.svg)
 */
declare const MapPin2FillIcon: IconType;
export { MapPin2FillIcon }
export { MapPin2FillIcon as MapPin2FillIcon_alias_1 }

/**
 * The react component for the `map-pin-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-2-line.svg)
 */
declare const MapPin2LineIcon: IconType;
export { MapPin2LineIcon }
export { MapPin2LineIcon as MapPin2LineIcon_alias_1 }

/**
 * The react component for the `map-pin-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-3-fill.svg)
 */
declare const MapPin3FillIcon: IconType;
export { MapPin3FillIcon }
export { MapPin3FillIcon as MapPin3FillIcon_alias_1 }

/**
 * The react component for the `map-pin-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-3-line.svg)
 */
declare const MapPin3LineIcon: IconType;
export { MapPin3LineIcon }
export { MapPin3LineIcon as MapPin3LineIcon_alias_1 }

/**
 * The react component for the `map-pin-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-4-fill.svg)
 */
declare const MapPin4FillIcon: IconType;
export { MapPin4FillIcon }
export { MapPin4FillIcon as MapPin4FillIcon_alias_1 }

/**
 * The react component for the `map-pin-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-4-line.svg)
 */
declare const MapPin4LineIcon: IconType;
export { MapPin4LineIcon }
export { MapPin4LineIcon as MapPin4LineIcon_alias_1 }

/**
 * The react component for the `map-pin-5-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin 5 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-5-fill.svg)
 */
declare const MapPin5FillIcon: IconType;
export { MapPin5FillIcon }
export { MapPin5FillIcon as MapPin5FillIcon_alias_1 }

/**
 * The react component for the `map-pin-5-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin 5 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-5-line.svg)
 */
declare const MapPin5LineIcon: IconType;
export { MapPin5LineIcon }
export { MapPin5LineIcon as MapPin5LineIcon_alias_1 }

/**
 * The react component for the `map-pin-add-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin Add Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-add-fill.svg)
 */
declare const MapPinAddFillIcon: IconType;
export { MapPinAddFillIcon }
export { MapPinAddFillIcon as MapPinAddFillIcon_alias_1 }

/**
 * The react component for the `map-pin-add-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin Add Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-add-line.svg)
 */
declare const MapPinAddLineIcon: IconType;
export { MapPinAddLineIcon }
export { MapPinAddLineIcon as MapPinAddLineIcon_alias_1 }

/**
 * The react component for the `map-pin-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-fill.svg)
 */
declare const MapPinFillIcon: IconType;
export { MapPinFillIcon }
export { MapPinFillIcon as MapPinFillIcon_alias_1 }

/**
 * The react component for the `map-pin-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-line.svg)
 */
declare const MapPinLineIcon: IconType;
export { MapPinLineIcon }
export { MapPinLineIcon as MapPinLineIcon_alias_1 }

/**
 * The react component for the `map-pin-range-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin Range Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-range-fill.svg)
 */
declare const MapPinRangeFillIcon: IconType;
export { MapPinRangeFillIcon }
export { MapPinRangeFillIcon as MapPinRangeFillIcon_alias_1 }

/**
 * The react component for the `map-pin-range-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin Range Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-range-line.svg)
 */
declare const MapPinRangeLineIcon: IconType;
export { MapPinRangeLineIcon }
export { MapPinRangeLineIcon as MapPinRangeLineIcon_alias_1 }

/**
 * The react component for the `map-pin-time-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin Time Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-time-fill.svg)
 */
declare const MapPinTimeFillIcon: IconType;
export { MapPinTimeFillIcon }
export { MapPinTimeFillIcon as MapPinTimeFillIcon_alias_1 }

/**
 * The react component for the `map-pin-time-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin Time Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-time-line.svg)
 */
declare const MapPinTimeLineIcon: IconType;
export { MapPinTimeLineIcon }
export { MapPinTimeLineIcon as MapPinTimeLineIcon_alias_1 }

/**
 * The react component for the `map-pin-user-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin User Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-user-fill.svg)
 */
declare const MapPinUserFillIcon: IconType;
export { MapPinUserFillIcon }
export { MapPinUserFillIcon as MapPinUserFillIcon_alias_1 }

/**
 * The react component for the `map-pin-user-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Map Pin User Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/map-pin-user-line.svg)
 */
declare const MapPinUserLineIcon: IconType;
export { MapPinUserLineIcon }
export { MapPinUserLineIcon as MapPinUserLineIcon_alias_1 }

/**
 * The react component for the `markdown-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Markdown Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/markdown-fill.svg)
 */
declare const MarkdownFillIcon: IconType;
export { MarkdownFillIcon }
export { MarkdownFillIcon as MarkdownFillIcon_alias_1 }
export { MarkdownFillIcon as MarkdownFillIcon_alias_2 }

/**
 * The react component for the `markdown-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Markdown Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/markdown-line.svg)
 */
declare const MarkdownLineIcon: IconType;
export { MarkdownLineIcon }
export { MarkdownLineIcon as MarkdownLineIcon_alias_1 }
export { MarkdownLineIcon as MarkdownLineIcon_alias_2 }

/**
 * The react component for the `mark-pen-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mark Pen Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/mark-pen-fill.svg)
 */
declare const MarkPenFillIcon: IconType;
export { MarkPenFillIcon }
export { MarkPenFillIcon as MarkPenFillIcon_alias_1 }

/**
 * The react component for the `mark-pen-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mark Pen Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/mark-pen-line.svg)
 */
declare const MarkPenLineIcon: IconType;
export { MarkPenLineIcon }
export { MarkPenLineIcon as MarkPenLineIcon_alias_1 }
export { MarkPenLineIcon as MarkPenLineIcon_alias_2 }

/**
 * The react component for the `markup-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Markup Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/markup-fill.svg)
 */
declare const MarkupFillIcon: IconType;
export { MarkupFillIcon }
export { MarkupFillIcon as MarkupFillIcon_alias_1 }

/**
 * The react component for the `markup-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Markup Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/markup-line.svg)
 */
declare const MarkupLineIcon: IconType;
export { MarkupLineIcon }
export { MarkupLineIcon as MarkupLineIcon_alias_1 }

/**
 * The react component for the `mastercard-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mastercard Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/mastercard-fill.svg)
 */
declare const MastercardFillIcon: IconType;
export { MastercardFillIcon }
export { MastercardFillIcon as MastercardFillIcon_alias_1 }

/**
 * The react component for the `mastercard-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mastercard Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/mastercard-line.svg)
 */
declare const MastercardLineIcon: IconType;
export { MastercardLineIcon }
export { MastercardLineIcon as MastercardLineIcon_alias_1 }

/**
 * The react component for the `mastodon-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mastodon Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/mastodon-fill.svg)
 */
declare const MastodonFillIcon: IconType;
export { MastodonFillIcon }
export { MastodonFillIcon as MastodonFillIcon_alias_1 }

/**
 * The react component for the `mastodon-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mastodon Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/mastodon-line.svg)
 */
declare const MastodonLineIcon: IconType;
export { MastodonLineIcon }
export { MastodonLineIcon as MastodonLineIcon_alias_1 }

/**
 * The react component for the `medal-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Medal 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/medal-2-fill.svg)
 */
declare const Medal2FillIcon: IconType;
export { Medal2FillIcon }
export { Medal2FillIcon as Medal2FillIcon_alias_1 }

/**
 * The react component for the `medal-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Medal 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/medal-2-line.svg)
 */
declare const Medal2LineIcon: IconType;
export { Medal2LineIcon }
export { Medal2LineIcon as Medal2LineIcon_alias_1 }

/**
 * The react component for the `medal-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Medal Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/medal-fill.svg)
 */
declare const MedalFillIcon: IconType;
export { MedalFillIcon }
export { MedalFillIcon as MedalFillIcon_alias_1 }

/**
 * The react component for the `medal-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Medal Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/medal-line.svg)
 */
declare const MedalLineIcon: IconType;
export { MedalLineIcon }
export { MedalLineIcon as MedalLineIcon_alias_1 }

/**
 * The react component for the `medicine-bottle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Medicine Bottle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/medicine-bottle-fill.svg)
 */
declare const MedicineBottleFillIcon: IconType;
export { MedicineBottleFillIcon }
export { MedicineBottleFillIcon as MedicineBottleFillIcon_alias_1 }

/**
 * The react component for the `medicine-bottle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Medicine Bottle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/medicine-bottle-line.svg)
 */
declare const MedicineBottleLineIcon: IconType;
export { MedicineBottleLineIcon }
export { MedicineBottleLineIcon as MedicineBottleLineIcon_alias_1 }

/**
 * The react component for the `medium-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Medium Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/medium-fill.svg)
 */
declare const MediumFillIcon: IconType;
export { MediumFillIcon }
export { MediumFillIcon as MediumFillIcon_alias_1 }

/**
 * The react component for the `medium-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Medium Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/medium-line.svg)
 */
declare const MediumLineIcon: IconType;
export { MediumLineIcon }
export { MediumLineIcon as MediumLineIcon_alias_1 }

/**
 * The react component for the `men-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Men Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/men-fill.svg)
 */
declare const MenFillIcon: IconType;
export { MenFillIcon }
export { MenFillIcon as MenFillIcon_alias_1 }

/**
 * The react component for the `men-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Men Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/men-line.svg)
 */
declare const MenLineIcon: IconType;
export { MenLineIcon }
export { MenLineIcon as MenLineIcon_alias_1 }

/**
 * The react component for the `mental-health-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mental Health Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/mental-health-fill.svg)
 */
declare const MentalHealthFillIcon: IconType;
export { MentalHealthFillIcon }
export { MentalHealthFillIcon as MentalHealthFillIcon_alias_1 }

/**
 * The react component for the `mental-health-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mental Health Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/mental-health-line.svg)
 */
declare const MentalHealthLineIcon: IconType;
export { MentalHealthLineIcon }
export { MentalHealthLineIcon as MentalHealthLineIcon_alias_1 }

/**
 * This component renders the emoji suggestion dropdown for the user.
 */
declare function MentionAtomPopupComponent<Data extends MentionAtomNodeAttributes = MentionAtomNodeAttributes>(props: MentionAtomPopupComponentProps<Data>): JSX.Element;
export { MentionAtomPopupComponent }
export { MentionAtomPopupComponent as MentionAtomPopupComponent_alias_1 }
export { MentionAtomPopupComponent as MentionAtomPopupComponent_alias_2 }

declare interface MentionAtomPopupComponentProps<Data extends MentionAtomNodeAttributes = MentionAtomNodeAttributes> extends UseMentionAtomProps<Data> {
    /**
     * Called whenever the query state changes.
     */
    onChange: (mentionAtomState: MentionAtomState<Data> | null) => void;
    /**
     * The component to be used for rendering each item.
     */
    ItemComponent?: ComponentType<MentionAtomPopupItemComponentProps<Data>>;
    /**
     * The message that is displayed when there are no items to display.
     */
    ZeroItemsComponent?: ComponentType<object>;
}

declare interface MentionAtomPopupItemComponentProps<Data extends MentionAtomNodeAttributes = MentionAtomNodeAttributes> {
    item: Data;
    state: UseMentionAtomReturn<Data>['state'];
}

/**
 * The react component for the `menu-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-2-fill.svg)
 */
declare const Menu2FillIcon: IconType;
export { Menu2FillIcon }
export { Menu2FillIcon as Menu2FillIcon_alias_1 }

/**
 * The react component for the `menu-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-2-line.svg)
 */
declare const Menu2LineIcon: IconType;
export { Menu2LineIcon }
export { Menu2LineIcon as Menu2LineIcon_alias_1 }

/**
 * The react component for the `menu-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-3-fill.svg)
 */
declare const Menu3FillIcon: IconType;
export { Menu3FillIcon }
export { Menu3FillIcon as Menu3FillIcon_alias_1 }

/**
 * The react component for the `menu-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-3-line.svg)
 */
declare const Menu3LineIcon: IconType;
export { Menu3LineIcon }
export { Menu3LineIcon as Menu3LineIcon_alias_1 }

/**
 * The react component for the `menu-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-4-fill.svg)
 */
declare const Menu4FillIcon: IconType;
export { Menu4FillIcon }
export { Menu4FillIcon as Menu4FillIcon_alias_1 }

/**
 * The react component for the `menu-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-4-line.svg)
 */
declare const Menu4LineIcon: IconType;
export { Menu4LineIcon }
export { Menu4LineIcon as Menu4LineIcon_alias_1 }

/**
 * The react component for the `menu-5-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu 5 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-5-fill.svg)
 */
declare const Menu5FillIcon: IconType;
export { Menu5FillIcon }
export { Menu5FillIcon as Menu5FillIcon_alias_1 }

/**
 * The react component for the `menu-5-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu 5 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-5-line.svg)
 */
declare const Menu5LineIcon: IconType;
export { Menu5LineIcon }
export { Menu5LineIcon as Menu5LineIcon_alias_1 }

/**
 * The react component for the `menu-add-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu Add Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-add-fill.svg)
 */
declare const MenuAddFillIcon: IconType;
export { MenuAddFillIcon }
export { MenuAddFillIcon as MenuAddFillIcon_alias_1 }

/**
 * The react component for the `menu-add-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu Add Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-add-line.svg)
 */
declare const MenuAddLineIcon: IconType;
export { MenuAddLineIcon }
export { MenuAddLineIcon as MenuAddLineIcon_alias_1 }

/**
 * The react component for the `menu-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-fill.svg)
 */
declare const MenuFillIcon: IconType;
export { MenuFillIcon }
export { MenuFillIcon as MenuFillIcon_alias_1 }

/**
 * The react component for the `menu-fold-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu Fold Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-fold-fill.svg)
 */
declare const MenuFoldFillIcon: IconType;
export { MenuFoldFillIcon }
export { MenuFoldFillIcon as MenuFoldFillIcon_alias_1 }

/**
 * The react component for the `menu-fold-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu Fold Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-fold-line.svg)
 */
declare const MenuFoldLineIcon: IconType;
export { MenuFoldLineIcon }
export { MenuFoldLineIcon as MenuFoldLineIcon_alias_1 }

/**
 * The react component for the `menu-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-line.svg)
 */
declare const MenuLineIcon: IconType;
export { MenuLineIcon }
export { MenuLineIcon as MenuLineIcon_alias_1 }

/**
 * The react component for the `menu-unfold-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu Unfold Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-unfold-fill.svg)
 */
declare const MenuUnfoldFillIcon: IconType;
export { MenuUnfoldFillIcon }
export { MenuUnfoldFillIcon as MenuUnfoldFillIcon_alias_1 }

/**
 * The react component for the `menu-unfold-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Menu Unfold Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/menu-unfold-line.svg)
 */
declare const MenuUnfoldLineIcon: IconType;
export { MenuUnfoldLineIcon }
export { MenuUnfoldLineIcon as MenuUnfoldLineIcon_alias_1 }

/**
 * The react component for the `merge-cells-horizontal.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Merge Cells Horizontal Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/merge-cells-horizontal.svg)
 */
declare const MergeCellsHorizontalIcon: IconType;
export { MergeCellsHorizontalIcon }
export { MergeCellsHorizontalIcon as MergeCellsHorizontalIcon_alias_1 }
export { MergeCellsHorizontalIcon as MergeCellsHorizontalIcon_alias_2 }

/**
 * The react component for the `merge-cells-vertical.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Merge Cells Vertical Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/merge-cells-vertical.svg)
 */
declare const MergeCellsVerticalIcon: IconType;
export { MergeCellsVerticalIcon }
export { MergeCellsVerticalIcon as MergeCellsVerticalIcon_alias_1 }
export { MergeCellsVerticalIcon as MergeCellsVerticalIcon_alias_2 }

/**
 * The react component for the `message-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Message 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/message-2-fill.svg)
 */
declare const Message2FillIcon: IconType;
export { Message2FillIcon }
export { Message2FillIcon as Message2FillIcon_alias_1 }

/**
 * The react component for the `message-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Message 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/message-2-line.svg)
 */
declare const Message2LineIcon: IconType;
export { Message2LineIcon }
export { Message2LineIcon as Message2LineIcon_alias_1 }

/**
 * The react component for the `message-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Message 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/message-3-fill.svg)
 */
declare const Message3FillIcon: IconType;
export { Message3FillIcon }
export { Message3FillIcon as Message3FillIcon_alias_1 }

/**
 * The react component for the `message-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Message 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/message-3-line.svg)
 */
declare const Message3LineIcon: IconType;
export { Message3LineIcon }
export { Message3LineIcon as Message3LineIcon_alias_1 }

/**
 * The react component for the `message-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Message Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/message-fill.svg)
 */
declare const MessageFillIcon: IconType;
export { MessageFillIcon }
export { MessageFillIcon as MessageFillIcon_alias_1 }

/**
 * The react component for the `message-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Message Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/message-line.svg)
 */
declare const MessageLineIcon: IconType;
export { MessageLineIcon }
export { MessageLineIcon as MessageLineIcon_alias_1 }

/**
 * The react component for the `messenger-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Messenger Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/messenger-fill.svg)
 */
declare const MessengerFillIcon: IconType;
export { MessengerFillIcon }
export { MessengerFillIcon as MessengerFillIcon_alias_1 }

/**
 * The react component for the `messenger-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Messenger Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/messenger-line.svg)
 */
declare const MessengerLineIcon: IconType;
export { MessengerLineIcon }
export { MessengerLineIcon as MessengerLineIcon_alias_1 }

/**
 * The react component for the `meteor-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Meteor Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/meteor-fill.svg)
 */
declare const MeteorFillIcon: IconType;
export { MeteorFillIcon }
export { MeteorFillIcon as MeteorFillIcon_alias_1 }

/**
 * The react component for the `meteor-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Meteor Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/meteor-line.svg)
 */
declare const MeteorLineIcon: IconType;
export { MeteorLineIcon }
export { MeteorLineIcon as MeteorLineIcon_alias_1 }

/**
 * The react component for the `mic-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mic 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/mic-2-fill.svg)
 */
declare const Mic2FillIcon: IconType;
export { Mic2FillIcon }
export { Mic2FillIcon as Mic2FillIcon_alias_1 }

/**
 * The react component for the `mic-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mic 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/mic-2-line.svg)
 */
declare const Mic2LineIcon: IconType;
export { Mic2LineIcon }
export { Mic2LineIcon as Mic2LineIcon_alias_1 }

/**
 * The react component for the `mic-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mic Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/mic-fill.svg)
 */
declare const MicFillIcon: IconType;
export { MicFillIcon }
export { MicFillIcon as MicFillIcon_alias_1 }

/**
 * The react component for the `mickey-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mickey Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/mickey-fill.svg)
 */
declare const MickeyFillIcon: IconType;
export { MickeyFillIcon }
export { MickeyFillIcon as MickeyFillIcon_alias_1 }

/**
 * The react component for the `mickey-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mickey Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/mickey-line.svg)
 */
declare const MickeyLineIcon: IconType;
export { MickeyLineIcon }
export { MickeyLineIcon as MickeyLineIcon_alias_1 }

/**
 * The react component for the `mic-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mic Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/mic-line.svg)
 */
declare const MicLineIcon: IconType;
export { MicLineIcon }
export { MicLineIcon as MicLineIcon_alias_1 }

/**
 * The react component for the `mic-off-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mic Off Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/mic-off-fill.svg)
 */
declare const MicOffFillIcon: IconType;
export { MicOffFillIcon }
export { MicOffFillIcon as MicOffFillIcon_alias_1 }

/**
 * The react component for the `mic-off-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mic Off Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/mic-off-line.svg)
 */
declare const MicOffLineIcon: IconType;
export { MicOffLineIcon }
export { MicOffLineIcon as MicOffLineIcon_alias_1 }

/**
 * The react component for the `microscope-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Microscope Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/microscope-fill.svg)
 */
declare const MicroscopeFillIcon: IconType;
export { MicroscopeFillIcon }
export { MicroscopeFillIcon as MicroscopeFillIcon_alias_1 }

/**
 * The react component for the `microscope-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Microscope Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/microscope-line.svg)
 */
declare const MicroscopeLineIcon: IconType;
export { MicroscopeLineIcon }
export { MicroscopeLineIcon as MicroscopeLineIcon_alias_1 }

/**
 * The react component for the `microsoft-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Microsoft Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/microsoft-fill.svg)
 */
declare const MicrosoftFillIcon: IconType;
export { MicrosoftFillIcon }
export { MicrosoftFillIcon as MicrosoftFillIcon_alias_1 }

/**
 * The react component for the `microsoft-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Microsoft Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/microsoft-line.svg)
 */
declare const MicrosoftLineIcon: IconType;
export { MicrosoftLineIcon }
export { MicrosoftLineIcon as MicrosoftLineIcon_alias_1 }

/**
 * The react component for the `mind-map.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mind Map Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/mind-map.svg)
 */
declare const MindMapIcon: IconType;
export { MindMapIcon }
export { MindMapIcon as MindMapIcon_alias_1 }
export { MindMapIcon as MindMapIcon_alias_2 }

/**
 * The react component for the `mini-program-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mini Program Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/mini-program-fill.svg)
 */
declare const MiniProgramFillIcon: IconType;
export { MiniProgramFillIcon }
export { MiniProgramFillIcon as MiniProgramFillIcon_alias_1 }

/**
 * The react component for the `mini-program-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mini Program Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/mini-program-line.svg)
 */
declare const MiniProgramLineIcon: IconType;
export { MiniProgramLineIcon }
export { MiniProgramLineIcon as MiniProgramLineIcon_alias_1 }

/**
 * The react component for the `mist-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mist Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/mist-fill.svg)
 */
declare const MistFillIcon: IconType;
export { MistFillIcon }
export { MistFillIcon as MistFillIcon_alias_1 }

/**
 * The react component for the `mist-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mist Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/mist-line.svg)
 */
declare const MistLineIcon: IconType;
export { MistLineIcon }
export { MistLineIcon as MistLineIcon_alias_1 }

/**
 * The react component for the `money-cny-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Cny Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-cny-box-fill.svg)
 */
declare const MoneyCnyBoxFillIcon: IconType;
export { MoneyCnyBoxFillIcon }
export { MoneyCnyBoxFillIcon as MoneyCnyBoxFillIcon_alias_1 }

/**
 * The react component for the `money-cny-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Cny Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-cny-box-line.svg)
 */
declare const MoneyCnyBoxLineIcon: IconType;
export { MoneyCnyBoxLineIcon }
export { MoneyCnyBoxLineIcon as MoneyCnyBoxLineIcon_alias_1 }

/**
 * The react component for the `money-cny-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Cny Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-cny-circle-fill.svg)
 */
declare const MoneyCnyCircleFillIcon: IconType;
export { MoneyCnyCircleFillIcon }
export { MoneyCnyCircleFillIcon as MoneyCnyCircleFillIcon_alias_1 }

/**
 * The react component for the `money-cny-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Cny Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-cny-circle-line.svg)
 */
declare const MoneyCnyCircleLineIcon: IconType;
export { MoneyCnyCircleLineIcon }
export { MoneyCnyCircleLineIcon as MoneyCnyCircleLineIcon_alias_1 }

/**
 * The react component for the `money-dollar-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Dollar Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-dollar-box-fill.svg)
 */
declare const MoneyDollarBoxFillIcon: IconType;
export { MoneyDollarBoxFillIcon }
export { MoneyDollarBoxFillIcon as MoneyDollarBoxFillIcon_alias_1 }

/**
 * The react component for the `money-dollar-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Dollar Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-dollar-box-line.svg)
 */
declare const MoneyDollarBoxLineIcon: IconType;
export { MoneyDollarBoxLineIcon }
export { MoneyDollarBoxLineIcon as MoneyDollarBoxLineIcon_alias_1 }

/**
 * The react component for the `money-dollar-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Dollar Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-dollar-circle-fill.svg)
 */
declare const MoneyDollarCircleFillIcon: IconType;
export { MoneyDollarCircleFillIcon }
export { MoneyDollarCircleFillIcon as MoneyDollarCircleFillIcon_alias_1 }

/**
 * The react component for the `money-dollar-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Dollar Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-dollar-circle-line.svg)
 */
declare const MoneyDollarCircleLineIcon: IconType;
export { MoneyDollarCircleLineIcon }
export { MoneyDollarCircleLineIcon as MoneyDollarCircleLineIcon_alias_1 }

/**
 * The react component for the `money-euro-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Euro Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-euro-box-fill.svg)
 */
declare const MoneyEuroBoxFillIcon: IconType;
export { MoneyEuroBoxFillIcon }
export { MoneyEuroBoxFillIcon as MoneyEuroBoxFillIcon_alias_1 }

/**
 * The react component for the `money-euro-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Euro Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-euro-box-line.svg)
 */
declare const MoneyEuroBoxLineIcon: IconType;
export { MoneyEuroBoxLineIcon }
export { MoneyEuroBoxLineIcon as MoneyEuroBoxLineIcon_alias_1 }

/**
 * The react component for the `money-euro-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Euro Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-euro-circle-fill.svg)
 */
declare const MoneyEuroCircleFillIcon: IconType;
export { MoneyEuroCircleFillIcon }
export { MoneyEuroCircleFillIcon as MoneyEuroCircleFillIcon_alias_1 }

/**
 * The react component for the `money-euro-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Euro Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-euro-circle-line.svg)
 */
declare const MoneyEuroCircleLineIcon: IconType;
export { MoneyEuroCircleLineIcon }
export { MoneyEuroCircleLineIcon as MoneyEuroCircleLineIcon_alias_1 }

/**
 * The react component for the `money-pound-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Pound Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-pound-box-fill.svg)
 */
declare const MoneyPoundBoxFillIcon: IconType;
export { MoneyPoundBoxFillIcon }
export { MoneyPoundBoxFillIcon as MoneyPoundBoxFillIcon_alias_1 }

/**
 * The react component for the `money-pound-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Pound Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-pound-box-line.svg)
 */
declare const MoneyPoundBoxLineIcon: IconType;
export { MoneyPoundBoxLineIcon }
export { MoneyPoundBoxLineIcon as MoneyPoundBoxLineIcon_alias_1 }

/**
 * The react component for the `money-pound-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Pound Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-pound-circle-fill.svg)
 */
declare const MoneyPoundCircleFillIcon: IconType;
export { MoneyPoundCircleFillIcon }
export { MoneyPoundCircleFillIcon as MoneyPoundCircleFillIcon_alias_1 }

/**
 * The react component for the `money-pound-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Money Pound Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/money-pound-circle-line.svg)
 */
declare const MoneyPoundCircleLineIcon: IconType;
export { MoneyPoundCircleLineIcon }
export { MoneyPoundCircleLineIcon as MoneyPoundCircleLineIcon_alias_1 }

/**
 * The react component for the `moon-clear-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Moon Clear Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/moon-clear-fill.svg)
 */
declare const MoonClearFillIcon: IconType;
export { MoonClearFillIcon }
export { MoonClearFillIcon as MoonClearFillIcon_alias_1 }

/**
 * The react component for the `moon-clear-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Moon Clear Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/moon-clear-line.svg)
 */
declare const MoonClearLineIcon: IconType;
export { MoonClearLineIcon }
export { MoonClearLineIcon as MoonClearLineIcon_alias_1 }

/**
 * The react component for the `moon-cloudy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Moon Cloudy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/moon-cloudy-fill.svg)
 */
declare const MoonCloudyFillIcon: IconType;
export { MoonCloudyFillIcon }
export { MoonCloudyFillIcon as MoonCloudyFillIcon_alias_1 }

/**
 * The react component for the `moon-cloudy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Moon Cloudy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/moon-cloudy-line.svg)
 */
declare const MoonCloudyLineIcon: IconType;
export { MoonCloudyLineIcon }
export { MoonCloudyLineIcon as MoonCloudyLineIcon_alias_1 }

/**
 * The react component for the `moon-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Moon Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/moon-fill.svg)
 */
declare const MoonFillIcon: IconType;
export { MoonFillIcon }
export { MoonFillIcon as MoonFillIcon_alias_1 }

/**
 * The react component for the `moon-foggy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Moon Foggy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/moon-foggy-fill.svg)
 */
declare const MoonFoggyFillIcon: IconType;
export { MoonFoggyFillIcon }
export { MoonFoggyFillIcon as MoonFoggyFillIcon_alias_1 }

/**
 * The react component for the `moon-foggy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Moon Foggy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/moon-foggy-line.svg)
 */
declare const MoonFoggyLineIcon: IconType;
export { MoonFoggyLineIcon }
export { MoonFoggyLineIcon as MoonFoggyLineIcon_alias_1 }

/**
 * The react component for the `moon-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Moon Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/moon-line.svg)
 */
declare const MoonLineIcon: IconType;
export { MoonLineIcon }
export { MoonLineIcon as MoonLineIcon_alias_1 }

/**
 * The react component for the `more-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![More 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/more-2-fill.svg)
 */
declare const More2FillIcon: IconType;
export { More2FillIcon }
export { More2FillIcon as More2FillIcon_alias_1 }

/**
 * The react component for the `more-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![More 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/more-2-line.svg)
 */
declare const More2LineIcon: IconType;
export { More2LineIcon }
export { More2LineIcon as More2LineIcon_alias_1 }

/**
 * The react component for the `more-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![More Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/more-fill.svg)
 */
declare const MoreFillIcon: IconType;
export { MoreFillIcon }
export { MoreFillIcon as MoreFillIcon_alias_1 }
export { MoreFillIcon as MoreFillIcon_alias_2 }

/**
 * The react component for the `more-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![More Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/more-line.svg)
 */
declare const MoreLineIcon: IconType;
export { MoreLineIcon }
export { MoreLineIcon as MoreLineIcon_alias_1 }

/**
 * The react component for the `motorbike-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Motorbike Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/motorbike-fill.svg)
 */
declare const MotorbikeFillIcon: IconType;
export { MotorbikeFillIcon }
export { MotorbikeFillIcon as MotorbikeFillIcon_alias_1 }

/**
 * The react component for the `motorbike-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Motorbike Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/motorbike-line.svg)
 */
declare const MotorbikeLineIcon: IconType;
export { MotorbikeLineIcon }
export { MotorbikeLineIcon as MotorbikeLineIcon_alias_1 }

/**
 * The react component for the `mouse-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mouse Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/mouse-fill.svg)
 */
declare const MouseFillIcon: IconType;
export { MouseFillIcon }
export { MouseFillIcon as MouseFillIcon_alias_1 }

/**
 * The react component for the `mouse-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mouse Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/mouse-line.svg)
 */
declare const MouseLineIcon: IconType;
export { MouseLineIcon }
export { MouseLineIcon as MouseLineIcon_alias_1 }

/**
 * The react component for the `movie-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Movie 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/movie-2-fill.svg)
 */
declare const Movie2FillIcon: IconType;
export { Movie2FillIcon }
export { Movie2FillIcon as Movie2FillIcon_alias_1 }

/**
 * The react component for the `movie-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Movie 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/movie-2-line.svg)
 */
declare const Movie2LineIcon: IconType;
export { Movie2LineIcon }
export { Movie2LineIcon as Movie2LineIcon_alias_1 }

/**
 * The react component for the `movie-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Movie Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/movie-fill.svg)
 */
declare const MovieFillIcon: IconType;
export { MovieFillIcon }
export { MovieFillIcon as MovieFillIcon_alias_1 }

/**
 * The react component for the `movie-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Movie Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/movie-line.svg)
 */
declare const MovieLineIcon: IconType;
export { MovieLineIcon }
export { MovieLineIcon as MovieLineIcon_alias_1 }

/**
 * The react component for the `music-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Music 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/music-2-fill.svg)
 */
declare const Music2FillIcon: IconType;
export { Music2FillIcon }
export { Music2FillIcon as Music2FillIcon_alias_1 }

/**
 * The react component for the `music-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Music 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/music-2-line.svg)
 */
declare const Music2LineIcon: IconType;
export { Music2LineIcon }
export { Music2LineIcon as Music2LineIcon_alias_1 }

/**
 * The react component for the `music-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Music Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/music-fill.svg)
 */
declare const MusicFillIcon: IconType;
export { MusicFillIcon }
export { MusicFillIcon as MusicFillIcon_alias_1 }

/**
 * The react component for the `music-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Music Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/music-line.svg)
 */
declare const MusicLineIcon: IconType;
export { MusicLineIcon }
export { MusicLineIcon as MusicLineIcon_alias_1 }

/**
 * The react component for the `mv-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mv Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/mv-fill.svg)
 */
declare const MvFillIcon: IconType;
export { MvFillIcon }
export { MvFillIcon as MvFillIcon_alias_1 }

/**
 * The react component for the `mv-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Mv Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/mv-line.svg)
 */
declare const MvLineIcon: IconType;
export { MvLineIcon }
export { MvLineIcon as MvLineIcon_alias_1 }

/**
 * The react component for the `navigation-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Navigation Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/navigation-fill.svg)
 */
declare const NavigationFillIcon: IconType;
export { NavigationFillIcon }
export { NavigationFillIcon as NavigationFillIcon_alias_1 }

/**
 * The react component for the `navigation-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Navigation Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/navigation-line.svg)
 */
declare const NavigationLineIcon: IconType;
export { NavigationLineIcon }
export { NavigationLineIcon as NavigationLineIcon_alias_1 }

/**
 * The react component for the `netease-cloud-music-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Netease Cloud Music Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/netease-cloud-music-fill.svg)
 */
declare const NeteaseCloudMusicFillIcon: IconType;
export { NeteaseCloudMusicFillIcon }
export { NeteaseCloudMusicFillIcon as NeteaseCloudMusicFillIcon_alias_1 }

/**
 * The react component for the `netease-cloud-music-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Netease Cloud Music Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/netease-cloud-music-line.svg)
 */
declare const NeteaseCloudMusicLineIcon: IconType;
export { NeteaseCloudMusicLineIcon }
export { NeteaseCloudMusicLineIcon as NeteaseCloudMusicLineIcon_alias_1 }

/**
 * The react component for the `netflix-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Netflix Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/netflix-fill.svg)
 */
declare const NetflixFillIcon: IconType;
export { NetflixFillIcon }
export { NetflixFillIcon as NetflixFillIcon_alias_1 }

/**
 * The react component for the `netflix-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Netflix Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/netflix-line.svg)
 */
declare const NetflixLineIcon: IconType;
export { NetflixLineIcon }
export { NetflixLineIcon as NetflixLineIcon_alias_1 }

/**
 * The react component for the `newspaper-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Newspaper Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/newspaper-fill.svg)
 */
declare const NewspaperFillIcon: IconType;
export { NewspaperFillIcon }
export { NewspaperFillIcon as NewspaperFillIcon_alias_1 }

/**
 * The react component for the `newspaper-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Newspaper Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/newspaper-line.svg)
 */
declare const NewspaperLineIcon: IconType;
export { NewspaperLineIcon }
export { NewspaperLineIcon as NewspaperLineIcon_alias_1 }

/**
 * The react component for the `node-tree.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Node Tree Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/node-tree.svg)
 */
declare const NodeTreeIcon: IconType;
export { NodeTreeIcon }
export { NodeTreeIcon as NodeTreeIcon_alias_1 }
export { NodeTreeIcon as NodeTreeIcon_alias_2 }

/**
 * The react component for the `notification-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Notification 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/notification-2-fill.svg)
 */
declare const Notification2FillIcon: IconType;
export { Notification2FillIcon }
export { Notification2FillIcon as Notification2FillIcon_alias_1 }

/**
 * The react component for the `notification-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Notification 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/notification-2-line.svg)
 */
declare const Notification2LineIcon: IconType;
export { Notification2LineIcon }
export { Notification2LineIcon as Notification2LineIcon_alias_1 }

/**
 * The react component for the `notification-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Notification 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/notification-3-fill.svg)
 */
declare const Notification3FillIcon: IconType;
export { Notification3FillIcon }
export { Notification3FillIcon as Notification3FillIcon_alias_1 }

/**
 * The react component for the `notification-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Notification 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/notification-3-line.svg)
 */
declare const Notification3LineIcon: IconType;
export { Notification3LineIcon }
export { Notification3LineIcon as Notification3LineIcon_alias_1 }

/**
 * The react component for the `notification-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Notification 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/notification-4-fill.svg)
 */
declare const Notification4FillIcon: IconType;
export { Notification4FillIcon }
export { Notification4FillIcon as Notification4FillIcon_alias_1 }

/**
 * The react component for the `notification-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Notification 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/notification-4-line.svg)
 */
declare const Notification4LineIcon: IconType;
export { Notification4LineIcon }
export { Notification4LineIcon as Notification4LineIcon_alias_1 }

/**
 * The react component for the `notification-badge-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Notification Badge Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/notification-badge-fill.svg)
 */
declare const NotificationBadgeFillIcon: IconType;
export { NotificationBadgeFillIcon }
export { NotificationBadgeFillIcon as NotificationBadgeFillIcon_alias_1 }

/**
 * The react component for the `notification-badge-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Notification Badge Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/notification-badge-line.svg)
 */
declare const NotificationBadgeLineIcon: IconType;
export { NotificationBadgeLineIcon }
export { NotificationBadgeLineIcon as NotificationBadgeLineIcon_alias_1 }

/**
 * The react component for the `notification-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Notification Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/notification-fill.svg)
 */
declare const NotificationFillIcon: IconType;
export { NotificationFillIcon }
export { NotificationFillIcon as NotificationFillIcon_alias_1 }

/**
 * The react component for the `notification-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Notification Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/notification-line.svg)
 */
declare const NotificationLineIcon: IconType;
export { NotificationLineIcon }
export { NotificationLineIcon as NotificationLineIcon_alias_1 }

/**
 * The react component for the `notification-off-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Notification Off Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/notification-off-fill.svg)
 */
declare const NotificationOffFillIcon: IconType;
export { NotificationOffFillIcon }
export { NotificationOffFillIcon as NotificationOffFillIcon_alias_1 }

/**
 * The react component for the `notification-off-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Notification Off Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/notification-off-line.svg)
 */
declare const NotificationOffLineIcon: IconType;
export { NotificationOffLineIcon }
export { NotificationOffLineIcon as NotificationOffLineIcon_alias_1 }

/**
 * The react component for the `npmjs-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Npmjs Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/npmjs-fill.svg)
 */
declare const NpmjsFillIcon: IconType;
export { NpmjsFillIcon }
export { NpmjsFillIcon as NpmjsFillIcon_alias_1 }

/**
 * The react component for the `npmjs-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Npmjs Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/npmjs-line.svg)
 */
declare const NpmjsLineIcon: IconType;
export { NpmjsLineIcon }
export { NpmjsLineIcon as NpmjsLineIcon_alias_1 }

/**
 * The react component for the `number-0.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Number 0 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/number-0.svg)
 */
declare const Number0Icon: IconType;
export { Number0Icon }
export { Number0Icon as Number0Icon_alias_1 }
export { Number0Icon as Number0Icon_alias_2 }

/**
 * The react component for the `number-1.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Number 1 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/number-1.svg)
 */
declare const Number1Icon: IconType;
export { Number1Icon }
export { Number1Icon as Number1Icon_alias_1 }
export { Number1Icon as Number1Icon_alias_2 }

/**
 * The react component for the `number-2.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Number 2 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/number-2.svg)
 */
declare const Number2Icon: IconType;
export { Number2Icon }
export { Number2Icon as Number2Icon_alias_1 }
export { Number2Icon as Number2Icon_alias_2 }

/**
 * The react component for the `number-3.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Number 3 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/number-3.svg)
 */
declare const Number3Icon: IconType;
export { Number3Icon }
export { Number3Icon as Number3Icon_alias_1 }
export { Number3Icon as Number3Icon_alias_2 }

/**
 * The react component for the `number-4.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Number 4 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/number-4.svg)
 */
declare const Number4Icon: IconType;
export { Number4Icon }
export { Number4Icon as Number4Icon_alias_1 }
export { Number4Icon as Number4Icon_alias_2 }

/**
 * The react component for the `number-5.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Number 5 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/number-5.svg)
 */
declare const Number5Icon: IconType;
export { Number5Icon }
export { Number5Icon as Number5Icon_alias_1 }
export { Number5Icon as Number5Icon_alias_2 }

/**
 * The react component for the `number-6.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Number 6 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/number-6.svg)
 */
declare const Number6Icon: IconType;
export { Number6Icon }
export { Number6Icon as Number6Icon_alias_1 }
export { Number6Icon as Number6Icon_alias_2 }

/**
 * The react component for the `number-7.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Number 7 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/number-7.svg)
 */
declare const Number7Icon: IconType;
export { Number7Icon }
export { Number7Icon as Number7Icon_alias_1 }
export { Number7Icon as Number7Icon_alias_2 }

/**
 * The react component for the `number-8.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Number 8 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/number-8.svg)
 */
declare const Number8Icon: IconType;
export { Number8Icon }
export { Number8Icon as Number8Icon_alias_1 }
export { Number8Icon as Number8Icon_alias_2 }

/**
 * The react component for the `number-9.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Number 9 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/number-9.svg)
 */
declare const Number9Icon: IconType;
export { Number9Icon }
export { Number9Icon as Number9Icon_alias_1 }
export { Number9Icon as Number9Icon_alias_2 }

/**
 * The react component for the `numbers-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Numbers Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/numbers-fill.svg)
 */
declare const NumbersFillIcon: IconType;
export { NumbersFillIcon }
export { NumbersFillIcon as NumbersFillIcon_alias_1 }

/**
 * The react component for the `numbers-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Numbers Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/numbers-line.svg)
 */
declare const NumbersLineIcon: IconType;
export { NumbersLineIcon }
export { NumbersLineIcon as NumbersLineIcon_alias_1 }

/**
 * The react component for the `nurse-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Nurse Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/nurse-fill.svg)
 */
declare const NurseFillIcon: IconType;
export { NurseFillIcon }
export { NurseFillIcon as NurseFillIcon_alias_1 }

/**
 * The react component for the `nurse-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Nurse Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/nurse-line.svg)
 */
declare const NurseLineIcon: IconType;
export { NurseLineIcon }
export { NurseLineIcon as NurseLineIcon_alias_1 }

/**
 * The react component for the `oil-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Oil Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/oil-fill.svg)
 */
declare const OilFillIcon: IconType;
export { OilFillIcon }
export { OilFillIcon as OilFillIcon_alias_1 }

/**
 * The react component for the `oil-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Oil Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/oil-line.svg)
 */
declare const OilLineIcon: IconType;
export { OilLineIcon }
export { OilLineIcon as OilLineIcon_alias_1 }

/**
 * The react component for the `omega.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Omega Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/omega.svg)
 */
declare const OmegaIcon: IconType;
export { OmegaIcon }
export { OmegaIcon as OmegaIcon_alias_1 }
export { OmegaIcon as OmegaIcon_alias_2 }

/**
 * The react component for the `open-arm-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Open Arm Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/open-arm-fill.svg)
 */
declare const OpenArmFillIcon: IconType;
export { OpenArmFillIcon }
export { OpenArmFillIcon as OpenArmFillIcon_alias_1 }

/**
 * The react component for the `open-arm-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Open Arm Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/open-arm-line.svg)
 */
declare const OpenArmLineIcon: IconType;
export { OpenArmLineIcon }
export { OpenArmLineIcon as OpenArmLineIcon_alias_1 }

/**
 * The react component for the `open-source-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Open Source Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/open-source-fill.svg)
 */
declare const OpenSourceFillIcon: IconType;
export { OpenSourceFillIcon }
export { OpenSourceFillIcon as OpenSourceFillIcon_alias_1 }

/**
 * The react component for the `open-source-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Open Source Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/open-source-line.svg)
 */
declare const OpenSourceLineIcon: IconType;
export { OpenSourceLineIcon }
export { OpenSourceLineIcon as OpenSourceLineIcon_alias_1 }

/**
 * The react component for the `opera-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Opera Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/opera-fill.svg)
 */
declare const OperaFillIcon: IconType;
export { OperaFillIcon }
export { OperaFillIcon as OperaFillIcon_alias_1 }

/**
 * The react component for the `opera-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Opera Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/opera-line.svg)
 */
declare const OperaLineIcon: IconType;
export { OperaLineIcon }
export { OperaLineIcon as OperaLineIcon_alias_1 }

/**
 * The react component for the `order-play-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Order Play Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/order-play-fill.svg)
 */
declare const OrderPlayFillIcon: IconType;
export { OrderPlayFillIcon }
export { OrderPlayFillIcon as OrderPlayFillIcon_alias_1 }

/**
 * The react component for the `order-play-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Order Play Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/order-play-line.svg)
 */
declare const OrderPlayLineIcon: IconType;
export { OrderPlayLineIcon }
export { OrderPlayLineIcon as OrderPlayLineIcon_alias_1 }

/**
 * The react component for the `organization-chart.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Organization Chart Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/organization-chart.svg)
 */
declare const OrganizationChartIcon: IconType;
export { OrganizationChartIcon }
export { OrganizationChartIcon as OrganizationChartIcon_alias_1 }
export { OrganizationChartIcon as OrganizationChartIcon_alias_2 }

/**
 * The react component for the `outlet-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Outlet 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/outlet-2-fill.svg)
 */
declare const Outlet2FillIcon: IconType;
export { Outlet2FillIcon }
export { Outlet2FillIcon as Outlet2FillIcon_alias_1 }

/**
 * The react component for the `outlet-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Outlet 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/outlet-2-line.svg)
 */
declare const Outlet2LineIcon: IconType;
export { Outlet2LineIcon }
export { Outlet2LineIcon as Outlet2LineIcon_alias_1 }

/**
 * The react component for the `outlet-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Outlet Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/outlet-fill.svg)
 */
declare const OutletFillIcon: IconType;
export { OutletFillIcon }
export { OutletFillIcon as OutletFillIcon_alias_1 }

/**
 * The react component for the `outlet-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Outlet Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/outlet-line.svg)
 */
declare const OutletLineIcon: IconType;
export { OutletLineIcon }
export { OutletLineIcon as OutletLineIcon_alias_1 }

/**
 * The react component for the `page-separator.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Page Separator Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/page-separator.svg)
 */
declare const PageSeparatorIcon: IconType;
export { PageSeparatorIcon }
export { PageSeparatorIcon as PageSeparatorIcon_alias_1 }
export { PageSeparatorIcon as PageSeparatorIcon_alias_2 }

/**
 * The react component for the `pages-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pages Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/pages-fill.svg)
 */
declare const PagesFillIcon: IconType;
export { PagesFillIcon }
export { PagesFillIcon as PagesFillIcon_alias_1 }

/**
 * The react component for the `pages-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pages Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/pages-line.svg)
 */
declare const PagesLineIcon: IconType;
export { PagesLineIcon }
export { PagesLineIcon as PagesLineIcon_alias_1 }

/**
 * The react component for the `paint-brush-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Paint Brush Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/paint-brush-fill.svg)
 */
declare const PaintBrushFillIcon: IconType;
export { PaintBrushFillIcon }
export { PaintBrushFillIcon as PaintBrushFillIcon_alias_1 }

/**
 * The react component for the `paint-brush-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Paint Brush Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/paint-brush-line.svg)
 */
declare const PaintBrushLineIcon: IconType;
export { PaintBrushLineIcon }
export { PaintBrushLineIcon as PaintBrushLineIcon_alias_1 }

/**
 * The react component for the `paint-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Paint Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/paint-fill.svg)
 */
declare const PaintFillIcon: IconType;
export { PaintFillIcon }
export { PaintFillIcon as PaintFillIcon_alias_1 }

/**
 * The react component for the `paint-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Paint Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/paint-line.svg)
 */
declare const PaintLineIcon: IconType;
export { PaintLineIcon }
export { PaintLineIcon as PaintLineIcon_alias_1 }

/**
 * The react component for the `palette-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Palette Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/palette-fill.svg)
 */
declare const PaletteFillIcon: IconType;
export { PaletteFillIcon }
export { PaletteFillIcon as PaletteFillIcon_alias_1 }

/**
 * The react component for the `palette-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Palette Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/palette-line.svg)
 */
declare const PaletteLineIcon: IconType;
export { PaletteLineIcon }
export { PaletteLineIcon as PaletteLineIcon_alias_1 }

/**
 * The react component for the `pantone-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pantone Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/pantone-fill.svg)
 */
declare const PantoneFillIcon: IconType;
export { PantoneFillIcon }
export { PantoneFillIcon as PantoneFillIcon_alias_1 }

/**
 * The react component for the `pantone-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pantone Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/pantone-line.svg)
 */
declare const PantoneLineIcon: IconType;
export { PantoneLineIcon }
export { PantoneLineIcon as PantoneLineIcon_alias_1 }

/**
 * The react component for the `paragraph.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Paragraph Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/paragraph.svg)
 */
declare const ParagraphIcon: IconType;
export { ParagraphIcon }
export { ParagraphIcon as ParagraphIcon_alias_1 }
export { ParagraphIcon as ParagraphIcon_alias_2 }

/**
 * The react component for the `parent-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Parent Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/parent-fill.svg)
 */
declare const ParentFillIcon: IconType;
export { ParentFillIcon }
export { ParentFillIcon as ParentFillIcon_alias_1 }

/**
 * The react component for the `parentheses-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Parentheses Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/parentheses-fill.svg)
 */
declare const ParenthesesFillIcon: IconType;
export { ParenthesesFillIcon }
export { ParenthesesFillIcon as ParenthesesFillIcon_alias_1 }

/**
 * The react component for the `parentheses-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Parentheses Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/parentheses-line.svg)
 */
declare const ParenthesesLineIcon: IconType;
export { ParenthesesLineIcon }
export { ParenthesesLineIcon as ParenthesesLineIcon_alias_1 }

/**
 * The react component for the `parent-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Parent Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/parent-line.svg)
 */
declare const ParentLineIcon: IconType;
export { ParentLineIcon }
export { ParentLineIcon as ParentLineIcon_alias_1 }

/**
 * The react component for the `parking-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Parking Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/parking-box-fill.svg)
 */
declare const ParkingBoxFillIcon: IconType;
export { ParkingBoxFillIcon }
export { ParkingBoxFillIcon as ParkingBoxFillIcon_alias_1 }

/**
 * The react component for the `parking-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Parking Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/parking-box-line.svg)
 */
declare const ParkingBoxLineIcon: IconType;
export { ParkingBoxLineIcon }
export { ParkingBoxLineIcon as ParkingBoxLineIcon_alias_1 }

/**
 * The react component for the `parking-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Parking Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/parking-fill.svg)
 */
declare const ParkingFillIcon: IconType;
export { ParkingFillIcon }
export { ParkingFillIcon as ParkingFillIcon_alias_1 }

/**
 * The react component for the `parking-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Parking Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/parking-line.svg)
 */
declare const ParkingLineIcon: IconType;
export { ParkingLineIcon }
export { ParkingLineIcon as ParkingLineIcon_alias_1 }

/**
 * The react component for the `passport-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Passport Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/passport-fill.svg)
 */
declare const PassportFillIcon: IconType;
export { PassportFillIcon }
export { PassportFillIcon as PassportFillIcon_alias_1 }

/**
 * The react component for the `passport-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Passport Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/passport-line.svg)
 */
declare const PassportLineIcon: IconType;
export { PassportLineIcon }
export { PassportLineIcon as PassportLineIcon_alias_1 }

/**
 * The react component for the `patreon-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Patreon Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/patreon-fill.svg)
 */
declare const PatreonFillIcon: IconType;
export { PatreonFillIcon }
export { PatreonFillIcon as PatreonFillIcon_alias_1 }

/**
 * The react component for the `patreon-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Patreon Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/patreon-line.svg)
 */
declare const PatreonLineIcon: IconType;
export { PatreonLineIcon }
export { PatreonLineIcon as PatreonLineIcon_alias_1 }

/**
 * The react component for the `pause-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pause Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/pause-circle-fill.svg)
 */
declare const PauseCircleFillIcon: IconType;
export { PauseCircleFillIcon }
export { PauseCircleFillIcon as PauseCircleFillIcon_alias_1 }

/**
 * The react component for the `pause-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pause Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/pause-circle-line.svg)
 */
declare const PauseCircleLineIcon: IconType;
export { PauseCircleLineIcon }
export { PauseCircleLineIcon as PauseCircleLineIcon_alias_1 }

/**
 * The react component for the `pause-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pause Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/pause-fill.svg)
 */
declare const PauseFillIcon: IconType;
export { PauseFillIcon }
export { PauseFillIcon as PauseFillIcon_alias_1 }

/**
 * The react component for the `pause-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pause Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/pause-line.svg)
 */
declare const PauseLineIcon: IconType;
export { PauseLineIcon }
export { PauseLineIcon as PauseLineIcon_alias_1 }

/**
 * The react component for the `pause-mini-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pause Mini Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/pause-mini-fill.svg)
 */
declare const PauseMiniFillIcon: IconType;
export { PauseMiniFillIcon }
export { PauseMiniFillIcon as PauseMiniFillIcon_alias_1 }

/**
 * The react component for the `pause-mini-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pause Mini Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/pause-mini-line.svg)
 */
declare const PauseMiniLineIcon: IconType;
export { PauseMiniLineIcon }
export { PauseMiniLineIcon as PauseMiniLineIcon_alias_1 }

/**
 * The react component for the `paypal-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Paypal Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/paypal-fill.svg)
 */
declare const PaypalFillIcon: IconType;
export { PaypalFillIcon }
export { PaypalFillIcon as PaypalFillIcon_alias_1 }

/**
 * The react component for the `paypal-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Paypal Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/paypal-line.svg)
 */
declare const PaypalLineIcon: IconType;
export { PaypalLineIcon }
export { PaypalLineIcon as PaypalLineIcon_alias_1 }

/**
 * The react component for the `pencil-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pencil Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/pencil-fill.svg)
 */
declare const PencilFillIcon: IconType;
export { PencilFillIcon }
export { PencilFillIcon as PencilFillIcon_alias_1 }
export { PencilFillIcon as PencilFillIcon_alias_2 }

/**
 * The react component for the `pencil-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pencil Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/pencil-line.svg)
 */
declare const PencilLineIcon: IconType;
export { PencilLineIcon }
export { PencilLineIcon as PencilLineIcon_alias_1 }
export { PencilLineIcon as PencilLineIcon_alias_2 }

/**
 * The react component for the `pencil-ruler-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pencil Ruler 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/pencil-ruler-2-fill.svg)
 */
declare const PencilRuler2FillIcon: IconType;
export { PencilRuler2FillIcon }
export { PencilRuler2FillIcon as PencilRuler2FillIcon_alias_1 }

/**
 * The react component for the `pencil-ruler-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pencil Ruler 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/pencil-ruler-2-line.svg)
 */
declare const PencilRuler2LineIcon: IconType;
export { PencilRuler2LineIcon }
export { PencilRuler2LineIcon as PencilRuler2LineIcon_alias_1 }

/**
 * The react component for the `pencil-ruler-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pencil Ruler Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/pencil-ruler-fill.svg)
 */
declare const PencilRulerFillIcon: IconType;
export { PencilRulerFillIcon }
export { PencilRulerFillIcon as PencilRulerFillIcon_alias_1 }

/**
 * The react component for the `pencil-ruler-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pencil Ruler Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/pencil-ruler-line.svg)
 */
declare const PencilRulerLineIcon: IconType;
export { PencilRulerLineIcon }
export { PencilRulerLineIcon as PencilRulerLineIcon_alias_1 }

/**
 * The react component for the `pen-nib-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pen Nib Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/pen-nib-fill.svg)
 */
declare const PenNibFillIcon: IconType;
export { PenNibFillIcon }
export { PenNibFillIcon as PenNibFillIcon_alias_1 }

/**
 * The react component for the `pen-nib-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pen Nib Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/pen-nib-line.svg)
 */
declare const PenNibLineIcon: IconType;
export { PenNibLineIcon }
export { PenNibLineIcon as PenNibLineIcon_alias_1 }

/**
 * The react component for the `percent-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Percent Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/percent-fill.svg)
 */
declare const PercentFillIcon: IconType;
export { PercentFillIcon }
export { PercentFillIcon as PercentFillIcon_alias_1 }

/**
 * The react component for the `percent-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Percent Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/percent-line.svg)
 */
declare const PercentLineIcon: IconType;
export { PercentLineIcon }
export { PercentLineIcon as PercentLineIcon_alias_1 }

/**
 * The react component for the `phone-camera-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Phone Camera Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/phone-camera-fill.svg)
 */
declare const PhoneCameraFillIcon: IconType;
export { PhoneCameraFillIcon }
export { PhoneCameraFillIcon as PhoneCameraFillIcon_alias_1 }

/**
 * The react component for the `phone-camera-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Phone Camera Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/phone-camera-line.svg)
 */
declare const PhoneCameraLineIcon: IconType;
export { PhoneCameraLineIcon }
export { PhoneCameraLineIcon as PhoneCameraLineIcon_alias_1 }

/**
 * The react component for the `phone-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Phone Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/phone-fill.svg)
 */
declare const PhoneFillIcon: IconType;
export { PhoneFillIcon }
export { PhoneFillIcon as PhoneFillIcon_alias_1 }

/**
 * The react component for the `phone-find-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Phone Find Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/phone-find-fill.svg)
 */
declare const PhoneFindFillIcon: IconType;
export { PhoneFindFillIcon }
export { PhoneFindFillIcon as PhoneFindFillIcon_alias_1 }

/**
 * The react component for the `phone-find-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Phone Find Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/phone-find-line.svg)
 */
declare const PhoneFindLineIcon: IconType;
export { PhoneFindLineIcon }
export { PhoneFindLineIcon as PhoneFindLineIcon_alias_1 }

/**
 * The react component for the `phone-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Phone Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/phone-line.svg)
 */
declare const PhoneLineIcon: IconType;
export { PhoneLineIcon }
export { PhoneLineIcon as PhoneLineIcon_alias_1 }

/**
 * The react component for the `phone-lock-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Phone Lock Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/phone-lock-fill.svg)
 */
declare const PhoneLockFillIcon: IconType;
export { PhoneLockFillIcon }
export { PhoneLockFillIcon as PhoneLockFillIcon_alias_1 }

/**
 * The react component for the `phone-lock-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Phone Lock Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/phone-lock-line.svg)
 */
declare const PhoneLockLineIcon: IconType;
export { PhoneLockLineIcon }
export { PhoneLockLineIcon as PhoneLockLineIcon_alias_1 }

/**
 * The react component for the `picture-in-picture-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Picture In Picture 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/picture-in-picture-2-fill.svg)
 */
declare const PictureInPicture2FillIcon: IconType;
export { PictureInPicture2FillIcon }
export { PictureInPicture2FillIcon as PictureInPicture2FillIcon_alias_1 }

/**
 * The react component for the `picture-in-picture-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Picture In Picture 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/picture-in-picture-2-line.svg)
 */
declare const PictureInPicture2LineIcon: IconType;
export { PictureInPicture2LineIcon }
export { PictureInPicture2LineIcon as PictureInPicture2LineIcon_alias_1 }

/**
 * The react component for the `picture-in-picture-exit-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Picture In Picture Exit Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/picture-in-picture-exit-fill.svg)
 */
declare const PictureInPictureExitFillIcon: IconType;
export { PictureInPictureExitFillIcon }
export { PictureInPictureExitFillIcon as PictureInPictureExitFillIcon_alias_1 }

/**
 * The react component for the `picture-in-picture-exit-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Picture In Picture Exit Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/picture-in-picture-exit-line.svg)
 */
declare const PictureInPictureExitLineIcon: IconType;
export { PictureInPictureExitLineIcon }
export { PictureInPictureExitLineIcon as PictureInPictureExitLineIcon_alias_1 }

/**
 * The react component for the `picture-in-picture-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Picture In Picture Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/picture-in-picture-fill.svg)
 */
declare const PictureInPictureFillIcon: IconType;
export { PictureInPictureFillIcon }
export { PictureInPictureFillIcon as PictureInPictureFillIcon_alias_1 }

/**
 * The react component for the `picture-in-picture-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Picture In Picture Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/picture-in-picture-line.svg)
 */
declare const PictureInPictureLineIcon: IconType;
export { PictureInPictureLineIcon }
export { PictureInPictureLineIcon as PictureInPictureLineIcon_alias_1 }

/**
 * The react component for the `pie-chart-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pie Chart 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/pie-chart-2-fill.svg)
 */
declare const PieChart2FillIcon: IconType;
export { PieChart2FillIcon }
export { PieChart2FillIcon as PieChart2FillIcon_alias_1 }

/**
 * The react component for the `pie-chart-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pie Chart 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/pie-chart-2-line.svg)
 */
declare const PieChart2LineIcon: IconType;
export { PieChart2LineIcon }
export { PieChart2LineIcon as PieChart2LineIcon_alias_1 }

/**
 * The react component for the `pie-chart-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pie Chart Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/pie-chart-box-fill.svg)
 */
declare const PieChartBoxFillIcon: IconType;
export { PieChartBoxFillIcon }
export { PieChartBoxFillIcon as PieChartBoxFillIcon_alias_1 }

/**
 * The react component for the `pie-chart-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pie Chart Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/pie-chart-box-line.svg)
 */
declare const PieChartBoxLineIcon: IconType;
export { PieChartBoxLineIcon }
export { PieChartBoxLineIcon as PieChartBoxLineIcon_alias_1 }

/**
 * The react component for the `pie-chart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pie Chart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/pie-chart-fill.svg)
 */
declare const PieChartFillIcon: IconType;
export { PieChartFillIcon }
export { PieChartFillIcon as PieChartFillIcon_alias_1 }

/**
 * The react component for the `pie-chart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pie Chart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/pie-chart-line.svg)
 */
declare const PieChartLineIcon: IconType;
export { PieChartLineIcon }
export { PieChartLineIcon as PieChartLineIcon_alias_1 }

/**
 * The react component for the `pin-distance-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pin Distance Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/pin-distance-fill.svg)
 */
declare const PinDistanceFillIcon: IconType;
export { PinDistanceFillIcon }
export { PinDistanceFillIcon as PinDistanceFillIcon_alias_1 }

/**
 * The react component for the `pin-distance-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pin Distance Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/pin-distance-line.svg)
 */
declare const PinDistanceLineIcon: IconType;
export { PinDistanceLineIcon }
export { PinDistanceLineIcon as PinDistanceLineIcon_alias_1 }

/**
 * The react component for the `ping-pong-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ping Pong Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/ping-pong-fill.svg)
 */
declare const PingPongFillIcon: IconType;
export { PingPongFillIcon }
export { PingPongFillIcon as PingPongFillIcon_alias_1 }

/**
 * The react component for the `ping-pong-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ping Pong Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/ping-pong-line.svg)
 */
declare const PingPongLineIcon: IconType;
export { PingPongLineIcon }
export { PingPongLineIcon as PingPongLineIcon_alias_1 }

/**
 * The react component for the `pinterest-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pinterest Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/pinterest-fill.svg)
 */
declare const PinterestFillIcon: IconType;
export { PinterestFillIcon }
export { PinterestFillIcon as PinterestFillIcon_alias_1 }

/**
 * The react component for the `pinterest-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pinterest Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/pinterest-line.svg)
 */
declare const PinterestLineIcon: IconType;
export { PinterestLineIcon }
export { PinterestLineIcon as PinterestLineIcon_alias_1 }

/**
 * The react component for the `pinyin-input.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pinyin Input Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/pinyin-input.svg)
 */
declare const PinyinInputIcon: IconType;
export { PinyinInputIcon }
export { PinyinInputIcon as PinyinInputIcon_alias_1 }
export { PinyinInputIcon as PinyinInputIcon_alias_2 }

/**
 * The react component for the `pixelfed-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pixelfed Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/pixelfed-fill.svg)
 */
declare const PixelfedFillIcon: IconType;
export { PixelfedFillIcon }
export { PixelfedFillIcon as PixelfedFillIcon_alias_1 }

/**
 * The react component for the `pixelfed-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pixelfed Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/pixelfed-line.svg)
 */
declare const PixelfedLineIcon: IconType;
export { PixelfedLineIcon }
export { PixelfedLineIcon as PixelfedLineIcon_alias_1 }

/**
 * The react component for the `plane-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Plane Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/plane-fill.svg)
 */
declare const PlaneFillIcon: IconType;
export { PlaneFillIcon }
export { PlaneFillIcon as PlaneFillIcon_alias_1 }

/**
 * The react component for the `plane-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Plane Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/plane-line.svg)
 */
declare const PlaneLineIcon: IconType;
export { PlaneLineIcon }
export { PlaneLineIcon as PlaneLineIcon_alias_1 }

/**
 * The react component for the `plant-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Plant Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/plant-fill.svg)
 */
declare const PlantFillIcon: IconType;
export { PlantFillIcon }
export { PlantFillIcon as PlantFillIcon_alias_1 }

/**
 * The react component for the `plant-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Plant Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/plant-line.svg)
 */
declare const PlantLineIcon: IconType;
export { PlantLineIcon }
export { PlantLineIcon as PlantLineIcon_alias_1 }

/**
 * The react component for the `play-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Play Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/play-circle-fill.svg)
 */
declare const PlayCircleFillIcon: IconType;
export { PlayCircleFillIcon }
export { PlayCircleFillIcon as PlayCircleFillIcon_alias_1 }

/**
 * The react component for the `play-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Play Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/play-circle-line.svg)
 */
declare const PlayCircleLineIcon: IconType;
export { PlayCircleLineIcon }
export { PlayCircleLineIcon as PlayCircleLineIcon_alias_1 }

/**
 * The react component for the `play-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Play Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/play-fill.svg)
 */
declare const PlayFillIcon: IconType;
export { PlayFillIcon }
export { PlayFillIcon as PlayFillIcon_alias_1 }

/**
 * The react component for the `play-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Play Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/play-line.svg)
 */
declare const PlayLineIcon: IconType;
export { PlayLineIcon }
export { PlayLineIcon as PlayLineIcon_alias_1 }

/**
 * The react component for the `play-list-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Play List 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/play-list-2-fill.svg)
 */
declare const PlayList2FillIcon: IconType;
export { PlayList2FillIcon }
export { PlayList2FillIcon as PlayList2FillIcon_alias_1 }

/**
 * The react component for the `play-list-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Play List 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/play-list-2-line.svg)
 */
declare const PlayList2LineIcon: IconType;
export { PlayList2LineIcon }
export { PlayList2LineIcon as PlayList2LineIcon_alias_1 }

/**
 * The react component for the `play-list-add-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Play List Add Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/play-list-add-fill.svg)
 */
declare const PlayListAddFillIcon: IconType;
export { PlayListAddFillIcon }
export { PlayListAddFillIcon as PlayListAddFillIcon_alias_1 }

/**
 * The react component for the `play-list-add-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Play List Add Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/play-list-add-line.svg)
 */
declare const PlayListAddLineIcon: IconType;
export { PlayListAddLineIcon }
export { PlayListAddLineIcon as PlayListAddLineIcon_alias_1 }

/**
 * The react component for the `play-list-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Play List Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/play-list-fill.svg)
 */
declare const PlayListFillIcon: IconType;
export { PlayListFillIcon }
export { PlayListFillIcon as PlayListFillIcon_alias_1 }

/**
 * The react component for the `play-list-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Play List Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/play-list-line.svg)
 */
declare const PlayListLineIcon: IconType;
export { PlayListLineIcon }
export { PlayListLineIcon as PlayListLineIcon_alias_1 }

/**
 * The react component for the `play-mini-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Play Mini Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/play-mini-fill.svg)
 */
declare const PlayMiniFillIcon: IconType;
export { PlayMiniFillIcon }
export { PlayMiniFillIcon as PlayMiniFillIcon_alias_1 }

/**
 * The react component for the `play-mini-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Play Mini Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/play-mini-line.svg)
 */
declare const PlayMiniLineIcon: IconType;
export { PlayMiniLineIcon }
export { PlayMiniLineIcon as PlayMiniLineIcon_alias_1 }

/**
 * The react component for the `playstation-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Playstation Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/playstation-fill.svg)
 */
declare const PlaystationFillIcon: IconType;
export { PlaystationFillIcon }
export { PlaystationFillIcon as PlaystationFillIcon_alias_1 }

/**
 * The react component for the `playstation-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Playstation Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/playstation-line.svg)
 */
declare const PlaystationLineIcon: IconType;
export { PlaystationLineIcon }
export { PlaystationLineIcon as PlaystationLineIcon_alias_1 }

/**
 * The react component for the `plug-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Plug 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/plug-2-fill.svg)
 */
declare const Plug2FillIcon: IconType;
export { Plug2FillIcon }
export { Plug2FillIcon as Plug2FillIcon_alias_1 }

/**
 * The react component for the `plug-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Plug 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/plug-2-line.svg)
 */
declare const Plug2LineIcon: IconType;
export { Plug2LineIcon }
export { Plug2LineIcon as Plug2LineIcon_alias_1 }

/**
 * The react component for the `plug-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Plug Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/plug-fill.svg)
 */
declare const PlugFillIcon: IconType;
export { PlugFillIcon }
export { PlugFillIcon as PlugFillIcon_alias_1 }

/**
 * The react component for the `plug-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Plug Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/plug-line.svg)
 */
declare const PlugLineIcon: IconType;
export { PlugLineIcon }
export { PlugLineIcon as PlugLineIcon_alias_1 }

/**
 * The react component for the `polaroid-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Polaroid 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/polaroid-2-fill.svg)
 */
declare const Polaroid2FillIcon: IconType;
export { Polaroid2FillIcon }
export { Polaroid2FillIcon as Polaroid2FillIcon_alias_1 }

/**
 * The react component for the `polaroid-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Polaroid 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/polaroid-2-line.svg)
 */
declare const Polaroid2LineIcon: IconType;
export { Polaroid2LineIcon }
export { Polaroid2LineIcon as Polaroid2LineIcon_alias_1 }

/**
 * The react component for the `polaroid-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Polaroid Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/polaroid-fill.svg)
 */
declare const PolaroidFillIcon: IconType;
export { PolaroidFillIcon }
export { PolaroidFillIcon as PolaroidFillIcon_alias_1 }

/**
 * The react component for the `polaroid-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Polaroid Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/polaroid-line.svg)
 */
declare const PolaroidLineIcon: IconType;
export { PolaroidLineIcon }
export { PolaroidLineIcon as PolaroidLineIcon_alias_1 }

/**
 * The react component for the `police-car-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Police Car Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/police-car-fill.svg)
 */
declare const PoliceCarFillIcon: IconType;
export { PoliceCarFillIcon }
export { PoliceCarFillIcon as PoliceCarFillIcon_alias_1 }

/**
 * The react component for the `police-car-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Police Car Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/police-car-line.svg)
 */
declare const PoliceCarLineIcon: IconType;
export { PoliceCarLineIcon }
export { PoliceCarLineIcon as PoliceCarLineIcon_alias_1 }

declare interface PositionerComponentProps {
    children: ReactNode;
}
export { PositionerComponentProps }
export { PositionerComponentProps as PositionerComponentProps_alias_1 }

export declare interface PositionerComponentProps_alias_2 {
    children: ReactChild;
}

/**
 * Render a component into the editors positioner widget using `createPortal`
 * from `react-dom`.
 */
declare const PositionerPortal: FC<PositionerComponentProps>;
export { PositionerPortal }
export { PositionerPortal as PositionerPortal_alias_1 }

/**
 * Render a component into the editors positioner widget using `createPortal`
 * from `react-dom`.
 */
export declare const PositionerPortal_alias_2: FC<PositionerComponentProps_alias_2>;

/**
 * The react component for the `price-tag-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Price Tag 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/price-tag-2-fill.svg)
 */
declare const PriceTag2FillIcon: IconType;
export { PriceTag2FillIcon }
export { PriceTag2FillIcon as PriceTag2FillIcon_alias_1 }

/**
 * The react component for the `price-tag-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Price Tag 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/price-tag-2-line.svg)
 */
declare const PriceTag2LineIcon: IconType;
export { PriceTag2LineIcon }
export { PriceTag2LineIcon as PriceTag2LineIcon_alias_1 }

/**
 * The react component for the `price-tag-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Price Tag 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/price-tag-3-fill.svg)
 */
declare const PriceTag3FillIcon: IconType;
export { PriceTag3FillIcon }
export { PriceTag3FillIcon as PriceTag3FillIcon_alias_1 }

/**
 * The react component for the `price-tag-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Price Tag 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/price-tag-3-line.svg)
 */
declare const PriceTag3LineIcon: IconType;
export { PriceTag3LineIcon }
export { PriceTag3LineIcon as PriceTag3LineIcon_alias_1 }

/**
 * The react component for the `price-tag-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Price Tag Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/price-tag-fill.svg)
 */
declare const PriceTagFillIcon: IconType;
export { PriceTagFillIcon }
export { PriceTagFillIcon as PriceTagFillIcon_alias_1 }

/**
 * The react component for the `price-tag-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Price Tag Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/price-tag-line.svg)
 */
declare const PriceTagLineIcon: IconType;
export { PriceTagLineIcon }
export { PriceTagLineIcon as PriceTagLineIcon_alias_1 }

/**
 * The react component for the `printer-cloud-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Printer Cloud Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/printer-cloud-fill.svg)
 */
declare const PrinterCloudFillIcon: IconType;
export { PrinterCloudFillIcon }
export { PrinterCloudFillIcon as PrinterCloudFillIcon_alias_1 }

/**
 * The react component for the `printer-cloud-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Printer Cloud Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/printer-cloud-line.svg)
 */
declare const PrinterCloudLineIcon: IconType;
export { PrinterCloudLineIcon }
export { PrinterCloudLineIcon as PrinterCloudLineIcon_alias_1 }

/**
 * The react component for the `printer-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Printer Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/printer-fill.svg)
 */
declare const PrinterFillIcon: IconType;
export { PrinterFillIcon }
export { PrinterFillIcon as PrinterFillIcon_alias_1 }

/**
 * The react component for the `printer-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Printer Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/printer-line.svg)
 */
declare const PrinterLineIcon: IconType;
export { PrinterLineIcon }
export { PrinterLineIcon as PrinterLineIcon_alias_1 }

/**
 * The react component for the `product-hunt-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Product Hunt Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/product-hunt-fill.svg)
 */
declare const ProductHuntFillIcon: IconType;
export { ProductHuntFillIcon }
export { ProductHuntFillIcon as ProductHuntFillIcon_alias_1 }

/**
 * The react component for the `product-hunt-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Product Hunt Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/product-hunt-line.svg)
 */
declare const ProductHuntLineIcon: IconType;
export { ProductHuntLineIcon }
export { ProductHuntLineIcon as ProductHuntLineIcon_alias_1 }

/**
 * The react component for the `profile-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Profile Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/profile-fill.svg)
 */
declare const ProfileFillIcon: IconType;
export { ProfileFillIcon }
export { ProfileFillIcon as ProfileFillIcon_alias_1 }

/**
 * The react component for the `profile-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Profile Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/profile-line.svg)
 */
declare const ProfileLineIcon: IconType;
export { ProfileLineIcon }
export { ProfileLineIcon as ProfileLineIcon_alias_1 }

/**
 * The react component for the `projector-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Projector 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/projector-2-fill.svg)
 */
declare const Projector2FillIcon: IconType;
export { Projector2FillIcon }
export { Projector2FillIcon as Projector2FillIcon_alias_1 }

/**
 * The react component for the `projector-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Projector 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/projector-2-line.svg)
 */
declare const Projector2LineIcon: IconType;
export { Projector2LineIcon }
export { Projector2LineIcon as Projector2LineIcon_alias_1 }

/**
 * The react component for the `projector-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Projector Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/projector-fill.svg)
 */
declare const ProjectorFillIcon: IconType;
export { ProjectorFillIcon }
export { ProjectorFillIcon as ProjectorFillIcon_alias_1 }

/**
 * The react component for the `projector-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Projector Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/projector-line.svg)
 */
declare const ProjectorLineIcon: IconType;
export { ProjectorLineIcon }
export { ProjectorLineIcon as ProjectorLineIcon_alias_1 }

/**
 * The react component for the `psychotherapy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Psychotherapy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/psychotherapy-fill.svg)
 */
declare const PsychotherapyFillIcon: IconType;
export { PsychotherapyFillIcon }
export { PsychotherapyFillIcon as PsychotherapyFillIcon_alias_1 }

/**
 * The react component for the `psychotherapy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Psychotherapy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/psychotherapy-line.svg)
 */
declare const PsychotherapyLineIcon: IconType;
export { PsychotherapyLineIcon }
export { PsychotherapyLineIcon as PsychotherapyLineIcon_alias_1 }

/**
 * The react component for the `pulse-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pulse Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/pulse-fill.svg)
 */
declare const PulseFillIcon: IconType;
export { PulseFillIcon }
export { PulseFillIcon as PulseFillIcon_alias_1 }

/**
 * The react component for the `pulse-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pulse Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/pulse-line.svg)
 */
declare const PulseLineIcon: IconType;
export { PulseLineIcon }
export { PulseLineIcon as PulseLineIcon_alias_1 }

/**
 * The react component for the `pushpin-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pushpin 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/pushpin-2-fill.svg)
 */
declare const Pushpin2FillIcon: IconType;
export { Pushpin2FillIcon }
export { Pushpin2FillIcon as Pushpin2FillIcon_alias_1 }

/**
 * The react component for the `pushpin-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pushpin 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/pushpin-2-line.svg)
 */
declare const Pushpin2LineIcon: IconType;
export { Pushpin2LineIcon }
export { Pushpin2LineIcon as Pushpin2LineIcon_alias_1 }

/**
 * The react component for the `pushpin-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pushpin Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/pushpin-fill.svg)
 */
declare const PushpinFillIcon: IconType;
export { PushpinFillIcon }
export { PushpinFillIcon as PushpinFillIcon_alias_1 }

/**
 * The react component for the `pushpin-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Pushpin Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/pushpin-line.svg)
 */
declare const PushpinLineIcon: IconType;
export { PushpinLineIcon }
export { PushpinLineIcon as PushpinLineIcon_alias_1 }

/**
 * The react component for the `qq-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Qq Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/qq-fill.svg)
 */
declare const QqFillIcon: IconType;
export { QqFillIcon }
export { QqFillIcon as QqFillIcon_alias_1 }

/**
 * The react component for the `qq-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Qq Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/qq-line.svg)
 */
declare const QqLineIcon: IconType;
export { QqLineIcon }
export { QqLineIcon as QqLineIcon_alias_1 }

/**
 * The react component for the `qr-code-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Qr Code Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/qr-code-fill.svg)
 */
declare const QrCodeFillIcon: IconType;
export { QrCodeFillIcon }
export { QrCodeFillIcon as QrCodeFillIcon_alias_1 }

/**
 * The react component for the `qr-code-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Qr Code Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/qr-code-line.svg)
 */
declare const QrCodeLineIcon: IconType;
export { QrCodeLineIcon }
export { QrCodeLineIcon as QrCodeLineIcon_alias_1 }

/**
 * The react component for the `qr-scan-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Qr Scan 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/qr-scan-2-fill.svg)
 */
declare const QrScan2FillIcon: IconType;
export { QrScan2FillIcon }
export { QrScan2FillIcon as QrScan2FillIcon_alias_1 }

/**
 * The react component for the `qr-scan-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Qr Scan 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/qr-scan-2-line.svg)
 */
declare const QrScan2LineIcon: IconType;
export { QrScan2LineIcon }
export { QrScan2LineIcon as QrScan2LineIcon_alias_1 }

/**
 * The react component for the `qr-scan-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Qr Scan Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/qr-scan-fill.svg)
 */
declare const QrScanFillIcon: IconType;
export { QrScanFillIcon }
export { QrScanFillIcon as QrScanFillIcon_alias_1 }

/**
 * The react component for the `qr-scan-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Qr Scan Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/qr-scan-line.svg)
 */
declare const QrScanLineIcon: IconType;
export { QrScanLineIcon }
export { QrScanLineIcon as QrScanLineIcon_alias_1 }

/**
 * The react component for the `question-answer-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Question Answer Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/question-answer-fill.svg)
 */
declare const QuestionAnswerFillIcon: IconType;
export { QuestionAnswerFillIcon }
export { QuestionAnswerFillIcon as QuestionAnswerFillIcon_alias_1 }

/**
 * The react component for the `question-answer-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Question Answer Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/question-answer-line.svg)
 */
declare const QuestionAnswerLineIcon: IconType;
export { QuestionAnswerLineIcon }
export { QuestionAnswerLineIcon as QuestionAnswerLineIcon_alias_1 }

/**
 * The react component for the `question-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Question Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/question-fill.svg)
 */
declare const QuestionFillIcon: IconType;
export { QuestionFillIcon }
export { QuestionFillIcon as QuestionFillIcon_alias_1 }

/**
 * The react component for the `question-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Question Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/question-line.svg)
 */
declare const QuestionLineIcon: IconType;
export { QuestionLineIcon }
export { QuestionLineIcon as QuestionLineIcon_alias_1 }

/**
 * The react component for the `question-mark.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Question Mark Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/question-mark.svg)
 */
declare const QuestionMarkIcon: IconType;
export { QuestionMarkIcon }
export { QuestionMarkIcon as QuestionMarkIcon_alias_1 }
export { QuestionMarkIcon as QuestionMarkIcon_alias_2 }

/**
 * The react component for the `questionnaire-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Questionnaire Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/questionnaire-fill.svg)
 */
declare const QuestionnaireFillIcon: IconType;
export { QuestionnaireFillIcon }
export { QuestionnaireFillIcon as QuestionnaireFillIcon_alias_1 }

/**
 * The react component for the `questionnaire-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Questionnaire Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/questionnaire-line.svg)
 */
declare const QuestionnaireLineIcon: IconType;
export { QuestionnaireLineIcon }
export { QuestionnaireLineIcon as QuestionnaireLineIcon_alias_1 }

/**
 * The react component for the `quill-pen-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Quill Pen Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/quill-pen-fill.svg)
 */
declare const QuillPenFillIcon: IconType;
export { QuillPenFillIcon }
export { QuillPenFillIcon as QuillPenFillIcon_alias_1 }

/**
 * The react component for the `quill-pen-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Quill Pen Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/quill-pen-line.svg)
 */
declare const QuillPenLineIcon: IconType;
export { QuillPenLineIcon }
export { QuillPenLineIcon as QuillPenLineIcon_alias_1 }

/**
 * The react component for the `radar-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Radar Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/radar-fill.svg)
 */
declare const RadarFillIcon: IconType;
export { RadarFillIcon }
export { RadarFillIcon as RadarFillIcon_alias_1 }

/**
 * The react component for the `radar-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Radar Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/radar-line.svg)
 */
declare const RadarLineIcon: IconType;
export { RadarLineIcon }
export { RadarLineIcon as RadarLineIcon_alias_1 }

/**
 * The react component for the `radio-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Radio 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/radio-2-fill.svg)
 */
declare const Radio2FillIcon: IconType;
export { Radio2FillIcon }
export { Radio2FillIcon as Radio2FillIcon_alias_1 }

/**
 * The react component for the `radio-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Radio 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/radio-2-line.svg)
 */
declare const Radio2LineIcon: IconType;
export { Radio2LineIcon }
export { Radio2LineIcon as Radio2LineIcon_alias_1 }

/**
 * The react component for the `radio-button-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Radio Button Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/radio-button-fill.svg)
 */
declare const RadioButtonFillIcon: IconType;
export { RadioButtonFillIcon }
export { RadioButtonFillIcon as RadioButtonFillIcon_alias_1 }

/**
 * The react component for the `radio-button-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Radio Button Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/radio-button-line.svg)
 */
declare const RadioButtonLineIcon: IconType;
export { RadioButtonLineIcon }
export { RadioButtonLineIcon as RadioButtonLineIcon_alias_1 }

/**
 * The react component for the `radio-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Radio Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/radio-fill.svg)
 */
declare const RadioFillIcon: IconType;
export { RadioFillIcon }
export { RadioFillIcon as RadioFillIcon_alias_1 }

/**
 * The react component for the `radio-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Radio Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/radio-line.svg)
 */
declare const RadioLineIcon: IconType;
export { RadioLineIcon }
export { RadioLineIcon as RadioLineIcon_alias_1 }

/**
 * The react component for the `rainbow-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rainbow Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/rainbow-fill.svg)
 */
declare const RainbowFillIcon: IconType;
export { RainbowFillIcon }
export { RainbowFillIcon as RainbowFillIcon_alias_1 }

/**
 * The react component for the `rainbow-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rainbow Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/rainbow-line.svg)
 */
declare const RainbowLineIcon: IconType;
export { RainbowLineIcon }
export { RainbowLineIcon as RainbowLineIcon_alias_1 }

/**
 * The react component for the `rainy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rainy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/rainy-fill.svg)
 */
declare const RainyFillIcon: IconType;
export { RainyFillIcon }
export { RainyFillIcon as RainyFillIcon_alias_1 }

/**
 * The react component for the `rainy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rainy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/rainy-line.svg)
 */
declare const RainyLineIcon: IconType;
export { RainyLineIcon }
export { RainyLineIcon as RainyLineIcon_alias_1 }

/**
 * The react component for the `reactjs-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Reactjs Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/reactjs-fill.svg)
 */
declare const ReactjsFillIcon: IconType;
export { ReactjsFillIcon }
export { ReactjsFillIcon as ReactjsFillIcon_alias_1 }

/**
 * The react component for the `reactjs-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Reactjs Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/reactjs-line.svg)
 */
declare const ReactjsLineIcon: IconType;
export { ReactjsLineIcon }
export { ReactjsLineIcon as ReactjsLineIcon_alias_1 }

/**
 * The react component for the `record-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Record Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/record-circle-fill.svg)
 */
declare const RecordCircleFillIcon: IconType;
export { RecordCircleFillIcon }
export { RecordCircleFillIcon as RecordCircleFillIcon_alias_1 }

/**
 * The react component for the `record-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Record Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/record-circle-line.svg)
 */
declare const RecordCircleLineIcon: IconType;
export { RecordCircleLineIcon }
export { RecordCircleLineIcon as RecordCircleLineIcon_alias_1 }

/**
 * The react component for the `record-mail-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Record Mail Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/record-mail-fill.svg)
 */
declare const RecordMailFillIcon: IconType;
export { RecordMailFillIcon }
export { RecordMailFillIcon as RecordMailFillIcon_alias_1 }

/**
 * The react component for the `record-mail-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Record Mail Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/record-mail-line.svg)
 */
declare const RecordMailLineIcon: IconType;
export { RecordMailLineIcon }
export { RecordMailLineIcon as RecordMailLineIcon_alias_1 }

/**
 * The react component for the `recycle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Recycle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/recycle-fill.svg)
 */
declare const RecycleFillIcon: IconType;
export { RecycleFillIcon }
export { RecycleFillIcon as RecycleFillIcon_alias_1 }

/**
 * The react component for the `recycle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Recycle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/recycle-line.svg)
 */
declare const RecycleLineIcon: IconType;
export { RecycleLineIcon }
export { RecycleLineIcon as RecycleLineIcon_alias_1 }

/**
 * The react component for the `reddit-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Reddit Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/reddit-fill.svg)
 */
declare const RedditFillIcon: IconType;
export { RedditFillIcon }
export { RedditFillIcon as RedditFillIcon_alias_1 }

/**
 * The react component for the `reddit-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Reddit Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/reddit-line.svg)
 */
declare const RedditLineIcon: IconType;
export { RedditLineIcon }
export { RedditLineIcon as RedditLineIcon_alias_1 }

/**
 * The react component for the `red-packet-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Red Packet Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/red-packet-fill.svg)
 */
declare const RedPacketFillIcon: IconType;
export { RedPacketFillIcon }
export { RedPacketFillIcon as RedPacketFillIcon_alias_1 }

/**
 * The react component for the `red-packet-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Red Packet Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/red-packet-line.svg)
 */
declare const RedPacketLineIcon: IconType;
export { RedPacketLineIcon }
export { RedPacketLineIcon as RedPacketLineIcon_alias_1 }

/**
 * The react component for the `refresh-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Refresh Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/refresh-fill.svg)
 */
declare const RefreshFillIcon: IconType;
export { RefreshFillIcon }
export { RefreshFillIcon as RefreshFillIcon_alias_1 }

/**
 * The react component for the `refresh-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Refresh Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/refresh-line.svg)
 */
declare const RefreshLineIcon: IconType;
export { RefreshLineIcon }
export { RefreshLineIcon as RefreshLineIcon_alias_1 }

/**
 * The react component for the `refund-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Refund 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/refund-2-fill.svg)
 */
declare const Refund2FillIcon: IconType;
export { Refund2FillIcon }
export { Refund2FillIcon as Refund2FillIcon_alias_1 }

/**
 * The react component for the `refund-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Refund 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/refund-2-line.svg)
 */
declare const Refund2LineIcon: IconType;
export { Refund2LineIcon }
export { Refund2LineIcon as Refund2LineIcon_alias_1 }

/**
 * The react component for the `refund-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Refund Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/refund-fill.svg)
 */
declare const RefundFillIcon: IconType;
export { RefundFillIcon }
export { RefundFillIcon as RefundFillIcon_alias_1 }

/**
 * The react component for the `refund-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Refund Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/refund-line.svg)
 */
declare const RefundLineIcon: IconType;
export { RefundLineIcon }
export { RefundLineIcon as RefundLineIcon_alias_1 }

/**
 * The react component for the `registered-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Registered Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/registered-fill.svg)
 */
declare const RegisteredFillIcon: IconType;
export { RegisteredFillIcon }
export { RegisteredFillIcon as RegisteredFillIcon_alias_1 }

/**
 * The react component for the `registered-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Registered Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/registered-line.svg)
 */
declare const RegisteredLineIcon: IconType;
export { RegisteredLineIcon }
export { RegisteredLineIcon as RegisteredLineIcon_alias_1 }

/**
 * The react component for the `remixicon-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Remixicon Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/remixicon-fill.svg)
 */
declare const RemixiconFillIcon: IconType;
export { RemixiconFillIcon }
export { RemixiconFillIcon as RemixiconFillIcon_alias_1 }

/**
 * The react component for the `remixicon-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Remixicon Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/remixicon-line.svg)
 */
declare const RemixiconLineIcon: IconType;
export { RemixiconLineIcon }
export { RemixiconLineIcon as RemixiconLineIcon_alias_1 }

/**
 * The react component for the `remote-control-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Remote Control 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/remote-control-2-fill.svg)
 */
declare const RemoteControl2FillIcon: IconType;
export { RemoteControl2FillIcon }
export { RemoteControl2FillIcon as RemoteControl2FillIcon_alias_1 }

/**
 * The react component for the `remote-control-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Remote Control 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/remote-control-2-line.svg)
 */
declare const RemoteControl2LineIcon: IconType;
export { RemoteControl2LineIcon }
export { RemoteControl2LineIcon as RemoteControl2LineIcon_alias_1 }

/**
 * The react component for the `remote-control-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Remote Control Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/remote-control-fill.svg)
 */
declare const RemoteControlFillIcon: IconType;
export { RemoteControlFillIcon }
export { RemoteControlFillIcon as RemoteControlFillIcon_alias_1 }

/**
 * The react component for the `remote-control-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Remote Control Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/remote-control-line.svg)
 */
declare const RemoteControlLineIcon: IconType;
export { RemoteControlLineIcon }
export { RemoteControlLineIcon as RemoteControlLineIcon_alias_1 }

/**
 * The react component for the `repeat-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Repeat 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/repeat-2-fill.svg)
 */
declare const Repeat2FillIcon: IconType;
export { Repeat2FillIcon }
export { Repeat2FillIcon as Repeat2FillIcon_alias_1 }

/**
 * The react component for the `repeat-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Repeat 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/repeat-2-line.svg)
 */
declare const Repeat2LineIcon: IconType;
export { Repeat2LineIcon }
export { Repeat2LineIcon as Repeat2LineIcon_alias_1 }

/**
 * The react component for the `repeat-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Repeat Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/repeat-fill.svg)
 */
declare const RepeatFillIcon: IconType;
export { RepeatFillIcon }
export { RepeatFillIcon as RepeatFillIcon_alias_1 }

/**
 * The react component for the `repeat-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Repeat Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/repeat-line.svg)
 */
declare const RepeatLineIcon: IconType;
export { RepeatLineIcon }
export { RepeatLineIcon as RepeatLineIcon_alias_1 }

/**
 * The react component for the `repeat-one-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Repeat One Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/repeat-one-fill.svg)
 */
declare const RepeatOneFillIcon: IconType;
export { RepeatOneFillIcon }
export { RepeatOneFillIcon as RepeatOneFillIcon_alias_1 }

/**
 * The react component for the `repeat-one-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Repeat One Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/repeat-one-line.svg)
 */
declare const RepeatOneLineIcon: IconType;
export { RepeatOneLineIcon }
export { RepeatOneLineIcon as RepeatOneLineIcon_alias_1 }

/**
 * The react component for the `reply-all-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Reply All Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/reply-all-fill.svg)
 */
declare const ReplyAllFillIcon: IconType;
export { ReplyAllFillIcon }
export { ReplyAllFillIcon as ReplyAllFillIcon_alias_1 }

/**
 * The react component for the `reply-all-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Reply All Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/reply-all-line.svg)
 */
declare const ReplyAllLineIcon: IconType;
export { ReplyAllLineIcon }
export { ReplyAllLineIcon as ReplyAllLineIcon_alias_1 }

/**
 * The react component for the `reply-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Reply Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/reply-fill.svg)
 */
declare const ReplyFillIcon: IconType;
export { ReplyFillIcon }
export { ReplyFillIcon as ReplyFillIcon_alias_1 }

/**
 * The react component for the `reply-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Reply Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/reply-line.svg)
 */
declare const ReplyLineIcon: IconType;
export { ReplyLineIcon }
export { ReplyLineIcon as ReplyLineIcon_alias_1 }

/**
 * The react component for the `reserved-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Reserved Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/reserved-fill.svg)
 */
declare const ReservedFillIcon: IconType;
export { ReservedFillIcon }
export { ReservedFillIcon as ReservedFillIcon_alias_1 }

/**
 * The react component for the `reserved-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Reserved Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/reserved-line.svg)
 */
declare const ReservedLineIcon: IconType;
export { ReservedLineIcon }
export { ReservedLineIcon as ReservedLineIcon_alias_1 }

/**
 * The react component for the `restart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Restart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/restart-fill.svg)
 */
declare const RestartFillIcon: IconType;
export { RestartFillIcon }
export { RestartFillIcon as RestartFillIcon_alias_1 }

/**
 * The react component for the `restart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Restart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/restart-line.svg)
 */
declare const RestartLineIcon: IconType;
export { RestartLineIcon }
export { RestartLineIcon as RestartLineIcon_alias_1 }

/**
 * The react component for the `restaurant-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Restaurant 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/restaurant-2-fill.svg)
 */
declare const Restaurant2FillIcon: IconType;
export { Restaurant2FillIcon }
export { Restaurant2FillIcon as Restaurant2FillIcon_alias_1 }

/**
 * The react component for the `restaurant-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Restaurant 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/restaurant-2-line.svg)
 */
declare const Restaurant2LineIcon: IconType;
export { Restaurant2LineIcon }
export { Restaurant2LineIcon as Restaurant2LineIcon_alias_1 }

/**
 * The react component for the `restaurant-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Restaurant Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/restaurant-fill.svg)
 */
declare const RestaurantFillIcon: IconType;
export { RestaurantFillIcon }
export { RestaurantFillIcon as RestaurantFillIcon_alias_1 }

/**
 * The react component for the `restaurant-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Restaurant Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/restaurant-line.svg)
 */
declare const RestaurantLineIcon: IconType;
export { RestaurantLineIcon }
export { RestaurantLineIcon as RestaurantLineIcon_alias_1 }

/**
 * The react component for the `rest-time-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rest Time Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/rest-time-fill.svg)
 */
declare const RestTimeFillIcon: IconType;
export { RestTimeFillIcon }
export { RestTimeFillIcon as RestTimeFillIcon_alias_1 }

/**
 * The react component for the `rest-time-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rest Time Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/rest-time-line.svg)
 */
declare const RestTimeLineIcon: IconType;
export { RestTimeLineIcon }
export { RestTimeLineIcon as RestTimeLineIcon_alias_1 }

/**
 * The react component for the `rewind-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rewind Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/rewind-fill.svg)
 */
declare const RewindFillIcon: IconType;
export { RewindFillIcon }
export { RewindFillIcon as RewindFillIcon_alias_1 }

/**
 * The react component for the `rewind-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rewind Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/rewind-line.svg)
 */
declare const RewindLineIcon: IconType;
export { RewindLineIcon }
export { RewindLineIcon as RewindLineIcon_alias_1 }

/**
 * The react component for the `rewind-mini-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rewind Mini Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/rewind-mini-fill.svg)
 */
declare const RewindMiniFillIcon: IconType;
export { RewindMiniFillIcon }
export { RewindMiniFillIcon as RewindMiniFillIcon_alias_1 }

/**
 * The react component for the `rewind-mini-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rewind Mini Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/rewind-mini-line.svg)
 */
declare const RewindMiniLineIcon: IconType;
export { RewindMiniLineIcon }
export { RewindMiniLineIcon as RewindMiniLineIcon_alias_1 }

/**
 * The react component for the `rhythm-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rhythm Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/rhythm-fill.svg)
 */
declare const RhythmFillIcon: IconType;
export { RhythmFillIcon }
export { RhythmFillIcon as RhythmFillIcon_alias_1 }

/**
 * The react component for the `rhythm-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rhythm Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/rhythm-line.svg)
 */
declare const RhythmLineIcon: IconType;
export { RhythmLineIcon }
export { RhythmLineIcon as RhythmLineIcon_alias_1 }

/**
 * The react component for the `riding-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Riding Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/riding-fill.svg)
 */
declare const RidingFillIcon: IconType;
export { RidingFillIcon }
export { RidingFillIcon as RidingFillIcon_alias_1 }

/**
 * The react component for the `riding-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Riding Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/riding-line.svg)
 */
declare const RidingLineIcon: IconType;
export { RidingLineIcon }
export { RidingLineIcon as RidingLineIcon_alias_1 }

/**
 * The react component for the `road-map-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Road Map Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/road-map-fill.svg)
 */
declare const RoadMapFillIcon: IconType;
export { RoadMapFillIcon }
export { RoadMapFillIcon as RoadMapFillIcon_alias_1 }

/**
 * The react component for the `road-map-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Road Map Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/road-map-line.svg)
 */
declare const RoadMapLineIcon: IconType;
export { RoadMapLineIcon }
export { RoadMapLineIcon as RoadMapLineIcon_alias_1 }

/**
 * The react component for the `roadster-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Roadster Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/roadster-fill.svg)
 */
declare const RoadsterFillIcon: IconType;
export { RoadsterFillIcon }
export { RoadsterFillIcon as RoadsterFillIcon_alias_1 }

/**
 * The react component for the `roadster-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Roadster Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/roadster-line.svg)
 */
declare const RoadsterLineIcon: IconType;
export { RoadsterLineIcon }
export { RoadsterLineIcon as RoadsterLineIcon_alias_1 }

/**
 * The react component for the `robot-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Robot Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/robot-fill.svg)
 */
declare const RobotFillIcon: IconType;
export { RobotFillIcon }
export { RobotFillIcon as RobotFillIcon_alias_1 }

/**
 * The react component for the `robot-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Robot Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/robot-line.svg)
 */
declare const RobotLineIcon: IconType;
export { RobotLineIcon }
export { RobotLineIcon as RobotLineIcon_alias_1 }

/**
 * The react component for the `rocket-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rocket 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/rocket-2-fill.svg)
 */
declare const Rocket2FillIcon: IconType;
export { Rocket2FillIcon }
export { Rocket2FillIcon as Rocket2FillIcon_alias_1 }

/**
 * The react component for the `rocket-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rocket 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/rocket-2-line.svg)
 */
declare const Rocket2LineIcon: IconType;
export { Rocket2LineIcon }
export { Rocket2LineIcon as Rocket2LineIcon_alias_1 }

/**
 * The react component for the `rocket-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rocket Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/rocket-fill.svg)
 */
declare const RocketFillIcon: IconType;
export { RocketFillIcon }
export { RocketFillIcon as RocketFillIcon_alias_1 }

/**
 * The react component for the `rocket-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rocket Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/rocket-line.svg)
 */
declare const RocketLineIcon: IconType;
export { RocketLineIcon }
export { RocketLineIcon as RocketLineIcon_alias_1 }

/**
 * The react component for the `rotate-lock-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rotate Lock Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/rotate-lock-fill.svg)
 */
declare const RotateLockFillIcon: IconType;
export { RotateLockFillIcon }
export { RotateLockFillIcon as RotateLockFillIcon_alias_1 }

/**
 * The react component for the `rotate-lock-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rotate Lock Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/rotate-lock-line.svg)
 */
declare const RotateLockLineIcon: IconType;
export { RotateLockLineIcon }
export { RotateLockLineIcon as RotateLockLineIcon_alias_1 }

/**
 * The react component for the `rounded-corner.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rounded Corner Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/rounded-corner.svg)
 */
declare const RoundedCornerIcon: IconType;
export { RoundedCornerIcon }
export { RoundedCornerIcon as RoundedCornerIcon_alias_1 }
export { RoundedCornerIcon as RoundedCornerIcon_alias_2 }

/**
 * The react component for the `route-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Route Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/route-fill.svg)
 */
declare const RouteFillIcon: IconType;
export { RouteFillIcon }
export { RouteFillIcon as RouteFillIcon_alias_1 }

/**
 * The react component for the `route-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Route Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/route-line.svg)
 */
declare const RouteLineIcon: IconType;
export { RouteLineIcon }
export { RouteLineIcon as RouteLineIcon_alias_1 }

/**
 * The react component for the `router-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Router Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/router-fill.svg)
 */
declare const RouterFillIcon: IconType;
export { RouterFillIcon }
export { RouterFillIcon as RouterFillIcon_alias_1 }

/**
 * The react component for the `router-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Router Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/router-line.svg)
 */
declare const RouterLineIcon: IconType;
export { RouterLineIcon }
export { RouterLineIcon as RouterLineIcon_alias_1 }

/**
 * The react component for the `rss-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rss Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/rss-fill.svg)
 */
declare const RssFillIcon: IconType;
export { RssFillIcon }
export { RssFillIcon as RssFillIcon_alias_1 }

/**
 * The react component for the `rss-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Rss Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/rss-line.svg)
 */
declare const RssLineIcon: IconType;
export { RssLineIcon }
export { RssLineIcon as RssLineIcon_alias_1 }

/**
 * The react component for the `ruler-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ruler 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/ruler-2-fill.svg)
 */
declare const Ruler2FillIcon: IconType;
export { Ruler2FillIcon }
export { Ruler2FillIcon as Ruler2FillIcon_alias_1 }

/**
 * The react component for the `ruler-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ruler 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/ruler-2-line.svg)
 */
declare const Ruler2LineIcon: IconType;
export { Ruler2LineIcon }
export { Ruler2LineIcon as Ruler2LineIcon_alias_1 }

/**
 * The react component for the `ruler-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ruler Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/ruler-fill.svg)
 */
declare const RulerFillIcon: IconType;
export { RulerFillIcon }
export { RulerFillIcon as RulerFillIcon_alias_1 }

/**
 * The react component for the `ruler-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ruler Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/ruler-line.svg)
 */
declare const RulerLineIcon: IconType;
export { RulerLineIcon }
export { RulerLineIcon as RulerLineIcon_alias_1 }

/**
 * The react component for the `run-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Run Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/run-fill.svg)
 */
declare const RunFillIcon: IconType;
export { RunFillIcon }
export { RunFillIcon as RunFillIcon_alias_1 }

/**
 * The react component for the `run-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Run Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/run-line.svg)
 */
declare const RunLineIcon: IconType;
export { RunLineIcon }
export { RunLineIcon as RunLineIcon_alias_1 }

/**
 * The react component for the `safari-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Safari Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/safari-fill.svg)
 */
declare const SafariFillIcon: IconType;
export { SafariFillIcon }
export { SafariFillIcon as SafariFillIcon_alias_1 }

/**
 * The react component for the `safari-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Safari Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/safari-line.svg)
 */
declare const SafariLineIcon: IconType;
export { SafariLineIcon }
export { SafariLineIcon as SafariLineIcon_alias_1 }

/**
 * The react component for the `safe-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Safe 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/safe-2-fill.svg)
 */
declare const Safe2FillIcon: IconType;
export { Safe2FillIcon }
export { Safe2FillIcon as Safe2FillIcon_alias_1 }

/**
 * The react component for the `safe-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Safe 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/safe-2-line.svg)
 */
declare const Safe2LineIcon: IconType;
export { Safe2LineIcon }
export { Safe2LineIcon as Safe2LineIcon_alias_1 }

/**
 * The react component for the `safe-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Safe Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/safe-fill.svg)
 */
declare const SafeFillIcon: IconType;
export { SafeFillIcon }
export { SafeFillIcon as SafeFillIcon_alias_1 }

/**
 * The react component for the `safe-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Safe Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/safe-line.svg)
 */
declare const SafeLineIcon: IconType;
export { SafeLineIcon }
export { SafeLineIcon as SafeLineIcon_alias_1 }

/**
 * The react component for the `sailboat-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sailboat Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/sailboat-fill.svg)
 */
declare const SailboatFillIcon: IconType;
export { SailboatFillIcon }
export { SailboatFillIcon as SailboatFillIcon_alias_1 }

/**
 * The react component for the `sailboat-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sailboat Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/sailboat-line.svg)
 */
declare const SailboatLineIcon: IconType;
export { SailboatLineIcon }
export { SailboatLineIcon as SailboatLineIcon_alias_1 }

/**
 * The react component for the `save-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Save 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/save-2-fill.svg)
 */
declare const Save2FillIcon: IconType;
export { Save2FillIcon }
export { Save2FillIcon as Save2FillIcon_alias_1 }

/**
 * The react component for the `save-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Save 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/save-2-line.svg)
 */
declare const Save2LineIcon: IconType;
export { Save2LineIcon }
export { Save2LineIcon as Save2LineIcon_alias_1 }

/**
 * The react component for the `save-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Save 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/save-3-fill.svg)
 */
declare const Save3FillIcon: IconType;
export { Save3FillIcon }
export { Save3FillIcon as Save3FillIcon_alias_1 }

/**
 * The react component for the `save-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Save 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/save-3-line.svg)
 */
declare const Save3LineIcon: IconType;
export { Save3LineIcon }
export { Save3LineIcon as Save3LineIcon_alias_1 }

/**
 * The react component for the `save-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Save Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/save-fill.svg)
 */
declare const SaveFillIcon: IconType;
export { SaveFillIcon }
export { SaveFillIcon as SaveFillIcon_alias_1 }

/**
 * The react component for the `save-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Save Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/save-line.svg)
 */
declare const SaveLineIcon: IconType;
export { SaveLineIcon }
export { SaveLineIcon as SaveLineIcon_alias_1 }

/**
 * The react component for the `scales-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scales 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/scales-2-fill.svg)
 */
declare const Scales2FillIcon: IconType;
export { Scales2FillIcon }
export { Scales2FillIcon as Scales2FillIcon_alias_1 }

/**
 * The react component for the `scales-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scales 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/scales-2-line.svg)
 */
declare const Scales2LineIcon: IconType;
export { Scales2LineIcon }
export { Scales2LineIcon as Scales2LineIcon_alias_1 }

/**
 * The react component for the `scales-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scales 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/scales-3-fill.svg)
 */
declare const Scales3FillIcon: IconType;
export { Scales3FillIcon }
export { Scales3FillIcon as Scales3FillIcon_alias_1 }

/**
 * The react component for the `scales-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scales 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/scales-3-line.svg)
 */
declare const Scales3LineIcon: IconType;
export { Scales3LineIcon }
export { Scales3LineIcon as Scales3LineIcon_alias_1 }

/**
 * The react component for the `scales-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scales Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/scales-fill.svg)
 */
declare const ScalesFillIcon: IconType;
export { ScalesFillIcon }
export { ScalesFillIcon as ScalesFillIcon_alias_1 }

/**
 * The react component for the `scales-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scales Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/scales-line.svg)
 */
declare const ScalesLineIcon: IconType;
export { ScalesLineIcon }
export { ScalesLineIcon as ScalesLineIcon_alias_1 }

/**
 * The react component for the `scan-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scan 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/scan-2-fill.svg)
 */
declare const Scan2FillIcon: IconType;
export { Scan2FillIcon }
export { Scan2FillIcon as Scan2FillIcon_alias_1 }

/**
 * The react component for the `scan-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scan 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/scan-2-line.svg)
 */
declare const Scan2LineIcon: IconType;
export { Scan2LineIcon }
export { Scan2LineIcon as Scan2LineIcon_alias_1 }

/**
 * The react component for the `scan-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scan Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/scan-fill.svg)
 */
declare const ScanFillIcon: IconType;
export { ScanFillIcon }
export { ScanFillIcon as ScanFillIcon_alias_1 }

/**
 * The react component for the `scan-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scan Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/scan-line.svg)
 */
declare const ScanLineIcon: IconType;
export { ScanLineIcon }
export { ScanLineIcon as ScanLineIcon_alias_1 }

/**
 * The react component for the `scissors-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scissors 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/scissors-2-fill.svg)
 */
declare const Scissors2FillIcon: IconType;
export { Scissors2FillIcon }
export { Scissors2FillIcon as Scissors2FillIcon_alias_1 }

/**
 * The react component for the `scissors-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scissors 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/scissors-2-line.svg)
 */
declare const Scissors2LineIcon: IconType;
export { Scissors2LineIcon }
export { Scissors2LineIcon as Scissors2LineIcon_alias_1 }

/**
 * The react component for the `scissors-cut-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scissors Cut Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/scissors-cut-fill.svg)
 */
declare const ScissorsCutFillIcon: IconType;
export { ScissorsCutFillIcon }
export { ScissorsCutFillIcon as ScissorsCutFillIcon_alias_1 }

/**
 * The react component for the `scissors-cut-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scissors Cut Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/scissors-cut-line.svg)
 */
declare const ScissorsCutLineIcon: IconType;
export { ScissorsCutLineIcon }
export { ScissorsCutLineIcon as ScissorsCutLineIcon_alias_1 }

/**
 * The react component for the `scissors-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scissors Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/scissors-fill.svg)
 */
declare const ScissorsFillIcon: IconType;
export { ScissorsFillIcon }
export { ScissorsFillIcon as ScissorsFillIcon_alias_1 }
export { ScissorsFillIcon as ScissorsFillIcon_alias_2 }

/**
 * The react component for the `scissors-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Scissors Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/scissors-line.svg)
 */
declare const ScissorsLineIcon: IconType;
export { ScissorsLineIcon }
export { ScissorsLineIcon as ScissorsLineIcon_alias_1 }

/**
 * The react component for the `screenshot-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Screenshot 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/screenshot-2-fill.svg)
 */
declare const Screenshot2FillIcon: IconType;
export { Screenshot2FillIcon }
export { Screenshot2FillIcon as Screenshot2FillIcon_alias_1 }

/**
 * The react component for the `screenshot-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Screenshot 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/screenshot-2-line.svg)
 */
declare const Screenshot2LineIcon: IconType;
export { Screenshot2LineIcon }
export { Screenshot2LineIcon as Screenshot2LineIcon_alias_1 }

/**
 * The react component for the `screenshot-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Screenshot Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/screenshot-fill.svg)
 */
declare const ScreenshotFillIcon: IconType;
export { ScreenshotFillIcon }
export { ScreenshotFillIcon as ScreenshotFillIcon_alias_1 }

/**
 * The react component for the `screenshot-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Screenshot Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/screenshot-line.svg)
 */
declare const ScreenshotLineIcon: IconType;
export { ScreenshotLineIcon }
export { ScreenshotLineIcon as ScreenshotLineIcon_alias_1 }

/**
 * The react component for the `sd-card-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sd Card Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/sd-card-fill.svg)
 */
declare const SdCardFillIcon: IconType;
export { SdCardFillIcon }
export { SdCardFillIcon as SdCardFillIcon_alias_1 }

/**
 * The react component for the `sd-card-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sd Card Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/sd-card-line.svg)
 */
declare const SdCardLineIcon: IconType;
export { SdCardLineIcon }
export { SdCardLineIcon as SdCardLineIcon_alias_1 }

/**
 * The react component for the `sd-card-mini-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sd Card Mini Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/sd-card-mini-fill.svg)
 */
declare const SdCardMiniFillIcon: IconType;
export { SdCardMiniFillIcon }
export { SdCardMiniFillIcon as SdCardMiniFillIcon_alias_1 }

/**
 * The react component for the `sd-card-mini-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sd Card Mini Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/sd-card-mini-line.svg)
 */
declare const SdCardMiniLineIcon: IconType;
export { SdCardMiniLineIcon }
export { SdCardMiniLineIcon as SdCardMiniLineIcon_alias_1 }

/**
 * The react component for the `search-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Search 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/search-2-fill.svg)
 */
declare const Search2FillIcon: IconType;
export { Search2FillIcon }
export { Search2FillIcon as Search2FillIcon_alias_1 }

/**
 * The react component for the `search-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Search 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/search-2-line.svg)
 */
declare const Search2LineIcon: IconType;
export { Search2LineIcon }
export { Search2LineIcon as Search2LineIcon_alias_1 }

/**
 * The react component for the `search-eye-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Search Eye Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/search-eye-fill.svg)
 */
declare const SearchEyeFillIcon: IconType;
export { SearchEyeFillIcon }
export { SearchEyeFillIcon as SearchEyeFillIcon_alias_1 }

/**
 * The react component for the `search-eye-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Search Eye Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/search-eye-line.svg)
 */
declare const SearchEyeLineIcon: IconType;
export { SearchEyeLineIcon }
export { SearchEyeLineIcon as SearchEyeLineIcon_alias_1 }

/**
 * The react component for the `search-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Search Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/search-fill.svg)
 */
declare const SearchFillIcon: IconType;
export { SearchFillIcon }
export { SearchFillIcon as SearchFillIcon_alias_1 }

/**
 * The react component for the `search-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Search Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/search-line.svg)
 */
declare const SearchLineIcon: IconType;
export { SearchLineIcon }
export { SearchLineIcon as SearchLineIcon_alias_1 }
export { SearchLineIcon as SearchLineIcon_alias_2 }

/**
 * The react component for the `secure-payment-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Secure Payment Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/secure-payment-fill.svg)
 */
declare const SecurePaymentFillIcon: IconType;
export { SecurePaymentFillIcon }
export { SecurePaymentFillIcon as SecurePaymentFillIcon_alias_1 }

/**
 * The react component for the `secure-payment-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Secure Payment Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/secure-payment-line.svg)
 */
declare const SecurePaymentLineIcon: IconType;
export { SecurePaymentLineIcon }
export { SecurePaymentLineIcon as SecurePaymentLineIcon_alias_1 }

/**
 * The react component for the `seedling-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Seedling Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/seedling-fill.svg)
 */
declare const SeedlingFillIcon: IconType;
export { SeedlingFillIcon }
export { SeedlingFillIcon as SeedlingFillIcon_alias_1 }

/**
 * The react component for the `seedling-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Seedling Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/seedling-line.svg)
 */
declare const SeedlingLineIcon: IconType;
export { SeedlingLineIcon }
export { SeedlingLineIcon as SeedlingLineIcon_alias_1 }

/**
 * The react component for the `send-backward.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Send Backward Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/send-backward.svg)
 */
declare const SendBackwardIcon: IconType;
export { SendBackwardIcon }
export { SendBackwardIcon as SendBackwardIcon_alias_1 }
export { SendBackwardIcon as SendBackwardIcon_alias_2 }

/**
 * The react component for the `send-plane-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Send Plane 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/send-plane-2-fill.svg)
 */
declare const SendPlane2FillIcon: IconType;
export { SendPlane2FillIcon }
export { SendPlane2FillIcon as SendPlane2FillIcon_alias_1 }

/**
 * The react component for the `send-plane-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Send Plane 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/send-plane-2-line.svg)
 */
declare const SendPlane2LineIcon: IconType;
export { SendPlane2LineIcon }
export { SendPlane2LineIcon as SendPlane2LineIcon_alias_1 }

/**
 * The react component for the `send-plane-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Send Plane Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/send-plane-fill.svg)
 */
declare const SendPlaneFillIcon: IconType;
export { SendPlaneFillIcon }
export { SendPlaneFillIcon as SendPlaneFillIcon_alias_1 }

/**
 * The react component for the `send-plane-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Send Plane Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/send-plane-line.svg)
 */
declare const SendPlaneLineIcon: IconType;
export { SendPlaneLineIcon }
export { SendPlaneLineIcon as SendPlaneLineIcon_alias_1 }

/**
 * The react component for the `send-to-back.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Send To Back Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/send-to-back.svg)
 */
declare const SendToBackIcon: IconType;
export { SendToBackIcon }
export { SendToBackIcon as SendToBackIcon_alias_1 }
export { SendToBackIcon as SendToBackIcon_alias_2 }

/**
 * The react component for the `sensor-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sensor Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/sensor-fill.svg)
 */
declare const SensorFillIcon: IconType;
export { SensorFillIcon }
export { SensorFillIcon as SensorFillIcon_alias_1 }

/**
 * The react component for the `sensor-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sensor Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/sensor-line.svg)
 */
declare const SensorLineIcon: IconType;
export { SensorLineIcon }
export { SensorLineIcon as SensorLineIcon_alias_1 }

/**
 * The react component for the `separator.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Separator Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/separator.svg)
 */
declare const SeparatorIcon: IconType;
export { SeparatorIcon }
export { SeparatorIcon as SeparatorIcon_alias_1 }
export { SeparatorIcon as SeparatorIcon_alias_2 }

/**
 * The react component for the `server-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Server Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/server-fill.svg)
 */
declare const ServerFillIcon: IconType;
export { ServerFillIcon }
export { ServerFillIcon as ServerFillIcon_alias_1 }

/**
 * The react component for the `server-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Server Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/server-line.svg)
 */
declare const ServerLineIcon: IconType;
export { ServerLineIcon }
export { ServerLineIcon as ServerLineIcon_alias_1 }

/**
 * The react component for the `service-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Service Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/service-fill.svg)
 */
declare const ServiceFillIcon: IconType;
export { ServiceFillIcon }
export { ServiceFillIcon as ServiceFillIcon_alias_1 }

/**
 * The react component for the `service-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Service Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/service-line.svg)
 */
declare const ServiceLineIcon: IconType;
export { ServiceLineIcon }
export { ServiceLineIcon as ServiceLineIcon_alias_1 }

/**
 * The react component for the `settings-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Settings 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/settings-2-fill.svg)
 */
declare const Settings2FillIcon: IconType;
export { Settings2FillIcon }
export { Settings2FillIcon as Settings2FillIcon_alias_1 }

/**
 * The react component for the `settings-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Settings 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/settings-2-line.svg)
 */
declare const Settings2LineIcon: IconType;
export { Settings2LineIcon }
export { Settings2LineIcon as Settings2LineIcon_alias_1 }

/**
 * The react component for the `settings-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Settings 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/settings-3-fill.svg)
 */
declare const Settings3FillIcon: IconType;
export { Settings3FillIcon }
export { Settings3FillIcon as Settings3FillIcon_alias_1 }

/**
 * The react component for the `settings-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Settings 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/settings-3-line.svg)
 */
declare const Settings3LineIcon: IconType;
export { Settings3LineIcon }
export { Settings3LineIcon as Settings3LineIcon_alias_1 }

/**
 * The react component for the `settings-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Settings 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/settings-4-fill.svg)
 */
declare const Settings4FillIcon: IconType;
export { Settings4FillIcon }
export { Settings4FillIcon as Settings4FillIcon_alias_1 }

/**
 * The react component for the `settings-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Settings 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/settings-4-line.svg)
 */
declare const Settings4LineIcon: IconType;
export { Settings4LineIcon }
export { Settings4LineIcon as Settings4LineIcon_alias_1 }

/**
 * The react component for the `settings-5-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Settings 5 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/settings-5-fill.svg)
 */
declare const Settings5FillIcon: IconType;
export { Settings5FillIcon }
export { Settings5FillIcon as Settings5FillIcon_alias_1 }

/**
 * The react component for the `settings-5-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Settings 5 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/settings-5-line.svg)
 */
declare const Settings5LineIcon: IconType;
export { Settings5LineIcon }
export { Settings5LineIcon as Settings5LineIcon_alias_1 }

/**
 * The react component for the `settings-6-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Settings 6 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/settings-6-fill.svg)
 */
declare const Settings6FillIcon: IconType;
export { Settings6FillIcon }
export { Settings6FillIcon as Settings6FillIcon_alias_1 }

/**
 * The react component for the `settings-6-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Settings 6 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/settings-6-line.svg)
 */
declare const Settings6LineIcon: IconType;
export { Settings6LineIcon }
export { Settings6LineIcon as Settings6LineIcon_alias_1 }

/**
 * The react component for the `settings-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Settings Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/settings-fill.svg)
 */
declare const SettingsFillIcon: IconType;
export { SettingsFillIcon }
export { SettingsFillIcon as SettingsFillIcon_alias_1 }

/**
 * The react component for the `settings-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Settings Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/settings-line.svg)
 */
declare const SettingsLineIcon: IconType;
export { SettingsLineIcon }
export { SettingsLineIcon as SettingsLineIcon_alias_1 }

/**
 * The react component for the `shape-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shape 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/shape-2-fill.svg)
 */
declare const Shape2FillIcon: IconType;
export { Shape2FillIcon }
export { Shape2FillIcon as Shape2FillIcon_alias_1 }

/**
 * The react component for the `shape-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shape 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/shape-2-line.svg)
 */
declare const Shape2LineIcon: IconType;
export { Shape2LineIcon }
export { Shape2LineIcon as Shape2LineIcon_alias_1 }

/**
 * The react component for the `shape-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shape Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/shape-fill.svg)
 */
declare const ShapeFillIcon: IconType;
export { ShapeFillIcon }
export { ShapeFillIcon as ShapeFillIcon_alias_1 }

/**
 * The react component for the `shape-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shape Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/shape-line.svg)
 */
declare const ShapeLineIcon: IconType;
export { ShapeLineIcon }
export { ShapeLineIcon as ShapeLineIcon_alias_1 }

/**
 * The react component for the `share-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Share Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/share-box-fill.svg)
 */
declare const ShareBoxFillIcon: IconType;
export { ShareBoxFillIcon }
export { ShareBoxFillIcon as ShareBoxFillIcon_alias_1 }

/**
 * The react component for the `share-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Share Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/share-box-line.svg)
 */
declare const ShareBoxLineIcon: IconType;
export { ShareBoxLineIcon }
export { ShareBoxLineIcon as ShareBoxLineIcon_alias_1 }

/**
 * The react component for the `share-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Share Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/share-circle-fill.svg)
 */
declare const ShareCircleFillIcon: IconType;
export { ShareCircleFillIcon }
export { ShareCircleFillIcon as ShareCircleFillIcon_alias_1 }

/**
 * The react component for the `share-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Share Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/share-circle-line.svg)
 */
declare const ShareCircleLineIcon: IconType;
export { ShareCircleLineIcon }
export { ShareCircleLineIcon as ShareCircleLineIcon_alias_1 }

/**
 * The react component for the `share-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Share Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/share-fill.svg)
 */
declare const ShareFillIcon: IconType;
export { ShareFillIcon }
export { ShareFillIcon as ShareFillIcon_alias_1 }

/**
 * The react component for the `share-forward-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Share Forward 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/share-forward-2-fill.svg)
 */
declare const ShareForward2FillIcon: IconType;
export { ShareForward2FillIcon }
export { ShareForward2FillIcon as ShareForward2FillIcon_alias_1 }

/**
 * The react component for the `share-forward-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Share Forward 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/share-forward-2-line.svg)
 */
declare const ShareForward2LineIcon: IconType;
export { ShareForward2LineIcon }
export { ShareForward2LineIcon as ShareForward2LineIcon_alias_1 }

/**
 * The react component for the `share-forward-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Share Forward Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/share-forward-box-fill.svg)
 */
declare const ShareForwardBoxFillIcon: IconType;
export { ShareForwardBoxFillIcon }
export { ShareForwardBoxFillIcon as ShareForwardBoxFillIcon_alias_1 }

/**
 * The react component for the `share-forward-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Share Forward Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/share-forward-box-line.svg)
 */
declare const ShareForwardBoxLineIcon: IconType;
export { ShareForwardBoxLineIcon }
export { ShareForwardBoxLineIcon as ShareForwardBoxLineIcon_alias_1 }

/**
 * The react component for the `share-forward-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Share Forward Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/share-forward-fill.svg)
 */
declare const ShareForwardFillIcon: IconType;
export { ShareForwardFillIcon }
export { ShareForwardFillIcon as ShareForwardFillIcon_alias_1 }

/**
 * The react component for the `share-forward-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Share Forward Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/share-forward-line.svg)
 */
declare const ShareForwardLineIcon: IconType;
export { ShareForwardLineIcon }
export { ShareForwardLineIcon as ShareForwardLineIcon_alias_1 }

/**
 * The react component for the `share-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Share Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/share-line.svg)
 */
declare const ShareLineIcon: IconType;
export { ShareLineIcon }
export { ShareLineIcon as ShareLineIcon_alias_1 }

/**
 * The react component for the `shield-check-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield Check Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-check-fill.svg)
 */
declare const ShieldCheckFillIcon: IconType;
export { ShieldCheckFillIcon }
export { ShieldCheckFillIcon as ShieldCheckFillIcon_alias_1 }

/**
 * The react component for the `shield-check-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield Check Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-check-line.svg)
 */
declare const ShieldCheckLineIcon: IconType;
export { ShieldCheckLineIcon }
export { ShieldCheckLineIcon as ShieldCheckLineIcon_alias_1 }

/**
 * The react component for the `shield-cross-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield Cross Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-cross-fill.svg)
 */
declare const ShieldCrossFillIcon: IconType;
export { ShieldCrossFillIcon }
export { ShieldCrossFillIcon as ShieldCrossFillIcon_alias_1 }

/**
 * The react component for the `shield-cross-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield Cross Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-cross-line.svg)
 */
declare const ShieldCrossLineIcon: IconType;
export { ShieldCrossLineIcon }
export { ShieldCrossLineIcon as ShieldCrossLineIcon_alias_1 }

/**
 * The react component for the `shield-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-fill.svg)
 */
declare const ShieldFillIcon: IconType;
export { ShieldFillIcon }
export { ShieldFillIcon as ShieldFillIcon_alias_1 }

/**
 * The react component for the `shield-flash-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield Flash Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-flash-fill.svg)
 */
declare const ShieldFlashFillIcon: IconType;
export { ShieldFlashFillIcon }
export { ShieldFlashFillIcon as ShieldFlashFillIcon_alias_1 }

/**
 * The react component for the `shield-flash-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield Flash Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-flash-line.svg)
 */
declare const ShieldFlashLineIcon: IconType;
export { ShieldFlashLineIcon }
export { ShieldFlashLineIcon as ShieldFlashLineIcon_alias_1 }

/**
 * The react component for the `shield-keyhole-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield Keyhole Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-keyhole-fill.svg)
 */
declare const ShieldKeyholeFillIcon: IconType;
export { ShieldKeyholeFillIcon }
export { ShieldKeyholeFillIcon as ShieldKeyholeFillIcon_alias_1 }

/**
 * The react component for the `shield-keyhole-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield Keyhole Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-keyhole-line.svg)
 */
declare const ShieldKeyholeLineIcon: IconType;
export { ShieldKeyholeLineIcon }
export { ShieldKeyholeLineIcon as ShieldKeyholeLineIcon_alias_1 }

/**
 * The react component for the `shield-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-line.svg)
 */
declare const ShieldLineIcon: IconType;
export { ShieldLineIcon }
export { ShieldLineIcon as ShieldLineIcon_alias_1 }

/**
 * The react component for the `shield-star-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield Star Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-star-fill.svg)
 */
declare const ShieldStarFillIcon: IconType;
export { ShieldStarFillIcon }
export { ShieldStarFillIcon as ShieldStarFillIcon_alias_1 }

/**
 * The react component for the `shield-star-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield Star Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-star-line.svg)
 */
declare const ShieldStarLineIcon: IconType;
export { ShieldStarLineIcon }
export { ShieldStarLineIcon as ShieldStarLineIcon_alias_1 }

/**
 * The react component for the `shield-user-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield User Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-user-fill.svg)
 */
declare const ShieldUserFillIcon: IconType;
export { ShieldUserFillIcon }
export { ShieldUserFillIcon as ShieldUserFillIcon_alias_1 }

/**
 * The react component for the `shield-user-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shield User Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/shield-user-line.svg)
 */
declare const ShieldUserLineIcon: IconType;
export { ShieldUserLineIcon }
export { ShieldUserLineIcon as ShieldUserLineIcon_alias_1 }

/**
 * The react component for the `ship-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ship 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/ship-2-fill.svg)
 */
declare const Ship2FillIcon: IconType;
export { Ship2FillIcon }
export { Ship2FillIcon as Ship2FillIcon_alias_1 }

/**
 * The react component for the `ship-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ship 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/ship-2-line.svg)
 */
declare const Ship2LineIcon: IconType;
export { Ship2LineIcon }
export { Ship2LineIcon as Ship2LineIcon_alias_1 }

/**
 * The react component for the `ship-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ship Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/ship-fill.svg)
 */
declare const ShipFillIcon: IconType;
export { ShipFillIcon }
export { ShipFillIcon as ShipFillIcon_alias_1 }

/**
 * The react component for the `ship-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ship Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/ship-line.svg)
 */
declare const ShipLineIcon: IconType;
export { ShipLineIcon }
export { ShipLineIcon as ShipLineIcon_alias_1 }

/**
 * The react component for the `shirt-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shirt Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/shirt-fill.svg)
 */
declare const ShirtFillIcon: IconType;
export { ShirtFillIcon }
export { ShirtFillIcon as ShirtFillIcon_alias_1 }

/**
 * The react component for the `shirt-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shirt Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/shirt-line.svg)
 */
declare const ShirtLineIcon: IconType;
export { ShirtLineIcon }
export { ShirtLineIcon as ShirtLineIcon_alias_1 }

/**
 * The react component for the `shopping-bag-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Bag 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-bag-2-fill.svg)
 */
declare const ShoppingBag2FillIcon: IconType;
export { ShoppingBag2FillIcon }
export { ShoppingBag2FillIcon as ShoppingBag2FillIcon_alias_1 }

/**
 * The react component for the `shopping-bag-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Bag 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-bag-2-line.svg)
 */
declare const ShoppingBag2LineIcon: IconType;
export { ShoppingBag2LineIcon }
export { ShoppingBag2LineIcon as ShoppingBag2LineIcon_alias_1 }

/**
 * The react component for the `shopping-bag-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Bag 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-bag-3-fill.svg)
 */
declare const ShoppingBag3FillIcon: IconType;
export { ShoppingBag3FillIcon }
export { ShoppingBag3FillIcon as ShoppingBag3FillIcon_alias_1 }

/**
 * The react component for the `shopping-bag-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Bag 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-bag-3-line.svg)
 */
declare const ShoppingBag3LineIcon: IconType;
export { ShoppingBag3LineIcon }
export { ShoppingBag3LineIcon as ShoppingBag3LineIcon_alias_1 }

/**
 * The react component for the `shopping-bag-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Bag Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-bag-fill.svg)
 */
declare const ShoppingBagFillIcon: IconType;
export { ShoppingBagFillIcon }
export { ShoppingBagFillIcon as ShoppingBagFillIcon_alias_1 }

/**
 * The react component for the `shopping-bag-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Bag Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-bag-line.svg)
 */
declare const ShoppingBagLineIcon: IconType;
export { ShoppingBagLineIcon }
export { ShoppingBagLineIcon as ShoppingBagLineIcon_alias_1 }

/**
 * The react component for the `shopping-basket-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Basket 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-basket-2-fill.svg)
 */
declare const ShoppingBasket2FillIcon: IconType;
export { ShoppingBasket2FillIcon }
export { ShoppingBasket2FillIcon as ShoppingBasket2FillIcon_alias_1 }

/**
 * The react component for the `shopping-basket-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Basket 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-basket-2-line.svg)
 */
declare const ShoppingBasket2LineIcon: IconType;
export { ShoppingBasket2LineIcon }
export { ShoppingBasket2LineIcon as ShoppingBasket2LineIcon_alias_1 }

/**
 * The react component for the `shopping-basket-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Basket Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-basket-fill.svg)
 */
declare const ShoppingBasketFillIcon: IconType;
export { ShoppingBasketFillIcon }
export { ShoppingBasketFillIcon as ShoppingBasketFillIcon_alias_1 }

/**
 * The react component for the `shopping-basket-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Basket Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-basket-line.svg)
 */
declare const ShoppingBasketLineIcon: IconType;
export { ShoppingBasketLineIcon }
export { ShoppingBasketLineIcon as ShoppingBasketLineIcon_alias_1 }

/**
 * The react component for the `shopping-cart-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Cart 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-cart-2-fill.svg)
 */
declare const ShoppingCart2FillIcon: IconType;
export { ShoppingCart2FillIcon }
export { ShoppingCart2FillIcon as ShoppingCart2FillIcon_alias_1 }

/**
 * The react component for the `shopping-cart-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Cart 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-cart-2-line.svg)
 */
declare const ShoppingCart2LineIcon: IconType;
export { ShoppingCart2LineIcon }
export { ShoppingCart2LineIcon as ShoppingCart2LineIcon_alias_1 }

/**
 * The react component for the `shopping-cart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Cart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-cart-fill.svg)
 */
declare const ShoppingCartFillIcon: IconType;
export { ShoppingCartFillIcon }
export { ShoppingCartFillIcon as ShoppingCartFillIcon_alias_1 }

/**
 * The react component for the `shopping-cart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shopping Cart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/shopping-cart-line.svg)
 */
declare const ShoppingCartLineIcon: IconType;
export { ShoppingCartLineIcon }
export { ShoppingCartLineIcon as ShoppingCartLineIcon_alias_1 }

/**
 * The react component for the `showers-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Showers Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/showers-fill.svg)
 */
declare const ShowersFillIcon: IconType;
export { ShowersFillIcon }
export { ShowersFillIcon as ShowersFillIcon_alias_1 }

/**
 * The react component for the `showers-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Showers Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/showers-line.svg)
 */
declare const ShowersLineIcon: IconType;
export { ShowersLineIcon }
export { ShowersLineIcon as ShowersLineIcon_alias_1 }

/**
 * The react component for the `shuffle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shuffle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/shuffle-fill.svg)
 */
declare const ShuffleFillIcon: IconType;
export { ShuffleFillIcon }
export { ShuffleFillIcon as ShuffleFillIcon_alias_1 }

/**
 * The react component for the `shuffle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shuffle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/shuffle-line.svg)
 */
declare const ShuffleLineIcon: IconType;
export { ShuffleLineIcon }
export { ShuffleLineIcon as ShuffleLineIcon_alias_1 }

/**
 * The react component for the `shut-down-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shut Down Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/shut-down-fill.svg)
 */
declare const ShutDownFillIcon: IconType;
export { ShutDownFillIcon }
export { ShutDownFillIcon as ShutDownFillIcon_alias_1 }

/**
 * The react component for the `shut-down-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Shut Down Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/shut-down-line.svg)
 */
declare const ShutDownLineIcon: IconType;
export { ShutDownLineIcon }
export { ShutDownLineIcon as ShutDownLineIcon_alias_1 }

/**
 * The react component for the `side-bar-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Side Bar Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/side-bar-fill.svg)
 */
declare const SideBarFillIcon: IconType;
export { SideBarFillIcon }
export { SideBarFillIcon as SideBarFillIcon_alias_1 }

/**
 * The react component for the `side-bar-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Side Bar Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/side-bar-line.svg)
 */
declare const SideBarLineIcon: IconType;
export { SideBarLineIcon }
export { SideBarLineIcon as SideBarLineIcon_alias_1 }

/**
 * The react component for the `signal-tower-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Tower Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/signal-tower-fill.svg)
 */
declare const SignalTowerFillIcon: IconType;
export { SignalTowerFillIcon }
export { SignalTowerFillIcon as SignalTowerFillIcon_alias_1 }

/**
 * The react component for the `signal-tower-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Tower Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/signal-tower-line.svg)
 */
declare const SignalTowerLineIcon: IconType;
export { SignalTowerLineIcon }
export { SignalTowerLineIcon as SignalTowerLineIcon_alias_1 }

/**
 * The react component for the `signal-wifi-1-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Wifi 1 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/signal-wifi-1-fill.svg)
 */
declare const SignalWifi1FillIcon: IconType;
export { SignalWifi1FillIcon }
export { SignalWifi1FillIcon as SignalWifi1FillIcon_alias_1 }

/**
 * The react component for the `signal-wifi-1-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Wifi 1 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/signal-wifi-1-line.svg)
 */
declare const SignalWifi1LineIcon: IconType;
export { SignalWifi1LineIcon }
export { SignalWifi1LineIcon as SignalWifi1LineIcon_alias_1 }

/**
 * The react component for the `signal-wifi-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Wifi 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/signal-wifi-2-fill.svg)
 */
declare const SignalWifi2FillIcon: IconType;
export { SignalWifi2FillIcon }
export { SignalWifi2FillIcon as SignalWifi2FillIcon_alias_1 }

/**
 * The react component for the `signal-wifi-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Wifi 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/signal-wifi-2-line.svg)
 */
declare const SignalWifi2LineIcon: IconType;
export { SignalWifi2LineIcon }
export { SignalWifi2LineIcon as SignalWifi2LineIcon_alias_1 }

/**
 * The react component for the `signal-wifi-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Wifi 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/signal-wifi-3-fill.svg)
 */
declare const SignalWifi3FillIcon: IconType;
export { SignalWifi3FillIcon }
export { SignalWifi3FillIcon as SignalWifi3FillIcon_alias_1 }

/**
 * The react component for the `signal-wifi-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Wifi 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/signal-wifi-3-line.svg)
 */
declare const SignalWifi3LineIcon: IconType;
export { SignalWifi3LineIcon }
export { SignalWifi3LineIcon as SignalWifi3LineIcon_alias_1 }

/**
 * The react component for the `signal-wifi-error-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Wifi Error Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/signal-wifi-error-fill.svg)
 */
declare const SignalWifiErrorFillIcon: IconType;
export { SignalWifiErrorFillIcon }
export { SignalWifiErrorFillIcon as SignalWifiErrorFillIcon_alias_1 }

/**
 * The react component for the `signal-wifi-error-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Wifi Error Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/signal-wifi-error-line.svg)
 */
declare const SignalWifiErrorLineIcon: IconType;
export { SignalWifiErrorLineIcon }
export { SignalWifiErrorLineIcon as SignalWifiErrorLineIcon_alias_1 }

/**
 * The react component for the `signal-wifi-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Wifi Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/signal-wifi-fill.svg)
 */
declare const SignalWifiFillIcon: IconType;
export { SignalWifiFillIcon }
export { SignalWifiFillIcon as SignalWifiFillIcon_alias_1 }

/**
 * The react component for the `signal-wifi-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Wifi Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/signal-wifi-line.svg)
 */
declare const SignalWifiLineIcon: IconType;
export { SignalWifiLineIcon }
export { SignalWifiLineIcon as SignalWifiLineIcon_alias_1 }

/**
 * The react component for the `signal-wifi-off-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Wifi Off Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/signal-wifi-off-fill.svg)
 */
declare const SignalWifiOffFillIcon: IconType;
export { SignalWifiOffFillIcon }
export { SignalWifiOffFillIcon as SignalWifiOffFillIcon_alias_1 }

/**
 * The react component for the `signal-wifi-off-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Signal Wifi Off Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/signal-wifi-off-line.svg)
 */
declare const SignalWifiOffLineIcon: IconType;
export { SignalWifiOffLineIcon }
export { SignalWifiOffLineIcon as SignalWifiOffLineIcon_alias_1 }

/**
 * The react component for the `sim-card-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sim Card 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/sim-card-2-fill.svg)
 */
declare const SimCard2FillIcon: IconType;
export { SimCard2FillIcon }
export { SimCard2FillIcon as SimCard2FillIcon_alias_1 }

/**
 * The react component for the `sim-card-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sim Card 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/sim-card-2-line.svg)
 */
declare const SimCard2LineIcon: IconType;
export { SimCard2LineIcon }
export { SimCard2LineIcon as SimCard2LineIcon_alias_1 }

/**
 * The react component for the `sim-card-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sim Card Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/sim-card-fill.svg)
 */
declare const SimCardFillIcon: IconType;
export { SimCardFillIcon }
export { SimCardFillIcon as SimCardFillIcon_alias_1 }

/**
 * The react component for the `sim-card-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sim Card Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/sim-card-line.svg)
 */
declare const SimCardLineIcon: IconType;
export { SimCardLineIcon }
export { SimCardLineIcon as SimCardLineIcon_alias_1 }

/**
 * The react component for the `single-quotes-l.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Single Quotes L Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/single-quotes-l.svg)
 */
declare const SingleQuotesLIcon: IconType;
export { SingleQuotesLIcon }
export { SingleQuotesLIcon as SingleQuotesLIcon_alias_1 }
export { SingleQuotesLIcon as SingleQuotesLIcon_alias_2 }

/**
 * The react component for the `single-quotes-r.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Single Quotes R Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/single-quotes-r.svg)
 */
declare const SingleQuotesRIcon: IconType;
export { SingleQuotesRIcon }
export { SingleQuotesRIcon as SingleQuotesRIcon_alias_1 }
export { SingleQuotesRIcon as SingleQuotesRIcon_alias_2 }

/**
 * The react component for the `sip-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sip Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/sip-fill.svg)
 */
declare const SipFillIcon: IconType;
export { SipFillIcon }
export { SipFillIcon as SipFillIcon_alias_1 }

/**
 * The react component for the `sip-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sip Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/sip-line.svg)
 */
declare const SipLineIcon: IconType;
export { SipLineIcon }
export { SipLineIcon as SipLineIcon_alias_1 }

/**
 * The react component for the `skip-back-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skip Back Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/skip-back-fill.svg)
 */
declare const SkipBackFillIcon: IconType;
export { SkipBackFillIcon }
export { SkipBackFillIcon as SkipBackFillIcon_alias_1 }

/**
 * The react component for the `skip-back-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skip Back Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/skip-back-line.svg)
 */
declare const SkipBackLineIcon: IconType;
export { SkipBackLineIcon }
export { SkipBackLineIcon as SkipBackLineIcon_alias_1 }

/**
 * The react component for the `skip-back-mini-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skip Back Mini Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/skip-back-mini-fill.svg)
 */
declare const SkipBackMiniFillIcon: IconType;
export { SkipBackMiniFillIcon }
export { SkipBackMiniFillIcon as SkipBackMiniFillIcon_alias_1 }

/**
 * The react component for the `skip-back-mini-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skip Back Mini Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/skip-back-mini-line.svg)
 */
declare const SkipBackMiniLineIcon: IconType;
export { SkipBackMiniLineIcon }
export { SkipBackMiniLineIcon as SkipBackMiniLineIcon_alias_1 }

/**
 * The react component for the `skip-forward-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skip Forward Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/skip-forward-fill.svg)
 */
declare const SkipForwardFillIcon: IconType;
export { SkipForwardFillIcon }
export { SkipForwardFillIcon as SkipForwardFillIcon_alias_1 }

/**
 * The react component for the `skip-forward-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skip Forward Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/skip-forward-line.svg)
 */
declare const SkipForwardLineIcon: IconType;
export { SkipForwardLineIcon }
export { SkipForwardLineIcon as SkipForwardLineIcon_alias_1 }

/**
 * The react component for the `skip-forward-mini-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skip Forward Mini Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/skip-forward-mini-fill.svg)
 */
declare const SkipForwardMiniFillIcon: IconType;
export { SkipForwardMiniFillIcon }
export { SkipForwardMiniFillIcon as SkipForwardMiniFillIcon_alias_1 }

/**
 * The react component for the `skip-forward-mini-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skip Forward Mini Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/skip-forward-mini-line.svg)
 */
declare const SkipForwardMiniLineIcon: IconType;
export { SkipForwardMiniLineIcon }
export { SkipForwardMiniLineIcon as SkipForwardMiniLineIcon_alias_1 }

/**
 * The react component for the `skull-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skull 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/skull-2-fill.svg)
 */
declare const Skull2FillIcon: IconType;
export { Skull2FillIcon }
export { Skull2FillIcon as Skull2FillIcon_alias_1 }

/**
 * The react component for the `skull-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skull 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/skull-2-line.svg)
 */
declare const Skull2LineIcon: IconType;
export { Skull2LineIcon }
export { Skull2LineIcon as Skull2LineIcon_alias_1 }

/**
 * The react component for the `skull-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skull Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/skull-fill.svg)
 */
declare const SkullFillIcon: IconType;
export { SkullFillIcon }
export { SkullFillIcon as SkullFillIcon_alias_1 }

/**
 * The react component for the `skull-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skull Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/skull-line.svg)
 */
declare const SkullLineIcon: IconType;
export { SkullLineIcon }
export { SkullLineIcon as SkullLineIcon_alias_1 }

/**
 * The react component for the `skype-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skype Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/skype-fill.svg)
 */
declare const SkypeFillIcon: IconType;
export { SkypeFillIcon }
export { SkypeFillIcon as SkypeFillIcon_alias_1 }

/**
 * The react component for the `skype-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Skype Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/skype-line.svg)
 */
declare const SkypeLineIcon: IconType;
export { SkypeLineIcon }
export { SkypeLineIcon as SkypeLineIcon_alias_1 }

/**
 * The react component for the `slack-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Slack Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/slack-fill.svg)
 */
declare const SlackFillIcon: IconType;
export { SlackFillIcon }
export { SlackFillIcon as SlackFillIcon_alias_1 }

/**
 * The react component for the `slack-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Slack Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/slack-line.svg)
 */
declare const SlackLineIcon: IconType;
export { SlackLineIcon }
export { SlackLineIcon as SlackLineIcon_alias_1 }

/**
 * The react component for the `slice-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Slice Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/slice-fill.svg)
 */
declare const SliceFillIcon: IconType;
export { SliceFillIcon }
export { SliceFillIcon as SliceFillIcon_alias_1 }

/**
 * The react component for the `slice-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Slice Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/slice-line.svg)
 */
declare const SliceLineIcon: IconType;
export { SliceLineIcon }
export { SliceLineIcon as SliceLineIcon_alias_1 }

/**
 * The react component for the `slideshow-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Slideshow 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/slideshow-2-fill.svg)
 */
declare const Slideshow2FillIcon: IconType;
export { Slideshow2FillIcon }
export { Slideshow2FillIcon as Slideshow2FillIcon_alias_1 }

/**
 * The react component for the `slideshow-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Slideshow 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/slideshow-2-line.svg)
 */
declare const Slideshow2LineIcon: IconType;
export { Slideshow2LineIcon }
export { Slideshow2LineIcon as Slideshow2LineIcon_alias_1 }

/**
 * The react component for the `slideshow-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Slideshow 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/slideshow-3-fill.svg)
 */
declare const Slideshow3FillIcon: IconType;
export { Slideshow3FillIcon }
export { Slideshow3FillIcon as Slideshow3FillIcon_alias_1 }

/**
 * The react component for the `slideshow-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Slideshow 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/slideshow-3-line.svg)
 */
declare const Slideshow3LineIcon: IconType;
export { Slideshow3LineIcon }
export { Slideshow3LineIcon as Slideshow3LineIcon_alias_1 }

/**
 * The react component for the `slideshow-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Slideshow 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/slideshow-4-fill.svg)
 */
declare const Slideshow4FillIcon: IconType;
export { Slideshow4FillIcon }
export { Slideshow4FillIcon as Slideshow4FillIcon_alias_1 }

/**
 * The react component for the `slideshow-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Slideshow 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/slideshow-4-line.svg)
 */
declare const Slideshow4LineIcon: IconType;
export { Slideshow4LineIcon }
export { Slideshow4LineIcon as Slideshow4LineIcon_alias_1 }

/**
 * The react component for the `slideshow-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Slideshow Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/slideshow-fill.svg)
 */
declare const SlideshowFillIcon: IconType;
export { SlideshowFillIcon }
export { SlideshowFillIcon as SlideshowFillIcon_alias_1 }

/**
 * The react component for the `slideshow-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Slideshow Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/slideshow-line.svg)
 */
declare const SlideshowLineIcon: IconType;
export { SlideshowLineIcon }
export { SlideshowLineIcon as SlideshowLineIcon_alias_1 }

/**
 * The react component for the `smartphone-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Smartphone Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/smartphone-fill.svg)
 */
declare const SmartphoneFillIcon: IconType;
export { SmartphoneFillIcon }
export { SmartphoneFillIcon as SmartphoneFillIcon_alias_1 }

/**
 * The react component for the `smartphone-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Smartphone Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/smartphone-line.svg)
 */
declare const SmartphoneLineIcon: IconType;
export { SmartphoneLineIcon }
export { SmartphoneLineIcon as SmartphoneLineIcon_alias_1 }

/**
 * The react component for the `snapchat-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Snapchat Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/snapchat-fill.svg)
 */
declare const SnapchatFillIcon: IconType;
export { SnapchatFillIcon }
export { SnapchatFillIcon as SnapchatFillIcon_alias_1 }

/**
 * The react component for the `snapchat-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Snapchat Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/snapchat-line.svg)
 */
declare const SnapchatLineIcon: IconType;
export { SnapchatLineIcon }
export { SnapchatLineIcon as SnapchatLineIcon_alias_1 }

/**
 * The react component for the `snowy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Snowy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/snowy-fill.svg)
 */
declare const SnowyFillIcon: IconType;
export { SnowyFillIcon }
export { SnowyFillIcon as SnowyFillIcon_alias_1 }

/**
 * The react component for the `snowy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Snowy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/snowy-line.svg)
 */
declare const SnowyLineIcon: IconType;
export { SnowyLineIcon }
export { SnowyLineIcon as SnowyLineIcon_alias_1 }

/**
 * The react component for the `sort-asc.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sort Asc Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/sort-asc.svg)
 */
declare const SortAscIcon: IconType;
export { SortAscIcon }
export { SortAscIcon as SortAscIcon_alias_1 }
export { SortAscIcon as SortAscIcon_alias_2 }

/**
 * The react component for the `sort-desc.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sort Desc Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/sort-desc.svg)
 */
declare const SortDescIcon: IconType;
export { SortDescIcon }
export { SortDescIcon as SortDescIcon_alias_1 }
export { SortDescIcon as SortDescIcon_alias_2 }

/**
 * The react component for the `soundcloud-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Soundcloud Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/soundcloud-fill.svg)
 */
declare const SoundcloudFillIcon: IconType;
export { SoundcloudFillIcon }
export { SoundcloudFillIcon as SoundcloudFillIcon_alias_1 }

/**
 * The react component for the `soundcloud-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Soundcloud Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/soundcloud-line.svg)
 */
declare const SoundcloudLineIcon: IconType;
export { SoundcloudLineIcon }
export { SoundcloudLineIcon as SoundcloudLineIcon_alias_1 }

/**
 * The react component for the `sound-module-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sound Module Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/sound-module-fill.svg)
 */
declare const SoundModuleFillIcon: IconType;
export { SoundModuleFillIcon }
export { SoundModuleFillIcon as SoundModuleFillIcon_alias_1 }

/**
 * The react component for the `sound-module-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sound Module Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/sound-module-line.svg)
 */
declare const SoundModuleLineIcon: IconType;
export { SoundModuleLineIcon }
export { SoundModuleLineIcon as SoundModuleLineIcon_alias_1 }

/**
 * The react component for the `space.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Space Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/space.svg)
 */
declare const SpaceIcon: IconType;
export { SpaceIcon }
export { SpaceIcon as SpaceIcon_alias_1 }
export { SpaceIcon as SpaceIcon_alias_2 }

/**
 * The react component for the `space-ship-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Space Ship Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/space-ship-fill.svg)
 */
declare const SpaceShipFillIcon: IconType;
export { SpaceShipFillIcon }
export { SpaceShipFillIcon as SpaceShipFillIcon_alias_1 }

/**
 * The react component for the `space-ship-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Space Ship Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/space-ship-line.svg)
 */
declare const SpaceShipLineIcon: IconType;
export { SpaceShipLineIcon }
export { SpaceShipLineIcon as SpaceShipLineIcon_alias_1 }

/**
 * The react component for the `spam-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Spam 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/spam-2-fill.svg)
 */
declare const Spam2FillIcon: IconType;
export { Spam2FillIcon }
export { Spam2FillIcon as Spam2FillIcon_alias_1 }

/**
 * The react component for the `spam-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Spam 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/spam-2-line.svg)
 */
declare const Spam2LineIcon: IconType;
export { Spam2LineIcon }
export { Spam2LineIcon as Spam2LineIcon_alias_1 }

/**
 * The react component for the `spam-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Spam 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/spam-3-fill.svg)
 */
declare const Spam3FillIcon: IconType;
export { Spam3FillIcon }
export { Spam3FillIcon as Spam3FillIcon_alias_1 }

/**
 * The react component for the `spam-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Spam 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/spam-3-line.svg)
 */
declare const Spam3LineIcon: IconType;
export { Spam3LineIcon }
export { Spam3LineIcon as Spam3LineIcon_alias_1 }

/**
 * The react component for the `spam-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Spam Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/spam-fill.svg)
 */
declare const SpamFillIcon: IconType;
export { SpamFillIcon }
export { SpamFillIcon as SpamFillIcon_alias_1 }

/**
 * The react component for the `spam-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Spam Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/spam-line.svg)
 */
declare const SpamLineIcon: IconType;
export { SpamLineIcon }
export { SpamLineIcon as SpamLineIcon_alias_1 }
export { SpamLineIcon as SpamLineIcon_alias_2 }

/**
 * The react component for the `speaker-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Speaker 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/speaker-2-fill.svg)
 */
declare const Speaker2FillIcon: IconType;
export { Speaker2FillIcon }
export { Speaker2FillIcon as Speaker2FillIcon_alias_1 }

/**
 * The react component for the `speaker-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Speaker 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/speaker-2-line.svg)
 */
declare const Speaker2LineIcon: IconType;
export { Speaker2LineIcon }
export { Speaker2LineIcon as Speaker2LineIcon_alias_1 }

/**
 * The react component for the `speaker-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Speaker 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/speaker-3-fill.svg)
 */
declare const Speaker3FillIcon: IconType;
export { Speaker3FillIcon }
export { Speaker3FillIcon as Speaker3FillIcon_alias_1 }

/**
 * The react component for the `speaker-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Speaker 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/speaker-3-line.svg)
 */
declare const Speaker3LineIcon: IconType;
export { Speaker3LineIcon }
export { Speaker3LineIcon as Speaker3LineIcon_alias_1 }

/**
 * The react component for the `speaker-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Speaker Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/speaker-fill.svg)
 */
declare const SpeakerFillIcon: IconType;
export { SpeakerFillIcon }
export { SpeakerFillIcon as SpeakerFillIcon_alias_1 }

/**
 * The react component for the `speaker-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Speaker Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/speaker-line.svg)
 */
declare const SpeakerLineIcon: IconType;
export { SpeakerLineIcon }
export { SpeakerLineIcon as SpeakerLineIcon_alias_1 }

/**
 * The react component for the `spectrum-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Spectrum Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/spectrum-fill.svg)
 */
declare const SpectrumFillIcon: IconType;
export { SpectrumFillIcon }
export { SpectrumFillIcon as SpectrumFillIcon_alias_1 }

/**
 * The react component for the `spectrum-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Spectrum Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/spectrum-line.svg)
 */
declare const SpectrumLineIcon: IconType;
export { SpectrumLineIcon }
export { SpectrumLineIcon as SpectrumLineIcon_alias_1 }

/**
 * The react component for the `speed-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Speed Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/speed-fill.svg)
 */
declare const SpeedFillIcon: IconType;
export { SpeedFillIcon }
export { SpeedFillIcon as SpeedFillIcon_alias_1 }

/**
 * The react component for the `speed-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Speed Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/speed-line.svg)
 */
declare const SpeedLineIcon: IconType;
export { SpeedLineIcon }
export { SpeedLineIcon as SpeedLineIcon_alias_1 }

/**
 * The react component for the `speed-mini-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Speed Mini Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/speed-mini-fill.svg)
 */
declare const SpeedMiniFillIcon: IconType;
export { SpeedMiniFillIcon }
export { SpeedMiniFillIcon as SpeedMiniFillIcon_alias_1 }

/**
 * The react component for the `speed-mini-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Speed Mini Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/speed-mini-line.svg)
 */
declare const SpeedMiniLineIcon: IconType;
export { SpeedMiniLineIcon }
export { SpeedMiniLineIcon as SpeedMiniLineIcon_alias_1 }

/**
 * The react component for the `split-cells-horizontal.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Split Cells Horizontal Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/split-cells-horizontal.svg)
 */
declare const SplitCellsHorizontalIcon: IconType;
export { SplitCellsHorizontalIcon }
export { SplitCellsHorizontalIcon as SplitCellsHorizontalIcon_alias_1 }
export { SplitCellsHorizontalIcon as SplitCellsHorizontalIcon_alias_2 }

/**
 * The react component for the `split-cells-vertical.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Split Cells Vertical Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/split-cells-vertical.svg)
 */
declare const SplitCellsVerticalIcon: IconType;
export { SplitCellsVerticalIcon }
export { SplitCellsVerticalIcon as SplitCellsVerticalIcon_alias_1 }
export { SplitCellsVerticalIcon as SplitCellsVerticalIcon_alias_2 }

/**
 * The react component for the `spotify-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Spotify Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/spotify-fill.svg)
 */
declare const SpotifyFillIcon: IconType;
export { SpotifyFillIcon }
export { SpotifyFillIcon as SpotifyFillIcon_alias_1 }

/**
 * The react component for the `spotify-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Spotify Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/spotify-line.svg)
 */
declare const SpotifyLineIcon: IconType;
export { SpotifyLineIcon }
export { SpotifyLineIcon as SpotifyLineIcon_alias_1 }

/**
 * The react component for the `spy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Spy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/spy-fill.svg)
 */
declare const SpyFillIcon: IconType;
export { SpyFillIcon }
export { SpyFillIcon as SpyFillIcon_alias_1 }

/**
 * The react component for the `spy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Spy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/spy-line.svg)
 */
declare const SpyLineIcon: IconType;
export { SpyLineIcon }
export { SpyLineIcon as SpyLineIcon_alias_1 }

/**
 * The react component for the `stack-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stack Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/stack-fill.svg)
 */
declare const StackFillIcon: IconType;
export { StackFillIcon }
export { StackFillIcon as StackFillIcon_alias_1 }

/**
 * The react component for the `stack-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stack Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/stack-line.svg)
 */
declare const StackLineIcon: IconType;
export { StackLineIcon }
export { StackLineIcon as StackLineIcon_alias_1 }

/**
 * The react component for the `stack-overflow-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stack Overflow Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/stack-overflow-fill.svg)
 */
declare const StackOverflowFillIcon: IconType;
export { StackOverflowFillIcon }
export { StackOverflowFillIcon as StackOverflowFillIcon_alias_1 }

/**
 * The react component for the `stack-overflow-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stack Overflow Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/stack-overflow-line.svg)
 */
declare const StackOverflowLineIcon: IconType;
export { StackOverflowLineIcon }
export { StackOverflowLineIcon as StackOverflowLineIcon_alias_1 }

/**
 * The react component for the `stackshare-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stackshare Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/stackshare-fill.svg)
 */
declare const StackshareFillIcon: IconType;
export { StackshareFillIcon }
export { StackshareFillIcon as StackshareFillIcon_alias_1 }

/**
 * The react component for the `stackshare-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stackshare Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/stackshare-line.svg)
 */
declare const StackshareLineIcon: IconType;
export { StackshareLineIcon }
export { StackshareLineIcon as StackshareLineIcon_alias_1 }

/**
 * The react component for the `star-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Star Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/star-fill.svg)
 */
declare const StarFillIcon: IconType;
export { StarFillIcon }
export { StarFillIcon as StarFillIcon_alias_1 }

/**
 * The react component for the `star-half-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Star Half Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/star-half-fill.svg)
 */
declare const StarHalfFillIcon: IconType;
export { StarHalfFillIcon }
export { StarHalfFillIcon as StarHalfFillIcon_alias_1 }

/**
 * The react component for the `star-half-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Star Half Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/star-half-line.svg)
 */
declare const StarHalfLineIcon: IconType;
export { StarHalfLineIcon }
export { StarHalfLineIcon as StarHalfLineIcon_alias_1 }

/**
 * The react component for the `star-half-s-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Star Half S Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/star-half-s-fill.svg)
 */
declare const StarHalfSFillIcon: IconType;
export { StarHalfSFillIcon }
export { StarHalfSFillIcon as StarHalfSFillIcon_alias_1 }

/**
 * The react component for the `star-half-s-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Star Half S Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/star-half-s-line.svg)
 */
declare const StarHalfSLineIcon: IconType;
export { StarHalfSLineIcon }
export { StarHalfSLineIcon as StarHalfSLineIcon_alias_1 }

/**
 * The react component for the `star-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Star Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/star-line.svg)
 */
declare const StarLineIcon: IconType;
export { StarLineIcon }
export { StarLineIcon as StarLineIcon_alias_1 }

/**
 * The react component for the `star-s-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Star S Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/star-s-fill.svg)
 */
declare const StarSFillIcon: IconType;
export { StarSFillIcon }
export { StarSFillIcon as StarSFillIcon_alias_1 }

/**
 * The react component for the `star-s-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Star S Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/star-s-line.svg)
 */
declare const StarSLineIcon: IconType;
export { StarSLineIcon }
export { StarSLineIcon as StarSLineIcon_alias_1 }

/**
 * The react component for the `star-smile-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Star Smile Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/star-smile-fill.svg)
 */
declare const StarSmileFillIcon: IconType;
export { StarSmileFillIcon }
export { StarSmileFillIcon as StarSmileFillIcon_alias_1 }

/**
 * The react component for the `star-smile-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Star Smile Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/star-smile-line.svg)
 */
declare const StarSmileLineIcon: IconType;
export { StarSmileLineIcon }
export { StarSmileLineIcon as StarSmileLineIcon_alias_1 }

/**
 * The react component for the `steam-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Steam Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/steam-fill.svg)
 */
declare const SteamFillIcon: IconType;
export { SteamFillIcon }
export { SteamFillIcon as SteamFillIcon_alias_1 }

/**
 * The react component for the `steam-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Steam Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/steam-line.svg)
 */
declare const SteamLineIcon: IconType;
export { SteamLineIcon }
export { SteamLineIcon as SteamLineIcon_alias_1 }

/**
 * The react component for the `steering-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Steering 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/steering-2-fill.svg)
 */
declare const Steering2FillIcon: IconType;
export { Steering2FillIcon }
export { Steering2FillIcon as Steering2FillIcon_alias_1 }

/**
 * The react component for the `steering-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Steering 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/steering-2-line.svg)
 */
declare const Steering2LineIcon: IconType;
export { Steering2LineIcon }
export { Steering2LineIcon as Steering2LineIcon_alias_1 }

/**
 * The react component for the `steering-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Steering Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/steering-fill.svg)
 */
declare const SteeringFillIcon: IconType;
export { SteeringFillIcon }
export { SteeringFillIcon as SteeringFillIcon_alias_1 }

/**
 * The react component for the `steering-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Steering Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/steering-line.svg)
 */
declare const SteeringLineIcon: IconType;
export { SteeringLineIcon }
export { SteeringLineIcon as SteeringLineIcon_alias_1 }

/**
 * The react component for the `stethoscope-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stethoscope Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/stethoscope-fill.svg)
 */
declare const StethoscopeFillIcon: IconType;
export { StethoscopeFillIcon }
export { StethoscopeFillIcon as StethoscopeFillIcon_alias_1 }

/**
 * The react component for the `stethoscope-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stethoscope Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/stethoscope-line.svg)
 */
declare const StethoscopeLineIcon: IconType;
export { StethoscopeLineIcon }
export { StethoscopeLineIcon as StethoscopeLineIcon_alias_1 }

/**
 * The react component for the `sticky-note-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sticky Note 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/sticky-note-2-fill.svg)
 */
declare const StickyNote2FillIcon: IconType;
export { StickyNote2FillIcon }
export { StickyNote2FillIcon as StickyNote2FillIcon_alias_1 }

/**
 * The react component for the `sticky-note-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sticky Note 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/sticky-note-2-line.svg)
 */
declare const StickyNote2LineIcon: IconType;
export { StickyNote2LineIcon }
export { StickyNote2LineIcon as StickyNote2LineIcon_alias_1 }

/**
 * The react component for the `sticky-note-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sticky Note Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/sticky-note-fill.svg)
 */
declare const StickyNoteFillIcon: IconType;
export { StickyNoteFillIcon }
export { StickyNoteFillIcon as StickyNoteFillIcon_alias_1 }

/**
 * The react component for the `sticky-note-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sticky Note Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/sticky-note-line.svg)
 */
declare const StickyNoteLineIcon: IconType;
export { StickyNoteLineIcon }
export { StickyNoteLineIcon as StickyNoteLineIcon_alias_1 }

/**
 * The react component for the `stock-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stock Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/stock-fill.svg)
 */
declare const StockFillIcon: IconType;
export { StockFillIcon }
export { StockFillIcon as StockFillIcon_alias_1 }

/**
 * The react component for the `stock-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stock Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/stock-line.svg)
 */
declare const StockLineIcon: IconType;
export { StockLineIcon }
export { StockLineIcon as StockLineIcon_alias_1 }

/**
 * The react component for the `stop-circle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stop Circle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/stop-circle-fill.svg)
 */
declare const StopCircleFillIcon: IconType;
export { StopCircleFillIcon }
export { StopCircleFillIcon as StopCircleFillIcon_alias_1 }

/**
 * The react component for the `stop-circle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stop Circle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/stop-circle-line.svg)
 */
declare const StopCircleLineIcon: IconType;
export { StopCircleLineIcon }
export { StopCircleLineIcon as StopCircleLineIcon_alias_1 }

/**
 * The react component for the `stop-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stop Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/stop-fill.svg)
 */
declare const StopFillIcon: IconType;
export { StopFillIcon }
export { StopFillIcon as StopFillIcon_alias_1 }

/**
 * The react component for the `stop-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stop Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/stop-line.svg)
 */
declare const StopLineIcon: IconType;
export { StopLineIcon }
export { StopLineIcon as StopLineIcon_alias_1 }

/**
 * The react component for the `stop-mini-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stop Mini Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/stop-mini-fill.svg)
 */
declare const StopMiniFillIcon: IconType;
export { StopMiniFillIcon }
export { StopMiniFillIcon as StopMiniFillIcon_alias_1 }

/**
 * The react component for the `stop-mini-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Stop Mini Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/stop-mini-line.svg)
 */
declare const StopMiniLineIcon: IconType;
export { StopMiniLineIcon }
export { StopMiniLineIcon as StopMiniLineIcon_alias_1 }

/**
 * The react component for the `store-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Store 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/store-2-fill.svg)
 */
declare const Store2FillIcon: IconType;
export { Store2FillIcon }
export { Store2FillIcon as Store2FillIcon_alias_1 }

/**
 * The react component for the `store-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Store 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/store-2-line.svg)
 */
declare const Store2LineIcon: IconType;
export { Store2LineIcon }
export { Store2LineIcon as Store2LineIcon_alias_1 }

/**
 * The react component for the `store-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Store 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/store-3-fill.svg)
 */
declare const Store3FillIcon: IconType;
export { Store3FillIcon }
export { Store3FillIcon as Store3FillIcon_alias_1 }

/**
 * The react component for the `store-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Store 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/store-3-line.svg)
 */
declare const Store3LineIcon: IconType;
export { Store3LineIcon }
export { Store3LineIcon as Store3LineIcon_alias_1 }

/**
 * The react component for the `store-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Store Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/store-fill.svg)
 */
declare const StoreFillIcon: IconType;
export { StoreFillIcon }
export { StoreFillIcon as StoreFillIcon_alias_1 }

/**
 * The react component for the `store-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Store Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Buildings/store-line.svg)
 */
declare const StoreLineIcon: IconType;
export { StoreLineIcon }
export { StoreLineIcon as StoreLineIcon_alias_1 }

/**
 * The react component for the `strikethrough-2.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Strikethrough 2 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/strikethrough-2.svg)
 */
declare const Strikethrough2Icon: IconType;
export { Strikethrough2Icon }
export { Strikethrough2Icon as Strikethrough2Icon_alias_1 }
export { Strikethrough2Icon as Strikethrough2Icon_alias_2 }

/**
 * The react component for the `strikethrough.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Strikethrough Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/strikethrough.svg)
 */
declare const StrikethroughIcon: IconType;
export { StrikethroughIcon }
export { StrikethroughIcon as StrikethroughIcon_alias_1 }
export { StrikethroughIcon as StrikethroughIcon_alias_2 }

/**
 * The react component for the `subscript-2.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Subscript 2 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/subscript-2.svg)
 */
declare const Subscript2Icon: IconType;
export { Subscript2Icon }
export { Subscript2Icon as Subscript2Icon_alias_1 }
export { Subscript2Icon as Subscript2Icon_alias_2 }

/**
 * The react component for the `subscript.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Subscript Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/subscript.svg)
 */
declare const SubscriptIcon: IconType;
export { SubscriptIcon }
export { SubscriptIcon as SubscriptIcon_alias_1 }
export { SubscriptIcon as SubscriptIcon_alias_2 }

/**
 * The react component for the `subtract-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Subtract Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/subtract-fill.svg)
 */
declare const SubtractFillIcon: IconType;
export { SubtractFillIcon }
export { SubtractFillIcon as SubtractFillIcon_alias_1 }

/**
 * The react component for the `subtract-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Subtract Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/subtract-line.svg)
 */
declare const SubtractLineIcon: IconType;
export { SubtractLineIcon }
export { SubtractLineIcon as SubtractLineIcon_alias_1 }
export { SubtractLineIcon as SubtractLineIcon_alias_2 }

/**
 * The react component for the `subway-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Subway Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/subway-fill.svg)
 */
declare const SubwayFillIcon: IconType;
export { SubwayFillIcon }
export { SubwayFillIcon as SubwayFillIcon_alias_1 }

/**
 * The react component for the `subway-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Subway Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/subway-line.svg)
 */
declare const SubwayLineIcon: IconType;
export { SubwayLineIcon }
export { SubwayLineIcon as SubwayLineIcon_alias_1 }

/**
 * The react component for the `subway-wifi-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Subway Wifi Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/subway-wifi-fill.svg)
 */
declare const SubwayWifiFillIcon: IconType;
export { SubwayWifiFillIcon }
export { SubwayWifiFillIcon as SubwayWifiFillIcon_alias_1 }

/**
 * The react component for the `subway-wifi-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Subway Wifi Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/subway-wifi-line.svg)
 */
declare const SubwayWifiLineIcon: IconType;
export { SubwayWifiLineIcon }
export { SubwayWifiLineIcon as SubwayWifiLineIcon_alias_1 }

/**
 * The react component for the `suitcase-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Suitcase 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/suitcase-2-fill.svg)
 */
declare const Suitcase2FillIcon: IconType;
export { Suitcase2FillIcon }
export { Suitcase2FillIcon as Suitcase2FillIcon_alias_1 }

/**
 * The react component for the `suitcase-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Suitcase 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/suitcase-2-line.svg)
 */
declare const Suitcase2LineIcon: IconType;
export { Suitcase2LineIcon }
export { Suitcase2LineIcon as Suitcase2LineIcon_alias_1 }

/**
 * The react component for the `suitcase-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Suitcase 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/suitcase-3-fill.svg)
 */
declare const Suitcase3FillIcon: IconType;
export { Suitcase3FillIcon }
export { Suitcase3FillIcon as Suitcase3FillIcon_alias_1 }

/**
 * The react component for the `suitcase-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Suitcase 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/suitcase-3-line.svg)
 */
declare const Suitcase3LineIcon: IconType;
export { Suitcase3LineIcon }
export { Suitcase3LineIcon as Suitcase3LineIcon_alias_1 }

/**
 * The react component for the `suitcase-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Suitcase Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/suitcase-fill.svg)
 */
declare const SuitcaseFillIcon: IconType;
export { SuitcaseFillIcon }
export { SuitcaseFillIcon as SuitcaseFillIcon_alias_1 }

/**
 * The react component for the `suitcase-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Suitcase Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/suitcase-line.svg)
 */
declare const SuitcaseLineIcon: IconType;
export { SuitcaseLineIcon }
export { SuitcaseLineIcon as SuitcaseLineIcon_alias_1 }

/**
 * The react component for the `sun-cloudy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sun Cloudy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/sun-cloudy-fill.svg)
 */
declare const SunCloudyFillIcon: IconType;
export { SunCloudyFillIcon }
export { SunCloudyFillIcon as SunCloudyFillIcon_alias_1 }

/**
 * The react component for the `sun-cloudy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sun Cloudy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/sun-cloudy-line.svg)
 */
declare const SunCloudyLineIcon: IconType;
export { SunCloudyLineIcon }
export { SunCloudyLineIcon as SunCloudyLineIcon_alias_1 }

/**
 * The react component for the `sun-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sun Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/sun-fill.svg)
 */
declare const SunFillIcon: IconType;
export { SunFillIcon }
export { SunFillIcon as SunFillIcon_alias_1 }

/**
 * The react component for the `sun-foggy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sun Foggy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/sun-foggy-fill.svg)
 */
declare const SunFoggyFillIcon: IconType;
export { SunFoggyFillIcon }
export { SunFoggyFillIcon as SunFoggyFillIcon_alias_1 }

/**
 * The react component for the `sun-foggy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sun Foggy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/sun-foggy-line.svg)
 */
declare const SunFoggyLineIcon: IconType;
export { SunFoggyLineIcon }
export { SunFoggyLineIcon as SunFoggyLineIcon_alias_1 }

/**
 * The react component for the `sun-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sun Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/sun-line.svg)
 */
declare const SunLineIcon: IconType;
export { SunLineIcon }
export { SunLineIcon as SunLineIcon_alias_1 }

/**
 * The react component for the `superscript-2.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Superscript 2 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/superscript-2.svg)
 */
declare const Superscript2Icon: IconType;
export { Superscript2Icon }
export { Superscript2Icon as Superscript2Icon_alias_1 }
export { Superscript2Icon as Superscript2Icon_alias_2 }

/**
 * The react component for the `superscript.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Superscript Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/superscript.svg)
 */
declare const SuperscriptIcon: IconType;
export { SuperscriptIcon }
export { SuperscriptIcon as SuperscriptIcon_alias_1 }
export { SuperscriptIcon as SuperscriptIcon_alias_2 }

/**
 * The react component for the `surgical-mask-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Surgical Mask Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/surgical-mask-fill.svg)
 */
declare const SurgicalMaskFillIcon: IconType;
export { SurgicalMaskFillIcon }
export { SurgicalMaskFillIcon as SurgicalMaskFillIcon_alias_1 }

/**
 * The react component for the `surgical-mask-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Surgical Mask Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/surgical-mask-line.svg)
 */
declare const SurgicalMaskLineIcon: IconType;
export { SurgicalMaskLineIcon }
export { SurgicalMaskLineIcon as SurgicalMaskLineIcon_alias_1 }

/**
 * The react component for the `surround-sound-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Surround Sound Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/surround-sound-fill.svg)
 */
declare const SurroundSoundFillIcon: IconType;
export { SurroundSoundFillIcon }
export { SurroundSoundFillIcon as SurroundSoundFillIcon_alias_1 }

/**
 * The react component for the `surround-sound-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Surround Sound Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/surround-sound-line.svg)
 */
declare const SurroundSoundLineIcon: IconType;
export { SurroundSoundLineIcon }
export { SurroundSoundLineIcon as SurroundSoundLineIcon_alias_1 }

/**
 * The react component for the `survey-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Survey Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/survey-fill.svg)
 */
declare const SurveyFillIcon: IconType;
export { SurveyFillIcon }
export { SurveyFillIcon as SurveyFillIcon_alias_1 }

/**
 * The react component for the `survey-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Survey Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/survey-line.svg)
 */
declare const SurveyLineIcon: IconType;
export { SurveyLineIcon }
export { SurveyLineIcon as SurveyLineIcon_alias_1 }

/**
 * The react component for the `swap-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Swap Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/swap-box-fill.svg)
 */
declare const SwapBoxFillIcon: IconType;
export { SwapBoxFillIcon }
export { SwapBoxFillIcon as SwapBoxFillIcon_alias_1 }

/**
 * The react component for the `swap-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Swap Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/swap-box-line.svg)
 */
declare const SwapBoxLineIcon: IconType;
export { SwapBoxLineIcon }
export { SwapBoxLineIcon as SwapBoxLineIcon_alias_1 }

/**
 * The react component for the `swap-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Swap Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/swap-fill.svg)
 */
declare const SwapFillIcon: IconType;
export { SwapFillIcon }
export { SwapFillIcon as SwapFillIcon_alias_1 }

/**
 * The react component for the `swap-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Swap Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/swap-line.svg)
 */
declare const SwapLineIcon: IconType;
export { SwapLineIcon }
export { SwapLineIcon as SwapLineIcon_alias_1 }

/**
 * The react component for the `switch-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Switch Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/switch-fill.svg)
 */
declare const SwitchFillIcon: IconType;
export { SwitchFillIcon }
export { SwitchFillIcon as SwitchFillIcon_alias_1 }

/**
 * The react component for the `switch-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Switch Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/switch-line.svg)
 */
declare const SwitchLineIcon: IconType;
export { SwitchLineIcon }
export { SwitchLineIcon as SwitchLineIcon_alias_1 }

/**
 * The react component for the `sword-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sword Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/sword-fill.svg)
 */
declare const SwordFillIcon: IconType;
export { SwordFillIcon }
export { SwordFillIcon as SwordFillIcon_alias_1 }

/**
 * The react component for the `sword-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Sword Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/sword-line.svg)
 */
declare const SwordLineIcon: IconType;
export { SwordLineIcon }
export { SwordLineIcon as SwordLineIcon_alias_1 }

/**
 * The react component for the `syringe-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Syringe Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/syringe-fill.svg)
 */
declare const SyringeFillIcon: IconType;
export { SyringeFillIcon }
export { SyringeFillIcon as SyringeFillIcon_alias_1 }

/**
 * The react component for the `syringe-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Syringe Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/syringe-line.svg)
 */
declare const SyringeLineIcon: IconType;
export { SyringeLineIcon }
export { SyringeLineIcon as SyringeLineIcon_alias_1 }

/**
 * The react component for the `table-2.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Table 2 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/table-2.svg)
 */
declare const Table2Icon: IconType;
export { Table2Icon }
export { Table2Icon as Table2Icon_alias_1 }
export { Table2Icon as Table2Icon_alias_2 }

/**
 * The react component for the `table-alt-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Table Alt Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/table-alt-fill.svg)
 */
declare const TableAltFillIcon: IconType;
export { TableAltFillIcon }
export { TableAltFillIcon as TableAltFillIcon_alias_1 }

/**
 * The react component for the `table-alt-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Table Alt Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/table-alt-line.svg)
 */
declare const TableAltLineIcon: IconType;
export { TableAltLineIcon }
export { TableAltLineIcon as TableAltLineIcon_alias_1 }

/**
 * The react component for the `table-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Table Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/table-fill.svg)
 */
declare const TableFillIcon: IconType;
export { TableFillIcon }
export { TableFillIcon as TableFillIcon_alias_1 }

/**
 * The react component for the `table-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Table Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/table-line.svg)
 */
declare const TableLineIcon: IconType;
export { TableLineIcon }
export { TableLineIcon as TableLineIcon_alias_1 }
export { TableLineIcon as TableLineIcon_alias_2 }

/**
 * The react component for the `tablet-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tablet Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/tablet-fill.svg)
 */
declare const TabletFillIcon: IconType;
export { TabletFillIcon }
export { TabletFillIcon as TabletFillIcon_alias_1 }

/**
 * The react component for the `tablet-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tablet Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/tablet-line.svg)
 */
declare const TabletLineIcon: IconType;
export { TabletLineIcon }
export { TabletLineIcon as TabletLineIcon_alias_1 }

/**
 * The react component for the `takeaway-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Takeaway Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/takeaway-fill.svg)
 */
declare const TakeawayFillIcon: IconType;
export { TakeawayFillIcon }
export { TakeawayFillIcon as TakeawayFillIcon_alias_1 }

/**
 * The react component for the `takeaway-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Takeaway Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/takeaway-line.svg)
 */
declare const TakeawayLineIcon: IconType;
export { TakeawayLineIcon }
export { TakeawayLineIcon as TakeawayLineIcon_alias_1 }

/**
 * The react component for the `taobao-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Taobao Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/taobao-fill.svg)
 */
declare const TaobaoFillIcon: IconType;
export { TaobaoFillIcon }
export { TaobaoFillIcon as TaobaoFillIcon_alias_1 }

/**
 * The react component for the `taobao-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Taobao Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/taobao-line.svg)
 */
declare const TaobaoLineIcon: IconType;
export { TaobaoLineIcon }
export { TaobaoLineIcon as TaobaoLineIcon_alias_1 }

/**
 * The react component for the `tape-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tape Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/tape-fill.svg)
 */
declare const TapeFillIcon: IconType;
export { TapeFillIcon }
export { TapeFillIcon as TapeFillIcon_alias_1 }

/**
 * The react component for the `tape-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tape Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/tape-line.svg)
 */
declare const TapeLineIcon: IconType;
export { TapeLineIcon }
export { TapeLineIcon as TapeLineIcon_alias_1 }

/**
 * The react component for the `task-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Task Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/task-fill.svg)
 */
declare const TaskFillIcon: IconType;
export { TaskFillIcon }
export { TaskFillIcon as TaskFillIcon_alias_1 }

/**
 * The react component for the `task-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Task Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/task-line.svg)
 */
declare const TaskLineIcon: IconType;
export { TaskLineIcon }
export { TaskLineIcon as TaskLineIcon_alias_1 }

/**
 * The react component for the `taxi-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Taxi Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/taxi-fill.svg)
 */
declare const TaxiFillIcon: IconType;
export { TaxiFillIcon }
export { TaxiFillIcon as TaxiFillIcon_alias_1 }

/**
 * The react component for the `taxi-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Taxi Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/taxi-line.svg)
 */
declare const TaxiLineIcon: IconType;
export { TaxiLineIcon }
export { TaxiLineIcon as TaxiLineIcon_alias_1 }

/**
 * The react component for the `taxi-wifi-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Taxi Wifi Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/taxi-wifi-fill.svg)
 */
declare const TaxiWifiFillIcon: IconType;
export { TaxiWifiFillIcon }
export { TaxiWifiFillIcon as TaxiWifiFillIcon_alias_1 }

/**
 * The react component for the `taxi-wifi-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Taxi Wifi Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/taxi-wifi-line.svg)
 */
declare const TaxiWifiLineIcon: IconType;
export { TaxiWifiLineIcon }
export { TaxiWifiLineIcon as TaxiWifiLineIcon_alias_1 }

/**
 * The react component for the `t-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![T Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/t-box-fill.svg)
 */
declare const TBoxFillIcon: IconType;
export { TBoxFillIcon }
export { TBoxFillIcon as TBoxFillIcon_alias_1 }

/**
 * The react component for the `t-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![T Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/t-box-line.svg)
 */
declare const TBoxLineIcon: IconType;
export { TBoxLineIcon }
export { TBoxLineIcon as TBoxLineIcon_alias_1 }

/**
 * The react component for the `team-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Team Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/team-fill.svg)
 */
declare const TeamFillIcon: IconType;
export { TeamFillIcon }
export { TeamFillIcon as TeamFillIcon_alias_1 }

/**
 * The react component for the `team-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Team Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/team-line.svg)
 */
declare const TeamLineIcon: IconType;
export { TeamLineIcon }
export { TeamLineIcon as TeamLineIcon_alias_1 }

/**
 * The react component for the `telegram-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Telegram Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/telegram-fill.svg)
 */
declare const TelegramFillIcon: IconType;
export { TelegramFillIcon }
export { TelegramFillIcon as TelegramFillIcon_alias_1 }

/**
 * The react component for the `telegram-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Telegram Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/telegram-line.svg)
 */
declare const TelegramLineIcon: IconType;
export { TelegramLineIcon }
export { TelegramLineIcon as TelegramLineIcon_alias_1 }

/**
 * The react component for the `temp-cold-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Temp Cold Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/temp-cold-fill.svg)
 */
declare const TempColdFillIcon: IconType;
export { TempColdFillIcon }
export { TempColdFillIcon as TempColdFillIcon_alias_1 }

/**
 * The react component for the `temp-cold-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Temp Cold Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/temp-cold-line.svg)
 */
declare const TempColdLineIcon: IconType;
export { TempColdLineIcon }
export { TempColdLineIcon as TempColdLineIcon_alias_1 }

/**
 * The react component for the `temp-hot-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Temp Hot Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/temp-hot-fill.svg)
 */
declare const TempHotFillIcon: IconType;
export { TempHotFillIcon }
export { TempHotFillIcon as TempHotFillIcon_alias_1 }

/**
 * The react component for the `temp-hot-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Temp Hot Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/temp-hot-line.svg)
 */
declare const TempHotLineIcon: IconType;
export { TempHotLineIcon }
export { TempHotLineIcon as TempHotLineIcon_alias_1 }

/**
 * The react component for the `terminal-box-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Terminal Box Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/terminal-box-fill.svg)
 */
declare const TerminalBoxFillIcon: IconType;
export { TerminalBoxFillIcon }
export { TerminalBoxFillIcon as TerminalBoxFillIcon_alias_1 }

/**
 * The react component for the `terminal-box-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Terminal Box Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/terminal-box-line.svg)
 */
declare const TerminalBoxLineIcon: IconType;
export { TerminalBoxLineIcon }
export { TerminalBoxLineIcon as TerminalBoxLineIcon_alias_1 }

/**
 * The react component for the `terminal-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Terminal Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/terminal-fill.svg)
 */
declare const TerminalFillIcon: IconType;
export { TerminalFillIcon }
export { TerminalFillIcon as TerminalFillIcon_alias_1 }

/**
 * The react component for the `terminal-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Terminal Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/terminal-line.svg)
 */
declare const TerminalLineIcon: IconType;
export { TerminalLineIcon }
export { TerminalLineIcon as TerminalLineIcon_alias_1 }

/**
 * The react component for the `terminal-window-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Terminal Window Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/terminal-window-fill.svg)
 */
declare const TerminalWindowFillIcon: IconType;
export { TerminalWindowFillIcon }
export { TerminalWindowFillIcon as TerminalWindowFillIcon_alias_1 }

/**
 * The react component for the `terminal-window-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Terminal Window Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Development/terminal-window-line.svg)
 */
declare const TerminalWindowLineIcon: IconType;
export { TerminalWindowLineIcon }
export { TerminalWindowLineIcon as TerminalWindowLineIcon_alias_1 }

/**
 * The react component for the `test-tube-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Test Tube Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/test-tube-fill.svg)
 */
declare const TestTubeFillIcon: IconType;
export { TestTubeFillIcon }
export { TestTubeFillIcon as TestTubeFillIcon_alias_1 }

/**
 * The react component for the `test-tube-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Test Tube Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/test-tube-line.svg)
 */
declare const TestTubeLineIcon: IconType;
export { TestTubeLineIcon }
export { TestTubeLineIcon as TestTubeLineIcon_alias_1 }

/**
 * The react component for the `text-direction-l.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Text Direction L Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/text-direction-l.svg)
 */
declare const TextDirectionLIcon: IconType;
export { TextDirectionLIcon }
export { TextDirectionLIcon as TextDirectionLIcon_alias_1 }
export { TextDirectionLIcon as TextDirectionLIcon_alias_2 }

/**
 * The react component for the `text-direction-r.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Text Direction R Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/text-direction-r.svg)
 */
declare const TextDirectionRIcon: IconType;
export { TextDirectionRIcon }
export { TextDirectionRIcon as TextDirectionRIcon_alias_1 }
export { TextDirectionRIcon as TextDirectionRIcon_alias_2 }

/**
 * The react component for the `text.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Text Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/text.svg)
 */
declare const TextIcon: IconType;
export { TextIcon }
export { TextIcon as TextIcon_alias_1 }
export { TextIcon as TextIcon_alias_2 }

/**
 * The react component for the `text-spacing.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Text Spacing Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/text-spacing.svg)
 */
declare const TextSpacingIcon: IconType;
export { TextSpacingIcon }
export { TextSpacingIcon as TextSpacingIcon_alias_1 }
export { TextSpacingIcon as TextSpacingIcon_alias_2 }

/**
 * The react component for the `text-wrap.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Text Wrap Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/text-wrap.svg)
 */
declare const TextWrapIcon: IconType;
export { TextWrapIcon }
export { TextWrapIcon as TextWrapIcon_alias_1 }
export { TextWrapIcon as TextWrapIcon_alias_2 }

/**
 * This the `ThemeProvider`. Wrap your editor with it to customise the theming
 * of content within your editor.
 *
 * Please be aware that this wraps your component in an extra dom layer.
 */
declare const ThemeProvider: (props: ThemeProviderProps) => ReactElement<ThemeProviderProps>;
export { ThemeProvider }
export { ThemeProvider as ThemeProvider_alias_1 }
export { ThemeProvider as ThemeProvider_alias_2 }

declare interface ThemeProviderProps extends UseThemeProps {
    /**
     * A custom component to use for the wrapper.
     *
     * @defaultValue 'div'
     */
    as?: ElementType<{
        style?: CSSProperties;
        className?: string;
    }>;
    children: ReactNode;
}
export { ThemeProviderProps }
export { ThemeProviderProps as ThemeProviderProps_alias_1 }
export { ThemeProviderProps as ThemeProviderProps_alias_2 }

/**
 * The react component for the `thermometer-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Thermometer Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/thermometer-fill.svg)
 */
declare const ThermometerFillIcon: IconType;
export { ThermometerFillIcon }
export { ThermometerFillIcon as ThermometerFillIcon_alias_1 }

/**
 * The react component for the `thermometer-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Thermometer Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/thermometer-line.svg)
 */
declare const ThermometerLineIcon: IconType;
export { ThermometerLineIcon }
export { ThermometerLineIcon as ThermometerLineIcon_alias_1 }

/**
 * The react component for the `thumb-down-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Thumb Down Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/thumb-down-fill.svg)
 */
declare const ThumbDownFillIcon: IconType;
export { ThumbDownFillIcon }
export { ThumbDownFillIcon as ThumbDownFillIcon_alias_1 }

/**
 * The react component for the `thumb-down-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Thumb Down Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/thumb-down-line.svg)
 */
declare const ThumbDownLineIcon: IconType;
export { ThumbDownLineIcon }
export { ThumbDownLineIcon as ThumbDownLineIcon_alias_1 }

/**
 * The react component for the `thumb-up-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Thumb Up Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/thumb-up-fill.svg)
 */
declare const ThumbUpFillIcon: IconType;
export { ThumbUpFillIcon }
export { ThumbUpFillIcon as ThumbUpFillIcon_alias_1 }

/**
 * The react component for the `thumb-up-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Thumb Up Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/thumb-up-line.svg)
 */
declare const ThumbUpLineIcon: IconType;
export { ThumbUpLineIcon }
export { ThumbUpLineIcon as ThumbUpLineIcon_alias_1 }

/**
 * The react component for the `thunderstorms-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Thunderstorms Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/thunderstorms-fill.svg)
 */
declare const ThunderstormsFillIcon: IconType;
export { ThunderstormsFillIcon }
export { ThunderstormsFillIcon as ThunderstormsFillIcon_alias_1 }

/**
 * The react component for the `thunderstorms-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Thunderstorms Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/thunderstorms-line.svg)
 */
declare const ThunderstormsLineIcon: IconType;
export { ThunderstormsLineIcon }
export { ThunderstormsLineIcon as ThunderstormsLineIcon_alias_1 }

/**
 * The react component for the `ticket-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ticket 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/ticket-2-fill.svg)
 */
declare const Ticket2FillIcon: IconType;
export { Ticket2FillIcon }
export { Ticket2FillIcon as Ticket2FillIcon_alias_1 }

/**
 * The react component for the `ticket-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ticket 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/ticket-2-line.svg)
 */
declare const Ticket2LineIcon: IconType;
export { Ticket2LineIcon }
export { Ticket2LineIcon as Ticket2LineIcon_alias_1 }

/**
 * The react component for the `ticket-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ticket Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/ticket-fill.svg)
 */
declare const TicketFillIcon: IconType;
export { TicketFillIcon }
export { TicketFillIcon as TicketFillIcon_alias_1 }

/**
 * The react component for the `ticket-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ticket Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/ticket-line.svg)
 */
declare const TicketLineIcon: IconType;
export { TicketLineIcon }
export { TicketLineIcon as TicketLineIcon_alias_1 }

/**
 * The react component for the `time-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Time Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/time-fill.svg)
 */
declare const TimeFillIcon: IconType;
export { TimeFillIcon }
export { TimeFillIcon as TimeFillIcon_alias_1 }

/**
 * The react component for the `time-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Time Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/time-line.svg)
 */
declare const TimeLineIcon: IconType;
export { TimeLineIcon }
export { TimeLineIcon as TimeLineIcon_alias_1 }

/**
 * The react component for the `timer-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Timer 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/timer-2-fill.svg)
 */
declare const Timer2FillIcon: IconType;
export { Timer2FillIcon }
export { Timer2FillIcon as Timer2FillIcon_alias_1 }

/**
 * The react component for the `timer-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Timer 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/timer-2-line.svg)
 */
declare const Timer2LineIcon: IconType;
export { Timer2LineIcon }
export { Timer2LineIcon as Timer2LineIcon_alias_1 }

/**
 * The react component for the `timer-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Timer Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/timer-fill.svg)
 */
declare const TimerFillIcon: IconType;
export { TimerFillIcon }
export { TimerFillIcon as TimerFillIcon_alias_1 }

/**
 * The react component for the `timer-flash-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Timer Flash Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/timer-flash-fill.svg)
 */
declare const TimerFlashFillIcon: IconType;
export { TimerFlashFillIcon }
export { TimerFlashFillIcon as TimerFlashFillIcon_alias_1 }

/**
 * The react component for the `timer-flash-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Timer Flash Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/timer-flash-line.svg)
 */
declare const TimerFlashLineIcon: IconType;
export { TimerFlashLineIcon }
export { TimerFlashLineIcon as TimerFlashLineIcon_alias_1 }

/**
 * The react component for the `timer-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Timer Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/timer-line.svg)
 */
declare const TimerLineIcon: IconType;
export { TimerLineIcon }
export { TimerLineIcon as TimerLineIcon_alias_1 }

/**
 * The react component for the `todo-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Todo Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/todo-fill.svg)
 */
declare const TodoFillIcon: IconType;
export { TodoFillIcon }
export { TodoFillIcon as TodoFillIcon_alias_1 }

/**
 * The react component for the `todo-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Todo Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Document/todo-line.svg)
 */
declare const TodoLineIcon: IconType;
export { TodoLineIcon }
export { TodoLineIcon as TodoLineIcon_alias_1 }

/**
 * The react component for the `toggle-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Toggle Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/toggle-fill.svg)
 */
declare const ToggleFillIcon: IconType;
export { ToggleFillIcon }
export { ToggleFillIcon as ToggleFillIcon_alias_1 }

/**
 * The react component for the `toggle-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Toggle Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/toggle-line.svg)
 */
declare const ToggleLineIcon: IconType;
export { ToggleLineIcon }
export { ToggleLineIcon as ToggleLineIcon_alias_1 }

/**
 * The react component for the `tools-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tools Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/tools-fill.svg)
 */
declare const ToolsFillIcon: IconType;
export { ToolsFillIcon }
export { ToolsFillIcon as ToolsFillIcon_alias_1 }

/**
 * The react component for the `tools-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tools Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Design/tools-line.svg)
 */
declare const ToolsLineIcon: IconType;
export { ToolsLineIcon }
export { ToolsLineIcon as ToolsLineIcon_alias_1 }

/**
 * The react component for the `tornado-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tornado Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/tornado-fill.svg)
 */
declare const TornadoFillIcon: IconType;
export { TornadoFillIcon }
export { TornadoFillIcon as TornadoFillIcon_alias_1 }

/**
 * The react component for the `tornado-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tornado Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/tornado-line.svg)
 */
declare const TornadoLineIcon: IconType;
export { TornadoLineIcon }
export { TornadoLineIcon as TornadoLineIcon_alias_1 }

/**
 * The react component for the `trademark-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Trademark Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/trademark-fill.svg)
 */
declare const TrademarkFillIcon: IconType;
export { TrademarkFillIcon }
export { TrademarkFillIcon as TrademarkFillIcon_alias_1 }

/**
 * The react component for the `trademark-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Trademark Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/trademark-line.svg)
 */
declare const TrademarkLineIcon: IconType;
export { TrademarkLineIcon }
export { TrademarkLineIcon as TrademarkLineIcon_alias_1 }

/**
 * The react component for the `traffic-light-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Traffic Light Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/traffic-light-fill.svg)
 */
declare const TrafficLightFillIcon: IconType;
export { TrafficLightFillIcon }
export { TrafficLightFillIcon as TrafficLightFillIcon_alias_1 }

/**
 * The react component for the `traffic-light-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Traffic Light Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/traffic-light-line.svg)
 */
declare const TrafficLightLineIcon: IconType;
export { TrafficLightLineIcon }
export { TrafficLightLineIcon as TrafficLightLineIcon_alias_1 }

/**
 * The react component for the `train-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Train Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/train-fill.svg)
 */
declare const TrainFillIcon: IconType;
export { TrainFillIcon }
export { TrainFillIcon as TrainFillIcon_alias_1 }

/**
 * The react component for the `train-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Train Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/train-line.svg)
 */
declare const TrainLineIcon: IconType;
export { TrainLineIcon }
export { TrainLineIcon as TrainLineIcon_alias_1 }

/**
 * The react component for the `train-wifi-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Train Wifi Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/train-wifi-fill.svg)
 */
declare const TrainWifiFillIcon: IconType;
export { TrainWifiFillIcon }
export { TrainWifiFillIcon as TrainWifiFillIcon_alias_1 }

/**
 * The react component for the `train-wifi-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Train Wifi Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/train-wifi-line.svg)
 */
declare const TrainWifiLineIcon: IconType;
export { TrainWifiLineIcon }
export { TrainWifiLineIcon as TrainWifiLineIcon_alias_1 }

/**
 * The react component for the `translate-2.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Translate 2 Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/translate-2.svg)
 */
declare const Translate2Icon: IconType;
export { Translate2Icon }
export { Translate2Icon as Translate2Icon_alias_1 }
export { Translate2Icon as Translate2Icon_alias_2 }

/**
 * The react component for the `translate.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Translate Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/translate.svg)
 */
declare const TranslateIcon: IconType;
export { TranslateIcon }
export { TranslateIcon as TranslateIcon_alias_1 }
export { TranslateIcon as TranslateIcon_alias_2 }

/**
 * The react component for the `travesti-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Travesti Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/travesti-fill.svg)
 */
declare const TravestiFillIcon: IconType;
export { TravestiFillIcon }
export { TravestiFillIcon as TravestiFillIcon_alias_1 }

/**
 * The react component for the `travesti-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Travesti Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/travesti-line.svg)
 */
declare const TravestiLineIcon: IconType;
export { TravestiLineIcon }
export { TravestiLineIcon as TravestiLineIcon_alias_1 }

/**
 * The react component for the `treasure-map-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Treasure Map Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/treasure-map-fill.svg)
 */
declare const TreasureMapFillIcon: IconType;
export { TreasureMapFillIcon }
export { TreasureMapFillIcon as TreasureMapFillIcon_alias_1 }

/**
 * The react component for the `treasure-map-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Treasure Map Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/treasure-map-line.svg)
 */
declare const TreasureMapLineIcon: IconType;
export { TreasureMapLineIcon }
export { TreasureMapLineIcon as TreasureMapLineIcon_alias_1 }

/**
 * The react component for the `trello-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Trello Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/trello-fill.svg)
 */
declare const TrelloFillIcon: IconType;
export { TrelloFillIcon }
export { TrelloFillIcon as TrelloFillIcon_alias_1 }

/**
 * The react component for the `trello-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Trello Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/trello-line.svg)
 */
declare const TrelloLineIcon: IconType;
export { TrelloLineIcon }
export { TrelloLineIcon as TrelloLineIcon_alias_1 }

/**
 * The react component for the `trophy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Trophy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/trophy-fill.svg)
 */
declare const TrophyFillIcon: IconType;
export { TrophyFillIcon }
export { TrophyFillIcon as TrophyFillIcon_alias_1 }

/**
 * The react component for the `trophy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Trophy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/trophy-line.svg)
 */
declare const TrophyLineIcon: IconType;
export { TrophyLineIcon }
export { TrophyLineIcon as TrophyLineIcon_alias_1 }

/**
 * The react component for the `truck-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Truck Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/truck-fill.svg)
 */
declare const TruckFillIcon: IconType;
export { TruckFillIcon }
export { TruckFillIcon as TruckFillIcon_alias_1 }

/**
 * The react component for the `truck-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Truck Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/truck-line.svg)
 */
declare const TruckLineIcon: IconType;
export { TruckLineIcon }
export { TruckLineIcon as TruckLineIcon_alias_1 }

/**
 * The react component for the `t-shirt-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![T Shirt 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/t-shirt-2-fill.svg)
 */
declare const TShirt2FillIcon: IconType;
export { TShirt2FillIcon }
export { TShirt2FillIcon as TShirt2FillIcon_alias_1 }

/**
 * The react component for the `t-shirt-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![T Shirt 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/t-shirt-2-line.svg)
 */
declare const TShirt2LineIcon: IconType;
export { TShirt2LineIcon }
export { TShirt2LineIcon as TShirt2LineIcon_alias_1 }

/**
 * The react component for the `t-shirt-air-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![T Shirt Air Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/t-shirt-air-fill.svg)
 */
declare const TShirtAirFillIcon: IconType;
export { TShirtAirFillIcon }
export { TShirtAirFillIcon as TShirtAirFillIcon_alias_1 }

/**
 * The react component for the `t-shirt-air-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![T Shirt Air Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/t-shirt-air-line.svg)
 */
declare const TShirtAirLineIcon: IconType;
export { TShirtAirLineIcon }
export { TShirtAirLineIcon as TShirtAirLineIcon_alias_1 }

/**
 * The react component for the `t-shirt-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![T Shirt Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/t-shirt-fill.svg)
 */
declare const TShirtFillIcon: IconType;
export { TShirtFillIcon }
export { TShirtFillIcon as TShirtFillIcon_alias_1 }

/**
 * The react component for the `t-shirt-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![T Shirt Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/t-shirt-line.svg)
 */
declare const TShirtLineIcon: IconType;
export { TShirtLineIcon }
export { TShirtLineIcon as TShirtLineIcon_alias_1 }

/**
 * The react component for the `tumblr-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tumblr Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/tumblr-fill.svg)
 */
declare const TumblrFillIcon: IconType;
export { TumblrFillIcon }
export { TumblrFillIcon as TumblrFillIcon_alias_1 }

/**
 * The react component for the `tumblr-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tumblr Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/tumblr-line.svg)
 */
declare const TumblrLineIcon: IconType;
export { TumblrLineIcon }
export { TumblrLineIcon as TumblrLineIcon_alias_1 }

/**
 * The react component for the `tv-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tv 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/tv-2-fill.svg)
 */
declare const Tv2FillIcon: IconType;
export { Tv2FillIcon }
export { Tv2FillIcon as Tv2FillIcon_alias_1 }

/**
 * The react component for the `tv-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tv 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/tv-2-line.svg)
 */
declare const Tv2LineIcon: IconType;
export { Tv2LineIcon }
export { Tv2LineIcon as Tv2LineIcon_alias_1 }

/**
 * The react component for the `tv-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tv Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/tv-fill.svg)
 */
declare const TvFillIcon: IconType;
export { TvFillIcon }
export { TvFillIcon as TvFillIcon_alias_1 }

/**
 * The react component for the `tv-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Tv Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/tv-line.svg)
 */
declare const TvLineIcon: IconType;
export { TvLineIcon }
export { TvLineIcon as TvLineIcon_alias_1 }

/**
 * The react component for the `twenty-four-hours-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Twenty Four Hours Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/24-hours-fill.svg)
 */
declare const TwentyFourHoursFillIcon: IconType;
export { TwentyFourHoursFillIcon }
export { TwentyFourHoursFillIcon as TwentyFourHoursFillIcon_alias_1 }

/**
 * The react component for the `twenty-four-hours-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Twenty Four Hours Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/24-hours-line.svg)
 */
declare const TwentyFourHoursLineIcon: IconType;
export { TwentyFourHoursLineIcon }
export { TwentyFourHoursLineIcon as TwentyFourHoursLineIcon_alias_1 }

/**
 * The react component for the `twitch-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Twitch Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/twitch-fill.svg)
 */
declare const TwitchFillIcon: IconType;
export { TwitchFillIcon }
export { TwitchFillIcon as TwitchFillIcon_alias_1 }

/**
 * The react component for the `twitch-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Twitch Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/twitch-line.svg)
 */
declare const TwitchLineIcon: IconType;
export { TwitchLineIcon }
export { TwitchLineIcon as TwitchLineIcon_alias_1 }

/**
 * The react component for the `twitter-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Twitter Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/twitter-fill.svg)
 */
declare const TwitterFillIcon: IconType;
export { TwitterFillIcon }
export { TwitterFillIcon as TwitterFillIcon_alias_1 }

/**
 * The react component for the `twitter-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Twitter Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/twitter-line.svg)
 */
declare const TwitterLineIcon: IconType;
export { TwitterLineIcon }
export { TwitterLineIcon as TwitterLineIcon_alias_1 }

/**
 * The react component for the `typhoon-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Typhoon Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/typhoon-fill.svg)
 */
declare const TyphoonFillIcon: IconType;
export { TyphoonFillIcon }
export { TyphoonFillIcon as TyphoonFillIcon_alias_1 }

/**
 * The react component for the `typhoon-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Typhoon Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/typhoon-line.svg)
 */
declare const TyphoonLineIcon: IconType;
export { TyphoonLineIcon }
export { TyphoonLineIcon as TyphoonLineIcon_alias_1 }

/**
 * The react component for the `ubuntu-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ubuntu Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/ubuntu-fill.svg)
 */
declare const UbuntuFillIcon: IconType;
export { UbuntuFillIcon }
export { UbuntuFillIcon as UbuntuFillIcon_alias_1 }

/**
 * The react component for the `ubuntu-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Ubuntu Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/ubuntu-line.svg)
 */
declare const UbuntuLineIcon: IconType;
export { UbuntuLineIcon }
export { UbuntuLineIcon as UbuntuLineIcon_alias_1 }

/**
 * The react component for the `u-disk-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![U Disk Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/u-disk-fill.svg)
 */
declare const UDiskFillIcon: IconType;
export { UDiskFillIcon }
export { UDiskFillIcon as UDiskFillIcon_alias_1 }

/**
 * The react component for the `u-disk-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![U Disk Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/u-disk-line.svg)
 */
declare const UDiskLineIcon: IconType;
export { UDiskLineIcon }
export { UDiskLineIcon as UDiskLineIcon_alias_1 }

/**
 * The react component for the `umbrella-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Umbrella Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/umbrella-fill.svg)
 */
declare const UmbrellaFillIcon: IconType;
export { UmbrellaFillIcon }
export { UmbrellaFillIcon as UmbrellaFillIcon_alias_1 }

/**
 * The react component for the `umbrella-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Umbrella Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/umbrella-line.svg)
 */
declare const UmbrellaLineIcon: IconType;
export { UmbrellaLineIcon }
export { UmbrellaLineIcon as UmbrellaLineIcon_alias_1 }

/**
 * The react component for the `underline.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Underline Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/underline.svg)
 */
declare const UnderlineIcon: IconType;
export { UnderlineIcon }
export { UnderlineIcon as UnderlineIcon_alias_1 }
export { UnderlineIcon as UnderlineIcon_alias_2 }

/**
 * The react component for the `uninstall-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Uninstall Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/uninstall-fill.svg)
 */
declare const UninstallFillIcon: IconType;
export { UninstallFillIcon }
export { UninstallFillIcon as UninstallFillIcon_alias_1 }

/**
 * The react component for the `uninstall-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Uninstall Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/uninstall-line.svg)
 */
declare const UninstallLineIcon: IconType;
export { UninstallLineIcon }
export { UninstallLineIcon as UninstallLineIcon_alias_1 }

/**
 * The react component for the `unsplash-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Unsplash Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/unsplash-fill.svg)
 */
declare const UnsplashFillIcon: IconType;
export { UnsplashFillIcon }
export { UnsplashFillIcon as UnsplashFillIcon_alias_1 }

/**
 * The react component for the `unsplash-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Unsplash Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/unsplash-line.svg)
 */
declare const UnsplashLineIcon: IconType;
export { UnsplashLineIcon }
export { UnsplashLineIcon as UnsplashLineIcon_alias_1 }

/**
 * The react component for the `upload-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Upload 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/upload-2-fill.svg)
 */
declare const Upload2FillIcon: IconType;
export { Upload2FillIcon }
export { Upload2FillIcon as Upload2FillIcon_alias_1 }
export { Upload2FillIcon as Upload2FillIcon_alias_2 }

/**
 * The react component for the `upload-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Upload 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/upload-2-line.svg)
 */
declare const Upload2LineIcon: IconType;
export { Upload2LineIcon }
export { Upload2LineIcon as Upload2LineIcon_alias_1 }

/**
 * The react component for the `upload-cloud-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Upload Cloud 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/upload-cloud-2-fill.svg)
 */
declare const UploadCloud2FillIcon: IconType;
export { UploadCloud2FillIcon }
export { UploadCloud2FillIcon as UploadCloud2FillIcon_alias_1 }

/**
 * The react component for the `upload-cloud-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Upload Cloud 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/upload-cloud-2-line.svg)
 */
declare const UploadCloud2LineIcon: IconType;
export { UploadCloud2LineIcon }
export { UploadCloud2LineIcon as UploadCloud2LineIcon_alias_1 }

/**
 * The react component for the `upload-cloud-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Upload Cloud Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/upload-cloud-fill.svg)
 */
declare const UploadCloudFillIcon: IconType;
export { UploadCloudFillIcon }
export { UploadCloudFillIcon as UploadCloudFillIcon_alias_1 }

/**
 * The react component for the `upload-cloud-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Upload Cloud Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/upload-cloud-line.svg)
 */
declare const UploadCloudLineIcon: IconType;
export { UploadCloudLineIcon }
export { UploadCloudLineIcon as UploadCloudLineIcon_alias_1 }

/**
 * The react component for the `upload-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Upload Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/upload-fill.svg)
 */
declare const UploadFillIcon: IconType;
export { UploadFillIcon }
export { UploadFillIcon as UploadFillIcon_alias_1 }

/**
 * The react component for the `upload-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Upload Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/upload-line.svg)
 */
declare const UploadLineIcon: IconType;
export { UploadLineIcon }
export { UploadLineIcon as UploadLineIcon_alias_1 }

/**
 * The react component for the `usb-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Usb Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/usb-fill.svg)
 */
declare const UsbFillIcon: IconType;
export { UsbFillIcon }
export { UsbFillIcon as UsbFillIcon_alias_1 }

/**
 * The react component for the `usb-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Usb Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/usb-line.svg)
 */
declare const UsbLineIcon: IconType;
export { UsbLineIcon }
export { UsbLineIcon as UsbLineIcon_alias_1 }

export declare const useIsomorphicLayoutEffect: typeof useEffect;

/**
 * The react component for the `user-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-2-fill.svg)
 */
declare const User2FillIcon: IconType;
export { User2FillIcon }
export { User2FillIcon as User2FillIcon_alias_1 }

/**
 * The react component for the `user-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-2-line.svg)
 */
declare const User2LineIcon: IconType;
export { User2LineIcon }
export { User2LineIcon as User2LineIcon_alias_1 }

/**
 * The react component for the `user-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-3-fill.svg)
 */
declare const User3FillIcon: IconType;
export { User3FillIcon }
export { User3FillIcon as User3FillIcon_alias_1 }

/**
 * The react component for the `user-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-3-line.svg)
 */
declare const User3LineIcon: IconType;
export { User3LineIcon }
export { User3LineIcon as User3LineIcon_alias_1 }

/**
 * The react component for the `user-4-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User 4 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-4-fill.svg)
 */
declare const User4FillIcon: IconType;
export { User4FillIcon }
export { User4FillIcon as User4FillIcon_alias_1 }

/**
 * The react component for the `user-4-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User 4 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-4-line.svg)
 */
declare const User4LineIcon: IconType;
export { User4LineIcon }
export { User4LineIcon as User4LineIcon_alias_1 }

/**
 * The react component for the `user-5-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User 5 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-5-fill.svg)
 */
declare const User5FillIcon: IconType;
export { User5FillIcon }
export { User5FillIcon as User5FillIcon_alias_1 }

/**
 * The react component for the `user-5-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User 5 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-5-line.svg)
 */
declare const User5LineIcon: IconType;
export { User5LineIcon }
export { User5LineIcon as User5LineIcon_alias_1 }

/**
 * The react component for the `user-6-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User 6 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-6-fill.svg)
 */
declare const User6FillIcon: IconType;
export { User6FillIcon }
export { User6FillIcon as User6FillIcon_alias_1 }

/**
 * The react component for the `user-6-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User 6 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-6-line.svg)
 */
declare const User6LineIcon: IconType;
export { User6LineIcon }
export { User6LineIcon as User6LineIcon_alias_1 }

/**
 * The react component for the `user-add-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Add Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-add-fill.svg)
 */
declare const UserAddFillIcon: IconType;
export { UserAddFillIcon }
export { UserAddFillIcon as UserAddFillIcon_alias_1 }

/**
 * The react component for the `user-add-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Add Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-add-line.svg)
 */
declare const UserAddLineIcon: IconType;
export { UserAddLineIcon }
export { UserAddLineIcon as UserAddLineIcon_alias_1 }

/**
 * The react component for the `user-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-fill.svg)
 */
declare const UserFillIcon: IconType;
export { UserFillIcon }
export { UserFillIcon as UserFillIcon_alias_1 }

/**
 * The react component for the `user-follow-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Follow Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-follow-fill.svg)
 */
declare const UserFollowFillIcon: IconType;
export { UserFollowFillIcon }
export { UserFollowFillIcon as UserFollowFillIcon_alias_1 }

/**
 * The react component for the `user-follow-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Follow Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-follow-line.svg)
 */
declare const UserFollowLineIcon: IconType;
export { UserFollowLineIcon }
export { UserFollowLineIcon as UserFollowLineIcon_alias_1 }

/**
 * The react component for the `user-heart-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Heart Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-heart-fill.svg)
 */
declare const UserHeartFillIcon: IconType;
export { UserHeartFillIcon }
export { UserHeartFillIcon as UserHeartFillIcon_alias_1 }

/**
 * The react component for the `user-heart-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Heart Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-heart-line.svg)
 */
declare const UserHeartLineIcon: IconType;
export { UserHeartLineIcon }
export { UserHeartLineIcon as UserHeartLineIcon_alias_1 }

/**
 * The react component for the `user-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-line.svg)
 */
declare const UserLineIcon: IconType;
export { UserLineIcon }
export { UserLineIcon as UserLineIcon_alias_1 }

/**
 * The react component for the `user-location-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Location Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-location-fill.svg)
 */
declare const UserLocationFillIcon: IconType;
export { UserLocationFillIcon }
export { UserLocationFillIcon as UserLocationFillIcon_alias_1 }

/**
 * The react component for the `user-location-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Location Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-location-line.svg)
 */
declare const UserLocationLineIcon: IconType;
export { UserLocationLineIcon }
export { UserLocationLineIcon as UserLocationLineIcon_alias_1 }

/**
 * The react component for the `user-received-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Received 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-received-2-fill.svg)
 */
declare const UserReceived2FillIcon: IconType;
export { UserReceived2FillIcon }
export { UserReceived2FillIcon as UserReceived2FillIcon_alias_1 }

/**
 * The react component for the `user-received-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Received 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-received-2-line.svg)
 */
declare const UserReceived2LineIcon: IconType;
export { UserReceived2LineIcon }
export { UserReceived2LineIcon as UserReceived2LineIcon_alias_1 }

/**
 * The react component for the `user-received-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Received Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-received-fill.svg)
 */
declare const UserReceivedFillIcon: IconType;
export { UserReceivedFillIcon }
export { UserReceivedFillIcon as UserReceivedFillIcon_alias_1 }

/**
 * The react component for the `user-received-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Received Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-received-line.svg)
 */
declare const UserReceivedLineIcon: IconType;
export { UserReceivedLineIcon }
export { UserReceivedLineIcon as UserReceivedLineIcon_alias_1 }

/**
 * The react component for the `user-search-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Search Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-search-fill.svg)
 */
declare const UserSearchFillIcon: IconType;
export { UserSearchFillIcon }
export { UserSearchFillIcon as UserSearchFillIcon_alias_1 }

/**
 * The react component for the `user-search-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Search Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-search-line.svg)
 */
declare const UserSearchLineIcon: IconType;
export { UserSearchLineIcon }
export { UserSearchLineIcon as UserSearchLineIcon_alias_1 }

/**
 * The react component for the `user-settings-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Settings Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-settings-fill.svg)
 */
declare const UserSettingsFillIcon: IconType;
export { UserSettingsFillIcon }
export { UserSettingsFillIcon as UserSettingsFillIcon_alias_1 }

/**
 * The react component for the `user-settings-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Settings Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-settings-line.svg)
 */
declare const UserSettingsLineIcon: IconType;
export { UserSettingsLineIcon }
export { UserSettingsLineIcon as UserSettingsLineIcon_alias_1 }

/**
 * The react component for the `user-shared-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Shared 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-shared-2-fill.svg)
 */
declare const UserShared2FillIcon: IconType;
export { UserShared2FillIcon }
export { UserShared2FillIcon as UserShared2FillIcon_alias_1 }

/**
 * The react component for the `user-shared-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Shared 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-shared-2-line.svg)
 */
declare const UserShared2LineIcon: IconType;
export { UserShared2LineIcon }
export { UserShared2LineIcon as UserShared2LineIcon_alias_1 }

/**
 * The react component for the `user-shared-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Shared Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-shared-fill.svg)
 */
declare const UserSharedFillIcon: IconType;
export { UserSharedFillIcon }
export { UserSharedFillIcon as UserSharedFillIcon_alias_1 }

/**
 * The react component for the `user-shared-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Shared Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-shared-line.svg)
 */
declare const UserSharedLineIcon: IconType;
export { UserSharedLineIcon }
export { UserSharedLineIcon as UserSharedLineIcon_alias_1 }

/**
 * The react component for the `user-smile-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Smile Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-smile-fill.svg)
 */
declare const UserSmileFillIcon: IconType;
export { UserSmileFillIcon }
export { UserSmileFillIcon as UserSmileFillIcon_alias_1 }

/**
 * The react component for the `user-smile-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Smile Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-smile-line.svg)
 */
declare const UserSmileLineIcon: IconType;
export { UserSmileLineIcon }
export { UserSmileLineIcon as UserSmileLineIcon_alias_1 }

/**
 * The react component for the `user-star-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Star Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-star-fill.svg)
 */
declare const UserStarFillIcon: IconType;
export { UserStarFillIcon }
export { UserStarFillIcon as UserStarFillIcon_alias_1 }

/**
 * The react component for the `user-star-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Star Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-star-line.svg)
 */
declare const UserStarLineIcon: IconType;
export { UserStarLineIcon }
export { UserStarLineIcon as UserStarLineIcon_alias_1 }

/**
 * The react component for the `user-unfollow-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Unfollow Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-unfollow-fill.svg)
 */
declare const UserUnfollowFillIcon: IconType;
export { UserUnfollowFillIcon }
export { UserUnfollowFillIcon as UserUnfollowFillIcon_alias_1 }

/**
 * The react component for the `user-unfollow-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Unfollow Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-unfollow-line.svg)
 */
declare const UserUnfollowLineIcon: IconType;
export { UserUnfollowLineIcon }
export { UserUnfollowLineIcon as UserUnfollowLineIcon_alias_1 }

/**
 * The react component for the `user-voice-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Voice Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-voice-fill.svg)
 */
declare const UserVoiceFillIcon: IconType;
export { UserVoiceFillIcon }
export { UserVoiceFillIcon as UserVoiceFillIcon_alias_1 }

/**
 * The react component for the `user-voice-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![User Voice Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/user-voice-line.svg)
 */
declare const UserVoiceLineIcon: IconType;
export { UserVoiceLineIcon }
export { UserVoiceLineIcon as UserVoiceLineIcon_alias_1 }

/**
 * Get the theme from the context and convert it to a style object which can be
 * attached to any element.
 *
 * The theme provided is deeply merged with the parent theme.
 */
declare function useTheme(props?: UseThemeProps): {
    theme: RemirrorThemeType;
    style: CSSProperties;
    className?: string;
};
export { useTheme }
export { useTheme as useTheme_alias_1 }
export { useTheme as useTheme_alias_2 }

declare interface UseThemeProps {
    /**
     * The theme to customise the look and feel of your remirror editor.
     */
    theme?: RemirrorThemeType;
    /**
     * Any extra class names to add to the wrapper component.
     */
    className?: string;
}
export { UseThemeProps }
export { UseThemeProps as UseThemeProps_alias_1 }
export { UseThemeProps as UseThemeProps_alias_2 }

/**
 * The react component for the `video-add-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Video Add Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/video-add-fill.svg)
 */
declare const VideoAddFillIcon: IconType;
export { VideoAddFillIcon }
export { VideoAddFillIcon as VideoAddFillIcon_alias_1 }

/**
 * The react component for the `video-add-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Video Add Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/video-add-line.svg)
 */
declare const VideoAddLineIcon: IconType;
export { VideoAddLineIcon }
export { VideoAddLineIcon as VideoAddLineIcon_alias_1 }

/**
 * The react component for the `video-chat-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Video Chat Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/video-chat-fill.svg)
 */
declare const VideoChatFillIcon: IconType;
export { VideoChatFillIcon }
export { VideoChatFillIcon as VideoChatFillIcon_alias_1 }

/**
 * The react component for the `video-chat-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Video Chat Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Communication/video-chat-line.svg)
 */
declare const VideoChatLineIcon: IconType;
export { VideoChatLineIcon }
export { VideoChatLineIcon as VideoChatLineIcon_alias_1 }

/**
 * The react component for the `video-download-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Video Download Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/video-download-fill.svg)
 */
declare const VideoDownloadFillIcon: IconType;
export { VideoDownloadFillIcon }
export { VideoDownloadFillIcon as VideoDownloadFillIcon_alias_1 }

/**
 * The react component for the `video-download-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Video Download Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/video-download-line.svg)
 */
declare const VideoDownloadLineIcon: IconType;
export { VideoDownloadLineIcon }
export { VideoDownloadLineIcon as VideoDownloadLineIcon_alias_1 }

/**
 * The react component for the `video-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Video Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/video-fill.svg)
 */
declare const VideoFillIcon: IconType;
export { VideoFillIcon }
export { VideoFillIcon as VideoFillIcon_alias_1 }

/**
 * The react component for the `video-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Video Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/video-line.svg)
 */
declare const VideoLineIcon: IconType;
export { VideoLineIcon }
export { VideoLineIcon as VideoLineIcon_alias_1 }
export { VideoLineIcon as VideoLineIcon_alias_2 }

/**
 * The react component for the `video-upload-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Video Upload Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/video-upload-fill.svg)
 */
declare const VideoUploadFillIcon: IconType;
export { VideoUploadFillIcon }
export { VideoUploadFillIcon as VideoUploadFillIcon_alias_1 }

/**
 * The react component for the `video-upload-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Video Upload Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/video-upload-line.svg)
 */
declare const VideoUploadLineIcon: IconType;
export { VideoUploadLineIcon }
export { VideoUploadLineIcon as VideoUploadLineIcon_alias_1 }

/**
 * The react component for the `vidicon-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vidicon 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/vidicon-2-fill.svg)
 */
declare const Vidicon2FillIcon: IconType;
export { Vidicon2FillIcon }
export { Vidicon2FillIcon as Vidicon2FillIcon_alias_1 }

/**
 * The react component for the `vidicon-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vidicon 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/vidicon-2-line.svg)
 */
declare const Vidicon2LineIcon: IconType;
export { Vidicon2LineIcon }
export { Vidicon2LineIcon as Vidicon2LineIcon_alias_1 }

/**
 * The react component for the `vidicon-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vidicon Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/vidicon-fill.svg)
 */
declare const VidiconFillIcon: IconType;
export { VidiconFillIcon }
export { VidiconFillIcon as VidiconFillIcon_alias_1 }

/**
 * The react component for the `vidicon-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vidicon Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/vidicon-line.svg)
 */
declare const VidiconLineIcon: IconType;
export { VidiconLineIcon }
export { VidiconLineIcon as VidiconLineIcon_alias_1 }

/**
 * The react component for the `vimeo-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vimeo Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/vimeo-fill.svg)
 */
declare const VimeoFillIcon: IconType;
export { VimeoFillIcon }
export { VimeoFillIcon as VimeoFillIcon_alias_1 }

/**
 * The react component for the `vimeo-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vimeo Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/vimeo-line.svg)
 */
declare const VimeoLineIcon: IconType;
export { VimeoLineIcon }
export { VimeoLineIcon as VimeoLineIcon_alias_1 }

/**
 * The react component for the `vip-crown-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vip Crown 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/vip-crown-2-fill.svg)
 */
declare const VipCrown2FillIcon: IconType;
export { VipCrown2FillIcon }
export { VipCrown2FillIcon as VipCrown2FillIcon_alias_1 }

/**
 * The react component for the `vip-crown-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vip Crown 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/vip-crown-2-line.svg)
 */
declare const VipCrown2LineIcon: IconType;
export { VipCrown2LineIcon }
export { VipCrown2LineIcon as VipCrown2LineIcon_alias_1 }

/**
 * The react component for the `vip-crown-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vip Crown Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/vip-crown-fill.svg)
 */
declare const VipCrownFillIcon: IconType;
export { VipCrownFillIcon }
export { VipCrownFillIcon as VipCrownFillIcon_alias_1 }

/**
 * The react component for the `vip-crown-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vip Crown Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/vip-crown-line.svg)
 */
declare const VipCrownLineIcon: IconType;
export { VipCrownLineIcon }
export { VipCrownLineIcon as VipCrownLineIcon_alias_1 }

/**
 * The react component for the `vip-diamond-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vip Diamond Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/vip-diamond-fill.svg)
 */
declare const VipDiamondFillIcon: IconType;
export { VipDiamondFillIcon }
export { VipDiamondFillIcon as VipDiamondFillIcon_alias_1 }

/**
 * The react component for the `vip-diamond-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vip Diamond Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/vip-diamond-line.svg)
 */
declare const VipDiamondLineIcon: IconType;
export { VipDiamondLineIcon }
export { VipDiamondLineIcon as VipDiamondLineIcon_alias_1 }

/**
 * The react component for the `vip-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vip Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/vip-fill.svg)
 */
declare const VipFillIcon: IconType;
export { VipFillIcon }
export { VipFillIcon as VipFillIcon_alias_1 }

/**
 * The react component for the `vip-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vip Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/vip-line.svg)
 */
declare const VipLineIcon: IconType;
export { VipLineIcon }
export { VipLineIcon as VipLineIcon_alias_1 }

/**
 * The react component for the `virus-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Virus Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/virus-fill.svg)
 */
declare const VirusFillIcon: IconType;
export { VirusFillIcon }
export { VirusFillIcon as VirusFillIcon_alias_1 }

/**
 * The react component for the `virus-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Virus Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/virus-line.svg)
 */
declare const VirusLineIcon: IconType;
export { VirusLineIcon }
export { VirusLineIcon as VirusLineIcon_alias_1 }

/**
 * The react component for the `visa-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Visa Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/visa-fill.svg)
 */
declare const VisaFillIcon: IconType;
export { VisaFillIcon }
export { VisaFillIcon as VisaFillIcon_alias_1 }

/**
 * The react component for the `visa-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Visa Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/visa-line.svg)
 */
declare const VisaLineIcon: IconType;
export { VisaLineIcon }
export { VisaLineIcon as VisaLineIcon_alias_1 }

/**
 * The react component for the `voiceprint-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Voiceprint Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/voiceprint-fill.svg)
 */
declare const VoiceprintFillIcon: IconType;
export { VoiceprintFillIcon }
export { VoiceprintFillIcon as VoiceprintFillIcon_alias_1 }

/**
 * The react component for the `voiceprint-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Voiceprint Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/voiceprint-line.svg)
 */
declare const VoiceprintLineIcon: IconType;
export { VoiceprintLineIcon }
export { VoiceprintLineIcon as VoiceprintLineIcon_alias_1 }

/**
 * The react component for the `voice-recognition-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Voice Recognition Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/voice-recognition-fill.svg)
 */
declare const VoiceRecognitionFillIcon: IconType;
export { VoiceRecognitionFillIcon }
export { VoiceRecognitionFillIcon as VoiceRecognitionFillIcon_alias_1 }

/**
 * The react component for the `voice-recognition-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Voice Recognition Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/voice-recognition-line.svg)
 */
declare const VoiceRecognitionLineIcon: IconType;
export { VoiceRecognitionLineIcon }
export { VoiceRecognitionLineIcon as VoiceRecognitionLineIcon_alias_1 }

/**
 * The react component for the `volume-down-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Volume Down Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/volume-down-fill.svg)
 */
declare const VolumeDownFillIcon: IconType;
export { VolumeDownFillIcon }
export { VolumeDownFillIcon as VolumeDownFillIcon_alias_1 }

/**
 * The react component for the `volume-down-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Volume Down Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/volume-down-line.svg)
 */
declare const VolumeDownLineIcon: IconType;
export { VolumeDownLineIcon }
export { VolumeDownLineIcon as VolumeDownLineIcon_alias_1 }

/**
 * The react component for the `volume-mute-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Volume Mute Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/volume-mute-fill.svg)
 */
declare const VolumeMuteFillIcon: IconType;
export { VolumeMuteFillIcon }
export { VolumeMuteFillIcon as VolumeMuteFillIcon_alias_1 }

/**
 * The react component for the `volume-mute-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Volume Mute Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/volume-mute-line.svg)
 */
declare const VolumeMuteLineIcon: IconType;
export { VolumeMuteLineIcon }
export { VolumeMuteLineIcon as VolumeMuteLineIcon_alias_1 }

/**
 * The react component for the `volume-off-vibrate-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Volume Off Vibrate Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/volume-off-vibrate-fill.svg)
 */
declare const VolumeOffVibrateFillIcon: IconType;
export { VolumeOffVibrateFillIcon }
export { VolumeOffVibrateFillIcon as VolumeOffVibrateFillIcon_alias_1 }

/**
 * The react component for the `volume-off-vibrate-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Volume Off Vibrate Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/volume-off-vibrate-line.svg)
 */
declare const VolumeOffVibrateLineIcon: IconType;
export { VolumeOffVibrateLineIcon }
export { VolumeOffVibrateLineIcon as VolumeOffVibrateLineIcon_alias_1 }

/**
 * The react component for the `volume-up-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Volume Up Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/volume-up-fill.svg)
 */
declare const VolumeUpFillIcon: IconType;
export { VolumeUpFillIcon }
export { VolumeUpFillIcon as VolumeUpFillIcon_alias_1 }

/**
 * The react component for the `volume-up-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Volume Up Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/volume-up-line.svg)
 */
declare const VolumeUpLineIcon: IconType;
export { VolumeUpLineIcon }
export { VolumeUpLineIcon as VolumeUpLineIcon_alias_1 }

/**
 * The react component for the `volume-vibrate-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Volume Vibrate Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/volume-vibrate-fill.svg)
 */
declare const VolumeVibrateFillIcon: IconType;
export { VolumeVibrateFillIcon }
export { VolumeVibrateFillIcon as VolumeVibrateFillIcon_alias_1 }

/**
 * The react component for the `volume-vibrate-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Volume Vibrate Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/volume-vibrate-line.svg)
 */
declare const VolumeVibrateLineIcon: IconType;
export { VolumeVibrateLineIcon }
export { VolumeVibrateLineIcon as VolumeVibrateLineIcon_alias_1 }

/**
 * The react component for the `vuejs-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vuejs Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/vuejs-fill.svg)
 */
declare const VuejsFillIcon: IconType;
export { VuejsFillIcon }
export { VuejsFillIcon as VuejsFillIcon_alias_1 }

/**
 * The react component for the `vuejs-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Vuejs Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/vuejs-line.svg)
 */
declare const VuejsLineIcon: IconType;
export { VuejsLineIcon }
export { VuejsLineIcon as VuejsLineIcon_alias_1 }

/**
 * The react component for the `walk-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Walk Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/walk-fill.svg)
 */
declare const WalkFillIcon: IconType;
export { WalkFillIcon }
export { WalkFillIcon as WalkFillIcon_alias_1 }

/**
 * The react component for the `walk-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Walk Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Map/walk-line.svg)
 */
declare const WalkLineIcon: IconType;
export { WalkLineIcon }
export { WalkLineIcon as WalkLineIcon_alias_1 }

/**
 * The react component for the `wallet-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wallet 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/wallet-2-fill.svg)
 */
declare const Wallet2FillIcon: IconType;
export { Wallet2FillIcon }
export { Wallet2FillIcon as Wallet2FillIcon_alias_1 }

/**
 * The react component for the `wallet-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wallet 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/wallet-2-line.svg)
 */
declare const Wallet2LineIcon: IconType;
export { Wallet2LineIcon }
export { Wallet2LineIcon as Wallet2LineIcon_alias_1 }

/**
 * The react component for the `wallet-3-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wallet 3 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/wallet-3-fill.svg)
 */
declare const Wallet3FillIcon: IconType;
export { Wallet3FillIcon }
export { Wallet3FillIcon as Wallet3FillIcon_alias_1 }

/**
 * The react component for the `wallet-3-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wallet 3 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/wallet-3-line.svg)
 */
declare const Wallet3LineIcon: IconType;
export { Wallet3LineIcon }
export { Wallet3LineIcon as Wallet3LineIcon_alias_1 }

/**
 * The react component for the `wallet-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wallet Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/wallet-fill.svg)
 */
declare const WalletFillIcon: IconType;
export { WalletFillIcon }
export { WalletFillIcon as WalletFillIcon_alias_1 }

/**
 * The react component for the `wallet-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wallet Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/wallet-line.svg)
 */
declare const WalletLineIcon: IconType;
export { WalletLineIcon }
export { WalletLineIcon as WalletLineIcon_alias_1 }

/**
 * The react component for the `water-flash-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Water Flash Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/water-flash-fill.svg)
 */
declare const WaterFlashFillIcon: IconType;
export { WaterFlashFillIcon }
export { WaterFlashFillIcon as WaterFlashFillIcon_alias_1 }

/**
 * The react component for the `water-flash-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Water Flash Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Finance/water-flash-line.svg)
 */
declare const WaterFlashLineIcon: IconType;
export { WaterFlashLineIcon }
export { WaterFlashLineIcon as WaterFlashLineIcon_alias_1 }

/**
 * The react component for the `webcam-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Webcam Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/webcam-fill.svg)
 */
declare const WebcamFillIcon: IconType;
export { WebcamFillIcon }
export { WebcamFillIcon as WebcamFillIcon_alias_1 }

/**
 * The react component for the `webcam-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Webcam Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Media/webcam-line.svg)
 */
declare const WebcamLineIcon: IconType;
export { WebcamLineIcon }
export { WebcamLineIcon as WebcamLineIcon_alias_1 }

/**
 * The react component for the `wechat-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wechat 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/wechat-2-fill.svg)
 */
declare const Wechat2FillIcon: IconType;
export { Wechat2FillIcon }
export { Wechat2FillIcon as Wechat2FillIcon_alias_1 }

/**
 * The react component for the `wechat-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wechat 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/wechat-2-line.svg)
 */
declare const Wechat2LineIcon: IconType;
export { Wechat2LineIcon }
export { Wechat2LineIcon as Wechat2LineIcon_alias_1 }

/**
 * The react component for the `wechat-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wechat Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/wechat-fill.svg)
 */
declare const WechatFillIcon: IconType;
export { WechatFillIcon }
export { WechatFillIcon as WechatFillIcon_alias_1 }

/**
 * The react component for the `wechat-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wechat Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/wechat-line.svg)
 */
declare const WechatLineIcon: IconType;
export { WechatLineIcon }
export { WechatLineIcon as WechatLineIcon_alias_1 }

/**
 * The react component for the `wechat-pay-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wechat Pay Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/wechat-pay-fill.svg)
 */
declare const WechatPayFillIcon: IconType;
export { WechatPayFillIcon }
export { WechatPayFillIcon as WechatPayFillIcon_alias_1 }

/**
 * The react component for the `wechat-pay-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wechat Pay Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/wechat-pay-line.svg)
 */
declare const WechatPayLineIcon: IconType;
export { WechatPayLineIcon }
export { WechatPayLineIcon as WechatPayLineIcon_alias_1 }

/**
 * The react component for the `weibo-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Weibo Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/weibo-fill.svg)
 */
declare const WeiboFillIcon: IconType;
export { WeiboFillIcon }
export { WeiboFillIcon as WeiboFillIcon_alias_1 }

/**
 * The react component for the `weibo-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Weibo Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/weibo-line.svg)
 */
declare const WeiboLineIcon: IconType;
export { WeiboLineIcon }
export { WeiboLineIcon as WeiboLineIcon_alias_1 }

/**
 * The react component for the `whatsapp-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Whatsapp Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/whatsapp-fill.svg)
 */
declare const WhatsappFillIcon: IconType;
export { WhatsappFillIcon }
export { WhatsappFillIcon as WhatsappFillIcon_alias_1 }

/**
 * The react component for the `whatsapp-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Whatsapp Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/whatsapp-line.svg)
 */
declare const WhatsappLineIcon: IconType;
export { WhatsappLineIcon }
export { WhatsappLineIcon as WhatsappLineIcon_alias_1 }

/**
 * The react component for the `wheelchair-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wheelchair Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/wheelchair-fill.svg)
 */
declare const WheelchairFillIcon: IconType;
export { WheelchairFillIcon }
export { WheelchairFillIcon as WheelchairFillIcon_alias_1 }

/**
 * The react component for the `wheelchair-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wheelchair Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Others/wheelchair-line.svg)
 */
declare const WheelchairLineIcon: IconType;
export { WheelchairLineIcon }
export { WheelchairLineIcon as WheelchairLineIcon_alias_1 }

/**
 * The react component for the `wifi-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wifi Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/wifi-fill.svg)
 */
declare const WifiFillIcon: IconType;
export { WifiFillIcon }
export { WifiFillIcon as WifiFillIcon_alias_1 }

/**
 * The react component for the `wifi-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wifi Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/wifi-line.svg)
 */
declare const WifiLineIcon: IconType;
export { WifiLineIcon }
export { WifiLineIcon as WifiLineIcon_alias_1 }

/**
 * The react component for the `wifi-off-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wifi Off Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/wifi-off-fill.svg)
 */
declare const WifiOffFillIcon: IconType;
export { WifiOffFillIcon }
export { WifiOffFillIcon as WifiOffFillIcon_alias_1 }

/**
 * The react component for the `wifi-off-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wifi Off Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/wifi-off-line.svg)
 */
declare const WifiOffLineIcon: IconType;
export { WifiOffLineIcon }
export { WifiOffLineIcon as WifiOffLineIcon_alias_1 }

/**
 * The react component for the `window-2-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Window 2 Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/window-2-fill.svg)
 */
declare const Window2FillIcon: IconType;
export { Window2FillIcon }
export { Window2FillIcon as Window2FillIcon_alias_1 }

/**
 * The react component for the `window-2-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Window 2 Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/window-2-line.svg)
 */
declare const Window2LineIcon: IconType;
export { Window2LineIcon }
export { Window2LineIcon as Window2LineIcon_alias_1 }

/**
 * The react component for the `window-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Window Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/window-fill.svg)
 */
declare const WindowFillIcon: IconType;
export { WindowFillIcon }
export { WindowFillIcon as WindowFillIcon_alias_1 }

/**
 * The react component for the `window-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Window Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Business/window-line.svg)
 */
declare const WindowLineIcon: IconType;
export { WindowLineIcon }
export { WindowLineIcon as WindowLineIcon_alias_1 }

/**
 * The react component for the `windows-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Windows Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/windows-fill.svg)
 */
declare const WindowsFillIcon: IconType;
export { WindowsFillIcon }
export { WindowsFillIcon as WindowsFillIcon_alias_1 }

/**
 * The react component for the `windows-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Windows Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/windows-line.svg)
 */
declare const WindowsLineIcon: IconType;
export { WindowsLineIcon }
export { WindowsLineIcon as WindowsLineIcon_alias_1 }

/**
 * The react component for the `windy-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Windy Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/windy-fill.svg)
 */
declare const WindyFillIcon: IconType;
export { WindyFillIcon }
export { WindyFillIcon as WindyFillIcon_alias_1 }

/**
 * The react component for the `windy-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Windy Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Weather/windy-line.svg)
 */
declare const WindyLineIcon: IconType;
export { WindyLineIcon }
export { WindyLineIcon as WindyLineIcon_alias_1 }

/**
 * The react component for the `wireless-charging-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wireless Charging Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/wireless-charging-fill.svg)
 */
declare const WirelessChargingFillIcon: IconType;
export { WirelessChargingFillIcon }
export { WirelessChargingFillIcon as WirelessChargingFillIcon_alias_1 }

/**
 * The react component for the `wireless-charging-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wireless Charging Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Device/wireless-charging-line.svg)
 */
declare const WirelessChargingLineIcon: IconType;
export { WirelessChargingLineIcon }
export { WirelessChargingLineIcon as WirelessChargingLineIcon_alias_1 }

/**
 * The react component for the `women-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Women Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/women-fill.svg)
 */
declare const WomenFillIcon: IconType;
export { WomenFillIcon }
export { WomenFillIcon as WomenFillIcon_alias_1 }

/**
 * The react component for the `women-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Women Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/User/women-line.svg)
 */
declare const WomenLineIcon: IconType;
export { WomenLineIcon }
export { WomenLineIcon as WomenLineIcon_alias_1 }

/**
 * The react component for the `wubi-input.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Wubi Input Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Editor/wubi-input.svg)
 */
declare const WubiInputIcon: IconType;
export { WubiInputIcon }
export { WubiInputIcon as WubiInputIcon_alias_1 }
export { WubiInputIcon as WubiInputIcon_alias_2 }

/**
 * The react component for the `xbox-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Xbox Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/xbox-fill.svg)
 */
declare const XboxFillIcon: IconType;
export { XboxFillIcon }
export { XboxFillIcon as XboxFillIcon_alias_1 }

/**
 * The react component for the `xbox-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Xbox Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/xbox-line.svg)
 */
declare const XboxLineIcon: IconType;
export { XboxLineIcon }
export { XboxLineIcon as XboxLineIcon_alias_1 }

/**
 * The react component for the `xing-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Xing Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/xing-fill.svg)
 */
declare const XingFillIcon: IconType;
export { XingFillIcon }
export { XingFillIcon as XingFillIcon_alias_1 }

/**
 * The react component for the `xing-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Xing Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/xing-line.svg)
 */
declare const XingLineIcon: IconType;
export { XingLineIcon }
export { XingLineIcon as XingLineIcon_alias_1 }

/**
 * The react component for the `youtube-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Youtube Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/youtube-fill.svg)
 */
declare const YoutubeFillIcon: IconType;
export { YoutubeFillIcon }
export { YoutubeFillIcon as YoutubeFillIcon_alias_1 }

/**
 * The react component for the `youtube-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Youtube Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/youtube-line.svg)
 */
declare const YoutubeLineIcon: IconType;
export { YoutubeLineIcon }
export { YoutubeLineIcon as YoutubeLineIcon_alias_1 }

/**
 * The react component for the `zcool-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Zcool Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/zcool-fill.svg)
 */
declare const ZcoolFillIcon: IconType;
export { ZcoolFillIcon }
export { ZcoolFillIcon as ZcoolFillIcon_alias_1 }

/**
 * The react component for the `zcool-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Zcool Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/zcool-line.svg)
 */
declare const ZcoolLineIcon: IconType;
export { ZcoolLineIcon }
export { ZcoolLineIcon as ZcoolLineIcon_alias_1 }

/**
 * The react component for the `zhihu-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Zhihu Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/zhihu-fill.svg)
 */
declare const ZhihuFillIcon: IconType;
export { ZhihuFillIcon }
export { ZhihuFillIcon as ZhihuFillIcon_alias_1 }

/**
 * The react component for the `zhihu-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Zhihu Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Logos/zhihu-line.svg)
 */
declare const ZhihuLineIcon: IconType;
export { ZhihuLineIcon }
export { ZhihuLineIcon as ZhihuLineIcon_alias_1 }

/**
 * The react component for the `zoom-in-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Zoom In Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/zoom-in-fill.svg)
 */
declare const ZoomInFillIcon: IconType;
export { ZoomInFillIcon }
export { ZoomInFillIcon as ZoomInFillIcon_alias_1 }

/**
 * The react component for the `zoom-in-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Zoom In Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/zoom-in-line.svg)
 */
declare const ZoomInLineIcon: IconType;
export { ZoomInLineIcon }
export { ZoomInLineIcon as ZoomInLineIcon_alias_1 }

/**
 * The react component for the `zoom-out-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Zoom Out Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/zoom-out-fill.svg)
 */
declare const ZoomOutFillIcon: IconType;
export { ZoomOutFillIcon }
export { ZoomOutFillIcon as ZoomOutFillIcon_alias_1 }

/**
 * The react component for the `zoom-out-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Zoom Out Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/System/zoom-out-line.svg)
 */
declare const ZoomOutLineIcon: IconType;
export { ZoomOutLineIcon }
export { ZoomOutLineIcon as ZoomOutLineIcon_alias_1 }

/**
 * The react component for the `zzz-fill.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Zzz Fill Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/zzz-fill.svg)
 */
declare const ZzzFillIcon: IconType;
export { ZzzFillIcon }
export { ZzzFillIcon as ZzzFillIcon_alias_1 }

/**
 * The react component for the `zzz-line.svg` icon created by [RemixIcons](https://remixicons.com).
 * ![Zzz Line Icon](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/Health/zzz-line.svg)
 */
declare const ZzzLineIcon: IconType;
export { ZzzLineIcon }
export { ZzzLineIcon as ZzzLineIcon_alias_1 }

export { }
