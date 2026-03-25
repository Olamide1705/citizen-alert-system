"use client";

import { useState } from "react";
import { Plus, UserRoundPlus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Contact = {
  id: number;
  name: string;
  phone: string;
};

type EmergencyContactsStepProps = {
  defaultValues?: Contact[];
  onBack?: () => void;
  onNext?: (contacts: Contact[]) => void;
};

export default function EmergencyContactsStep({
  defaultValues = [],
  onBack,
  onNext,
}: EmergencyContactsStepProps) {
  const [contacts, setContacts] = useState<Contact[]>(
    defaultValues.length
      ? defaultValues
      : [
          { id: 1, name: "Amina Ibrahim", phone: "+234 801 234 5678" },
          { id: 2, name: "Chukwu Obi", phone: "+234 801 234 5678" },
        ],
  );

  const [showManualForm, setShowManualForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const handleAddManual = () => {
    if (!name.trim() || !phone.trim()) return;

    const newContact: Contact = {
      id: Date.now(),
      name: name.trim(),
      phone: phone.trim(),
    };

    setContacts((prev) => [...prev, newContact]);
    setName("");
    setPhone("");
    setShowManualForm(false);
  };

  const handleRemove = (id: number) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleContinue = () => {
    onNext?.(contacts);
  };

  return (
    <div className="w-full max-w-xl space-y-5">
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">Step 2 of 3</p>
        <h1 className="text-3xl font-bold text-white lg:text-4xl">
          Add Trusted Contacts
        </h1>
        <p className="text-sm text-white/60 lg:text-base">
          These people will receive alerts when you trigger an emergency.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          type="button"
          onClick={() => {
            setShowManualForm(false);
          }}
          className="h-12 rounded-xl bg-[#182033] text-white hover:bg-[#1d2740]"
        >
          <UserRoundPlus className="mr-2 h-4 w-4 text-primary" />
          From Contacts
        </Button>

        <Button
          type="button"
          onClick={() => setShowManualForm((prev) => !prev)}
          className="h-12 rounded-xl bg-[#182033] text-white hover:bg-[#1d2740]"
        >
          <Plus className="mr-2 h-4 w-4 text-primary" />
          Add Manually
        </Button>
      </div>

      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <Card
            key={contact.id}
            className="border-none bg-[#182033] shadow-none"
          >
            <CardContent className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white ${
                    index % 2 === 0 ? "bg-purple-500" : "bg-lime-500"
                  }`}
                >
                  {getInitials(contact.name)}
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    {contact.name}
                  </p>
                  <p className="text-xs text-white/45">{contact.phone}</p>
                </div>
              </div>

              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={() => handleRemove(contact.id)}
                className="h-10 w-10 rounded-xl bg-[#2a2230] text-primary hover:bg-[#35283b] hover:text-primary"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {showManualForm && (
        <Card className="border-none bg-[#182033] shadow-none">
          <CardContent className="space-y-4 px-4 py-4">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="h-12 border-none bg-[#0B0F19] text-white placeholder:text-white/40 focus-visible:ring-1 focus-visible:ring-primary"
            />

            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              className="h-12 border-none bg-[#0B0F19] text-white placeholder:text-white/40 focus-visible:ring-1 focus-visible:ring-primary"
            />

            <div className="flex gap-3">
              <Button
                type="button"
                onClick={handleAddManual}
                className="h-11 flex-1 bg-primary text-white hover:bg-[#b7281b]"
              >
                Add
              </Button>

              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  setShowManualForm(false);
                  setName("");
                  setPhone("");
                }}
                className="h-11 px-5 text-white/60 hover:bg-white/5 hover:text-white"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="h-12 flex-1 border-white/10 bg-transparent text-white hover:bg-white/5 hover:text-white"
        >
          Back
        </Button>

        <Button
          type="button"
          onClick={handleContinue}
          className="h-12 flex-1 bg-primary text-white hover:bg-[#b7281b]"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
