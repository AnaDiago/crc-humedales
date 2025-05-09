# crc-humedales

Database structure for wetlands (humedales) management system.

## Database Infrastructure

The database is hosted on [Supabase](https://supabase.com), providing:
- Secure PostgreSQL database hosting
- Real-time capabilities
- Row Level Security (RLS)
- REST and GraphQL APIs
- Database backups

## Database Schema

### Humedales Table

The `humedales` table stores information about wetlands with the following structure:

#### Base Information
- `objectid` - SERIAL PRIMARY KEY
- `num_hum` - VARCHAR(25), Unique wetland identifier code
- `nombre_hum` - VARCHAR(150), Wetland name
- `area_ha` - FLOAT, Area in hectares
- `perimetro` - FLOAT, Perimeter in meters
- `altitud` - FLOAT, Altitude in meters above sea level

#### Geographic Location
- `este` - FLOAT, X coordinate (East) in CTM12 projection
- `norte` - FLOAT, Y coordinate (North) in CTM12 projection
- `longitud` - FLOAT, Geographic longitude in decimal degrees (WGS84)
- `latitud` - FLOAT, Geographic latitude in decimal degrees (WGS84)

#### Administrative Information
- `fecha_act` - DATE, Last update date
- `cod_dane` - FLOAT, DANE municipality code
- `municipio` - VARCHAR(50), Municipality name
- `departamen` - VARCHAR(15), Department name
- `vereda` - VARCHAR(50), Village/District name
- `jurisdicci` - VARCHAR(15), Environmental authority

#### Classification
- `ubicacion` - ENUM ('Urbano', 'Rural')
- `naturaleza` - ENUM ('Léntico', 'Lótico')
- `regimen_h` - ENUM ('Permanente', 'Temporal')
- `origen` - ENUM ('Natural', 'Artificial', 'Indefinido')
- `tipo` - ENUM of wetland types (Palustre, Lacustre, etc.)
- `clase` - VARCHAR(25), CRC classification

#### Management & Conservation
- `instru_ges` - VARCHAR(254), Management instrument
- `uso` - ENUM[], Array of uses (Reservorio, Conservación, etc.)
- `estado` - ENUM ('Alta', 'Media', 'Baja', 'Sin Conservación')
- `nivel_inte` - ENUM ('Alta', 'Media', 'Baja', 'Sin intervención')
- `impactos` - ENUM[], Array of environmental impacts
- `prioridad` - ENUM ('Alta', 'Media', 'Baja')
- `accion` - ENUM ('Conservación', 'Aislamiento', 'Reforestación', etc.)

#### Hydrographic Information
- `complejo` - VARCHAR(254), Wetland complex name
- `cuenca` - VARCHAR(100), River basin
- `subcuenca` - VARCHAR(100), Sub-basin
- `microcuenc` - VARCHAR(100), Micro-basin
- `area_h` - VARCHAR(100), Hydrographic area
- `zona_h` - VARCHAR(100), Hydrographic zone
- `subzona_h` - VARCHAR(100), Hydrographic sub-zone

#### Additional Information
- `foto` - VARCHAR(254), Photo file path
- `descri_gen` - VARCHAR(254), General description
- `descri_bio` - VARCHAR(254), Biological description
- `descri_tec` - VARCHAR(254), Technical description

## Prisma Setup

### Installation

1. Install Prisma as a development dependency:
```bash
npm install prisma --save-dev
```

2. Initialize Prisma in your project:
```bash
npx prisma init
```

This will create:
- A `prisma` directory with your `schema.prisma` file
- A `.env` file for your database connection string

3. Update your `.env` file with your Supabase connection string:
```bash
DATABASE_URL="postgres://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
```

### Database Migrations

1. After modifying your schema, create and apply migrations:
```bash
npx prisma migrate dev --name init
```

This command will:
- Create a new SQL migration file
- Apply the migration to your database
- Regenerate the Prisma Client

2. To generate Prisma Client without migrations:
```bash
npx prisma generate
```

3. To view your database in Prisma Studio:
```bash
npx prisma studio
```

Remember to add `node_modules` and `.env` to your `.gitignore` file to keep sensitive information secure.