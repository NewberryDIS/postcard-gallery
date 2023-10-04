import { component$ } from "@builder.io/qwik";
import type { GalleryData} from "~/routes";
import { getWidth, holidays } from "~/routes";
import { css } from "~/styled-system/css";

export interface CardProps {
  item: GalleryData;
  holidays?: boolean;
}

export const Card = component$<CardProps>((props) => {
  const { item } = props;
  return (
    <div
      class={css({
        "& .tile": {
          position: "relative",
          height: "300px",
          display: "inline-block",
          border: "1px solid rgb(var(--fg-color-1))",
        },

        "& .tile h3": {
          position: "absolute",
          fontSize: "1.5rem",
          left: 0,
          bottom: 0,
          right: 0,
          margin: 0,
          padding: "8px",
          display: "flex",
          color: "rgb(var(--bg-color-1))",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        },
        "& .nhgals, .hgals, .gal": {
          margin: "32px",
        },
        "& .nhtile.tile h3": {
          background: "rgb(var(--fg-color-1))",
        },
        "& .htile h3": {
          background: "rgb(var(--park-green))",
        },
      })}
    >
      <a
        href={`/${item.slug}`}
        class={`tile ${holidays.includes(item.title) ? "htile" : "nhtile"}`}
        key={item.galMEI}
      >
        <img
          width={getWidth(item.galRepreImageWidth, item.galRepreImageHeight)}
          height="300"
          src={`https://collections.newberry.org/iiif3/image/${item.galRepreImageMEI}/full/,300/0/default.jpg`}
          alt={`a ${item.title} postcard`}
        />
        <h3>{item.title}</h3>
      </a>
    </div>
  );
});
