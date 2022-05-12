import AmericanStrat from "../img/guitars/AmericanStrat.jpg";
import AmericanStratBack from "../img/guitars/AmericanStratBack.jpg";
import AmericanStratBody from "../img/guitars/AmericanStratBody.jpg";
import AmericanTele from "../img/guitars/AmericanTele.jpg";
import AmericanTeleBack from "../img/guitars/AmericanTeleBack.jpg";
import AmericanTeleBody from "../img/guitars/AmericanTeleBody.jpg";
import CCobainJaguar from "../img/guitars/CCobainJaguar.jpg";
import AmericanPerformer from "../img/basses/AmericanPerformer.jpg";
import AmericanUltra from "../img/basses/AmericanUltra.jpg";

export const itemsData = [
  {
    id: 1,
    instrument: "Guitarra",
    brand: "Fender",
    model: "American Professional II Stratocaster",
    price: 20000,
    pictureUrl1: AmericanStrat,
    pictureUrl2: AmericanStratBack,
    pictureUrl3: AmericanStratBody,
    description: `La American Professional II Stratocaster® se basa en más de sesenta años de innovación, 
    inspiración y evolución para satisfacer las demandas del músico trabajador de hoy.
    Nuestro popular mástil Deep "C" ahora luce bordes de diapasón lisos y enrollados, un acabado satinado "Super-Natural" 
    y un talón de mástil recién esculpido para una sensación sumamente cómoda y fácil acceso al registro superior. 
    Las nuevas pastillas de bobina simple V-Mod II Stratocaster son más articuladas que nunca y conservan el timbre y 
    la calidez de una campana. Un trémolo de 2 puntos mejorado con un bloque de acero laminado en frío aumenta el sustain, la claridad y el brillo de alta gama.
    La American Pro II Stratocaster brinda familiaridad instantánea y versatilidad sonora que sentirá y escuchará de inmediato, 
    con amplias mejoras que se suman a nada menos que un nuevo estándar para instrumentos profesionales.`,
    caracteristica1: "Tres pastillas Stratocaster de bobina simple V-Mod II",
    caracteristica2:
      "Trémolo de 2 puntos mejorado con bloque de acero laminado en frío",
    caracteristica3: `Perfil de mástil profundo en forma de "C" con bordes de diapasón enrollados
    nuez de hueso; 22 trastes estrechos y altos para doblar fácilmente"`,
    caracteristica4:
      "Diapasón de radio compuesto de 10”-14”; 22 trastes jumbo medio",
  },
  {
    id: 2,
    instrument: "Guitarra",
    brand: "Fender",
    model: "American Ultra Telecaster",
    price: 30000,
    pictureUrl1: AmericanTele,
    pictureUrl2: AmericanTeleBack,
    pictureUrl3: AmericanTeleBody,
    description: `American Ultra es nuestra serie más avanzada de guitarras y bajos
    para músicos exigentes que exigen lo último en precisión,
    rendimiento y tono. La American Ultra Telecaster presenta un
    perfil de mástil 'Modern D' único con bordes de diapasón ultra
    enrollados para horas de comodidad al tocar, y el talón cónico del
    mástil permite un fácil acceso al registro más alto. Un veloz
    diapasón de radio compuesto de 10"-14" con 22 trastes medium-jumbo
    significa solos precisos y sin esfuerzo, mientras que las
    pastillas Ultra Noiseless™ Vintage y las opciones de cableado
    avanzadas brindan infinitas posibilidades tonales, sin zumbidos.
    Los contornos esculpidos de la parte trasera de la carrocería son
    tan hermosos como funcionales. Este instrumento versátil y de
    última generación lo inspirará a llevar su interpretación a nuevas
    alturas. Otras características incluyen máquinas de afinación de
    bloqueo selladas, herrajes cromados y tuerca de hueso. Incluye
    estuche rígido moldeado premium.`,
    caracteristica1:
      "Cuerpo de aliso o fresno con contornos traseros esculpidos",
    caracteristica2:
      "Dos pastillas de bobina simple Ultra Noiseless Vintage Tele",
    caracteristica3:
      "Mástil en forma de “D moderna” con acabado ultra satinado",
    caracteristica4:
      "Diapasón de radio compuesto de 10”-14”; 22 trastes jumbo medio",
  },
  {
    id: 3,
    instrument: "Guitarra",
    brand: "Fender",
    model: "Curt Cobain Jaguar HH ST",
    price: 20000,
    pictureUrl1: CCobainJaguar,
    description: `Regrese a la intensidad oscura y los enormes sonidos 
    de guitarra del movimiento grunge rock con el Kurt Cobain Jaguar, 
    una nueva versión del maltratado y muy inusual Jaguar de 1965 que 
    Cobain usó durante la era embriagadora de principios de los 90 cuando 
    Nirvana gobernó el rock y lideró un movimiento musicalmente impresionante 
    y culturalmente subversivo. Evoca auténticamente el Jaguar modificado 
    para zurdos que Cobain encontró de segunda mano y llegó a ser un premio 
    poco después de la grabación del enorme álbum Nevermind de 1991, completo 
    con pastillas humbucker DiMarzio®, interruptores especiales, extras exclusivos 
    en el estuche y más. Disponible en versiones para diestros y zurdos.`,
    caracteristica1: `Diseño clásico de Jaguar de doble circuito “lead/rhythm”
      Pastilla DiMarzio® DP103 PAF® 36th Anniversary (cuello) y pastillas humbucking DP100 Super Distortion® (puente)`,
    caracteristica2:
      "Placa de interruptor inferior modificada con interruptor de palanca de palanca de tres vías",
    caracteristica3: `Tres perillas de control estriadas de "cúpula cromada" (volumen, volumen, tono)`,
    caracteristica4: `Puente de cromo negro Adjusto-Matic™ y cordal de trémolo flotante con botón de bloqueo
      Modelos para diestros y zurdos`,
  },
  {
    id: 4,
    instrument: "Bajo",
    brand: "Fender",
    model: "American Performer Jazz Bass",
    price: 20000,
    pictureUrl1: AmericanPerformer,
    description: `Fabricado en Corona, California, el American Jazz Bass ofrece el tono excepcional y la sensación que esperas
       de un Fender auténtico, junto con nuevas mejoras que lo hacen aún más inspirador para tocar.`,
    caracteristica1: "Cuerpo de aliso",
    caracteristica2: "Dos pastillas Jazz Bass de bobina simple Yosemite",
    caracteristica3: "Sistema de tonos Greasebucket",
    caracteristica4:
      "Mástil en forma de “C moderna” con diapasón de 9,5” de radio",
  },
  {
    id: 5,
    instrument: "Bajo",
    brand: "Fender",
    model: "American Ultra Precision Jazz Bass",
    price: 20000,
    pictureUrl1: AmericanUltra,
    description: `American Ultra es nuestra serie más avanzada de guitarras y bajos para músicos exigentes que exigen lo último en precisión,
     rendimiento y tono. El American Ultra Precision Bass presenta un perfil de mástil "Modern D" único con bordes de diapasón ultra enrollados
      para horas de comodidad al tocar, y el talón cónico del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio
       compuesto de 10”-14” con 21 trastes medium-jumbo significa acción sin esfuerzo, mientras que las pastillas Ultra Noiseless™ Vintage
        y las opciones de cableado avanzadas brindan infinitas posibilidades tonales, sin zumbidos. Los contornos esculpidos de la parte
         trasera de la carrocería son tan hermosos como funcionales. Este instrumento versátil y de última generación lo inspirará a llevar
          su interpretación a nuevas alturas.
    Otras características incluyen máquinas de afinación de paletas vintage livianas con sello "F" con ejes cónicos, herrajes cromados
     y tuerca de hueso. Incluye estuche rígido moldeado premium.`,
    caracteristica1: "Cuerpo de aliso o fresno",
    caracteristica2:
      "Una pastilla P Bass® Ultra Noiseless Vintage de bobina dividida; una pastilla Jazz Bass de bobina simple Ultra Noiseless Vintage",
    caracteristica3: `Perfil de cuello en forma de "D moderna"`,
    caracteristica4:
      "Diapasón de radio compuesto de 10”-14”; 21 trastes jumbo medio",
  },
];
