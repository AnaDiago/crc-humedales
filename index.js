import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

async function main() {
  await prisma.humedal.createMany({
    data: [
      {
        num_hum: "HUM-007",
        nombre_hum: "Humedal El Cortijo",
        area_ha: 12.5,
        perimetro: 1250.8,
        altitud: 1750.0,
        este: 1061234.56,
        norte: 875421.34,
        longitud: -76.5423,
        latitud: 2.4567,
        fecha_act: new Date("2025-05-01"),
        cod_dane: 19001.0,
        municipio: "Popayán",
        departamen: "Cauca",
        vereda: "El Cortijo",
        ubicacion: "Urbano",
        jurisdicci: "CRC",
        naturaleza: "Lentico",
        regimen_h: "Permanente",
        origen: "Natural",
        tipo: "Palustre",
        instru_ges: "Plan de Manejo Ambiental",
        uso: ["Conservacion", "Recreacion"],
        estado: "Alta",
        nivel_inte: "Media",
        impactos: ["UrbanismoParcelacion", "ContaminacionDelAgua"],
        prioridad: "Alta",
        accion: "Conservacion",
        complejo: "Complejo Humedales Popayán",
        cuenca: "Río Cauca",
        descri_gen: "Humedal urbano con alta importancia para la ciudad",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
