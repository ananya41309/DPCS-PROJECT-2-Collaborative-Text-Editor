import type { Locale, ShortcodePreset, ShortcodesDataset } from 'emojibase';
import { FetchFromCDNOptions } from './fetch-from-cdn';
export declare function fetchShortcodes(locale: Locale, preset: ShortcodePreset, options?: FetchFromCDNOptions): Promise<ShortcodesDataset>;
