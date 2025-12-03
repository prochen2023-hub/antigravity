const products = [
    // 電動升降桌 (Electric)
    {
        id: 1,
        name: "【1212特賣】FLEXISPOT E7 電動升降桌 (三節式)",
        price: 13999,
        currency: "TWD",
        category: "電動升降桌",
        size: "large",
        isPromotion: true,
        promotionLabel: "FLEXISPOT 1212狂歡",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "FLEXISPOT 官網",
        rating: 4.9,
        reviews: 320
    },
    {
        id: 2,
        name: "【1212限定】MOTTI Alter 雙馬達電動升降桌",
        price: 15800,
        currency: "TWD",
        category: "電動升降桌",
        size: "large",
        isPromotion: true,
        promotionLabel: "MOTTI 年終大賞",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "MOTTI 官網",
        rating: 4.8,
        reviews: 150
    },
    {
        id: 3,
        name: "FUNTE 智慧型電動升降桌 (120x80)",
        price: 14500,
        currency: "TWD",
        category: "電動升降桌",
        size: "standard",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "FUNTE 官網",
        rating: 4.9,
        reviews: 560
    },
    {
        id: 10,
        name: "IKEA IDÅSEN 升降桌 (電動)",
        price: 19900,
        currency: "TWD",
        category: "電動升降桌",
        size: "large", // 160x80
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "IKEA 線上購物",
        rating: 4.6,
        reviews: 410
    },
    {
        id: 11,
        name: "Bestmade Stand 2 實木電動升降桌",
        price: 22800,
        currency: "TWD",
        category: "電動升降桌",
        size: "large",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "Bestmade",
        rating: 4.9,
        reviews: 210
    },
    {
        id: 12,
        name: "【1212特賣】PChome 24hr 電動升降桌",
        price: 7995,
        currency: "TWD",
        category: "電動升降桌",
        size: "standard",
        isPromotion: true,
        promotionLabel: "PChome 24hr 1212 購物節",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "PChome 24hr",
        rating: 4.5,
        reviews: 1500
    },
    {
        id: 13,
        name: "Standway 雙馬達電動升降桌",
        price: 12500,
        currency: "TWD",
        category: "電動升降桌",
        size: "standard",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "Yahoo 購物中心",
        rating: 4.7,
        reviews: 85
    },
    {
        id: 14,
        name: "FLEXISPOT E8 高階電動升降桌",
        price: 17999,
        currency: "TWD",
        category: "電動升降桌",
        size: "large",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "樂天市場",
        rating: 4.9,
        reviews: 42
    },

    // 手搖/氣壓升降桌 (Manual/Pneumatic)
    {
        id: 4,
        name: "IKEA BEKANT 升降桌 (手動)",
        price: 7990,
        currency: "TWD",
        category: "手搖/氣壓升降桌",
        size: "large", // 160x80
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "IKEA 線上購物",
        rating: 4.3,
        reviews: 890
    },
    {
        id: 5,
        name: "Standway 氣壓式升降桌",
        price: 6500,
        currency: "TWD",
        category: "手搖/氣壓升降桌",
        size: "standard",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "PChome 24h",
        rating: 4.5,
        reviews: 120
    },
    {
        id: 15,
        name: "IKEA TROTTEN 手搖升降桌",
        price: 5990,
        currency: "TWD",
        category: "手搖/氣壓升降桌",
        size: "standard", // 120x70
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "IKEA 線上購物",
        rating: 4.2,
        reviews: 650
    },
    {
        id: 16,
        name: "【Momo 1212】DFhouse 氣壓升降桌",
        price: 4280,
        currency: "TWD",
        category: "手搖/氣壓升降桌",
        size: "small",
        isPromotion: true,
        promotionLabel: "Momo 1212 狂歡",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "Momo 購物網",
        rating: 4.0,
        reviews: 95
    },

    // L型/轉角升降桌 (L-Shaped)
    {
        id: 6,
        name: "DEZCTOP Bifrost DB160 L型電動升降桌",
        price: 26900,
        currency: "TWD",
        category: "L型/轉角升降桌",
        size: "xl",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "DEZCTOP",
        rating: 4.9,
        reviews: 45
    },
    {
        id: 7,
        name: "FLEXISPOT E1L L型電動升降桌",
        price: 19999,
        currency: "TWD",
        category: "L型/轉角升降桌",
        size: "xl",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "Momo 購物網",
        rating: 4.7,
        reviews: 88
    },
    {
        id: 17,
        name: "FUNTE L型智慧升降桌",
        price: 23500,
        currency: "TWD",
        category: "L型/轉角升降桌",
        size: "xl",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "FUNTE 官網",
        rating: 4.8,
        reviews: 110
    },
    {
        id: 18,
        name: "MOTTI L-Shape 電動升降桌",
        price: 25800,
        currency: "TWD",
        category: "L型/轉角升降桌",
        size: "xl",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "FriDay 購物",
        rating: 4.8,
        reviews: 35
    },

    // 桌上型升降台 (Converters)
    {
        id: 8,
        name: "ErgoGrade 氣壓式桌上型升降台",
        price: 3990,
        currency: "TWD",
        category: "桌上型升降台",
        size: "small",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "蝦皮購物",
        rating: 4.6,
        reviews: 1200
    },
    {
        id: 9,
        name: "AKA 坐站兩用升降桌上台",
        price: 4500,
        currency: "TWD",
        category: "桌上型升降台",
        size: "small",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "PChome 24h",
        rating: 4.4,
        reviews: 330
    },
    {
        id: 19,
        name: "【樂天1212】FLEXISPOT M17 桌上型升降台",
        price: 3500,
        currency: "TWD",
        category: "桌上型升降台",
        size: "small",
        isPromotion: true,
        promotionLabel: "樂天 1212 購物節",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "Rakuten 樂天市場",
        rating: 4.5,
        reviews: 210
    },
    {
        id: 20,
        name: "【蝦皮12.12】X-Lift 筆電升降支架",
        price: 1200,
        currency: "TWD",
        category: "桌上型升降台",
        size: "small",
        isPromotion: true,
        promotionLabel: "蝦皮 12.12 生日慶",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=300&h=300",
        platform: "蝦皮購物",
        rating: 4.2,
        reviews: 2500
    }
];
