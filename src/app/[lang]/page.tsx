import Image from 'next/image';
import Link from 'next/link';
import initTranslations from '@/lib/get-i18n';
import { Trans } from 'react-i18next/TransWithoutContext';

const namespaces = ['common'];

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const { t } = await initTranslations(lang, namespaces);

  return (
    <div className="font-sans">
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?jewelry,luxury')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-serif mb-4">JamalBeauty</h1>
          <p className="text-xl mb-8">{t('exquisite_jewelry')}</p>
          <Link href={`/${lang}/products`} className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
              {t('shop_now')}
          </Link>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">{t('featured_products')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden">
              <Image src="https://source.unsplash.com/random/800x600/?necklace" alt="Necklace" width={800} height={600} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{t('elegant_necklace')}</h3>
                <p className="text-gray-600">$1,200</p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <Image src="https://source.unsplash.com/random/800x600/?ring" alt="Ring" width={800} height={600} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{t('diamond_ring')}</h3>
                <p className="text-gray-600">$2,500</p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <Image src="https://source.unsplash.com/random/800x600/?earrings" alt="Earrings" width={800} height={600} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{t('pearl_earrings')}</h3>
                <p className="text-gray-600">$800</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
