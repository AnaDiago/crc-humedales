-- CREATE HUMEDALES TABLE WITH ENUM types

-- Create all ENUM types first
CREATE TYPE ubicacion_type AS ENUM ('Urbano', 'Rural');

CREATE TYPE naturaleza_type AS ENUM ('Léntico', 'Lótico');

CREATE TYPE regimen_type AS ENUM ('Permanente', 'Temporal');

CREATE TYPE origen_type AS ENUM ('Natural', 'Artificial', 'Indefinido');

CREATE TYPE tipo_type AS ENUM (
    'Palustre',
    'Lacustre',
    'Quebrada',
    'Nacimiento',
    'Río',
    'Madrevieja',
    'Zanjón o Acequia',
    'Saladero',
    'Geotérmico o termal',
    'Otro'
);

CREATE TYPE uso_type AS ENUM (
    'Reservorio',
    'Conservación',
    'Recreación',
    'Interés ambiental',
    'Paisajístico',
    'Piscicultura',
    'Industrial',
    'Desecación',
    'Reservorio - recreación',
    'Conservación - reservorio',
    'Conservación - recreación',
    'Proteción - conservación',
    'Protección - reservorio',
    'Desecación - reservorio',
    'Zona de inundación',
    'Urbanización',
    'Ninguno',
    'Otro'
);

CREATE TYPE estado_type AS ENUM (
    'Alta',
    'Media',
    'Baja',
    'Sin Conservación'
);

CREATE TYPE nivel_type AS ENUM (
    'Alta',
    'Media',
    'Baja',
    'Sin intervención'
);

CREATE TYPE impacto_type AS ENUM (
    'Modificación de cursos de agua',
    'Contaminación del agua',
    'Desecamiento',
    'Alteración del suelo',
    'Alteración de la forma',
    'Rellenos - escombros',
    'Construcciones y obras',
    'Urbanismo, parcelación',
    'Carreteras y caminos',
    'Cultivos',
    'Pastoreo de ganado',
    'Tala - deforestación',
    'Minería',
    'Vertimiento de basuras',
    'Caza - pesca indiscriminada',
    'Conflictos sociales',
    'Fenómenos naturales',
    'Quemas',
    'Otros'
);

CREATE TYPE prioridad_type AS ENUM ('Alta', 'Media', 'Baja');

CREATE TYPE accion_type AS ENUM (
    'Conservación',
    'Aislamiento',
    'Reforestación',
    'Educación ambiental',
    'Otro'
);

-- Create the table with all fields
CREATE TABLE humedales2 (
    objectid SERIAL PRIMARY KEY,
    num_hum VARCHAR(25) NOT NULL,
    nombre_hum VARCHAR(150),
    area_ha FLOAT,
    perimetro FLOAT,
    altitud FLOAT,
    este FLOAT,
    norte FLOAT,
    longitud FLOAT,
    latitud FLOAT,
    fecha_act DATE,
    cod_dane FLOAT,
    municipio VARCHAR(50),
    departamen VARCHAR(15),
    vereda VARCHAR(50),
    ubicacion ubicacion_type,
    jurisdicci VARCHAR(15),
    naturaleza naturaleza_type,
    regimen_h regimen_type,
    origen origen_type,
    tipo tipo_type,
    clase VARCHAR(25),
    instru_ges VARCHAR(254),
    uso uso_type[],
    estado estado_type,
    nivel_inte nivel_type,
    impactos impacto_type[],
    prioridad prioridad_type,
    accion accion_type,
    complejo VARCHAR(254),
    cuenca VARCHAR(100),
    subcuenca VARCHAR(100),
    microcuenc VARCHAR(100),
    area_h VARCHAR(100),
    zona_h VARCHAR(100),
    subzona_h VARCHAR(100),
    foto VARCHAR(254),
    descri_gen VARCHAR(254),
    descri_bio VARCHAR(254),
    descri_tec VARCHAR(254)
);


-- INSERTAR DATOS DE EJEMPLO

-- Insert example 1: A urban wetland with high conservation priority
INSERT INTO humedales2 (
    num_hum,
    nombre_hum,
    area_ha,
    perimetro,
    altitud,
    este,
    norte,
    longitud,
    latitud,
    fecha_act,
    cod_dane,
    municipio,
    departamen,
    vereda,
    ubicacion,
    jurisdicci,
    naturaleza,
    regimen_h,
    origen,
    tipo,
    instru_ges,
    uso,
    estado,
    nivel_inte,
    impactos,
    prioridad,
    accion,
    complejo,
    cuenca,
    descri_gen
) VALUES (
    'HUM-001',
    'Humedal El Cortijo',
    12.5,
    1250.8,
    1750.0,
    1061234.56,
    875421.34,
    -76.5423,
    2.4567,
    '2025-05-01',
    19001.0,
    'Popayán',
    'Cauca',
    'El Cortijo',
    'Urbano',
    'CRC',
    'Léntico',
    'Permanente',
    'Natural',
    'Palustre',
    'Plan de Manejo Ambiental',
    ARRAY['Conservación', 'Recreación']::uso_type[],
    'Alta',
    'Media',
    ARRAY['Urbanismo, parcelación', 'Contaminación del agua']::impacto_type[],
    'Alta',
    'Conservación',
    'Complejo Humedales Popayán',
    'Río Cauca',
    'Humedal urbano con alta importancia para la ciudad'
);

-- Insert example 2: A rural wetland with medium conservation priority
INSERT INTO humedales2 (
    num_hum,
    nombre_hum,
    area_ha,
    perimetro,
    altitud,
    este,
    norte,
    longitud,
    latitud,
    fecha_act,
    cod_dane,
    municipio,
    departamen,
    vereda,
    ubicacion,
    jurisdicci,
    naturaleza,
    regimen_h,
    origen,
    tipo,
    instru_ges,
    uso,
    estado,
    nivel_inte,
    impactos,
    prioridad,
    accion,
    cuenca,
    descri_gen
) VALUES (
    'HUM-002',
    'Humedal La Laguna',
    45.3,
    3200.5,
    2100.0,
    1062345.67,
    876532.45,
    -76.6534,
    2.5678,
    '2025-04-15',
    19001.0,
    'Timbío',
    'Cauca',
    'La Laguna',
    'Rural',
    'CRC',
    'Léntico',
    'Permanente',
    'Natural',
    'Lacustre',
    'POMCA',
    ARRAY['Reservorio', 'Piscicultura']::uso_type[],
    'Media',
    'Baja',
    ARRAY['Pastoreo de ganado', 'Cultivos']::impacto_type[],
    'Media',
    'Aislamiento',
    'Río Timbío',
    'Humedal rural con importancia para actividades productivas'
);

-- Insert example 3: A rural wetland with restoration needs
INSERT INTO humedales2 (
    num_hum,
    nombre_hum,
    area_ha,
    perimetro,
    altitud,
    este,
    norte,
    longitud,
    latitud,
    fecha_act,
    cod_dane,
    municipio,
    departamen,
    vereda,
    ubicacion,
    jurisdicci,
    naturaleza,
    regimen_h,
    origen,
    tipo,
    instru_ges,
    uso,
    estado,
    nivel_inte,
    impactos,
    prioridad,
    accion,
    cuenca,
    descri_gen
) VALUES (
    'HUM-003',
    'Quebrada Los Robles',
    8.7,
    950.3,
    1850.0,
    1063456.78,
    877643.56,
    -76.7645,
    2.6789,
    '2025-05-08',
    19001.0,
    'Cajibío',
    'Cauca',
    'Los Robles',
    'Rural',
    'CRC',
    'Lótico',
    'Temporal',
    'Natural',
    'Quebrada',
    'Plan de Restauración',
    ARRAY['Conservación', 'Interés ambiental']::uso_type[],
    'Baja',
    'Alta',
    ARRAY['Tala - deforestación', 'Vertimiento de basuras', 'Quemas']::impacto_type[],
    'Alta',
    'Reforestación',
    'Río Palace',
    'Quebrada con alta necesidad de restauración ecológica'
);