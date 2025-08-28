
'use client';

import { useState, useEffect, useCallback } from 'react';
import { IProduct } from '@/models/Product';
import ProductForm from '@/components/ProductForm';
import { useTranslation } from 'react-i18next';

// Define a clear type for the page props
type AdminPageProps = {
  params: { lang: string };
};

export default function AdminPage({ params: { lang } }: AdminPageProps) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const { t } = useTranslation('common');

  // Wrap fetchProducts in useCallback to stabilize the function
  const fetchProducts = useCallback(async () => {
    const res = await fetch(`/${lang}/api/products`);
    const data = await res.json();
    setProducts(data.data);
  }, [lang]);

  // Add fetchProducts to the dependency array to fix the warning
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleFormSubmit = async (product: Partial<IProduct>) => {
    const method = selectedProduct ? 'PUT' : 'POST';
    const url = selectedProduct ? `/${lang}/api/products/${selectedProduct._id}` : `/${lang}/api/products`;

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (res.ok) {
      fetchProducts();
      setSelectedProduct(null);
    }
  };

  const handleEdit = (product: IProduct) => {
    setSelectedProduct(product);
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`/${lang}/api/products/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      fetchProducts();
    }
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-serif mb-8">{t('admin_panel')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-serif mb-4">
            {selectedProduct ? t('edit_product') : t('add_product')}
          </h2>
          <ProductForm
            product={selectedProduct}
            onSubmit={handleFormSubmit}
          />
        </div>
        <div>
          <h2 className="text-2xl font-serif mb-4">{t('products')}</h2>
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product._id} className="border p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{product.name[lang === 'ar' ? 'ar' : 'en']}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {t('edit')}
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {t('delete')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
