"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { CommandList } from "@/components/block/command-list";
import { PostFormValues, postSchema } from "@/schemas/template.post.schema";
import { createTemplate } from "@/services";
import { slugify } from "@/utils";

// Importamos el servicio

export default function Page() {
  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      name: "",
      description: "",
      repositoryUrl: "",
      isPublic: true,
      licenseType: "",
      dependencies: [
        {
          name: "",
          versions: [""],
          commands: {
            linux: [""],
            windows: [],
            macOS: [],
          },
        },
      ],
    },
  });

  const { register, handleSubmit, control, watch } = form;

  // Usamos createTemplate en lugar de fetch directo
  const onSubmit = async (data: PostFormValues) => {
    try {
      const template = await createTemplate(data);

      alert("Template creado!");
      window.location.href = `/template/${slugify(template.name)}`;
    } catch (error) {
      console.error("Error creando template:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 max-w-3xl mx-auto space-y-6 p-5"
    >
      <h1 className="text-2xl font-bold">Crear Post</h1>

      <div>
        <Label>Nombre</Label>
        <Input {...register("name")} />
      </div>

      <div>
        <Label>Descripción</Label>
        <Textarea {...register("description")} />
      </div>

      <div>
        <Label>Repository URL</Label>
        <Input {...register("repositoryUrl")} />
      </div>

      <div>
        <Label>Licencia</Label>
        <Input {...register("licenseType")} />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          checked={watch("isPublic")}
          onCheckedChange={(v) => form.setValue("isPublic", Boolean(v))}
        />
        <Label>Público</Label>
      </div>

      <hr />

      <h2 className="text-lg font-semibold">Dependencia</h2>

      <div>
        <Label>Nombre</Label>
        <Input {...register("dependencies.0.name")} />
      </div>

      <div>
        <Label>Versión</Label>
        <Input {...register("dependencies.0.versions.0")} />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <CommandList
          label="Linux"
          name="dependencies.0.commands.linux"
          control={control}
        />
        <CommandList
          label="Windows"
          name="dependencies.0.commands.windows"
          control={control}
        />
        <CommandList
          label="macOS"
          name="dependencies.0.commands.macOS"
          control={control}
        />
      </div>

      <Button type="submit">Enviar</Button>
    </form>
  );
}
