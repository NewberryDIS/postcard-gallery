import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { kv } from "@vercel/kv";
import { Card } from "~/components/Card/card";
import { Left } from "~/components/Left/left";
import { Right } from "~/components/Right/right";
import { css } from "~/styled-system/css";

export const holidays = [
  "Valentine's Day",
  "Easter",
  "Halloween",
  "Thanksgiving",
  "Christmas",
];

export function getWidth(w: number, h: number) {
  // w:h::x:300
  return Math.round((w * 300) / h);
}

export type GalleryData = {
  title: string;
  context: string;
  slug: string;
  galMEI: string;
  galRepreImageMEI: string;
  galRepreImageHeight: number;
  galRepreImageWidth: number;
  galRepreImageTitle: string;
  postcards?: PostcardData[];
};
export type PostcardData = {
  title: string;
  mei: string;
  repImage: string;
  repImageTitle: string;
  repImageWidth: number;
  repImageHeight: number;
};

const mei = "2KXJ8ZSA9MFDO";

export const useKvData = routeLoader$(async () => {
  const data = await kv.get(mei);
  // console.log(data);
  return data as GalleryData[];
});

export default component$(() => {
  const allGalleries = useKvData();
  const holidayGalleries = allGalleries.value.filter((f) => {
    // console.log(f.title);
    return holidays.includes(f.title);
  });
  const nonHolidayGalleries = allGalleries.value.filter(
    (f) => !holidays.includes(f.title) && f.title !== "Animated gifs",
  );
  return (
    <div
      class={css({
        display: "flex",
        "& .galleries": {
          display: "flex",
          flexFlow: "row wrap",
          gap: "8px",
          marginBottom: "64px",
        },
        "& .empty-tile": {
          width: "250px",
          height: "300px",
          display: "block",
          position: "relative",
        },
        "& .empty-tile h3": {
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          margin: 0,
          padding: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgb(var(--fg-color-2))",
          color: "rgb(var(--bg-color-1))",
          textAlign: "center",
          fontSize: "1.5rem",
          border: "1px solid rgb(var(--fg-color-1))",
        },
        "& .notile": {
          pointerEvents: "none",
          userSelect: "none",
        },
      })}
    >
      <Left>
        <h1 q:slot="title">Newberry Postcard Gallery</h1>

        <p q:slot="text-lg">
          The vintage postcard images featured here are free to use and reuse.
          The Newberry believes that this content is in the public domain, and
          makes these digitized copies available without requiring fees or
          permissions. For more information, see our{" "}
          <a
            href="https://www.newberry.org/policies#open-access"
            target="_blank"
            class="llines"
          >
            Open Access Policy
          </a>
          .
        </p>
        <p>
          The Newberry houses one of the largest public collections of postcards
          and related materials in the United States. Learn more at our{" "}
          <a
            href="https://www.newberry.org/collection/subjects/postcards"
            target="_blank"
            class="llines"
          >
            Postcards information page
          </a>
          , browse more than{" "}
          <a
            href="https://collections.newberry.org/asset-management?WS=SearchResults#/DamView&VBID=2KXJA4UET6ZH&PN=1&WS=SearchResults"
            target="_blank"
            class="llines"
          >
            50,000 digitized postcards
          </a>{" "}
          at Newberry Digital Collections, or explore the themed sets featured
          here.
        </p>
        <p>
          The Newberry needs your help! Please assist with making our postcard
          collections more accessible:{" "}
          <a
            href="https://www.zooniverse.org/projects/newberry/postcard-tag"
            target="_blank"
            class="llines"
          >
            Postcard Tag
          </a>
        </p>
        <p q:slot="text-sm">
          With gratitude to the Library of Congress for its{" "}
          <a
            href="https://www.loc.gov/free-to-use/"
            target="_blank"
            class="llines"
          >
            Free to Use and Reuse Sets
          </a>
          , from which this site is inspired.
        </p>
      </Left>
      <Right>
        <div class="galleries">
          {nonHolidayGalleries.map((item) => (
            <Card item={item} />
          ))}
          <a
            class="tile empty-tile"
            target="_blank"
            href="https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4UE6RXM&PN=1"
          >
            <h3>View even more postcards at Newberry Digital Collections</h3>
          </a>
        </div>

        <div class="galleries">
          <a href="/" class="htile tile notile" tabIndex={-1}>
            <img
              src="./madonna-holiday.gif"
              width={getWidth(498, 373)}
              height="300"
              alt="Madonna Ciccone dancing in a music video from the 1980s"
            />
          </a>
          {holidayGalleries.map((item) => (
            <Card item={item} holidays />
          ))}
        </div>
      </Right>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Newberry Library Postcard Galleries",
  meta: [
    {
      name: "description",
      content:
        "A showcase of curated postcard galleries from the digital collections of the Newberry Library",
    },
  ],
};
