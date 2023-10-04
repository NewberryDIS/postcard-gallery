import { Slot, component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const Right = component$(() => {
  return (
    <div
      class={css({
        background: "rgb(var(--bg-color-2))",
        position: "relative",
        display: "flex",
        flexFlow: "row wrap",
        gap: "8px",
        padding: "32px",
      })}
    >
      <Slot />
    </div>
  );
});
