import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface CategoryChangeProps {
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ onCategoryChange }: CategoryChangeProps) => {
  const categories = [
    "all",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <div className="flex items-center justify-center mx-4">
      <h3 className="font-bold text-lg mb-2 flex-shrink-0">
        Filter By Category
      </h3>
      <Select
        onValueChange={(value) =>
          onCategoryChange(value === "all" ? "" : value)
        }
        defaultValue="all"
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
