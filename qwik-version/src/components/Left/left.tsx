import { Slot, component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import NewberryLogo from "~/media/NewberryLogo_flame.png?jsx";

export const Left = component$(() => {
  return (
    <div
      class={css({
        // position: "relative",
        boxSizing: "border-box",
        height: "100vh",
        position: "sticky",
        top: "0",
        padding: "16px",
        flexBasis: "30vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        background: "rgb(var(--bg-color-1))",
        minHeight: "100vh",
        "& .text-lg": {
          fontSize: "1.25rem",
        },
        "& .text-sm": {
          fontSize: "0.9rem",
        },
        "& h1": {
          fontSize: "10vh",
          lineHeight: "10vh",
          margin: "0",
        },
        "& section": {
          paddingBlock: "8px",
        },
      })}
    >
      <div class={css({ position: "absolute", top: "16px", left: "16px" })}>
        <NewberryLogo />
      </div>
      <h1>
        <Slot name="title" />
      </h1>
      <section class="text-lg">
        <Slot name="text-lg" />
      </section>
      <section class="text-base">
        <Slot />
      </section>
      <section class="text-sm">
        <Slot name="text-sm" />
      </section>
    </div>
  );
});
