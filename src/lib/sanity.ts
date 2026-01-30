/**
 * Sanity Client Configuration
 * Used to fetch data from Sanity CMS in Astro components
 */

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Sanity client configuration
export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for faster response (set to false for draft content)
});

// Image URL builder for Sanity images
const builder = imageUrlBuilder(sanityClient);

/**
 * Generate Sanity image URL with transformations
 * @param source - Sanity image reference
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Get watermarked image URL
 * Uses Sanity's image pipeline to add watermark overlay
 * @param source - Sanity image reference
 * @param width - Optional width
 */
export function getWatermarkedImage(source: SanityImageSource, width?: number) {
  let url = urlFor(source);

  if (width) {
    url = url.width(width);
  }

  // TODO: Add watermark overlay when watermark image is uploaded to Sanity
  // url = url.blend({ /* watermark settings */ });

  return url.url();
}

/**
 * Get optimized image URL for display
 * @param source - Sanity image reference
 * @param width - Desired width
 * @param height - Desired height
 */
export function getOptimizedImage(
  source: SanityImageSource,
  width?: number,
  height?: number
) {
  let url = urlFor(source).auto('format').quality(80);

  if (width) url = url.width(width);
  if (height) url = url.height(height);

  return url.url();
}
