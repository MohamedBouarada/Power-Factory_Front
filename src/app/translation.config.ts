import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LOCATION_INITIALIZED } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export function ApplicationInitializerFactory(
  translate: TranslateService,
  injector: Injector
) {
  return async () => {
    await injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    let defaultLang = localStorage.getItem('lang');
    if (!defaultLang) {
      const defaultLanguageValue = 'en';
      let localLanguage: string = defaultLanguageValue;
      const wn = window.navigator as any;
      if (
        !(
          typeof window === 'undefined' ||
          typeof window.navigator === 'undefined'
        )
      ) {
        localLanguage = wn.languages ? wn.languages[0] : defaultLanguageValue;
      }
      localLanguage = (
        localLanguage ||
        wn.language ||
        wn.browserLanguage ||
        wn.userLanguage
      ).split('-')[0];

      defaultLang = ['en', 'fr'].includes(localLanguage)
        ? defaultLanguageValue
        : localLanguage;
      localStorage.setItem('lang', defaultLang);
    }

    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang(defaultLang);
    try {
      await translate.use(defaultLang).toPromise();
    } catch (err) {
      console.log(err);
    }
    console.log(`Successfully initialized ${defaultLang} language.`);
  };
}
