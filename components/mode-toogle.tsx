import { SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle(){
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" >
        <SunIcon className="h-[1.2 rem] w-[1.2 rem]" />
      </Button>
    ); 
    
}