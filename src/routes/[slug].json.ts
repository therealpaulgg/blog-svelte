import { process } from "$lib/markdown";
import readingTime from "reading-time";

export function get({ params }): { body: string } {
    const { slug } = params;

    const { metadata, content } = process(`src/posts/${slug}.md`);

    const body = JSON.stringify({ metadata, content, readingTime: readingTime(content).text });

    return {
        body
    };
}
