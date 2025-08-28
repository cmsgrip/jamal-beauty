
import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { i18n } from '../../../i18n-config';

const initTranslations = async (
  locale: string,
  namespaces: string[],
  i18nInstance?: any,
  resources?: any
) => {
  i18nInstance = i18nInstance || createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../../../public/locales/${language}/${namespace}.json`)
      )
    )
    .init({
      lng: locale,
      resources,
      fallbackLng: i18n.defaultLocale,
      ns: namespaces,
      preload: resources ? [] : i18n.locales,
    });

  return { i18n: i18nInstance, resources: i18nInstance.services.resourceStore.data };
};

export default initTranslations;
