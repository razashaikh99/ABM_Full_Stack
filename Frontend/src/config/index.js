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
        feedback: "Customer support was very helpful and responsive. Highly recommend Albayt Mart!",
        rating: 4.8,
    },
    {
        id: 3,
        name: "Sara Ahmed",
        feedback: "Loved the drinkware collection — stylish and durable. Will shop again!",
        rating: 4.9,
    },
];

export const heroCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    accessibility: true,
    lazyLoad: "ondemand",
};

export const newArrivalsCarouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    accessibility: true,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
};

export const defaultShopFilters = { category: "All", price: "All", rating: "All" };
export const shopCategories = ["All", "Cookware", "Drinkware", "Appliances", "Storage", "Kitchen Accessory"];
export const shopSortOptions = [
    { value: "default", label: "Default" },
    { value: "priceLowHigh", label: "Price: Low to High" },
    { value: "priceHighLow", label: "Price: High to Low" },
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
    brand: "AlBayt Mart",
    material: "Stainless Steel",
    warranty: "1 Year",
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
    {
        id: 1,
        title: "Good things start in the kitchen.",
        subtitle:
            "Thoughtfully chosen cookware, clever tools and everyday essentials. A little more joy in every routine.",
        image: images.heroKitchenBackground,
        btnText: "Shop Now",
    },
    {
        id: 2,
        title: "Make room for the everyday.",
        subtitle: "Beautifully practical essentials that make your home feel a little more like you.",
        image: images.aboutAlbaytMart,
        btnText: "Shop Now",
    },
    {
        id: 3,
        title: "Simple things. Better living.",
        subtitle: "From the first cup of tea to dinner with family. Find something for every moment.",
        image: images.heroKitchenTable,
        btnText: "Shop Now",
    },
];

export const homeCategories = [
    { id: 1, name: "Cookware", image: images.categoryBakingAndDessert, to: "/shop?category=Cookware" },
    { id: 2, name: "Drinkware", image: images.categoryDrinkware, to: "/shop?category=Drinkware" },
    {
        id: 3,
        name: "Appliances",
        image: images.productAppliancesCategoryAppliances,
        to: "/shop?category=Appliances",
    },
    { id: 4, name: "Kitchen storage", image: images.categoryKitchenStorage, to: "/shop?category=Storage" },
    {
        id: 5,
        name: "Kitchen accessories",
        image: images.categoryChoppersAndSlicers,
        to: "/shop?category=Kitchen%20Accessory",
    },
];

export const featuredProducts = [
    {
        id: "featured-1",
        name: "Non-Stick Frying Pan",
        price: 2499,
        originalPrice: 2999,
        image: images.nonStickFryingPan,
        category: "Cookware",
        isFeatured: true,
    },
    {
        id: "featured-2",
        name: "Electric Kettle with Temperature Control",
        price: 3199,
        image: images.temperatureControlElectricKettle,
        category: "Appliances",
        discount: 15,
    },
    {
        id: "featured-3",
        name: "Premium Glass Water Bottle Set (2 Pieces)",
        price: 999,
        image: images.premiumGlassWaterBottleSet,
        category: "Drinkware",
        isBestSeller: true,
    },
    {
        id: "featured-4",
        name: "Food Storage Containers Set (6 Pieces)",
        price: 2799,
        originalPrice: 3499,
        image: images.foodStorageContainersSet,
        category: "Storage",
        discount: 20,
    },
];

export const newArrivalProducts = [
    {
        id: "arrival-1",
        name: "Premium Cooking Pot Set",
        price: 4999,
        image: images.premiumCookingPotSet,
        category: "Kitchen Accessory",
    },
    {
        id: "arrival-2",
        name: "Smart Blender Pro 2.0",
        price: 3899,
        image: images.smartBlenderPro,
        category: "Kitchen Accessory",
    },
    {
        id: "arrival-3",
        name: "Ceramic Tea Cups Set",
        price: 1799,
        image: images.ceramicTeaCupsSet,
        category: "Kitchen Accessory",
    },
    {
        id: "arrival-4",
        name: "Microwave-Safe Lunch Box",
        price: 1299,
        image: images.microwaveSafeLunchBox,
        category: "Kitchen Accessory",
    },
    {
        id: "arrival-5",
        name: "Electric Hand Mixer",
        price: 2599,
        image: images.electricHandMixer,
        category: "Kitchen Accessory",
    },
    {
        id: "arrival-6",
        name: "Smart Blender Pro 2.0",
        price: 3899,
        image: images.smartBlenderPro,
        category: "Kitchen Accessory",
    },
];

export const homeTestimonials = [
    {
        name: "Ayesha Khan",
        comment:
            "I absolutely love the ceramic cookware I ordered! The quality is amazing and delivery was super fast. Highly recommended!",
        rating: 5,
    },
    {
        name: "Ali Raza",
        comment:
            "Beautiful utensils and very durable. I’ve been using them daily and they still look brand new!",
        rating: 4,
    },
    {
        name: "Sara Ahmed",
        comment:
            "Excellent service and the kitchen tools are stylish yet functional. I’ll definitely shop again!",
        rating: 5,
    },
];

export const homeServices = [
    {
        id: 1,
        title: "Fast Delivery",
        description: "Get your kitchen essentials delivered quickly at your doorstep.",
        icon: FaShippingFast,
    },
    {
        id: 2,
        title: "Thoughtfully selected",
        description: "Practical essentials, selected with everyday life in mind.",
        icon: FaLock,
    },
    {
        id: 4,
        title: "Here to help",
        description: "Talk to our team Monday to Saturday, 9 am to 9 pm.",
        icon: FaHeadset,
    },
];

export const homeFeatures = [
    {
        icon: Truck,
        title: "Fast & Safe Delivery",
        desc: "We ensure your kitchenware reaches you safely and on time, every time.",
    },
    {
        icon: ShieldCheck,
        title: "Premium Quality",
        desc: "All our cookware and utensils are crafted from top-grade, durable materials.",
    },
    {
        icon: Leaf,
        title: "Eco-Friendly Products",
        desc: "We care about your health and the planet — sustainable materials only.",
    },
    {
        icon: Star,
        title: "Made for everyday",
        desc: "Useful finds for the little routines that make a house a home.",
    },
];

export const contactInfoItems = [
    {
        icon: FaPhoneAlt,
        title: "Phone",
        detail: "+92-329-8660141",
        link: "tel:+923298660141",
    },
    {
        icon: FaEnvelope,
        title: "Email",
        detail: "info.albaytmart@gmail.com",
        link: "mailto:info.albaytmart@gmail.com",
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

export const billingFormDefaults = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
};

export const checkoutSettings = {
    shipping: 300,
    unavailableMessage: "Online ordering is currently unavailable. Your cart has been saved.",
};

export const forgotPasswordFormDefaults = { email: "" };

export const loginFormDefaults = { email: "", password: "" };

export const registerFormDefaults = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export const navigationLinks = [
    { label: "Shop all", to: "/shop" },
    { label: "Cookware", to: "/shop?category=Cookware" },
    { label: "Drinkware", to: "/shop?category=Drinkware" },
    { label: "Appliances", to: "/shop?category=Appliances" },
    { label: "Storage", to: "/shop?category=Storage" },
];

export const footerLinks = [
    { label: "Our story", to: "/about" },
    { label: "Contact us", to: "/contact" },
    { label: "Returns & refunds", to: "/return-policy" },
    { label: "Your account", to: "/auth" },
];

export const authLayoutConfig = {
    image: images.aboutAlbaytMart,
    eyebrow: "A HOME FOR THE EVERYDAY",
    title: "Little things.\nA better everyday.",
    description: "Thoughtfully selected kitchen and home essentials, all in one place.",
};

export const billingFields = [
    { name: "fullName", label: "Full name", autoComplete: "name", placeholder: "Your full name", wide: true },
    {
        name: "email",
        label: "Email address",
        type: "email",
        autoComplete: "email",
        placeholder: "you@example.com",
    },
    { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel", placeholder: "03XX XXXXXXX" },
    {
        name: "address",
        label: "Street address",
        autoComplete: "street-address",
        placeholder: "House number, street and area",
        wide: true,
    },
    { name: "city", label: "City", autoComplete: "address-level2", placeholder: "Karachi" },
    { name: "postalCode", label: "Postal code", autoComplete: "postal-code", placeholder: "Postal code" },
    { name: "country", label: "Country", autoComplete: "country-name", placeholder: "Pakistan", wide: true },
];

export const contactFields = [
    { name: "name", label: "Your name", placeholder: "Full name", autoComplete: "name" },
    {
        name: "email",
        label: "Email address",
        placeholder: "you@example.com",
        type: "email",
        autoComplete: "email",
    },
    { name: "subject", label: "Subject", placeholder: "How can we help?", optional: true },
];

export const aboutValues = [
    {
        title: "Useful by nature",
        description:
            "Good design should make your day easier. We look for pieces that earn their place in your home.",
    },
    {
        title: "Everyday, considered",
        description:
            "From a well-made pan to a place for everything. Small details make a meaningful difference.",
    },
    {
        title: "People come first",
        description: "A real team, a helpful conversation and a shopping experience built around you.",
    },
];

export const priceFilters = ["All", "Under 1000", "1000 - 5000", "5000+"];
export const ratingFilters = ["All", "4★ & above", "3★ & above"];
export const catalogProducts = [...products, ...featuredProducts, ...newArrivalProducts];

export const contactMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14469.427072907525!2d67.0575571!3d24.953973549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3408545e8af11%3A0xd557fabb6ac61c9!2sSakhi%20Hassan%20Block%20N%20North%20Nazimabad%20Town%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1765355394898!5m2!1sen!2s";

export const buttonVariants = {
    primary: "btn btn-primary",
    outline: "btn btn-outline",
    icon: "icon-button",
    plain: "",
};

export const authDefaults = { user: null, token: null };

export const cartDefaults = { cartItems: [], isCartOpen: false };

export const storageKeys = { user: "user", token: "token", cart: "kk_cart_items" };
