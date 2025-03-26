
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Tag, ShoppingBag, Filter, ArrowUpDown } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import ProductCard from './ProductCard';
import { toast } from 'sonner';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Official Cricket Jersey',
    price: 59.99,
    image: '/placeholder.svg',
    category: 'apparel',
    rating: 4.5,
    featured: true,
  },
  {
    id: 2,
    name: 'Premium Cricket Bat',
    price: 149.99,
    image: '/placeholder.svg',
    category: 'equipment',
    rating: 4.8,
    featured: true,
  },
  {
    id: 3,
    name: 'Cricket Gloves',
    price: 34.99,
    image: '/placeholder.svg',
    category: 'equipment',
    rating: 4.2,
  },
  {
    id: 4,
    name: 'Team Cap',
    price: 24.99,
    image: '/placeholder.svg',
    category: 'apparel',
    rating: 4.0,
  },
  {
    id: 5,
    name: 'Cricket Ball Set',
    price: 19.99,
    image: '/placeholder.svg',
    category: 'equipment',
    rating: 4.6,
  },
  {
    id: 6,
    name: 'Team Hoodie',
    price: 64.99,
    image: '/placeholder.svg',
    category: 'apparel',
    rating: 4.7,
  },
  {
    id: 7,
    name: 'Cricket Helmet',
    price: 79.99,
    image: '/placeholder.svg',
    category: 'equipment',
    rating: 4.9,
  },
  {
    id: 8,
    name: 'Cricket Shoes',
    price: 89.99,
    image: '/placeholder.svg',
    category: 'apparel',
    rating: 4.4,
  },
];

const MerchandiseStore: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [filter, setFilter] = useState('all');
  const [sortOption, setSortOption] = useState('featured');

  const addToCart = () => {
    setCartCount(cartCount + 1);
    toast.success('Item added to cart!');
  };

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    return product.category === filter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'featured') {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    } else if (sortOption === 'price-low') {
      return a.price - b.price;
    } else if (sortOption === 'price-high') {
      return b.price - a.price;
    } else if (sortOption === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="container py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">The Dressing Room</h1>
          <p className="text-muted-foreground mt-1">
            Official cricket merchandise and equipment
          </p>
        </div>
        <Button variant="outline" className="relative">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartCount}
            </span>
          )}
        </Button>
      </div>
      
      <Tabs defaultValue="all" className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="all" onClick={() => setFilter('all')}>All Items</TabsTrigger>
            <TabsTrigger value="apparel" onClick={() => setFilter('apparel')}>Apparel</TabsTrigger>
            <TabsTrigger value="equipment" onClick={() => setFilter('equipment')}>Equipment</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setSortOption('featured')}>
              <Tag className="mr-2 h-4 w-4" />
              Featured
            </Button>
            <Button variant="outline" size="sm" onClick={() => setSortOption('price-low')}>
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Price: Low to High
            </Button>
            <Button variant="outline" size="sm" onClick={() => setSortOption('rating')}>
              <Filter className="mr-2 h-4 w-4" />
              Top Rated
            </Button>
          </div>
        </div>
        
        <TabsContent value="all" className="mt-0">
          {filter === 'all' && featuredProducts.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Items</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard 
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    featured
                  />
                ))}
              </div>
            </div>
          )}
          
          <h2 className="text-2xl font-bold mb-4">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="apparel" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="equipment" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-muted/50 rounded-lg p-8 text-center">
        <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h2 className="text-2xl font-bold mb-2">Team Bulk Orders</h2>
        <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
          Looking to outfit your entire team? Get custom jerseys, equipment, and more at special bulk prices.
        </p>
        <Button>Contact for Team Orders</Button>
      </div>
    </div>
  );
};

export default MerchandiseStore;
