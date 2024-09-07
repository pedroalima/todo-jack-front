import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-[90dvh] mx-12 my-4">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a href="#" className="flex items-center justify-center">
          <IoMdCheckmarkCircleOutline className="h-6 w-6" />
          <span className="sr-only">Todo Jack</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6 lg:space-y-10">
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                  Stay on top of your tasks with our powerful todo app
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Manage your tasks, collaborate with your team, and stay
                  organized with our intuitive todo app.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="/sign-in"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Sign In
                  </a>
                  <a
                    href="/sign-up"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Todo Jack. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
