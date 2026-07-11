"use client";

interface TextInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function TextInput({
  id,
  label,
  value,
  onChange,
  placeholder,
}: TextInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="label"
        style={{ display: "block", marginBottom: 8 }}
      >
        {label}
      </label>
      <input
        id={id}
        className="text-field"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
