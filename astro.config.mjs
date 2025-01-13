// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

import mdx from "@astrojs/mdx";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
    env:{
        schema:{
            CONTENTFUL_SPACE_ID: envField.string({context:"server",access:"secret",optional:false}),
            CONTENTFUL_DELIVERY_TOKEN:envField.string({context:"server",access:"secret",optional:false}),
            CONTENTFUL_PREVIEW_TOKEN:envField.string({context:"server",access:"secret",optional:false}),
        }
    },
    integrations: [tailwind(), alpinejs(), mdx(), (await import("@playform/inline")).default({
        Critters: true,
		}), db()],
    output: "static",
    devToolbar: {
        enabled: false,
    },
    experimental: {
        svg: true,
    },
});