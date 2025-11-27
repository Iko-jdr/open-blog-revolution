const createSanitizer = (base) => (url) => {
    const combined = `${base}/${url}`;
    
    // Regex fies double // without affecting protocol
    return combined.replaceAll(/(?<!:)\/+/gm, '/');
};

const base = import.meta.env.BASE_URL;

export const sanitizeUrl = createSanitizer(base);