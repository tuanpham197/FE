"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UnifiedSearchInput } from "@/components/ui/unified-search-input";
import { Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  onFilterChange?: (filters: Record<string, any>) => void;
  filters?: Array<{
    key: string;
    label: string;
    type: "select" | "multiselect" | "date" | "range";
    options?: Array<{ value: string; label: string }>;
  }>;
  className?: string;
  showFilters?: boolean;
  debounceMs?: number;
}

export function SearchBar({
  placeholder = "Search...",
  onSearch,
  onFilterChange,
  filters = [],
  className = "",
  showFilters = true,
  debounceMs = 300,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [query, onSearch, debounceMs]);

  // Handle filter changes
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(activeFilters);
    }
  }, [activeFilters, onFilterChange]);

  const handleFilterChange = (key: string, value: any) => {
    setActiveFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const removeFilter = (key: string) => {
    setActiveFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({});
  };

  const clearSearch = () => {
    setQuery("");
  };

  const activeFilterCount = Object.keys(activeFilters).filter(
    (key) => activeFilters[key] !== undefined && activeFilters[key] !== "",
  ).length;

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Unified Search Input */}
      <div className="flex items-center gap-2">
        <UnifiedSearchInput
          placeholder={placeholder}
          value={query}
          onChange={setQuery}
          onSearch={onSearch}
          className="flex-1"
        />

        {showFilters && filters.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilterPanel(!showFilterPanel)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <Badge variant="secondary" className="ml-1">
                {activeFilterCount}
              </Badge>
            )}
          </Button>
        )}
      </div>

      {/* Filter Panel */}
      {showFilters && filters.length > 0 && showFilterPanel && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border border-[var(--card-border-color)] rounded-[12px] p-4 bg-[var(--card-background)]"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Filters</h4>
              {activeFilterCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-xs"
                >
                  Clear All
                </Button>
              )}
            </div>

            {filters.map((filter) => (
              <div key={filter.key} className="space-y-2">
                <label className="text-sm font-medium">{filter.label}</label>

                {filter.type === "select" && (
                  <select
                    value={activeFilters[filter.key] || ""}
                    onChange={(e) =>
                      handleFilterChange(filter.key, e.target.value)
                    }
                    className="w-full p-2 border rounded-md bg-[var(--input-background)] border-[var(--input-border-color)]"
                  >
                    <option value="">All</option>
                    {filter.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}

                {filter.type === "multiselect" && (
                  <div className="space-y-1">
                    {filter.options?.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          checked={(activeFilters[filter.key] || []).includes(
                            option.value,
                          )}
                          onChange={(e) => {
                            const currentValues =
                              activeFilters[filter.key] || [];
                            if (e.target.checked) {
                              handleFilterChange(filter.key, [
                                ...currentValues,
                                option.value,
                              ]);
                            } else {
                              handleFilterChange(
                                filter.key,
                                currentValues.filter(
                                  (v: string) => v !== option.value,
                                ),
                              );
                            }
                          }}
                          className="rounded"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                )}

                {filter.type === "date" && (
                  <Input
                    type="date"
                    value={activeFilters[filter.key] || ""}
                    onChange={(e) =>
                      handleFilterChange(filter.key, e.target.value)
                    }
                    className="bg-[var(--input-background)] border-[var(--input-border-color)]"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Active Filters */}
      <AnimatePresence>
        {activeFilterCount > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap gap-2"
          >
            {Object.entries(activeFilters).map(([key, value]) => {
              if (!value || (Array.isArray(value) && value.length === 0))
                return null;

              const filter = filters.find((f) => f.key === key);
              if (!filter) return null;

              const displayValue = Array.isArray(value)
                ? value.join(", ")
                : filter.options?.find((opt) => opt.value === value)?.label ||
                  value;

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 pr-1"
                  >
                    <span className="text-xs">
                      {filter.label}: {displayValue}
                    </span>
                    <button
                      onClick={() => removeFilter(key)}
                      className="ml-1 hover:bg-[var(--card-hover)] rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
