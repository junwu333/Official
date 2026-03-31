import React from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        <div className="space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Experience</Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">Contact</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;