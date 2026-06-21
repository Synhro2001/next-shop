
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import Card from "@/components/ui/Card/Card";


export default function Home() {  

  return(
    <div className="p-4">
      <div className="flex flex-col gap-4"> 
        <Button
          onClick={() => alert("Saved")}
          variant="secondary"
          size="sm"
          className="w-1/2"
        
        >
          Save
        </Button>
        <Input
          label="Enter your password"
          type="text"
          variant="secondary"
          size="md"
        />
        <Card title="Hello Vadim">
          <div className="">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quod in quis architecto tempora natus, cupiditate voluptatem provident delectus. Sunt harum magnam nesciunt aliquam sit necessitatibus repellat sequi suscipit ipsum?</p>
          </div>
      </Card>
      </div>
  
       {/* сюда делаем как в visam разные боксы с определенной информацией */}
    </div>
  );


}