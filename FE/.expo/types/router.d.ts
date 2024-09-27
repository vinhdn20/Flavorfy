/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/..\components\useColorScheme.web` | `/404/not-found` | `/Auth` | `/Auth/login` | `/Auth/register` | `/_sitemap` | `/main` | `/main/home`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
