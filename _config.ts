import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import katex from "lume/plugins/katex.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import windi_css from "lume/plugins/windi_css.ts";

const site = lume();

site.use(code_highlight());
site.use(katex());
site.use(multilanguage());
site.use(windi_css());

export default site;
