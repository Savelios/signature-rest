import React, { useEffect, useState } from "react";
import CategoryData from "../../../dto/data/category-data";
import { CategoryService } from "../../../services/CategoriesService";
import "./dish-categories.css";

interface DishCategoryProps {
  category: CategoryData[];
  onCategoryClick: (index: number) => void;
}

export function DishCategories({
  category,
  onCategoryClick,
}: DishCategoryProps) {
  const categoryService = new CategoryService();
  const [activeIndex, setActiveIndex] = useState(0);
  const [categories, setCategories] = useState<CategoryData[]>([]);

  useEffect(() => {
    const fetchCategoriesFromBackend = async () => {
      try {
        const result = await categoryService.getAll();
        setCategories(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoriesFromBackend();
    setActiveIndex(1);
    onCategoryClick(1);
  }, []);

  const handleIndicatorClick = (id: number) => {
    setActiveIndex(id);
    onCategoryClick(id);
    console.log("Clicked category id number is: ", id);
  };

  const renderCategories = () => {
    return categories.map((data, index) => {
      const isActive = data.id === activeIndex;

      return (
        <div
          key={data.id}
          className={`dish-category__indicator-container ${isActive ? "active-dish__indicator" : ""
            }`}
          onClick={() => handleIndicatorClick(data.id)}
        >
          <div className="dish__category-container">
            <div className="dish__category-name">{data.name}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="dish-categories__container">{renderCategories()}</div>
  );
}
