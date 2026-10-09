let carrito = [];
let restauranteActual = "";
let categoriaActual = "";
let vistaActual = "panel-inicio";

const NUMERO_WHATSAPP = "50253062335";

const negociosPorCategoria = {
    "restaurantes": [
        { nombre: "CEVICHES FISH EXPRESS", envioGratis: true, img: "https://i.ibb.co/qMC0wHPv/Gemini-Generated-Image-juo5lgjuo5lgjuo5.jpg" },
        { nombre: "TAQUERO MUCHO", envioGratis: true, img: "https://tse3.mm.bing.net/th/id/OIP.qe7T7Csz67hNeMv8u4vGqwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { nombre: "POLLO DELY ROSY", envioGratis: true, img: "https://i.pinimg.com/736x/18/4f/c4/184fc416f0e739d24fa767f4ce1fb717.jpg" },
        { nombre: "LA ESQUITERA", envioGratis: false, img: "https://scontent.fgua6-1.fna.fbcdn.net/v/t39.30808-6/462151797_122123828918440075_5487415173012030278_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=C-ilmz_3JhgQ7kNvwGxKA9N&_nc_oc=AdrSQ2eOsNsxVXkGVc63uWq6DpCtTPkoKe_C68H1IvamWEtC-HkTdTzJjys4NuLpsm4&_nc_zt=23&_nc_ht=scontent.fgua6-1.fna&_nc_gid=xJxtPu93MWXDQpNDLIG_Gw&_nc_ss=7a2a8&oh=00_AQPRPzLSSXDFbF0ZEUQZLYu8zgRPG98Gqur_8diXUAIL1Q&oe=6ACB99A9" },
        { nombre: "LA SICILIANA", envioGratis: false, img: "https://tse1.mm.bing.net/th/id/OIP.wTIHkJCHLmqCnBpLtw7vvwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { nombre: "POLLO GRANJERO", envioGratis: false, img: "https://tse2.mm.bing.net/th/id/OIP.o0i_j3gt56YaiL7XiTpfgAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { nombre: "DOMINOS EXPRESS", envioGratis: false, img: "https://tse4.mm.bing.net/th/id/OIP.y0F_StlyjW83DR4e5klmZwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { nombre: "CARNITAS EL GORDO", envioGratis: false, img: "https://static.vecteezy.com/system/resources/previews/048/006/291/large_2x/pork-dumplings-chef-free-vector.jpg" },
        { nombre: "LA NEVERIA", envioGratis: false, img: "img/neveria.webp" },
        { nombre: "HOLANDESA", envioGratis: false, img: "img/holandesa.webp" }
    ],
    "farmacia": [
        { nombre: "FARMACIA MI SALUD", envioGratis: true, img: "https://static.vecteezy.com/system/resources/previews/006/303/724/original/pharmacy-logo-template-icon-symbol-design-free-vector.jpg" },
        { nombre: "BELLO OASIS", envioGratis: false, img: "img/bello-oasis.webp" }
    ],
    "mercado": [
        { nombre: "VERDULERÍA FRESH", envioGratis: true, img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300" },
        { nombre: "CARNICERIA EL RANCHO", envioGratis: false, img: "https://static.vecteezy.com/system/resources/previews/006/981/131/original/fresh-meat-premium-beef-logo-free-vector.jpg" },
        { nombre: "MERCADITO ORIENTE", envioGratis: false, img: "https://www.creativefabrica.com/wp-content/uploads/2024/12/09/Modern-Ecommerce-Website-Logo-SVG-Vector-Graphics-111628754-1-580x387.jpg" }
    ],
    "otros": [
        { nombre: "TOTALPLAST", envioGratis: true, img: "img/plast.webp" },
        { nombre: "MOTOS HONDA", envioGratis: true, img: "https://toppng.com/uploads/thumbnail/honda-logo-11540236620o3erbhp25m.png" },
        { nombre: "1VEA HOGAR", envioGratis: true, img: "img/1vea.webp" },
        { nombre: "ELECTRÓNICA EXPRESS", envioGratis: false, img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=300" }
    ]
};

const infoRestaurantes = {
    "CEVICHES FISH EXPRESS": { envioGratis: true },
    "TAQUERO MUCHO": { envioGratis: true },
    "POLLO DELY ROSY": { envioGratis: true },
    "LA ESQUITERA": { envioGratis: false },
    "LA SICILIANA": { envioGratis: false },
    "POLLO GRANJERO": { envioGratis: false },
    "DOMINOS EXPRESS": { envioGratis: false },
    "CARNITAS EL GORDO": { envioGratis: false },
    "LA NEVERIA": { envioGratis: false },
    "HOLANDESA": { envioGratis: false },
    "FARMACIA MI SALUD": { envioGratis: true },
    "BELLO OASIS": { envioGratis: false },
    "VERDULERÍA FRESH": { envioGratis: true },
    "CARNICERIA EL RANCHO": { envioGratis: false },
    "MERCADITO ORIENTE": { envioGratis: false },
    "TOTALPLAST": { envioGratis: true },
    "MOTOS HONDA": { envioGratis: true },
    "1VEA HOGAR": { envioGratis: true },
    "ELECTRÓNICA EXPRESS": { envioGratis: false }
};

const menus = {
    "CEVICHES FISH EXPRESS": [
        { nombre: "ceviche mixto mediano", precio: 50, descripcion: "Mariscos frescos surtidos marinados en zumo de limón con cilantro, cebolla picada y galletas saladas.", imagen: "https://www.laylita.com/recetas/wp-content/uploads/1-Ceviche-de-camaron-640x640.jpg" },
        { nombre: "ceviche mixto grande", precio: 90, descripcion: "Porción familiar de camarón y pescado con sazón especial de la casa, aguacate y acompañamientos.", imagen: "https://www.laylita.com/recetas/wp-content/uploads/1-Ceviche-de-camaron-640x640.jpg" },
        { nombre: "ceviche de camaron mediano", precio: 50, descripcion: "Camarones seleccionados curtidos en limón con tomate, cebolla, salsa inglesa y un toque picante.", imagen: "https://www.guatemala.com/fotos/2020/04/ceviche-885x500.jpg" },
        { nombre: "ceviche de camaron tamaño grande", precio: 90, descripcion: "Camarones seleccionados curtidos en limón con tomate, cebolla, salsa inglesa y un toque picante.", imagen: "https://www.guatemala.com/fotos/2020/04/ceviche-885x500.jpg" },
        { nombre: "michelada gallo", precio: 30, descripcion: "Cerveza Gallo bien fría preparada con mix especial de limón, sal, tajín y salsas.", imagen: "https://static.wixstatic.com/media/c5644f_c3fd01cfadeb4de0ad37c307e254a2d5~mv2.jpg/v1/fill/w_980,h_1470,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c5644f_c3fd01cfadeb4de0ad37c307e254a2d5~mv2.jpg" },
        { nombre: "Gaseosa en lata", precio: 6, descripcion: "Lata fría salvavidas sabor uva, limon o naranja.", imagen: "https://latorremx.vtexassets.com/arquivos/ids/190394-800-auto?v=638494109579900000&width=800&height=auto&aspect=true", opciones: ["Uva", "Limón", "Naranja"] }
    ],
    "TAQUERO MUCHO": [
        { nombre: "Quesa Birria", precio: 35, descripcion: "3 tortillas rellenas de carne de res deshebrada con abundante queso", imagen: "" },
        { nombre: "Doraditas de Birria", precio: 35, descripcion: "tortilla dorada con carne deshebrada", imagen: "" },
        { nombre: "Mega Birria", precio: 60, descripcion: "tortilla grande rellena de carne de res deshebrada y abundante queso", imagen: "" },
        { nombre: "Costra de Queso", precio: 40, descripcion: "queso a la plancha tostado y crujiente", imagen: "" },
        { nombre: "Burrito de Birria", precio: 35, descripcion: "tortilla de harina con carne de birria y complementos", imagen: "" },
        { nombre: "Birria Men", precio: 45, descripcion: "sopa de fideos cocidos con consome de birria y una abundante mezcla de birria y queso", imagen: "" },
        { nombre: "Taco al Pastor", precio: 30, descripcion: "taco tradicional mexicano con carne de cerdo", imagen: "" },
        { nombre: "Taco de Asada", precio: 30, descripcion: "tortilla tradicional mexicana con carne de res", imagen: "" },
        { nombre: "Taco de Pollo", precio: 30, descripcion: "tortilla tradicional mexicana con carne de pollo", imagen: "" },
        { nombre: "Taco de Longaniza", precio: 30, descripcion: "tortilla tradicional mexicana con una mezcla de longaniza y especies", imagen: "" },
        { nombre: "Taco de Chorizo", precio: 30, descripcion: "tortilla tradicional mexicana con carne picada de chorizo", imagen: "" },
        { nombre: "Quesadilla de Asada", precio: 35, descripcion: "tortilla de harina con carne de res y una mezcla de queso", imagen: "" },
        { nombre: "Quesadilla al Pastor", precio: 35, descripcion: "tortilla de harina con carne de cerdo y una mezcla de queso", imagen: "" },
        { nombre: "Quesadilla de Pollo", precio: 35, descripcion: "tortilla de harina con carne de pollo y una mezcla de queso", imagen: "" },
        { nombre: "Bandeja de 15 Tacos", precio: 160, descripcion: "15 tacos mixtos con acompañamientos", imagen: "" },
        { nombre: "Bandeja de 12 Tacos", precio: 135, descripcion: "12 tacos mixtos con acompañamientos", imagen: "" },
        { nombre: "Bandeja de 20 Tacos", precio: 200, descripcion: "20 tacos mixtos con acompañamientos", imagen: "" },
        { nombre: "Piña Colada", precio: 30, descripcion: "coctel dulce y refrescante elaborada con jugo de piña principalmente", imagen: "" },
        { nombre: "Cafe Helado", precio: 30, descripcion: "bebida refrescante con hielo hecha a base de cafe", imagen: "" },
        { nombre: "Michelada", precio: 35, descripcion: "mezcla de jugos vegetales y cerveza", imagen: "" },
        { nombre: "Bebida Natural", precio: 10, descripcion: "Fresco natural preparado al día (Horchata, Jamaica o Tamarindo).", imagen: "https://media.istockphoto.com/id/1171303132/photo/strawberry-cocktail-and-strawberry-on-wooden-table-with-a-blank-space-for-a-text.jpg?s=1024x1024&w=is&k=20&c=7up1VlKOlVHW6V-HQp7IyC5J-WS2xbEYdd3RD3YxfC4=", opciones: ["Horchata", "Jamaica", "Tamarindo"] }
    ],
    "POLLO DELY ROSY": [
        { nombre: "Combo 1 Pieza (1Papas + 1Ensalada)", precio: 20, descripcion: "Pieza de pollo crujiente + papas fritas y ensalada", imagen: "https://static.vecteezy.com/system/resources/previews/073/675/187/large_2x/fried-chicken-and-french-fries-free-png.png" },
        { nombre: "Combo 2 Piezas (1Papas + 1Ensalada)", precio: 30, descripcion: "Dos piezas de pollo acompañadas de 1 porcion de papas fritas y 1 ensalada.", imagen: "https://tse3.mm.bing.net/th/id/OIP.vuytQ9IbZyLeWM6A5BoakwHaF0?r=0&w=1920&h=1510&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { nombre: "Combo 3 Piezas (1Papas + 1Ensalada)", precio: 37, descripcion: "Tres piezas de pollo frito con 1 porcion de papa y 1 ensalada", imagen: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=300" },
        { nombre: "1 Papa", precio: 7, descripcion: "Complemento extra individual", imagen: "https://static.vecteezy.com/system/resources/previews/059/482/403/non_2x/crispy-golden-french-fries-served-in-a-red-container-for-a-delicious-fast-food-snack-french-fries-food-fast-food-snack-isolated-lunch-take-out-free-png.png" },
        { nombre: "1 Ensalada", precio: 7, descripcion: "Complemento extra individual.", imagen: "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_150/bfubmka0kj0j23n1ndnx" },
        { nombre: "Papas Locas", precio: 15, descripcion: "Papas fritas con salsa y mayonesa", imagen: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcnibWid62HSACJCV9jl2pbaLD0xj-XybCaS6AR_GCix25V9xBbEWNMVPOjuIXDH10_7XAyAlFa5Au3GsMv27ZjVVArSq7hwomRSM-j1Bt37dUKXuc82mXF7h_lQOq_O_POXPtKvg?key=ls6I_YEY3fzKA7j1A3GHLg" },
        { nombre: "Gaseosa en lata", precio: 8, descripcion: "Bebida gaseosa Coca Cola en lata.", imagen: "img/cocacola.webp" }
    ],
    "LA ESQUITERA": [
        { nombre: "ESQUITE NORMAL ", precio: 25, descripcion: "granos de maiz con queso, salsa,mayonesa y chips", imagen: "https://img.freepik.com/premium-photo/esquite-mexican-corn-salad-traditional-street-food-from-mexico_338367-2311.jpg?w=300" },
        { nombre: "ESQUITE GRANDE", precio: 35, descripcion: "granos de maiz con queso, salsa,mayonesa y chips", imagen: "https://img.freepik.com/premium-photo/esquite-mexican-corn-salad-traditional-street-food-from-mexico_338367-2311.jpg?w=300" },
        { nombre: "SOPA MARUCHAN", precio: 37, descripcion: "sopa maruchan original preparada", imagen: "https://aygueylansing.com/wp-content/uploads/2023/11/SopaMaruchanPreparada.png" },
        { nombre: "Gaseosa en lata", precio: 8, descripcion: "Bebida gaseosa Coca Cola en lata.", imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300" }
    ],
    "LA SICILIANA": [
        { nombre: "Pizza Personal", precio: 20, descripcion: "Pizza individual de 4 rebanadas horneada en piedra con salsa de tomate y queso mozzarella.", imagen: "img/personal-sici.webp" },
        { nombre: "Pizza Carnilover", precio: 65, descripcion: "Pizza grande cargada con pepperoni, salchicha italiana, jamón, tocino crocante y extra queso.", imagen: "img/carnilover-sici.webp" },
        { nombre: "Pizza Hawaiana", precio: 60, descripcion: "Combinación clásica de piña caramelizada en almíbar, trozos de jamón premium y queso derretido.", imagen: "img/hawai-sici.webp" },
        { nombre: "Pizza Grande Extra Queso", precio: 55, descripcion: "Pizza familiar de 8 porciones bañada en doble capa de queso mozzarella fundido.", imagen: "img/extra-queso-sici.webp" },
        { nombre: "2 Pizzas Grandes (+ 8 Canelitas)", precio: 90, descripcion: "Super combo de 2 pizzas familiares a elección más 8 deliciosos palitroques dulces con canela.", imagen: "img/combo1-sici.webp" },
        { nombre: "1L de Pepsi", precio: 8, imagen: "https://strand.1uponline.co.za/image/cache/images500/6009510806861-500x500.webp", descripcion: "Botella desechable de 1 Litro para compartir." }
    ],
    "POLLO GRANJERO": [
        { nombre: "Menu 1 pieza", precio: 25, descripcion: "1 pieza (no pechuga) + 1 papa + 1 ensalada", imagen: "https://tb-static.uber.com/prod/image-proc/processed_images/b4119674e9468e902f62efaf88e8d949/fb86662148be855d931b37d6c1e5fcbe.jpeg" },
        { nombre: "Menu 2 piezas", precio: 35, descripcion: "2 piezas(no pechuga) + 1 papa + 1 ensalada", imagen: "https://tb-static.uber.com/prod/image-proc/processed_images/b4119674e9468e902f62efaf88e8d949/fb86662148be855d931b37d6c1e5fcbe.jpeg" },
        { nombre: "Menu 3 piezas", precio: 45, descripcion: "3 piezas(no pechuga) + 1 papa + 1 ensalada ", imagen: "https://tb-static.uber.com/prod/image-proc/processed_images/b4119674e9468e902f62efaf88e8d949/fb86662148be855d931b37d6c1e5fcbe.jpeg" },
        { nombre: "Combo 5 piezas", precio: 85, descripcion: "5 piezas(no pechuga) + 2 papas + 2 ensaladas", imagen: "https://cdn.telediario.cr/uploads/media/2026/03/19/cadena-cierra-sus-operaciones-en.jpg" },
        { nombre: "Combo 8 piezas", precio: 120, descripcion: "8 piezas(no pechuga)+3 papas +3 ensaladas", imagen: "https://images.rappi.co.cr/restaurants_background/7367_1654882378124.png?e=webp&d=800x800&q=70" },
        { nombre: "Hamburguesa", precio: 22, descripcion: "Hamburguesa doble con queso", imagen: "https://pricelisto-files.s3.us-east-2.amazonaws.com/pollo-granjero-cr/hamburguesa-doble-torta.png" },
        { nombre: "Porcion de papas", precio: 8, descripcion: "papas fritas normales", imagen: "https://pricelisto-files.s3.us-east-2.amazonaws.com/pollo-granjero-cr/papa-frita-pequena.png" },
        { nombre: "Ensalada", precio: 8, descripcion: "ensalada de repollo individual", imagen: "https://pricelisto-files.s3.us-east-2.amazonaws.com/pollo-granjero-cr/ensalada-de-repollo.png" },
        { nombre: "Pastelito", precio: 8, descripcion: "unidad de pastelito relleno con manzana", imagen: "https://tse1.mm.bing.net/th/id/OIP.x6D1n4exd2z5Eah7-kNryQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { nombre: "Gaseosa en lata", precio: 6, descripcion: "gaseosa salvavidas sabor limon,uva o naranja", imagen: "https://latinshopatl.com/cdn/shop/files/Salvavidaslimon1.jpg?v=1749489837&width=1946", opciones: ["Limón", "Uva", "Naranja"] },
        { nombre: "1L de Pepsi", precio: 8, imagen: "https://strand.1uponline.co.za/image/cache/images500/6009510806861-500x500.webp", descripcion: "Botella desechable de 1 Litro para compartir." }
    ],
    "DOMINOS EXPRESS": [
        { nombre: "Pizza Pepperoni", precio: 55, descripcion: "rebanadas de pepperoni doradito y queso fundido.", imagen: "img/peperoni-domi.webp" },
        { nombre: "Pizza Tropical", precio: 65, descripcion: "Sabor agridulce especial con jamón, piña fresca y salsa de la casa.", imagen: "img/tropical-domi.webp" },
        { nombre: "Pizza Carnivora", precio: 70, descripcion: "jamón, pepperoni, carne molida y salchicha frita.", imagen: "img/carnivora-domi.webp" },
        { nombre: "Pizzerola", precio: 20, descripcion: "queso derretido y especias italianas.", imagen: "img/pizzerola-domi.webp" },
        { nombre: "Mega Empanada", precio: 20, descripcion: "Empanada gigante frita rellena de carne picada sazonada con vegetales.", imagen: "img/empanada-domi.webp" },
        {nombre: "Gaseosa Salvavidas en Lata", precio: 6, descripcion: "gaseosa salvavidas del sabor que prefieras", imagen: "https://latinshopatl.com/cdn/shop/files/Salvavidaslimon1.jpg?v=1749489837&width=1946", opciones: ["limon","uva","naranja"]},
        { nombre: "Pepsi 1 Litro", precio: 8, descripcion: "Bebida familiar refrescante Pepsi de 1 L.", imagen: "https://strand.1uponline.co.za/image/cache/images500/6009510806861-500x500.webp" }
    ],
    "CARNITAS EL GORDO": [
        { nombre: "Libra de Carnitas", precio: 55, descripcion: "Carne de cerdo frita en su propia grasa bien doradita por fuera y suave por dentro", imagen: "img/carnitas.webp" },
        { nombre: "Media Libra de Carnitas", precio: 30, descripcion: "Media libra de crujiente carnita de cerdo acompañada de rábanos picado", imagen: "img/carnitas.webp" },
        { nombre: "Porcion de Mushque", precio: 15, descripcion: "Delicioso chicharrón picadito en pasta con especias regionales tradicionales.", imagen: "img/mushque.webp" },
        { nombre: "Docena de Longaniza", precio: 12, descripcion: "12 longanizas asadas con hierbas aromáticas y ajo listas para disfrutar.", imagen: "img/longas.webp" },
        { nombre: "1 litro de Pepsi", precio: 8, descripcion: "Botella helada de 1 litro.", imagen: "https://strand.1uponline.co.za/image/cache/images500/6009510806861-500x500.webp" },
        { nombre: "gaseosa en lata", precio: 6, descripcion: "Lata personal de gaseosa salvavidas surtida.", imagen: "https://salvavidasenlinea.com.gt/wp-content/uploads/2025/01/Foto_AppTuHogar_1500px_BLUE-800x800.jpg", opciones: ["Uva", "Limón", "Naranja", "Cola"] }
    ], 
    "LA NEVERIA": [
        { nombre: "Helado wafle", precio: 12, descripcion: "cono normal con una bola de helado", imagen: "img/wafle.webp", opciones: ["Vainilla", "Chocolate", "Fresa", "Menta"] },
        { nombre: "Banana split", precio: 25, descripcion: "3 bolas de helado acompañadas de banano y galleta", imagen: "img/banana-split.webp" },
        { nombre: "Sundae", precio: 22, descripcion: "3 bolas de rico helado", imagen: "img/sundae.webp", opciones: ["Vainilla con Chocolate", "Fresa", "Mixto"] },
        { nombre: "Pastel de Helado pequeño", precio: 75, descripcion: "de 4 a 6 porciones segun medida", imagen: "img/pastel-pe.webp" },
        { nombre: "Pastel de Helado Mediano", precio: 95, descripcion: "pastel de 8 a 12 porciones segun medida", imagen: "img/pastel-g.webp" },
        { nombre: "Pastel de Helado Grande", precio: 140, descripcion: "pastel de 16 a 20 porciones segun medida", imagen: "img/pastel-pe.webp" }
    ],
    "HOLANDESA": [
        { nombre: "Pastel California", precio: 120, descripcion: "12 a 16 porciones", imagen: "img/pastel-california.webp" },
        { nombre: "Porcion 3 leches", precio: 12, descripcion: "porcion para una persona", imagen: "img/3leches.webp" },
        { nombre: "Pastel de frutas", precio: 85, descripcion: "12 a 16 porciones", imagen: "img/pastel-frutas.webp" },
        { nombre: "Coca Cola", precio: 8, descripcion: "Bebida gaseosa en lata de 354ml", imagen: "img/cocacola.webp" },
        { nombre: "3 litros de gaseosa", precio: 20, descripcion: "Botella tamaño gigante Tiky o similar de 3 Litros.", imagen: "https://salvavidasenlinea.com.gt/wp-content/uploads/2022/08/TIKY-3-LTS.png", opciones: ["Tiky", "Uva", "Limon"] }
    ],
    "FARMACIA MI SALUD": [
        { nombre: "Acetaminofén 500mg MK blister", precio: 10, descripcion: "Analgésico para adultos en presentacion de 10 tabletas comprimidas.", imagen: "img/aceta-mk.webp" },
        { nombre: "Acetaminofen Farmandina 100mg", precio: 40, descripcion: "analgesico y antipiretico para niños", imagen: "img/acetaminofen-farmandina.webp" },
        { nombre: "kalmanervo 25000 x 1 ampolla", precio: 72, descripcion: "inyeccion para el dolor,inflamacion de nervios,dolor lumbar.contiene vitamina B1.B12 y B16", imagen: "img/kalmanervo.webp" },
        { nombre: "Dolo kalmanervo x 2 ampollas", precio: 75, descripcion: "inyeccion con vitaminas B1.B12.B6 y diclofenaco para dolores fuertes e inflamacion de nervios", imagen: "img/kalmanervo.webp" },
        { nombre: "Sucradel suspencion 200ml", precio: 180, descripcion: "sucralfato 1g/5ml de la marca Fardel", imagen: "img/sucradel.webp" },
        { nombre: "Ketorodel(ketorolaco) 20mg Fardel", precio: 98, descripcion: "caja x 10 tabletas recubiertas de ketorolaco trometamol 20mg", imagen: "img/ketorodel.webp" },
        { nombre: "Toallas Humedas Family Choice", precio: 14, descripcion: "presentacion extra larga con 80und para el uso diario en bebes y adultos", imagen: "img/toallitas.webp" },
        { nombre: "Suero Oral Hidravida", precio: 18, descripcion: "Sabores surtidos, indica cual es tu favorito luego de realizar el pedido", imagen: "img/hidravida.webp", opciones: ["Fresa", "Coco", "Manzana", "Natural"] }
    ],
    "BELLO OASIS": [
        { nombre: "Shampoo Calypso Keratina", precio: 25, descripcion: "shampoo de 1 litro repara,nutre,protege y alisa tu cabello", imagen: "img/calypso-keratina.webp" },
        { nombre: "Shampoo Calypso Anticaspa", precio: 25, descripcion: "shampoo de 1 litro anti caspa", imagen: "img/calypso-anticaspa.webp" },
        { nombre: "Shampoo Tammy Aguacate", precio: 10, descripcion: "shampoo tammy de 500ml da brillo y aroma agradable", imagen: "img/tammy-aguacate.webp" },
        { nombre: "Axe Dark Temperation", precio: 23, descripcion: "desodorante en aerosol de 150ml", imagen: "img/axe-dark.webp" },
        { nombre: "Axe Fragancia+Frescura", precio: 23, descripcion: "desodorante en aerosol de 150ml", imagen: "img/axe-frescura.webp" },
        { nombre: "Ponds Clarant B3", precio: 22, descripcion: "crema antimanchas e hidratante, unifica el tono de piel y desvanece manchas oscuras", imagen: "img/ponds-clarant.webp" }
    ],
    "VERDULERÍA FRESH": [
        { nombre: "Libra de Tomate", precio: 6, descripcion: "Tomate fresco y seleccionado.", imagen: "img/" },
        { nombre: "Unidad de Cebolla", precio: 2, descripcion: "excelente tamaño para cocinar.", imagen: "img/" },
        { nombre: "Libra de Papa", precio: 8, descripcion: "excelente tamaño para cocinar.", imagen: "img/" },
        { nombre: "Par de Pepinos", precio: 8, descripcion: "excelente tamaño para cocinar.", imagen: "img/" },
        { nombre: "Limon Criollo 5und", precio: 4, descripcion: "excelente tamaño para cocinar.", imagen: "img/" },
        { nombre: "Libra de ejote", precio: 13, descripcion: "ejote grande y tierno", imagen: "img/" }
    ],
    "CARNICERIA EL RANCHO": [
        { nombre: "Libra de Carne simple", precio: 35, descripcion: ", Corte fino, carne fresca", imagen: "https://carnesideal.tienda/cdn/shop/products/RES58-1_7d85edfa-86a8-4dcd-b56e-30ac1a296c49_800x.jpg?v=1627841553" },
        { nombre: "Libra de Carne Preparada", precio: 40, descripcion: ", Carne fresca, corte fino y preparacion ideal para churrasco", imagen: "https://carnesnaveda.pe/wp-content/uploads/2023/03/churrascos.jpg" },
        { nombre: "Libra de hueso", precio: 28, descripcion: " Hueso con carne ideal para caldos", imagen: "https://amazingribs.com/wp-content/uploads/2025/08/beef-short-ribs-1200.jpeg" },
        { nombre: "Libra de Carne molida", precio: 30, descripcion: ", Carne fresca del dia", imagen: "https://superxtrapanama.vtexassets.com/arquivos/ids/162811-800-auto?v=637896282367100000&width=800&height=auto&aspect=true" },
        { nombre: "10 Longanizas de res", precio: 10, descripcion: "Tamaño noble y sabor incomparable ", imagen: "https://www.donmoddang.go.th/index/add_file/GhIOVtvWed63019.jpg" }
    ],
    "MERCADITO ORIENTE": [
        { nombre: "Arroz Molinero 1 libra", precio: 7.50, descripcion: "primera calidad.", imagen: "img/" },
        { nombre: "Azucar Morena", precio: 20, descripcion: "2000g azucar tulipan fortificada con vitamina A", imagen: "img/" },
        { nombre: "Azucar Caña Real 5.4lb", precio: 24, descripcion: "azucar blanca", imagen: "img/" },
        { nombre: "Axucar Morena 400g", precio: 4.50, descripcion: "azucar tulipan morena fortificada con vitamina A", imagen: "img/" },
        { nombre: "Azucar Caña Real 500g", precio: 5.50, descripcion: "azucar blanca", imagen: "img/" },
        { nombre: "Gaseosa Ting", precio: 13, descripcion: "3L sabor a Toronja", imagen: "img/" },
        { nombre: "Huevo mediano ", precio: 33, descripcion: "Carton de 30und, huevo blanco", imagen: "img/" },
        { nombre: "Bebida Lactea Foremost", precio: 12, descripcion: "alternativa saludable 0% colesterol, 946ml", imagen: "img/" },
        { nombre: "Cafe Quetzal Sello Verde", precio: 18, descripcion: "tostado y molido", imagen: "img/" },
        { nombre: "Cafe Musun Suave 260g", precio: 68, descripcion: "estudio.", imagen: "img/" },
        { nombre: "Cafe Musun suave 46g", precio: 18, descripcion: "aroma penetrante", imagen: "img/" },
        { nombre: "Pan Blanco La mejor", precio: 14, descripcion: "rápida cocción y gran sabor.", imagen: "img/" },
        { nombre: "Aceite ideal 175ml", precio: 5, descripcion: "alimentos diarios.", imagen: "img/" }
    ],
    "TOTALPLAST": [
        { nombre: "Basurero pequeño", precio: 30, descripcion: "basurero con tapa, colores surtido", imagen: "img/" },
        { nombre: "Basurero 20L con abrefacil", precio: 90, descripcion: "basurero de la marca mega, abre la tapa con el pie", imagen: "img/" },
        { nombre: "Set de Pichel 5L", precio: 25, descripcion: "hermoso pichel nuevo diseño con 4 vasos.", imagen: "img/" },
        { nombre: "Organizador Plastico", precio: 60, descripcion: "4 gavetas con diseño de ratan y color surtido", imagen: "img/" },
        { nombre: "Vaso Diamante", precio: 10, descripcion: "hermoso y resistente, capacidad de hasta 650ml.", imagen: "img/" }
    ],
    "MOTOS HONDA": [
        { nombre: "XBLADE 160 mod2026", precio: 17890, descripcion: "mecanica,gasolina/carburada, diseño deportivo y baja altura", imagen: "https://th.bing.com/th/id/R.ce16a0823a94576db70b92c330f4397a?rik=6rlDgteiVsdpHg&pid=ImgRaw&r=0" },
        { nombre: "XR190L 2026", precio: 28490, descripcion: "doble proposito versatil, tablero digital y puerto usb", imagen: "https://motos.honda.com.ec/uploads/galeria/XR190L_R.jpg" },
        { nombre: "XR150L 2026", precio: 16290, descripcion: "doble proposito versatil y resistente para uso diario", imagen: "https://tse2.mm.bing.net/th/id/OIP.3jWa1kxtLKUUg0DXYeHO5QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { nombre: "CRF300 RALLY 2026", precio: 68190, descripcion: "Trail ligera y de aventura 27.5 CV y 26.6 Nm", imagen: "https://tse1.mm.bing.net/th/id/OIP.1e4M1aCoGjk0G-9vvNWuQgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { nombre: "CRF125F 2026", precio: 34190, descripcion: "Todo terreno de iniciacion, 8.9HP y 10.2Nm", imagen: "https://powersports.honda.com/motorcycle/trail/crf125f/-/media/products/family/crf125f/trim-hero/gallery/crf125f/2026/red/2026-crf125f-red-gallery-01.png" },
        { nombre: "CB300F TWISTER 2026", precio: 35890, descripcion: "Naked deportiva de frenos ABS y control de traccion HSTC, iluminacion led completa", imagen: "https://www.iamabiker.com/wp-content/uploads/2022/08/Honda-CB300F-HD-wallpaper-6-1536x864.jpg" },
        { nombre: "NAVI 110cc 2026", precio: 12990, descripcion: "Hasta 160km por galon, compartimiento de carga y 7.8HP", imagen: "https://tse2.mm.bing.net/th/id/OIP.rywZJcCck72lj6cnRE7n4QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" }
    ],
    "1VEA HOGAR": [
        { nombre: "Cobertor de Sillon", precio: 270, descripcion: "Directo de fabrica, ideal para sala con sillones de 1,2 y 3 plazas, varios colores", imagen: "img/cobertor-sillon.webp", opciones: ["Beige", "Gris", "Azul Marino", "Vino"] },
        { nombre: "Cobertor de Lavadora", precio: 180, descripcion: "Impermeable, resistente y facil de lavar, se adapta a cualquier lavadora", imagen: "img/lavadora.webp" },
        { nombre: "Cortinas Blackout ", precio: 150, descripcion: "medida 137 x 213cm, argollas metalicas, varios colores", imagen: "img/cortina.webp", opciones: ["Beige", "Gris", "Negro", "Azul"] },
        { nombre: "Cubrecama Queen", precio: 270, descripcion: "incluye fundas para almohada, variedad de diseños", imagen: "img/cobertor-cama.webp", opciones: ["Diseño 1", "Diseño 2", "Diseño 3"] },
        { nombre: "Cubrecama King", precio: 280, descripcion: "incluye fundas para almohada, variedad de diseños", imagen: "img/cubre-king.webp", opciones: ["Diseño 1", "Diseño 2"] },
        { nombre: "Frazada(poncho) de Terciopelo ", precio: 190, descripcion: "240x220cm facil de lavar, super suave y duradero, varios colores", imagen: "img/poncho.webp", opciones: ["Gris", "Azul", "Café", "Vino"] },
        { nombre: "Cubrecama con Vuelo Queen ", precio: 270, descripcion: "incluye fundas para almohadas, variedad de diseños", imagen: "img/cubre-vuelo.webp", opciones: ["Diseño 1", "Diseño 2"] },
        { nombre: "Cubrecama con Vuelo King ", precio: 275, descripcion: "incluye funda para almohada, variedad de diseños", imagen: "img/vuelo-king.webp", opciones: ["Diseño 1", "Diseño 2"] },
        { nombre: "Toalla L ", precio: 75, descripcion: "76x147cm, 4 colores disponibles", imagen: "img/toalla.webp", opciones: ["Celeste", "Blanco", "Beige", "Gris"] },
        { nombre: "Cojin enguantado 2und ", precio: 70, descripcion: "45x45cm 6 colores disponibles", imagen: "img/enguantada.webp", opciones: ["Gris", "Beige", "Rojo", "Azul", "Negro", "Café"] },
        { nombre: "Almohada Blanca 2und", precio: 70, descripcion: "tamaño mediano de 74x48cm ", imagen: "img/almohada-blanca.webp" }
    ],
    "ELECTRÓNICA EXPRESS": [
        { nombre: "Type-C", precio: 45, descripcion: "Cable de carga rápida", imagen: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300" },
        { nombre: "Audífonos Bluetooth Inalámbricos", precio: 95, descripcion: "Controles táctiles y estuche de carga.", imagen: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300" }
    ]
};

// Persistencia en LocalStorage
function guardarCarrito() {
    localStorage.setItem('dash_carrito_502', JSON.stringify(carrito));
}

function cargarCarritoGuardado() {
    const guardado = localStorage.getItem('dash_carrito_502');
    if (guardado) {
        try {
            carrito = JSON.parse(guardado);
            actualizarTotal();
        } catch (e) {
            carrito = [];
        }
    }
}

// Navegación con Historial Retroceso
function cambiarVista(nuevaVista, push = true) {
    const panelPrincipal = document.getElementById('seccion-panel-principal');
    const seccionRestaurantes = document.getElementById('seccion-restaurantes');
    const seccionMenu = document.getElementById('seccion-menu');
    const modalCarrito = document.getElementById('modal-carrito');

    panelPrincipal.style.display = 'none';
    seccionRestaurantes.style.display = 'none';
    seccionMenu.style.display = 'none';

    if (nuevaVista === 'panel-inicio') {
        panelPrincipal.style.display = 'block';
        modalCarrito.style.display = 'none';
    } else if (nuevaVista === 'restaurantes') {
        seccionRestaurantes.style.display = 'block';
        modalCarrito.style.display = 'none';
    } else if (nuevaVista === 'menu') {
        seccionMenu.style.display = 'block';
        modalCarrito.style.display = 'none';
    } else if (nuevaVista === 'carrito') {
        if (vistaActual === 'menu') seccionMenu.style.display = 'block';
        else if (vistaActual === 'restaurantes') seccionRestaurantes.style.display = 'block';
        else panelPrincipal.style.display = 'block';

        modalCarrito.style.display = 'flex';
        verDetalleCarrito();
    }

    if (push && vistaActual !== nuevaVista) {
        history.pushState({ vista: nuevaVista }, '', `#${nuevaVista}`);
    }

    if (nuevaVista !== 'carrito') {
        vistaActual = nuevaVista;
    }
}

window.addEventListener('popstate', (e) => {
    if (e.state && e.state.vista) {
        cambiarVista(e.state.vista, false);
    } else {
        cambiarVista('panel-inicio', false);
    }
});

function irACategoria(cat) {
    categoriaActual = cat;
    document.getElementById('buscador-restaurante').value = '';
    const titulo = document.getElementById('titulo-categoria-activa');

    if (cat === 'restaurantes') titulo.textContent = "Restaurantes y Antojos";
    else if (cat === 'farmacia') titulo.textContent = "Farmacias y vitaminas";
    else if (cat === 'mercado') titulo.textContent = "Mercado";
    else titulo.textContent = "Otros Servicios";

    renderizarTiendas(negociosPorCategoria[cat] || []);
    cambiarVista('restaurantes');
}

function renderizarTiendas(tiendas) {
    const grid = document.getElementById('grid-restaurantes');
    grid.innerHTML = "";

    tiendas.forEach(tienda => {
        const badgeText = tienda.envioGratis ? '🚚 Envío Gratis' : '🚚 Envío con Costo';
        const badgeClass = tienda.envioGratis ? 'badge-gratis' : 'badge-costo';

        grid.innerHTML += `
            <div class="card-restaurante" onclick="abrirMenu('${tienda.nombre}')">
                <span class="badge-envio ${badgeClass}">${badgeText}</span>
                <img src="${tienda.img}" alt="${tienda.nombre}">
                <h3>${tienda.nombre}</h3>
            </div>
        `;
    });
}

function volverAPanelPrincipal() {
    document.getElementById('buscador-restaurante').value = '';
    buscarRestaurante();
    cambiarVista('panel-inicio');
}

function volverANegocios() {
    cambiarVista('restaurantes');
}

function buscarRestaurante() {
    const filtro = document.getElementById('buscador-restaurante').value.toLowerCase();
    
    if (vistaActual === 'panel-inicio' && filtro.length > 0) {
        irACategoria('restaurantes');
    }

    const tarjetas = document.querySelectorAll('#grid-restaurantes .card-restaurante');
    tarjetas.forEach(tarjeta => {
        const nombreRestaurante = tarjeta.querySelector('h3').textContent.toLowerCase();
        tarjeta.style.display = nombreRestaurante.includes(filtro) ? 'block' : 'none';
    });
}

// Renderizado del Menú con opciones de colores/sabores dinámicos
function abrirMenu(nombreRestaurante) {
    restauranteActual = nombreRestaurante;
    document.getElementById('titulo-restaurante').textContent = nombreRestaurante;

    const contenedor = document.getElementById('lista-productos');
    contenedor.innerHTML = "";

    const productos = menus[nombreRestaurante] || [];
    productos.forEach((prod, index) => {
        const descHtml = prod.descripcion ? `<div class="producto-desc">${prod.descripcion}</div>` : '';
        
        let opcionesHtml = '';
        if (prod.opciones && prod.opciones.length > 0) {
            opcionesHtml = `
                <div style="margin: 6px 0;">
                    <label style="font-size: 11px; font-weight: bold; color: #555;">Elige opción:</label>
                    <select id="opcion-${index}" style="width: 100%; padding: 4px; border-radius: 4px; border: 1px solid #ccc; font-size: 12px;">
                        ${prod.opciones.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                    </select>
                </div>
            `;
        }

        contenedor.innerHTML += `
            <div class="producto-card">
                <div class="producto-detalle">
                    <img src="${prod.imagen}" alt="${prod.nombre}" class="producto-img">
                    <div class="producto-info">
                        <h4>${prod.nombre}</h4>
                        ${descHtml}
                        ${opcionesHtml}
                        <p>Q${prod.precio}.00</p>
                    </div>
                </div>
                <button class="btn-agregar" onclick="agregarConOpcion('${prod.nombre}', ${prod.precio}, ${index})">+ Agregar</button>
            </div>
        `;
    });

    cambiarVista('menu');
}

// Captura la opción seleccionada antes de enviar al carrito
function agregarConOpcion(nombre, precio, indexProd) {
    let seleccionExtra = "";
    const selectElement = document.getElementById(`opcion-${indexProd}`);
    
    if (selectElement) {
        seleccionExtra = selectElement.value;
    }

    let nombreFinal = nombre;
    if (seleccionExtra) {
        nombreFinal = `${nombre} (${seleccionExtra})`;
    }

    agregarAlCarritoDirecto(nombreFinal, precio);
}

function agregarAlCarritoDirecto(nombre, precio) {
    if (carrito.length > 0 && carrito[0].restaurante !== restauranteActual) {
        const cambiar = confirm(`Tu carrito contiene productos de "${carrito[0].restaurante}". ¿Deseas vaciar el carrito para agregar productos de "${restauranteActual}"?`);
        if (cambiar) {
            carrito = [];
        } else {
            return;
        }
    }

    const itemExistente = carrito.find(item => item.nombre === nombre && item.restaurante === restauranteActual);
    
    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, restaurante: restauranteActual, cantidad: 1 });
    }
    
    guardarCarrito();
    actualizarTotal();
}

function cambiarCantidad(index, cambio) {
    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }
    guardarCarrito();
    actualizarTotal();
    verDetalleCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    actualizarTotal();
    verDetalleCarrito();
}

function actualizarTotal() {
    let total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    let cantidadTotal = carrito.reduce((sum, item) => sum + item.cantidad, 0);

    document.getElementById('total-txt').innerText = `Q${total}.00`;
    document.getElementById('cant-txt').innerText = cantidadTotal;
}

function abrirModalCarrito() {
    cambiarVista('carrito');
}

function cerrarModalCarrito() {
    cambiarVista(vistaActual, false);
}

function verDetalleCarrito() {
    const contenedorLista = document.getElementById('carrito-lista');
    const seccionDatos = document.getElementById('seccion-datos');
    const boxEnvio = document.getElementById('info-envio-box');

    if (carrito.length === 0) {
        contenedorLista.innerHTML = '<p style="text-align:center; padding:20px; color:#777;">El carrito está vacío</p>';
        seccionDatos.style.display = 'none';
        boxEnvio.style.display = 'none';
        return;
    }

    let html = "";
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        html += `
            <div class="cart-item">
                <div>
                    <strong>${item.nombre}</strong><br>
                    <small style="color:#666;">${item.restaurante} - Q${subtotal}.00</small>
                </div>
                <div class="cant-controles">
                    <button class="btn-cant" onclick="cambiarCantidad(${index}, -1)">-</button>
                    <span style="font-weight:bold; padding: 0 4px;">${item.cantidad}</span>
                    <button class="btn-cant" onclick="cambiarCantidad(${index}, 1)">+</button>
                    <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">🗑</button>
                </div>
            </div>
        `;
    });

    contenedorLista.innerHTML = html;
    seccionDatos.style.display = 'block';

    const restNombre = carrito[0].restaurante;
    const esGratis = infoRestaurantes[restNombre] ? infoRestaurantes[restNombre].envioGratis : false;

    if (esGratis) {
        boxEnvio.innerHTML = `<strong>Cobertura:</strong> Envíos a casco urbano y aldeas. El mínimo de consumo varía según distancia.`;
        boxEnvio.style.display = 'block';
    } else {
        boxEnvio.innerHTML = `Su pedido aplica tarifa de envío adicional, (se coordina por WhatsApp según dirección)`;
        boxEnvio.style.display = 'block';
    }
}

function enviarAWhatsApp() {
    const nombreInput = document.getElementById('cliente-nombre');
    const direccionInput = document.getElementById('cliente-direccion');
    const referenciaInput = document.getElementById('cliente-referencia');

    const nombre = nombreInput.value.trim();
    const direccion = direccionInput.value.trim();
    const referencia = referenciaInput.value.trim();

    let hayError = false;

    if (!nombre) {
        nombreInput.classList.add('campo-error');
        hayError = true;
    } else {
        nombreInput.classList.remove('campo-error');
    }

    if (!direccion) {
        direccionInput.classList.add('campo-error');
        hayError = true;
    } else {
        direccionInput.classList.remove('campo-error');
    }

    if (hayError) {
        alert("Por favor completa los campos obligatorios (Nombre y Dirección).");
        return;
    }

    const restNombre = carrito[0].restaurante;
    let total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

    let mensaje = `*¡Nuevo Pedido en Dash Delivery 502!* \n\n`;
    mensaje += ` *Negocio:* ${restNombre}\n`;
    mensaje += ` *Cliente:* ${nombre}\n`;
    mensaje += ` *Dirección:* ${direccion}\n`;
    if (referencia) {
        mensaje += ` *Referencia:* ${referencia}\n`;
    }
    mensaje += `\n*Detalle del Pedido:*\n`;

    carrito.forEach(item => {
        mensaje += `• ${item.cantidad}x ${item.nombre} (Q${item.precio * item.cantidad}.00)\n`;
    });

    mensaje += `\n *Subtotal Productos:* Q${total}.00\n`;
    
    const esGratis = infoRestaurantes[restNombre] ? infoRestaurantes[restNombre].envioGratis : false;
    mensaje += esGratis ? ` *Envío:* GRATIS\n` : ` *Envío:* Pendiente de calcular según ubicación\n`;

    mensaje += `\n¡Quedo a la espera de la confirmación de mi pedido!`;

    carrito = [];
    localStorage.removeItem('dash_carrito_502');
    actualizarTotal();

    const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
}

window.addEventListener('DOMContentLoaded', () => {
    history.replaceState({ vista: 'panel-inicio' }, '', '#inicio');
    cargarCarritoGuardado();
});