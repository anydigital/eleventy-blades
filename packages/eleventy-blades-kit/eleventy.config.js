import baseConfig from "@anyblades/eleventy-blades/base-config";

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("../");
  eleventyConfig.setIncludesDirectory(".blades/_includes/");
  eleventyConfig.setOutputDirectory("../_site/");

  baseConfig(eleventyConfig);
}
