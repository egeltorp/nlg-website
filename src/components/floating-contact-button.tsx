import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const FloatingContactButton = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground hover:bg-primary-light shadow-lg rounded-full w-14 h-14 md:w-20 md:h-20 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border border-white]"
    >
      <Mail className="!w-7 !h-7 md:!w-9 md:!h-9" />
    </Button>
  );
};
