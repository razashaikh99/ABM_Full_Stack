import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import * as images from "../assets/images";
import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";
import { Truck, ShieldCheck, Leaf, Star } from "lucide-react";
import {
    aboutAlbaytMart,
    airtightStorageJarSet,
    categoryDrinkware,
    electricKettle,
    glassWaterBottle,
    productAppliancesBlender,
    productCookwareFryingPan,
    productStorageContainers,
} from "../assets/images";
export const products = [
    {
        id: "p1",
        name: "Non-Stick Fry Pan",
        category: "Cookware",
        price: 2500,
        oldPrice: 3200,
        image: productCookwareFryingPan,
        description: "Premium non-stick fry pan for healthy cooking.",
        rating: 4.5,
    },
    {
        id: "p2",
        name: "Electric Kettle",
        category: "Appliances",
        price: 4200,
        oldPrice: 4800,
        image: electricKettle,
        description: "Fast-boil electric kettle with stainless steel body.",
        rating: 4.7,
    },
    {
        id: "p3",
        name: "Glass Water Bottle",
        category: "Drinkware",
        price: 1200,
        oldPrice: 1500,
        image: glassWaterBottle,
        description: "Eco-friendly reusable glass bottle with bamboo lid.",
        rating: 4.3,
    },
    {
        id: "p4",
        name: "Airtight Storage Jar Set",
        category: "Storage",
        price: 3500,
        oldPrice: 3900,
        image: airtightStorageJarSet,
        description: "Set of 4 airtight glass jars for dry food storage.",
        rating: 4.8,
    },
];

export const categories = [
    {
        id: 1,
        name: "Cookware",
        image: productCookwareFryingPan,
    },
    {
        id: 2,
        name: "Appliances",
        image: productAppliancesBlender,
    },
    {
        id: 3,
        name: "Drinkware",
        image: categoryDrinkware,
    },
    {
        id: 4,
        name: "Storage",
        image: productStorageContainers,
    },
];

export const testimonials = [
    {
        id: 1,
        name: "Ayesha Khan",
        feedback:
            "Excellent product quality! The cookware set I ordered was exactly as described and arrived quickly.",
        rating: 5,
    },
    {
        id: 2,
        name: "Ali Raza",
        feedback:
            "Customer support was very helpful and responsive. Highly recommend Albayt Mart!",
        rating: 4.8,
    },
    {
        id: 3,
        name: "Sara Ahmed",
        feedback:
            "Loved the drinkware collection — stylish and durable. Will shop again!",
        rating: 4.9,
    },
];

export const heroCarouselSettings = {
    dots: true, infinite: true, speed: 700, slidesToShow: 1, slidesToScroll: 1,
    autoplay: true, autoplaySpeed: 4000, arrows: false, pauseOnHover: true,
    pauseOnFocus: true, accessibility: true, lazyLoad: "ondemand",
};

export const newArrivalsCarouselSettings = {
    dots: true, infinite: false, speed: 500, slidesToShow: 4, slidesToScroll: 1,
    arrows: false, swipeToSlide: true, accessibility: true,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
};

export const defaultShopFilters = { category: "All", price: "All", rating: "All" };
export const shopCategories = ["All", "Cookware", "Drinkware", "Appliances", "Storage"];
export const shopSortOptions = [
    { value: "default", label: "Default" },
    { value: "priceLowHigh", label: "Price: Low to High" },
    { value: "priceHighLow", label: "Price: High to Low" },
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "rating", label: "Top Rated" },
];
export const shopSettings = { productsPerPage: 20, defaultSort: "default" };
export const ratingPositions = [1, 2, 3, 4, 5];
export const authTabs = [
    { id: "login", label: "Login" },
    { id: "register", label: "Register" },
    { id: "forgot", label: "Forgot" },
];
export const productDefaults = {
    description: "This is a high-quality kitchenware item, perfect for your daily cooking needs.",
    brand: "AlBayt Mart", material: "Stainless Steel", warranty: "1 Year",
};

export const checkoutDemoItems = [
        {
            id: "1",
            name: "Non-Stick Fry Pan",
            price: 2500,
            quantity: 1,
            image: productCookwareFryingPan,
        },
        {
            id: "2",
            name: "Steel Spoon Set",
            price: 1200,
            quantity: 2,
            image: categoryDrinkware,
        },
    ];


export const contactPageConfig = { heading: "Contact Us" };

export const aboutPageConfig = { image: aboutAlbaytMart };

export const returnPolicyConfig = { heading: "Return & Refund Policy" };

export const orderConfirmationConfig = {
    heading: "Thank You for Your Order!",
    items: checkoutDemoItems,
};

export const notFoundConfig = { heading: "Oops! Page Not Found" };

export const heroSlides = [
    { id: 1, title: "Upgrade Your Style", subtitle: "Discover the Latest Trends in Fashion", image: images.heroKitchenBackground, btnText: "Shop Now" },
    { id: 2, title: "New Arrivals Are Here", subtitle: "Fresh Looks for Every Occasion", image: images.heroModernRoom, btnText: "Shop Now" },
    { id: 3, title: "Exclusive Offers", subtitle: "Get Up to 50% Off on Selected Items", image: images.heroKitchenTable, btnText: "Shop Now" },
];

export const homeCategories = [
    { id: 1, name: "Baking & Dessert", image: images.categoryBakingAndDessert },
    { id: 2, name: "Drinkware", image: images.categoryDrinkware },
    { id: 3, name: "Choppers & Slicers", image: images.categoryChoppersAndSlicers },
    { id: 4, name: "Kitchen Storage", image: images.categoryKitchenStorage },
    { id: 5, name: "Cutter & Sharpenrs", image: images.categoryCuttersAndSharpeners },
];

export const featuredProducts = [
    { id: "featured-1", name: "Non-Stick Frying Pan", price: 2499, originalPrice: 2999, image: images.nonStickFryingPan, category: "Cookware", isFeatured: true },
    { id: "featured-2", name: "Electric Kettle with Temperature Control", price: 3199, image: images.temperatureControlElectricKettle, category: "Appliances", discount: 15 },
    { id: "featured-3", name: "Premium Glass Water Bottle Set (2 Pieces)", price: 999, image: images.premiumGlassWaterBottleSet, category: "Drinkware", isBestSeller: true },
    { id: "featured-4", name: "Food Storage Containers Set (6 Pieces)", price: 2799, originalPrice: 3499, image: images.foodStorageContainersSet, category: "Storage", discount: 20 },
];

export const newArrivalProducts = [
    { id: "arrival-1", name: "Premium Cooking Pot Set", price: 4999, image: images.premiumCookingPotSet, category: "Kitchen Accessory" },
    { id: "arrival-2", name: "Smart Blender Pro 2.0", price: 3899, image: images.smartBlenderPro, category: "Kitchen Accessory" },
    { id: "arrival-3", name: "Ceramic Tea Cups Set", price: 1799, image: images.ceramicTeaCupsSet, category: "Kitchen Accessory" },
    { id: "arrival-4", name: "Microwave-Safe Lunch Box", price: 1299, image: images.microwaveSafeLunchBox, category: "Kitchen Accessory" },
    { id: "arrival-5", name: "Electric Hand Mixer", price: 2599, image: images.electricHandMixer, category: "Kitchen Accessory" },
    { id: "arrival-6", name: "Smart Blender Pro 2.0", price: 3899, image: images.smartBlenderPro, category: "Kitchen Accessory" },
];

export const homeTestimonials = [
    { name: "Ayesha Khan", comment: "I absolutely love the ceramic cookware I ordered! The quality is amazing and delivery was super fast. Highly recommended!", rating: 5 },
    { name: "Ali Raza", comment: "Beautiful utensils and very durable. I’ve been using them daily and they still look brand new!", rating: 4 },
    { name: "Sara Ahmed", comment: "Excellent service and the kitchen tools are stylish yet functional. I’ll definitely shop again!", rating: 5 },
];

export const homeServices = [
    { id: 1, title: "Fast Delivery", description: "Get your kitchen essentials delivered quickly at your doorstep.", icon: FaShippingFast },
    { id: 2, title: "Secure Payment", description: "We ensure safe and encrypted transactions for every order.", icon: FaLock },
    { id: 4, title: "24/7 Support", description: "Our customer support is always available to assist you.", icon: FaHeadset },
];

export const homeFeatures = [
    { icon: Truck, title: "Fast & Safe Delivery", desc: "We ensure your kitchenware reaches you safely and on time, every time." },
    { icon: ShieldCheck, title: "Premium Quality", desc: "All our cookware and utensils are crafted from top-grade, durable materials." },
    { icon: Leaf, title: "Eco-Friendly Products", desc: "We care about your health and the planet — sustainable materials only." },
    { icon: Star, title: "Loved by Customers", desc: "Thousands of happy home chefs trust our products across the country." },
];

export const contactInfoItems = [
        {
            icon: FaPhoneAlt,
            title: "Phone",
            detail: "+92-329-8660141",
            link: "tel:+923001234567"
        },
        {
            icon: FaEnvelope,
            title: "Email",
            detail: "info.albaytmart@gmail.com",
            link: "mailto:info.albaytmart@gmail.com"
        },
        {
            icon: FaMapMarkerAlt,
            title: "Address",
            detail: "North Nazimabad, Karachi, Pakistan",
        },
        {
            icon: FaClock,
            title: "Working Hours",
            detail: "Mon - Sat: 9:00 AM - 9:00 PM",
        },
    ];

export const contactFormDefaults = { name: "", email: "", subject: "", message: "" };

export const billingFormDefaults = { fullName: "", email: "", phone: "", address: "", city: "", country: "", postalCode: "" };

export const checkoutSettings = {
    shipping: 300,
    unavailableMessage: "Online ordering is currently unavailable. Your cart has been saved."
};

export const forgotPasswordFormDefaults = { email: "" };

export const loginFormDefaults = { email: "", password: "" };

export const registerFormDefaults = {
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                };
