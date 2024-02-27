"use client";

import { NextPage } from "next";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/shemas";
import { initialBookData, useTotalBooksContext } from "@/lib/context";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const AddBook: NextPage = () => {
  const { setTotalBooksData } = useTotalBooksContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialBookData,
  });

  const onSubmit = async (book: z.infer<typeof formSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setTotalBooksData((prevState) => ({
      ...prevState,
      books: [...prevState.books, book],
    }));
    toast.success("Book added!", {
      position: "bottom-center",
      autoClose: 5000,
      pauseOnHover: false,
      closeOnClick: true,
      theme: "dark",
    });
  };

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset(initialBookData);
    }
  }, [form.reset, form.formState]);

  return (
    <Fade className="w-full mt-20 px-6 border-main border-2 py-6">
      <Form {...form}>
        <form id="form" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full flex flex-col gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title*</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description*</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="categories"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categories*</FormLabel>
                    <FormControl>
                      <Input placeholder="eg: Action, Psychology" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="authors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="eg: John Doe, Ryan Howard"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="publisher"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Publisher*</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full flex flex-col gap-4">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="The url of the book image"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="eg: https://www.google.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year*</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="pages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of pages*</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="isbn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISBN-10*</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="isbn13"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISBN-13*</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mt-4">
            <Button disabled={form.formState.isSubmitting} type="submit">
              {form.formState.isSubmitting ? "Adding" : "Add"}
            </Button>
            <Button
              onClick={() => form.reset(initialBookData)}
              type="button"
              className="ml-2 bg-red-600 hover:bg-red-800"
              disabled={form.formState.isSubmitting}
            >
              Clear
            </Button>
          </div>
          <ToastContainer />
        </form>
      </Form>
    </Fade>
  );
};

export default AddBook;
