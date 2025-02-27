-- Esquema de usuarios y autenticación
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT
);

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    documento_tipo VARCHAR(20),
    documento_numero VARCHAR(20),
    telefono VARCHAR(20),
    rol_id INTEGER REFERENCES roles(id),
    activo BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tablas para entidades financieras
CREATE TABLE entidades_financieras (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    tipo VARCHAR(50), -- cooperativa, fondo, etc
    nit VARCHAR(20) UNIQUE,
    direccion TEXT,
    telefono VARCHAR(20),
    email_contacto VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tablas para solicitudes de crédito
CREATE TABLE solicitudes_credito (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id),
    entidad_id INTEGER REFERENCES entidades_financieras(id),
    monto DECIMAL(15,2) NOT NULL,
    plazo INTEGER NOT NULL, -- en meses
    proposito TEXT,
    estado VARCHAR(50) DEFAULT 'pendiente',
    score_crediticio DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para datos alternativos
CREATE TABLE datos_alternativos (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id),
    tipo_dato VARCHAR(50), -- servicios_publicos, telefonia, etc
    proveedor VARCHAR(100),
    historial_pagos JSONB,
    score_parcial DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 