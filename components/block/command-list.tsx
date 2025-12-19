/* eslint-disable @typescript-eslint/no-explicit-any */
// components/command-list.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Control, useFieldArray } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  control: Control<any>;
}

export function CommandList({ label, name, control }: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2">
          <Input {...control.register(`${name}.${index}`)} />
          <Button
            type="button"
            variant="destructive"
            onClick={() => remove(index)}
          >
            –
          </Button>
        </div>
      ))}

      <Button type="button" variant="outline" onClick={() => append("")}>
        + Agregar comando
      </Button>
    </div>
  );
}
