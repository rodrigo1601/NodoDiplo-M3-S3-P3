import {body, param} from 'express-validator';

// Validaciones para crear superhéroe
export const validarCrearSuperHeroe = () => [
    body('nombreSuperHeroe')
        .notEmpty().withMessage('El nombre del superhéroe es requerido')
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage('El nombre del superhéroe debe tener entre 3 y 60 caracteres'),
    
    body('nombreReal')
        .notEmpty().withMessage('El nombre real es requerido')
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage('El nombre real debe tener entre 3 y 60 caracteres'),
    
    body('edad')
        .notEmpty().withMessage('La edad es requerida')
        .isInt({ min: 0 }).withMessage('La edad debe ser un número entero no negativo')
        .toInt(),
    
    body('poderes')
        .isArray({ min: 1 }).withMessage('Los poderes deben ser un array con al menos un elemento')
        .custom((poderes) => {
            if (!poderes.every(poder => typeof poder === 'string')) {
                throw new Error('Todos los poderes deben ser strings');
            }
            return true;
        }),
    
    body('poderes.*')
        .notEmpty().withMessage('Los poderes no pueden estar vacíos')
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage('Cada poder debe tener entre 3 y 60 caracteres'),
    
    // Campos opcionales con validaciones
    body('planetaOrigen')
        .optional()
        .trim(),
    
    body('debilidad')
        .optional()
        .trim(),
    
    body('aliado')
        .optional()
        .isArray().withMessage('Los aliados deben ser un array'),
    
    body('aliado.*')
        .optional()
        .trim(),
    
    body('enemigo')
        .optional()
        .isArray().withMessage('Los enemigos deben ser un array'),
    
    body('enemigo.*')
        .optional()
        .trim(),
    
    body('creador')
        .optional()
        .trim()
];

// Validaciones para actualizar superhéroe
export const validarActualizarSuperHeroe = () => [
    param('id')
        .isMongoId().withMessage('ID inválido'),
    
    body('nombreSuperHeroe')
        .optional()
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage('El nombre del superhéroe debe tener entre 3 y 60 caracteres'),
    
    body('nombreReal')
        .optional()
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage('El nombre real debe tener entre 3 y 60 caracteres'),
    
    body('edad')
        .optional()
        .isInt({ min: 0 }).withMessage('La edad debe ser un número entero no negativo')
        .toInt(),
    
    body('poderes')
        .optional()
        .isArray({ min: 1 }).withMessage('Los poderes deben ser un array con al menos un elemento'),
    
    body('poderes.*')
        .optional()
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage('Cada poder debe tener entre 3 y 60 caracteres')
];

// Validaciones para IDs
export const validarId = () => [
    param('id')
        .isMongoId().withMessage('ID inválido')
];

// Validaciones para nombre
export const validarNombre = () => [
    param('nombreSuperHeroe')
        .notEmpty().withMessage('El nombre del superhéroe es requerido')
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage('El nombre debe tener entre 3 y 60 caracteres')
];