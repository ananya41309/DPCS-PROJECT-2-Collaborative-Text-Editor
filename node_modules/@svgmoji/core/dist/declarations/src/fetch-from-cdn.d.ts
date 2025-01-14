export interface FetchFromCDNOptions extends RequestInit {
    /**
     * The version of the emojibase library to fetch.
     *
     * @default 'latest'
     */
    version?: string;
}
export declare function fetchFromCDN<T>(path: string, options?: FetchFromCDNOptions): Promise<T>;
