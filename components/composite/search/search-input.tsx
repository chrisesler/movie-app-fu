"use client";

import { useSearch } from "@/hooks";
import { Search, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";

interface SearchInputProps extends InputProps {
  auto?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  auto = true,
  value,
  className,
  onChange,
  onKeyDown,
  name = "q",
  type = "text",
  placeholder = "Search...",
}) => {
  const { term, handleChange, handleKeyDown, clearSearch } = useSearch(auto);

  return (
    <div className="relative flex items-center ml-4 xs:flex-1 sm:flex-1 lg:flex-none">
      <Search className="absolute left-4 size-4 text-muted-foreground" />
      <Input
        name={name}
        type={type}
        value={value ?? term}
        placeholder={placeholder}
        className={cn("px-10 text-base", className)}
        onChange={onChange ?? handleChange}
        onKeyDown={onKeyDown ?? handleKeyDown}
      />
      {(term || value) && (
        <Button size="icon" variant="ghost" className="absolute right-0" onClick={clearSearch}>
          <XIcon className="size-3" />
        </Button>
      )}
    </div>
  );
};
