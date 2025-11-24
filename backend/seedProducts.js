const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const categories = ['Electronics', 'Fashion', 'Home & Kitchen', 'Books', 'Sports', 'Toys', 'Beauty'];
const brands = ['Samsung', 'Apple', 'Sony', 'Nike', 'Adidas', 'LG', 'HP', 'Dell', 'Canon', 'Nikon', 'Puma', 'Reebok', 'Philips', 'Bosch', 'Generic'];

const categoryImages = {
  'Electronics': [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&h=400&fit=crop'
  ],
  'Fashion': [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop'
  ],
  'Home & Kitchen': [
    'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1565183928294-7d22f2d8ab2d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1584990347449-5f5246dccbee?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1603712725038-779f8677a5e8?w=400&h=400&fit=crop'
  ],
  'Books': [
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop'
  ],
  'Sports': [
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1578762560042-46ad127c95ea?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1593013290259-74347eb35238?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop'
  ],
  'Toys': [
    'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1587616211892-cc1b8b9d7d7c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1587912781053-c4b76635e9c3?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1586768927129-63d0278c28cf?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581111401667-badd4c90a916?w=400&h=400&fit=crop'
  ],
  'Beauty': [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=400&h=400&fit=crop'
  ]
};

const generateProducts = (count) => {
  const products = [];
  let categoryCounters = {};
  
  for (let i = 1; i <= count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const basePrice = Math.floor(Math.random() * 9000) + 500;
    const discount = Math.floor(Math.random() * 40) + 5;
    const originalPrice = Math.floor(basePrice * (1 + discount / 100));
    const rating = (Math.random() * 3 + 2).toFixed(1);
    const reviews = Math.floor(Math.random() * 5000) + 10;
    const inStock = Math.random() > 0.1;
    
    if (!categoryCounters[category]) {
      categoryCounters[category] = 0;
    }
    const imageIndex = categoryCounters[category] % categoryImages[category].length;
    categoryCounters[category]++;
    
    const productNames = {
      'Electronics': [
        'Wireless Bluetooth Headphones',
        'Smart LED TV',
        '4K Action Camera',
        'Portable Power Bank',
        'Gaming Mouse',
        'Mechanical Keyboard',
        'Wireless Earbuds',
        'Smartwatch',
        'Tablet',
        'Laptop',
        'Desktop Monitor',
        'Graphics Card',
        'SSD Storage',
        'USB Hub',
        'Webcam',
        'Microphone',
        'Speaker System',
        'Router',
        'External Hard Drive',
        'Memory Card'
      ],
      'Fashion': [
        'Cotton T-Shirt',
        'Denim Jeans',
        'Casual Shirt',
        'Formal Trousers',
        'Jacket',
        'Hoodie',
        'Dress',
        'Skirt',
        'Sweater',
        'Blazer',
        'Shorts',
        'Track Pants',
        'Polo Shirt',
        'Cardigan',
        'Coat',
        'Leggings',
        'Tank Top',
        'Sweatshirt',
        'Suit',
        'Ethnic Wear'
      ],
      'Home & Kitchen': [
        'Non-Stick Cookware Set',
        'Pressure Cooker',
        'Blender',
        'Toaster',
        'Coffee Maker',
        'Air Fryer',
        'Microwave Oven',
        'Rice Cooker',
        'Mixer Grinder',
        'Water Purifier',
        'Vacuum Cleaner',
        'Iron',
        'Dinner Set',
        'Cutlery Set',
        'Storage Containers',
        'Bed Sheet Set',
        'Curtains',
        'Pillow Set',
        'Towel Set',
        'Kitchen Organizer'
      ],
      'Books': [
        'Fiction Novel',
        'Self-Help Book',
        'Biography',
        'Science Fiction',
        'Mystery Thriller',
        'Romance Novel',
        'Cookbook',
        'Technical Manual',
        'History Book',
        'Philosophy',
        'Poetry Collection',
        'Business Book',
        'Children\'s Book',
        'Comic Book',
        'Travel Guide',
        'Art Book',
        'Dictionary',
        'Encyclopedia',
        'Magazine Subscription',
        'Journal'
      ],
      'Sports': [
        'Yoga Mat',
        'Dumbbells Set',
        'Resistance Bands',
        'Running Shoes',
        'Cricket Bat',
        'Football',
        'Basketball',
        'Badminton Racket',
        'Tennis Racket',
        'Gym Bag',
        'Sports Watch',
        'Cycling Gloves',
        'Swimming Goggles',
        'Treadmill',
        'Exercise Bike',
        'Jump Rope',
        'Boxing Gloves',
        'Ankle Weights',
        'Sports Bottle',
        'Fitness Tracker'
      ],
      'Toys': [
        'Remote Control Car',
        'Building Blocks',
        'Puzzle Set',
        'Board Game',
        'Action Figure',
        'Doll House',
        'Educational Toy',
        'Stuffed Animal',
        'Art & Craft Kit',
        'Musical Instrument',
        'Science Kit',
        'Robot Toy',
        'Die Cast Cars',
        'Play Kitchen Set',
        'Outdoor Play Equipment',
        'Video Game',
        'Card Game',
        'Lego Set',
        'Train Set',
        'Ball Pool'
      ],
      'Beauty': [
        'Facial Cleanser',
        'Moisturizer',
        'Sunscreen Lotion',
        'Hair Shampoo',
        'Conditioner',
        'Face Serum',
        'Lipstick Set',
        'Makeup Kit',
        'Perfume',
        'Body Lotion',
        'Face Mask',
        'Hair Oil',
        'Nail Polish',
        'Eye Shadow Palette',
        'Foundation',
        'Concealer',
        'Hair Dryer',
        'Straightener',
        'Trimmer',
        'Skincare Set'
      ]
    };
    
    const names = productNames[category];
    const baseName = names[Math.floor(Math.random() * names.length)];
    const variations = ['Pro', 'Plus', 'Premium', 'Deluxe', 'Elite', 'Advanced', 'Professional', 'Ultimate', 'Max', 'Standard'];
    const variation = Math.random() > 0.5 ? ` ${variations[Math.floor(Math.random() * variations.length)]}` : '';
    
    products.push({
      name: `${brand} ${baseName}${variation} - Model ${i}`,
      category,
      price: basePrice,
      originalPrice,
      rating: parseFloat(rating),
      reviews,
      image: categoryImages[category][imageIndex],
      brand,
      inStock,
      description: `High-quality ${baseName.toLowerCase()} from ${brand}. Perfect for everyday use with excellent features and durability.`
    });
  }
  
  return products;
};

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ MongoDB Connected');
    
    await Product.deleteMany({});
    console.log('🗑️  Existing products deleted');
    
    const products = generateProducts(200);
    
    const phoneProducts = [
      {
        name: 'Apple iPhone 15 Pro Max - 256GB',
        category: 'Electronics',
        price: 124999,
        originalPrice: 134999,
        rating: 4.8,
        reviews: 15420,
        image: 'https://images.unsplash.com/photo-1592286927505-4bca48eef628?w=400&h=400&fit=crop',
        brand: 'Apple',
        inStock: true,
        description: 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system.'
      },
      {
        name: 'Samsung Galaxy S24 Ultra Smartphone',
        category: 'Electronics',
        price: 109999,
        originalPrice: 119999,
        rating: 4.7,
        reviews: 12850,
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
        brand: 'Samsung',
        inStock: true,
        description: 'Premium Android smartphone with S Pen, 200MP camera, and AI features.'
      },
      {
        name: 'Apple AirPods Pro 2nd Generation',
        category: 'Electronics',
        price: 24900,
        originalPrice: 29900,
        rating: 4.9,
        reviews: 28500,
        image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop',
        brand: 'Apple',
        inStock: true,
        description: 'Premium wireless earphones with active noise cancellation and spatial audio.'
      },
      {
        name: 'Sony WH-1000XM5 Wireless Headphones',
        category: 'Electronics',
        price: 29990,
        originalPrice: 34990,
        rating: 4.8,
        reviews: 18950,
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop',
        brand: 'Sony',
        inStock: true,
        description: 'Industry-leading noise canceling headphones with premium sound quality.'
      },
      {
        name: 'OnePlus 12 5G Smartphone',
        category: 'Electronics',
        price: 64999,
        originalPrice: 69999,
        rating: 4.6,
        reviews: 9850,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
        brand: 'HP',
        inStock: true,
        description: 'Flagship smartphone with Snapdragon 8 Gen 3 and 100W fast charging.'
      },
      {
        name: 'Realme Buds Air 3 Neo Earphones',
        category: 'Electronics',
        price: 1999,
        originalPrice: 2999,
        rating: 4.3,
        reviews: 8420,
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
        brand: 'Generic',
        inStock: true,
        description: 'Budget-friendly wireless earphones with good battery life and sound.'
      },
      {
        name: 'Xiaomi Redmi Note 13 Pro Smartphone',
        category: 'Electronics',
        price: 23999,
        originalPrice: 26999,
        rating: 4.5,
        reviews: 15620,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        brand: 'LG',
        inStock: true,
        description: 'Mid-range smartphone with excellent camera and AMOLED display.'
      },
      {
        name: 'Samsung Galaxy Buds2 Pro Earbuds',
        category: 'Electronics',
        price: 15990,
        originalPrice: 17990,
        rating: 4.6,
        reviews: 11240,
        image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
        brand: 'Samsung',
        inStock: true,
        description: 'Premium wireless earbuds with intelligent ANC and 360 audio.'
      },
      {
        name: 'Motorola Edge 40 Neo 5G Phone',
        category: 'Electronics',
        price: 28999,
        originalPrice: 32999,
        rating: 4.4,
        reviews: 6540,
        image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
        brand: 'Sony',
        inStock: true,
        description: '5G smartphone with curved display and excellent build quality.'
      },
      {
        name: 'JBL Tune 770NC Wireless Headphones',
        category: 'Electronics',
        price: 7999,
        originalPrice: 9999,
        rating: 4.5,
        reviews: 9860,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        brand: 'Philips',
        inStock: true,
        description: 'Over-ear wireless headphones with active noise cancellation.'
      },
      {
        name: 'Vivo V30 Pro 5G Smartphone',
        category: 'Electronics',
        price: 41999,
        originalPrice: 45999,
        rating: 4.5,
        reviews: 7250,
        image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop',
        brand: 'Dell',
        inStock: true,
        description: 'Camera-focused smartphone with Aura Light portrait system.'
      },
      {
        name: 'Nothing Phone (2) 5G',
        category: 'Electronics',
        price: 44999,
        originalPrice: 49999,
        rating: 4.6,
        reviews: 8920,
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop',
        brand: 'HP',
        inStock: true,
        description: 'Unique smartphone with Glyph Interface and flagship performance.'
      },
      {
        name: 'boAt Airdopes 141 True Wireless Earbuds',
        category: 'Electronics',
        price: 1299,
        originalPrice: 2499,
        rating: 4.2,
        reviews: 42850,
        image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400&h=400&fit=crop',
        brand: 'Generic',
        inStock: true,
        description: 'Affordable wireless earbuds with IPX4 water resistance.'
      },
      {
        name: 'Google Pixel 8 Pro Smartphone',
        category: 'Electronics',
        price: 106999,
        originalPrice: 116999,
        rating: 4.7,
        reviews: 5420,
        image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop',
        brand: 'Canon',
        inStock: true,
        description: 'AI-powered smartphone with best-in-class camera and pure Android.'
      },
      {
        name: 'OPPO Reno 11 Pro 5G Phone',
        category: 'Electronics',
        price: 39999,
        originalPrice: 43999,
        rating: 4.4,
        reviews: 6850,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop',
        brand: 'Sony',
        inStock: true,
        description: 'Slim and stylish 5G smartphone with portrait photography focus.'
      },
      {
        name: 'Sennheiser Momentum 4 Wireless Headphones',
        category: 'Electronics',
        price: 34990,
        originalPrice: 39990,
        rating: 4.8,
        reviews: 3650,
        image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
        brand: 'Bosch',
        inStock: true,
        description: 'Audiophile-grade wireless headphones with exceptional sound quality.'
      },
      {
        name: 'Realme GT 6 5G Gaming Smartphone',
        category: 'Electronics',
        price: 42999,
        originalPrice: 47999,
        rating: 4.6,
        reviews: 8540,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
        brand: 'Samsung',
        inStock: true,
        description: 'Gaming-focused smartphone with flagship chipset and cooling system.'
      },
      {
        name: 'Beats Studio Pro Wireless Headphones',
        category: 'Electronics',
        price: 34999,
        originalPrice: 39999,
        rating: 4.6,
        reviews: 7820,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
        brand: 'Apple',
        inStock: true,
        description: 'Premium over-ear headphones with spatial audio and active noise cancellation.'
      },
      {
        name: 'Poco X6 Pro 5G Smartphone',
        category: 'Electronics',
        price: 26999,
        originalPrice: 29999,
        rating: 4.5,
        reviews: 18750,
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop',
        brand: 'LG',
        inStock: true,
        description: 'Budget flagship smartphone with MediaTek Dimensity 8300 Ultra.'
      },
      {
        name: 'Jabra Elite 85t True Wireless Earbuds',
        category: 'Electronics',
        price: 18999,
        originalPrice: 21999,
        rating: 4.7,
        reviews: 5280,
        image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400&h=400&fit=crop',
        brand: 'Philips',
        inStock: true,
        description: 'Premium wireless earbuds with adjustable ANC and great call quality.'
      }
    ];
    
    const allProducts = [...products, ...phoneProducts];
    await Product.insertMany(allProducts);
    
    console.log(`✅ Successfully added ${allProducts.length} products to database (including 20 phone-related products)`);
    
    const stats = await Product.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
          avgRating: { $avg: '$rating' }
        }
      },
      { $sort: { count: -1 } }
    ]);
    
    console.log('\n📊 Product Statistics:');
    stats.forEach(stat => {
      console.log(`   ${stat._id}: ${stat.count} products (Avg Rating: ${stat.avgRating.toFixed(2)})`);
    });
    
    const highRated = await Product.countDocuments({ rating: { $gte: 4 } });
    console.log(`\n⭐ Products with 4+ rating: ${highRated}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
