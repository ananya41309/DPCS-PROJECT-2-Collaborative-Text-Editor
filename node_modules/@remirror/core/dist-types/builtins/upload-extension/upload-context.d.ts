export interface UploadContext {
    set: (key: string, value: unknown) => void;
    get: (key: string) => unknown;
    addListener: (listener: UploadContextListener) => () => void;
}
type UploadContextListener = (values: Record<string, unknown>) => void;
export declare function createUploadContext(): UploadContext;
export {};
