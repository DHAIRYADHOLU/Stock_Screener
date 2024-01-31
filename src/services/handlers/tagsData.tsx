import {TagsDataProps, TagsRenderingProps} from "src/common/models";

// Convert a string to an array, split by ","
export const tagStringToArr = (str: string): string[] =>
    str ? str.toUpperCase().split(",") : [];

// Convert a string array to a tags object to be rendered
export const arrToTags = (
    arr: string[],
    defaultList: TagsDataProps[]
): TagsRenderingProps => {
    const result = {} as TagsRenderingProps;
    // Generate Default Rendering Tags Data
    for (const index in defaultList) {
        const source = defaultList[index];
        if (source && source.tag_name) {
            const cn = source.tag_name_show.cn;
            const en = source.tag_name_show.en;
            result[source.tag_name.toUpperCase()] = {
                cn,
                en,
                selected: false,
            };
        }
    }
    // Indicate Selected Tags
    for (const itm of arr) if (result[itm]) result[itm].selected = true;
    return result;
};

// Convert a rendered tags object to a single string
export const selectedTagsToStr = (tags: TagsRenderingProps): string => {
    let str = "";
    for (const key in tags) if (tags[key].selected) str += key + ",";
    return str ? str.slice(0, str.length - 1) : "";
};

// Indicate No Tags are Selected from Given Tags
export const noTagSelected = (tags: TagsRenderingProps): boolean =>
    Object.keys(tags).every((key) => !tags[key].selected);
