/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as AppLayoutImport } from './routes/AppLayout'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const AppLayoutRoute = AppLayoutImport.update({
  id: '/AppLayout',
  path: '/AppLayout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/AppLayout': {
      id: '/AppLayout'
      path: '/AppLayout'
      fullPath: '/AppLayout'
      preLoaderRoute: typeof AppLayoutImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/AppLayout': typeof AppLayoutRoute
  '/settings': typeof SettingsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/AppLayout': typeof AppLayoutRoute
  '/settings': typeof SettingsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/AppLayout': typeof AppLayoutRoute
  '/settings': typeof SettingsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/AppLayout' | '/settings'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/AppLayout' | '/settings'
  id: '__root__' | '/' | '/AppLayout' | '/settings'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppLayoutRoute: typeof AppLayoutRoute
  SettingsRoute: typeof SettingsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppLayoutRoute: AppLayoutRoute,
  SettingsRoute: SettingsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/AppLayout",
        "/settings"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/AppLayout": {
      "filePath": "AppLayout.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
