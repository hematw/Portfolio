import about from "./content/about.json";
import experience from "./content/experience.json";
import hero from "./content/hero.json";
import projects from "./content/projects.json";
import services from "./content/services.json";
import site from "./content/site.json";

export function stringsOf(list = []) {
  return list
    .map((item) => {
      if (typeof item === "string") return item;
      return item.tag || item.skill || item.label || item.title || "";
    })
    .filter(Boolean);
}

export { about, experience, hero, projects, services, site };
