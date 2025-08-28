
'use client';

import { useState, useEffect } from 'react';
import { IProduct } from '@/models/Product';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const namespaces = ['common'];

export default function ProductPage({ params }: { params: { id: string, lang: string } }) {
  const [product, setProduct] = useState<IProduct | null>(null);
  const { t } = useTranslation(namespaces);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/${params.lang}/api/products/${params.id}`);
      const data = await res.json();
      setProduct(data.data);
    };

    fetchProduct();
  }, [params.id, params.lang]);

  if (!product) {
    return <div>{t('loading')}</div>;
  }

  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.images[0] || 'https://source.unsplash.com/random/800x600/?jewelry'}
            alt={product.name.en}
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-serif mb-4">{product.name[params.lang === 'ar' ? 'ar' : 'en']}</h1>
          <p className="text-2xl text-gray-600 mb-4">${product.price}</p>
          <p className="text-lg mb-8">{product.description[params.lang === 'ar' ? 'ar' : 'en']}</p>
          <button className="bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300">
            {t('add_to_cart')}
          </button>
        </div>
      </div>
    </div>
  );
}
