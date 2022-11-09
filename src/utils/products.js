const products = [
    {
      id: 10,
      name: "Poltrona Butaca Luna Gris Rustica",
      stock: 23,
      cost: 7190,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 100,
      image: [
        "https://cdn11.bigcommerce.com/s-cn83m7oitc/images/stencil/1280x1280/attribute_rule_images/10511_source_1649790778.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Sofá",
        id: 1
      },
      brand: {
        id: 95,
        name: "Butaca"
      },
      reviews: []
    },
    {
      id: 20,
      name: "Butaca Poltrona Lara",
      stock: 100,
      cost: 17290,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 100,
      image: [
        "https://cdn11.bigcommerce.com/s-cn83m7oitc/images/stencil/1280x1280/attribute_rule_images/9051_source_1649857943.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Sofá",
        id: 1
      },
      brand: {
        id: 95,
        name: "Butaca"
      },
      reviews: [
        {
          "comment": "Muy cómodo",
          "rating": "4"
        }
      ]
    },
    {
      id: 30,
      name: "Sofá Marsala promo descuentos",
      stock: 13,
      cost: 21990,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 100,
      image: [
        "https://cdn11.bigcommerce.com/s-cn83m7oitc/images/stencil/1280x1280/attribute_rule_images/12976_source_1666274940.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 1,
      brandId: 99,
      packingId: null,
      category: {
        name: "Sofá",
        id: 1
      },
      brand: {
        id: 99,
        name: "2 cuerpos"
      },
      reviews: []
    },
    {
      id: 40,
      name: "Sofá Esquinero UCRANIA",
      stock: 13,
      cost: 25690,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 100,
      image: [
        "https://cdn11.bigcommerce.com/s-cn83m7oitc/images/stencil/640w/attribute_rule_images/10983_source_1660681102.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 1,
      brandId: 100,
      packingId: null,
      category: {
        name: "Sofá",
        id: 1
      },
      brand: {
        id: 100,
        name: "2 cuerpos"
      },
      reviews: []
    },
    {
      id: 50,
      name: "Aparador 100% Madera 3 Cajones 2 puertas",
      stock: 55,
      cost: 11060,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 100,
      image: [
        "https://cdn11.bigcommerce.com/s-cn83m7oitc/images/stencil/1280x1280/attribute_rule_images/9184_source_1641653513.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 2,
      brandId: 10,
      packingId: null,
      category: {
        name: "Aparadores",
        id: 2
      },
      brand: {
        id: 10,
        name: "Aparadores madera"
      },
      reviews: []
    },
    {
      id: 60,
      name: "Aparador 100% Madera 5 Cajones",
      stock: 20,
      cost: 9490,
      description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 100,
      image: [
        "https://cdn11.bigcommerce.com/s-cn83m7oitc/images/stencil/640w/attribute_rule_images/9284_source_1647011649.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 2,
      brandId: 10,
      packingId: null,
      category: {
        name: "Aparadores madera",
        id: 2
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 70,
      name: "Lámpara colgante Nórdico perforado blanca",
      stock: 89,
      cost: 2990,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 100,
      image: [
        "https://sodimac.scene7.com/is/image/SodimacUruguay/2353784?fmt=jpg&fit=fit,1&wid=420&hei=420"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 3,
      brandId: 16,
      packingId: null,
      category: {
        name: "Lampara",
        id: 3
      },
      brand: {
        id: 16,
        name: "Lampara colgante"
      },
      reviews: []
    },
    {
      id: 80,
      name: "Lámpara colgante jaula negra",
      stock: 100,
      cost: 3090,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 100,
      image: [
        "https://sodimac.scene7.com/is/image/SodimacUruguay/2353652?fmt=jpg&fit=fit,1&wid=420&hei=420"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 3,
      brandId: 16,
      packingId: null,
      category: {
        name: "Lámpara",
        id: 3
      },
      brand: {
        id: 16,
        name: "Lampara Techo"
      },
      reviews: []
    },
    {
      id: 90,
      name: "Espejo Narvik hexagonal dorado 71,5 x 65 cm",
      stock: 100,
      cost: 3899,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 100,
      image: [
        "https://sodimac.scene7.com/is/image/SodimacUruguay/8737908?fmt=jpg&fit=fit,1&wid=420&hei=420"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 4,
      brandId: 16,
      packingId: null,
      category: {
        name: "Espejos",
        id: 4
      },
      brand: {
        id: 16,
        name: "Espejos pared"
      },
      reviews: []
    },
    {
      id: 100,
      name: "Espejo hexagonal dorado 39 x 45 cm",
      stock: 122,
      cost: 1150,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 100,
      image: [
        "https://sodimac.scene7.com/is/image/SodimacUruguay/8722935?fmt=jpg&fit=fit,1&wid=420&hei=420"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      categoryId: 4,
      brandId: 17,
      packingId: null,
      category: {
        name: "Espejos",
        id: 4
      },
      brand: {
        id: 17,
        name: "espejo hexagonal"
      },
      reviews: []
    }
  ];

  module.exports = {
    products,
  }