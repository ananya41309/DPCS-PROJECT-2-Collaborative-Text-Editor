/**
 * A object with flags identifying the current environment.
 */
export declare const environment: {
    /**
     * Verifies that the environment has both a window and window.document
     */
    readonly isBrowser: boolean;
    /**
     * Verifies that the environment is JSDOM
     */
    readonly isJSDOM: boolean;
    /**
     * Verifies that the environment has a nodejs process and is therefore a node environment
     */
    readonly isNode: boolean;
    /**
     * True when on an iOS device.
     */
    readonly isIos: boolean;
    /**
     * True when running on macOS
     */
    readonly isMac: boolean;
    /**
     * Verify that this is an apple device either on the client or server.
     */
    readonly isApple: boolean;
    /**
     * True when running in DEVELOPMENT environment
     */
    readonly isDevelopment: boolean;
    /**
     * True when running unit tests
     */
    readonly isTest: boolean;
    /**
     * True when running in PRODUCTION environment
     */
    readonly isProduction: boolean;
};
