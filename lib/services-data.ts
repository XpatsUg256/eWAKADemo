export interface Service {
  id: string
  name: string
  category: string
  subcategory: string
  description: string
  fullDescription: string
  price: string
  rating: number
  image: string
  icon: string
  videoUrl?: string // Added YouTube video URL field
}

export const categories = [
  {
    id: "home-study",
    name: "Home Study and Coaching",
    icon: "🏫",
    subcategories: [
      "Quranic Study",
      "Nursery Coaching",
      "Primary Coaching",
      "O' Level Coaching",
      "A' Level Coaching",
      "Language Lessons",
    ],
  },
  {
    id: "house-welfare",
    name: "House Welfare and Maintenance",
    icon: "🏠",
    subcategories: [
      "Laundry Work",
      "Car Washing",
      "Full House Cleaning",
      "Paver and Roof Cleaning",
      "Fumigation",
      "Appliance Repairs",
      "Plumbing Services",
    ],
  },
  {
    id: "home-saloon",
    name: "Home Saloon Services",
    icon: "💇‍♀️",
    subcategories: ["Men Haircuts", "Female Haircuts", "Manicure", "Pedicure", "Makeup", "Face Scrub"],
  },
  {
    id: "home-foods",
    name: "Home Foods and Nutrition",
    icon: "🍲",
    subcategories: [
      "Hired Chefs - Local",
      "Hired Chefs - Arabic",
      "Hired Chefs - Chinese",
      "Hired Chefs - Italian",
      "Hired Chefs - Turkish",
      "Cooking Lessons",
      "Home Baking Services",
      "Baking Lessons",
    ],
  },
  {
    id: "sports-trainers",
    name: "Personal Sports Trainers",
    icon: "🏋️‍♂️",
    subcategories: ["Chess", "Boxing", "Swimming", "Gymnastics", "Volleyball", "Scrabble"],
  },
  {
    id: "fitness",
    name: "Physical Fitness and Body Building",
    icon: "💪",
    subcategories: [
      "Yoga Instructors",
      "Mobile Gym",
      "SPA & Massage",
      "Clinical Exercise Physiologists",
      "Corrective Exercise Specialists",
      "Weight Management Experts",
    ],
  },
  {
    id: "music-dance",
    name: "Music, Dance, and Drama",
    icon: "🎶",
    subcategories: [
      "Ballet Dance",
      "Ballroom Dance",
      "Salsa Dance",
      "Afrobeat Dance",
      "String Instruments",
      "Keyboard",
      "Local Instruments",
      "Event Dancers",
      "Event Instrumentalists",
    ],
  },
  {
    id: "fashion",
    name: "Fashion and Design",
    icon: "👗",
    subcategories: [
      "Indian Fashion",
      "Arabic Fashion",
      "South African Fashion",
      "Chinese Fashion",
      "Baganda Cultural Fashion",
      "Western Fashion",
      "Karamojong Fashion",
      "Muslim Fashion",
    ],
  },
  {
    id: "counseling",
    name: "Home Counseling, Nursing & Care",
    icon: "❤️",
    subcategories: ["Marriage Counseling", "Addiction Therapy", "Sex Therapy", "Rehabilitation Counseling"],
  },
  {
    id: "ict-trainers",
    name: "Personal ICT Trainers",
    icon: "💻",
    subcategories: ["Web Design", "Graphics Design", "Video Editing", "Programming", "Digital Marketing"],
  },
]

export const services: Service[] = [
  // Home Study and Coaching
  {
    id: "quranic-study",
    name: "Quranic Study",
    category: "Home Study and Coaching",
    subcategory: "Quranic Study",
    description: "Personalized Quranic lessons for individuals or families at home.",
    fullDescription:
      "Our experienced Quranic teachers provide personalized lessons tailored to your learning pace. Whether you're a beginner or looking to deepen your understanding, we offer comprehensive Quranic education including Tajweed, memorization, and interpretation. Sessions are conducted in a comfortable home environment, making learning accessible and convenient for the entire family.",
    price: "UGX 50,000 - 100,000/session",
    rating: 4.8,
    image: "/quran-study-home.jpg",
    icon: "📖",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "primary-coaching",
    name: "Primary Coaching",
    category: "Home Study and Coaching",
    subcategory: "Primary Coaching",
    description: "In-home coaching for all primary subjects.",
    fullDescription:
      "Professional tutors provide comprehensive support for all primary school subjects including Mathematics, English, Science, and Social Studies. Our coaches use interactive teaching methods to make learning engaging and effective. We focus on building strong foundational skills while boosting confidence and academic performance.",
    price: "UGX 40,000 - 80,000/session",
    rating: 4.9,
    image: "/primary-school-tutoring.jpg",
    icon: "✏️",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "olevel-coaching",
    name: "O' Level Coaching",
    category: "Home Study and Coaching",
    subcategory: "O' Level Coaching",
    description: "Specialized tutors for all O' Level subjects.",
    fullDescription:
      "Expert tutors with proven track records in O' Level education provide targeted support for UCE preparation. We cover all subjects including Mathematics, Sciences, Languages, and Humanities. Our approach focuses on exam techniques, concept mastery, and building problem-solving skills to ensure excellent results.",
    price: "UGX 60,000 - 120,000/session",
    rating: 4.7,
    image: "/secondary-school-tutoring.jpg",
    icon: "📚",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "language-lessons",
    name: "Language Lessons",
    category: "Home Study and Coaching",
    subcategory: "Language Lessons",
    description: "Learn local and foreign languages from experts.",
    fullDescription:
      "Master new languages with our experienced language instructors. We offer lessons in Luganda, Swahili, French, Spanish, Arabic, and more. Our immersive teaching approach combines conversation practice, grammar, and cultural context to help you achieve fluency. Perfect for personal development, travel, or business needs.",
    price: "UGX 50,000 - 100,000/session",
    rating: 4.6,
    image: "/language-learning-tutor.jpg",
    icon: "🗣️",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },

  // House Welfare and Maintenance
  {
    id: "laundry-work",
    name: "Laundry Work",
    category: "House Welfare and Maintenance",
    subcategory: "Laundry Work",
    description: "Reliable laundry and ironing services.",
    fullDescription:
      "Professional laundry services delivered to your doorstep. We handle washing, drying, ironing, and folding with care and attention to detail. Our team uses quality detergents and follows proper fabric care guidelines to ensure your clothes look their best. Perfect for busy professionals and families.",
    price: "UGX 30,000 - 60,000/load",
    rating: 4.5,
    image: "/laundry-service.png",
    icon: "👔",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "car-washing",
    name: "Car Washing",
    category: "House Welfare and Maintenance",
    subcategory: "Car Washing",
    description: "Mobile car cleaning at your convenience.",
    fullDescription:
      "Professional mobile car wash service that comes to you. We provide exterior washing, interior vacuuming, dashboard cleaning, and tire polishing. Our eco-friendly products ensure a spotless finish without harming your vehicle's paint. Save time and enjoy a sparkling clean car without leaving home.",
    price: "UGX 20,000 - 50,000/wash",
    rating: 4.7,
    image: "/car-washing-service.jpg",
    icon: "🚗",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "house-cleaning",
    name: "Full House Cleaning",
    category: "House Welfare and Maintenance",
    subcategory: "Full House Cleaning",
    description: "Deep cleaning for entire homes.",
    fullDescription:
      "Comprehensive house cleaning services covering every room. Our trained cleaners handle dusting, mopping, bathroom sanitization, kitchen cleaning, and more. We use professional-grade equipment and eco-friendly products to deliver exceptional results. Choose from one-time deep cleaning or regular maintenance schedules.",
    price: "UGX 80,000 - 200,000/session",
    rating: 4.8,
    image: "/house-cleaning-service.png",
    icon: "🧹",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "fumigation",
    name: "Fumigation",
    category: "House Welfare and Maintenance",
    subcategory: "Fumigation",
    description: "Keep your home pest-free with expert fumigators.",
    fullDescription:
      "Professional pest control and fumigation services to protect your home from insects, rodents, and other pests. Our certified technicians use safe, effective treatments that are family and pet-friendly. We provide thorough inspections, targeted treatments, and preventive advice to keep your home pest-free long-term.",
    price: "UGX 100,000 - 300,000/treatment",
    rating: 4.6,
    image: "/fumigation-pest-control.jpg",
    icon: "🐛",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "plumbing-services",
    name: "Plumbing Services",
    category: "House Welfare and Maintenance",
    subcategory: "Plumbing Services",
    description: "Professional repairs for kitchen and bathroom issues.",
    fullDescription:
      "Expert plumbing services for all your home needs. We handle leaky faucets, clogged drains, toilet repairs, pipe installations, and water heater maintenance. Our licensed plumbers arrive with the right tools and parts to fix problems quickly and efficiently. Emergency services available for urgent issues.",
    price: "UGX 50,000 - 150,000/service",
    rating: 4.7,
    image: "/plumbing-repair.png",
    icon: "🔧",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },

  // Home Saloon Services
  {
    id: "men-haircuts",
    name: "Men Haircuts",
    category: "Home Saloon Services",
    subcategory: "Men Haircuts",
    description: "Professional men's haircuts at home.",
    fullDescription:
      "Skilled barbers bring the salon experience to your home. We offer modern and classic haircuts, beard trimming, and grooming services. Our professionals use quality tools and products to deliver sharp, clean cuts tailored to your style preferences. Enjoy convenience without compromising on quality.",
    price: "UGX 15,000 - 30,000/cut",
    rating: 4.6,
    image: "/mens-haircut-barber.jpg",
    icon: "✂️",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "female-haircuts",
    name: "Female Haircuts",
    category: "Home Saloon Services",
    subcategory: "Female Haircuts",
    description: "Professional women's haircuts and styling at home.",
    fullDescription:
      "Expert hairstylists provide cutting, styling, and hair treatment services in the comfort of your home. From simple trims to complete makeovers, we handle all hair types and styles. Our professionals stay updated with the latest trends and use premium products to ensure beautiful, healthy results.",
    price: "UGX 25,000 - 60,000/service",
    rating: 4.8,
    image: "/womens-haircut-styling.jpg",
    icon: "💇‍♀️",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "manicure-pedicure",
    name: "Manicure & Pedicure",
    category: "Home Saloon Services",
    subcategory: "Manicure",
    description: "Professional nail care at home.",
    fullDescription:
      "Pamper yourself with professional manicure and pedicure services at home. Our nail technicians provide nail shaping, cuticle care, exfoliation, massage, and polish application. We use quality products and maintain strict hygiene standards. Choose from classic, gel, or acrylic options.",
    price: "UGX 20,000 - 50,000/service",
    rating: 4.7,
    image: "/manicure-pedicure-nails.jpg",
    icon: "💅",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "makeup",
    name: "Makeup",
    category: "Home Saloon Services",
    subcategory: "Makeup",
    description: "Professional makeup for any occasion.",
    fullDescription:
      "Professional makeup artists create stunning looks for weddings, events, photoshoots, or everyday wear. We use high-quality cosmetics and techniques tailored to your skin type and preferences. From natural to glamorous, we ensure you look and feel your best for any occasion.",
    price: "UGX 30,000 - 100,000/session",
    rating: 4.9,
    image: "/professional-makeup-artist.jpg",
    icon: "💄",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },

  // Home Foods and Nutrition
  {
    id: "chef-local",
    name: "Hired Chef - Local Cuisine",
    category: "Home Foods and Nutrition",
    subcategory: "Hired Chefs - Local",
    description: "Expert chefs for authentic Ugandan cuisine.",
    fullDescription:
      "Experienced chefs specializing in traditional Ugandan dishes bring authentic flavors to your home. From matooke and groundnut sauce to luwombo and malakwang, our chefs prepare delicious, home-style meals using fresh ingredients. Perfect for family gatherings, events, or daily meal preparation.",
    price: "UGX 50,000 - 150,000/day",
    rating: 4.8,
    image: "/ugandan-local-food-chef.jpg",
    icon: "🍛",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "chef-arabic",
    name: "Hired Chef - Arabic Cuisine",
    category: "Home Foods and Nutrition",
    subcategory: "Hired Chefs - Arabic",
    description: "Authentic Arabic cuisine prepared at home.",
    fullDescription:
      "Skilled chefs trained in Arabic culinary traditions prepare authentic Middle Eastern dishes. Enjoy hummus, shawarma, kabsa, biryani, and more prepared with traditional spices and techniques. Our chefs accommodate dietary preferences and can create custom menus for your events or daily meals.",
    price: "UGX 60,000 - 180,000/day",
    rating: 4.7,
    image: "/arabic-middle-eastern-food.jpg",
    icon: "🥙",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "cooking-lessons",
    name: "Cooking Lessons",
    category: "Home Foods and Nutrition",
    subcategory: "Cooking Lessons",
    description: "Learn to cook any dish from experts.",
    fullDescription:
      "Learn culinary skills from professional chefs in personalized cooking classes. Whether you want to master local dishes, international cuisine, or baking, our instructors provide hands-on training. We cover techniques, ingredient selection, and presentation to help you become a confident cook.",
    price: "UGX 40,000 - 100,000/lesson",
    rating: 4.6,
    image: "/cooking-class-lesson.jpg",
    icon: "👨‍🍳",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "home-baking",
    name: "Home Baking Services",
    category: "Home Foods and Nutrition",
    subcategory: "Home Baking Services",
    description: "Professional baking services at home.",
    fullDescription:
      "Professional bakers create delicious cakes, pastries, bread, and desserts in your home kitchen. Perfect for birthdays, weddings, or special occasions. We use quality ingredients and can accommodate dietary restrictions. From simple treats to elaborate celebration cakes, we deliver exceptional baked goods.",
    price: "UGX 50,000 - 200,000/order",
    rating: 4.9,
    image: "/home-baking-cakes-pastries.jpg",
    icon: "🎂",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },

  // Personal Sports Trainers
  {
    id: "chess-trainer",
    name: "Chess Training",
    category: "Personal Sports Trainers",
    subcategory: "Chess",
    description: "Personal chess coaching for all levels.",
    fullDescription:
      "Improve your chess skills with personalized coaching from experienced players. We teach openings, tactics, strategy, and endgames for beginners to advanced players. Our trainers use proven methods to develop your analytical thinking and competitive skills. Prepare for tournaments or play for enjoyment.",
    price: "UGX 30,000 - 70,000/session",
    rating: 4.5,
    image: "/chess-training-coaching.jpg",
    icon: "♟️",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "swimming-trainer",
    name: "Swimming Training",
    category: "Personal Sports Trainers",
    subcategory: "Swimming",
    description: "Personal swimming lessons for all ages.",
    fullDescription:
      "Certified swimming instructors provide lessons for beginners to advanced swimmers. We teach water safety, proper techniques, and various swimming strokes. Our patient approach helps overcome fear of water while building confidence and skill. Lessons available for children and adults.",
    price: "UGX 40,000 - 80,000/session",
    rating: 4.7,
    image: "/swimming-lessons-training.jpg",
    icon: "🏊",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },

  // Physical Fitness and Body Building
  {
    id: "yoga-instructor",
    name: "Yoga Instructor",
    category: "Physical Fitness and Body Building",
    subcategory: "Yoga Instructors",
    description: "Personal yoga sessions at home.",
    fullDescription:
      "Certified yoga instructors bring peace and wellness to your home. We offer various styles including Hatha, Vinyasa, and restorative yoga. Sessions focus on flexibility, strength, breathing, and mindfulness. Suitable for all levels, from beginners to experienced practitioners seeking deeper practice.",
    price: "UGX 40,000 - 80,000/session",
    rating: 4.8,
    image: "/yoga-instructor-home.jpg",
    icon: "🧘",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "mobile-gym",
    name: "Mobile Gym",
    category: "Physical Fitness and Body Building",
    subcategory: "Mobile Gym",
    description: "Personal training with portable equipment.",
    fullDescription:
      "Personal trainers bring gym equipment and expertise to your location. We provide customized workout programs for weight loss, muscle building, or general fitness. Our trainers use portable equipment and bodyweight exercises to deliver effective workouts. Get professional guidance without gym membership.",
    price: "UGX 50,000 - 120,000/session",
    rating: 4.6,
    image: "/personal-trainer-mobile-gym.jpg",
    icon: "🏋️",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "spa-massage",
    name: "SPA & Massage",
    category: "Physical Fitness and Body Building",
    subcategory: "SPA & Massage",
    description: "Relaxing massage therapy at home.",
    fullDescription:
      "Licensed massage therapists provide therapeutic and relaxation massages in your home. We offer Swedish, deep tissue, sports, and aromatherapy massages. Our services help relieve stress, reduce muscle tension, and promote overall wellness. Enjoy spa-quality treatments in complete privacy and comfort.",
    price: "UGX 60,000 - 150,000/session",
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=400",
    icon: "💆",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },

  // Music, Dance, and Drama
  {
    id: "ballet-dance",
    name: "Ballet Dance Training",
    category: "Music, Dance, and Drama",
    subcategory: "Ballet Dance",
    description: "Professional ballet instruction at home.",
    fullDescription:
      "Trained ballet instructors teach classical ballet techniques for all ages and levels. We focus on posture, grace, strength, and artistry. Our structured curriculum follows international standards while making learning enjoyable. Perfect for aspiring dancers or those seeking elegant exercise.",
    price: "UGX 40,000 - 90,000/session",
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=400",
    icon: "🩰",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "keyboard-lessons",
    name: "Keyboard Lessons",
    category: "Music, Dance, and Drama",
    subcategory: "Keyboard",
    description: "Learn keyboard and piano at home.",
    fullDescription:
      "Experienced music teachers provide keyboard and piano lessons for beginners to advanced students. We teach music theory, sight-reading, and performance skills. Our patient approach makes learning enjoyable while building solid musical foundations. Prepare for exams or play for personal enjoyment.",
    price: "UGX 35,000 - 80,000/lesson",
    rating: 4.6,
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎹",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },

  // Fashion and Design
  {
    id: "baganda-fashion",
    name: "Baganda Cultural Fashion",
    category: "Fashion and Design",
    subcategory: "Baganda Cultural Fashion",
    description: "Traditional Baganda attire design and tailoring.",
    fullDescription:
      "Expert designers create authentic Baganda traditional wear including gomesi, kanzu, and other cultural attire. We use quality fabrics and traditional techniques while incorporating modern touches. Perfect for weddings, cultural ceremonies, or special occasions. Custom designs available.",
    price: "UGX 100,000 - 500,000/outfit",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400",
    icon: "👘",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "arabic-fashion",
    name: "Arabic Fashion Design",
    category: "Fashion and Design",
    subcategory: "Arabic Fashion",
    description: "Elegant Arabic and Middle Eastern fashion.",
    fullDescription:
      "Skilled designers create beautiful Arabic fashion including abayas, jalabiyas, and traditional Middle Eastern attire. We combine traditional elegance with contemporary style using premium fabrics and intricate details. Custom designs for everyday wear or special occasions.",
    price: "UGX 120,000 - 600,000/outfit",
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=400",
    icon: "🧕",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },

  // Home Counseling, Nursing & Care
  {
    id: "marriage-counseling",
    name: "Marriage Counseling",
    category: "Home Counseling, Nursing & Care",
    subcategory: "Marriage Counseling",
    description: "Professional marriage and relationship counseling.",
    fullDescription:
      "Licensed counselors provide confidential marriage and relationship therapy in your home. We help couples improve communication, resolve conflicts, and strengthen their relationship. Our compassionate approach creates a safe space for honest dialogue and healing. Individual and couples sessions available.",
    price: "UGX 80,000 - 200,000/session",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400",
    icon: "💑",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "addiction-therapy",
    name: "Addiction Therapy",
    category: "Home Counseling, Nursing & Care",
    subcategory: "Addiction Therapy",
    description: "Professional addiction counseling and support.",
    fullDescription:
      "Certified addiction counselors provide evidence-based therapy for substance abuse and behavioral addictions. We offer personalized treatment plans, coping strategies, and ongoing support. Our confidential services help individuals and families navigate recovery with compassion and expertise.",
    price: "UGX 100,000 - 250,000/session",
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=400",
    icon: "🤝",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },

  // Personal ICT Trainers
  {
    id: "web-design",
    name: "Web Design Training",
    category: "Personal ICT Trainers",
    subcategory: "Web Design",
    description: "Learn web design and development.",
    fullDescription:
      "Professional web developers teach HTML, CSS, JavaScript, and modern frameworks. We provide hands-on training in responsive design, user experience, and web development best practices. Our personalized approach helps you build real projects while learning. Suitable for beginners to intermediate learners.",
    price: "UGX 50,000 - 120,000/session",
    rating: 4.6,
    image: "/placeholder.svg?height=300&width=400",
    icon: "🌐",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "graphics-design",
    name: "Graphics Design Training",
    category: "Personal ICT Trainers",
    subcategory: "Graphics Design",
    description: "Professional graphics design training.",
    fullDescription:
      "Expert designers teach Adobe Photoshop, Illustrator, and other design tools. Learn logo design, branding, digital illustration, and photo editing. Our practical approach focuses on real-world projects and portfolio development. Perfect for aspiring designers or business owners wanting design skills.",
    price: "UGX 45,000 - 110,000/session",
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎨",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
  {
    id: "video-editing",
    name: "Video Editing Training",
    category: "Personal ICT Trainers",
    subcategory: "Video Editing",
    description: "Learn professional video editing.",
    fullDescription:
      "Professional video editors teach industry-standard software including Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve. Learn cutting, transitions, color grading, audio mixing, and effects. Our hands-on training prepares you for YouTube content creation, professional editing, or personal projects.",
    price: "UGX 50,000 - 120,000/session",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎬",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Added demo video
  },
]
