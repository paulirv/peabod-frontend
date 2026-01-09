/// <reference types="@cloudflare/workers-types" />

declare module "@opennextjs/cloudflare" {
  export function getCloudflareContext(): {
    env: {
      DB: D1Database;
      MEDIA: R2Bucket;
      ENVIRONMENT: string;
    };
    cf: IncomingRequestCfProperties;
    ctx: ExecutionContext;
  };
}

export {};
