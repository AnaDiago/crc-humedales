/*
  Warnings:

  - The values [Conservacion,Reforestacion,EducacionAmbiental] on the enum `Accion` will be removed. If these variants are still used in the database, this will fail.
  - The values [SinConservacion] on the enum `Estado` will be removed. If these variants are still used in the database, this will fail.
  - The values [ModificacionDeCursosDeAgua,ContaminacionDelAgua,AlteracionDelSuelo,AlteracionDeLaForma,RellenosEscombros,ConstruccionesYObras,UrbanismoParcelacion,CarreterasYCaminos,PastoreoDeGanado,TalaDeforestacion,Mineria,VertimientoDeBasuras,CazaPescaIndiscriminada,ConflictosSociales,FenomenosNaturales] on the enum `Impacto` will be removed. If these variants are still used in the database, this will fail.
  - The values [Lentico,Lotico] on the enum `Naturaleza` will be removed. If these variants are still used in the database, this will fail.
  - The values [SinIntervencion] on the enum `Nivel` will be removed. If these variants are still used in the database, this will fail.
  - The values [Rio,ZanjonOAcequia,GeotermicoOTermal] on the enum `Tipo` will be removed. If these variants are still used in the database, this will fail.
  - The values [Conservacion,Recreacion,InteresAmbiental,Paisajistico,Desecacion,ReservorioRecreacion,ConservacionReservorio,ConservacionRecreacion,ProtecionConservacion,ProteccionReservorio,DesecacionReservorio,ZonaDeInundacion,Urbanizacion] on the enum `Uso` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Accion_new" AS ENUM ('Conservación', 'Aislamiento', 'Reforestación', 'Educación_Ambiental', 'Otro');
ALTER TABLE "humedales" ALTER COLUMN "accion" TYPE "Accion_new" USING ("accion"::text::"Accion_new");
ALTER TYPE "Accion" RENAME TO "Accion_old";
ALTER TYPE "Accion_new" RENAME TO "Accion";
DROP TYPE "Accion_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Estado_new" AS ENUM ('Alta', 'Media', 'Baja', 'Sin_Conservación');
ALTER TABLE "humedales" ALTER COLUMN "estado" TYPE "Estado_new" USING ("estado"::text::"Estado_new");
ALTER TYPE "Estado" RENAME TO "Estado_old";
ALTER TYPE "Estado_new" RENAME TO "Estado";
DROP TYPE "Estado_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Impacto_new" AS ENUM ('Modificación_De_Cursos_De_Agua', 'Contaminación_Del_Agua', 'Desecamiento', 'Alteración_Del_Suelo', 'Alteración_De_La_Forma', 'Rellenos_Escombros', 'Construcciones_Y_Obras', 'Urbanismo_Parcelación', 'Carreteras_Y_Caminos', 'Cultivos', 'Pastoreo_De_Ganado', 'Tala_Deforestación', 'Minería', 'Vertimiento_De_Basuras', 'Caza_Pesca_Indiscriminada', 'Conflictos_Sociales', 'Fenómenos_Naturales', 'Quemas', 'Otros');
ALTER TABLE "humedales" ALTER COLUMN "impactos" TYPE "Impacto_new"[] USING ("impactos"::text::"Impacto_new"[]);
ALTER TYPE "Impacto" RENAME TO "Impacto_old";
ALTER TYPE "Impacto_new" RENAME TO "Impacto";
DROP TYPE "Impacto_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Naturaleza_new" AS ENUM ('Léntico', 'Lótico');
ALTER TABLE "humedales" ALTER COLUMN "naturaleza" TYPE "Naturaleza_new" USING ("naturaleza"::text::"Naturaleza_new");
ALTER TYPE "Naturaleza" RENAME TO "Naturaleza_old";
ALTER TYPE "Naturaleza_new" RENAME TO "Naturaleza";
DROP TYPE "Naturaleza_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Nivel_new" AS ENUM ('Alta', 'Media', 'Baja', 'Sin_Intervención');
ALTER TABLE "humedales" ALTER COLUMN "nivel_inte" TYPE "Nivel_new" USING ("nivel_inte"::text::"Nivel_new");
ALTER TYPE "Nivel" RENAME TO "Nivel_old";
ALTER TYPE "Nivel_new" RENAME TO "Nivel";
DROP TYPE "Nivel_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Tipo_new" AS ENUM ('Palustre', 'Lacustre', 'Quebrada', 'Nacimiento', 'Río', 'Madrevieja', 'Zanjón_o_Acequía', 'Saladero', 'Geotérmico_o_Termal', 'Otro');
ALTER TABLE "humedales" ALTER COLUMN "tipo" TYPE "Tipo_new" USING ("tipo"::text::"Tipo_new");
ALTER TYPE "Tipo" RENAME TO "Tipo_old";
ALTER TYPE "Tipo_new" RENAME TO "Tipo";
DROP TYPE "Tipo_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Uso_new" AS ENUM ('Reservorio', 'Conservación', 'Recreación', 'Interes_Ambiental', 'Paisajístico', 'Piscicultura', 'Industrial', 'Desecación', 'Reservorio_recreación', 'Conservación_reservorio', 'Conservación_recreación', 'Proteción_conservación', 'Protección_reservorio', 'Desecación_reservorio', 'Zona_de_inundación', 'Urbanización', 'Ninguno', 'Otro');
ALTER TABLE "humedales" ALTER COLUMN "uso" TYPE "Uso_new"[] USING ("uso"::text::"Uso_new"[]);
ALTER TYPE "Uso" RENAME TO "Uso_old";
ALTER TYPE "Uso_new" RENAME TO "Uso";
DROP TYPE "Uso_old";
COMMIT;
