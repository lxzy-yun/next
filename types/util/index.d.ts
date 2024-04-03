import * as _dom from './dom';
import * as _env from './env';
import * as _events from './events';
import * as _func from './func';
import * as _log from './log';
import * as _object from './object';
import * as _string from './string';
import * as _support from './support';
import * as _focus from './focus';
import * as _htmlId from './htmlId';
import _guid from './guid';
export declare const dom: typeof _dom;
export declare const env: typeof _env;
export declare const events: typeof _events;
export declare const func: typeof _func;
export declare const log: typeof _log;
export declare const obj: typeof _object;
export declare const str: typeof _string;
export declare const support: typeof _support;
export declare const focus: typeof _focus;
export declare const guid: typeof _guid;
export declare const KEYCODE: {
    BACKSPACE: number;
    TAB: number;
    ENTER: number;
    SHIFT: number;
    CTRL: number;
    ALT: number;
    ESC: number;
    SPACE: number;
    END: number;
    HOME: number;
    LEFT: number;
    UP: number;
    RIGHT: number;
    DOWN: number;
    PAGE_UP: number;
    PAGE_DOWN: number;
    ESCAPE: number;
    LEFT_ARROW: number;
    UP_ARROW: number;
    RIGHT_ARROW: number;
    DOWN_ARROW: number;
    CONTROL: number;
    OPTION: number;
    CMD: number;
    COMMAND: number;
    DELETE: number;
};
export declare const htmlId: typeof _htmlId;
export declare const datejs: import('./date').dayjsWithIsSelf;
export declare const pickAttrs: <V = unknown>(props: Record<string, V>) => Record<string, V>;
export * from './types';
