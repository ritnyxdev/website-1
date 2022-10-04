import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";

await blog({
    title: "Usmon Hamidulloh",
    author: "Usmon Hamidulloh",
    // avatar: "./jabami.jpeg",
    avatarClass: "rounded-full",
    links: [
        { title: "Email", url: "mailto:usmon.hamidulloh@gmail.com" },
        { title: "GitHub", url: "https://github.com/UsmonHamidulloh" },
        { title: "Telegram", url: "https://t.me/UsmonHamidulloh" },
        { title: "Twitter", url: "https://twitter.com/UsmonHamidulloh" },
    ],
    background: "#f9f9f9",
});
