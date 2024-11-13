import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type SignUpFormType = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export default function SignUpForm() {
  const { handleSubmit, register, watch } = useForm<SignUpFormType>();
  const [passwordMismatch, setPasswordMismatch] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern =
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  const [passwordWeak, setPasswordWeak] = useState<string | null>(null);
  const { signUp } = useContext(AuthContext);

  useEffect(() => {
    const subscription = watch((data, { name }) => {
      if (name === "password" || name === "confirm_password") {
        if (data.password !== data.confirm_password) {
          setPasswordMismatch("Passwords do not match");
        } else {
          setPasswordMismatch(null);
        }
        if (data.password && !passwordPattern.test(data.password)) {
          setPasswordWeak("Password is weak. Example: Abc@123");
        } else {
          setPasswordWeak(null);
        }
      }
      if (name === "email") {
        if (data.email && !emailPattern.test(data.email)) {
          setEmailError("Invalid email format");
        } else {
          setEmailError(null);
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  async function handleSignUp(data: SignUpFormType) {
    if (data.password !== data.confirm_password) {
      setPasswordMismatch("Passwords do not match");
      return;
    }

    if (!emailPattern.test(data.email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (!passwordPattern.test(data.password)) {
      setPasswordWeak("Password is weak.");
      return;
    }

    await signUp(data)

    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="flex min-h-screen flex-col items-center justify-center bg-background"
    >
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription>
            <span className="mt-2 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <a
                href="/sign-in"
                className="font-medium text-primary hover:underline"
              >
                Sign in
              </a>
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="John Doe" {...register("name")} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register("email")}
            />
            {emailError && (
              <span className="text-red-500 text-sm">{emailError}</span>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" {...register("password")} />
            {passwordWeak && (
              <span className="text-red-500 text-sm">{passwordWeak}</span>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="confirm-password" className="text-left">
                Confirm Password
              </Label>
            </div>
            <Input
              id="confirm_password"
              type="password"
              {...register("confirm_password")}
              className="mb-2"
            />
            {passwordMismatch && (
              <span className="text-red-500 text-sm">{passwordMismatch}</span>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
