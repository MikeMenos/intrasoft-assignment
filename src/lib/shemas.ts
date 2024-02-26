import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "This field cannot be empty" })
    .regex(new RegExp(/^[a-zA-Z@\"#&*!]+$/), { message: "Invalid characters" })
    .min(10, { message: "Must be 10 or more characters long" })
    .max(120, { message: "Must be 120 or fewer characters long" }),
  description: z
    .string()
    .min(1, { message: "This field cannot be empty" })
    .regex(new RegExp(/^[A-Z]/), {message: 'Description should start with uppercase'})
    .max(512, { message: "Must be 512 or fewer characters long" })
    .transform((s) => s.charAt(0).toUpperCase() + s.slice(1)),
  publisher: z
    .string()
    .min(1, { message: "This field cannot be empty" })
    .min(5, { message: "Must be 5 or more characters long" })
    .max(60, { message: "Must be 50 or less characters long" }),
  categories: z
    .string()
    .array()
    .max(4, { message: "Must be 4 categories or less" }),
  authors: z.string().array().max(3, { message: "Must be 3 authors or less" }),
  website: z
    .string()
    .min(1, { message: "This field cannot be empty" })
    .url()
    .min(5, { message: "Must be 5 or more characters long" })
    .max(120, { message: "Must be 50 or less characters long" }),
  year: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number()
      .int()
      .gte(1000, { message: "Must be 4 digits" }) // Greater than or equal to the smallest 4 digit int
      .lte(9999, { message: "Must be 4 digits" }) // Less than or equal to the largest 4 digit int
      .optional()
      .nullish()
  ),
  pages: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number()
      .int()
      .max(9999, { message: "Max number of pages allowed: 9999" })
      .optional()
      .nullish()
  ),
  isbn: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number()
      .int()
      .gte(1000000000, { message: "Must be 10 digits" }) // Greater than or equal to the smallest 10 digit int
      .lte(9999999999, { message: "Must be 10 digits" }) // Less than or equal to the largest 10 digit int
      .nullable()
  ),
  isbn13: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number()
      .int()
      .gte(1000000000000, { message: "Must be 13 digits" }) // Greater than or equal to the smallest 10 digit int
      .lte(9999999999999, { message: "Must be 13 digits" }) // Less than or equal to the largest 10 digit int
      .optional()
      .nullish()
  ),
});
