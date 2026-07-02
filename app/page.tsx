
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import Card from "@/components/ui/Card/Card";
import Modal from "@/components/ui/Modal/Modal";
import Badge from "@/components/ui/Badge/Badge";
import Spinner from "@/components/ui/Spinner/Spinner";
import Avatar from "@/components/ui/Avatar/Avatar";


export default function Home() {  


  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="p-4">
      <div className="flex flex-col gap-4"> 
        <Button
          onClick={() => setIsOpen(true)}
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
        <Card>
          <div className="">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quod in quis architecto tempora natus, cupiditate voluptatem provident delectus. Sunt harum magnam nesciunt aliquam sit necessitatibus repellat sequi suscipit ipsum?</p>
          </div>
      </Card>
      <Modal  open={isOpen}
        onClose={() => setIsOpen(false)}>
          <div>
            <h1>Hello</h1>
          </div>
      </Modal>
      <Badge variant="warning" size="sm" className="w-1/2">
        <p>Test</p>
      </Badge>
      <Spinner/>
      <Avatar src="" alt="Name" name="AV" size="lg"/>
      </div>
  
       {/* сюда делаем как в visam разные боксы с определенной информацией */}
    </div>
  );


}