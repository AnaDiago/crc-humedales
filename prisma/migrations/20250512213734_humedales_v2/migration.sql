/*
  Warnings:

  - The values [Modificación_De_Cursos_De_Agua,Contaminación_Del_Agua,Alteración_Del_Suelo,Alteración_De_La_Forma,Pastoreo_De_Ganado,Vertimiento_De_Basuras] on the enum `Impacto` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `accion` on the `humedales` table. All the data in the column will be lost.
  - You are about to drop the column `regimen_h` on the `humedales` table. All the data in the column will be lost.
  - You are about to drop the column `ubicacion` on the `humedales` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Ubicación" AS ENUM ('Urbano', 'Rural');

-- CreateEnum
CREATE TYPE "Régimen" AS ENUM ('Permanente', 'Temporal');

-- CreateEnum
CREATE TYPE "Acción" AS ENUM ('Conservación', 'Aislamiento', 'Reforestación', 'Educación_Ambiental', 'Otro');

-- CreateEnum
CREATE TYPE "SEE" AS ENUM ('Servicos_de_Regulación', 'Servicios_Culturales', 'Servicios_de_Aprovicionamiento', 'Servicios_de_Sostenimiento');

-- AlterEnum
BEGIN;
CREATE TYPE "Impacto_new" AS ENUM ('Modificación_de_Cursos_De_Agua', 'Contaminación_del_Agua', 'Desecamiento', 'Alteración_del_Suelo', 'Alteración_de_La_Forma', 'Rellenos_Escombros', 'Construcciones_Y_Obras', 'Urbanismo_Parcelación', 'Carreteras_Y_Caminos', 'Cultivos', 'Pastoreo_de_Ganado', 'Tala_Deforestación', 'Minería', 'Vertimiento_de_Basuras', 'Caza_Pesca_Indiscriminada', 'Conflictos_Sociales', 'Fenómenos_Naturales', 'Quemas', 'Otros');
ALTER TABLE "humedales" ALTER COLUMN "impactos" TYPE "Impacto_new"[] USING ("impactos"::text::"Impacto_new"[]);
ALTER TYPE "Impacto" RENAME TO "Impacto_old";
ALTER TYPE "Impacto_new" RENAME TO "Impacto";
DROP TYPE "Impacto_old";
COMMIT;

-- AlterTable
ALTER TABLE "humedales" DROP COLUMN "accion",
DROP COLUMN "regimen_h",
DROP COLUMN "ubicacion",
ADD COLUMN     "acción" "Acción",
ADD COLUMN     "régimen_h" "Régimen",
ADD COLUMN     "see" "SEE"[],
ADD COLUMN     "ubicación" "Ubicación";

-- DropEnum
DROP TYPE "Accion";

-- DropEnum
DROP TYPE "Regimen";

-- DropEnum
DROP TYPE "Ubicacion";
