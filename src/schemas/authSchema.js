import { z } from "zod";

export const registrarSChema = z.object({
  usuario: z.string({
    required_error: "usuario es requerido",
  }),
  correo: z
    .string({
      required_error: "correo es requerido",
    })
    .email({
      message: "correo invalido",
    }),
  clave: z
    .string({
      required_error: "clave es requerida",
    })
    .min(6, {
      message: "clave minima de 6 caracteres",
    }),
});

export const loginSchema = z.object({
  correo: z
    .string({
      required_error: "correo requerido",
    })
    .email({
      message: "correo invalido",
    }),
  clave: z
    .string({
      required_error: "clave requerida",
    })
    .min(6, {
      message: "clave minima de 6 caracteres",
    }),
});
