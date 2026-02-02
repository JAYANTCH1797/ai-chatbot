import Script from "next/script";
import { Suspense } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { DataStreamProvider } from "@/components/data-stream-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const mockUser = {
  id: "mock-user-1",
  email: "demo@example.com",
  name: "Demo User",
  image: null,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js"
        strategy="beforeInteractive"
      />
      <DataStreamProvider>
        <Suspense fallback={<div className="flex h-dvh" />}>
          <SidebarWrapper>{children}</SidebarWrapper>
        </Suspense>
      </DataStreamProvider>
    </>
  );
}

async function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const isCollapsed = false;

  return (
    <SidebarProvider defaultOpen={!isCollapsed}>
      <AppSidebar user={mockUser} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
