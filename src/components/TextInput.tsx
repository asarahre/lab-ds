import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

export function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded bg-gray-800  w-full focus:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

// export function TextInputIcon() {}

export function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className={clsx(
        "flex-1 bg-transparent text-xs placeholder:text-gray-400 outline-none"
      )}
      {...props}
    />
  );
}
export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
};
