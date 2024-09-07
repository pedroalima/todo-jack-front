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
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data);
    // try {
    //   await signIn("nodemailer", { email: data.email, redirect: false });
    //   toast({
    //     title: "Magic Link Sent",
    //     description: "Check your email for the magic link to login.",
    //   });
    //   setEmail(data.email);
    //   setSubmitted(true);
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "An error occurred. Please try again.",
    //   });
    // }
  });

  return (
    <form
      onSubmit={handleSubmit}
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
            <Input
              id="name"
              placeholder="John Doe"
              {...form.register("name")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...form.register("email")}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              {...form.register("password")}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="confirm-password">Confirm Password</Label>
            </div>
            <Input
              id="confirm-password"
              type="password"
              {...form.register("confirm-password")}
            />
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
