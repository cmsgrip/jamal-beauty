
'use client';

import { useState } from 'react';
import { IProduct } from '@/models/Product';
import { useTranslation } from 'react-i18next';

interface ProductFormProps {
  product?: IProduct;
  onSubmit: (product: Partial<IProduct>) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit }) => {
  const [nameEn, setNameEn] = useState(product?.name.en || '');
  const [nameAr, setNameAr] = useState(product?.name.ar || '');
  const [descriptionEn, setDescriptionEn] = useState(product?.description.en || '');
  const [descriptionAr, setDescriptionAr] = useState(product?.description.ar || '');
  const [price, setPrice] = useState(product?.price || 0);
  const [category, setCategory] = useState(product?.category || '');
  const [images, setImages] = useState(product?.images.join(', ') || '');

  const { t } = useTranslation('common');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name: { en: nameEn, ar: nameAr },
      description: { en: descriptionEn, ar: descriptionAr },
      price,
      category,
      images: images.split(',').map((s) => s.trim()),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nameEn" className="block text-sm font-medium text-gray-700">
          {t('name_english')}
        </label>
        <input
          type="text"
          id="nameEn"
          value={nameEn}
          onChange={(e) => setNameEn(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="nameAr" className="block text-sm font-medium text-gray-700">
          {t('name_arabic')}
        </label>
        <input
          type="text"
          id="nameAr"
          value={nameAr}
          onChange={(e) => setNameAr(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="descriptionEn" className="block text-sm font-medium text-gray-700">
          {t('description_english')}
        </label>
        <textarea
          id="descriptionEn"
          value={descriptionEn}
          onChange={(e) => setDescriptionEn(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="descriptionAr" className="block text-sm font-medium text-gray-700">
          {t('description_arabic')}
        </label>
        <textarea
          id="descriptionAr"
          value={descriptionAr}
          onChange={(e) => setDescriptionAr(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          {t('price')}
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          {t('category')}
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="images" className="block text-sm font-medium text-gray-700">
          {t('images_url')}
        </label>
        <input
          type="text"
          id="images"
          value={images}
          onChange={(e) => setImages(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {t('save_product')}
      </button>
    </form>
  );
};

export default ProductForm;
