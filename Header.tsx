import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./components/ui/button";

function Header() {
  return (
    <div className="flex justify-between">
      <Link href="/dashboard" className="text-2xl">
        Chat with <span className="text-indigo-600">PDF</span>
      </Link>
      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>
          {/* {Upgrade Button} */}
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}

export default Header;
