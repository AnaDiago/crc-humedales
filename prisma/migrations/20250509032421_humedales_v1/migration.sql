-- CreateEnum
CREATE TYPE "Ubicacion" AS ENUM ('Urbano', 'Rural');

-- CreateEnum
CREATE TYPE "Naturaleza" AS ENUM ('Lentico', 'Lotico');

-- CreateEnum
CREATE TYPE "Regimen" AS ENUM ('Permanente', 'Temporal');

-- CreateEnum
CREATE TYPE "Origen" AS ENUM ('Natural', 'Artificial', 'Indefinido');

-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('Palustre', 'Lacustre', 'Quebrada', 'Nacimiento', 'Rio', 'Madrevieja', 'ZanjonOAcequia', 'Saladero', 'GeotermicoOTermal', 'Otro');

-- CreateEnum
CREATE TYPE "Uso" AS ENUM ('Reservorio', 'Conservacion', 'Recreacion', 'InteresAmbiental', 'Paisajistico', 'Piscicultura', 'Industrial', 'Desecacion', 'ReservorioRecreacion', 'ConservacionReservorio', 'ConservacionRecreacion', 'ProtecionConservacion', 'ProteccionReservorio', 'DesecacionReservorio', 'ZonaDeInundacion', 'Urbanizacion', 'Ninguno', 'Otro');

-- CreateEnum
CREATE TYPE "Estado" AS ENUM ('Alta', 'Media', 'Baja', 'SinConservacion');

-- CreateEnum
CREATE TYPE "Nivel" AS ENUM ('Alta', 'Media', 'Baja', 'SinIntervencion');

-- CreateEnum
CREATE TYPE "Impacto" AS ENUM ('ModificacionDeCursosDeAgua', 'ContaminacionDelAgua', 'Desecamiento', 'AlteracionDelSuelo', 'AlteracionDeLaForma', 'RellenosEscombros', 'ConstruccionesYObras', 'UrbanismoParcelacion', 'CarreterasYCaminos', 'Cultivos', 'PastoreoDeGanado', 'TalaDeforestacion', 'Mineria', 'VertimientoDeBasuras', 'CazaPescaIndiscriminada', 'ConflictosSociales', 'FenomenosNaturales', 'Quemas', 'Otros');

-- CreateEnum
CREATE TYPE "Prioridad" AS ENUM ('Alta', 'Media', 'Baja');

-- CreateEnum
CREATE TYPE "Accion" AS ENUM ('Conservacion', 'Aislamiento', 'Reforestacion', 'EducacionAmbiental', 'Otro');

-- CreateTable
CREATE TABLE "humedales" (
    "objectid" SERIAL NOT NULL,
    "num_hum" VARCHAR(25) NOT NULL,
    "nombre_hum" VARCHAR(150),
    "area_ha" DOUBLE PRECISION,
    "perimetro" DOUBLE PRECISION,
    "altitud" DOUBLE PRECISION,
    "este" DOUBLE PRECISION,
    "norte" DOUBLE PRECISION,
    "longitud" DOUBLE PRECISION,
    "latitud" DOUBLE PRECISION,
    "fecha_act" TIMESTAMP(3),
    "cod_dane" DOUBLE PRECISION,
    "municipio" VARCHAR(50),
    "departamen" VARCHAR(15),
    "vereda" VARCHAR(50),
    "ubicacion" "Ubicacion",
    "jurisdicci" VARCHAR(15),
    "naturaleza" "Naturaleza",
    "regimen_h" "Regimen",
    "origen" "Origen",
    "tipo" "Tipo",
    "clase" VARCHAR(25),
    "instru_ges" VARCHAR(254),
    "uso" "Uso"[],
    "estado" "Estado",
    "nivel_inte" "Nivel",
    "impactos" "Impacto"[],
    "prioridad" "Prioridad",
    "accion" "Accion",
    "complejo" VARCHAR(254),
    "cuenca" VARCHAR(100),
    "subcuenca" VARCHAR(100),
    "microcuenc" VARCHAR(100),
    "area_h" VARCHAR(100),
    "zona_h" VARCHAR(100),
    "subzona_h" VARCHAR(100),
    "foto" VARCHAR(254),
    "descri_gen" VARCHAR(254),
    "descri_bio" VARCHAR(254),
    "descri_tec" VARCHAR(254),

    CONSTRAINT "humedales_pkey" PRIMARY KEY ("objectid")
);

-- CreateIndex
CREATE UNIQUE INDEX "humedales_num_hum_key" ON "humedales"("num_hum");
