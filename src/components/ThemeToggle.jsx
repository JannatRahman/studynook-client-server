"use client";

import { useTheme } from "next-themes";
import {Sun, Moon} from "@gravity-ui/icons";
import {Switch} from "@heroui/react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}

  return (
    <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({isSelected}) => (
        <>
          <Switch.Control
            className={`h-[31px] w-[51px] bg-[#84B179] ${isSelected ? "bg-[#84B179]0 shadow-[#84B179]" : ""}`}
          >
            <Switch.Thumb
              className={`size-[27px] bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <Sun className="size-4 text-[#84B179]" />
                ) : (
                  <Moon className="size-4 text-[#84B179]" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
  );
}