"use client";
import { zodResolver } from "@hookform/resolvers/zod";
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

const formSchema = z.object({
  email: z.string().email(),
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters." }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

function AuthenticationForm({ signup }: AuthenticationFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(signup);
    if (signup) {
      await signUpUser(values.email, values.username, values.password);
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: `${process.env.NEXT_PUBLIC_URL}/home`,
      });
    } else {
      console.log("calling this");
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: `${process.env.NEXT_PUBLIC_URL}/home`,
      });
    }
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
        {signup ? (
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
        ) : null}
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

export default AuthenticationForm;
