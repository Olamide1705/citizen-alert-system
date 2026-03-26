import Sidebar from "@/components/navigation/bottom-nav";
import BottomNav from "@/components/navigation/bottom-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar (desktop) */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 min-h-screen bg-black pb-20 md:pb-0">
        {children}
      </main>

      {/* Bottom nav (mobile) */}
      <BottomNav />
    </div>
  );
}
