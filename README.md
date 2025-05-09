# crc-humedales

Database structure for wetlands (humedales) management system.

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