
'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';

const Header = ({ lang }: { lang: string }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeLanguage = (newLang: string) => {
    const newPath = `/${newLang}${pathname.substring(3)}`;
    router.push(newPath);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${lang}/`} className="text-2xl font-bold">
          JamalBeauty
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href={`/${lang}/`} className="hover:text-gray-300">
                {t('home')}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/products`} className="hover:text-gray-300">
                {t('products')}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/admin`} className="hover:text-gray-300">
                {t('admin')}
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <button
            onClick={() => handleChangeLanguage('en')}
            className={`bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ${lang === 'en' ? 'bg-gray-600' : ''}`}
          >
            EN
          </button>
          <button
            onClick={() => handleChangeLanguage('ar')}
            className={`bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-2 ${lang === 'ar' ? 'bg-gray-600' : ''}`}
          >
            AR
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
