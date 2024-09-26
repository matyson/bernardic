import { Search } from "@/components/search";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

export const Route = createRootRoute({
  component: () => <Root />,
  notFoundComponent: () => <div>404 - Not Found</div>,
});

function Root() {
  return (
    <>
      <div className="flex justify-between gap-2 p-2">
        <Link
          to="/"
          className="font-caveat text-2xl [&.active]:font-bold [&.active]:text-primary"
        >
          bernardic
        </Link>{" "}
        <Search />
      </div>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}
