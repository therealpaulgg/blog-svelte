// TODO the process function is broken, but why?????
import { process } from "$lib/markdown";
import readingTime from "reading-time";

import fs from "fs";
import dayjs from "dayjs";

export function get({ params }): { body: string } {
    const { name } = params;
    const posts = fs
        .readdirSync(`src/posts`)
        .filter((fileName) => /.+\.md$/.test(fileName))
        .map((fileName) => {
            const { metadata, content } = process(`src/posts/${fileName}`);
            return {
                metadata,
                slug: fileName.slice(0, -3),
                readingTime: readingTime(content).text
            };
        })
        .filter(
            (post) =>
                post.metadata.tags &&
                Array.isArray(post.metadata.tags) &&
                post.metadata.tags.find((t: string) => t === name)
        );
    // sort the posts by create date.
    posts.sort(
        (a, b) =>
            dayjs(b.metadata.createdAt, "MMM D, YYYY").valueOf() -
            dayjs(a.metadata.createdAt, "MMM D, YYYY").valueOf()
    );
    const body = JSON.stringify(posts);

    return {
        // body: JSON.stringify({a: "MY FUCKING DOT!"})
        body
    };
}
