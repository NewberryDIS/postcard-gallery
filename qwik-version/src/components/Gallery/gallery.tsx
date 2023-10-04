import { component$, useVisibleTask$ } from "@builder.io/qwik";
import BiggerPicture from "bigger-picture/vanilla";
import "bigger-picture/css";
import { PostcardData, getWidth } from "~/routes";
import { css } from "~/styled-system/css";

export interface GalleryProps {
  data: PostcardData[];
}

export const Gallery = component$<GalleryProps>((props) => {
  useVisibleTask$(() => {
    const bp = BiggerPicture({
      target: document.body,
    });
    const imageLinks: NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll("#images > a");
    for (const link of imageLinks) {
      link.addEventListener("click", openGallery);
    }

    function openGallery(e: MouseEvent) {
      console.log(e.currentTarget);
      e.preventDefault();
      if (e.currentTarget !== null) {
        bp.open({
          intro: "fadeup",
          items: imageLinks,
          el: e.currentTarget,
        });
      }
    }
  });
  return (
    <div
      id="images"
      class={css({
        width: "90%",
        margin: "32px",
        display: "flex",
        flexFlow: "row wrap",
        gap: "8px",
        position: "relative",
        "& a": {
          position: "relative",
          display: "inline-block",
          border: "1px solid rgb(var(--fg-color-1))",
        },
        "& a, img": {
          height: "300px",
        },
      })}
    >
      {props.data.map((item) => (
        <a
          href={`https://collections.newberry.org/IIIF3/Image/${item.repImage}/full/max/0/default.jpg`}
          key={item.repImage}
          data-img={`https://collections.newberry.org/IIIF3/Image/${
            item.repImage
          }/full/,${Math.min(
            item.repImageHeight,
            600,
          )}/0/default.jpg 600w, https://collections.newberry.org/IIIF3/Image/${
            item.repImage
          }/full/,${Math.min(
            item.repImageHeight,
            1000,
          )}/0/default.jpg 1000w, https://collections.newberry.org/IIIF3/Image/${
            item.repImage
          }/full/max/0/default.jpg 2500w`}
          data-thumb={`https://collections.newberry.org/IIIF3/Image/${item.repImage}/full/max/0/default.jpg`}
          data-width={item.repImageWidth}
          data-height={item.repImageHeight}
          data-caption={`${item.title} | View at <a href="https://collections.newberry.org/asset-management/${item.repImage}" target="_blank">Newberry Digital Collections</a>`}
        >
          <img
            src={`https://collections.newberry.org/IIIF3/Image/${item.repImage}/full/,400/0/default.jpg`}
            alt={item.title}
            width={getWidth(item.repImageWidth, item.repImageHeight)}
            height="300"
          />
        </a>
      ))}
    </div>
  );
});
