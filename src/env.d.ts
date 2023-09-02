/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_COOKIES_EXPIRE_DAYS: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
