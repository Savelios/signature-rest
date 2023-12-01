import React, { useEffect, useRef, useState } from "react";
import leftPlateImg from "../../../assets/left-plate.png";
import rightPlateImg from "../../../assets/right-plate.png";
import DishData from "../../../dto/data/dish-data";
import { DishService } from "../../../services/DishService";
import CategoryData from "../../../dto/data/category-data";

import "./dish-list.css";
import { DishView } from "../../views/dish/dish-view";
import { DishCategories } from "../../categories/dish/dish-categories";
import Loader from "../../../ui/loader/loader";

export function DishList() {
  const dishService = new DishService();

  const divRef = useRef<HTMLDivElement>(null);

  const [isScrolling, setIsScrolling] = useState(false);

  const [dish, setDish] = useState<DishData[]>([]);

  const [dishes, setDishes] = useState<DishData[]>([]);

  const [category, setCategory] = useState<CategoryData[]>([]);

  const [selectedCategory, setSelectedCategory] = useState(0);



  useEffect(() => {
    const fetchDishFromBackend = async () => {
      try {
        if (selectedCategory !== 0) {
          const result = await dishService.getByCategory(selectedCategory);
          console.log("Результат запроса блюд:", result);
          if (Array.isArray(result)) {
            setDish(result);
          } else {
            console.error("Результат не содержит массив блюд:", result);
          }
        }

      } catch (error) {
        console.error("Ошибка при получении блюд:", error);
      }
    };

    fetchDishFromBackend();
  }, [selectedCategory]);


  // useEffect(() => {
  //   const fetchDishesFromBackend = async () => {
  //     try {
  //       const result = await dishService.getAll();
  //       setDish(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchDishesFromBackend();
  // }, []);

  const scroll = (scrollAmount: number) => {
    if (!isScrolling && divRef.current) {
      setIsScrolling(true);
      const currentScrollLeft = divRef.current.scrollLeft;
      // const targetScrollLeft = currentScrollLeft + scrollAmount;
      const animationTime = 700;
      const framesPerSecond = 60;
      const totalFrames = (animationTime / 1000) * framesPerSecond;
      let currentFrame = 0;

      const scrollInterval = setInterval(() => {
        currentFrame++;
        if (currentFrame <= totalFrames) {
          const progress = currentFrame / totalFrames;
          divRef.current!.scrollLeft =
            currentScrollLeft + progress * scrollAmount;
        } else {
          clearInterval(scrollInterval);
          setIsScrolling(false);
        }
      }, 1000 / framesPerSecond);
    }
  };

  const scrollLeft = () => {
    if (divRef.current) {
      scroll(-divRef.current.offsetWidth);
    }
  };

  const scrollRight = () => {
    if (divRef.current) {
      scroll(divRef.current.offsetWidth);
    }
  };

  const handleCategoryChange = async (index: number) => {
    if (index === 0) {
      setSelectedCategory(0);
    } else {
      setSelectedCategory(index);
      console.log("Selected category index:", index);
    }
  };

  return (
    <>

      <div className="dish__list_container">
        <DishCategories
          category={category}
          onCategoryClick={handleCategoryChange}
        />
        <img
          src={leftPlateImg}
          alt=""
          className="left-plate"
          id="plate"
          onClick={scrollLeft}
        />
        <div
          id="dishes-list"
          className="dish__list_items-container"
          ref={divRef}
          onScroll={() => setIsScrolling(true)}
        >
          {dish.map((dish) => (
            <>
              {/* {dishes.length > 0 && ( */}
                <DishView
                  key={dish.id}
                  dish={dish}
                  isActive={false}
                  selectedCategory={selectedCategory}
                />
              {/* )} */}
            </>
          ))}
        </div>
        <img
          src={rightPlateImg}
          alt=""
          className="right-plate"
          id="plate"
          onClick={scrollRight}
        />
      </div>
      {/* {dish.length === 0 && <Loader />} */}
      <div style={{ color: "white" }}>{dish.length}</div>
    </>
  );
}