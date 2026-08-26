"use client";

import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import Section from "@/components/ui/Section";
import Spinner from "@/components/ui/Spinner";
import { useState } from "react";

export default function UIPage() {

    
  const [isOpen, setIsOpen] = useState(false);
  
    return (
        <div className="mx-auto flex max-w-5xl flex-col gap-6 p-4"> 
            <Section title="Buttons">
                <div className="flex flex-col gap-3 md:flex-row">
                    <Button variant="primary">Primary</Button>
                    <Button variant="primaryOutline">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="secondaryOutline">Secondary</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="dangerOutline">Danger</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="successOutline">Success</Button>
                </div>
            </Section>
            <Section title="Inputs">
                <div className="flex flex-col gap-3 md:flex-row">
                    <Input
                        label="Enter your password (primary)"
                        type="text"
                        variant="primary"
                        size="sm"
                    />
                    <Input
                        label="Enter your password (secondary)"
                        type="text"
                        variant="secondary"
                        size="md"
                    />
                    <Input
                        label="Enter your password (danger)"
                        type="text"
                        variant="danger"
                        size="lg"
                    />
                </div>
            </Section>
            <Section title="Card">
                <Card>
                    <div className="">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quod in quis architecto tempora natus, cupiditate voluptatem provident delectus. Sunt harum magnam nesciunt aliquam sit necessitatibus repellat sequi suscipit ipsum?</p>
                    </div>
                </Card>
            </Section>
            <Section title="Modal">
                <Button
                    onClick={() => setIsOpen(true)}
                    variant="secondary"
                    size="sm"
                    className="w-1/2"
    
                >
                    Open modal
                </Button>
                <Modal  open={isOpen}
                    onClose={() => setIsOpen(false)}>
                    <div>
                        <h1>Hello</h1>
                    </div>
                </Modal>
            </Section>
            <Section title="Badge">
                <div className="flex flex-col gap-3 md:flex-row">
                    <Badge variant="default" size="sm" className="w-1/2">
                        <p>default</p>
                    </Badge>
                    <Badge variant="success" size="sm" className="w-1/2">
                        <p>success</p>
                    </Badge>
                    <Badge variant="danger" size="sm" className="w-1/2">
                        <p>danger</p>
                    </Badge>
                    <Badge variant="warning" size="sm" className="w-1/2">
                        <p>warning</p>
                    </Badge>
                </div>
              
            </Section>
            <Section title="Spinner">
                <Spinner size="sm"/>
            </Section>
            <Section title="Avatar">
                <Avatar src="" alt="Name" name="AV" size="lg"/>
            </Section>

      </div>
    )
}