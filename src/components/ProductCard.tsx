import { Link } from "react-router-dom";
import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  brand: string;
  price: string;
  oldPrice?: string;
  image: string;
  rating: number;
  reviewCount: number;
  slug: string;
  affiliateLink: string;
  discount?: string;
}

export default function ProductCard({
  title,
  brand,
  price,
  oldPrice,
  image,
  rating,
  reviewCount,
  slug,
  affiliateLink,
  discount,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-card-hover transition-smooth">
      <Link to={`/review/${slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-smooth"
          />
          {discount && (
            <Badge className="absolute top-3 right-3 bg-deal text-deal-foreground">
              {discount}
            </Badge>
          )}
        </div>
      </Link>
      
      <CardContent className="p-4">
        <Link to={`/review/${slug}`}>
          <Badge variant="secondary" className="mb-2">
            {brand}
          </Badge>
          <h3 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-secondary transition-colors">
            {title}
          </h3>
        </Link>
        
        <div className="flex items-center space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating)
                  ? "fill-primary text-primary"
                  : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-2">
            ({reviewCount})
          </span>
        </div>
        
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold text-secondary">{price}</span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {oldPrice}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button asChild variant="default" className="flex-1 bg-secondary hover:bg-secondary/90">
          <Link to={`/review/${slug}`}>
            Ver Review
          </Link>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer nofollow">
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
