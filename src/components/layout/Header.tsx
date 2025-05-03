import Link from 'next/link';
import { Briefcase } from 'lucide-react'; // Added an icon

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            CareerAI
          </span>
        </Link>
        {/* Navigation can be added here */}
      </div>
    </header>
  );
}