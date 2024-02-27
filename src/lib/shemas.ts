import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Required" })
    .regex(new RegExp(/^[a-zA-Z0-9@"#&*!]+$/), {
      message: "Invalid characters",
    })
    .min(10, { message: "Must be 10 or more characters long" })
    .max(120, { message: "Must be 120 or fewer characters long" }),
  description: z
    .string()
    .min(1, { message: "Required" })
    .regex(new RegExp(/^[A-Z0-9]/), {
      message: "Description should start with uppercase",
    })
    .max(512, { message: "Must be 512 or fewer characters long" }),
  publisher: z
    .string()
    .min(1, { message: "Required" })
    .min(5, { message: "Must be 5 or more characters long" })
    .max(60, { message: "Must be 50 or less characters long" }),
  categories: z
    .string()
    .min(1, { message: "Required" })
    .transform((words) => words.split(",").map((item) => item.trim()))
    .refine(
      (data) => {
        return data.length <= 4;
      },
      { message: "Maximum of four categories allowed" }
    ),
  authors: z
    .string()
    .min(1, { message: "Required" })
    .transform((words) => words.split(",").map((item) => item.trim()))
    .refine(
      (data) => {
        return data.length <= 3;
      },
      { message: "Maximum of three authors allowed" }
    ),
  website: z
    .string()
    .optional(),
  image: z
    .string()
    .optional(),
  year: z.preprocess(
    (args) => (args === "" ? null : args),
    z.coerce
      .number()
      .positive()
      .int()
      .gte(1000, { message: "Must be 4 digits" })
      .lte(9999, { message: "Must be 4 digits" })
      .refine(
        (data) => {
          return data <= new Date().getFullYear();
        },
        { message: "Cannot be above current year" }
      )
  ),
  pages: z.preprocess(
    (args) => (args === "" ? null : args),
    z.coerce
      .number()
      .positive()
      .int()
      .max(9999, { message: "Max number of pages allowed: 9999" })
  ),
  isbn: z.preprocess(
    (args) => (args === "" ? null : args),
    z.coerce
      .number()
      .int()
      .gte(1000000000, { message: "Must be 10 digits" }) // Greater than or equal to the smallest 10 digit int
      .lte(9999999999, { message: "Must be 10 digits" })
      .nullable()
  ),
  isbn13: z.preprocess(
    (args) => (args === "" ? null : args),
    z.coerce
      .number()
      .int()
      .gte(1000000000000, { message: "Must be 13 digits" }) // Greater than or equal to the smallest 10 digit int
      .lte(9999999999999, { message: "Must be 13 digits" })
  ),
});
