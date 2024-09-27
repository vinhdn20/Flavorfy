/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/404/not-found` | `/_sitemap` | `/auth` | `/auth/login` | `/auth/register` | `/main` | `/main/home` | `/main/profile`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
