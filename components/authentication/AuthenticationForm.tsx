"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signUpUser } from "@/app/actions";
import { signIn } from "next-auth/react";

interface AuthenticationFormProps {
  signup: boolean;
}

const formSchemaWithoutUsername = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});
const formSchemaWithUsername = z.object({
  email: z.string().email(),
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters." }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

function AuthenticationForm({ signup }: AuthenticationFormProps) {
  if (signup) {
    const form = useForm<z.infer<typeof formSchemaWithUsername>>({
      resolver: zodResolver(formSchemaWithUsername),
      defaultValues: {
        email: "",
        username: "",
        password: "",
      },
    });
    const onSubmit = async (values: z.infer<typeof formSchemaWithUsername>) => {
      await signUpUser(values.email, values.username, values.password);
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: `${process.env.NEXT_PUBLIC_URL}/home`,
      });
    };
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted-foreground"
                    placeholder="example@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted-foreground"
                    placeholder="Username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted-foreground"
                    type="password"
                    placeholder="••••••••"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-card-foreground hover:bg-purple-800"
          >
            Submit
          </Button>
          <ErrorMessage
            errors={form.formState.errors}
            name="username"
            render={({ message }) => <p>{message}</p>}
          />
        </form>
      </Form>
    );
  } else {
    const form = useForm<z.infer<typeof formSchemaWithoutUsername>>({
      resolver: zodResolver(formSchemaWithoutUsername),
      defaultValues: {
        email: "",
        password: "",
      },
    });
    const onSubmit = async (
      values: z.infer<typeof formSchemaWithoutUsername>
    ) => {
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: `${process.env.NEXT_PUBLIC_URL}/home`,
      });
    };
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted-foreground"
                    placeholder="example@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted-foreground"
                    type="password"
                    placeholder="••••••••"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-card-foreground hover:bg-purple-800"
          >
            Submit
          </Button>
        </form>
      </Form>
    );
  }
}

export default AuthenticationForm;
