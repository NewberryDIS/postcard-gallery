import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { kv } from "@vercel/kv";
import { css } from "~/styled-system/css";
import { GalleryData } from "~/routes";
import { Left } from "~/components/Left/left";
import { Right } from "~/components/Right/right";
import { Gallery } from "~/components/Gallery/gallery";

export const useKvData = routeLoader$(async (requestEvent) => {
  const cat = requestEvent.params.cat;
  const data = await kv.get(cat);
  // console.log(data);
  return data as GalleryData;
});
export default component$(() => {
  const kvData = useKvData();
  const pageData = kvData.value;
  return (
    <div
      class={css({
        display: "flex",
      })}
    >
      <Left>
        <button onClick$={() => console.log(pageData.postcards)}>asdfas</button>
        <h1 q:slot="title">{pageData.context}</h1>
        <p q:slot="text-lg">
          Featured here are some staff favorites from the Newberry’s collection.
          View more free to use and reuse images at our{" "}
          <a
            href="https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4UE6RXM&PN=1"
            target="_blank"
            class="llines"
          >
            Postcard Gallery
          </a>
          .
        </p>
        <p class="text-base">
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
      </Left>
      <Right>
        {pageData.postcards ? <Gallery data={pageData.postcards} /> : ""}
      </Right>
    </div>
  );
});
