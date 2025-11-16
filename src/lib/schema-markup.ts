interface Product {
  id: string;
  title: string;
  brand: string;
  price: string;
  oldPrice?: string;
  image: string;
  rating: number;
  reviewCount: number;
  slug: string;
  description?: string;
}

export function generateProductSchema(product: Product) {
  const priceValue = product.price.replace('R$', '').replace('.', '').replace(',', '.').trim();
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "image": product.image,
    "description": product.description || product.title,
    "sku": product.id,
    "offers": {
      "@type": "Offer",
      "url": `https://melhor-reviews.lovable.app/review/${product.slug}`,
      "priceCurrency": "BRL",
      "price": priceValue,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Melhores Reviews"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    }
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Organization",
      "name": "Melhores Reviews",
      "url": "https://melhor-reviews.lovable.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Melhores Reviews",
      "logo": {
        "@type": "ImageObject",
        "url": "https://melhor-reviews.lovable.app/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://melhor-reviews.lovable.app/review/${article.slug}`
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Melhores Reviews",
    "description": "Análises detalhadas de TVs com foco em qualidade, procedência de marcas e avaliações reais",
    "url": "https://melhor-reviews.lovable.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://melhor-reviews.lovable.app/busca?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}
