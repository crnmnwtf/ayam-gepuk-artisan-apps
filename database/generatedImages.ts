// This file acts as a simple database to store URLs for generated images,
// preventing the need to call the image generation API on every page load.
export const generatedImages: Record<string, string> = {
    // Menu Items from constants.ts
    'k1': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/set-a-krispy-1.webp',
    'k2': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/set-b-krispy.webp',
    'k3': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/set-c-krispy.webp',
    'c1': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/set-a-klasik.webp',
    'c2': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/set-b-klasik-1.webp',
    'c3': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/set-c-klasik.webp',
    's1': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/ayam-klasik.webp',
    's2': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/ayam-krispy-pile.webp',
    's3': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/tempe-goreng.webp',
    's4': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/sambal-gajus.webp',
    's5': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/kubis-goreng.webp',
    's6': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/tauhu-goreng.webp',
    's7': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/nasi-putih.webp',
    's8': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/minuman.webp',
    // Promotions from constants.ts
    'p1': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/unlimited-refill-promo.webp',
    'p2': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/foodpanda-delivery.webp',
    'p3': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/set-b-krispy.webp',
    'p4': 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/new-outlet-subang-2.webp',
};
