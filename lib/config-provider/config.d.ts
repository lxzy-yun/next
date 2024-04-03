import React, { ComponentType, ForwardRefExoticComponent, ComponentRef, StaticLifecycle, JSXElementConstructor, ComponentPropsWithoutRef } from 'react';
import { Locale } from '../locale/types';
import type { ConfigOptions, ComponentCommonProps, ConfiguredComponentClass, PartialLocale, NonReactStatics, NonBlank } from './types';
export declare function initLocales(locales?: Record<string, Locale>): void;
export declare function setLanguage(language: string): void;
export declare function setLocale(locale: PartialLocale): void;
export declare function setDirection(dir: 'ltr' | 'rtl'): void;
export declare function getLocale(): PartialLocale;
export declare function getLanguage(): string;
export declare function getDirection(): boolean | undefined;
export type ExcludeComponentStatics = 'prototype' | 'contextType' | keyof StaticLifecycle<unknown, unknown>;
export type AnyProps = any;
declare function config<C extends ComponentType<AnyProps> | ForwardRefExoticComponent<AnyProps> | JSXElementConstructor<AnyProps>, K extends Exclude<keyof ComponentRef<C>, symbol> = never>(Component: C, options?: ConfigOptions<ComponentPropsWithoutRef<C>, K>): ConfiguredComponentClass<React.ComponentPropsWithoutRef<C> & ComponentCommonProps, React.ComponentRef<C> extends never ? undefined : React.ComponentRef<C>, NonBlank<Pick<React.ComponentRef<C>, K>>> & NonReactStatics<C>;
export { config };
