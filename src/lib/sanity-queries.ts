/**
 * Sanity GROQ Queries
 * Reusable queries for fetching data from Sanity CMS
 */

// Public gallery queries
export const PUBLIC_PHOTOS_QUERY = `
  *[_type == "photo" && publicGallery == true] | order(_createdAt desc) {
    _id,
    title,
    description,
    category,
    featured,
    image {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot
    }
  }
`;

export const FEATURED_PHOTOS_QUERY = `
  *[_type == "photo" && featured == true && publicGallery == true] | order(_createdAt desc) [0...6] {
    _id,
    title,
    description,
    category,
    image {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot
    }
  }
`;

export const PHOTOS_BY_CATEGORY_QUERY = `
  *[_type == "photo" && publicGallery == true && category == $category] | order(_createdAt desc) {
    _id,
    title,
    description,
    category,
    image {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot
    }
  }
`;

// Site settings query
export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    description,
    contactEmail,
    contactPhone,
    socialLinks,
    businessHours,
    web3formsKey
  }
`;

// Customer portal queries
export const CUSTOMER_BY_ID_QUERY = `
  *[_type == "customer" && customerId == $customerId][0] {
    _id,
    customerId,
    passwordHash,
    fullName,
    email,
    phone,
    address,
    createdAt
  }
`;

export const CUSTOMER_SESSIONS_QUERY = `
  *[_type == "photoSession" && customer._ref == $customerId && status == "active"] | order(sessionDate desc) {
    _id,
    sessionName,
    sessionId,
    sessionDate,
    status,
    description,
    "photoCount": count(photos)
  }
`;

export const SESSION_BY_ID_QUERY = `
  *[_type == "photoSession" && sessionId.current == $sessionId][0] {
    _id,
    sessionName,
    sessionId,
    galleryPassword,
    sessionDate,
    status,
    description,
    customer-> {
      _id,
      customerId,
      fullName
    },
    photos[]-> {
      _id,
      title,
      description,
      image {
        asset-> {
          _id,
          url
        },
        alt,
        hotspot
      },
      pricing
    }
  }
`;

export const PHOTO_BY_ID_QUERY = `
  *[_type == "photo" && _id == $photoId][0] {
    _id,
    title,
    description,
    image {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot
    },
    pricing,
    session-> {
      _id,
      sessionName,
      sessionId
    }
  }
`;

// Helper function to fetch customer by ID
export async function fetchCustomerById(sanityClient: any, customerId: string) {
  return await sanityClient.fetch(CUSTOMER_BY_ID_QUERY, { customerId });
}

// Helper function to fetch customer sessions
export async function fetchCustomerSessions(sanityClient: any, customerId: string) {
  return await sanityClient.fetch(CUSTOMER_SESSIONS_QUERY, { customerId });
}

// Helper function to fetch session by ID
export async function fetchSessionById(sanityClient: any, sessionId: string) {
  return await sanityClient.fetch(SESSION_BY_ID_QUERY, { sessionId });
}

// Helper function to fetch photo by ID
export async function fetchPhotoById(sanityClient: any, photoId: string) {
  return await sanityClient.fetch(PHOTO_BY_ID_QUERY, { photoId });
}

// Helper function to fetch site settings
export async function fetchSiteSettings(sanityClient: any) {
  return await sanityClient.fetch(SITE_SETTINGS_QUERY);
}

// Helper function to fetch public photos
export async function fetchPublicPhotos(sanityClient: any) {
  return await sanityClient.fetch(PUBLIC_PHOTOS_QUERY);
}

// Helper function to fetch featured photos
export async function fetchFeaturedPhotos(sanityClient: any) {
  return await sanityClient.fetch(FEATURED_PHOTOS_QUERY);
}
