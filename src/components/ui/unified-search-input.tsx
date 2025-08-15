"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  X,
  Filter,
  SortAsc,
  SortDesc,
  Loader2,
  Command,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface UnifiedSearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onClear?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  showClearButton?: boolean;
  showSearchButton?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "ghost" | "outline";
  autoFocus?: boolean;
  debounceMs?: number;
  resultCount?: number;
  showResultCount?: boolean;
}

export function UnifiedSearchInput({
  placeholder = "Search...",
  value = "",
  onChange,
  onSearch,
  onClear,
  className = "",
  disabled = false,
  loading = false,
  showClearButton = true,
  showSearchButton = false,
  size = "md",
  variant = "default",
  autoFocus = false,
  debounceMs = 300,
  resultCount,
  showResultCount = false,
}: UnifiedSearchInputProps) {
  const [localValue, setLocalValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Sync with external value
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Auto focus
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Debounced search
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      if (onChange && localValue !== value) {
        onChange(localValue);
      }
    }, debounceMs);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [localValue, onChange, value, debounceMs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(localValue);
    }
  };

  const handleClear = () => {
    setLocalValue("");
    if (onChange) {
      onChange("");
    }
    if (onClear) {
      onClear();
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
    if (e.key === "Escape") {
      handleClear();
    }
  };

  // Size variants
  const sizeClasses = {
    sm: "h-8 text-sm",
    md: "h-10 text-base",
    lg: "h-12 text-lg",
  };

  // Padding based on buttons
  const getPaddingClasses = () => {
    let leftPadding = "pl-10"; // For search icon
    let rightPadding = "pr-4";

    if (showClearButton && localValue) {
      rightPadding = showSearchButton ? "pr-20" : "pr-10";
    } else if (showSearchButton) {
      rightPadding = "pr-12";
    }

    return `${leftPadding} ${rightPadding}`;
  };

  // Variant styles
  const variantClasses = {
    default:
      "bg-[var(--input-background)] border-[var(--input-border-color)] text-[var(--input-text)]",
    ghost: "border-transparent bg-transparent hover:bg-[var(--card-hover)]",
    outline: "border-[var(--card-border-color)] bg-transparent",
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* Search Input */}
      <div className="relative">
        {/* Search Icon */}
        <Search
          className={cn(
            "absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--paragraph)] transition-colors",
            size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",
            isFocused && "text-[var(--link-color)]",
          )}
        />

        {/* Input Field */}
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={localValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled || loading}
          className={cn(
            sizeClasses[size],
            getPaddingClasses(),
            variantClasses[variant],
            "transition-all duration-200",
            isFocused && "ring-2 ring-[var(--link-color)] ring-opacity-20",
            loading && "cursor-wait",
          )}
        />

        {/* Right Side Buttons */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          {/* Loading Spinner */}
          {loading && (
            <Loader2
              className={cn(
                "animate-spin text-[var(--paragraph)]",
                size === "sm"
                  ? "h-3 w-3"
                  : size === "lg"
                    ? "h-5 w-5"
                    : "h-4 w-4",
              )}
            />
          )}

          {/* Clear Button */}
          <AnimatePresence>
            {showClearButton && localValue && !loading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleClear}
                  disabled={disabled}
                  className={cn(
                    "h-6 w-6 p-0 hover:bg-[var(--card-hover)] rounded-full",
                    size === "sm" && "h-5 w-5",
                    size === "lg" && "h-7 w-7",
                  )}
                  aria-label="Clear search"
                >
                  <X
                    className={cn(
                      size === "sm"
                        ? "h-3 w-3"
                        : size === "lg"
                          ? "h-4 w-4"
                          : "h-3 w-3",
                    )}
                  />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Search Button */}
          {showSearchButton && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleSearch}
              disabled={disabled || loading || !localValue.trim()}
              className={cn(
                "h-6 w-6 p-0 hover:bg-[var(--card-hover)] rounded-full",
                size === "sm" && "h-5 w-5",
                size === "lg" && "h-7 w-7",
              )}
              aria-label="Search"
            >
              <Command
                className={cn(
                  size === "sm"
                    ? "h-3 w-3"
                    : size === "lg"
                      ? "h-4 w-4"
                      : "h-3 w-3",
                )}
              />
            </Button>
          )}
        </div>
      </div>

      {/* Result Count */}
      {showResultCount && resultCount !== undefined && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 mt-1 z-10"
        >
          <Badge variant="secondary" className="text-xs">
            {resultCount} {resultCount === 1 ? "result" : "results"}
          </Badge>
        </motion.div>
      )}

      {/* Keyboard Shortcuts Hint */}
      {isFocused && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full right-0 mt-1 z-10"
        >
          <div className="flex items-center gap-1 text-xs text-[var(--paragraph)] bg-[var(--card-background)] border border-[var(--card-border-color)] rounded px-2 py-1">
            <kbd className="px-1 py-0.5 bg-[var(--card-hover)] rounded text-xs">
              Enter
            </kbd>
            <span>to search</span>
            <kbd className="px-1 py-0.5 bg-[var(--card-hover)] rounded text-xs ml-2">
              Esc
            </kbd>
            <span>to clear</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Export variants for easy use
export const SearchInput = (props: UnifiedSearchInputProps) => (
  <UnifiedSearchInput {...props} />
);

export const CompactSearchInput = (props: UnifiedSearchInputProps) => (
  <UnifiedSearchInput {...props} size="sm" variant="ghost" />
);

export const LargeSearchInput = (props: UnifiedSearchInputProps) => (
  <UnifiedSearchInput {...props} size="lg" showSearchButton />
);
