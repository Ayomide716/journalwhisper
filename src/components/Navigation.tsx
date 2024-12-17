import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const isMobile = useIsMobile();
  const location = useLocation();

  const NavLinks = () => (
    <div className={`${isMobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-6'}`}>
      <Link 
        to="/" 
        className={`text-journal-700 hover:text-journal-900 ${
          location.pathname === '/' ? 'font-semibold' : ''
        }`}
      >
        Journal Entries
      </Link>
      <Link 
        to="/new" 
        className={`text-journal-700 hover:text-journal-900 ${
          location.pathname === '/new' ? 'font-semibold' : ''
        }`}
      >
        New Entry
      </Link>
    </div>
  );

  return (
    <nav className="border-b border-journal-200 bg-white/75 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-serif text-xl font-bold text-journal-800">
          My Journal
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-8">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <NavLinks />
        )}
      </div>
    </nav>
  );
}