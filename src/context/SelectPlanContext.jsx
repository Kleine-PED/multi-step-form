import { createContext, useState } from "react";
import { advancedIcon, arcadeIcon, proIcon } from "../assets/images/index.js";

const SelectPlanContext = createContext();

export const SelectPlansProvider = ({ children }) => {
  const [monthlyPlans, setMonthlyPlans] = useState([
    { id: 1, img: arcadeIcon, title: "Arcade", price: 9 },
    {
      id: 2,
      img: advancedIcon,
      title: "Advanced",
      price: 12,
    },
    {
      id: 3,
      img: proIcon,
      title: "Pro",
      price: 15,
    },
  ]);

  const [yearlyPlans, setYearlyPlans] = useState([
    {
      id: 4,
      img: arcadeIcon,
      title: "Arcade",
      price: 90,
      extra: "2 months free",
    },
    {
      id: 5,
      img: advancedIcon,
      title: "Advanced",
      price: 120,
      extra: "2 months free",
    },
    {
      id: 6,
      img: proIcon,
      title: "Pro",
      price: 150,
      extra: "2 months free",
    },
  ]);

  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState({
    title: "",
    price: null,
  });

  const [selectedYearlyPlan, setSelectedYearlyPlan] = useState({
    title: "",
    price: null,
  });
  return (
    <SelectPlanContext.Provider
      value={{
        monthlyPlans,
        setMonthlyPlans,
        yearlyPlans,
        setYearlyPlans,
        selectedMonthlyPlan,
        setSelectedMonthlyPlan,
        selectedYearlyPlan,
        setSelectedYearlyPlan,
      }}
    >
      {children}
    </SelectPlanContext.Provider>
  );
};

export default SelectPlanContext;
