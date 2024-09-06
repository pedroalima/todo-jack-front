// import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        {/* <Link className="flex items-center justify-center"> */}
        {/* <IoMdCheckmarkCircleOutline className="h-6 w-6" /> */}
        <span className="sr-only">Todo App</span>
        {/* </Link> */}
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4"> */}
          Features
          {/* </Link> */}
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4"> */}
          Pricing
          {/* </Link> */}
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4"> */}
          About
          {/* </Link> */}
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4"> */}
          Contact
          {/* </Link> */}
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
                  {/* <Link className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"> */}
                  Sign Up
                  {/* </Link> */}
                  {/* <Link className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"> */}
                  Download App
                  {/* </Link> */}
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Todo App. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {/* <Link className="text-xs hover:underline underline-offset-4"> */}
          Terms of Service
          {/* </Link> */}
          {/* <Link className="text-xs hover:underline underline-offset-4"> */}
          Privacy
          {/* </Link> */}
        </nav>
      </footer>
    </div>
  );
}
