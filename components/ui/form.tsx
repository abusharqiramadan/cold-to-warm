"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
  formItemId: string
  formDescriptionId: string
  formMessageId: string
}

const FormFieldContext = React.createContext<FormFieldContextValue | undefined>(undefined)
const FormItemContext = React.createContext<string | undefined>(undefined)

function FormField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({ control, name, render }: ControllerProps<TFieldValues, TName>) {
  const fieldId = React.useId()

  const contextValue = React.useMemo(
    () => ({
      name,
      formItemId: `${fieldId}-form-item`,
      formDescriptionId: `${fieldId}-form-item-description`,
      formMessageId: `${fieldId}-form-item-message`,
    }),
    [name, fieldId]
  )

  return (
    <FormFieldContext.Provider value={contextValue}>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState, formState }) => (
          <FormItemContext.Provider value={contextValue.formItemId}>
            {render({ field, fieldState, formState })}
          </FormItemContext.Provider>
        )}
      />
    </FormFieldContext.Provider>
  )
}

function useFormField() {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const fieldState = getFieldState(fieldContext.name, formState)

  return {
    id: itemContext ?? fieldContext.formItemId,
    name: fieldContext.name,
    formItemId: fieldContext.formItemId,
    formDescriptionId: fieldContext.formDescriptionId,
    formMessageId: fieldContext.formMessageId,
    fieldState,
  }
}

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { formItemId } = useFormField()

    return (
      <FormItemContext.Provider value={formItemId}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    )
  }
)
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { formItemId, fieldState } = useFormField()

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        "text-sm font-medium text-slate-200",
        fieldState.error && "text-amber-300",
        className
      )}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ className, ...props }, ref) => {
  const { formItemId, formDescriptionId, formMessageId, fieldState } = useFormField()

  const describedBy = [
    formDescriptionId,
    fieldState.error ? formMessageId : undefined,
  ]
    .filter(Boolean)
    .join(" ") || undefined

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={describedBy}
      aria-invalid={Boolean(fieldState.error)}
      className={className}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-slate-400", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { formMessageId, fieldState } = useFormField()
  const body = children ?? fieldState.error?.message

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-amber-300", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
}
