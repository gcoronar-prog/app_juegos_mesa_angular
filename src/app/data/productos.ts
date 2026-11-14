export interface Producto {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  precioAnterior?: number;
  descuento?: number;
  imagen: string;
  descripcion: string;
}

export const PRODUCTOS: Producto[] = [
  {
    id: 'booster-pokemon',
    nombre: 'Booster Pokémon',
    categoria: 'tcg',
    precio: 4990,
    imagen: 'img/booster-pokemon-tcg.png',
    descripcion:
      'Cada sobre de Pokémon Sword and Shield Lost Origin en Español contiene: 10 Cartas TCG Pokémon y un código para el juego on line.',
  },
  {
    id: 'tcg-lugia-ex',
    nombre: 'POKEMON TCG LUGIA EX SPECIAL COLLECT ESPAÑOL',
    categoria: 'tcg',
    precio: 33992,
    precioAnterior: 39990,
    descuento: 15,
    imagen: 'img/tcg-lugia-ex.webp',
    descripcion:
      'La colección special Pokémon TCG: Lugia ex incluye: 1 tarjeta promocional de aluminio con Lugia ex 1 tarjeta de aluminio de gran tamaño con Lugia ex 6 paquetes de refuerzo de Pokémon TCG Una tarjeta con código para Pokémon TCG Live',
  },
  {
    id: 'booster-magic',
    nombre: 'Booster Magic The Hobbit',
    categoria: 'tcg',
    precio: 9990,
    imagen: 'img/booster-magic-hobbit.webp',
    descripcion:
      'La aventura comienza más allá de la Comarca con The Hobbit\
                  Play Booster. Cada sobre abre un nuevo sendero hacia\
                  encuentros, personajes y tesoros inspirados en la legendaria\
                  travesía de The Hobbit, llevando su épica directamente a tus\
                  partidas de Magic: The Gathering. Características: Play\
                  Booster de Magic: The Gathering inspirado en The Hobbit, con\
                  cartas aleatorias para jugar, construir mazos y ampliar tu\
                  colección. Especificaciones: Producto oficial de Magic: The\
                  Gathering, formato Play Booster y edición en español (ESP).',
  },
  {
    id: 'carpeta-pokemon',
    nombre: 'Carpeta 4 bolsillos Mega Charizard',
    categoria: 'accesorios',
    precio: 12990,
    imagen: 'img/carpeta-4-bolsillos-mega-charizard-ultra-pro.jpg',
    descripcion:
      'La carpeta 4-Pocket Portfolio para Pokémon presenta una\
                  vibrante ilustración Mega Charizard Y en la portada y Mega\
                  Charizard X en la contraportada. Permite almacenar y proteger\
                  hasta 40 cartas tamaño estándar con carga simple o 80 cartas\
                  con doble carga en páginas de polipropileno seguras para\
                  archivo. Además, incluye espacio central para guardar hasta 4\
                  cartas Pokémon de tamaño oversized.',
  },
  {
    id: 'torre-dados',
    nombre: 'Torre de Dados a Color - Folded Space',
    categoria: 'accesorios',
    precio: 11892,
    precioAnterior: 13990,
    descuento: 15,
    imagen: 'img/torre-de-dados-a-color-folded-space.jpg',
    descripcion:
      ' Las láminas impresas de Evacore son de doble cara, por lo que\
                  puedes elegir qué lado usar en el exterior, ofreciendo dos\
                  opciones de color diferentes para la torre terminada. Las\
                  láminas también utilizan espuma azul marino, que combina muy\
                  bien con el diseño de impresión a color. La Dice Tower v2 es\
                  una excelente forma de probar nuestro material Evacore con\
                  impresión a color y ver cómo se construye uno de nuestros\
                  productos. El Evacore es suave al tacto, lo que lo hace ideal\
                  para guardar componentes de juegos, además de permitir que la\
                  torre de dados sea resistente y silenciosa al lanzar los\
                  dados.',
  },
  {
    id: 'portamazo-azul-gamegenic',
    nombre: 'Portamazo Bastion 100+ XL Azul GameGenic',
    categoria: 'accesorios',
    precio: 11990,

    imagen: 'img/portamazo-bastion-100-xl-azul-gamegenic.jpg',
    descripcion:
      'El modelo Bastion 100+ XL es una caja para mazos muy compacta\
                  y resistente que protege más de 100 cartas en doble funda con\
                  fundas interiores muy gruesas. Además, podrás ver la parte\
                  superior de la carta Commander sin tener que abrir la caja\
                  gracias a que está hecha de material translúcido y a la\
                  posición de las solapas de cierre. Su mecanismo de cierre\
                  innovador en un solo clic protege los mazos y, al mismo\
                  tiempo, permite acceder fácilmente a las cartas.',
  },
  {
    id: 'dnd-inicio-caja',
    nombre: 'Caja de inicio Dungeons & Dragons',
    categoria: 'rol',
    precio: 59990,
    imagen: 'img/caja-inicio-dnd.webp',
    descripcion:
      'Abre las puertas a una nueva era de aventuras con Héroes de\
                  las Tierras Fronterizas, una caja de inicio pensada para\
                  descubrir Dungeons & Dragons desde la mesa y comenzar a jugar\
                  prácticamente desde el primer momento. Explora el Wilderness,\
                  visita el Keep on the Borderlands y adéntrate en las\
                  peligrosas Caves of Chaos mientras tu grupo decide qué lugares\
                  explorar, qué desafíos enfrentar y cómo desarrollar su propia\
                  aventura.',
  },
  {
    id: 'pathfinder-reglas',
    nombre: 'Pathfinder Libro de reglas',
    categoria: 'rol',
    precio: 42492,
    precioAnterior: 49990,
    descuento: 15,
    imagen: 'img/pathfinder-reglas.jpg',
    descripcion:
      'Pathfinder dispondrá de una extensa línea de suplementos,\
                  especialmente módulos y campañas de aventuras ambientados en\
                  el fantástico mundo de Golarion.',
  },
  {
    id: 'dragonbane',
    nombre: 'Dragonbane',
    categoria: 'rol',
    precio: 42990,
    imagen: 'img/dragongane-caja.jpg',
    descripcion:
      'Al principio de los tiempos el universo estaba gobernado por\
                  dragones y demonios. Eran las fuerzas primordiales opuestas de\
                  las que nació la materia primitiva que dio sentido al mundo.\
                  Ley y orden contra caos y locura. Dragones contra demonios.\
                  Dragonbane es un juego de rol clásico lleno de fantasía, magia\
                  y misterios. Está diseñado desde cero para ofrecer aventuras\
                  rápidas, emocionantes y muy fáciles de dirigir, con muy poco\
                  tiempo de preparación. Dragonbane es un juego donde hay\
                  espacio tanto para las risas como para combates brutales que\
                  pongan a prueba a los aventureros más experimentados.',
  },
  {
    id: 'warhammer-aos',
    nombre: 'Comienza aqui con Warhammer Age of Sigmar (ESP) Citadel',
    categoria: 'wargames',
    precio: 18990,
    imagen: 'img/warhammer-aos.jpg',
    descripcion:
      'Warhammer Age of Sigmar es un juego de guerra estratégico de\
                  mesa lleno de acción. No importa con cuál de las muchas\
                  facciones únicas de guerreros, monstruos y extrañas criaturas\
                  elijas jugar, tendrás la oportunidad de hacerte con tu porción\
                  de los casi infinitos Reinos Mortales. En medio del caos y las\
                  batallas, coleccionarás, construirás y pintarás tu ejército en\
                  constante crecimiento, ¡y luego jugarás partidas de infarto\
                  contra otros fanáticos de Warhammer Age of Sigmar para ver\
                  quién emerge victorioso! Esta revista te brindará la\
                  información que necesitas para sumergirte en los extraños y\
                  hermosos Reinos Mortales. ¡Tu aventura comienza aquí!\
                  experimentados.',
  },
  {
    id: 'WH-Kill-Team',
    nombre: 'Kill Team Starter Set (Español) Citadel',
    categoria: 'wargames',
    precio: 90942,
    precioAnterior: 106990,
    descuento: 15,
    imagen: 'img/kill-team-starter-set-espanol-citadel.jpg',
    descripcion:
      'Este set de inicio incluye todo lo que necesitan dos jugadores\
                  para dar sus primeros pasos en Kill Team. Contiene dos equipos\
                  de exterminio completos: los Marines Espaciales sobrehumanos\
                  de los Ángeles de la Muerte y sus homólogos corruptos, los\
                  inmundos Marines de la Plaga de la Guardia de la Muerte.\
                  Además, con todas las demás herramientas y accesorios que\
                  necesitas, y una serie de escenarios introductorios, puedes\
                  familiarizarte con los conceptos básicos de las batallas\
                  tácticas a la velocidad del rayo.',
  },
  {
    id: 'LOTR-Edoras-Citadel',
    nombre: 'Lord of the Rings War Of The Rohirrim Battle Of Edoras Citadel',
    categoria: 'wargames',
    precio: 212990,
    imagen: 'img/lord-of-the-rings-war-of-the-rohirrim-battle-of-edoras-citadel.jpg',
    descripcion:
      'La Guerra de los Rohirrim – Batalla de Edoras es la forma\
                  ideal de comenzar o continuar tus aventuras en la Tierra\
                  Media. Toma el mando de los poderosos guerreros de Rohan o de\
                  los amargados y agresivos miembros de la tribu de las colinas,\
                  ambos liderados por héroes llenos de carácter, y recrea tus\
                  escenas favoritas de El Señor de los Anillos: La Guerra de los\
                  Rohirrim ™. Esta caja contiene 56 miniaturas divididas en dos\
                  ejércitos equilibrados (uno del Bien y otro del Mal) y todo lo\
                  que necesitas para jugar, incluido un manual de reglas, dados\
                  y accesorios.',
  },
];
