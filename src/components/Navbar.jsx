"use client";
import { useState } from "react";
import { Link, Button, Avatar } from "@heroui/react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b backdrop-blur-lg  bg-white dark:bg-[#0a0a0b]">
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-5">
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <Image
                src={"/nav-logo.png"}
                alt="logo"
                loading="eager"
                width={80}
                height={80}
                className="object-cover h-auto w-auto  "
              />
            </div>
          </Link>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all_books">All Books</Link>
          </li>
          <li>
            <Link href="/profile">My Profile</Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          {!user && (
            <ul className="items-center gap-4 flex ">
              <li>
                <Link href="/signup">Sing Up</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex gap-4">
              <div className="flex gap-2 items-center">
                <p className="">{user?.name}</p>
                <Avatar size="sm">
                  <Avatar.Image
                    alt="John Doe"
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </div>
              <Button onClick={handleLogout} size="sm" variant="danger">
                Logout
              </Button>
            </div>
          )}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/books" className="font-medium" aria-current="page">
                All Books
              </Link>
            </li>
            <li>
              <Link href="/profile">My Profile</Link>
            </li>

            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <div>
                {!user && (
                  <ul className="items-center gap-4 flex ">
                    <li>
                      <Link href="/signup">Sing Up</Link>
                    </li>
                    <li>
                      <Link href="/login">Login</Link>
                    </li>
                  </ul>
                )}

                {user && (
                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                      <Avatar size="sm">
                        <Avatar.Image
                          alt="John Doe"
                          src={user?.image}
                          referrerPolicy="no-referrer"
                        />
                        <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                      </Avatar>
                       <p className="">{user.name}</p>
                    </div>
                    <Button onClick={handleLogout} size="sm" variant="danger">
                      Logout
                    </Button>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
