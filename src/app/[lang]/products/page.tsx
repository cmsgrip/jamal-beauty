'use client';

import { useState, useEffect } from 'react';
import { IProduct } from '@/models/Product';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage({ params: { lang } }: { params: { lang: string } }) {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`/${lang}/api/products`);
      const data = await res.json();
      setProducts(data.data);
    };

    fetchProducts();
  }, [lang]);

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-serif mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product._id} href={`/${lang}/products/${product._id}`}>
            <div className="border rounded-lg overflow-hidden cursor-pointer">
              <Image
                src={product.images[0] || 'https://source.unsplash.com/random/800x600/?jewelry'}
                alt={product.name.en}
                width={800}
                height={600}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.name[lang === 'ar' ? 'ar' : 'en']}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}