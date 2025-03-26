
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardFooter } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, featured = false }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`h-full overflow-hidden ${featured ? 'border-primary' : ''}`}>
        <div className="relative pt-[100%]">
          <div className="absolute inset-0 bg-muted/80 flex items-center justify-center p-4">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          {product.featured && (
            <Badge className="absolute top-2 right-2">Featured</Badge>
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-center mb-1">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-current"
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">{product.rating.toFixed(1)}</span>
          </div>
          
          <h3 className="font-semibold mb-1">{product.name}</h3>
          <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            variant="default" 
            size="sm" 
            className="w-full"
            onClick={onAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
