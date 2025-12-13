"use client"
import { useAuth } from "@/hooks/useAuth";
import { loginSchema } from "@/schemas";
import { Login } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { Spinner } from "../ui/spinner";

export const LoginForm = () => {
  const [showPass, setShowPass] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: Login) => {
    setLoading(true);
    try {
      await login(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.log(String(error));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="max-w-100 mx-auto mt-20" onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Iniciar sesión</FieldLegend>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Correo</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="Correo electrónico"
                {...register("email")}
                required
              />
              {errors.email && (
                <FieldDescription className="text-red-500 text-sm">
                  {errors.email.message}
                </FieldDescription>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Contraseña</FieldLabel>
              <Input
                id="password"
                type={showPass ? "text" : "password"}
                placeholder="Contraseña"
                {...register("password")}
                required
              />
              {errors.password && (
                <FieldDescription className="text-red-500 text-sm">
                  {errors.password.message}
                </FieldDescription>
              )}
            </Field>
          </FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              onCheckedChange={(checked) => setShowPass(Boolean(checked))}
              id="show-password"
              checked={showPass}
            />
            <FieldLabel htmlFor="show-password" className="font-normal">
              Mostrar contraseñas
            </FieldLabel>
          </Field>
        </FieldSet>
        <FieldSet>
          <Button type="submit" disabled={loading}>
            {loading && <Spinner />}
            Iniciar sesión
          </Button>
          <FieldDescription className="flex flex-col justify-center items-center gap-3">
            ¿No tienes una cuenta?
            <Button variant="outline" className="no-underline!" asChild>
              <Link href="/auth/register">Registrate</Link>
            </Button>
          </FieldDescription>
        </FieldSet>
      </FieldGroup>
    </form>
  );
}
