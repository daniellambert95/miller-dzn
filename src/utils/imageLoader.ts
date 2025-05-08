/**
 * Custom image loader for BunnyCDN
 * @param src Image source path
 * @param width Image width
 * @param quality Image quality
 * @returns Full BunnyCDN URL
 */
export const bunnyImageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  // Extract just the filename from the path
  const filename = src.split('/').pop();
  
  // Set default quality
  const imageQuality = quality || 80;
  
  // BunnyCDN domain and path
  const cdnBase = 'https://site-and-site-miller-design-images.b-cdn.net';
  const imagePath = `miller-design-images/${filename}`;
  
  // Construct the full URL
  const imageUrl = `${cdnBase}/${imagePath}?width=${width}&quality=${imageQuality}`;
  
  // Debug log
  console.log(`Loading image: ${src} → ${imageUrl}`);
  
  return imageUrl;
};

export default bunnyImageLoader; 