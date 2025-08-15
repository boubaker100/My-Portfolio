import createImageUrlBuilder from '@sanity/image-url';
import { Image } from 'sanity';
import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

// 🔒 دالة ذكية وآمنة لأي نوع: رابط مباشر أو كائن Sanity
export const urlForImage = (
  source: Image | string | null | undefined,
  options?: { width?: number; quality?: number }
): string => {
  if (!source) return '';

  // ✅ لو string وبدأ بـ http → رابط جاهز، نرجعه كما هو
  if (typeof source === 'string') {
    if (source.startsWith('http')) return source;

    // ❌ لو string لكن ليس رابط → لا نحاول توليد صورة
    console.warn('⚠️ urlForImage: Invalid string source passed:', source);
    return '';
  }

  // ✅ كائن Sanity Image
  try {
    let builder = imageBuilder.image(source).auto('format').fit('max');
    if (options?.width) builder = builder.width(options.width);
    if (options?.quality) builder = builder.quality(options.quality);
    else builder = builder.quality(100);
    return builder.url();
  } catch (error) {
    console.error('urlForImage: Failed to build image URL:', error);
    return '';
  }
};
