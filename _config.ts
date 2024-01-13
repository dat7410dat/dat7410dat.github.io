import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import katex from "lume/plugins/katex.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import unocss from "lume/plugins/unocss.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
    src: "./src",
});

site.use(code_highlight());
site.use(katex());
site.use(multilanguage());
site.use(unocss({ reset: "tailwind" }));
site.use(metas());

export default site;
